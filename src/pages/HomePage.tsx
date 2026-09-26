import React from 'react';
import { PagePath } from '../types';

interface HomePageProps {
  onNavigate: (page: PagePath) => void;
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenConsultation }) => {
  const marqueeClients = [
    {
      name: 'Lenovo Indonesia',
      category: 'Teknologi & Distribusi Perangkat Keras',
      icon: 'terminal',
    },
    {
      name: 'Samsung Indonesia',
      category: 'Elektronik Global & Manufaktur',
      icon: 'devices',
    },
    {
      name: 'Sinar Mas Land',
      category: 'Konglomerasi Properti & Township',
      icon: 'apartment',
    },
    {
      name: 'PT Astra Infra',
      category: 'Infrastruktur Tol & Logistik',
      icon: 'traffic',
    },
    {
      name: 'PT Indo Tambang',
      category: 'Energi, Sumber Daya & Ekspor',
      icon: 'terrain',
    },
    {
      name: 'Samudera Indonesia',
      category: 'Pelayaran Terintegrasi & Kargo Maritim',
      icon: 'directions_boat',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full pt-28 pb-20 md:pb-28 overflow-hidden bg-[#0d0e12]">
        {/* Ambient Gradient Aura */}
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-[#f2ca50]/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#e4c277]/5 rounded-full blur-[96px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-5 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Hero Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              {/* Monogram Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#292a2e]/80 backdrop-blur-sm shadow-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-[#f2ca50] animate-pulse" />
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-wider">
                  Konsultan Pajak &amp; Manajemen Finansial Terpercaya
                </span>
              </div>

              {/* Editorial Headline */}
              <h1 className="font-['Playfair_Display'] text-[32px] sm:text-[44px] md:text-[56px] leading-[1.12] text-[#e3e2e8] tracking-tight mt-1 font-semibold">
                Presisi Finansial,{' '}
                <span className="italic font-serif text-[#f2ca50]">Kepatuhan Pajak</span> Mutlak,
                &amp; Perlindungan Aset.
              </h1>

              {/* Subheadline */}
              <p className="font-['Plus_Jakarta_Sans'] text-[16px] text-[#d0c5af] max-w-2xl mt-2 leading-relaxed">
                PT. Terang Nusantara Sentosa mendampingi korporasi nasional &amp; multinasional
                menavigasi regulasi perpajakan yang kompleks, kepatuhan era Coretax DJP, dan
                optimalisasi struktur keuangan secara{' '}
                <span className="text-[#e3e2e8] font-medium">prudent</span> dan terukur.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-[#d4af37] text-[#554300] font-['Plus_Jakarta_Sans'] text-[14px] uppercase font-bold tracking-wider hover:bg-[#f2ca50] transition-all shadow-[0_0_24px_rgba(212,175,55,0.25)] cursor-pointer"
                >
                  <span>Konsultasi Sekarang</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('layanan-unggulan');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      onNavigate('layanan');
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#292a2e] hover:bg-[#343439] text-[#e3e2e8] hover:text-[#f2ca50] font-['Plus_Jakarta_Sans'] text-[14px] transition-all shadow-sm cursor-pointer"
                >
                  <span>Pelajari Layanan Kami</span>
                  <span className="material-symbols-outlined text-[18px]">south</span>
                </button>
              </div>

              {/* Institutional Trust Marker */}
              <div className="flex flex-wrap items-center gap-4 pt-4 text-[#d0c5af]/80">
                <div className="flex items-center gap-1.5 font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider text-[#e4c277]">
                  <span className="material-symbols-outlined text-[16px] text-[#f2ca50]">
                    verified_user
                  </span>
                  <span>Terdaftar Resmi DJP &amp; IKPI</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4d4635]" />
                <div className="flex items-center gap-1.5 font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider text-[#e4c277]">
                  <span className="material-symbols-outlined text-[16px] text-[#f2ca50]">gavel</span>
                  <span>Kuasa Hukum Pengadilan Pajak</span>
                </div>
              </div>
            </div>

            {/* Hero Right Column: Institutional Visual & Key Indicator */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative rounded-xl overflow-hidden bg-[#1f1f24] shadow-2xl">
                {/* Tax & Audit Dossier Executive Visual */}
                <img
                  className="w-full h-[440px] object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  alt="High-end corporate tax consultation briefing room in Jakarta with financial ledgers"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUPoZ6cMklV8dKZ0OrWUpbunWigDssrRSejw9jHwsDjR1CAFQsUys8uM284eU1tE4E0bAYuDSwxLX2a0xbyJnIJQWo7UFB85nngpbX9joydwZoKxBt-KQQQi5mb3_udyWSCQ_pHOj8-QDv3moIS6H7TumoDjvRttMtTVNG8wJiMiuTT0_lmfQswUcN8MZJsLd6ImWHK5Oxep_obSObdTy1S4PRqbqmb0k5QAV8PxZ47qo2vGK6b6ajVg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/40 to-transparent" />

                {/* Discrete Inset Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-lg bg-[#292a2e]/90 backdrop-blur-md shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50]">
                      <span className="material-symbols-outlined text-[20px]">
                        account_balance
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#e3e2e8]">
                        Kesiapan Sistem Coretax DJP
                      </span>
                      <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                        Sinkronisasi Dokumen &amp; e-Faktur 2026
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#0d0e12] text-[#f2ca50] font-['Plus_Jakarta_Sans'] text-[11px] font-bold tracking-wider uppercase">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* KEY STATS BENCHMARK ROW */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-6 border-t border-[#4d4635]/40">
            <div className="flex flex-col gap-1 p-4 rounded-lg bg-[#1a1b20] shadow-sm">
              <span className="font-['Playfair_Display'] text-[28px] md:text-[36px] font-bold text-[#f2ca50] tabular-nums">
                Rp 2.4T+
              </span>
              <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#e3e2e8]">
                Transaksi &amp; Restitusi
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                Penanganan nilai likuiditas fiskal korporasi
              </span>
            </div>

            <div className="flex flex-col gap-1 p-4 rounded-lg bg-[#1a1b20] shadow-sm">
              <span className="font-['Playfair_Display'] text-[28px] md:text-[36px] font-bold text-[#f2ca50] tabular-nums">
                99.2%
              </span>
              <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#e3e2e8]">
                Keberhasilan Sengketa
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                Penyelesaian audit, keberatan &amp; banding
              </span>
            </div>

            <div className="flex flex-col gap-1 p-4 rounded-lg bg-[#1a1b20] shadow-sm">
              <span className="font-['Playfair_Display'] text-[28px] md:text-[36px] font-bold text-[#f2ca50] tabular-nums">
                15+ Thn
              </span>
              <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#e3e2e8]">
                Jam Terbang Eksekutif
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                Kepemimpinan BKP C berpengalaman
              </span>
            </div>

            <div className="flex flex-col gap-1 p-4 rounded-lg bg-[#1a1b20] shadow-sm">
              <span className="font-['Playfair_Display'] text-[28px] md:text-[36px] font-bold text-[#f2ca50] tabular-nums">
                200+
              </span>
              <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#e3e2e8]">
                Klien Korporasi
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                Multinasional, manufaktur, &amp; holding
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE CLIENT CAROUSEL SECTION */}
      <section className="w-full py-10 bg-[#1a1b20] overflow-hidden border-y border-[#4d4635]/30">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 mb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase text-[#e4c277] tracking-widest">
              Track Record &amp; Kemitraan
            </span>
            <h2 className="font-['Playfair_Display'] text-[22px] font-semibold text-[#e3e2e8] mt-1">
              Client-Client yang Sudah Kami Tangani
            </h2>
          </div>
          <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] max-w-md">
            Dipercaya oleh grup konglomerasi, konglomerasi industri, dan entitas multinasional di
            berbagai sektor strategis.
          </p>
        </div>

        {/* Infinite Scrolling Track */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#1a1b20] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#1a1b20] to-transparent z-10 pointer-events-none" />

          {/* Marquee Inner Container */}
          <div className="animate-marquee py-2 flex items-center gap-6">
            {[...marqueeClients, ...marqueeClients].map((client, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3 px-6 py-4 rounded bg-[#1f1f24] border border-[#4d4635]/30 shadow-md hover:border-[#d4af37]/60 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all cursor-default shrink-0"
              >
                <span className="material-symbols-outlined text-[#e4c277] text-[24px]">
                  {client.icon}
                </span>
                <div className="flex flex-col">
                  <span className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#e3e2e8] uppercase tracking-wider font-bold">
                    {client.name}
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                    {client.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RINGKASAN SINGKAT LAYANAN */}
      <section className="w-full py-20 bg-[#121317]" id="layanan-unggulan">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="flex flex-col gap-1 max-w-2xl">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase text-[#e4c277] tracking-widest">
                Spesialisasi Praktik Fiskal
              </span>
              <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold text-[#e3e2e8]">
                Solusi Strategis Terstruktur untuk Keberlanjutan Usaha
              </h2>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#d0c5af] max-w-md leading-relaxed">
              Pendekatan legalitas komprehensif mengintegrasikan tinjauan pembukuan akuntansi,
              kepatuhan undang-undang perpajakan, dan mitigasi eksposur sanksi.
            </p>
          </div>

          {/* Bento Cards Grid (4 Core Services) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="flex flex-col justify-between p-6 rounded-xl bg-[#1f1f24] border border-[#4d4635]/30 shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded bg-[#292a2e] flex items-center justify-center text-[#f2ca50] group-hover:bg-[#f2ca50] group-hover:text-[#3c2f00] transition-colors">
                  <span className="material-symbols-outlined text-[26px]">calculate</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-wider">
                    Pilar 01
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[17px] text-[#e3e2e8] font-semibold group-hover:text-[#f2ca50] transition-colors">
                    Konsultasi &amp; Perencanaan Pajak
                  </h3>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                  Formulasi strategi efisiensi beban pajak secara legal (tax planning), penataan
                  restrukturisasi transaksi korporasi, merger, dan akuisisi yang aman secara fiskal.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#4d4635]/30">
                <button
                  onClick={() => onNavigate('layanan')}
                  className="inline-flex items-center gap-1.5 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold text-[#e4c277] hover:text-[#f2ca50] transition-colors cursor-pointer"
                >
                  <span>Detail Praktik</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="flex flex-col justify-between p-6 rounded-xl bg-[#1f1f24] border border-[#4d4635]/30 shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded bg-[#292a2e] flex items-center justify-center text-[#f2ca50] group-hover:bg-[#f2ca50] group-hover:text-[#3c2f00] transition-colors">
                  <span className="material-symbols-outlined text-[26px]">receipt_long</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-wider">
                    Pilar 02
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[17px] text-[#e3e2e8] font-semibold group-hover:text-[#f2ca50] transition-colors">
                    Pelaporan SPT Masa &amp; Tahunan
                  </h3>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                  Manajemen kepatuhan menyeluruh PPh Badan 1771, PPh 21/26 karyawan, PPh 23/22, PPh
                  Final, dan penerbitan e-Faktur PPN sesuai standar regulasi Coretax.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#4d4635]/30">
                <button
                  onClick={() => onNavigate('layanan')}
                  className="inline-flex items-center gap-1.5 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold text-[#e4c277] hover:text-[#f2ca50] transition-colors cursor-pointer"
                >
                  <span>Detail Praktik</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="flex flex-col justify-between p-6 rounded-xl bg-[#1f1f24] border border-[#4d4635]/30 shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded bg-[#292a2e] flex items-center justify-center text-[#f2ca50] group-hover:bg-[#f2ca50] group-hover:text-[#3c2f00] transition-colors">
                  <span className="material-symbols-outlined text-[26px]">shield_person</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-wider">
                    Pilar 03
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[17px] text-[#e3e2e8] font-semibold group-hover:text-[#f2ca50] transition-colors">
                    Pemeriksaan Pajak &amp; SP2DK
                  </h3>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                  Kuasa hukum dan pendampingan profesional menghadapi klarifikasi SP2DK, audit
                  pemeriksaan DJP, rekonsiliasi data, penyusunan tanggapan SPHP hingga risalah akhir.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#4d4635]/30">
                <button
                  onClick={() => onNavigate('layanan')}
                  className="inline-flex items-center gap-1.5 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold text-[#e4c277] hover:text-[#f2ca50] transition-colors cursor-pointer"
                >
                  <span>Detail Praktik</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="flex flex-col justify-between p-6 rounded-xl bg-[#1f1f24] border border-[#4d4635]/30 shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded bg-[#292a2e] flex items-center justify-center text-[#f2ca50] group-hover:bg-[#f2ca50] group-hover:text-[#3c2f00] transition-colors">
                  <span className="material-symbols-outlined text-[26px]">price_change</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-wider">
                    Pilar 04
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[17px] text-[#e3e2e8] font-semibold group-hover:text-[#f2ca50] transition-colors">
                    Restitusi Pajak &amp; Transfer Pricing
                  </h3>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                  Advokasi pencairan pengembalian kelebihan bayar PPN dan PPh secara terukur, disertai
                  penyusunan Transfer Pricing Documentation (Local File &amp; Master File PMK
                  172/2023).
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#4d4635]/30">
                <button
                  onClick={() => onNavigate('layanan')}
                  className="inline-flex items-center gap-1.5 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold text-[#e4c277] hover:text-[#f2ca50] transition-colors cursor-pointer"
                >
                  <span>Detail Praktik</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Callout Bar Direct Link */}
          <div className="mt-8 p-4 rounded-lg bg-[#1a1b20] border border-[#4d4635]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="material-symbols-outlined text-[#f2ca50] text-[24px]">
                auto_stories
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#e3e2e8]">
                Butuh analisis komprehensif terkait sengketa banding pengadilan atau uji kepatuhan
                (Tax Due Diligence)?
              </span>
            </div>
            <button
              onClick={() => onNavigate('layanan')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#292a2e] hover:bg-[#d4af37] text-[#e3e2e8] hover:text-[#554300] font-['Plus_Jakarta_Sans'] text-[13px] font-bold transition-all whitespace-nowrap cursor-pointer"
            >
              <span>Melihat seluruh 8 spesialisasi layanan kami</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* CUPLIKAN "KENAPA KORPORASI MEMILIH TNS" */}
      <section className="w-full py-20 bg-[#0d0e12] relative">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12">
          {/* Section Title Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mb-16">
            <div className="lg:col-span-5 flex flex-col gap-1">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase text-[#e4c277] tracking-widest">
                Keunggulan Institusional
              </span>
              <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold text-[#e3e2e8]">
                Kenapa Korporasi Memilih TNS?
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#d0c5af] leading-relaxed mt-2">
                Kami tidak sekadar menghitung nominal angka; kami membangun arsitektur pertahanan
                kepatuhan fiskal yang kuat di hadapan otoritas perpajakan Indonesia.
              </p>
            </div>

            {/* Analytical Visual Highlight (Inline Metric Data Diagram) */}
            <div className="lg:col-span-7 bg-[#292a2e] border border-[#4d4635]/50 p-6 rounded-xl shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#4d4635]/30">
                <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#e3e2e8]">
                  Efektivitas Proteksi Pajak &amp; Audit Review TNS
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#f2ca50] uppercase tracking-wider">
                  Metodologi Teruji 2025-2026
                </span>
              </div>

              {/* Progress Bars */}
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-[13px]">
                    <span className="text-[#e3e2e8]">
                      Tingkat Penurunan Koreksi Fiskal pada Audit
                    </span>
                    <span className="text-[#f2ca50] font-bold tabular-nums">92.4%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#0d0e12] overflow-hidden">
                    <div
                      className="h-full bg-[#f2ca50] rounded-full transition-all duration-1000"
                      style={{ width: '92.4%' }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-[13px]">
                    <span className="text-[#e3e2e8]">
                      Akurasi Rekonsiliasi SPT vs Pembukuan Finansial
                    </span>
                    <span className="text-[#e4c277] font-bold tabular-nums">99.8%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#0d0e12] overflow-hidden">
                    <div
                      className="h-full bg-[#e4c277] rounded-full transition-all duration-1000"
                      style={{ width: '99.8%' }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-[13px]">
                    <span className="text-[#e3e2e8]">Penyelesaian Berkas Sebelum Tenggat DJP</span>
                    <span className="text-[#d0c5af] font-bold tabular-nums">100.0%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#0d0e12] overflow-hidden">
                    <div
                      className="h-full bg-[#d0c5af] rounded-full transition-all duration-1000"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Key Differentiators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Differentiator 1 */}
            <div className="flex flex-col p-6 rounded-xl bg-[#1f1f24] border border-[#4d4635]/30 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-[#292a2e] flex items-center justify-center text-[#f2ca50] mb-4">
                <span className="material-symbols-outlined text-[28px]">verified</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-[20px] font-semibold text-[#e3e2e8] mb-2">
                Integritas &amp; Lisensi Resmi
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                Konsultan Brevet BKP bersertifikasi resmi tingkat C dan memegang lisensi Kuasa Hukum
                Pengadilan Pajak Republik Indonesia. Seluruh advis berakar kuat pada kepatuhan hukum
                yang solid dan etika profesi IKPI.
              </p>
              <div className="mt-4 pt-3 border-t border-[#4d4635]/30 flex items-center gap-2 text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold tracking-wider uppercase">
                <span className="material-symbols-outlined text-[16px]">military_tech</span>
                <span>BKP Tingkat C Terverifikasi</span>
              </div>
            </div>

            {/* Differentiator 2 */}
            <div className="flex flex-col p-6 rounded-xl bg-[#1f1f24] border border-[#4d4635]/30 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-[#292a2e] flex items-center justify-center text-[#f2ca50] mb-4">
                <span className="material-symbols-outlined text-[28px]">policy</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-[20px] font-semibold text-[#e3e2e8] mb-2">
                Mitigasi Risiko Audit Komprehensif
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                Kami mengimplementasikan pendekatan preventif berlapis melalui simulasi audit
                internal sebelum DJP menerbitkan SP2DK. Hal ini meminimalisir potensi denda
                administratif dan pembengkakan denda bunga pasal 13 KUP.
              </p>
              <div className="mt-4 pt-3 border-t border-[#4d4635]/30 flex items-center gap-2 text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold tracking-wider uppercase">
                <span className="material-symbols-outlined text-[16px]">security</span>
                <span>Zero-Surprise Protection</span>
              </div>
            </div>

            {/* Differentiator 3 */}
            <div className="flex flex-col p-6 rounded-xl bg-[#1f1f24] border border-[#4d4635]/30 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-[#292a2e] flex items-center justify-center text-[#f2ca50] mb-4">
                <span className="material-symbols-outlined text-[28px]">support_agent</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-[20px] font-semibold text-[#e3e2e8] mb-2">
                Respons Cepat &amp; Pendampingan End-to-End
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                Komunikasi strategis langsung dengan tim managing partner eksekutif, bukan pihak
                ketiga ataupun junior staf yang berpindah tangan. Kami hadir di setiap pertemuan
                klarifikasi bersama tim pemeriksa pajak.
              </p>
              <div className="mt-4 pt-3 border-t border-[#4d4635]/30 flex items-center gap-2 text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold tracking-wider uppercase">
                <span className="material-symbols-outlined text-[16px]">handshake</span>
                <span>Partner-Led Advisory</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA PENUTUP (HIGH-CONTRAST FINAL EXECUTIVE BANNER) */}
      <section className="w-full py-20 bg-[#121317] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 relative z-10">
          <div className="rounded-2xl p-8 md:p-14 bg-gradient-to-br from-[#292a2e] via-[#1f1f24] to-[#1a1b20] border border-[#4d4635] shadow-2xl relative overflow-hidden">
            {/* Background Monogram Stamp Watermark */}
            <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none text-[#e3e2e8] select-none">
              <span className="material-symbols-outlined text-[280px]">gavel</span>
            </div>

            <div className="max-w-3xl flex flex-col gap-4 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0d0e12] text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider self-start shadow-sm">
                <span>Privasi &amp; Kerahasiaan Terjamin 100%</span>
              </div>

              <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold text-[#e3e2e8]">
                Siap Mengamankan Posisi Fiskal &amp; Tata Kelola Perusahaan Anda?
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#d0c5af] leading-relaxed">
                Konsultasikan tantangan perpajakan Anda bersama Deasy Trianasari dan tim ahli{' '}
                <strong className="text-[#e3e2e8] font-semibold">
                  PT. Terang Nusantara Sentosa
                </strong>
                . Dapatkan evaluasi awal terkait kepatuhan pelaporan, SP2DK, maupun restrukturisasi
                keuangan korporasi.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-[#d4af37] text-[#554300] font-['Plus_Jakarta_Sans'] text-[14px] uppercase font-bold tracking-wider hover:bg-[#f2ca50] transition-all shadow-[0_0_24px_rgba(212,175,55,0.3)] cursor-pointer"
                >
                  <span>Jadwalkan Konsultasi Rahasia</span>
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                </button>

                <a
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded bg-[#343439] hover:bg-[#38393e] text-[#e3e2e8] hover:text-[#f2ca50] font-['Plus_Jakarta_Sans'] text-[14px] uppercase font-semibold transition-all shadow-md"
                  href="https://wa.me/6287817582369?text=Halo%20PT.%20Terang%20Nusantara%20Sentosa,%20saya%20ingin%20jadwalkan%20sesi%20konsultasi%20rahasia."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#f2ca50]">chat</span>
                  <span>Hubungi via WhatsApp (+62 878-1758-2369)</span>
                </a>
              </div>

              <div className="pt-2">
                <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]/70 italic">
                  *Pertemuan konsultasi dapat diselenggarakan secara tatap muka (Head Office / Client
                  Office) maupun daring berenkripsi aman.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
