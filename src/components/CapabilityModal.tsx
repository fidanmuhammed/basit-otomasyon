import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Layers, TrendingUp, Code2, ArrowRight } from 'lucide-react';
import { SystemCapability } from '../types';

interface CapabilityModalProps {
  system: SystemCapability | null;
  onClose: () => void;
  onDeploySystem: (systemId: string) => void;
}

export const CapabilityModal: React.FC<CapabilityModalProps> = ({
  system,
  onClose,
  onDeploySystem
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'roi' | 'schema' | 'compliance'>('architecture');

  if (!system) return null;

  return (
    <div
      id="system-capability-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="system-capability-modal-content"
        className="relative w-full max-w-4xl bg-[#0a0a0c] border border-white/10 shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/60">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 border border-white/20 text-[9px] font-mono-telemetry font-bold text-white/60 uppercase tracking-widest">
              {system.code}
            </span>
            <span className="text-[10px] font-mono-telemetry text-white/40 uppercase tracking-wider">
              {system.category === 'workflow' ? 'Modül A // Bilişsel İş Akışı Düğümü' : 'Modül B // Otonom Çok Kanallı Ajan'}
            </span>
          </div>

          <button
            id="close-capability-modal-btn"
            onClick={onClose}
            className="p-1 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
            aria-label="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body & Overview */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
              {system.title}
            </h2>
            <p className="text-white/60 text-sm sm:text-base font-light leading-relaxed">
              {system.headline}
            </p>
          </div>

          {/* Quick Benchmark Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-white/10">
            <div className="p-3 bg-white/[0.02] border border-white/10">
              <div className="text-[9px] font-mono-telemetry text-white/40 uppercase tracking-widest">Gecikme SLA</div>
              <div className="text-sm font-mono-telemetry font-bold text-white mt-0.5">{system.latency}</div>
            </div>
            <div className="p-3 bg-white/[0.02] border border-white/10">
              <div className="text-[9px] font-mono-telemetry text-white/40 uppercase tracking-widest">İşlem Hacmi</div>
              <div className="text-sm font-mono-telemetry font-bold text-white mt-0.5">{system.throughput}</div>
            </div>
            <div className="p-3 bg-white/[0.02] border border-white/10">
              <div className="text-[9px] font-mono-telemetry text-white/40 uppercase tracking-widest">Hassasiyet</div>
              <div className="text-sm font-mono-telemetry font-bold text-white mt-0.5">{system.accuracy}</div>
            </div>
            <div className="p-3 bg-white/[0.02] border border-white/10">
              <div className="text-[9px] font-mono-telemetry text-white/40 uppercase tracking-widest">Kurumsal Getiri</div>
              <div className="text-xs font-mono-telemetry font-medium text-emerald-400 truncate mt-0.5">{system.roiImpact}</div>
            </div>
          </div>

          {/* Modal Navigation Tabs */}
          <div className="flex border-b border-white/10 gap-4 sm:gap-8 overflow-x-auto whitespace-nowrap text-[10px] font-mono-telemetry uppercase tracking-[0.2em]">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`pb-3 border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'architecture'
                  ? 'border-white text-white font-bold'
                  : 'border-transparent text-white/40 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Mimari Hattı</span>
            </button>
            <button
              onClick={() => setActiveTab('roi')}
              className={`pb-3 border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'roi'
                  ? 'border-white text-white font-bold'
                  : 'border-transparent text-white/40 hover:text-white'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Yatırım Getirisi (ROI)</span>
            </button>
            <button
              onClick={() => setActiveTab('schema')}
              className={`pb-3 border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'schema'
                  ? 'border-white text-white font-bold'
                  : 'border-transparent text-white/40 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Veri Şeması</span>
            </button>
            <button
              onClick={() => setActiveTab('compliance')}
              className={`pb-3 border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'compliance'
                  ? 'border-white text-white font-bold'
                  : 'border-transparent text-white/40 hover:text-white'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Uyumluluk & Güvenlik</span>
            </button>
          </div>

          {/* Tab Content 1: Architecture Pipeline */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <p className="text-[11px] text-white/40 leading-relaxed font-mono-telemetry uppercase tracking-wider">
                Sıfır-güven (Zero-Trust) izolasyonunda çalışan dört aşamalı dağıtık işlem hattı:
              </p>
              <div className="space-y-2.5">
                {system.detailedArchitecture.map((stage, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 border border-white/10 bg-white/[0.02] flex items-start gap-3.5"
                  >
                    <div className="w-5 h-5 border border-white/20 flex items-center justify-center text-[10px] font-mono-telemetry font-bold text-white/60 shrink-0">
                      0{idx + 1}
                    </div>
                    <div className="text-xs text-white/80 font-light leading-relaxed">
                      {stage}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-[10px] font-mono-telemetry uppercase tracking-widest text-white/40 mb-2">
                  Önceden Yapılandırılmış Kurumsal Entegrasyonlar:
                </div>
                <div className="flex flex-wrap gap-2">
                  {system.integrations.map((connector, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[10px] font-mono-telemetry uppercase bg-black/60 border border-white/10 text-white/70"
                    >
                      {connector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: ROI & Impact */}
          {activeTab === 'roi' && (
            <div className="space-y-4">
              <div className="p-4 bg-white/[0.02] border border-white/10">
                <div className="text-[9px] font-mono-telemetry text-emerald-400 uppercase tracking-widest mb-1">
                  Doğrulanmış Ekonomik Sonuç
                </div>
                <div className="text-lg uppercase font-bold text-white">
                  {system.roiImpact}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {system.metrics.map((metric, idx) => (
                  <div key={idx} className="p-4 bg-white/[0.02] border border-white/10 text-center">
                    <div className="text-2xl font-bold tracking-tight text-white mb-1">
                      {metric.value}
                    </div>
                    <div className="text-[9px] font-mono-telemetry text-white/40 uppercase tracking-widest">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-white/40 font-mono-telemetry leading-relaxed">
                100.000+ test edilmiş kurumsal çalışma etkileşimi üzerinden hesaplanmıştır. Mühendislik iş gücü, operasyonel hız ve hata riski analiz edilmiştir.
              </p>
            </div>
          )}

          {/* Tab Content 3: Payload Schema */}
          {activeTab === 'schema' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-[10px] font-mono-telemetry text-white/50 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Giriş Olayı (Input Event)</span>
                    <span className="text-[9px] text-white/30">JSON Alımı</span>
                  </div>
                  <pre className="p-3.5 bg-black/90 border border-white/10 text-xs font-mono-telemetry text-emerald-400/90 overflow-x-auto">
                    {JSON.stringify(system.samplePayload.input, null, 2)}
                  </pre>
                </div>

                <div>
                  <div className="text-[10px] font-mono-telemetry text-white/50 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Sentezlenmiş Çıktı Zarfı</span>
                    <span className="text-[9px] text-white/30">Doğrulanmış Dağıtım</span>
                  </div>
                  <pre className="p-3.5 bg-black/90 border border-white/10 text-xs font-mono-telemetry text-white/80 overflow-x-auto">
                    {JSON.stringify(system.samplePayload.output, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 4: Compliance Matrix */}
          {activeTab === 'compliance' && (
            <div className="space-y-4">
              <div className="space-y-2.5">
                {system.compliance.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white/[0.02] border border-white/10 flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs font-mono-telemetry text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-white/40 font-mono-telemetry leading-relaxed">
                Tüm çıkarım akışları, Sıfır-Veri Tutma garantisiyle müşteriye özel izole VPC ortamlarında çalışır. Her otonom işlem için kriptografik imza üretilir.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-5 border-t border-white/10 bg-black/60">
          <div className="text-[10px] font-mono-telemetry text-white/50 uppercase tracking-widest">
            KURULUM: <strong className="text-white">Özel Bulut / İzole VPC / Hibrit Altyapı</strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 border border-white/20 text-[10px] font-mono-telemetry uppercase text-white/60 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
            >
              Kapat
            </button>
            <button
              onClick={() => {
                onDeploySystem(system.id);
                onClose();
              }}
              className="w-full sm:w-auto px-5 py-2 bg-white text-black text-[10px] font-mono-telemetry font-bold uppercase tracking-widest hover:bg-white/90 transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Bu Sistemi Simüle Et</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
