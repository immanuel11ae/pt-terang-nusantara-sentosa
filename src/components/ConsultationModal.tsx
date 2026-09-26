import React, { useState } from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService || 'perencanaan-pajak');
  const [notes, setNotes] = useState('');
  const [ndaConsent, setNdaConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Halo PT. Terang Nusantara Sentosa, saya ${fullName || 'Pimpinan Korporasi'} dari ${companyName || 'Perusahaan'}. Kami membutuhkan advis konsultasi terkait ${service}. Mohon informasi jadwal temu/diskusi rahasia.`
    );
    window.open(`https://wa.me/6287817582369?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1a1b20] border border-[#4d4635] rounded-xl shadow-2xl p-6 md:p-8 text-[#e3e2e8]">
        {/* Top gold bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#d4af37]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#d0c5af] hover:text-[#f2ca50] p-1.5 rounded-lg bg-[#1f1f24] hover:bg-[#292a2e] transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#5d4604]/50 border border-[#f2ca50] flex items-center justify-center text-[#f2ca50]">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>
            <h3 className="font-['Playfair_Display'] text-[24px] font-semibold text-[#e3e2e8]">
              Permohonan Advis Berhasil Terkirim
            </h3>
            <p className="text-[14px] text-[#d0c5af] max-w-md mx-auto leading-relaxed">
              Terima kasih <strong className="text-[#f2ca50]">{fullName}</strong>. Data Anda telah
              kami daftarkan dengan proteksi Non-Disclosure Agreement (NDA). Partner senior PT. Terang
              Nusantara Sentosa akan segera menghubungi Anda melalui nomor telepon / WhatsApp yang
              diberikan.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#d4af37] text-[#554300] font-bold text-[14px] uppercase tracking-wider hover:bg-[#f2ca50] transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Lanjutkan ke WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded bg-[#292a2e] text-[#e3e2e8] hover:text-[#f2ca50] font-semibold text-[14px] transition-colors"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#292a2e] text-[#e4c277] text-[11px] font-bold tracking-wider uppercase">
                <span className="material-symbols-outlined text-[14px] text-[#f2ca50]">lock</span>
                <span>Kerahasiaan Tingkat Tinggi Terjamin (NDA)</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-[24px] md:text-[28px] font-semibold text-[#e3e2e8]">
                Jadwalkan Konsultasi Rahasia
              </h3>
              <p className="text-[13px] text-[#d0c5af] leading-relaxed">
                Diskusikan mitigasi audit, SP2DK, restrukturisasi keuangan, maupun transfer pricing
                bersama Dewan Konsultan Berizin BKP C.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-[14px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[13px] font-semibold text-[#e3e2e8]">
                    Nama Lengkap &amp; Gelar <span className="text-[#f2ca50]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="misal: Hendra Wijaya, S.E."
                    className="w-full bg-[#121317] border border-[#4d4635]/60 rounded px-3 py-2.5 text-[#e3e2e8] placeholder-[#99907c] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[13px] font-semibold text-[#e3e2e8]">
                    Nama Perusahaan / Korporat <span className="text-[#f2ca50]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="misal: PT Cahaya Mega Global"
                    className="w-full bg-[#121317] border border-[#4d4635]/60 rounded px-3 py-2.5 text-[#e3e2e8] placeholder-[#99907c] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[13px] font-semibold text-[#e3e2e8]">
                    Email Resmi Perusahaan <span className="text-[#f2ca50]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="direksi@company.co.id"
                    className="w-full bg-[#121317] border border-[#4d4635]/60 rounded px-3 py-2.5 text-[#e3e2e8] placeholder-[#99907c] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[13px] font-semibold text-[#e3e2e8]">
                    Nomor WhatsApp Aktif <span className="text-[#f2ca50]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+62 812-xxxx-xxxx"
                    className="w-full bg-[#121317] border border-[#4d4635]/60 rounded px-3 py-2.5 text-[#e3e2e8] placeholder-[#99907c] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[13px] font-semibold text-[#e3e2e8]">
                  Kebutuhan Layanan Spesifik <span className="text-[#f2ca50]">*</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#121317] border border-[#4d4635]/60 rounded px-3 py-2.5 text-[#e3e2e8] focus:outline-none focus:border-[#d4af37] cursor-pointer"
                >
                  <option value="perencanaan-pajak">
                    Konsultasi &amp; Perencanaan Pajak (Tax Planning)
                  </option>
                  <option value="pelaporan-spt-coretax">
                    Pelaporan SPT Masa &amp; Tahunan (Kesiapan Coretax DJP)
                  </option>
                  <option value="pemeriksaan-sp2dk">
                    Pendampingan Pemeriksaan SP2DK / Tanggapan SPHP
                  </option>
                  <option value="restitusi-korporasi">
                    Restitusi Pajak Ekspor &amp; Korporasi (PPN / PPh Badan)
                  </option>
                  <option value="keberatan-banding-pengadilan">
                    Keberatan, Banding, &amp; Kuasa Hukum Pengadilan Pajak
                  </option>
                  <option value="due-diligence-ma">
                    Tax Due Diligence &amp; Restrukturisasi Merger / Akuisisi
                  </option>
                  <option value="transfer-pricing">
                    Transfer Pricing Documentation (TP Doc PMK 172/2023)
                  </option>
                  <option value="pajak-internasional">
                    Konsultasi Pajak Internasional &amp; Tax Treaty P3B
                  </option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[13px] font-semibold text-[#e3e2e8]">
                  Ringkasan Kebutuhan / Perkara Pajak
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ceritakan latar belakang, potensi eksposur pajak, atau batas waktu surat DJP jika ada..."
                  className="w-full bg-[#121317] border border-[#4d4635]/60 rounded p-3 text-[#e3e2e8] placeholder-[#99907c] focus:outline-none focus:border-[#d4af37] resize-none"
                />
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded bg-[#1f1f24] text-[12px] text-[#d0c5af]">
                <input
                  type="checkbox"
                  id="modalNda"
                  checked={ndaConsent}
                  onChange={(e) => setNdaConsent(e.target.checked)}
                  required
                  className="mt-0.5 w-4 h-4 rounded text-[#d4af37] accent-[#d4af37] cursor-pointer"
                />
                <label htmlFor="modalNda" className="cursor-pointer leading-relaxed">
                  Saya menyetujui bahwa informasi ini dikirimkan kepada tim PT. Terang Nusantara
                  Sentosa dengan perlindungan kerahasiaan penuh di bawah etika Ikatan Konsultan Pajak
                  Indonesia (IKPI).
                </label>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 rounded bg-[#d4af37] hover:bg-[#f2ca50] text-[#554300] font-bold text-[14px] uppercase tracking-wider transition-all shadow-[0_0_16px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Mengirim Permohonan...</span>
                  ) : (
                    <>
                      <span>Kirimkan Permohonan</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-4 py-3 rounded bg-[#292a2e] hover:bg-[#343439] text-[#e3e2e8] hover:text-[#f2ca50] text-[13px] font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">chat</span>
                  <span>WhatsApp Instan</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
