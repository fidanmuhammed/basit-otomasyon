import React from 'react';
import { ShieldCheck, ArrowUp, User, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#0a0a0c] text-white/50 py-16 text-xs font-mono-telemetry">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Top Status & Specs Banner */}
        <div className="p-6 border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <div>
              <div className="text-white font-bold uppercase tracking-wider text-[11px]">
                20 OTONOM SİSTEMİN TÜMÜ AKTİF // ÇEKİRDEK TELEMETRİ NORMAL
              </div>
              <div className="text-[10px] text-white/40 mt-0.5">
                Gecikme: 21ms | Veri Girişi: 14.8 GB/sn | Güvenli Küme: basitotomasyon.com v1.0.4
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              id="footer-scroll-top-btn"
              onClick={scrollToTop}
              className="px-4 py-2 border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors flex items-center gap-1.5 cursor-pointer text-[10px] uppercase tracking-widest"
            >
              <span>Yukarı Çık</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Multi-Column Engineering Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/10">
          <div>
            <div className="text-white font-black text-sm tracking-widest uppercase mb-2">
              Basit Otomasyon
            </div>
            <div className="text-[10px] text-white/40 font-mono-telemetry mb-4 lowercase">
              basitotomasyon.com
            </div>
            <p className="text-white/50 text-xs leading-relaxed mb-4 font-light">
              Kurumsal ölçekte otonom yapay zeka sistemleri, çok kanallı iletişim ajanları ve düşük gecikmeli iş akışı otomasyonları.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded text-[10px] text-white/70 uppercase tracking-widest">
              <User className="w-3.5 h-3.5 text-emerald-400" />
              <span>Geliştirici: <strong>Muhammed Fidan</strong></span>
            </div>
          </div>

          <div>
            <div className="text-white font-bold text-[11px] tracking-wider uppercase mb-4">
              Bilişsel İş Akışları (10)
            </div>
            <ul className="space-y-2 text-white/50 text-[11px] font-light">
              <li>Hukuk & Sözleşme İnceleme</li>
              <li>Sağlık & Klinik Ön Triyaj</li>
              <li>Fintek Sahtekarlık Savunması</li>
              <li>Otonom GitHub PR Sentezi</li>
              <li>İK & Yetenek Değerlendirme</li>
              <li>Gayrimenkul Değerleme & Ekspertiz</li>
            </ul>
          </div>

          <div>
            <div className="text-white font-bold text-[11px] tracking-wider uppercase mb-4">
              Çok Kanallı Ajanlar (10)
            </div>
            <ul className="space-y-2 text-white/50 text-[11px] font-light">
              <li>Sesli Yapay Zeka Çağrı Merkezi</li>
              <li>Telegram Ekosistem Nöbetçisi</li>
              <li>Instagram DM Satış Hunisi</li>
              <li>WhatsApp & SMS İletişim Ağ Geçidi</li>
              <li>Discord Operasyon Desteği</li>
              <li>Uygulama İçi Bağlamsal Asistan</li>
            </ul>
          </div>

          <div>
            <div className="text-white font-bold text-[11px] tracking-wider uppercase mb-4">
              Güvenlik & Regülasyon
            </div>
            <div className="space-y-2.5 text-white/50 text-[11px]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>KVKK & GDPR Tam Uyumluluk</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>SOC2 Type II Denetimli</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sıfır-Veri Tutma (Zero Retention)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>İzole VPC & Kurum İçi Kurulum</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Developer Attribution & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-white/40 text-[10px] gap-4 tracking-wider uppercase">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Basit Otomasyon (basitotomasyon.com). Tüm hakları saklıdır.</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-white/70 flex items-center gap-1 font-semibold">
              <User className="w-3 h-3 text-emerald-400" />
              Yapan Kişi: Muhammed Fidan
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Güvenlik Raporu</span>
            <span className="hover:text-white cursor-pointer transition-colors">SLA Koşulları</span>
            <span className="hover:text-white cursor-pointer transition-colors">Gizlilik & KVKK</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
