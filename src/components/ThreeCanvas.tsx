import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  scrollProgress?: number;
  className?: string;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, velocity: 0 });
  const scrollRef = useRef({ current: 0, target: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    // Deep obsidian fog to seamlessly blend 3D with page background #08080a
    scene.fog = new THREE.FogExp2(0x08080a, 0.045);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 2. Lighting - Sovereign titanium and cool silver tones, NO neon/purple
    const ambientLight = new THREE.AmbientLight(0xd4d8e0, 0.45);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xf0f3f8, 1.8);
    keyLight.position.set(10, 15, 12);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x828896, 1.2);
    rimLight.position.set(-12, -8, -10);
    scene.add(rimLight);

    // 3. Mathematical Centerpiece: Neural Data Lattice (Titanium Geodesic Nucleus)
    const nucleusGroup = new THREE.Group();
    scene.add(nucleusGroup);

    // Geodesic titanium wireframe outer shell
    const outerGeo = new THREE.IcosahedronGeometry(3.6, 2);
    const wireframeGeo = new THREE.WireframeGeometry(outerGeo);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x6e7686,
      transparent: true,
      opacity: 0.35,
      linewidth: 1
    });
    const outerMesh = new THREE.LineSegments(wireframeGeo, lineMat);
    nucleusGroup.add(outerMesh);

    // Inner secondary dense lattice
    const innerGeo = new THREE.IcosahedronGeometry(2.4, 3);
    const innerWireframe = new THREE.WireframeGeometry(innerGeo);
    const innerLineMat = new THREE.LineBasicMaterial({
      color: 0x9ca3af,
      transparent: true,
      opacity: 0.22
    });
    const innerMesh = new THREE.LineSegments(innerWireframe, innerLineMat);
    nucleusGroup.add(innerMesh);

    // Core solid multifaceted node
    const coreGeo = new THREE.OctahedronGeometry(1.2, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x18181f,
      metalness: 0.95,
      roughness: 0.15,
      wireframe: false
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    nucleusGroup.add(coreMesh);

    // 4. Mathematical Particle Lattice (Autonomous Data Flow Field)
    const particleCount = 1800;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Stratified spherical distribution with orbital flow lines
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 3.2 + Math.random() * 4.5;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      scales[i] = Math.random() * 0.05 + 0.02;
      velocities[i] = (Math.random() - 0.5) * 0.008;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Sharp circular point shader texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
      gradient.addColorStop(0, 'rgba(240, 245, 255, 1)');
      gradient.addColorStop(0.35, 'rgba(180, 195, 220, 0.7)');
      gradient.addColorStop(0.8, 'rgba(110, 125, 150, 0.15)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xd8e0ed
    });

    const particleCloud = new THREE.Points(particleGeo, particleMat);
    nucleusGroup.add(particleCloud);

    // 5. Orbiting Data Packet Rings (Data Highway)
    const ringCount = 3;
    const rings: THREE.Line[] = [];

    for (let rIdx = 0; rIdx < ringCount; rIdx++) {
      const curveRadius = 5.2 + rIdx * 1.6;
      const points: THREE.Vector3[] = [];
      const segments = 120;
      for (let s = 0; s <= segments; s++) {
        const theta = (s / segments) * Math.PI * 2;
        const wave = Math.sin(theta * 3 + rIdx) * 0.4;
        points.push(
          new THREE.Vector3(
            Math.cos(theta) * curveRadius,
            wave,
            Math.sin(theta) * curveRadius
          )
        );
      }
      const ringGeo = new THREE.BufferGeometry().setFromPoints(points);
      const ringMat = new THREE.LineBasicMaterial({
        color: 0x4f5666,
        transparent: true,
        opacity: 0.28
      });
      const ringLine = new THREE.Line(ringGeo, ringMat);
      ringLine.rotation.x = Math.PI / 4 + (rIdx * Math.PI) / 6;
      ringLine.rotation.z = (rIdx * Math.PI) / 4;
      scene.add(ringLine);
      rings.push(ringLine);
    }

    // 6. Orbital Satellites (Active Autonomous Agents)
    const agentNodes: { mesh: THREE.Mesh; angle: number; speed: number; radius: number; tilt: number }[] = [];
    const agentNodeGeo = new THREE.BoxGeometry(0.16, 0.16, 0.16);
    const agentNodeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.9,
      roughness: 0.1
    });

    for (let a = 0; a < 6; a++) {
      const nodeMesh = new THREE.Mesh(agentNodeGeo, agentNodeMat);
      scene.add(nodeMesh);
      agentNodes.push({
        mesh: nodeMesh,
        angle: (a / 6) * Math.PI * 2,
        speed: 0.006 + (a % 2) * 0.004,
        radius: 4.8 + (a % 3) * 1.2,
        tilt: (a * Math.PI) / 3
      });
    }

    // 7. Mouse & Scroll Interaction Listeners
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const currentX = (e.clientX / innerWidth) * 2 - 1;
      const currentY = -(e.clientY / innerHeight) * 2 + 1;

      // Calculate instantaneous mouse velocity for dynamic impulse
      const deltaX = currentX - prevMouseX;
      const deltaY = currentY - prevMouseY;
      mouseRef.current.velocity = Math.min(Math.hypot(deltaX, deltaY) * 25, 2.5);

      prevMouseX = currentX;
      prevMouseY = currentY;

      mouseRef.current.targetX = currentX;
      mouseRef.current.targetY = currentY;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      scrollRef.current.target = scrollY / maxScroll;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 8. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 9. Animation Loop (60 FPS, with Damping & Camera Choreography)
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Mouse position lerp (smooth inertia)
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;
      mouseRef.current.velocity *= 0.94; // dampen velocity

      // Scroll progress lerp
      scrollRef.current.current += (scrollRef.current.target - scrollRef.current.current) * 0.05;
      const sp = scrollRef.current.current;

      // Rotate nucleus gently, influenced by mouse and velocity
      const dynamicSpeed = 0.003 + mouseRef.current.velocity * 0.015;
      nucleusGroup.rotation.y += dynamicSpeed;
      nucleusGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.15 + mouseRef.current.y * 0.35;
      nucleusGroup.rotation.z = mouseRef.current.x * 0.25;

      // Pulsing inner core
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.08;
      coreMesh.scale.set(pulse, pulse, pulse);
      coreMesh.rotation.y -= 0.01;
      coreMesh.rotation.x += 0.008;

      // Outer wireframe breathing
      outerMesh.rotation.y -= 0.002;
      innerMesh.rotation.y += 0.004;

      // Orbiting agent nodes
      agentNodes.forEach((node) => {
        node.angle += node.speed;
        const x = Math.cos(node.angle) * node.radius;
        const z = Math.sin(node.angle) * node.radius;
        const y = Math.sin(node.angle * 2 + node.tilt) * 1.5;
        node.mesh.position.set(x, y, z);
        node.mesh.rotation.x += 0.02;
        node.mesh.rotation.y += 0.03;
      });

      // Orbiting rings rotation
      rings.forEach((ring, idx) => {
        ring.rotation.y += 0.0015 * (idx % 2 === 0 ? 1 : -1);
      });

      // CAMERA CHOREOGRAPHY ACROSS SECTIONS:
      // Orbit camera subtly as user scrolls through the narrative
      const targetCamRadius = 15.5 - sp * 4.0; // moves closer as scroll deepens
      const targetCamAngle = sp * Math.PI * 1.2; // orbits around
      const targetCamY = -sp * 3.5 + mouseRef.current.y * 1.5;

      camera.position.x = Math.sin(targetCamAngle) * targetCamRadius + mouseRef.current.x * 2.0;
      camera.position.z = Math.cos(targetCamAngle) * targetCamRadius;
      camera.position.y = targetCamY;
      camera.lookAt(0, -sp * 1.2, 0);

      renderer.render(scene, camera);
    };

    animate();

    // 10. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose geometries and materials
      outerGeo.dispose();
      innerGeo.dispose();
      coreGeo.dispose();
      wireframeGeo.dispose();
      innerWireframe.dispose();
      particleGeo.dispose();
      particleTexture.dispose();
      lineMat.dispose();
      innerLineMat.dispose();
      coreMat.dispose();
      particleMat.dispose();
      agentNodeGeo.dispose();
      agentNodeMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="threejs-hero-canvas-container"
      className={`relative w-full h-full pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
};
