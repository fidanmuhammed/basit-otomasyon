/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ThreeCanvas } from './components/ThreeCanvas';
import { ShowcaseGrid } from './components/ShowcaseGrid';
import { CapabilityModal } from './components/CapabilityModal';
import { SimulationPlayground } from './components/SimulationPlayground';
import { ArchitectureEcosystem } from './components/ArchitectureEcosystem';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';
import { SystemCapability } from './types';

export default function App() {
  const [selectedSystem, setSelectedSystem] = useState<SystemCapability | null>(null);
  const [preSelectedDeploySystemId, setPreSelectedDeploySystemId] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDeploySystem = (systemId: string) => {
    setPreSelectedDeploySystemId(systemId);
    scrollToSection('intake-consultation');
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-white selection:bg-white selection:text-black overflow-x-hidden font-sans">
      {/* 3D WebGL Neural Lattice Centerpiece (Fixed Background Layer with Mouse & Scroll Reactivity) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ThreeCanvas className="w-full h-full opacity-50" />
      </div>

      {/* Top Sovereign Navigation Header */}
      <Navbar
        onOpenAudit={() => scrollToSection('intake-consultation')}
        onNavigate={scrollToSection}
      />

      {/* Main Narrative & Product Showcase Sections */}
      <main className="relative z-10">
        {/* 1. Fullscreen Hero Section */}
        <Hero
          onExploreSystems={() => scrollToSection('systems-directory')}
          onLaunchSimulation={() => scrollToSection('live-simulation')}
        />

        {/* 2. Interactive Showcase Grid for all 20 Autonomous Systems */}
        <ShowcaseGrid onSelectSystem={(sys) => setSelectedSystem(sys)} />

        {/* 3. Interactive Live Simulation Playground (Input -> Reasoning -> Deterministic Output) */}
        <SimulationPlayground />

        {/* 4. Enterprise Architecture & Tech Stack Ecosystem */}
        <ArchitectureEcosystem />

        {/* 5. High-Ticket Multi-Step Consultation & Architectural Intake Form */}
        <ConsultationForm
          key={preSelectedDeploySystemId || 'default'}
          initialSystemId={preSelectedDeploySystemId}
        />
      </main>

      {/* Engineering Specs & Compliance Footer */}
      <Footer />

      {/* Detailed Architectural Deep-Dive Modal for Selected System */}
      <CapabilityModal
        system={selectedSystem}
        onClose={() => setSelectedSystem(null)}
        onDeploySystem={handleDeploySystem}
      />
    </div>
  );
}

