import React from 'react';
import { PagePath } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PagePath) => void;
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Top Ambient Glow Field */}
      <div className="relative w-full overflow-hidden bg-[#0d0e12]">
        <div className="absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-[#f2ca50]/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#e4c277]/5 blur-[100px] pointer-events-none" />

        {/* Header Section */}
        <section className="relative max-w-[1440px] mx-auto px-5 md:px-12 pt-28 pb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#e4c277]" />
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider text-[#e4c277]">
                  Spesialisasi Perpajakan &amp; Manajemen Keuangan
                </span>
              </div>
              <h1 className="font-['Playfair_Display'] text-[32px] sm:text-[42px] md:text-[50px] font-semibold text-[#e3e2e8] tracking-tight leading-[1.15]">
                Solusi Perpajakan Terintegrasi{' '}
                <span className="italic text-[#f2ca50]">Tanpa Kompromi</span>
              </h1>
              <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#d0c5af] max-w-2xl leading-relaxed">
                Portofolio lengkap 8 pilar advokasi fiskal, audit compliance, dan restrukturisasi
                keuangan korporasi yang dirancang presisi sesuai yurisprudensi hukum perpajakan
                Indonesia.
              </p>
            </div>

            {/* Metric Accent Pill */}
            <div className="flex items-center gap-6 bg-[#1a1b20] border border-[#4d4635]/40 p-4 rounded-xl shadow-lg shrink-0">
              <div className="flex flex-col">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#d0c5af] uppercase">
                  Standar Kepatuhan
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#f2ca50] font-bold">
                  PMK 172/2023 &bull; Coretax
                </span>
              </div>
              <div className="w-[1px] h-8 bg-[#343439]" />
              <div className="flex flex-col">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#d0c5af] uppercase">
                  Lisensi Resmi
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#e4c277] font-bold">
                  BKP Tingkat C &bull; IKPI
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Hairline Separator Bar */}
          <div className="mt-10 pt-4 border-t border-[#4d4635]/40 flex items-center justify-between text-[#99907c]">
            <div className="flex items-center gap-2">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-widest text-[#99907c]">
                Katalog Layanan Fiskal Korporasi
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50]/40" />
              <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#99907c]">
                EDISI 2026
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#99907c] tracking-wider uppercase">
              <span className="material-symbols-outlined text-[16px] text-[#e4c277]">
                verified_user
              </span>
              <span>KERAHASIAAN DATA TERJAMIN (NDA APPLICABLE)</span>
            </div>
          </div>
        </section>
      </div>

      {/* 8 Layanan Grid Section */}
      <section className="w-full bg-[#121317] py-12">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12">
          {/* Grid Mosaic Layout: 8 Cards (Asymmetric & Dense Architectural Flow) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Layanan 1: Tax Planning & Advisory (Spans 2 columns on lg) */}
            <article className="lg:col-span-2 flex flex-col justify-between p-6 md:p-8 bg-[#1a1b20] border border-[#4d4635]/40 rounded-xl shadow-md transition-all hover:bg-[#1f1f24] group relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#f2ca50]/5 blur-3xl pointer-events-none group-hover:bg-[#f2ca50]/10 transition-all" />
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase bg-[#292a2e] px-2.5 py-1 rounded">
                    Pilar 01 &bull; Perencanaan Strategis
                  </span>
                  <span className="material-symbols-outlined text-[#f2ca50] text-[24px]">
                    account_balance
                  </span>
                </div>
                <h2 className="font-['Playfair_Display'] text-[22px] md:text-[24px] font-semibold text-[#e3e2e8] group-hover:text-[#f2ca50] transition-colors">
                  Konsultasi &amp; Perencanaan Pajak{' '}
                  <span className="text-[#d0c5af] font-normal text-[18px]">
                    (Tax Planning &amp; Advisory)
                  </span>
                </h2>
                <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#d0c5af] leading-relaxed">
                  Penyusunan skema efisiensi beban pajak yang 100% legal (tax avoidance vs tax
                  evasion compliant), pemanfaatan insentif penanaman modal (tax holiday/allowance),
                  analisis dampak pajak transaksi merger, akuisisi, dan restrukturisasi grup usaha.
                </p>

                {/* Pillar Features Tags */}
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[#d0c5af] font-['Plus_Jakarta_Sans'] text-[12px] bg-[#343439]/60 px-2.5 py-1 rounded">
                    <span className="material-symbols-outlined text-[14px] text-[#e4c277]">
                      check_circle
                    </span>{' '}
                    Analisis Risiko Kepatuhan
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#d0c5af] font-['Plus_Jakarta_Sans'] text-[12px] bg-[#343439]/60 px-2.5 py-1 rounded">
                    <span className="material-symbols-outlined text-[14px] text-[#e4c277]">
                      check_circle
                    </span>{' '}
                    Simulasi Cash Flow Pajak
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#d0c5af] font-['Plus_Jakarta_Sans'] text-[12px] bg-[#343439]/60 px-2.5 py-1 rounded">
                    <span className="material-symbols-outlined text-[14px] text-[#e4c277]">
                      check_circle
                    </span>{' '}
                    Mitigasi Koreksi Fiskal
                  </span>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between relative z-10 mt-4 border-t border-[#4d4635]/30">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#99907c] uppercase tracking-wider">
                  Advokasi Preventif
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#d4af37] text-[#554300] font-['Plus_Jakarta_Sans'] text-[13px] font-bold hover:bg-[#f2ca50] transition-all shadow-md cursor-pointer"
                >
                  <span>Hubungi Kami</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </article>

            {/* Layanan 2: Tax Compliance & Filing */}
            <article className="flex flex-col justify-between p-6 bg-[#1a1b20] border border-[#4d4635]/40 rounded-xl shadow-md transition-all hover:bg-[#1f1f24] group">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase bg-[#292a2e] px-2.5 py-1 rounded">
                    Pilar 02 &bull; Kepatuhan Rutin
                  </span>
                  <span className="material-symbols-outlined text-[#e4c277] text-[22px]">
                    description
                  </span>
                </div>
                <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[17px] text-[#e3e2e8] group-hover:text-[#f2ca50] transition-colors">
                  Pelaporan SPT Masa &amp; Tahunan{' '}
                  <span className="block text-[12px] text-[#d0c5af] font-normal mt-0.5">
                    (Tax Compliance &amp; Filing)
                  </span>
                </h2>
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                  Administrasi dan pelaporan komprehensif seluruh kewajiban pajak bulanan dan tahunan
                  sesuai standar sistem modern Coretax DJP.
                </p>
                <div className="p-3 rounded bg-[#343439]/40 flex flex-col gap-1.5 text-[12px] text-[#d0c5af]">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#e4c277]" />
                    <span>PPh Badan Form 1771</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#e4c277]" />
                    <span>PPh 21/26 Karyawan &amp; Ekspatriat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#e4c277]" />
                    <span>PPh 23/22 &amp; Final Pasal 4(2)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#e4c277]" />
                    <span>e-Faktur PPN Terintegrasi</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between mt-4 border-t border-[#4d4635]/30">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#99907c] uppercase">
                  Akurasi Coretax
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#292a2e] hover:bg-[#d4af37] hover:text-[#554300] text-[#e3e2e8] font-['Plus_Jakarta_Sans'] text-[12px] font-semibold transition-all cursor-pointer"
                >
                  <span>Hubungi Kami</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </article>

            {/* Layanan 3: Tax Audit Assistance */}
            <article className="flex flex-col justify-between p-6 bg-[#1a1b20] border border-[#4d4635]/40 rounded-xl shadow-md transition-all hover:bg-[#1f1f24] group">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase bg-[#292a2e] px-2.5 py-1 rounded">
                    Pilar 03 &bull; Advokasi Lapangan
                  </span>
                  <span className="material-symbols-outlined text-[#e4c277] text-[22px]">
                    gavel
                  </span>
                </div>
                <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[17px] text-[#e3e2e8] group-hover:text-[#f2ca50] transition-colors">
                  Pendampingan Pemeriksaan Pajak{' '}
                  <span className="block text-[12px] text-[#d0c5af] font-normal mt-0.5">
                    (Tax Audit Assistance)
                  </span>
                </h2>
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                  Advokasi profesional dan pendampingan tatap muka saat wajib pajak menerima Surat
                  Pemberitahuan Pemeriksaan (SP2).
                </p>
                <div className="p-3 rounded bg-[#343439]/40 flex flex-col gap-1.5 text-[12px] text-[#d0c5af]">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#e4c277]" />
                    <span>Rekonsiliasi data fiskal detail</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#e4c277]" />
                    <span>Penyusunan tanggapan resmi SPHP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#e4c277]" />
                    <span>Risalah Pembahasan Akhir DJP</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between mt-4 border-t border-[#4d4635]/30">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#99907c] uppercase">
                  Mitigasi Temuan
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#292a2e] hover:bg-[#d4af37] hover:text-[#554300] text-[#e3e2e8] font-['Plus_Jakarta_Sans'] text-[12px] font-semibold transition-all cursor-pointer"
                >
                  <span>Hubungi Kami</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </article>

            {/* Layanan 4: Tax Refund & Recovery */}
            <article className="flex flex-col justify-between p-6 bg-[#1a1b20] border border-[#4d4635]/40 rounded-xl shadow-md transition-all hover:bg-[#1f1f24] group">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase bg-[#292a2e] px-2.5 py-1 rounded">
                    Pilar 04 &bull; Likuiditas Dana
                  </span>
                  <span className="material-symbols-outlined text-[#e4c277] text-[22px]">
                    currency_exchange
                  </span>
                </div>
                <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[17px] text-[#e3e2e8] group-hover:text-[#f2ca50] transition-colors">
                  Restitusi Pajak Korporat{' '}
                  <span className="block text-[12px] text-[#d0c5af] font-normal mt-0.5">
                    (Tax Refund &amp; Recovery)
                  </span>
                </h2>
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                  Pengawalan proses pengembalian kelebihan bayar pajak (PPN Lebih Bayar Ekspor / PPh
                  Badan) secara cepat dan tepat waktu dengan tingkat risiko koreksi seminimal
                  mungkin.
                </p>
                <div className="p-3 rounded bg-[#343439]/40 flex flex-col gap-1.5 text-[12px] text-[#d0c5af]">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#e4c277]" />
                    <span>Pre-audit faktur &amp; PEB/PIB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#e4c277]" />
                    <span>Monitoring status SPMKP di KPP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#e4c277]" />
                    <span>Optimasi restitusi pendahuluan</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between mt-4 border-t border-[#4d4635]/30">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#99907c] uppercase">
                  Pemulihan Kas
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#292a2e] hover:bg-[#d4af37] hover:text-[#554300] text-[#e3e2e8] font-['Plus_Jakarta_Sans'] text-[12px] font-semibold transition-all cursor-pointer"
                >
                  <span>Hubungi Kami</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </article>

            {/* Layanan 5: Tax Dispute & Litigation */}
            <article className="flex flex-col justify-between p-6 bg-[#1a1b20] border border-[#4d4635]/40 rounded-xl shadow-md transition-all hover:bg-[#1f1f24] group">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase bg-[#292a2e] px-2.5 py-1 rounded">
                    Pilar 05 &bull; Litigasi Hukum
                  </span>
                  <span className="material-symbols-outlined text-[#e4c277] text-[22px]">
                    balance
                  </span>
                </div>
                <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[17px] text-[#e3e2e8] group-hover:text-[#f2ca50] transition-colors">
                  Keberatan &amp; Banding Pajak{' '}
                  <span className="block text-[12px] text-[#d0c5af] font-normal mt-0.5">
                    (Tax Dispute &amp; Litigation)
                  </span>
                </h2>
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                  Representasi hukum resmi di Kantor Wilayah DJP (Keberatan) hingga Pengadilan Pajak
                  dan Mahkamah Agung (Peninjauan Kembali/PK).
                </p>
                <div className="p-3 rounded bg-[#343439]/40 flex flex-col gap-1.5 text-[12px] text-[#d0c5af]">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#e4c277]" />
                    <span>Analisis yuridis SKPKB/SKPLB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#e4c277]" />
                    <span>Penyusunan Surat Banding/Gugatan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#e4c277]" />
                    <span>Pendampingan Kuasa Hukum Pengadilan</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between mt-4 border-t border-[#4d4635]/30">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#99907c] uppercase">
                  Advokasi Yudisial
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#292a2e] hover:bg-[#d4af37] hover:text-[#554300] text-[#e3e2e8] font-['Plus_Jakarta_Sans'] text-[12px] font-semibold transition-all cursor-pointer"
                >
                  <span>Hubungi Kami</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </article>

            {/* Layanan 6: Tax Review & Due Diligence */}
            <article className="flex flex-col justify-between p-6 bg-[#1a1b20] border border-[#4d4635]/40 rounded-xl shadow-md transition-all hover:bg-[#1f1f24] group">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase bg-[#292a2e] px-2.5 py-1 rounded">
                    Pilar 06 &bull; Audit Diagnostik
                  </span>
                  <span className="material-symbols-outlined text-[#e4c277] text-[22px]">
                    health_and_safety
                  </span>
                </div>
                <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[17px] text-[#e3e2e8] group-hover:text-[#f2ca50] transition-colors">
                  Tax Review &amp; Due Diligence{' '}
                  <span className="block text-[12px] text-[#d0c5af] font-normal mt-0.5">
                    (Diagnostic &amp; M&amp;A Audit)
                  </span>
                </h2>
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                  Audit kesehatan perpajakan pra-akuisisi, pendanaan ventura, atau persiapan Initial
                  Public Offering (IPO).
                </p>
                <div className="p-3 rounded bg-[#343439]/40 flex flex-col gap-1.5 text-[12px] text-[#d0c5af]">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#e4c277]" />
                    <span>Identifikasi potensi pajak tersembunyi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#e4c277]" />
                    <span>Kalkulasi denda keterlambatan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#e4c277]" />
                    <span>Eksposur sanksi administrasi lampau</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between mt-4 border-t border-[#4d4635]/30">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#99907c] uppercase">
                  Pra-Investasi &amp; IPO
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#292a2e] hover:bg-[#d4af37] hover:text-[#554300] text-[#e3e2e8] font-['Plus_Jakarta_Sans'] text-[12px] font-semibold transition-all cursor-pointer"
                >
                  <span>Hubungi Kami</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </article>

            {/* Layanan 7: Transfer Pricing Documentation (Spans 2 columns on lg) */}
            <article className="lg:col-span-2 flex flex-col justify-between p-6 md:p-8 bg-[#1a1b20] border border-[#4d4635]/40 rounded-xl shadow-md transition-all hover:bg-[#1f1f24] group relative overflow-hidden">
              <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-[#e4c277]/5 blur-3xl pointer-events-none group-hover:bg-[#e4c277]/10 transition-all" />
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase bg-[#292a2e] px-2.5 py-1 rounded">
                    Pilar 07 &bull; Penentuan Harga Transfer
                  </span>
                  <span className="material-symbols-outlined text-[#f2ca50] text-[24px]">hub</span>
                </div>
                <h2 className="font-['Playfair_Display'] text-[22px] md:text-[24px] font-semibold text-[#e3e2e8] group-hover:text-[#f2ca50] transition-colors">
                  Transfer Pricing Documentation{' '}
                  <span className="text-[#d0c5af] font-normal text-[18px]">
                    (TP Doc PMK 172/2023)
                  </span>
                </h2>
                <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#d0c5af] leading-relaxed">
                  Penyusunan dokumen transfer pricing berstandar OECD dan PMK 172/2023: Master File
                  (Dokumen Induk), Local File (Dokumen Lokal), dan Country-by-Country Report (CbCR)
                  untuk transaksi afiliasi domestik maupun lintas batas.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[#d0c5af] font-['Plus_Jakarta_Sans'] text-[12px] bg-[#343439]/60 px-2.5 py-1 rounded">
                    <span className="material-symbols-outlined text-[14px] text-[#e4c277]">
                      database
                    </span>{' '}
                    Benchmarking Database Global Terverifikasi
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#d0c5af] font-['Plus_Jakarta_Sans'] text-[12px] bg-[#343439]/60 px-2.5 py-1 rounded">
                    <span className="material-symbols-outlined text-[14px] text-[#e4c277]">
                      verified
                    </span>{' '}
                    Prinsip Kewajaran &amp; Kelaziman Usaha (PKKU/ALP)
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#d0c5af] font-['Plus_Jakarta_Sans'] text-[12px] bg-[#343439]/60 px-2.5 py-1 rounded">
                    <span className="material-symbols-outlined text-[14px] text-[#e4c277]">
                      rule
                    </span>{' '}
                    Penyelarasan PMK 172 Terkini
                  </span>
                </div>
              </div>
              <div className="pt-6 flex items-center justify-between relative z-10 mt-4 border-t border-[#4d4635]/30">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#99907c] uppercase tracking-wider">
                  Kepatuhan Afiliasi Multinasional
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#d4af37] text-[#554300] font-['Plus_Jakarta_Sans'] text-[13px] font-bold hover:bg-[#f2ca50] transition-all shadow-md cursor-pointer"
                >
                  <span>Hubungi Kami</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </article>

            {/* Layanan 8: Cross-Border Tax Advisory (Spans 2 columns on lg) */}
            <article className="lg:col-span-2 flex flex-col justify-between p-6 md:p-8 bg-[#1a1b20] border border-[#4d4635]/40 rounded-xl shadow-md transition-all hover:bg-[#1f1f24] group relative overflow-hidden">
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase bg-[#292a2e] px-2.5 py-1 rounded">
                    Pilar 08 &bull; Perpajakan Internasional
                  </span>
                  <span className="material-symbols-outlined text-[#e4c277] text-[24px]">
                    public
                  </span>
                </div>
                <h2 className="font-['Playfair_Display'] text-[22px] md:text-[24px] font-semibold text-[#e3e2e8] group-hover:text-[#f2ca50] transition-colors">
                  Konsultasi Pajak Internasional{' '}
                  <span className="text-[#d0c5af] font-normal text-[18px]">
                    (Cross-Border Tax Advisory)
                  </span>
                </h2>
                <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#d0c5af] leading-relaxed">
                  Penerapan Perjanjian Penghindaran Pajak Berganda (P3B / Tax Treaty), penetapan
                  status Bentuk Usaha Tetap (BUT), optimalisasi withholding tax ekspatriat &amp;
                  royalti lintas batas negara, serta pencegahan treaty shopping.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[#d0c5af] font-['Plus_Jakarta_Sans'] text-[12px] bg-[#343439]/60 px-2.5 py-1 rounded">
                    <span className="material-symbols-outlined text-[14px] text-[#e4c277]">
                      handshake
                    </span>{' '}
                    Optimasi P3B / DTA Network
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#d0c5af] font-['Plus_Jakarta_Sans'] text-[12px] bg-[#343439]/60 px-2.5 py-1 rounded">
                    <span className="material-symbols-outlined text-[14px] text-[#e4c277]">
                      domain
                    </span>{' '}
                    Mitigasi Risiko Status BUT
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#d0c5af] font-['Plus_Jakarta_Sans'] text-[12px] bg-[#343439]/60 px-2.5 py-1 rounded">
                    <span className="material-symbols-outlined text-[14px] text-[#e4c277]">
                      payments
                    </span>{' '}
                    Withholding Tax Efisien
                  </span>
                </div>
              </div>
              <div className="pt-6 flex items-center justify-between relative z-10 mt-4 border-t border-[#4d4635]/30">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#99907c] uppercase tracking-wider">
                  Struktur Global Aman
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#d4af37] text-[#554300] font-['Plus_Jakarta_Sans'] text-[13px] font-bold hover:bg-[#f2ca50] transition-all shadow-md cursor-pointer"
                >
                  <span>Hubungi Kami</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Editorial Visual Split: Analytical Precision Showcase */}
      <section className="w-full bg-[#0d0e12] py-16 overflow-hidden border-t border-[#4d4635]/30">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Image Showcase with Rich Prompt */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-2xl bg-[#1f1f24] border border-[#4d4635]">
                <img
                  className="w-full h-full object-cover"
                  alt="An executive boardroom meeting in a dark obsidian-toned modern Jakarta high-rise advisory office"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsLkawhPGJgKWqc1bR7ea0w87cfLwCl9nuQ4Qd7Fix64YAJzPVee82_WI1lYeOidL7hu94lZEaCUob3_FRaxH48K3u1J3cx-xU0764oGqMe2O0m2rKuiHxE2MgVk1WfHNCrFmWr2n0xsmYCXIsURdbn2EmP6ahhJbdlGxyweqhV_tr3OxMOpXB-NRgFfXgp6uSNa0LMvGPsx54srsXD0pqahCaW6oBYOGc1akKwWc81Ajso9zm_MEzPg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0d0e12]/90 backdrop-blur-md rounded border border-[#4d4635]/50 shadow-lg">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase block mb-1">
                    Integritas &amp; Akuntabilitas
                  </span>
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] text-[#e3e2e8]">
                    Didukung Dewan Konsultan Berizin Resmi Kementerian Keuangan RI
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Technical Assurance & Methodology */}
            <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-6">
              <div className="flex flex-col gap-2">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-widest">
                  Metodologi Berbasis Regulasi
                </span>
                <h2 className="font-['Playfair_Display'] text-[26px] md:text-[32px] font-semibold text-[#e3e2e8]">
                  Presisi Analitis Menembus Kompleksitas Pajak
                </h2>
                <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#d0c5af] leading-relaxed">
                  Tiap penugasan dikawal oleh Konsultan Pajak Berizin (BKP) dan Kuasa Hukum
                  Pengadilan Pajak yang beroperasi dengan standar kehati-hatian tertinggi. Kami
                  menjamin kepatuhan absolut terhadap pembaruan sistem Coretax DJP serta regulasi OECD
                  terkini.
                </p>
              </div>

              {/* Feature Matrix 2x2 without lines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#1a1b20] border border-[#4d4635]/30 rounded-xl">
                  <div className="flex items-center gap-2 text-[#f2ca50] mb-1">
                    <span className="material-symbols-outlined text-[20px]">shield</span>
                    <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#e3e2e8]">
                      Legal Shield 100%
                    </span>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                    Solusi tax planning berbasis tafsir resmi undang-undang perpajakan yang teruji di
                    meja sidang peradilan.
                  </p>
                </div>

                <div className="p-4 bg-[#1a1b20] border border-[#4d4635]/30 rounded-xl">
                  <div className="flex items-center gap-2 text-[#f2ca50] mb-1">
                    <span className="material-symbols-outlined text-[20px]">lock</span>
                    <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#e3e2e8]">
                      Kerahasiaan Tertinggi
                    </span>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                    Perlindungan data wajib pajak melalui protokol enkripsi ketat dan Non-Disclosure
                    Agreement (NDA).
                  </p>
                </div>

                <div className="p-4 bg-[#1a1b20] border border-[#4d4635]/30 rounded-xl">
                  <div className="flex items-center gap-2 text-[#f2ca50] mb-1">
                    <span className="material-symbols-outlined text-[20px]">sync</span>
                    <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#e3e2e8]">
                      Coretax Ready
                    </span>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                    Sinkronisasi sistem pelaporan dengan integrasi arsitektur Coretax DJP versi
                    terbaru tanpa disrupsi.
                  </p>
                </div>

                <div className="p-4 bg-[#1a1b20] border border-[#4d4635]/30 rounded-xl">
                  <div className="flex items-center gap-2 text-[#f2ca50] mb-1">
                    <span className="material-symbols-outlined text-[20px]">award_star</span>
                    <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#e3e2e8]">
                      BKP Tingkat C
                    </span>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                    Kualifikasi tertinggi konsultan pajak untuk menangani sengketa wajib pajak badan
                    dan multinasional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Kolaborasi: 4 Langkah Kerja Sama */}
      <section className="w-full bg-[#121317] py-16 border-t border-[#4d4635]/30">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 flex flex-col gap-12">
          {/* Section Intro */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1 max-w-2xl">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-widest">
                Workflow Kolaborasi
              </span>
              <h2 className="font-['Playfair_Display'] text-[26px] md:text-[32px] font-semibold text-[#e3e2e8]">
                4 Langkah Kerja Sama Terstruktur
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#d0c5af]">
                Alur kerja sistematis dan transparan yang menjamin setiap tahapan mitigasi risiko dan
                penanganan pajak terekam secara akuntabel.
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#99907c] uppercase tracking-wider block">
                Standard Operating Procedure
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[12px] font-bold text-[#f2ca50]">
                TNS-SOP-REV2026
              </span>
            </div>
          </div>

          {/* 4 Stepper Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="p-6 bg-[#1a1b20] border border-[#4d4635]/30 rounded-xl shadow-md flex flex-col justify-between group hover:bg-[#1f1f24] transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-['Playfair_Display'] text-[28px] font-bold text-[#f2ca50]/40 group-hover:text-[#f2ca50] transition-colors tabular-nums">
                    01
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#292a2e] flex items-center justify-center text-[#e4c277]">
                    <span className="material-symbols-outlined text-[20px]">
                      assignment_turned_in
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-[#e3e2e8]">
                    Diskusi Kerahasiaan (NDA) &amp; Analisis Dokumen Awal
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] leading-relaxed">
                    Penandatanganan Non-Disclosure Agreement (NDA) resmi diikuti penelaahan berkas
                    pembukuan, SPT, atau surat panggilan pajak untuk memetakan urgensi masalah.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#4d4635]/30">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase bg-[#343439] px-2.5 py-1 rounded inline-block">
                  Tahap Inisiasi
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-[#1a1b20] border border-[#4d4635]/30 rounded-xl shadow-md flex flex-col justify-between group hover:bg-[#1f1f24] transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-['Playfair_Display'] text-[28px] font-bold text-[#f2ca50]/40 group-hover:text-[#f2ca50] transition-colors tabular-nums">
                    02
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#292a2e] flex items-center justify-center text-[#e4c277]">
                    <span className="material-symbols-outlined text-[20px]">insights</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-[#e3e2e8]">
                    Diagnosa Risiko &amp; Rekomendasi Solusi Strategis
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] leading-relaxed">
                    Penyusunan diagnostic report yang mengidentifikasi celah koreksi, simulasi dampak
                    finansial, serta opsi strategi yuridis paling aman dan efisien.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#4d4635]/30">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase bg-[#343439] px-2.5 py-1 rounded inline-block">
                  Tahap Formulasi
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-[#1a1b20] border border-[#4d4635]/30 rounded-xl shadow-md flex flex-col justify-between group hover:bg-[#1f1f24] transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-['Playfair_Display'] text-[28px] font-bold text-[#f2ca50]/40 group-hover:text-[#f2ca50] transition-colors tabular-nums">
                    03
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#292a2e] flex items-center justify-center text-[#e4c277]">
                    <span className="material-symbols-outlined text-[20px]">engineering</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-[#e3e2e8]">
                    Eksekusi Kepatuhan &amp; Advokasi Lapangan
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] leading-relaxed">
                    Pelaksanaan filing pelaporan, penyusunan dokumentasi TP Doc, rekonsiliasi audit,
                    atau representasi tatap muka langsung bersama otoritas DJP.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#4d4635]/30">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase bg-[#343439] px-2.5 py-1 rounded inline-block">
                  Tahap Implementasi
                </span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 bg-[#1a1b20] border border-[#4d4635]/30 rounded-xl shadow-md flex flex-col justify-between group hover:bg-[#1f1f24] transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-['Playfair_Display'] text-[28px] font-bold text-[#f2ca50]/40 group-hover:text-[#f2ca50] transition-colors tabular-nums">
                    04
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#292a2e] flex items-center justify-center text-[#e4c277]">
                    <span className="material-symbols-outlined text-[20px]">verified</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-[#e3e2e8]">
                    Pemantauan Berkelanjutan &amp; Laporan Akuntabilitas
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] leading-relaxed">
                    Penyerahan dossier penugasan menyeluruh, surat ketetapan resmi, serta monitoring
                    berkelanjutan untuk memastikan stabilitas kepatuhan perpajakan jangka panjang.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#4d4635]/30">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase bg-[#343439] px-2.5 py-1 rounded inline-block">
                  Tahap Evaluasi
                </span>
              </div>
            </div>
          </div>

          {/* Process Progress Infographic SVG */}
          <div className="w-full bg-[#1a1b20] border border-[#4d4635]/30 p-6 rounded-xl shadow-sm hidden md:block">
            <div className="flex items-center justify-between text-[12px] text-[#d0c5af] mb-2">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-wider">
                DIAGRAM TAHAPAN PROTOKOL ADVISORY TNS
              </span>
              <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[#f2ca50]">
                Zero Non-Compliance Tolerance
              </span>
            </div>
            <svg
              className="w-full h-10"
              fill="none"
              viewBox="0 0 1000 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="text-[#343439]"
                d="M20 20 H980"
                stroke="currentColor"
                strokeDasharray="6 6"
                strokeWidth="2"
              />
              <path
                className="text-[#d4af37]"
                d="M20 20 H740"
                stroke="currentColor"
                strokeWidth="3"
              />
              {/* Step 1 Node */}
              <circle
                className="fill-[#0d0e12] stroke-[#f2ca50]"
                cx="50"
                cy="20"
                r="10"
                strokeWidth="3"
              />
              <circle className="fill-[#f2ca50]" cx="50" cy="20" r="4" />
              {/* Step 2 Node */}
              <circle
                className="fill-[#0d0e12] stroke-[#f2ca50]"
                cx="350"
                cy="20"
                r="10"
                strokeWidth="3"
              />
              <circle className="fill-[#f2ca50]" cx="350" cy="20" r="4" />
              {/* Step 3 Node */}
              <circle
                className="fill-[#0d0e12] stroke-[#f2ca50]"
                cx="650"
                cy="20"
                r="10"
                strokeWidth="3"
              />
              <circle className="fill-[#f2ca50]" cx="650" cy="20" r="4" />
              {/* Step 4 Node */}
              <circle
                className="fill-[#0d0e12] stroke-[#e4c277]"
                cx="950"
                cy="20"
                r="10"
                strokeWidth="3"
              />
              <circle className="fill-[#e4c277]" cx="950" cy="20" r="4" />
            </svg>
          </div>
        </div>
      </section>

      {/* Banner Konsultasi Khusus */}
      <section className="w-full bg-[#0d0e12] py-16 relative overflow-hidden border-t border-[#4d4635]/30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f2ca50]/10 via-transparent to-[#e4c277]/10 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 relative z-10">
          <div className="p-8 md:p-12 bg-[#1a1b20] border border-[#4d4635] rounded-xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 mx-auto lg:mx-0">
                <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">help</span>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#f2ca50] uppercase tracking-widest">
                  Sesi Telaah Khusus
                </span>
              </div>
              <h2 className="font-['Playfair_Display'] text-[26px] md:text-[34px] font-semibold text-[#e3e2e8]">
                Memerlukan penanganan kasus pajak spesifik?
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#d0c5af] leading-relaxed">
                Mulai dari sengketa pemeriksaan SKPKB berisiko tinggi, restrukturisasi holding
                korporat, hingga audit transfer pricing lintas negara. Tim konsultan senior kami
                siap menyusun audit assessment awal secara rahasia.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-[#d0c5af] text-[12px]">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#e4c277] text-[16px]">
                    schedule
                  </span>
                  <span>Respon Cepat &lt; 24 Jam</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#e4c277] text-[16px]">lock</span>
                  <span>Proteksi NDA Terjamin</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#e4c277] text-[16px]">
                    workspace_premium
                  </span>
                  <span>Konsultan BKP C Berlisensi</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#292a2e] text-[#e3e2e8] hover:text-[#f2ca50] transition-all font-['Plus_Jakarta_Sans'] text-[13px] font-semibold"
                href="https://wa.me/6287817582369?text=Halo%20TNS,%20kami%20memerlukan%20asistensi%20terkait%20penanganan%20kasus%20pajak%20spesifik."
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">chat</span>
                <span>WhatsApp Prioritas</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded bg-[#d4af37] text-[#554300] font-['Plus_Jakarta_Sans'] text-[13px] uppercase tracking-wider font-bold hover:bg-[#f2ca50] transition-all shadow-[0_0_24px_rgba(212,175,55,0.35)] cursor-pointer"
              >
                <span>Konsultasikan Kebutuhan Anda</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
