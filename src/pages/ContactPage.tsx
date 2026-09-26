import React, { useState } from 'react';
import { PagePath } from '../types';

interface ContactPageProps {
  onNavigate: (page: PagePath) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [fiscalSummary, setFiscalSummary] = useState('');
  const [ndaConsent, setNdaConsent] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo PT. Terang Nusantara Sentosa,\nNama: ${fullName || '-'}\nPerusahaan: ${companyName || '-'}\nLayanan: ${service || 'Konsultasi Fiskal'}\nKebutuhan: ${fiscalSummary || 'Permohonan konsultasi rahasia'}`
    );
    window.open(`https://wa.me/6287817582369?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Ambient Glow Field */}
      <div className="relative w-full overflow-hidden bg-[#0d0e12]">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#f2ca50]/10 via-[#d4af37]/5 to-transparent blur-3xl pointer-events-none rounded-full" />

        {/* Executive Header Section */}
        <section className="relative max-w-[1440px] mx-auto px-5 md:px-12 pt-28 pb-10">
          <div className="flex flex-col items-start gap-3 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#292a2e] border border-[#4d4635]/40 text-[#e4c277]">
              <span className="material-symbols-outlined text-[16px] text-[#f2ca50]">
                verified_user
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold tracking-wider uppercase">
                PUSAT KOMUNIKASI &amp; KONSULTASI
              </span>
            </div>
            <h1 className="font-['Playfair_Display'] text-[30px] sm:text-[42px] md:text-[50px] font-semibold text-[#e3e2e8] tracking-tight text-left leading-[1.15]">
              Mulai Diskusi Rahasia &amp; Jadwalkan Konsultasi Fiskal
            </h1>
            <p className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] text-[#d0c5af] max-w-3xl leading-relaxed">
              Tim konsultan pajak berlisensi BKP dan kuasa hukum pengadilan kami siap membantu
              menuntaskan tantangan kepatuhan fiskal, mitigasi risiko sanksi administrasi, dan
              penataan arsitektur finansial korporasi Anda dengan standar diskresi tertinggi.
            </p>

            {/* Institutional Trust Badges Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#1a1b20] border border-[#4d4635]/40 text-[#d0c5af] font-['Plus_Jakarta_Sans'] text-[12px] shadow-sm">
                <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">lock</span>
                <span>NDA &amp; Perlindungan Kerahasiaan 100%</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#1a1b20] border border-[#4d4635]/40 text-[#d0c5af] font-['Plus_Jakarta_Sans'] text-[12px] shadow-sm">
                <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">gavel</span>
                <span>Kuasa Hukum Terdaftar Pengadilan Pajak</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#1a1b20] border border-[#4d4635]/40 text-[#d0c5af] font-['Plus_Jakarta_Sans'] text-[12px] shadow-sm">
                <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">timer</span>
                <span>Respon Cepat &lt; 24 Jam Kerja</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main 2-Column Advisory Interface */}
        <section className="max-w-[1440px] mx-auto px-5 md:px-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Kolom Kiri: Form Permohonan Advis Pajak (7 Kolom) */}
            <div className="lg:col-span-7 bg-[#1a1b20] border border-[#4d4635]/50 rounded-xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />

              <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase text-[#e4c277]">
                    Protokol Permohonan Klien
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#343439] text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold">
                    Status: Jalur Prioritas
                  </span>
                </div>
                <h2 className="font-['Playfair_Display'] text-[22px] md:text-[26px] font-semibold text-[#e3e2e8]">
                  Formulir Permohonan Advis Pajak
                </h2>
                <div className="flex items-start gap-2.5 p-3 rounded bg-[#1f1f24] border border-[#4d4635]/40 mt-1">
                  <span className="material-symbols-outlined text-[#f2ca50] text-[18px] shrink-0 mt-0.5">
                    security
                  </span>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] leading-relaxed">
                    Seluruh data identitas korporat dan rincian pembukuan dilindungi secara mutlak di
                    bawah kode etik Ikatan Konsultan Pajak Indonesia (IKPI) dan klausul Non-Disclosure
                    Agreement (NDA).
                  </p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-[#1f1f24] border border-[#f2ca50]/40 text-[#e3e2e8] space-y-4 text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#5d4604]/50 border border-[#f2ca50] flex items-center justify-center text-[#f2ca50]">
                    <span className="material-symbols-outlined text-[32px]">task_alt</span>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-[22px] font-semibold text-[#e3e2e8]">
                    Permohonan Konsultasi Berhasil Terkirim
                  </h3>
                  <p className="text-[14px] text-[#d0c5af] max-w-md mx-auto leading-relaxed">
                    Terima kasih <strong className="text-[#f2ca50]">{fullName}</strong> dari{' '}
                    <strong className="text-[#e3e2e8]">{companyName}</strong>. Permohonan Anda telah
                    terdaftar dalam sistem reservasi prioritas kami. Partner fiskal TNS akan meninjau
                    materi awal dan menghubungi Anda dalam kurun waktu maksimal 12 jam kerja.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleDirectWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#d4af37] text-[#554300] font-bold text-[13px] uppercase tracking-wider hover:bg-[#f2ca50] transition-all cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Konfirmasi via WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFiscalSummary('');
                      }}
                      className="w-full sm:w-auto px-5 py-3 rounded bg-[#292a2e] text-[#e3e2e8] hover:text-[#f2ca50] text-[13px] font-semibold transition-colors cursor-pointer"
                    >
                      Kirim Formulir Lain
                    </button>
                  </div>
                </div>
              ) : (
                <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                  {/* Row 1: Nama & Perusahaan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] text-[#e3e2e8]"
                        htmlFor="fullName"
                      >
                        Nama Lengkap &amp; Gelar <span className="text-[#f2ca50]">*</span>
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-[#99907c]">
                          badge
                        </span>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="misal: Hendra Wijaya, S.E., M.Ak."
                          className="w-full bg-[#121317] border border-[#4d4635]/60 text-[#e3e2e8] placeholder:text-[#99907c] font-['Plus_Jakarta_Sans'] text-[14px] rounded pl-10 pr-3.5 py-3 focus:outline-none focus:border-[#d4af37] transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] text-[#e3e2e8]"
                        htmlFor="companyName"
                      >
                        Nama Perusahaan / Korporat <span className="text-[#f2ca50]">*</span>
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-[#99907c]">
                          apartment
                        </span>
                        <input
                          id="companyName"
                          type="text"
                          required
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="misal: PT Mega Cahaya Sentosa"
                          className="w-full bg-[#121317] border border-[#4d4635]/60 text-[#e3e2e8] placeholder:text-[#99907c] font-['Plus_Jakarta_Sans'] text-[14px] rounded pl-10 pr-3.5 py-3 focus:outline-none focus:border-[#d4af37] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Email & Kontak WA */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] text-[#e3e2e8]"
                        htmlFor="corporateEmail"
                      >
                        Email Korporat Resmi <span className="text-[#f2ca50]">*</span>
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-[#99907c]">
                          mail
                        </span>
                        <input
                          id="corporateEmail"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="direksi@company.co.id"
                          className="w-full bg-[#121317] border border-[#4d4635]/60 text-[#e3e2e8] placeholder:text-[#99907c] font-['Plus_Jakarta_Sans'] text-[14px] rounded pl-10 pr-3.5 py-3 focus:outline-none focus:border-[#d4af37] transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] text-[#e3e2e8]"
                        htmlFor="phoneWhatsApp"
                      >
                        Nomor Telepon / WhatsApp <span className="text-[#f2ca50]">*</span>
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-[#99907c]">
                          phone
                        </span>
                        <input
                          id="phoneWhatsApp"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+62 812-3456-7890"
                          className="w-full bg-[#121317] border border-[#4d4635]/60 text-[#e3e2e8] placeholder:text-[#99907c] font-['Plus_Jakarta_Sans'] text-[14px] rounded pl-10 pr-3.5 py-3 focus:outline-none focus:border-[#d4af37] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Kebutuhan Layanan Spesifik */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] text-[#e3e2e8] flex items-center justify-between"
                      htmlFor="serviceRequirement"
                    >
                      <span>
                        Kebutuhan Layanan Spesifik <span className="text-[#f2ca50]">*</span>
                      </span>
                      <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#e4c277]">
                        Pilih Domain Permasalahan
                      </span>
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-[#99907c] pointer-events-none">
                        assignment
                      </span>
                      <select
                        id="serviceRequirement"
                        required
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-[#121317] border border-[#4d4635]/60 text-[#e3e2e8] font-['Plus_Jakarta_Sans'] text-[14px] rounded pl-10 pr-10 py-3 appearance-none focus:outline-none focus:border-[#d4af37] transition-all cursor-pointer"
                      >
                        <option value="" disabled className="text-[#99907c]">
                          Pilih Kebutuhan Layanan Perpajakan
                        </option>
                        <option value="perencanaan-pajak" className="bg-[#1f1f24]">
                          Konsultasi &amp; Perencanaan Pajak Komprehensif (Tax Planning)
                        </option>
                        <option value="pelaporan-spt-coretax" className="bg-[#1f1f24]">
                          Pelaporan SPT Masa &amp; Tahunan (Kesiapan Coretax DJP)
                        </option>
                        <option value="pemeriksaan-sp2dk" className="bg-[#1f1f24]">
                          Pendampingan Pemeriksaan Pajak (SP2DK / Risalah Temuan SPHP)
                        </option>
                        <option value="restitusi-korporasi" className="bg-[#1f1f24]">
                          Restitusi Pajak Korporat &amp; Ekspor (PPN / PPh Badan)
                        </option>
                        <option value="keberatan-banding-pengadilan" className="bg-[#1f1f24]">
                          Keberatan, Banding, &amp; Gugatan Pengadilan Pajak RI
                        </option>
                        <option value="due-diligence-ma" className="bg-[#1f1f24]">
                          Tax Due Diligence &amp; Restrukturisasi M&amp;A Korporasi
                        </option>
                        <option value="transfer-pricing" className="bg-[#1f1f24]">
                          Transfer Pricing Documentation (Master File, Local File, CbCR)
                        </option>
                        <option value="pajak-internasional" className="bg-[#1f1f24]">
                          Konsultasi Pajak Internasional &amp; Penerapan Tax Treaty P3B
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-[20px] text-[#99907c] pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Ringkasan Situasi Fiskal */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] text-[#e3e2e8] flex items-center justify-between"
                      htmlFor="fiscalSummary"
                    >
                      <span>
                        Ringkasan Situasi Fiskal / Kebutuhan <span className="text-[#f2ca50]">*</span>
                      </span>
                      <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#99907c]">
                        Maks. 500 kata
                      </span>
                    </label>
                    <textarea
                      id="fiscalSummary"
                      required
                      rows={4}
                      value={fiscalSummary}
                      onChange={(e) => setFiscalSummary(e.target.value)}
                      placeholder="Deskripsikan kondisi audit, tenggat surat DJP (jika ada SP2DK), estimasi tahun pajak yang ditinjau, atau latar belakang restrukturisasi bisnis korporasi Anda secara singkat..."
                      className="w-full bg-[#121317] border border-[#4d4635]/60 text-[#e3e2e8] placeholder:text-[#99907c] font-['Plus_Jakarta_Sans'] text-[14px] rounded p-3.5 focus:outline-none focus:border-[#d4af37] transition-all resize-none"
                    />
                  </div>

                  {/* Checkbox NDA Persetujuan */}
                  <div className="p-3.5 rounded bg-[#1f1f24] border border-[#4d4635]/30 flex items-start gap-3">
                    <input
                      id="ndaConsent"
                      type="checkbox"
                      required
                      checked={ndaConsent}
                      onChange={(e) => setNdaConsent(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded bg-[#121317] text-[#d4af37] accent-[#d4af37] cursor-pointer shrink-0"
                    />
                    <label
                      htmlFor="ndaConsent"
                      className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] cursor-pointer select-none leading-relaxed"
                    >
                      Saya mengonfirmasi bahwa data yang saya kirimkan merupakan permohonan resmi dan
                      memberikan izin kepada Tim Konsultan Senior{' '}
                      <span className="text-[#e4c277] font-semibold">
                        PT. Terang Nusantara Sentosa
                      </span>{' '}
                      untuk menghubungi melalui email/WhatsApp guna penjadwalan sesi konsultasi
                      pendahuluan yang terlindungi kerahasiaannya.
                    </label>
                  </div>

                  {/* Submit Button & Feedback */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-7 py-3.5 rounded bg-[#d4af37] hover:bg-[#f2ca50] text-[#554300] font-['Plus_Jakarta_Sans'] text-[14px] tracking-wider uppercase font-bold transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Mengirimkan Permohonan...</span>
                      ) : (
                        <>
                          <span>Kirim Permohonan Konsultasi Strategis</span>
                          <span className="material-symbols-outlined text-[18px]">
                            arrow_forward
                          </span>
                        </>
                      )}
                    </button>
                    <div className="flex items-center gap-2 text-[#d0c5af] font-['Plus_Jakarta_Sans'] text-[12px]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#f2ca50] animate-pulse shrink-0" />
                      <span>Konsultan Siaga: Siap Ditugaskan</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Kolom Kanan: Kantor Operasional, Kontak Langsung & Map (5 Kolom) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Headquarters Dossier Card */}
              <div className="bg-[#1a1b20] border border-[#4d4635]/40 rounded-xl p-6 shadow-xl flex flex-col gap-4 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#4d4635]/30 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">
                      corporate_fare
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase text-[#e4c277]">
                      Kantor Operasional &amp; Konsultasi
                    </span>
                  </div>
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#d0c5af]">
                    KAB. TANGERANG
                  </span>
                </div>

                {/* Alamat & Landmark */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[17px] text-[#e3e2e8]">
                    Kantor Pusat TNS Consulting
                  </h3>
                  <div className="flex items-start gap-2 text-[#d0c5af] font-['Plus_Jakarta_Sans'] text-[13px]">
                    <span className="material-symbols-outlined text-[#f2ca50] text-[18px] shrink-0 mt-0.5">
                      location_on
                    </span>
                    <span className="leading-relaxed">
                      Ruko Mutiara Garuda Blok C12 No. 4B, Kampung Melayu Timur, Teluknaga, Kabupaten
                      Tangerang, Banten 15510
                    </span>
                  </div>

                  {/* Landmark Airport Proximity Chip */}
                  <div className="mt-2 p-3 rounded bg-[#1f1f24] border border-[#4d4635]/30 flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e4c277] text-[22px]">
                      flight
                    </span>
                    <div className="flex flex-col">
                      <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase text-[#e4c277] tracking-wider">
                        Aksesibilitas Strategis
                      </span>
                      <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#e3e2e8]">
                        Hanya 15 Menit dari Bandara Internasional Soekarno-Hatta (CGK)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Contact List */}
                <div className="flex flex-col gap-3 pt-2">
                  {/* Hotline WhatsApp Direct */}
                  <a
                    className="p-3.5 rounded bg-[#1f1f24] hover:bg-[#292a2e] border border-[#4d4635]/40 transition-colors flex items-center justify-between group"
                    href="https://wa.me/6287817582369"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#f2ca50]/10 flex items-center justify-center text-[#f2ca50] group-hover:bg-[#f2ca50] group-hover:text-[#3c2f00] transition-all shrink-0">
                        <span className="material-symbols-outlined text-[20px]">chat</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase text-[#99907c]">
                          Hotline Konsultasi Cepat (WhatsApp)
                        </span>
                        <span className="font-['Plus_Jakarta_Sans'] text-[15px] font-bold text-[#e3e2e8] group-hover:text-[#f2ca50] transition-colors tabular-nums">
                          +62 878-1758-2369
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#f2ca50] text-[20px] group-hover:translate-x-1 transition-transform">
                      open_in_new
                    </span>
                  </a>

                  {/* Corporate Emails */}
                  <div className="p-3.5 rounded bg-[#1f1f24] border border-[#4d4635]/40 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[#99907c]">
                      <span className="material-symbols-outlined text-[16px]">alternate_email</span>
                      <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase">
                        Korespondensi Email Resmi
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5 pl-6">
                      <a
                        className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#e3e2e8] hover:text-[#f2ca50] transition-colors flex items-center gap-1.5"
                        href="mailto:info@tnsconsulting.co.id"
                      >
                        <span>info@tnsconsulting.co.id</span>
                        <span className="text-[11px] text-[#99907c]">(Advis Korporasi)</span>
                      </a>
                      <a
                        className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#e3e2e8] hover:text-[#f2ca50] transition-colors flex items-center gap-1.5"
                        href="mailto:deasy@tnsconsulting.co.id"
                      >
                        <span>deasy@tnsconsulting.co.id</span>
                        <span className="text-[11px] text-[#99907c]">
                          (Managing Partner Desk)
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Operational Hours */}
                  <div className="p-3.5 rounded bg-[#1f1f24] border border-[#4d4635]/40 flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#f2ca50] text-[20px] shrink-0 mt-0.5">
                      schedule
                    </span>
                    <div className="flex flex-col gap-1 text-[#e3e2e8] w-full">
                      <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase text-[#99907c]">
                        Jam Pelayanan Kantor
                      </span>
                      <div className="flex justify-between gap-4 font-['Plus_Jakarta_Sans'] text-[12px]">
                        <span className="text-[#d0c5af]">Senin – Jumat:</span>
                        <span className="font-semibold text-[#e3e2e8] tabular-nums">
                          08:30 – 17:30 WIB
                        </span>
                      </div>
                      <div className="flex justify-between gap-4 font-['Plus_Jakarta_Sans'] text-[12px]">
                        <span className="text-[#d0c5af]">Sabtu – Minggu:</span>
                        <span className="text-[#e4c277] font-medium">
                          Khusus Sidang / Janji Temu Direksi
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Peta Lokasi / Map Card */}
              <div className="bg-[#1a1b20] border border-[#4d4635]/40 rounded-xl overflow-hidden shadow-xl flex flex-col">
                <div className="p-4 bg-[#1f1f24] border-b border-[#4d4635]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">
                      map
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#e3e2e8]">
                      Peta Lokasi Kantor Pusat
                    </span>
                  </div>
                  <a
                    className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#f2ca50] hover:text-[#e4c277] flex items-center gap-1 uppercase transition-colors"
                    href="https://maps.google.com/?q=Ruko+Mutiara+Garuda+Blok+C12+No+4B+Teluknaga+Tangerang"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Petunjuk Arah</span>
                    <span className="material-symbols-outlined text-[14px]">directions</span>
                  </a>
                </div>

                {/* Map Visual Container */}
                <div className="relative w-full h-56 bg-[#292a2e] overflow-hidden group">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgclYXKQaeKhRI2QsfxZLeZouY_I1u-BqL7K5creDwpVOeNBHNGTQl7SxY6sbI1Z1A-mhSTKWv062nXJlMHe2IL36jViftbon5GnnFw7iZ6S5d-gYkKCsFh5xlV0iNLFUQoBYXWIwH7uLpIiyT7M7S6rmVXIl2P3j87hLBvP8hBRI9-NtbOEHCWAswLdHDezZvCJxZM60y017MaZupsA6QP9JIrHGCjqH7BwuiFAimpZYkRUG0_UqBsg')`,
                    }}
                  />
                  {/* Gradient Overlay and Location Overlay Box */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12]/90 via-[#0d0e12]/30 to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between gap-3 bg-[#0d0e12]/90 backdrop-blur-md border border-[#4d4635]/60 p-3 rounded">
                      <div className="flex items-center gap-2.5">
                        <div className="w-3 h-3 rounded-full bg-[#f2ca50] animate-ping" />
                        <div className="flex flex-col">
                          <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] text-[#e3e2e8]">
                            PT. Terang Nusantara Sentosa
                          </span>
                          <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#d0c5af]">
                            Ruko Mutiara Garuda C12 No. 4B
                          </span>
                        </div>
                      </div>
                      <a
                        className="px-3 py-1.5 rounded bg-[#f2ca50] text-[#3c2f00] font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase shrink-0 hover:bg-[#e4c277] transition-colors"
                        href="https://maps.google.com/?q=Ruko+Mutiara+Garuda+Blok+C12+No+4B+Teluknaga+Tangerang"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Buka Maps
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#1f1f24] text-center border-t border-[#4d4635]/30">
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                    Tersedia area parkir representatif dan ruang pertemuan berstandar kerahasiaan
                    eksekutif untuk konsultasi tatap muka.
                  </p>
                </div>
              </div>

              {/* Secondary Quick Link: Direct WhatsApp Trigger Card */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#292a2e] to-[#1f1f24] border border-[#4d4635] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#f2ca50] text-[28px]">
                    support_agent
                  </span>
                  <div className="flex flex-col">
                    <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#e3e2e8]">
                      Butuh Tanggapan SP2DK Mendesak?
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                      Konsultasikan surat konfirmasi DJP Anda dalam 1 jam kerja
                    </span>
                  </div>
                </div>
                <a
                  className="px-3.5 py-2 rounded bg-[#0d0e12] text-[#f2ca50] hover:text-[#e3e2e8] font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase shrink-0 transition-colors border border-[#4d4635]/40"
                  href="https://wa.me/6287817582369?text=Halo%20TNS,%20kami%20memerlukan%20asistensi%20mendesak%20terkait%20surat%20pajak%20SP2DK."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Chat Segera
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Cepat Seputar Konsultasi Section */}
        <section className="max-w-[1440px] mx-auto px-5 md:px-12 pb-20">
          <div className="flex flex-col gap-2 mb-8">
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase text-[#e4c277] tracking-widest">
              Pusat Tanya Jawab Klien
            </span>
            <h2 className="font-['Playfair_Display'] text-[26px] md:text-[32px] font-semibold text-[#e3e2e8]">
              Pertanyaan Umum Seputar Sesi Konsultasi
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#d0c5af] max-w-2xl">
              Pedoman tata laksana, jaminan privasi, serta skema pendampingan hukum dan administrasi
              perpajakan di PT. Terang Nusantara Sentosa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* FAQ 1 */}
            <div className="bg-[#1a1b20] border border-[#4d4635]/40 rounded-xl p-6 flex flex-col justify-between shadow-lg relative group transition-all hover:bg-[#1f1f24]">
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1f1f24] flex items-center justify-center text-[#f2ca50] group-hover:bg-[#d4af37] group-hover:text-[#554300] transition-colors">
                  <span className="material-symbols-outlined text-[20px]">lock_clock</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#e3e2e8]">
                  Apakah konsultasi awal bersifat rahasia?
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                  Ya, mutlak. Setiap pertukaran dokumen, catatan keuangan, dan diskusi strategis
                  dilindungi oleh klausul kerahasiaan profesi konsultan pajak terdaftar serta
                  perjanjian tertulis{' '}
                  <span className="text-[#e3e2e8] font-medium">Non-Disclosure Agreement (NDA)</span>{' '}
                  yang kami terbitkan sebelum evaluasi perkara dimulai.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#4d4635]/30 flex items-center gap-1.5 text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Standar Discretionary IKPI</span>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[#1a1b20] border border-[#4d4635]/40 rounded-xl p-6 flex flex-col justify-between shadow-lg relative group transition-all hover:bg-[#1f1f24]">
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1f1f24] flex items-center justify-center text-[#f2ca50] group-hover:bg-[#d4af37] group-hover:text-[#554300] transition-colors">
                  <span className="material-symbols-outlined text-[20px]">domain</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#e3e2e8]">
                  Apakah melayani klien di luar wilayah Jabodetabek?
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                  Ya. Portofolio kami mencakup korporasi manufaktur, perkebunan, pertambangan, dan
                  trading di seluruh Indonesia. Kami menyelenggarakan sesi konsultasi komprehensif
                  melalui platform digital terenkripsi (Zoom / Google Meet) serta kunjungan berkala
                  onsite oleh konsultan senior kami ke kantor operasional Anda.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#4d4635]/30 flex items-center gap-1.5 text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase">
                <span className="material-symbols-outlined text-[16px]">travel_explore</span>
                <span>Cakupan Nasional &amp; Hybrid</span>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[#1a1b20] border border-[#4d4635]/40 rounded-xl p-6 flex flex-col justify-between shadow-lg relative group transition-all hover:bg-[#1f1f24]">
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1f1f24] flex items-center justify-center text-[#f2ca50] group-hover:bg-[#d4af37] group-hover:text-[#554300] transition-colors">
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#e3e2e8]">
                  Berapa lama waktu pendampingan SP2DK?
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                  Mengingat batas waktu 14 hari kerja yang ditetapkan DJP, tim kami melakukan
                  penelaahan data dan rekonsiliasi faktur dalam{' '}
                  <span className="text-[#e3e2e8] font-medium">1–3 hari kerja</span> untuk
                  merumuskan draf tanggapan tertulis resmi serta simulasi klarifikasi sebelum
                  menghadapi Account Representative (AR).
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#4d4635]/30 flex items-center gap-1.5 text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase">
                <span className="material-symbols-outlined text-[16px]">speed</span>
                <span>Tanggap Waktu DJP &le; 14 Hari</span>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Reassurance Band */}
        <section className="max-w-[1440px] mx-auto px-5 md:px-12 pb-20">
          <div className="p-6 md:p-8 rounded-xl bg-[#1f1f24] border border-[#4d4635]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f2ca50]/10 flex items-center justify-center text-[#f2ca50] shrink-0">
                <span className="material-symbols-outlined text-[24px]">balance</span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-[#e3e2e8]">
                  Butuh Audiensi Tatap Muka di Kantor Anda?
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af]">
                  Managing Partner dan Tax Counsel kami menyediakan agenda kunjungan eksekutif bagi
                  jajaran Direksi &amp; Dewan Komisaris.
                </span>
              </div>
            </div>
            <a
              className="px-6 py-3 rounded bg-[#292a2e] hover:bg-[#343439] text-[#e3e2e8] hover:text-[#f2ca50] transition-all font-['Plus_Jakarta_Sans'] text-[13px] font-semibold whitespace-nowrap shadow-md"
              href="https://wa.me/6287817582369?text=Halo%20TNS,%20kami%20ingin%20mengagendakan%20audiensi%20tatap%20muka%20untuk%20Direksi."
              rel="noopener noreferrer"
              target="_blank"
            >
              Jadwalkan Audiensi Direksi
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
