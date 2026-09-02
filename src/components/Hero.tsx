import React from 'react';
import { Terminal, ArrowDown, Cpu, Zap, Shield, ChevronRight } from 'lucide-react';

interface HeroProps {
  onExploreSystems: () => void;
  onLaunchSimulation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreSystems,
  onLaunchSimulation
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-36 pb-20 flex flex-col justify-between overflow-hidden border-b border-white/10"
    >
      {/* Background architectural grid & subtle radial fade */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0c]/70 to-[#0a0a0c] pointer-events-none" />

      {/* Editorial Reticle Technical Geometric Motif */}
      <div className="absolute top-1/2 right-4 lg:right-16 -translate-y-1/2 opacity-20 pointer-events-none hidden md:block">
        <svg width="550" height="550" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="50" stroke="white" strokeWidth="1" />
          <circle cx="100" cy="100" r="25" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
          <path d="M100 15V185M15 100H185M40 40L160 160M160 40L40 160" stroke="white" strokeWidth="0.25" />
          <circle cx="100" cy="100" r="2.5" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full flex-1 flex flex-col justify-center">
        {/* Editorial Subhead Eyebrow */}
        <div className="relative z-10">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-5 block font-mono-telemetry">
            Otonom Yapay Zeka Sistemleri // basitotomasyon.com
          </span>

          {/* Monumental Editorial Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85] uppercase mb-8 text-white max-w-5xl">
            Kurumsal<br />Otonom<br />Otomasyon.
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-xl font-light leading-relaxed mb-10">
            basitotomasyon.com ile kurumsal iş akışlarınızı, müşteri iletişim kanallarınızı ve karmaşık operasyonel süreçlerinizi matematiksel hassasiyetle çalışan yapay zeka ajanlarına devredin.
          </p>

          {/* Editorial Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <button
              id="hero-cta-explore"
              onClick={onExploreSystems}
              className="px-6 py-3.5 bg-white text-black text-[10px] tracking-widest uppercase font-bold hover:bg-white/90 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>20 Otonom Sistemi İncele</span>
              <ChevronRight className="w-3.5 h-3.5 text-black" />
            </button>

            <button
              id="hero-cta-sim"
              onClick={onLaunchSimulation}
              className="px-6 py-3.5 border border-white/20 hover:border-white text-white text-[10px] uppercase tracking-[0.3em] font-bold transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 bg-black/40 backdrop-blur-sm"
            >
              <Terminal className="w-3.5 h-3.5 text-white/50" />
              <span>Canlı Simülasyonu Başlat</span>
            </button>
          </div>

          {/* Editorial Benchmark Statistics Bar */}
          <div className="flex flex-wrap gap-8 sm:gap-14 items-end pt-8 border-t border-white/10 max-w-4xl">
            <div className="flex flex-col gap-1.5">
              <span className="text-4xl sm:text-5xl font-bold tracking-tighter text-white">%99.94</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono-telemetry">Sınıflandırma Doğruluğu</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-4xl sm:text-5xl font-bold tracking-tighter text-white">&lt;280ms</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono-telemetry">Çıkarım Gecikmesi</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-4xl sm:text-5xl font-bold tracking-tighter text-white">4.2M+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono-telemetry">Günlük Yürütülen İşlem</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-4xl sm:text-5xl font-bold tracking-tighter text-white">2.4M$</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono-telemetry">Ortalama Operasyonel Tasarruf</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full pt-8 flex items-center justify-between text-white/30 font-mono-telemetry text-xs">
        <div className="flex items-center gap-2 text-white/40">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          <span className="uppercase tracking-[0.2em] text-[10px]">SİSTEMLERİ VE DETAYLARI KEŞFETMEK İÇİN KAYDIRIN</span>
        </div>
        <div className="hidden sm:block text-white/30 text-[10px] tracking-[0.2em] uppercase">
          SUNUCU: İSTANBUL // FRANKFURT // UTC+3
        </div>
      </div>
    </section>
  );
};
