import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpRight, ShieldCheck, Zap, Activity } from 'lucide-react';
import { CAPABILITIES } from '../data/capabilities';
import { SystemCapability, SystemCategory } from '../types';

interface ShowcaseGridProps {
  onSelectSystem: (system: SystemCapability) => void;
}

export const ShowcaseGrid: React.FC<ShowcaseGridProps> = ({ onSelectSystem }) => {
  const [selectedTab, setSelectedTab] = useState<'all' | SystemCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('Tümü');

  const filterTags = ['Tümü', '< 300ms Gecikme', 'SOC2 / KVKK', 'Yüksek Hacim', 'Çok Kanallı', 'API / Webhook'];

  const filteredSystems = useMemo(() => {
    return CAPABILITIES.filter((sys) => {
      // Category filter
      if (selectedTab !== 'all' && sys.category !== selectedTab) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = sys.title.toLowerCase().includes(q);
        const matchesHeadline = sys.headline.toLowerCase().includes(q);
        const matchesCode = sys.code.toLowerCase().includes(q);
        const matchesIntegration = sys.integrations.some((i) => i.toLowerCase().includes(q));
        if (!matchesTitle && !matchesHeadline && !matchesCode && !matchesIntegration) {
          return false;
        }
      }

      // Quick Tag filter
      if (selectedTag === '< 300ms Gecikme') {
        return sys.latency.includes('2') || sys.latency.includes('180ms') || sys.latency.includes('32ms') || sys.latency.includes('95ms') || sys.latency.includes('85ms') || sys.latency.includes('140ms');
      }
      if (selectedTag === 'SOC2 / KVKK') {
        return sys.compliance.some((c) => c.includes('SOC2') || c.includes('KVKK') || c.includes('HIPAA') || c.includes('PCI'));
      }
      if (selectedTag === 'Çok Kanallı') {
        return sys.category === 'omnichannel';
      }
      if (selectedTag === 'Yüksek Hacim') {
        return sys.throughput.includes('sn') || sys.throughput.includes('saat') || sys.throughput.includes('gün') || sys.throughput.includes('10.000');
      }

      return true;
    });
  }, [selectedTab, searchQuery, selectedTag]);

  return (
    <section id="systems-directory" className="relative py-24 border-t border-white/10 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
                ÇÖZÜM DİZİNİ // 20 DOĞRULANMIŞ OTONOM MİMARİ
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Otonom Sistemler Kataloğu
            </h2>
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mt-2 font-light leading-relaxed">
              Üretim ortamına hazır, kurumsal düzeyde otonom iş akışı düğümleri ve çok kanallı yapay zeka iletişim ajanları.
            </p>
          </div>

          <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase font-mono text-white/40">
            <Activity className="w-3.5 h-3.5 text-emerald-400/80" />
            <span>GÖSTERİLEN: 01 — {filteredSystems.length.toString().padStart(2, '0')} / 20 SİSTEM</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 border border-white/10 bg-white/[0.02] mb-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Main Category Filter Tabs */}
          <div className="flex items-center gap-2 border-b lg:border-b-0 border-white/10 pb-3 lg:pb-0 overflow-x-auto whitespace-nowrap text-[10px] uppercase tracking-[0.2em]">
            <button
              id="filter-tab-all"
              onClick={() => setSelectedTab('all')}
              className={`px-4 py-2 transition-all cursor-pointer ${
                selectedTab === 'all'
                  ? 'bg-white text-black font-bold'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              Tüm Sistemler (20)
            </button>
            <button
              id="filter-tab-workflow"
              onClick={() => setSelectedTab('workflow')}
              className={`px-4 py-2 transition-all cursor-pointer ${
                selectedTab === 'workflow'
                  ? 'bg-white text-black font-bold'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              Modül A: Bilişsel İş Akışları (10)
            </button>
            <button
              id="filter-tab-omni"
              onClick={() => setSelectedTab('omnichannel')}
              className={`px-4 py-2 transition-all cursor-pointer ${
                selectedTab === 'omnichannel'
                  ? 'bg-white text-black font-bold'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              Modül B: Çok Kanallı Ajanlar (10)
            </button>
          </div>

          {/* Search Input and Quick Tag Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="search-capabilities-input"
                type="text"
                placeholder="SİSTEM, ERP VEYA API ARA..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-black/60 border border-white/10 text-[11px] font-mono-telemetry text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 uppercase"
              />
            </div>

            <div className="flex items-center gap-1 overflow-x-auto whitespace-nowrap">
              {filterTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-2.5 py-1 text-[9px] font-mono-telemetry uppercase tracking-widest transition-colors cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-white text-black font-bold'
                      : 'border border-white/10 text-white/50 hover:text-white hover:border-white/20'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 20 Capabilities Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSystems.map((sys, idx) => {
            const systemNumber = (idx + 1).toString().padStart(2, '0');
            return (
              <div
                key={sys.id}
                id={`card-capability-${sys.id}`}
                onClick={() => onSelectSystem(sys)}
                className="group relative p-7 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200 flex flex-col justify-between cursor-pointer"
              >
                {/* Card Top Details */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/30 font-mono text-xs font-bold tracking-widest">
                      {systemNumber} // {sys.code}
                    </span>
                    <span className="px-2 py-0.5 border border-white/20 text-[9px] uppercase tracking-widest text-white/50 group-hover:border-white/60 transition-colors">
                      {sys.category === 'workflow' ? 'Modül A' : 'Modül B'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold uppercase tracking-tight text-white group-hover:text-white transition-colors mb-2">
                    {sys.title}
                  </h3>

                  <p className="text-xs text-white/50 leading-relaxed line-clamp-2 mb-6 font-light">
                    {sys.headline}
                  </p>

                  {/* Key Metrics Chips */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    <div className="p-2.5 bg-black/50 border border-white/10">
                      <div className="text-[9px] font-mono-telemetry uppercase tracking-widest text-white/40">Gecikme SLA</div>
                      <div className="text-xs font-mono font-bold text-white mt-0.5">{sys.latency}</div>
                    </div>
                    <div className="p-2.5 bg-black/50 border border-white/10">
                      <div className="text-[9px] font-mono-telemetry uppercase tracking-widest text-white/40">Hassasiyet Oranı</div>
                      <div className="text-xs font-mono font-bold text-white mt-0.5">{sys.accuracy}</div>
                    </div>
                  </div>

                  {/* Connectors / Integrations */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {sys.integrations.slice(0, 3).map((item, iIdx) => (
                      <span
                        key={iIdx}
                        className="px-2 py-0.5 text-[9px] font-mono-telemetry uppercase tracking-wider text-white/50 border border-white/10 bg-black/30"
                      >
                        {item}
                      </span>
                    ))}
                    {sys.integrations.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[9px] font-mono-telemetry text-white/40">
                        +{sys.integrations.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-telemetry">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors flex items-center gap-1">
                    Mimariyi ve Getiriyi İncele
                  </span>
                  <div className="w-6 h-6 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-black group-hover:bg-white transition-colors">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search finds nothing */}
        {filteredSystems.length === 0 && (
          <div className="py-20 text-center border border-white/10 bg-black/40">
            <p className="text-xs font-mono-telemetry uppercase tracking-widest text-white/50 mb-3">
              "{searchQuery}" aramasıyla eşleşen sistem bulunamadı.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTab('all');
                setSelectedTag('Tümü');
              }}
              className="text-[10px] font-mono-telemetry uppercase tracking-widest underline text-white hover:text-white/80 cursor-pointer"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
