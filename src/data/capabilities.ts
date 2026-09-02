import { SystemCapability, SimulationWorkflow } from '../types';

export const CAPABILITIES: SystemCapability[] = [
  // Modül A: Kurumsal İş Akışları & Bilişsel Otomasyonlar (10 Sistem)
  {
    id: 'hr-talent',
    code: 'SYS-01 // İŞ AKIŞI',
    category: 'workflow',
    title: 'İK & Yetenek Kazanım Otomasyonu',
    headline: 'Otonom özgeçmiş ayrıştırma, aday değerlendirme matrisleri ve çok aşamalı ön eleme iş akışları',
    summary: 'Greenhouse, Lever, LinkedIn ve e-posta üzerinden gelen aday özgeçmişlerini otomatik ayrıştırır. Aday yetkinlik matrislerini çıkarır, asenkron sesli/yazılı ön eleme mülakatlarını yönetir ve sıralı aday raporlarını doğrudan ATS sistemine aktarır.',
    detailedArchitecture: [
      'PDF/DOCX formatındaki özgeçmişlerin yerel vizyon ve OCR modelleriyle yüksek doğrulukla taranması',
      'Aday yetkinliklerinin kurumun teknik gereksinimleriyle deterministik karşılaştırma algoritması',
      'Uç vaka soruları için adaya dinamik asenkron ön eleme soruları yönelten konuşma ajanı',
      'Önyargısız anonimleştirme ile ATS sistemine (Greenhouse/Lever) çift yönlü aday puan kartı senkronizasyonu'
    ],
    latency: '< 420ms / aday',
    throughput: '12.000 CV / saat',
    accuracy: '%99.4 veri çıkarma hassasiyeti',
    roiImpact: 'İlk İK eleme süresinde %78 azalma; işe alım döngüsünde 3.2 kat hızlanma',
    integrations: ['Greenhouse API', 'Lever Webhooks', 'Workday', 'Ashby', 'Slack Enterprise'],
    compliance: ['KVKK / GDPR Uyumlu', 'Önyargısız Denetim İzi', 'ISO 27001'],
    samplePayload: {
      input: { aday_id: 'ADAY-89421', kaynak: 'Greenhouse', pozisyon: 'Kıdemli Altyapı Mühendisi' },
      output: { uyum_skoru: 0.96, teknik_yeterlilik: 'Mükemmel', onerilen_aksiyon: 'Teknik Lider Mülakatına Yönlendir' }
    },
    metrics: [
      { label: 'İnceleme Süresi', value: '1.4 dk' },
      { label: 'Maliyet Tasarrufu', value: '-%82' },
      { label: 'Aday Memnuniyeti', value: '4.9 / 5' }
    ]
  },
  {
    id: 'legal-compliance',
    code: 'SYS-02 // İŞ AKIŞI',
    category: 'workflow',
    title: 'Hukuk & Sözleşme İnceleme (Redlining)',
    headline: 'Otonom sözleşme denetimi, madde kırmızı çizgi (redline) analizi ve mali/hukuki risk tespiti',
    summary: 'Hizmet sözleşmelerini (MSA), gizlilik anlaşmalarını (NDA) ve SLA belgelerini şirket hukuk yönergelerine göre tarar. Sınırsız sorumluluk, yetkisiz mahkemeler ve cezai şartları tespit ederek Word/DOCX üzerinde otomatik düzeltme önerileri üretir.',
    detailedArchitecture: [
      'Gelen sözleşme maddelerini standart emsal maddelerle token düzeyinde anlamsal karşılaştırma',
      'Çok katmanlı risk sınıflandırması: Sınırsız Sorumluluk, Fikri Mülkiyet sapmaları ve Gizlilik riskleri',
      'Değişiklikleri takip et (Track-Changes) formatında gerekçeli açıklamalarla DOCX redline üretimi',
      'Onaylanmış şablon maddelerinin kriptografik doğrulaması ile sıfır temaslı hızlı onay akışı'
    ],
    latency: '< 850ms / belge',
    throughput: '450 sözleşme / saat',
    accuracy: '%99.9 madde risk tespiti',
    roiImpact: 'Yıllık 420.000$ hukuki danışmanlık tasarrufu; onay süresini 14 günden 4 saate indirir',
    integrations: ['Ironclad', 'DocuSign CLM', 'Salesforce CPQ', 'SharePoint', 'Microsoft 365'],
    compliance: ['KVKK / GDPR', 'SOC2 Type II', 'Kurumsal Hukuk Kılavuzu'],
    samplePayload: {
      input: { belge_tipi: 'Kurumsal MSA', madde_sayisi: 64, yetki_alani: 'İstanbul Mahkemeleri' },
      output: { sorumluluk_siniri_duzeltildi: true, tazminat_riski: 'Hizmet Bedeliyle Sınırlandı', imzaya_hazir: true }
    },
    metrics: [
      { label: 'İnceleme Hızı', value: '12x Hız' },
      { label: 'Risk Koruması', value: '%100 Denetim' },
      { label: 'Hukuk Zamanı', value: '2.400 sa/yıl' }
    ]
  },
  {
    id: 'ecommerce-marketing',
    code: 'SYS-03 // İŞ AKIŞI',
    category: 'workflow',
    title: 'E-Ticaret & Katalog Otomasyonu',
    headline: 'Çok platformlu ürün metni üretimi, SEO optimizasyonu ve görsel zenginleştirme hattı',
    summary: 'ERP envanter verilerini Shopify Plus, Amazon, Trendyol ve Hepsiburada için optimize edilmiş çok kanallı ürün listelerine, yerelleştirilmiş reklam metinlerine ve yüksek dönüşümlü görsel açıklamalara dönüştürür.',
    detailedArchitecture: [
      'ERP ve PIM sistemlerinden ürün özelliklerinin (SKU, materyal, ölçü) anlık tüketimi',
      'Pazar yeri algoritmalarına (A9, Trendyol SEO) göre anahtar kelime zenginleştirmesi',
      'A/B test varyasyonları için dönüşüm odaklı ürün başlığı ve madde açıklaması üretimi',
      'Görsel temizleme, arka plan iyileştirme ve CDN senkronizasyonu'
    ],
    latency: '< 310ms / SKU',
    throughput: '35.000 SKU / saat',
    accuracy: '%99.1 pazar yeri uyumu',
    roiImpact: 'Ürün yayına alma süresinde %92 hızlanma; organik aramalarda %34 trafik artışı',
    integrations: ['Shopify Plus', 'Trendyol API', 'Hepsiburada API', 'Amazon Seller Central', 'SAP ERP'],
    compliance: ['Reklam Kurulu Uyumlu', 'Tüketici Hakları Güvencesi'],
    samplePayload: {
      input: { sku: 'TR-ELK-9012', kategori: 'Kablosuz Kulaklık', ham_stok: 1420 },
      output: { seo_skoru: 97, kanallar_guncellendi: ['Shopify', 'Trendyol'], yayin_durumu: 'Aktif' }
    },
    metrics: [
      { label: 'Katalog Hızı', value: '25x Artış' },
      { label: 'Dönüşüm Oranı', value: '+27%' },
      { label: 'Operasyon Süresi', value: '-%85' }
    ]
  },
  {
    id: 'customer-support',
    code: 'SYS-04 // İŞ AKIŞI',
    category: 'workflow',
    title: 'Müşteri Destek & Çözüm Motoru',
    headline: 'Çok dilli bilet sınıflandırma, duygu analizi ve deterministik otomatik yanıt sistemi',
    summary: 'Zendesk, Freshdesk ve Salesforce Service Cloud üzerindeki destek biletlerini milisaniyeler içinde kategorize eder. Çözüm tabanı ve sipariş veritabanını sorgulayarak otomatik iade, kargo takibi ve teknik çözüm adımlarını uygular.',
    detailedArchitecture: [
      'Gelen müşteri talebinde öfke, aciliyet ve churn riskini tespit eden gerçek zamanlı duygu analizi',
      'Sipariş yönetim sistemi ve kargo API sorgulamasıyla dinamik durum tespiti',
      'Yetkili iade ve değişiklikleri insan müdahalesine gerek kalmadan güvenli API ile gerçekleştirme',
      'Çözülemeyen karmaşık talepleri özet ve önerilen çözümle uzman personele aktarma'
    ],
    latency: '< 180ms / bilet',
    throughput: '50.000 bilet / saat',
    accuracy: '%98.7 doğru yönlendirme',
    roiImpact: 'İlk yanıtlama süresinde %84 azalma; destek maliyetlerinde %60 tasarruf',
    integrations: ['Zendesk Suite', 'Freshdesk', 'Salesforce Service Cloud', 'Intercom', 'Jira Service'],
    compliance: ['KVKK Güvenli', 'SOC2 Tip II', 'Sıfır Veri Tutma'],
    samplePayload: {
      input: { bilet_id: 'BLT-7729', kanal: 'E-Posta', musteri_duygu: 'Acil / Kızgın' },
      output: { konu: 'Kargo Gecikmesi', otomatik_cozum: 'Kargo Yeniden Yönlendirildi + Kupon', durum: 'Çözüldü' }
    },
    metrics: [
      { label: 'İlk Yanıt', value: '< 20 sn' },
      { label: 'Otomatik Çözüm', value: '%64' },
      { label: 'CSAT Skoru', value: '4.8 / 5' }
    ]
  },
  {
    id: 'finance-audit',
    code: 'SYS-05 // İŞ AKIŞI',
    category: 'workflow',
    title: 'Finans, Muhasebe & Dolandırıcılık Önleme',
    headline: 'Gerçek zamanlı banka/fatura mutabakatı, şüpheli işlem tespiti ve otonom harcama denetimi',
    summary: 'Kurumsal banka hareketlerini, ERP faturalarını ve çalışan harcama fişlerini anlık denetler. Mükerrer ödemeleri, kural dışı harcamaları ve yetkisiz transferleri durdurarak maliyet kaçaklarını önler.',
    detailedArchitecture: [
      'Banka ekstreleri ve ERP kayıtları arasında anlık çift taraflı eşleştirme ve mutabakat',
      'OCR ile fiş ve faturalardan vergi kimlik no, KDV ve kalem bazlı otomatik ayrıştırma',
      'Tutar, coğrafya ve alıcı bazlı dolandırıcılık tespiti ve işlem dondurma tetiği',
      'Kurumsal harcama politikalarına uyumsuzluk durumunda onay mercilerine otomatik eskalasyon'
    ],
    latency: '< 240ms / işlem',
    throughput: '100.000 işlem / saat',
    accuracy: '%99.98 finansal hassasiyet',
    roiImpact: 'Yıllık 1.2M$ mükerrer ödeme ve dolandırıcılık kaybı engellendi; mutabakat süresi %90 kısaldı',
    integrations: ['SAP S/4HANA', 'Oracle NetSuite', 'Stripe', 'Logo Yazılım', 'Mikro'],
    compliance: ['SOX Uyumlu', 'PCI-DSS Seviye 1', 'Vergi Usul Kanunu'],
    samplePayload: {
      input: { islem_id: 'TX-90142', tutar_tl: 284500, alici: 'Bilinmeyen Yeni IBAN' },
      output: { risk_skoru: 94, islem_durumu: 'Provizyonda Durduruldu', denetim_izlendi: true }
    },
    metrics: [
      { label: 'Kaçak Önleme', value: '1.2M$' },
      { label: 'Hata Oranı', value: '< %0.01' },
      { label: 'Mutabakat Hızı', value: '10x Hızlı' }
    ]
  },
  {
    id: 'supply-chain',
    code: 'SYS-06 // İŞ AKIŞI',
    category: 'workflow',
    title: 'Tedarik Zinciri & Lojistik Optimizasyonu',
    headline: 'Otonom stok tahmini, rota optimizasyonu ve navlun/gümrük dokümantasyon otomasyonu',
    summary: 'Depo stok seviyelerini, sevkiyat sürelerini ve gümrük süreçlerini yapay zeka ile senkronize eder. Kritik stok seviyelerinde otomatik sipariş oluşturur ve gümrük beyannamelerini eksiksiz hazırlar.',
    detailedArchitecture: [
      'Hava durumu, talep tahminleri ve geçmiş sipariş verileriyle stok tükenme simülasyonu',
      'Çoklu tedarikçi fiyat/teslimat sürelerinin karşılaştırılarak en uygun sipariş tetiği',
      'Gümrük ve konşimento belgelerinin uluslararası standartlara göre otonom doldurulması',
      'Taşıyıcı ve filo telemetrisi üzerinden gecikme tahmini ve dinamik alternatif rota ataması'
    ],
    latency: '< 480ms / sevkiyat',
    throughput: '8.000 rota / saat',
    accuracy: '%99.3 stok tahmin doğruluğu',
    roiImpact: 'Lojistik gecikmelerinde %38 azalma; atıl stok maliyetinde %29 düşüş',
    integrations: ['Flexport API', 'DHL Express', 'SAP Supply Chain', 'Oracle SCM', 'Geotab'],
    compliance: ['Uluslararası Ticaret Standartları', 'ISO 9001'],
    samplePayload: {
      input: { depo_kodu: 'DEPO-IST-03', kritik_sku: 'RUL-502', mevcut_stok: 14 },
      output: { siparis_tetiklendi: true, tedarikci: 'Tedarik A.Ş.', tahmini_teslimat: '24 Saat' }
    },
    metrics: [
      { label: 'Stok Doğruluğu', value: '%99.3' },
      { label: 'Gecikme Azalması', value: '-%38' },
      { label: 'Yıllık Tasarruf', value: '850K$' }
    ]
  },
  {
    id: 'cybersecurity-soc',
    code: 'SYS-07 // İŞ AKIŞI',
    category: 'workflow',
    title: 'Siber Güvenlik & Otonom SOC Müdahalesi',
    headline: 'SIEM log korelasyonu, fidye yazılımı engelleme ve otonom tehdit izolasyon protokolleri',
    summary: 'Milyonlarca güvenlik logunu saniyeler içinde analiz eder. Kimlik avı, yetkisiz giriş ve anormal ağ trafiğini tespit ederek riskli cihazları milisaniyeler içinde ağdan izole eder ve güvenlik ekibine raporlar.',
    detailedArchitecture: [
      'CrowdStrike, Splunk ve AWS GuardDuty alarmlarının anlamsal korelasyonu',
      'Saldırı göstergelerinin (IoC) küresel tehdit istihbaratı ağlarıyla doğrulanması',
      'Zararlı IP ve şüpheli uç noktaların firewall üzerinden otomatik engellenmesi',
      'Adli bilişim (forensic) kanıt paketinin oluşturulması ve CISO bildiriminin üretimi'
    ],
    latency: '< 85ms / tehdit',
    throughput: '150.000 olay / sn',
    accuracy: '%99.96 yanlış alarm filtreleme',
    roiImpact: 'Müdahale süresini (MTTR) 4 saatten 45 saniyeye indirir; fidye yazılımı riskini sıfırlar',
    integrations: ['CrowdStrike Falcon', 'Splunk SIEM', 'Palo Alto Cortex', 'AWS SecurityHub', 'SentinelOne'],
    compliance: ['NIST CSF', 'ISO 27001', 'SOC2 Type II'],
    samplePayload: {
      input: { hedef_ip: '10.0.4.128', anomali: 'Yüksek Hacimli Veri Sızıntısı Girişimi' },
      output: { guvenlik_aksiyonu: 'Port Kapatıldı & Token İptal', tehdit_seviyesi: 'Kritik (Karantinada)' }
    },
    metrics: [
      { label: 'Müdahale (MTTR)', value: '45 sn' },
      { label: 'Gürültü Azaltma', value: '-%94' },
      { label: 'Kapsama Oranı', value: '%100' }
    ]
  },
  {
    id: 'code-engineering',
    code: 'SYS-08 // İŞ AKIŞI',
    category: 'workflow',
    title: 'Yazılım & Kod PR Sentezleyici',
    headline: 'Otonom hata analizi, yama (patch) üretimi ve otomatik GitHub/GitLab PR oluşturma',
    summary: 'Sentry veya Datadog crash loglarını yakalar. İlgili kod deposunu analiz ederek hatayı mikro-container ortamında yeniden üretir, düzeltme kodunu ve testlerini yazarak GitHub PR olarak geliştiricilere sunar.',
    detailedArchitecture: [
      'Stacktrace ve crash loglarının kod tabanı AST sözdizim ağacı ile eşleştirilmesi',
      'İzole Docker ortamında hatayı yeniden üreten test senaryosunun yazılması',
      'Düzeltme kodunun (patch) ve regresyon birim testlerinin otomatik sentezlenmesi',
      'CI/CD pipeline testlerinin yeşile dönmesiyle pull request ve teknik özet paylaşımı'
    ],
    latency: '< 900ms / analiz',
    throughput: '3.000 PR / gün',
    accuracy: '%97.8 ilk seferde geçen testler',
    roiImpact: 'Yazılımcı hata ayıklama süresinde %65 tasarruf; sprint hızında %40 artış',
    integrations: ['GitHub Enterprise', 'GitLab CI', 'Sentry', 'Datadog', 'Linear'],
    compliance: ['Açık Kaynak Lisans Uyumu', 'Statik Kod Analizi (SAST)'],
    samplePayload: {
      input: { hata_kodu: 'SIGSEGV', repo: 'backend-gateway', dosya: 'session.go:142' },
      output: { pr_linki: 'github.com/org/gateway/pull/528', testler: '84/84 Başarılı', durum: 'İncelemeye Hazır' }
    },
    metrics: [
      { label: 'Hata Çözüm Hızı', value: '6x Hızlı' },
      { label: 'Mühendislik Saati', value: '+45 sa/hafta' },
      { label: 'Kod Kalitesi', value: 'A+ Derece' }
    ]
  },
  {
    id: 'healthcare-clinical',
    code: 'SYS-09 // İŞ AKIŞI',
    category: 'workflow',
    title: 'Sağlık & Klinik Veri Triyajı',
    headline: 'Hasta kayıtları analizi, laboratuvar raporu özetleme ve ICD-10 kodlama otomasyonu',
    summary: 'Hasta şikayetlerini, laboratuvar sonuçlarını ve hekim notlarını analiz eder. Tanı kodlarını (ICD-10/ICD-11) otomatik eşler, kritik değerlerde hekimlere anlık uyarı iletir ve sigorta onay formlarını hazırlar.',
    detailedArchitecture: [
      'Laboratuvar ve görüntüleme raporlarından tıbbi NLP ile tanı ve parametre ayrıştırma',
      'Kritik hasta parametrelerinde (örn. troponin, kreatinin) anlık hekim acil uyarısı',
      'Klinik notların resmi sigorta ve bakanlık tanı kodlarıyla (ICD-10) deterministik eşleştirilmesi',
      'Epikriz raporlarının ve reçete özetlerinin hasta diline çevrilerek hazırlanması'
    ],
    latency: '< 350ms / rapor',
    throughput: '15.000 hasta kaydı / saat',
    accuracy: '%99.7 klinik veri doğruluğu',
    roiImpact: 'Doktorların idari iş yükünü %70 azaltır; sigorta faturalandırma reddini %88 düşürür',
    integrations: ['Epic Systems', 'Cerner', 'Enabız API', 'PACS / DICOM', 'Medula'],
    compliance: ['HIPAA BAA Uyumlu', 'KVKK Sağlık Verisi Enklavı', 'HL7 FHIR'],
    samplePayload: {
      input: { hasta_protokol: 'PRT-44120', tahlil: 'Tam Kan & Biyokimya' },
      output: { kritik_bulgu: 'Yok', icd10: ['E11.9', 'I10'], onay_durumu: 'Hekim İncelemesinde' }
    },
    metrics: [
      { label: 'İdari Süre Azalması', value: '-%70' },
      { label: 'Kodlama Doğruluğu', value: '%99.7' },
      { label: 'Hekim Memnuniyeti', value: '4.9 / 5' }
    ]
  },
  {
    id: 'operations-erp',
    code: 'SYS-10 // İŞ AKIŞI',
    category: 'workflow',
    title: 'ERP, Fatura & Banka Mutabakatı',
    headline: 'E-Fatura doğrulama, satınalma siparişi 3 yönlü eşleştirme ve otomatik defter kaydı',
    summary: 'Tedarikçi faturalarını, irsaliyeleri ve satınalma siparişlerini (PO) 3 yönlü eşleştirir. Tutarsızlıkları ayıklar, onaylanan faturaları otomatik olarak ERP genel muhasebe defterine kaydeder.',
    detailedArchitecture: [
      'GİB e-Fatura / e-Arşiv XML ve PDF formatlarının OCR ve şema doğrulayıcı ile okunması',
      'Satınalma siparişi, mal kabul irsaliyesi ve fatura tutarlarının 3 yönlü çapraz kontrolü',
      'Kuruş ve miktar farklarında tolerans sınırlarına göre otomatik düzeltme veya bildirim',
      'SAP, Logo, Netsis ve Mikro sistemlerine doğrudan muhasebe fiş kaydı entegrasyonu'
    ],
    latency: '< 290ms / fatura',
    throughput: '40.000 fatura / saat',
    accuracy: '%99.95 muhasebe doğruluğu',
    roiImpact: 'Fatura işleme maliyetini 12$\'dan 0.15$\'a düşürür; gecikme cezalarını sıfırlar',
    integrations: ['SAP ERP', 'Logo Tiger/Joker', 'Netsis', 'Mikro', 'Uyumsoft E-Fatura'],
    compliance: ['VUK Uyumlu', 'GİB Entegrasyonu', 'SOX Finansal Denetim'],
    samplePayload: {
      input: { fatura_no: 'GIB2025000189', tutar_tl: 84200.50, satinalma_no: 'PO-9912' },
      output: { uc_yonlu_eslesme: 'Başarılı', muhasebe_fisi: 'FİS-2025-412', durum: 'Onaylandı' }
    },
    metrics: [
      { label: 'Fatura Başı Maliyet', value: '-98%' },
      { label: 'İşlem Hızı', value: '30x Hız' },
      { label: 'Hata Oranı', value: '< %0.02' }
    ]
  },

  // Modül B: Otonom Çok Kanallı İletişim Ajanları (10 Sistem)
  {
    id: 'whatsapp-sales',
    code: 'SYS-11 // OTONOM AJAN',
    category: 'omnichannel',
    title: 'WhatsApp Kurumsal Satış & Destek Ajanı',
    headline: 'Resmi WhatsApp Business API üzerinde 7/24 satış kapatma, katalog sunumu ve sipariş tamamlama',
    summary: 'Müşterileri WhatsApp üzerinde karşılar, ürün önerileri sunar, sepeti tamamlatır ve ödeme linki gönderir. İptal, iade ve kargo sorgularını CRM ile anlık konuşarak çözer.',
    detailedArchitecture: [
      'Meta Cloud API & WhatsApp Business API doğrudan web hook entegrasyonu',
      'Katalog ürünlerinin interaktif butonlar ve liste mesajlarıyla sunumu',
      'Kullanıcı niyetine göre kişiselleştirilmiş çapraz satış (cross-sell) teklifleri',
      'Iyzico, Stripe veya PayTR ödeme linki oluşturarak sohbet içinden sipariş tamamlama'
    ],
    latency: '< 210ms yanıt süresi',
    throughput: '30.000 eşzamanlı oturum',
    accuracy: '%98.9 bağlamsal doğruluk',
    roiImpact: 'Terk edilmiş sepet geri kazanımında %42 artış; satış temsilcisi veriminde 4x yükseliş',
    integrations: ['WhatsApp Cloud API', 'Shopify', 'Salesforce CRM', 'HubSpot', 'Iyzico API'],
    compliance: ['Meta Business Güvencesi', 'KVKK / GDPR', 'SSL Uçtan Uca'],
    samplePayload: {
      input: { musteri_tel: '+90532xxxxxxx', mesaj: 'Geçen haftaki siparişim kargoya verildi mi?' },
      output: { yanit: 'Merhaba Ahmet Bey, siparişiniz Yurtiçi Kargo ile yolda. Takip no: YK-88124.', kargo_linki: 'takip.link/yk' }
    },
    metrics: [
      { label: 'Dönüşüm Oranı', value: '+38%' },
      { label: 'Ort. Yanıt Süresi', value: '1.2 sn' },
      { label: 'Müşteri Skoru', value: '4.9 / 5' }
    ]
  },
  {
    id: 'telegram-sentinel',
    code: 'SYS-12 // OTONOM AJAN',
    category: 'omnichannel',
    title: 'Telegram Ekosistem & Topluluk Botu',
    headline: 'Grup moderasyonu, VIP abonelik yönetimi, kripto/finans sinyalleri ve otonom müşteri desteği',
    summary: 'Telegram gruplarında ve kanallarında spam filtreleme yapar, VIP üyelik ödemelerini tahsil eder, soruları yanıtlar ve topluluk etkileşimini otonom olarak yönetir.',
    detailedArchitecture: [
      'MTProto ve Telegram Bot API ile yüksek hızlı olay dinleme hattı',
      'Filtreleme motoru ile spam, oltalama ve uygunsuz içeriklerin milisaniyede silinmesi',
      'Stripe veya kripto ödeme doğrulaması ile otomatik özel grup davet linki üretimi',
      'Kullanıcıların özel DM sorularını kurum bilgi tabanına göre anında yanıtlama'
    ],
    latency: '< 140ms işlem hızı',
    throughput: '45.000 mesaj / sn',
    accuracy: '%99.8 spam engelleme',
    roiImpact: 'Topluluk yönetim maliyetinde %85 azalma; VIP abonelik dönüşümünde %55 artış',
    integrations: ['Telegram Bot API', 'MTProto', 'TON / Web3 Gateway', 'Stripe', 'Redis Cluster'],
    compliance: ['Sıfır Günlük Tutma', 'Şifreli Veri İletişimi'],
    samplePayload: {
      input: { grup_id: '-10019284', kullanici: '@yatirimci_ali', mesaj: 'VIP kanal abonelik ücreti nedir?' },
      output: { aksiyon: 'DM Gönderildi + Güvenli Ödeme Linki', kanal_tipi: 'VIP Finans Odası' }
    },
    metrics: [
      { label: 'Spam Engelleme', value: '%99.8' },
      { label: 'Üye Büyümesi', value: '3.4x' },
      { label: 'Topluluk CSAT', value: '4.8 / 5' }
    ]
  },
  {
    id: 'instagram-dm',
    code: 'SYS-13 // OTONOM AJAN',
    category: 'omnichannel',
    title: 'Instagram DM Satış Dönüşüm Botu',
    headline: 'Hikaye yanıtları, yorumlardan DM\'e yönlendirme ve doğrudan satış hunisi otomasyonu',
    summary: 'Hikaye ve reels yorumlarında yazılan anahtar kelimeleri (örn: "fiyat", "link") anında yakalar, kullanıcıya DM üzerinden ürün bağlantısını ve özel indirim kodunu ileterek satışı tamamlar.',
    detailedArchitecture: [
      'Meta Graph API ve Instagram Messaging API anlık webhook dinleme',
      'Gönderi ve reels altındaki yorumları anında yanıtlayıp DM\'e otomatik geçiş sağlama',
      'DM içinde ürün kataloğunu kaydırılabilir kartlar ve beden seçenekleriyle sunma',
      'Influencer kampanya kodlarını takip ederek hangi içeriğin ne kadar ciro getirdiğini ölçme'
    ],
    latency: '< 260ms tetikleme',
    throughput: '20.000 DM / saat',
    accuracy: '%98.5 doğru niyet anlama',
    roiImpact: 'Instagram organik trafiğinden ciroya dönüşümde 3.8 kat artış; kaçan müşteri oranında %75 düşüş',
    integrations: ['Instagram Graph API', 'Shopify', 'Klaviyo', 'Meta Ads Manager', 'WooCommerce'],
    compliance: ['Meta Platform Politikası', 'KVKK İzinli Pazarlama'],
    samplePayload: {
      input: { kullanici: '@deniz_kaya', tetikleyici: 'Reels Yorumu: "Fiyat nedir?"' },
      output: { dm_gonderildi: true, urun_linki: 'basitotomasyon.com/urun/441', indirim_kodu: 'INSTA15' }
    },
    metrics: [
      { label: 'DM Dönüşümü', value: '+380%' },
      { label: 'Ciro Artışı', value: '+45%' },
      { label: 'Cevap Süresi', value: '< 3 sn' }
    ]
  },
  {
    id: 'voice-ai',
    code: 'SYS-14 // OTONOM AJAN',
    category: 'omnichannel',
    title: 'Sesli Yapay Zeka Telefon Ajanı',
    headline: 'Gecikmesiz insan benzeri ses sentezi, telefon santral entegrasyonu ve otonom arama yönetimi',
    summary: 'Gelen müşteri aramalarını karşılar veya giden arama kampanyaları yürütür. Doğal Türkçe ses tonlamasıyla konuşur, randevu oluşturur, borç hatırlatması yapar ve karmaşık talepleri operatöre aktarır.',
    detailedArchitecture: [
      'SIP / WebRTC protokolü ile kurumsal santral (Asterisk, FreePBX, Genesys) entegrasyonu',
      '< 300ms uçtan uca konuşma gecikmesi (Türkçe ASR + Akıl Yürütme + Doğal TTS)',
      'Arayan müşterinin sözünü kesebilme (Barge-in) ve doğal diyalog akışı yönetimi',
      'Görüşme biter bitmez ses kaydının transkriptini ve CRM notunu otomatik kaydetme'
    ],
    latency: '< 280ms ses yanıtı',
    throughput: '5.000 eşzamanlı telefon hattı',
    accuracy: '%97.4 Türkçe anlama doğruluğu',
    roiImpact: 'Çağrı merkezi personel maliyetinde %65 azalma; kaçırılan arama oranında sıfıra iniş',
    integrations: ['Twilio Voice', 'Genesys Cloud', 'Asterisk / FreePBX', 'Cisco CallManager', 'Salesforce'],
    compliance: ['BTK Çağrı Kaydı Uyumu', 'KVKK Açık Rıza Protokolü'],
    samplePayload: {
      input: { arayan_no: '0850xxxxxxx', musteri: 'Selin Yıldız', talep: 'Randevu Değişikliği' },
      output: { randevu_tarihi: '18 Ekim 14:30', durum: 'Onaylandı & SMS Gönderildi', sure_sn: 54 }
    },
    metrics: [
      { label: 'Ses Gecikmesi', value: '280 ms' },
      { label: 'Maliyet Azalışı', value: '-%65' },
      { label: 'Görüşme Başarısı', value: '%91' }
    ]
  },
  {
    id: 'web-livechat',
    code: 'SYS-15 // OTONOM AJAN',
    category: 'omnichannel',
    title: 'Web Canlı Destek & Ziyaretçi Karşılama Botu',
    headline: 'Ziyaretçi davranışına göre proaktif teklifler sunan, teknik dokümantasyon bilgili web ajanı',
    summary: 'Web sitenizdeki ziyaretçilerin hangi sayfada ne kadar kaldığını takip eder. Tam satın alma veya ayrılma anında devreye girerek soruları anında yanıtlar ve iletişim bilgilerini toplar.',
    detailedArchitecture: [
      'Hafif ve hızlı Web SDK ile sayfa hızına sıfır etki eden modern widget arayüzü',
      'Kullanıcının sepet tutarına ve gezindiği sayfalara göre proaktif karşılama mesajları',
      'Şirket bilgi tabanı, API dokümanları ve SSS sayfalarını vektör veri tabanından anlık sorgulama',
      'Nitelikli potansiyel müşteri (Lead) verilerini anında Salesforce veya HubSpot\'a yazma'
    ],
    latency: '< 95ms açılış ve yanıt',
    throughput: '100.000 eşzamanlı web oturumu',
    accuracy: '%99.2 doğru bilgi aktarımı',
    roiImpact: 'Web sitesi form doldurma oranlarında %52 artış; müşteri destek yükünde %70 düşüş',
    integrations: ['Segment', 'Google Analytics 4', 'HubSpot', 'WordPress', 'Next.js / React'],
    compliance: ['Çerez Kanunu Uyumlu', 'KVKK Açık Rıza Bildirimi'],
    samplePayload: {
      input: { sayfa: '/fiyatlandirma', ziyaret_suresi_sn: 45, kaydirma_orani: '%80' },
      output: { proaktif_mesaj: 'Fiyatlandırma paketlerimiz hakkında teknik bilgi almak ister misiniz?', lead_skoru: 88 }
    },
    metrics: [
      { label: 'Lead Artışı', value: '+52%' },
      { label: 'İlk Yanıt', value: '0.8 sn' },
      { label: 'Memnuniyet', value: '4.9 / 5' }
    ]
  },
  {
    id: 'linkedin-b2b',
    code: 'SYS-16 // OTONOM AJAN',
    category: 'omnichannel',
    title: 'LinkedIn B2B Sosyal Satış & Ağ Ajanı',
    headline: 'Hedefli şirket ve karar verici profili analizi, kişiselleştirilmiş bağlantı ve B2B randevu alma',
    summary: 'Hedeflediğiniz sektör ve unvanlardaki yöneticileri tespit eder. Şirketlerinin güncel haberlerini ve paylaşımlarını inceleyerek son derece kişiselleştirilmiş mesajlarla iletişime geçer ve satış toplantısı ayarlar.',
    detailedArchitecture: [
      'LinkedIn Sales Navigator ve şirket web sitelerinden karar verici veri zenginleştirme',
      'Hedef kişinin son paylaşımlarını analiz ederek şablon hissi vermeyen özgün mesaj yazımı',
      'Olumlu geri dönüşlerde takvim linki (Calendly/Cal.com) ile otomatik randevu teyidi',
      'Tüm iletişim geçmişinin ve anlaşma aşamalarının CRM sistemine anlık aktarımı'
    ],
    latency: '< 550ms / profil analizi',
    throughput: '2.500 B2B etkileşim / gün',
    accuracy: '%96.5 doğru unvan eşleşmesi',
    roiImpact: 'B2B satış ekibinin toplantı sayısında 3.5 kat artış; müşteri edinme maliyetinde %45 düşüş',
    integrations: ['LinkedIn Sales Navigator', 'HubSpot CRM', 'Cal.com', 'Apollo.io', 'Slack'],
    compliance: ['LinkedIn Kullanım Koşulları', 'B2B İş Etiği İlkeleri'],
    samplePayload: {
      input: { hedef_unvan: 'CTO', sektor: 'Fintek', sirket_buyuklugu: '100-500 Çalışan' },
      output: { randevu_alindi: true, toplanti_tarihi: '22 Ekim 11:00', takvim_daveti: 'Gönderildi' }
    },
    metrics: [
      { label: 'Toplantı Oranı', value: '3.5x' },
      { label: 'Dönüşüm Oranı', value: '%24' },
      { label: 'Pipeline Katkısı', value: '850K$' }
    ]
  },
  {
    id: 'email-dispatch',
    code: 'SYS-17 // OTONOM AJAN',
    category: 'omnichannel',
    title: 'Akıllı E-Posta Triyaj & Otomasyon Ajanı',
    headline: 'Gelen kurumsal e-postaları önceliklendirme, ekleri ayrıştırma ve onaylı taslak yanıt üretimi',
    summary: 'info@, destek@ veya sirket@ e-posta kutularına gelen yüzlerce mesajı okur. Önemsiz postaları eler, acil teklif ve fatura taleplerini ilgili departmana iletir ve hazır taslak yanıtları yönetici onayına sunar.',
    detailedArchitecture: [
      'Microsoft Graph ve Google Workspace API ile e-posta akışlarının güvenli okunması',
      'Eklerdeki PDF, Excel ve Word dosyalarının otomatik OCR ile taranması ve veri çıkarımı',
      'Kurum yöneticisinin yazım üslubuna uyumlu, profesyonel yanıt taslaklarının hazırlanması',
      'Kritik müşteri ve yatırımcı e-postalarında SMS veya Slack üzerinden anlık acil bildirim'
    ],
    latency: '< 320ms / e-posta',
    throughput: '25.000 e-posta / saat',
    accuracy: '%99.1 doğru departman sınıflandırması',
    roiImpact: 'Gelen kutusu yönetimi süresinde %80 azalma; müşteri teklif yanıt süresinde 6 kat hızlanma',
    integrations: ['Google Workspace', 'Microsoft 365', 'Exchange Server', 'Slack', 'Zendesk'],
    compliance: ['E-Posta Şifreleme (TLS 1.3)', 'KVKK / GDPR', 'Sıfır İkincil Depolama'],
    samplePayload: {
      input: { gonderen: 'ceo@partner.com', konu: '2026 Ortaklık Teklifi', ek: 'sozlesme_taslak.pdf' },
      output: { oncelik: 'Yüksek / VIP', taslak_hazir: true, yonetici_ozeti: 'Ekli teklif 250K$ değerinde.' }
    },
    metrics: [
      { label: 'Gelen Kutusu Süresi', value: '-80%' },
      { label: 'Hızlı Yanıt', value: '6x Hız' },
      { label: 'Hata Oranı', value: '< %0.01' }
    ]
  },
  {
    id: 'field-scheduler',
    code: 'SYS-18 // OTONOM AJAN',
    category: 'omnichannel',
    title: 'Saha Satış & Akıllı Randevu Yönetim Botu',
    headline: 'Konum bazlı saha ekibi rotalama, müşteri randevu teyidi ve servis takip otomasyonu',
    summary: 'Teknik servis ve saha satış ekiplerinin randevularını müşterilerle WhatsApp veya SMS üzerinden teyit eder. Adres ve trafik durumuna göre rotayı en verimli şekilde optimize eder.',
    detailedArchitecture: [
      'Google Maps Platform ve trafik API\'leri ile dinamik mesafe/zaman optimizasyonu',
      'Randevudan 24 saat ve 2 saat önce müşteriye otomatik teyit mesajı gönderme',
      'Müşteri iptal veya saat değişikliği talep ettiğinde takvimi anında yeniden düzenleme',
      'Saha personelinin konumunu ve servis durumunu müşteriye canlı takip linkiyle sunma'
    ],
    latency: '< 210ms rota hesabı',
    throughput: '10.000 saha görevi / gün',
    accuracy: '%99.4 randevu sadakat oranı',
    roiImpact: 'Saha yakıt ve zaman maliyetinde %35 tasarruf; boş geçen randevularda %82 azalma',
    integrations: ['Google Maps API', 'Twilio SMS', 'Salesforce Field Service', 'WhatsApp API', 'SAP'],
    compliance: ['Konum Gizliliği', 'KVKK İzinli Takip'],
    samplePayload: {
      input: { servis_kaydi: 'SRV-8821', musteri_konum: 'Kadıköy, İstanbul', teknisyen: 'Ahmet T.' },
      output: { tahmini_varis: '14:45', musteri_onayladi: true, rota_uzunlugu_km: 12.4 }
    },
    metrics: [
      { label: 'Yakıt Tasarrufu', value: '-%35' },
      { label: 'İptal Azalması', value: '-%82' },
      { label: 'Servis Sayısı', value: '+40%' }
    ]
  },
  {
    id: 'discord-community',
    code: 'SYS-19 // OTONOM AJAN',
    category: 'omnichannel',
    title: 'Discord Topluluk & Destek Moderatörü',
    headline: 'Geliştirici toplulukları, Web3 projeleri ve SaaS kullanıcıları için 7/24 teknik asistan',
    summary: 'Discord sunucularında yeni üyeleri karşılar, rolleri otomatik atar, teknik dokümantasyon sorularını cevaplar ve kurallara uymayan kullanıcıları anında uyarır veya susturur.',
    detailedArchitecture: [
      'Discord.js ve Discord Gateway API üzerinde kesintisiz bot mimarisi',
      'Geliştiricilerin paylaştığı kod bloklarını analiz edip hata ayıklama önerisi sunma',
      'Kullanıcı GitHub veya cüzdan doğrulamasını yaparak otomatik özel rol verme',
      'Spam, dolandırıcılık linkleri ve saldırı girişimlerinde anında karantina tetiği'
    ],
    latency: '< 120ms mesaj yanıtı',
    throughput: '50.000 mesaj / sn',
    accuracy: '%99.6 spam temizleme',
    roiImpact: 'Topluluk moderatör ihtiyacını %90 azaltır; teknik destek çözüm süresini dakikalara indirir',
    integrations: ['Discord API', 'GitHub Webhooks', 'Collab.Land', 'Zendesk', 'Discourse'],
    compliance: ['Discord Geliştirici Koşulları', 'Güvenli Veri Politikası'],
    samplePayload: {
      input: { kanal: '#yardim-destek', kullanici: 'mehmet#1024', soru: 'Web SDK entegrasyonunda 401 hatası alıyorum.' },
      output: { yanit: 'API anahtarınızın Authorization başlığında "Bearer " ön ekiyle gönderildiğinden emin olun.', durum: 'Çözüldü' }
    },
    metrics: [
      { label: 'Çözüm Süresi', value: '2 dk' },
      { label: 'Topluluk Skoru', value: '4.9 / 5' },
      { label: 'Gereksiz Bilet', value: '-%75' }
    ]
  },
  {
    id: 'sms-push',
    code: 'SYS-20 // OTONOM AJAN',
    category: 'omnichannel',
    title: 'SMS & Anlık Bildirim Reaktivasyon Botu',
    headline: 'Kişiselleştirilmiş SMS kampanyaları, kargo bildirimleri ve sepette kalanları hatırlatma hattı',
    summary: 'Mobil uygulama bildirimleri ve SMS kanallarını en uygun saatte tetikler. Müşterinin ilgi duyduğu ürünlerde indirim olduğunda veya kargo yola çıktığında yüksek açılma oranlı mesajlar iletir.',
    detailedArchitecture: [
      'Toplu SMS servis sağlayıcıları ve Firebase Cloud Messaging (FCM) entegrasyonu',
      'Müşterinin geçmiş mesaj açma saatlerine göre en ideal gönderim zamanını seçme',
      'İleti Yönetim Sistemi (İYS) sorgulaması ile izin kontrolü yaparak cezai riskleri engelleme',
      'Kişiye özel kısaltılmış takip linkleri ile tıklama ve ciro ölçümü'
    ],
    latency: '< 150ms dağıtım',
    throughput: '200.000 SMS / saat',
    accuracy: '%99.9 teslimat oranı',
    roiImpact: 'SMS açılma oranlarında %44 artış; terk edilen sepet cirosunda %32 geri kazanım',
    integrations: ['Netgsm', 'Twilio', 'Firebase (FCM)', 'OneSignal', 'İYS (İleti Yönetim Sistemi)'],
    compliance: ['İYS Uyumlu', 'Elektronik Ticaret Kanunu (ETK)', 'KVKK'],
    samplePayload: {
      input: { musteri: 'Kemal B.', sepet_tutari_tl: 1450, bekleme_suresi: '4 Saat' },
      output: { sms_metni: 'Sepetinizdeki ürünler tükenmeden tamamlayın! Size özel kargo bedava.', gonderildi: true }
    },
    metrics: [
      { label: 'Açılma Oranı', value: '%96' },
      { label: 'Sepet Kazanımı', value: '+32%' },
      { label: 'İYS Uyum', value: '%100' }
    ]
  }
];

