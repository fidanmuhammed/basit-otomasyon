import React, { useState, useEffect } from 'react';
import { ShieldCheck, Activity, Terminal, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenAudit: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [audioActive, setAudioActive] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);
  const [gainNode, setGainNode] = useState<GainNode | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    if (!audioActive) {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Ultra-low frequency subtle ambient sovereign hum (48Hz sine + gentle harmonics)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(48, ctx.currentTime);

        // Very quiet volume (barely audible engineering atmosphere)
        gain.gain.setValueAtTime(0.015, ctx.currentTime);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        setAudioCtx(ctx);
        setOscillator(osc);
        setGainNode(gain);
        setAudioActive(true);
      } catch (err) {
        console.error('Audio synthesizer init failed', err);
      }
    } else {
      if (gainNode && audioCtx) {
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.3);
        setTimeout(() => {
          oscillator?.stop();
          audioCtx?.close();
          setAudioCtx(null);
          setOscillator(null);
          setGainNode(null);
          setAudioActive(false);
        }, 300);
      } else {
        setAudioActive(false);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Engineering Telemetry Bar */}
      <div className="w-full bg-[#050507] border-b border-white/10 py-1.5 px-4 sm:px-10 text-[10px] font-mono-telemetry text-white/50 flex items-center justify-between overflow-x-auto whitespace-nowrap scrollbar-none">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-white">Sistem: Operasyonel</span>
          </div>
          <span className="hidden sm:inline-block text-white/20">|</span>
          <div className="hidden sm:flex items-center gap-1.5 tracking-[0.15em] uppercase text-white/60">
            <Activity className="w-3 h-3 text-white/40" />
            <span>Küresel Gecikme: <strong className="text-white font-mono">18.4ms</strong></span>
          </div>
          <span className="hidden md:inline-block text-white/20">|</span>
          <div className="hidden md:flex items-center gap-1.5 tracking-[0.15em] uppercase text-white/60">
            <ShieldCheck className="w-3 h-3 text-emerald-400/80" />
            <span>Güvenlik: <strong className="text-white font-mono">İzole Veri Enklavı</strong></span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-white/50">
          <span className="hidden lg:inline tracking-[0.2em] uppercase text-[9px] text-white/40">basitotomasyon.com // v1.0.4</span>
          <button
            id="ambient-soundscape-toggle"
            onClick={toggleAudio}
            className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors cursor-pointer py-1 px-2.5 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest"
            title={audioActive ? 'Ortam sesini kapat' : 'Ortam sesini aç'}
          >
            {audioActive ? (
              <>
                <Volume2 className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">SES [AÇIK]</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3 h-3 text-white/40" />
                <span>SES [KAPALI]</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Primary Navigation Glass Container */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0c]/95 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl'
            : 'bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/10 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Sovereign Brand Mark with Editorial Italic + Tracking */}
          <div className="flex items-center gap-8">
            <button
              id="nav-brand-logo"
              onClick={() => onNavigate('hero')}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tighter uppercase text-white group-hover:text-neutral-200 transition-colors">
                  Basit Otomasyon
                </span>
                <span className="text-[9px] font-mono-telemetry tracking-widest text-white/40 lowercase">
                  basitotomasyon.com
                </span>
              </div>
            </button>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-white/50 font-medium">
              <button
                id="nav-link-systems"
                onClick={() => onNavigate('systems-directory')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Sistemler (20)
              </button>
              <button
                id="nav-link-simulation"
                onClick={() => onNavigate('live-simulation')}
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Terminal className="w-3 h-3 text-white/40" />
                Canlı Simülasyon
              </button>
              <button
                id="nav-link-architecture"
                onClick={() => onNavigate('tech-ecosystem')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Mimari & Ekosistem
              </button>
              <button
                id="nav-link-governance"
                onClick={() => onNavigate('intake-consultation')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                İletişim & Teklif
              </button>
            </div>
          </div>

          {/* Primary High-Ticket CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-white/80">Sistem: Aktif</span>
            </div>

            <button
              id="nav-cta-audit"
              onClick={onOpenAudit}
              className="px-5 py-2 bg-white text-black text-[10px] tracking-widest uppercase font-bold hover:bg-white/90 transition-all cursor-pointer active:scale-95 flex items-center gap-1.5"
            >
              <span>Danışmanlık Al</span>
              <ArrowUpRight className="w-3 h-3 text-black" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
