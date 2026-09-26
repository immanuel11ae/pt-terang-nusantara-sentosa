import React, { useState } from 'react';
import { PagePath } from '../types';

interface ClientsPageProps {
  onNavigate: (page: PagePath) => void;
  onOpenConsultation: () => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedCaseCategory, setSelectedCaseCategory] = useState<string>('all');

  const clients = [
    {
      name: 'Lenovo Indonesia',
      category: 'Teknologi & Hardware Global',
      tenure: 'Mitra 5+ Tahun',
      icon: 'devices',
    },
    {
      name: 'Samsung Indonesia',
      category: 'Elektronik & Manufaktur Multinasional',
      tenure: 'Mitra 4+ Tahun',
      icon: 'precision_manufacturing',
    },
    {
      name: 'Sinar Mas Land',
      category: 'Properti, Kertas & Agribisnis Konglomerat',
      tenure: 'Mitra 6+ Tahun',
      icon: 'apartment',
    },
    {
      name: 'PT Astra Infra',
      category: 'Infrastruktur Jalan Tol & Transportasi',
      tenure: 'Mitra 3+ Tahun',
      icon: 'traffic',
    },
    {
      name: 'Mandiri Capital',
      category: 'Venture Capital & Ekosistem Finansial',
      tenure: 'Mitra 4+ Tahun',
      icon: 'account_balance',
    },
    {
      name: 'Samudera Indonesia',
      category: 'Logistik Terpadu & Pelayaran Maritim',
      tenure: 'Mitra 5+ Tahun',
      icon: 'directions_boat',
    },
    {
      name: 'PT Indo Tambang',
      category: 'Energi & Sumber Daya Alam',
      tenure: 'Mitra 3+ Tahun',
      icon: 'drive_file_rename_outline',
    },
    {
      name: 'Pengadilan Pajak & DJP',
      category: 'Kuasa Hukum & Advokasi Fiskal Resmi',
      tenure: 'Litigasi Pajak',
      icon: 'gavel',
      isHighlight: true,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Top Ambient Glow Aura */}
      <div className="relative w-full overflow-hidden bg-[#0d0e12]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-[#f2ca50]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-48 right-12 w-[340px] h-[340px] bg-[#e4c277]/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Header Section */}
        <section className="relative max-w-[1440px] mx-auto px-5 md:px-12 pt-28 pb-16 w-full">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-4">
            {/* Institutional Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#292a2e] border border-[#4d4635]/40 shadow-md">
              <span className="material-symbols-outlined text-[16px] text-[#f2ca50]">verified</span>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] tracking-widest uppercase">
                Rekam Jejak &amp; Reputasi Korporasi
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-['Playfair_Display'] text-[32px] sm:text-[44px] md:text-[54px] font-semibold text-[#e3e2e8] tracking-tight leading-[1.12]">
              Dipercaya oleh Korporasi <br className="hidden md:inline" />
              <span className="text-[#e4c277] italic font-serif">Nasional &amp; Multinasional</span>
            </h1>

            {/* Subtitle */}
            <p className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] text-[#d0c5af] max-w-2xl leading-relaxed">
              Dedikasi PT. Terang Nusantara Sentosa dalam menjaga integritas fiskal dan memenangkan
              sengketa pajak bagi perusahaan-perusahaan terkemuka di lanskap bisnis Indonesia.
            </p>

            {/* High-level Metric Pills */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl">
              <div className="bg-[#1a1b20] border border-[#4d4635]/30 p-4 rounded-xl text-center shadow-sm">
                <span className="font-['Playfair_Display'] text-[28px] md:text-[32px] text-[#f2ca50] font-bold block tabular-nums">
                  100%
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#d0c5af] uppercase mt-1 block">
                  Tingkat Pencairan Restitusi
                </span>
              </div>

              <div className="bg-[#1a1b20] border border-[#4d4635]/30 p-4 rounded-xl text-center shadow-sm">
                <span className="font-['Playfair_Display'] text-[28px] md:text-[32px] text-[#f2ca50] font-bold block tabular-nums">
                  Rp 430M+
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#d0c5af] uppercase mt-1 block">
                  Nilai Portofolio Litigasi
                </span>
              </div>

              <div className="bg-[#1a1b20] border border-[#4d4635]/30 p-4 rounded-xl text-center shadow-sm">
                <span className="font-['Playfair_Display'] text-[28px] md:text-[32px] text-[#f2ca50] font-bold block tabular-nums">
                  85+
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#d0c5af] uppercase mt-1 block">
                  Klien Korporasi Aktif
                </span>
              </div>

              <div className="bg-[#1a1b20] border border-[#4d4635]/30 p-4 rounded-xl text-center shadow-sm">
                <span className="font-['Playfair_Display'] text-[28px] md:text-[32px] text-[#f2ca50] font-bold block">
                  BKP C
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase mt-1 block">
                  Sertifikasi Tertinggi
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Showcase Logo Klien Terkemuka */}
      <section className="w-full bg-[#0d0e12] py-16 border-t border-[#4d4635]/30">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] tracking-widest uppercase">
                Jaringan Portofolio Mitra
              </span>
              <h2 className="font-['Playfair_Display'] text-[26px] md:text-[32px] font-semibold text-[#e3e2e8]">
                Kemitraan Strategis Lintas Industri
              </h2>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] max-w-md leading-relaxed">
              Hubungan fidusia jangka panjang dengan kepatuhan hukum total di sektor teknologi,
              manufaktur, properti, maritim, dan investasi modal ventura.
            </p>
          </div>

          {/* Bento Grid Client Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {clients.map((client, idx) => {
              if (client.isHighlight) {
                return (
                  <div
                    key={idx}
                    className="group relative bg-gradient-to-br from-[#1f1f24] to-[#1a1b20] border border-[#4d4635] p-6 rounded-xl shadow-sm flex flex-col justify-between h-48 hover:border-[#d4af37]/60 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#d4af37] text-[#554300] flex items-center justify-center font-bold">
                        <span className="material-symbols-outlined text-[24px]">
                          {client.icon}
                        </span>
                      </div>
                      <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#f2ca50] tracking-wider uppercase">
                        {client.tenure}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-['Plus_Jakarta_Sans'] text-[17px] text-[#e3e2e8] font-bold">
                        {client.name}
                      </h3>
                      <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                        {client.category}
                      </p>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className="group relative bg-[#1a1b20] border border-[#4d4635]/30 p-6 rounded-xl hover:bg-[#1f1f24] hover:border-[#d4af37]/40 transition-all duration-300 shadow-sm flex flex-col justify-between h-48 overflow-hidden"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#343439] flex items-center justify-center text-[#f2ca50] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[24px]">
                        {client.icon}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#343439] font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] tabular-nums">
                      {client.tenure}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-['Plus_Jakarta_Sans'] text-[17px] text-[#e3e2e8] font-semibold group-hover:text-[#f2ca50] transition-colors">
                      {client.name}
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                      {client.category}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f2ca50]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial Visual Interlude / Corporate Context */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-12 py-16 w-full">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#1a1b20] border border-[#4d4635]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-6 md:p-12 flex flex-col justify-center space-y-4 z-10">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f2ca50] animate-pulse" />
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-widest">
                  Kepatuhan Total Berbasis PMK 172
                </span>
              </div>
              <h2 className="font-['Playfair_Display'] text-[26px] md:text-[34px] font-semibold text-[#e3e2e8] leading-snug">
                Presisi Analisa Finansial dalam Melindungi Nilai Perusahaan
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15px] text-[#d0c5af] leading-relaxed">
                Setiap pemeriksaan pajak dan dokumentasi transfer pricing memerlukan ketahanan
                metodologis yang tak terbantahkan. Tim konsultan TNS mengintegrasikan kecermatan
                regulasi dengan pembuktian komersial substansial.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-[#e3e2e8]">
                  <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">
                    check_circle
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px]">
                    Advokasi Tanpa Kompromi
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#e3e2e8]">
                  <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">
                    check_circle
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px]">
                    Kerahasiaan Tingkat Tinggi
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[440px]">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="Executive boardroom meeting at night in Jakarta high-rise"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhJGyulBD8z94sbXL9yjGvVGZJAc8eqZQazDg9cyetJkoU3m7DI_JfGzuOLsvpSMzVDy4CIhU-olgrX_HIthCU_tf-rTwpOncjKumlAE1PNRcu_XcsIeill3pOWrfbzkL_dbhggDjCVU8QzuNPNqvvr1XdH4FaIjAMJG7InEzZuD8TWt1bcJ03bVCrA3IT3lj16WZXzAqi0LFNvu0rZxVtIpH3JrhbCOejoC0R0AdLag2s-Vs8CyTJUA"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1a1b20] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Studi Kasus Singkat Per Klien (Case Studies) */}
      <section className="w-full bg-[#1a1b20]/50 py-16 border-t border-[#4d4635]/30">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] tracking-widest uppercase">
              Studi Kasus Pembuktian Finansial
            </span>
            <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold text-[#e3e2e8]">
              Hasil Nyata dengan Dampak Bisnis Terukur
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#d0c5af]">
              Penyelesaian skenario perpajakan kompleks melalui strategi legal-fiskal yang kokoh dan
              teruji.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Case 1: Manufaktur & Ekspor */}
            <div className="bg-[#1f1f24] border border-[#4d4635]/40 rounded-xl p-6 md:p-8 shadow-lg flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#343439] text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase">
                    Restitusi Pajak
                  </span>
                  <span className="material-symbols-outlined text-[#f2ca50] text-[22px]">
                    currency_exchange
                  </span>
                </div>
                <div>
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#d0c5af] uppercase">
                    Sektor Teknologi &amp; Manufaktur
                  </span>
                  <h3 className="font-['Playfair_Display'] text-[20px] text-[#e3e2e8] font-semibold mt-1">
                    Restitusi PPN Ekspor Dipercepat
                  </h3>
                </div>

                {/* Value Highlight Banner */}
                <div className="bg-[#0d0e12] border border-[#4d4635]/30 p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] block">
                      Nilai Pengembalian
                    </span>
                    <span className="font-['Playfair_Display'] text-[24px] text-[#f2ca50] font-bold tabular-nums">
                      Rp 48 Miliar
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#5d4604] border border-[#e4c277]/40 text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[12px] font-bold">
                    100% Dicairkan
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="space-y-1">
                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase block">
                      Tantangan Klien
                    </span>
                    <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] leading-relaxed">
                      Pemeriksaan restitusi PPN dipercepat dengan volume transaksi lintas batas
                      mencapai puluhan ribu dokumen PEB dan faktur pajak masukan yang berpotensi gugur
                      akibat ketidaksesuaian waktu pelaporan.
                    </p>
                  </div>
                  <div className="space-y-1 pt-1">
                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#f2ca50] uppercase block">
                      Solusi &amp; Dampak TNS
                    </span>
                    <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#e3e2e8] leading-relaxed font-medium">
                      Rekonsiliasi data faktur, dokumen arus kas, dan bill of lading secara
                      komprehensif. Hasil: 100% restitusi Rp 48 Miliar dicairkan tanpa koreksi
                      material dalam jangka waktu pemeriksaan 12 bulan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Micro Sparkline SVG */}
              <div className="pt-4 border-t border-[#4d4635]/30 flex items-center justify-between">
                <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                  Efisiensi Audit:
                </span>
                <svg className="w-32 h-6 text-[#f2ca50]" fill="none" viewBox="0 0 120 24">
                  <path
                    d="M0 20 L25 15 L50 18 L75 8 L100 12 L120 2"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
            </div>

            {/* Case 2: Konglomerasi Properti (Transfer Pricing) */}
            <div className="bg-[#1f1f24] border border-[#4d4635]/40 rounded-xl p-6 md:p-8 shadow-lg flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#343439] text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase">
                    Sengketa TP Doc
                  </span>
                  <span className="material-symbols-outlined text-[#f2ca50] text-[22px]">
                    balance
                  </span>
                </div>
                <div>
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#d0c5af] uppercase">
                    Konglomerasi Properti &amp; Industri
                  </span>
                  <h3 className="font-['Playfair_Display'] text-[20px] text-[#e3e2e8] font-semibold mt-1">
                    Pembatalan SKPKB Transfer Pricing
                  </h3>
                </div>

                {/* Value Highlight Banner */}
                <div className="bg-[#0d0e12] border border-[#4d4635]/30 p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] block">
                      Nilai Sengketa Gugatan
                    </span>
                    <span className="font-['Playfair_Display'] text-[24px] text-[#f2ca50] font-bold tabular-nums">
                      Rp 32 Miliar
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#5d4604] border border-[#e4c277]/40 text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[12px] font-bold">
                    100% Menang
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="space-y-1">
                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase block">
                      Tantangan Klien
                    </span>
                    <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] leading-relaxed">
                      Koreksi sepihak atas penentuan harga transfer royalti merk dan manajemen fee
                      antar entitas afiliasi oleh otoritas pajak yang memicu diterbitkannya SKPKB
                      nihil fasilitas.
                    </p>
                  </div>
                  <div className="space-y-1 pt-1">
                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#f2ca50] uppercase block">
                      Solusi &amp; Dampak TNS
                    </span>
                    <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#e3e2e8] leading-relaxed font-medium">
                      Penyusunan benchmark Local File PMK 172 yang solid dan pendampingan di
                      Pengadilan Pajak. Majelis Hakim membatalkan 100% koreksi pemeriksa,
                      menyelamatkan modal kerja klien sebesar Rp 32 Miliar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#4d4635]/30 flex items-center justify-between">
                <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                  Keputusan Pajak:
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase">
                  Inkracht &amp; Tetap
                </span>
              </div>
            </div>

            {/* Case 3: Energi & Sumber Daya (Tax Due Diligence) */}
            <div className="bg-[#1f1f24] border border-[#4d4635]/40 rounded-xl p-6 md:p-8 shadow-lg flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#343439] text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase">
                    Merger &amp; Akuisisi
                  </span>
                  <span className="material-symbols-outlined text-[#f2ca50] text-[22px]">
                    policy
                  </span>
                </div>
                <div>
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#d0c5af] uppercase">
                    Perusahaan Energi &amp; Sumber Daya
                  </span>
                  <h3 className="font-['Playfair_Display'] text-[20px] text-[#e3e2e8] font-semibold mt-1">
                    Tax Due Diligence Pra-Akuisisi
                  </h3>
                </div>

                {/* Value Highlight Banner */}
                <div className="bg-[#0d0e12] border border-[#4d4635]/30 p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] block">
                      Nilai Transaksi M&amp;A
                    </span>
                    <span className="font-['Playfair_Display'] text-[24px] text-[#f2ca50] font-bold tabular-nums">
                      Rp 350 Miliar
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#5d4604] border border-[#e4c277]/40 text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[12px] font-bold">
                    Hemat Rp 15M
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="space-y-1">
                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase block">
                      Tantangan Klien
                    </span>
                    <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] leading-relaxed">
                      Identifikasi kewajiban pajak historis tersembunyi dan potensi sanksi
                      bunga/denda dari target akuisisi pertambangan sebelum penandatanganan
                      Conditional Share Purchase Agreement (CSPA).
                    </p>
                  </div>
                  <div className="space-y-1 pt-1">
                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#f2ca50] uppercase block">
                      Solusi &amp; Dampak TNS
                    </span>
                    <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#e3e2e8] leading-relaxed font-medium">
                      Menemukan celah kepatuhan PPh 21 dan Royalti senilai Rp 15 Miliar, yang secara
                      sukses digunakan tim negosiator klien sebagai instrumen pemotongan valuasi
                      harga beli akuisisi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#4d4635]/30 flex items-center justify-between">
                <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                  Status Closing:
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#f2ca50] uppercase">
                  Berhasil Tereksekusi
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Testimonials Section */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-12 py-16 w-full">
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] tracking-widest uppercase">
                Kesaksian Pimpinan Perusahaan
              </span>
              <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] text-[#e3e2e8] font-semibold">
                Testimoni Dewan Direksi &amp; Komite Audit
              </h2>
            </div>
            <div className="flex items-center gap-1 text-[#f2ca50]">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
              <span className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#e3e2e8] ml-2 font-semibold">
                Kepuasan Klien 5.0/5.0
              </span>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-[#1a1b20] border border-[#4d4635]/40 p-6 md:p-8 rounded-xl shadow-md flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300 relative group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[#f2ca50]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="material-symbols-outlined text-[#343439] text-3xl">
                    format_quote
                  </span>
                </div>
                <p className="font-['Playfair_Display'] text-[18px] md:text-[20px] text-[#e3e2e8] italic font-medium leading-relaxed">
                  &ldquo;Ketajaman analisa Deasy Trianasari dan tim TNS menyelamatkan perusahaan kami
                  dari potensi eksposur denda pajak ratusan juta rupiah saat pemeriksaan lapangan.
                  Sangat solutif dan diplomatis dalam berkomunikasi dengan otoritas.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-[#4d4635]/30">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-[#343439] border border-[#4d4635]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Budi Santoso - Direktur Keuangan"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLbPYl2Ec_0YhjA__kgwEeWtx-_KjoECx36-ZfIU6Upr-GwXZu_SPX8fF2dZKvhA9Tm421ntWJjUK2LynDxrdzg01agDqzYLoc9vv0npj9L5lnIcU-rkbSbXtf1_jU8Yc8JxOMfWfIL7GAa_F6rkIMY3sGGuOfVtCt6miPzHZa6o0K6SvQtEpRJDZWC9KQ-WrALJ3QGm-fjnZKolz3ukz8bHfELhEbAoeR1azVjYJd8pXblCKs5H-DHA"
                  />
                </div>
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#e3e2e8] font-bold">
                    Budi Santoso
                  </h4>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#e4c277] font-medium">
                    Direktur Keuangan
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                    PT Samudera Multi Logistik
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#1a1b20] border border-[#4d4635]/40 p-6 md:p-8 rounded-xl shadow-md flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300 relative group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[#f2ca50]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="material-symbols-outlined text-[#343439] text-3xl">
                    format_quote
                  </span>
                </div>
                <p className="font-['Playfair_Display'] text-[18px] md:text-[20px] text-[#e3e2e8] italic font-medium leading-relaxed">
                  &ldquo;Penyusunan Local File dan Master File TP Doc oleh PT. Terang Nusantara
                  Sentosa sangat rapi, compliant secara internasional, dan terbukti kuat saat diuji
                  pemeriksa DJP. Kami merasa memiliki perisai legal yang kokoh.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-[#4d4635]/30">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-[#343439] border border-[#4d4635]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Hartono Wijaya - Managing Director"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb3s5wT0JEtORvHgyASgu7Sbx8m5Yxgi5egtdIa3-qIpJpi4c76WG_-WpeBnnU3PHoXP_FNtoxjeTQxzTuxhx26k1Oti81-RqTqONfRgJv45vXciiT21dlKdAX2vn9U--beTheEsDOZtMgHYbVNmIckI1fhv294x-nP2nsWMxBPnQ2VsAO5LqgIK08kEbuLda5n7-KBnt-2w_4tFzcWPoEIJY2sMsHyTh-xseQDK7OWbUbglB7ULvcnA"
                  />
                </div>
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#e3e2e8] font-bold">
                    Hartono Wijaya
                  </h4>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#e4c277] font-medium">
                    Managing Director
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                    PT Indo Agro Chem
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#1a1b20] border border-[#4d4635]/40 p-6 md:p-8 rounded-xl shadow-md flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300 relative group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[#f2ca50]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="material-symbols-outlined text-[#343439] text-3xl">
                    format_quote
                  </span>
                </div>
                <p className="font-['Playfair_Display'] text-[18px] md:text-[20px] text-[#e3e2e8] italic font-medium leading-relaxed">
                  &ldquo;Partner pajak paling responsif dan berintegritas tinggi di Jabodetabek.
                  Seluruh rekonsiliasi dan pelaporan SPT PPh Badan rampung sebelum tenggat tanpa ada
                  satupun kekeliruan perhitungan. Layanan kelas satu!&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-[#4d4635]/30">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-[#343439] border border-[#4d4635]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Lydia Siregar - Chief Financial Officer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsFLdoQO6dMKbwf2XXtxSVL6XjajPeuua8DUuP5Al6RcxxCCvsiUBvH9UIAgyshPzg3-iemtsxejCWqdF7i8q8lHNrG4OflC3qH-7s5o0HXWBgD63AVvAcF4EbGZTEKKrSGoUGpsj3H3VIyIv4JN8GN2Vku0aQHk5KBUQGxDIBlmPC-AjD3mlelN8a9YgzFmXsDdiQxx21Wse7cTGFM53oNHI8ak3Ncy2xgKyMxEtlxL765ge6UMG_qA"
                  />
                </div>
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#e3e2e8] font-bold">
                    Lydia Siregar
                  </h4>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#e4c277] font-medium">
                    Chief Financial Officer
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                    PT Solusi Digital Nusantara
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-[#1a1b20] border border-[#4d4635]/40 p-6 md:p-8 rounded-xl shadow-md flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300 relative group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[#f2ca50]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="material-symbols-outlined text-[#343439] text-3xl">
                    format_quote
                  </span>
                </div>
                <p className="font-['Playfair_Display'] text-[18px] md:text-[20px] text-[#e3e2e8] italic font-medium leading-relaxed">
                  &ldquo;Pendampingan kuasa hukum Pengadilan Pajak dari TNS memberikan ketenangan
                  luar biasa bagi dewan komisaris kami. Penjelasan hukum pajaknya sangat lugas dan
                  terstruktur.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-[#4d4635]/30">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-[#343439] border border-[#4d4635]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Irwan Setiawan - Head of Legal & Tax Compliance"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4eCBrYEjFWyyZPLm7QVfeITsN0SmKCAFsrEWj0tI56FFdPRTYyMI-JbHFy_cJJMvFTwXKXPcchL03yyI_FOF6DoG2Semd7gUUSQOQ535QVweo-XgbVS0FjDRN11MviYJDgRjJ1P8zyFrITI1iequ_lC7x4o1g7-20XXcXcAWgn-DXJEHMd6hVu_vCAj4R8GJTGqVXIUYyRDRiQ6StkGdxTvE_bgze68W6XnmmdK-Of-bvxaZCjMCZow"
                  />
                </div>
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#e3e2e8] font-bold">
                    Irwan Setiawan
                  </h4>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#e4c277] font-medium">
                    Head of Legal &amp; Tax Compliance
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                    Konsorsium Energi Prima
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tax Consultation Matrix */}
      <section className="w-full bg-[#0d0e12] py-16 border-t border-[#4d4635]/30">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12">
          <div className="bg-[#1f1f24] border border-[#4d4635] p-6 md:p-10 rounded-2xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-widest">
                Protokol Penanganan Fiskal
              </span>
              <h3 className="font-['Playfair_Display'] text-[24px] md:text-[28px] text-[#e3e2e8] font-semibold">
                Tiga Pilar Kepastian Hukum TNS
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#d0c5af] leading-relaxed">
                Setiap klien yang bermitra dengan PT. Terang Nusantara Sentosa mendapatkan jaminan
                transparansi kalkulasi, keabsahan peraturan termutakhir, dan kerahasiaan data
                korporasi tanpa kompromi.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
              <div className="bg-[#1a1b20] border border-[#4d4635]/30 p-4 rounded-xl text-center space-y-1.5">
                <span className="material-symbols-outlined text-[#f2ca50] text-[28px]">
                  verified_user
                </span>
                <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-[#e3e2e8]">
                  Legal Shield
                </h4>
                <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                  Sesuai UU HPP &amp; PMK berlaku
                </p>
              </div>
              <div className="bg-[#1a1b20] border border-[#4d4635]/30 p-4 rounded-xl text-center space-y-1.5">
                <span className="material-symbols-outlined text-[#f2ca50] text-[28px]">lock</span>
                <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-[#e3e2e8]">
                  Total Discretion
                </h4>
                <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                  Standar NDA perbankan swasta
                </p>
              </div>
              <div className="bg-[#1a1b20] border border-[#4d4635]/30 p-4 rounded-xl text-center space-y-1.5">
                <span className="material-symbols-outlined text-[#f2ca50] text-[28px]">speed</span>
                <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-[#e3e2e8]">
                  Zero Delay
                </h4>
                <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                  Pelaporan tepat waktu 100%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Menuju Konsultasi */}
      <section className="relative w-full py-20 overflow-hidden bg-[#121317]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b20] via-[#121317] to-[#1a1b20] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#f2ca50]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#292a2e] border border-[#4d4635]/40 shadow-sm">
            <span className="material-symbols-outlined text-[#f2ca50] text-[16px]">
              assured_workload
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-widest">
              Konsultasi Eksklusif Korporasi
            </span>
          </div>

          <h2 className="font-['Playfair_Display'] text-[28px] sm:text-[38px] md:text-[46px] text-[#e3e2e8] font-semibold tracking-tight leading-snug">
            Bergabunglah Bersama Puluhan Korporasi yang Telah Merasakan Keamanan Fiskal Maksimal
          </h2>

          <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#d0c5af] max-w-2xl mx-auto leading-relaxed">
            Amankan aset dan jalankan kepatuhan pajak perusahaan Anda tanpa kekhawatiran sanksi
            fiskal. Tim konsultan berlisensi kami siap mendampingi setiap tahap.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-[#d4af37] text-[#554300] font-['Plus_Jakarta_Sans'] text-[14px] font-bold tracking-wide hover:bg-[#f2ca50] transition-all shadow-[0_0_24px_rgba(212,175,55,0.3)] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">calendar_today</span>
              <span>Mulai Konsultasi</span>
            </button>

            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-[#292a2e] text-[#e3e2e8] hover:text-[#f2ca50] hover:bg-[#343439] transition-all font-['Plus_Jakarta_Sans'] text-[14px] font-semibold shadow-md"
              href="https://wa.me/6287817582369?text=Halo%20TNS,%20kami%20ingin%20berkonsultasi%20mengenai%20layanan%20fiskal%20korporasi."
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px] text-[#f2ca50]">chat</span>
              <span>Konsultasi Cepat via WhatsApp</span>
            </a>
          </div>

          <div className="pt-4 text-[#d0c5af] font-['Plus_Jakarta_Sans'] text-[12px] flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-[#e4c277]">shield</span>{' '}
              BKP Tingkat C Resmi
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-[#e4c277]">verified</span>{' '}
              Anggota IKPI Terdaftar
            </span>
            <span>&bull;</span>
            <span>Respon &lt; 2 Jam Kerja</span>
          </div>
        </div>
      </section>
    </div>
  );
};
