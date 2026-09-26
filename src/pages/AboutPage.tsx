import React from 'react';
import { PagePath } from '../types';

interface AboutPageProps {
  onNavigate: (page: PagePath) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Top Ambient Atmosphere Layer */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[520px] h-[520px] bg-[#f2ca50]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-80 -left-20 w-[420px] h-[420px] bg-[#e4c277]/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Editorial Header & Breadcrumb */}
        <section className="max-w-[1440px] mx-auto px-5 md:px-12 pt-28 pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[#d0c5af] font-['Plus_Jakarta_Sans'] text-[11px] font-bold tracking-widest uppercase mb-3">
            <button
              onClick={() => onNavigate('beranda')}
              className="hover:text-[#f2ca50] transition-colors cursor-pointer"
            >
              Beranda
            </button>
            <span className="text-[#e4c277]/60">/</span>
            <span className="text-[#f2ca50]">Tentang Kami</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1b20] border border-[#4d4635]/40 text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50] animate-pulse" />
                Profil Institusional &amp; Kepemimpinan
              </span>
              <h1 className="font-['Playfair_Display'] text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#e3e2e8] tracking-tight leading-[1.15]">
                Advokasi Fiskal Berbasis{' '}
                <span className="italic font-display-hero text-[#f2ca50]">Integritas</span> &amp;
                Profesionalisme Hukum Pajak
              </h1>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#d0c5af] max-w-md lg:text-right leading-relaxed">
              Mengawal kepatuhan, keadilan perpajakan, dan ketahanan finansial korporasi serta
              high-net-worth individuals di era transformasi regulasi Indonesia.
            </p>
          </div>

          {/* Atmospheric Horizontal Accent */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4d4635]/60 to-transparent mt-8" />
        </section>

        {/* Section 1: Institutional Profile Bento */}
        <section className="max-w-[1440px] mx-auto px-5 md:px-12 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Big Narrative Panel */}
            <div className="lg:col-span-7 bg-[#1a1b20] border border-[#4d4635]/40 rounded-xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#f2ca50]/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-widest">
                    Fondasi Firma
                  </span>
                  <span className="w-8 h-[2px] bg-[#e4c277]" />
                </div>
                <h2 className="font-['Playfair_Display'] text-[24px] md:text-[30px] font-semibold text-[#e3e2e8] mb-4">
                  Membangun Keamanan Fiskal yang Kokoh dari Jantung Pusat Bisnis Jabodetabek
                </h2>
                <div className="space-y-4 text-[#d0c5af] font-['Plus_Jakarta_Sans'] text-[15px] leading-relaxed">
                  <p>
                    Didirikan di Tangerang dengan jangkauan layanan komprehensif ke seluruh kawasan
                    Jabodetabek dan tingkat nasional,{' '}
                    <strong className="text-[#e3e2e8] font-semibold">
                      PT. Terang Nusantara Sentosa (TNS)
                    </strong>{' '}
                    lahir dari urgensi akan kemitraan konsultan pajak yang tidak hanya paham
                    administrasi formal, melainkan menguasai arsitektur hukum perpajakan substantif.
                  </p>
                  <p>
                    Dinamika perpajakan modern, pemberlakuan regulasi transfer pricing internasional,
                    serta integrasi platform digital nasional Coretax DJP menuntut pendekatan yang
                    teliti dan teruji. Kami bertindak sebagai perisai hukum dan mitra strategis bagi
                    jajaran komisaris, direksi korporasi (PMA &amp; PMDN), serta pemilik modal
                    privat.
                  </p>
                </div>
              </div>

              {/* Bottom Stat Strip inside the card */}
              <div className="grid grid-cols-3 gap-4 pt-6 mt-6 bg-[#1f1f24]/80 border border-[#4d4635]/30 rounded-lg p-4 text-center">
                <div>
                  <span className="block font-['Playfair_Display'] text-[28px] text-[#f2ca50] font-bold tabular-nums">
                    15+
                  </span>
                  <span className="block font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#d0c5af] uppercase mt-1">
                    Tahun Pengalaman
                  </span>
                </div>
                <div>
                  <span className="block font-['Playfair_Display'] text-[28px] text-[#e4c277] font-bold tabular-nums">
                    100%
                  </span>
                  <span className="block font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#d0c5af] uppercase mt-1">
                    Legal Terverifikasi
                  </span>
                </div>
                <div>
                  <span className="block font-['Playfair_Display'] text-[28px] text-[#f2ca50] font-bold">
                    BKP C
                  </span>
                  <span className="block font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#d0c5af] uppercase mt-1">
                    Lisensi Tertinggi
                  </span>
                </div>
              </div>
            </div>

            {/* Three Operational Pillars */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              {/* Pillar 1 */}
              <div className="bg-[#1f1f24] border border-[#4d4635]/30 rounded-xl p-6 shadow-md transition-all hover:bg-[#292a2e] group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5d4604]/50 border border-[#e4c277]/40 flex items-center justify-center shrink-0 text-[#e4c277] group-hover:bg-[#f2ca50] group-hover:text-[#3c2f00] transition-colors">
                    <span className="material-symbols-outlined text-[26px]">balance</span>
                  </div>
                  <div>
                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-widest block mb-1">
                      Pilar I
                    </span>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[17px] text-[#e3e2e8] mb-1">
                      Kehati-hatian Fiskal (Prudence)
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                      Setiap langkah perencanaan dan restrukturisasi dirancang dengan mitigasi
                      risiko pajak nol-eksposur, bersandar mutlak pada peraturan perundang-undangan
                      RI yang berlaku.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-[#1f1f24] border border-[#4d4635]/30 rounded-xl p-6 shadow-md transition-all hover:bg-[#292a2e] group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5d4604]/50 border border-[#e4c277]/40 flex items-center justify-center shrink-0 text-[#e4c277] group-hover:bg-[#f2ca50] group-hover:text-[#3c2f00] transition-colors">
                    <span className="material-symbols-outlined text-[26px]">visibility</span>
                  </div>
                  <div>
                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-widest block mb-1">
                      Pilar II
                    </span>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[17px] text-[#e3e2e8] mb-1">
                      Transparansi Regulasi
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                      Klien mendapatkan pemetaan komprehensif atas setiap celah kepatuhan dan
                      kejelasan posisi hukum sebelum melangkah ke proses deklarasi ataupun audit
                      resmi fiskus.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-[#1f1f24] border border-[#4d4635]/30 rounded-xl p-6 shadow-md transition-all hover:bg-[#292a2e] group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5d4604]/50 border border-[#e4c277]/40 flex items-center justify-center shrink-0 text-[#e4c277] group-hover:bg-[#f2ca50] group-hover:text-[#3c2f00] transition-colors">
                    <span className="material-symbols-outlined text-[26px]">shield</span>
                  </div>
                  <div>
                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-widest block mb-1">
                      Pilar III
                    </span>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[17px] text-[#e3e2e8] mb-1">
                      Perlindungan Aset Berkelanjutan
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                      Penyusunan arsitektur kekayaan keluarga dan perputaran modal korporasi
                      terlindungi dari koreksi retroaktif maupun kerugian akibat sengketa peradilan
                      pajak.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Executive Leadership (Deasy Trianasari, S.E., BKP., Ak.) */}
        <section className="max-w-[1440px] mx-auto px-5 md:px-12 py-16">
          <div className="bg-[#1a1b20] border border-[#4d4635]/40 rounded-2xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Subtle Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f2ca50]/5 via-transparent to-[#0d0e12]/80 pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Portrait with Executive Gold Accent Framing */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-[360px] group">
                  {/* Golden Ambient Backing Aura */}
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-tr from-[#f2ca50]/30 to-[#e4c277]/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Frame Container */}
                  <div className="relative rounded-xl overflow-hidden bg-[#292a2e] border border-[#4d4635] shadow-2xl">
                    <img
                      alt="Deasy Trianasari, S.E., BKP., Ak. - Managing Partner TNS"
                      className="w-full h-auto object-cover aspect-square hover:scale-[1.02] transition-transform duration-700"
                      src="https://lh3.googleusercontent.com/aida/AEtjO1X7UJRr9NNJFdgFXYHrvqVQRDddQbY0TMqchW_VLpSNmwrwfItvNhQIAkuURNPBjyMT2If5FnGY60-kRMKz8sScS3MO539XMc9-k5t84ZPevbwOUZI5g0dVexRbGt-Wx5x5quhkwMn5kzAKexf73NllPMxd5ztdd2r_vXf3xEJZZJxJ6LFe4rNTAaXhI0PYvbpSiJPcqzlrGLHYN30LuBMtD_aAz-I35OJTbpXBgE9Q-apzaS_8j5jOckz5"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent opacity-60" />

                    {/* Bottom Floating Identifier Plate */}
                    <div className="absolute bottom-4 left-4 right-4 bg-[#0d0e12]/90 backdrop-blur-md border border-[#4d4635]/60 rounded p-3 flex items-center justify-between">
                      <div>
                        <span className="block font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#e3e2e8]">
                          Deasy Trianasari
                        </span>
                        <span className="block font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-wider">
                          Managing Partner
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-[#f2ca50] text-[24px]">
                        verified
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f2ca50] animate-ping" />
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#d0c5af] uppercase tracking-widest">
                    Praktek Aktif &amp; Bersertifikasi
                  </span>
                </div>
              </div>

              {/* Executive Credentials & Proven Track Record */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="inline-flex items-center gap-1.5 font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase text-[#e4c277] tracking-widest mb-1">
                  <span className="material-symbols-outlined text-[16px] text-[#f2ca50]">
                    military_tech
                  </span>
                  <span>Profil Pimpinan Firma</span>
                </div>

                <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold text-[#e3e2e8] mb-1">
                  Deasy Trianasari, <span className="text-[#e4c277] text-[24px]">S.E., BKP., Ak.</span>
                </h2>

                <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#f2ca50] font-semibold mb-4">
                  Managing Partner &amp; Senior Tax Attorney
                </p>

                {/* Personal Leadership Quote */}
                <div className="bg-[#1f1f24] border-l-4 border-[#f2ca50] p-4 rounded-r-xl mb-6 relative">
                  <span className="material-symbols-outlined text-[#f2ca50]/20 text-[48px] absolute right-3 bottom-2 pointer-events-none">
                    format_quote
                  </span>
                  <p className="font-['Playfair_Display'] text-[18px] md:text-[20px] italic text-[#e3e2e8] leading-relaxed">
                    &ldquo;Kekuatan utama kami adalah ketenangan pikiran para pimpinan bisnis saat
                    audit pajak tiba.&rdquo;
                  </p>
                </div>

                {/* Credentials List */}
                <div className="space-y-3 mb-6">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-wider">
                    Kredensial &amp; Sertifikasi Resmi:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Credential 1 */}
                    <div className="flex items-start gap-2.5 p-3 rounded bg-[#1f1f24] border border-[#4d4635]/30">
                      <span className="material-symbols-outlined text-[#f2ca50] shrink-0 text-[20px] mt-0.5">
                        workspace_premium
                      </span>
                      <div>
                        <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] text-[#e3e2e8] block">
                          Brevet BKP Tingkat C
                        </span>
                        <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                          Lisensi tertinggi: Wajib Pajak Badan, Korporasi Multinasional &amp; PMA
                        </span>
                      </div>
                    </div>

                    {/* Credential 2 */}
                    <div className="flex items-start gap-2.5 p-3 rounded bg-[#1f1f24] border border-[#4d4635]/30">
                      <span className="material-symbols-outlined text-[#f2ca50] shrink-0 text-[20px] mt-0.5">
                        gavel
                      </span>
                      <div>
                        <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] text-[#e3e2e8] block">
                          Kuasa Hukum Pengadilan Pajak RI
                        </span>
                        <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                          Izin Resmi Kemenkeu &amp; Terdaftar Mahkamah Agung
                        </span>
                      </div>
                    </div>

                    {/* Credential 3 */}
                    <div className="flex items-start gap-2.5 p-3 rounded bg-[#1f1f24] border border-[#4d4635]/30">
                      <span className="material-symbols-outlined text-[#f2ca50] shrink-0 text-[20px] mt-0.5">
                        account_balance
                      </span>
                      <div>
                        <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] text-[#e3e2e8] block">
                          Anggota Aktif IKPI
                        </span>
                        <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                          Ikatan Konsultan Pajak Indonesia - Kepatuhan Kode Etik Terpelihara
                        </span>
                      </div>
                    </div>

                    {/* Credential 4 */}
                    <div className="flex items-start gap-2.5 p-3 rounded bg-[#1f1f24] border border-[#4d4635]/30">
                      <span className="material-symbols-outlined text-[#f2ca50] shrink-0 text-[20px] mt-0.5">
                        verified_user
                      </span>
                      <div>
                        <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] text-[#e3e2e8] block">
                          Akuntan Teregistrasi Negara (Ak.)
                        </span>
                        <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                          Sarjana Ekonomi (S.E.) - Analisis Audit Finansial Mendalam
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Jam Terbang / Track Record Text */}
                <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#d0c5af] leading-relaxed">
                  Memiliki jam terbang lebih dari <strong className="text-[#e3e2e8]">15 tahun</strong>{' '}
                  memimpin penyelesaian sengketa pajak ratusan miliar rupiah, pendampingan
                  pemeriksaan Transfer Pricing lintas yurisdiksi, restrukturisasi korporasi merger
                  &amp; akuisisi, hingga litigasi banding dan peninjauan kembali di Pengadilan Pajak
                  RI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Vision, Mission & Core Values */}
        <section className="max-w-[1440px] mx-auto px-5 md:px-12 py-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-widest block mb-1">
              Kompas Strategis
            </span>
            <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold text-[#e3e2e8]">
              Visi, Misi &amp; Nilai Perusahaan
            </h2>
            <div className="w-16 h-[2px] bg-[#f2ca50] mx-auto mt-4" />
          </div>

          {/* Vision Box */}
          <div className="bg-[#292a2e] border border-[#4d4635]/40 rounded-xl p-6 md:p-10 mb-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f2ca50]/10 to-transparent pointer-events-none" />
            <div className="max-w-4xl relative z-10">
              <span className="inline-block px-3 py-1 bg-[#0d0e12] text-[#f2ca50] rounded font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider mb-3">
                Visi Firma
              </span>
              <h3 className="font-['Playfair_Display'] text-[22px] md:text-[28px] font-semibold text-[#e3e2e8] leading-snug">
                Menjadi firma konsultan pajak dan keuangan terdepan di Indonesia yang dikenal atas
                integritas mutlak, kepatuhan regulasi terpercaya, dan perlindungan kepentingan klien
                secara legal &amp; etis.
              </h3>
            </div>
          </div>

          {/* Mission & Core Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Misi (Left 6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[18px] text-[#e3e2e8] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#f2ca50]">target</span>
                <span>Misi Operasional</span>
              </h3>
              <div className="space-y-3">
                <div className="bg-[#1f1f24] border border-[#4d4635]/30 rounded-lg p-4 flex gap-4 items-start">
                  <span className="font-['Playfair_Display'] text-[24px] text-[#f2ca50] font-bold">
                    01
                  </span>
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#e3e2e8] mb-1">
                      Pendampingan Fiskal Strategis
                    </h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                      Memberikan bimbingan kepatuhan perpajakan menyeluruh yang senantiasa taat asas
                      hukum perpajakan nasional tanpa kompromi.
                    </p>
                  </div>
                </div>

                <div className="bg-[#1f1f24] border border-[#4d4635]/30 rounded-lg p-4 flex gap-4 items-start">
                  <span className="font-['Playfair_Display'] text-[24px] text-[#f2ca50] font-bold">
                    02
                  </span>
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#e3e2e8] mb-1">
                      Ketahanan Arus Kas &amp; Efisiensi Legal
                    </h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                      Menjaga kelangsungan likuiditas korporasi melalui penataan rencana pajak legal
                      (tax planning) yang rasional dan terukur.
                    </p>
                  </div>
                </div>

                <div className="bg-[#1f1f24] border border-[#4d4635]/30 rounded-lg p-4 flex gap-4 items-start">
                  <span className="font-['Playfair_Display'] text-[24px] text-[#f2ca50] font-bold">
                    03
                  </span>
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#e3e2e8] mb-1">
                      Transisi Digitalisasi Coretax DJP
                    </h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                      Mengedukasi, melatih, dan mendampingi entitas bisnis menghadapi sistem
                      administrasi perpajakan terpadu nasional generasi terbaru.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values (Right 6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[18px] text-[#e3e2e8] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#e4c277]">diamond</span>
                <span>Nilai Kehormatan (Core Values)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Value 1 */}
                <div className="bg-[#1f1f24] border border-[#4d4635]/30 rounded-lg p-4 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded bg-[#292a2e] text-[#f2ca50] flex items-center justify-center mb-3">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-[#e3e2e8] mb-1">
                      Integrity (Integritas)
                    </h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] leading-relaxed">
                      Kejujuran tanpa syarat dalam menganalisis data, memberikan advis, serta
                      menyampaikan posisi fiskal riil kepada klien.
                    </p>
                  </div>
                </div>

                {/* Value 2 */}
                <div className="bg-[#1f1f24] border border-[#4d4635]/30 rounded-lg p-4 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded bg-[#292a2e] text-[#f2ca50] flex items-center justify-center mb-3">
                      <span className="material-symbols-outlined text-[20px]">architecture</span>
                    </div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-[#e3e2e8] mb-1">
                      Precision (Presisi)
                    </h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] leading-relaxed">
                      Akurasi matematis dan kecermatan analitis pasal per pasal dalam penyusunan
                      laporan serta pembelaan peradilan.
                    </p>
                  </div>
                </div>

                {/* Value 3 */}
                <div className="bg-[#1f1f24] border border-[#4d4635]/30 rounded-lg p-4 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded bg-[#292a2e] text-[#f2ca50] flex items-center justify-center mb-3">
                      <span className="material-symbols-outlined text-[20px]">lock</span>
                    </div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-[#e3e2e8] mb-1">
                      Confidentiality (Kerahasiaan)
                    </h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] leading-relaxed">
                      Protokol keamanan data perbankan tingkat tinggi menjamin seluruh laporan
                      finansial klien terjaga rapat.
                    </p>
                  </div>
                </div>

                {/* Value 4 */}
                <div className="bg-[#1f1f24] border border-[#4d4635]/30 rounded-lg p-4 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded bg-[#292a2e] text-[#f2ca50] flex items-center justify-center mb-3">
                      <span className="material-symbols-outlined text-[20px]">gavel</span>
                    </div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-[#e3e2e8] mb-1">
                      Advocacy (Advokasi Tegas)
                    </h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] leading-relaxed">
                      Keberanian memperjuangkan hak hukum wajib pajak di hadapan otoritas pemeriksa
                      maupun majelis hakim peradilan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Legalitas & Izin Praktik Resmi */}
        <section className="max-w-[1440px] mx-auto px-5 md:px-12 py-10">
          <div className="bg-[#0d0e12] border border-[#4d4635]/40 rounded-2xl p-6 md:p-10 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-widest block mb-1">
                  Legalitas Resmi
                </span>
                <h2 className="font-['Playfair_Display'] text-[24px] md:text-[30px] font-semibold text-[#e3e2e8]">
                  Otoritas Hukum &amp; Akreditasi Nasional
                </h2>
              </div>
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] max-w-md">
                Seluruh advokasi dan jasa perpajakan yang dijalankan oleh PT. Terang Nusantara
                Sentosa berlandaskan izin operasional dan ketetapan resmi kementerian Republik
                Indonesia.
              </p>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Legal Card 1 */}
              <div className="bg-[#1a1b20] border border-[#4d4635]/30 rounded-xl p-5 flex flex-col justify-between group hover:border-[#d4af37]/60 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="material-symbols-outlined text-[#f2ca50] text-[32px]">
                      apartment
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#1f1f24] text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold">
                      DJP - KEMENKEU
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-[#e3e2e8] mb-1">
                    Izin Praktik Konsultan Pajak
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] mb-4 leading-relaxed">
                    Surat Izin Resmi dari Direktorat Jenderal Pajak Kementerian Keuangan RI untuk
                    berpraktik di seluruh yurisdiksi Indonesia.
                  </p>
                </div>
                <div className="pt-3 bg-[#1f1f24]/50 -mx-5 -mb-5 p-4 rounded-b-xl flex items-center gap-1.5 text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Terdaftar &amp; Aktif</span>
                </div>
              </div>

              {/* Legal Card 2 */}
              <div className="bg-[#1a1b20] border border-[#4d4635]/30 rounded-xl p-5 flex flex-col justify-between group hover:border-[#d4af37]/60 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="material-symbols-outlined text-[#f2ca50] text-[32px]">
                      gavel
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#1f1f24] text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold">
                      PERADILAN
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-[#e3e2e8] mb-1">
                    Kuasa Hukum Pengadilan Pajak
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] mb-4 leading-relaxed">
                    Lisensi resmi pendampingan sengketa, keberatan, banding, hingga gugatan di
                    Pengadilan Pajak dan Peninjauan Kembali (PK).
                  </p>
                </div>
                <div className="pt-3 bg-[#1f1f24]/50 -mx-5 -mb-5 p-4 rounded-b-xl flex items-center gap-1.5 text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Berizin Mahkamah Agung</span>
                </div>
              </div>

              {/* Legal Card 3 */}
              <div className="bg-[#1a1b20] border border-[#4d4635]/30 rounded-xl p-5 flex flex-col justify-between group hover:border-[#d4af37]/60 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="material-symbols-outlined text-[#f2ca50] text-[32px]">
                      shield_person
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#1f1f24] text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold">
                      KEMENKUMHAM RI
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-[#e3e2e8] mb-1">
                    SK Pengesahan Badan Hukum
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] mb-4 leading-relaxed">
                    Akta Pendirian Notaris &amp; Keputusan Menteri Hukum dan HAM RI atas pendirian
                    perseroan terbatas PT. Terang Nusantara Sentosa.
                  </p>
                </div>
                <div className="pt-3 bg-[#1f1f24]/50 -mx-5 -mb-5 p-4 rounded-b-xl flex items-center gap-1.5 text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Entitas Terdaftar</span>
                </div>
              </div>

              {/* Legal Card 4 */}
              <div className="bg-[#1a1b20] border border-[#4d4635]/30 rounded-xl p-5 flex flex-col justify-between group hover:border-[#d4af37]/60 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="material-symbols-outlined text-[#f2ca50] text-[32px]">
                      badge
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#1f1f24] text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold">
                      OSS &amp; NPWP
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-[#e3e2e8] mb-1">
                    Nomor Induk Berusaha (NIB)
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af] mb-4 leading-relaxed">
                    KBLI Aktivitas Konsultasi Pajak, Akuntansi &amp; Keuangan lengkap dengan NPWP
                    Badan yang tertib memenuhi kewajiban fiskal.
                  </p>
                </div>
                <div className="pt-3 bg-[#1f1f24]/50 -mx-5 -mb-5 p-4 rounded-b-xl flex items-center gap-1.5 text-[#e4c277] font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Legalitas Utuh</span>
                </div>
              </div>
            </div>

            {/* Compliance Seal Banner */}
            <div className="mt-8 bg-[#1f1f24] border border-[#4d4635]/30 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#e4c277] text-[36px]">
                  policy
                </span>
                <div>
                  <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#e3e2e8] block">
                    Kepatuhan Kode Etik Profesi
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-[#d0c5af]">
                    Tunduk pada Kode Etik Konsultan Pajak Indonesia dan Standar Profesional Akuntan
                    Publik.
                  </span>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded bg-[#292a2e] text-[#f2ca50] font-['Plus_Jakarta_Sans'] text-[13px] font-bold">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>100% REGULATORY ASSURANCE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Executive CTA Bar */}
        <section className="max-w-[1440px] mx-auto px-5 md:px-12 pt-6 pb-20">
          <div className="relative rounded-2xl bg-gradient-to-r from-[#5d4604]/40 via-[#292a2e] to-[#0d0e12] border border-[#4d4635] p-8 md:p-12 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#f2ca50]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl relative z-10 text-center lg:text-left">
              <span className="inline-flex items-center gap-1 font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] uppercase tracking-widest mb-2">
                <span className="material-symbols-outlined text-[16px]">forum</span>
                <span>Konsultasi Eksekutif Tertutup</span>
              </span>
              <h2 className="font-['Playfair_Display'] text-[24px] md:text-[30px] text-[#e3e2e8] font-semibold mb-2">
                Ingin berdiskusi langsung dengan Deasy Trianasari?
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#d0c5af] leading-relaxed">
                Jadwalkan sesi audit pra-pemeriksaan, review SPT Tahunan Korporasi, atau penelaahan
                sengketa banding bersama Managing Partner kami secara konfidensial.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#0d0e12] border border-[#4d4635] text-[#e3e2e8] hover:text-[#f2ca50] transition-all font-['Plus_Jakarta_Sans'] text-[13px] font-semibold shadow-md"
                href="https://wa.me/6287817582369?text=Halo%20Bu%20Deasy,%20kami%20ingin%20mengagendakan%20diskusi%20fiskal%20eksekutif%20bersama%20Anda."
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px] text-[#f2ca50]">chat</span>
                <span>WhatsApp Executive</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-[#d4af37] text-[#554300] font-['Plus_Jakarta_Sans'] text-[13px] font-bold uppercase tracking-wider hover:bg-[#f2ca50] transition-all shadow-[0_0_24px_rgba(212,175,55,0.35)] cursor-pointer"
              >
                <span>Hubungi Kantor Kami</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