export const SIMULATION_WORKFLOWS: SimulationWorkflow[] = [
  {
    id: 'voice-sim',
    name: 'Sesli AI Triyaj & Çağrı Merkezi',
    description: 'Sesli müşteri aramasının anlık metne dökülmesi, niyet tespiti, CRM sorgusu ve insan benzeri ses yanıtı.',
    inputLabel: 'Müşteri Canlı Ses İletisi / Transkripti',
    defaultInput: 'Merhaba, dün verdiğim siparişimin teslimat adresini acilen Kadıköy yerine Beşiktaş olarak değiştirmek istiyorum. Kurye yola çıktı mı?',
    stages: [
      { name: '1. Ses Tanıma & Transkripsiyon (ASR)', detail: '180ms içinde Türkçe fonetik ses dalgası metne dönüştürüldü.', durationMs: 400 },
      { name: '2. Niyet Tespiti & Varlık Çıkarımı', detail: 'Niyet: "ADRES_GUNCELLEME", Konum: "Beşiktaş", Aciliyet: "Yüksek".', durationMs: 350 },
      { name: '3. CRM & Kargo API Doğrulaması', detail: 'Sipariş durumu: "Hazırlanıyor (Henüz Kuryeye Verilmedi)". Değişiklik uygulanabilir.', durationMs: 450 },
      { name: '4. Güvenlik & Doğrulama Kontrolü', detail: 'Arayan telefon numarası müşteri profiliyle eşleşti (%100 Güvenli).', durationMs: 300 },
      { name: '5. Doğal Ses Sentezi & ERP Güncellemesi', detail: 'Yeni teslimat adresi ERP\'ye işlendi. Akıcı Türkçe ses yanıtı oluşturuldu.', durationMs: 500 }
    ],
    sampleLogs: [
      '[00:00.042] [SIP] +90532xxxxxxx numarasından ses akışı SIP hattına bağlandı.',
      '[00:00.184] [ASR] Ses dalgaları yerel model ile metne çevrildi: "Adres güncelleme..."',
      '[00:00.320] [ORCHESTRATION] LLM niyet sınıflandırması: NİYET_ADRES_GUNCELLEME.',
      '[00:00.410] [REST API] ERP sipariş sorgusu yapıldı: SIP-2025-9941 bulundu.',
      '[00:00.590] [ERP MUTASYON] Yeni teslimat adresi "Beşiktaş, İstanbul" olarak kaydedildi.',
      '[00:00.810] [TTS] Ses sentezleyici 280ms içinde akıcı ses akışını başlattı.'
    ],
    outputData: {
      durum: 'BAŞARIYLA_COZULDU',
      musteri_id: 'CUST-88194',
      siparis_kodu: 'SIP-2025-9941',
      onceki_adres: 'Kadıköy, İstanbul',
      guncel_adres: 'Beşiktaş, İstanbul',
      kurye_bilgilendirildi: true,
      arama_suresi_sn: 18.4,
      ses_yanit_gecikmesi_ms: 284
    }
  },
  {
    id: 'fraud-sim',
    name: 'Finans Dolandırıcılık Tespiti & Müdahale',
    description: 'Yüksek tutarlı şüpheli para transferinin anlık tespiti, hesap dondurma ve CISO uyarısı.',
    inputLabel: 'Gelen Banka Transfer / Ödeme JSON Olayı',
    defaultInput: `{
  "islem_id": "TX-994821",
  "hesap_no": "TR330006100000012345678901",
  "tutar_tl": 450000.00,
  "alici_iban": "TR990006200000098765432100",
  "ip_adresi": "185.220.101.5",
  "saat": "03:42:11"
}`,
    stages: [
      { name: '1. Olay Tüketimi (Kafka Stream)', detail: 'Banka ödeme akışından mikrosaniyeler içinde işlem yakalandı.', durationMs: 250 },
      { name: '2. Özellik Deposu & Anomali Taraması', detail: 'Son 90 günlük şirket transfer ortalaması: 14.000 TL. Mevcut işlem: 450.000 TL (32 kat sapma).', durationMs: 450 },
      { name: '3. Risk Puanlaması & Coğrafi IP', detail: 'Risk Skoru: 98.4 / 100 (Yeni alıcı, gece yarısı işlemi, şüpheli proxy IP).', durationMs: 400 },
      { name: '4. Otonom Güvenlik Tetiği (Kill-Switch)', detail: 'İşlem provizyonda donduruldu. Para transferi bankacılık sisteminde bekletmeye alındı.', durationMs: 350 },
      { name: '5. Denetim İzi & Yetkili Bildirimi', detail: 'Şüpheli İşlem Raporu otomatik oluşturuldu. SMS ile hesap sahibine acil doğrulama kodu gönderildi.', durationMs: 300 }
    ],
    sampleLogs: [
      '[00:00.004] [KAFKA] İşlem ödeme kuyruğundan çekildi: TX-994821.',
      '[00:00.018] [REDIS] Hesap geçmişi çekildi: Hesap ortalaması 14.000 TL.',
      '[00:00.027] [INFERENCE] Anomali tespit edildi: Tutar standart sapmanın 32 katı.',
      '[00:00.034] [GATEWAY] Çekirdek bankacılık sistemine BLOKE komutu iletildi.',
      '[00:00.041] [NOTIFY] Şirket Finans Direktörüne ve Risk Masasına acil bildirim gönderildi.',
      '[00:00.048] [AUDIT] Kriptografik denetim kaydı oluşturuldu: 0x9f4a...e12d.'
    ],
    outputData: {
      karar: 'ISLEM_DURDURULDU_VE_BLOKE_EDILDI',
      dolandiricilik_olasiligi: 0.984,
      risk_faktorleri: [
        'Transfer tutarı (450.000 TL) hesap geçmiş ortalamasını 32 kat aşıyor',
        'Alıcı IBAN ilk defa kullanılıyor ve gece yarısı işlem yapıldı',
        'Cihaz ve IP adresi bilinen konum dışından bağlandı'
      ],
      kurtarilan_tutar_tl: 450000.00,
      alinan_onlem: 'Transfer beklemeye alındı; Şirket sahibine acil onay çağrısı başlatıldı',
      yanit_suresi_ms: 32.4
    }
  },
  {
    id: 'github-sim',
    name: 'Otonom Kod PR Sentezleyici',
    description: 'Hata bildirimini okuyan, test ortamında hatayı yeniden üreten ve GitHub PR açan yazılım ajanı.',
    inputLabel: 'Hata Bildirimi (Crash Trace & Issue)',
    defaultInput: `Issue #412: Ağ Geçidinde Eşzamanlı WebSocket Bağlantı Kopmalarında SIGSEGV Hatası.
Stacktrace:
goroutine 8192 [running]:
gateway.(*SessionPool).Remove(0xc000192000, 0x14)
    /src/session.go:142 +0x3a
gateway.(*Client).Close(0xc000284000)
    /src/client.go:88 +0x22`,
    stages: [
      { name: '1. Kod Deposu AST Ağaç Analizi', detail: '450.000 satır Go kodu semantik bağımlılık grafiğine aktarıldı.', durationMs: 450 },
      { name: '2. Mikro-VM İzolasyon Test Alanı', detail: 'Bağımsız Docker container 420ms içinde ayağa kaldırıldı.', durationMs: 600 },
      { name: '3. Hatanın Yeniden Üretilmesi', detail: 'Eşzamanlı istek testi ile session.go:142 satırındaki kilitlenme doğrulandı.', durationMs: 700 },
      { name: '4. Yama (Patch) ve Regresyon Testi', detail: 'sync.RWMutex kilidi eklendi; TestConcurrentClose testi yazıldı.', durationMs: 650 },
      { name: '5. GitHub PR Yayını & CI Onayı', detail: 'Pull Request #528 oluşturuldu. 84/84 CI birim testi başarıyla geçti.', durationMs: 500 }
    ],
    sampleLogs: [
      '[00:00.082] [WEBHOOK] GitHub #412 numaralı hata bildirimi alındı.',
      '[00:00.490] [SANDBOX] Mikro-VM başlatıldı (Go 1.22.4). Depo klonlandı.',
      '[00:01.120] [DEBUG] Hata 100 çalıştırmanın 3\'ünde yeniden üretildi (Race condition).',
      '[00:01.810] [SYNTHESIS] Eşzamanlı harita yazma hatası için RWMutex kilidi sentezlendi.',
      '[00:02.420] [VERIFY] `go test -race ./...` çalıştırıldı -> 84 başarılı, 0 hata.',
      '[00:02.900] [PR] PR #528 açıldı: "fix(gateway): resolve concurrent session map race".'
    ],
    outputData: {
      pr_linki: 'https://github.com/basitotomasyon/gateway/pull/528',
      duzeltme_ozeti: 'session.go:142 satırında harita erişimi sync.RWMutex ile korundu',
      eklenen_test: 'TestConcurrentDisconnectRaceCondition',
      ci_durumu: 'TÜM_TESTLER_GEÇTİ (84/84 Başarılı)',
      tasarruf_edilen_muhendislik_saati: 4.5,
      otonom_guven_skoru: 0.994
    }
  }
];

