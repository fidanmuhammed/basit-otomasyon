import React, { useState } from 'react';
import { Layers, Database, Cpu, ShieldCheck, Server, ArrowRight, Network } from 'lucide-react';
import { TECH_ECOSYSTEM } from '../data/capabilities';

export const ArchitectureEcosystem: React.FC = () => {
  const [activeTier, setActiveTier] = useState<'foundations' | 'vectorMemory' | 'orchestration' | 'infrastructure'>('foundations');

  const tiers = [
    {
      id: 'foundations' as const,
      name: 'Bilişsel & LLM Temelleri',
      icon: Cpu,
      summary: 'Sıfır veri tutma protokolüyle çalışan öncü akıl yürütme modelleri ve yerel açık kaynak ağırlıklar.'
    },
    {
      id: 'vectorMemory' as const,
      name: 'Vektör & İşlemsel Hafıza',
      icon: Database,
      summary: '10 milisaniye altı benzerlik arama motorları ve tam veri izolasyonlu ACID uyumlu ilişkisel durumlar.'
    },
    {
      id: 'orchestration' as const,
      name: 'Dayanıklı Orkestrasyon & Mesajlaşma',
      icon: Network,
      summary: 'Hata toleranslı dağıtık durum makineleri, çoklu ajan denetim grafikleri ve gerçek zamanlı olay kuyrukları.'
    },
    {
      id: 'infrastructure' as const,
      name: 'Güvenli Sıfır Güven (Zero-Trust) Altyapı',
      icon: ShieldCheck,
      summary: 'Müşteri kontrolündeki izole VPC sınırları, donanımsal HSM anahtar yönetimi ve yerinde sunucu dağıtımı.'
    }
  ];

  return (
    <section id="tech-ecosystem" className="relative py-24 border-t border-white/10 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="mb-14 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 font-mono-telemetry">
              SİSTEM MİMARİSİ // basitotomasyon.com ENTEGRASYON HARİTASI
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Bağımsız Teknoloji Ekosistemi
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mt-2 font-light leading-relaxed">
            Kırılgan hazır araçlar yok. Her sistem, kurumsal gizlilik standartlarında ve kritik iş yüklerini kaldıracak mühendislik altyapısıyla inşa edilir.
          </p>
        </div>

        {/* Visual Layer Architecture Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-8">
          {tiers.map((t, idx) => {
            const Icon = t.icon;
            const isActive = activeTier === t.id;
            return (
              <button
                key={t.id}
                id={`arch-tier-${t.id}`}
                onClick={() => setActiveTier(t.id)}
                className={`p-6 border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-black border-white'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/30 text-white/60 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-7 h-7 flex items-center justify-center border ${
                      isActive ? 'bg-black text-white border-black' : 'border-white/20 text-white/60'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-[9px] font-mono-telemetry uppercase tracking-widest ${
                    isActive ? 'text-black/60 font-bold' : 'text-white/40'
                  }`}>
                    KATMAN-0{idx + 1}
                  </span>
                </div>
                <h4 className={`text-xs uppercase font-bold tracking-tight mb-1.5 ${isActive ? 'text-black' : 'text-white'}`}>
                  {t.name}
                </h4>
                <p className={`text-[11px] line-clamp-2 leading-relaxed font-light ${isActive ? 'text-black/70' : 'text-white/50'}`}>
                  {t.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Tier Deep-Dive Components Grid */}
        <div className="p-8 border border-white/10 bg-white/[0.02] mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-3">
            <div>
              <div className="text-[10px] font-mono-telemetry uppercase tracking-[0.2em] text-white/40 font-bold mb-1">
                Aktif Katman Bileşenleri
              </div>
              <h3 className="text-xl uppercase font-bold tracking-tight text-white">
                {tiers.find((t) => t.id === activeTier)?.name}
              </h3>
            </div>
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] uppercase font-mono-telemetry tracking-widest text-white/70">
              Sıfır Dışa Bağımlılık Standardı
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TECH_ECOSYSTEM[activeTier].map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-black/60 border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="text-xs font-mono-telemetry font-bold uppercase tracking-wider text-white">
                    {item.name}
                  </span>
                  <span className="w-1.5 h-1.5 bg-emerald-400 mt-1.5 shrink-0" />
                </div>
                <p className="text-xs text-white/50 font-light leading-relaxed">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Distributed Enterprise Data Pipeline Diagram */}
        <div className="p-8 border border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
            <Server className="w-3.5 h-3.5 text-white/50" />
            <span className="text-[10px] font-mono-telemetry uppercase tracking-[0.2em] text-white/60 font-bold">
              Uçtan Uca Kurumsal Veri Akışı Topolojisi
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="p-5 bg-black/60 border border-white/10 relative">
              <div className="text-[9px] font-mono-telemetry text-white/40 uppercase tracking-widest mb-1.5">01 // TETİKLEYİCİ</div>
              <div className="text-xs uppercase font-bold text-white mb-2 tracking-tight">Gelen Veri Akışları</div>
              <p className="text-[11px] text-white/50 font-light leading-relaxed">
                ERP webhook'ları, telefon santral aramaları, WhatsApp/Telegram mesajları doğrudan uç ağ geçidine akar.
              </p>
            </div>

            <div className="p-5 bg-black/60 border border-white/10 relative">
              <div className="text-[9px] font-mono-telemetry text-white/40 uppercase tracking-widest mb-1.5">02 // GÜVENLİK</div>
              <div className="text-xs uppercase font-bold text-white mb-2 tracking-tight">İzole Güvenlik Kasası</div>
              <p className="text-[11px] text-white/50 font-light leading-relaxed">
                Kişisel veriler (KVKK) filtrelenir, token'lar HashiCorp Vault ile doğrulanır ve oturum durumu yüklenir.
              </p>
            </div>

            <div className="p-5 bg-black/60 border border-white/10 relative">
              <div className="text-[9px] font-mono-telemetry text-white/40 uppercase tracking-widest mb-1.5">03 // BİLGİ TABANI</div>
              <div className="text-xs uppercase font-bold text-white mb-2 tracking-tight">Vektör & Graf Arama</div>
              <p className="text-[11px] text-white/50 font-light leading-relaxed">
                Kurumsal şirket hafızası ve belgeler, Qdrant kümesinde müşteri veri izolasyonu ile anlık taranır.
              </p>
            </div>

            <div className="p-5 bg-black/60 border border-white/10 relative">
              <div className="text-[9px] font-mono-telemetry text-white/40 uppercase tracking-widest mb-1.5">04 // AKIL YÜRÜTME</div>
              <div className="text-xs uppercase font-bold text-white mb-2 tracking-tight">Politika & Denetim</div>
              <p className="text-[11px] text-white/50 font-light leading-relaxed">
                Çoklu ajan doğrulama katmanı, üretilen yanıtları şirket politikası, yasal mevzuat ve SLA kriterlerine göre sınar.
              </p>
            </div>

            <div className="p-5 bg-black/60 border border-white/10 relative">
              <div className="text-[9px] font-mono-telemetry text-white/40 uppercase tracking-widest mb-1.5">05 // EYLEM</div>
              <div className="text-xs uppercase font-bold text-white mb-2 tracking-tight">Otonom İcraat</div>
              <p className="text-[11px] text-white/50 font-light leading-relaxed">
                Deterministik API çağrısı, mesaj gönderimi veya ERP veri tabanı yazımı kriptografik denetim kaydıyla yürütülür.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
