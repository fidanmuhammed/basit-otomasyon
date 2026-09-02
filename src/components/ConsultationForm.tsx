import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, ChevronRight, ChevronLeft, ArrowUpRight, DollarSign, Calendar, Lock } from 'lucide-react';
import { CAPABILITIES } from '../data/capabilities';
import { ConsultationSubmission } from '../types';

interface ConsultationFormProps {
  initialSystemId?: string | null;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({ initialSystemId }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSystems, setSelectedSystems] = useState<string[]>(
    initialSystemId ? [initialSystemId] : ['legal-compliance', 'voice-ai-center']
  );
  const [budget, setBudget] = useState(120000);
  const [timeline, setTimeline] = useState('1 - 2 Ay (Tam Kurumsal Dağıtım)');
  const [compliance, setCompliance] = useState<string[]>(['KVKK & GDPR Uyumluluğu', 'Sıfır-Veri Tutma (Zero Data Retention) Politikası']);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    additionalNotes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const toggleSystem = (id: string) => {
    setSelectedSystems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleCompliance = (item: string) => {
    setCompliance((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedTicket = `BASIT-TALEP-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedTicket);
    setIsSubmitted(true);
  };

  return (
    <section id="intake-consultation" className="relative py-24 border-t border-white/10 bg-[#0a0a0c]">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono-telemetry text-white/60 mb-4">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="tracking-[0.2em] uppercase font-semibold">KURUMSAL MİMARİ DEĞERLENDİRME // basitotomasyon.com</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Otonom Altyapınızı Hayata Geçirin
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            basitotomasyon.com uzman ekibiyle iletişime geçin. Mevcut iş akışlarınızı inceleyelim, otonom yapay zeka mimarinizi tasarlayalım ve üretime hazır planınızı sunalım.
          </p>
        </div>

        {/* Multi-Step Intake Container */}
        <div className="border border-white/10 bg-white/[0.02] p-6 sm:p-10 relative overflow-hidden">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Mimari Değerlendirme Talebi Alındı
                </h3>
                <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Ekibimiz başvurunuzu aldı. Baş Sistem Mimarımız 24 saat içerisinde ön sistem mimarinizi ve risk değerlendirmenizi iletecektir.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10 max-w-md mx-auto">
                <div className="text-[10px] font-mono-telemetry text-neutral-500 uppercase tracking-widest mb-1">
                  Özel Talep Takip Numarası
                </div>
                <div className="text-xl font-mono-telemetry font-bold text-emerald-400 tracking-wider">
                  {ticketId}
                </div>
                <div className="text-[11px] font-mono-telemetry text-neutral-400 mt-1">
                  Şifreli bildirim {formData.workEmail || 'belirttiğiniz adrese'} gönderildi.
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                }}
                className="px-6 py-2.5 rounded border border-white/20 text-xs font-mono-telemetry uppercase tracking-wider text-neutral-300 hover:bg-white/5 transition-colors cursor-pointer"
              >
                Yeni Talep Oluştur
              </button>
            </div>
          ) : (
            <div>
              {/* Stepper Progress Bar */}
              <div className="mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center justify-between text-[10px] font-mono-telemetry text-white/40 uppercase tracking-[0.2em] mb-2">
                  <span>AŞAMA 0{currentStep} / 04</span>
                  <span className="text-white font-bold">
                    {currentStep === 1 && 'Sistem Kapsamı Seçimi'}
                    {currentStep === 2 && 'Yatırım Bütçesi & Zaman'}
                    {currentStep === 3 && 'Güvenlik & Uyumluluk'}
                    {currentStep === 4 && 'Yetkili İletişim Bilgileri'}
                  </span>
                </div>
                <div className="w-full h-1 bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-300"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* STEP 1: Select Systems */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base uppercase font-bold tracking-tight text-white mb-1">
                        Kurulum Yapılacak Hedef Sistemleri Seçin
                      </h3>
                      <p className="text-xs text-white/50 font-light">
                        Kurumunuz için devreye alınacak otonom iş akışlarını ve yapay zeka iletişim ajanlarını belirleyin:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
                      {CAPABILITIES.map((sys) => {
                        const isSelected = selectedSystems.includes(sys.id);
                        return (
                          <div
                            key={sys.id}
                            onClick={() => toggleSystem(sys.id)}
                            className={`p-3 rounded-lg border text-left cursor-pointer transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-white/10 border-white/40 text-white'
                                : 'bg-black/30 border-white/10 text-neutral-400 hover:border-white/25 hover:text-neutral-200'
                            }`}
                          >
                            <div className="truncate mr-2">
                              <div className="text-[10px] font-mono-telemetry text-neutral-500 uppercase">
                                {sys.code}
                              </div>
                              <div className="text-xs font-display font-bold truncate">
                                {sys.title}
                              </div>
                            </div>
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                isSelected ? 'bg-white border-white text-black' : 'border-neutral-600'
                              }`}
                            >
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2: Budget & Timeline */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-display font-bold text-white mb-1">
                        Tahmini Proje Bütçesi
                      </h3>
                      <p className="text-xs text-neutral-400">
                        Kurumsal güvenlik, model ince ayarı ve kesintisiz SLA desteğine göre kalibre edilmiştir:
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-black/40 border border-white/10 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono-telemetry text-neutral-400 uppercase">Ayrılan Bütçe</span>
                        <span className="text-2xl font-display font-bold text-emerald-400">
                          ${budget.toLocaleString()} USD
                        </span>
                      </div>

                      <input
                        id="budget-range-slider"
                        type="range"
                        min="50000"
                        max="500000"
                        step="10000"
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                        className="w-full accent-white h-2 bg-neutral-800 rounded-lg cursor-pointer"
                      />

                      <div className="flex justify-between text-[10px] font-mono-telemetry text-neutral-500 uppercase">
                        <span>$50.000 (Pilot)</span>
                        <span>$250.000 (Kurumsal)</span>
                        <span>$500.000+ (Tam Ölçekli Otonomi)</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono-telemetry uppercase tracking-wider text-neutral-300 font-bold block mb-3">
                        Hedeflenen Canlıya Geçiş Süresi
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          '2 - 4 Hafta (Hızlı MVP)',
                          '1 - 2 Ay (Tam Kurumsal Dağıtım)',
                          '3+ Ay (İzole / Özel Veri Merkezi)'
                        ].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTimeline(t)}
                            className={`p-3 rounded-lg border text-xs font-mono-telemetry transition-all cursor-pointer ${
                              timeline === t
                                ? 'bg-white/10 border-white/40 text-white font-bold'
                                : 'bg-black/30 border-white/10 text-neutral-400 hover:text-neutral-200'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Security & Governance */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-display font-bold text-white mb-1">
                        Kurumsal Güvenlik & Regülasyon Gereksinimleri
                      </h3>
                      <p className="text-xs text-neutral-400">
                        Altyapı denetiminiz için zorunlu olan güvenlik ve uyumluluk protokollerini işaretleyin:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'KVKK & GDPR Uyumluluğu',
                        'SOC2 Type II Denetimi',
                        'Sıfır-Veri Tutma (Zero Retention)',
                        'Yerinde / Özel Bulut (VPC) Kurulumu',
                        'Özel Gecikme SLA (< 200ms)',
                        'HIPAA / Sağlık Verisi Koruması',
                        'PCI-DSS Ödeme Güvenliği',
                        'Donanımsal HSM Anahtar Yönetimi'
                      ].map((item) => {
                        const isChecked = compliance.includes(item);
                        return (
                          <div
                            key={item}
                            onClick={() => toggleCompliance(item)}
                            className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all flex items-center justify-between ${
                              isChecked
                                ? 'bg-white/10 border-white/40 text-white'
                                : 'bg-black/30 border-white/10 text-neutral-400 hover:border-white/20 hover:text-neutral-200'
                            }`}
                          >
                            <span className="text-xs font-mono-telemetry">{item}</span>
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                isChecked ? 'bg-white border-white text-black' : 'border-neutral-600'
                              }`}
                            >
                              {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 4: Executive Details */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-display font-bold text-white mb-1">
                        Yetkili İletişim Noktası
                      </h3>
                      <p className="text-xs text-neutral-400">
                        Tüm görüşmeler şifreli kanallar üzerinden ve Gizlilik Sözleşmesi (NDA) kapsamında yürütülür:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-mono-telemetry uppercase text-neutral-400 block mb-1.5">
                          Ad Soyad *
                        </label>
                        <input
                          id="lead-fullname-input"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="örn. Ahmet Yılmaz"
                          className="w-full p-3 rounded-lg bg-black/60 border border-white/10 text-xs font-mono-telemetry text-neutral-200 focus:outline-none focus:border-white/40"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-mono-telemetry uppercase text-neutral-400 block mb-1.5">
                          Kurumsal E-posta *
                        </label>
                        <input
                          id="lead-email-input"
                          type="email"
                          required
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="ahmet@sirketiniz.com"
                          className="w-full p-3 rounded-lg bg-black/60 border border-white/10 text-xs font-mono-telemetry text-neutral-200 focus:outline-none focus:border-white/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono-telemetry uppercase text-neutral-400 block mb-1.5">
                        Kurum / Şirket Adı *
                      </label>
                      <input
                        id="lead-company-input"
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="örn. Atlas Lojistik A.Ş."
                        className="w-full p-3 rounded-lg bg-black/60 border border-white/10 text-xs font-mono-telemetry text-neutral-200 focus:outline-none focus:border-white/40"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono-telemetry uppercase text-neutral-400 block mb-1.5">
                        Teknik Kapsam / Özel Notlar
                      </label>
                      <textarea
                        id="lead-notes-textarea"
                        rows={3}
                        value={formData.additionalNotes}
                        onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                        placeholder="Kullandığınız ERP/CRM sistemleri, günlük mesaj hacminiz veya özel entegrasyon talepleriniz..."
                        className="w-full p-3 rounded-lg bg-black/60 border border-white/10 text-xs font-mono-telemetry text-neutral-200 focus:outline-none focus:border-white/40 resize-none"
                      />
                    </div>
                  </div>
                )}

                {/* Bottom Navigation Buttons */}
                <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep((s) => s - 1)}
                      className="px-4 py-2.5 rounded border border-white/15 text-xs font-mono-telemetry uppercase text-neutral-300 hover:bg-white/5 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Geri</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep((s) => s + 1)}
                      className="px-6 py-2.5 rounded bg-white text-black text-xs font-mono-telemetry font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer active:scale-95"
                    >
                      <span>Adım 0{currentStep + 1}'e İlerle</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      id="submit-audit-btn"
                      className="px-8 py-3 rounded bg-white text-black text-xs font-mono-telemetry font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2 cursor-pointer active:scale-95"
                    >
                      <span>Talep Formunu Gönder</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
