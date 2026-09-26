import React, { useState } from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex flex-col bg-[#1f1f24] border border-[#4d4635] text-[#e3e2e8] p-3 rounded-lg shadow-xl text-[12px] max-w-[200px] animate-in fade-in slide-in-from-right-2 duration-150">
          <span className="font-semibold text-[#f2ca50]">Hotline Prioritas TNS</span>
          <span className="text-[#d0c5af]">Konsultasi langsung bersama tim fiskal via WhatsApp</span>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/6287817582369?text=Halo%20PT.%20Terang%20Nusantara%20Sentosa,%20saya%20ingin%20berkonsultasi%20mengenai%20masalah%20perpajakan%20perusahaan."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-13 h-13 rounded-full bg-[#d4af37] hover:bg-[#f2ca50] text-[#554300] flex items-center justify-center shadow-[0_4px_24px_rgba(212,175,55,0.4)] hover:scale-108 transition-all group"
        aria-label="Hubungi Konsultan via WhatsApp"
      >
        <span className="material-symbols-outlined text-[28px] group-hover:rotate-12 transition-transform">
          chat
        </span>
      </a>
    </div>
  );
};