export const TECH_ECOSYSTEM = {
  foundations: [
    { name: 'Google Gemini 2.5 Pro / Flash', role: 'Birincil Bilişsel Orkestratör & Çok Modlu Akıl Yürütme Motoru' },
    { name: 'DeepSeek R1 / V3', role: 'Deterministik Mantık Doğrulama & Karmaşık Matematiksel Ayrıştırma' },
    { name: 'Anthropic Claude 3.7 Sonnet', role: 'İleri Düzey Kod AST Sentezi & Hukuki Sözleşme Redline Motoru' },
    { name: 'Llama 3.3 70B (Yerel / Hava Boşluklu)', role: 'Sıfır Veri Sızıntılı Kurum İçi (On-Premises) Güvenli Enklavlar' }
  ],
  vectorMemory: [
    { name: 'Qdrant Dağıtık Küme', role: 'Yüksek Hızlı Semantik Filtreleme & Müşteri Veri İzolasyonu' },
    { name: 'Pinecone Serverless', role: 'Küresel Düşük Gecikmeli Kurumsal Bilgi Dizini' },
    { name: 'pgvector / Neon', role: 'İlişkisel İşlemsel Hafıza & Tam ACID Uyumluluğu' }
  ],
  orchestration: [
    { name: 'Temporal.io Workflows', role: 'Dayanıklı Dağıtık Durum Makineleri & Hata Telafi Protokolleri' },
    { name: 'LangGraph Çoklu Ajan', role: 'Kendi Kendini Düzelten Hiyerarşik Ajan Koordinasyon Ağı' },
    { name: 'Apache Kafka & Flink', role: 'Saniyede 100.000+ Olay Kapasiteli Gerçek Zamanlı Veri Akışı' }
  ],
  infrastructure: [
    { name: 'Kubernetes (Özel Bulut / Hibrit)', role: 'Otomatik Ölçeklenen GPU & CPU Çıkarım Kümeleri' },
    { name: 'HashiCorp Vault HSM', role: 'Donanım Destekli Token Şifreleme & Güvenli Anahtar Döngüsü' },
    { name: 'Cloudflare Zero Trust & Edge', role: 'Uç Nokta Yönlendirme, WAF & < 20ms SSL Sonlandırma' }
  ]
};
