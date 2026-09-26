import React, { useState } from 'react';
import { PagePath } from '../types';

interface HeaderProps {
  currentPage: PagePath;
  onNavigate: (page: PagePath) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; path: PagePath }[] = [
    { label: 'Beranda', path: 'beranda' },
    { label: 'Tentang Kami', path: 'tentang-kami' },
    { label: 'Layanan', path: 'layanan' },
    { label: 'Klien & Testimoni', path: 'klien-testimoni' },
    { label: 'Kontak', path: 'kontak' },
  ];

  const handleNavClick = (path: PagePath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0e12]/90 backdrop-blur-md border-b border-[#4d4635]/40 transition-colors">
      <div className="h-20 max-w-[1440px] mx-auto px-5 md:px-12 flex items-center justify-between gap-6">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('beranda')}
          className="flex items-center gap-4 shrink-0 text-left cursor-pointer focus:outline-none"
        >
          <img
            alt="Logo PT. Terang Nusantara Sentosa"
            className="h-12 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1XbmJrkFyqCRguYZ-ibBXUum6dLDln6lAO2xIUPcjU7dFhpA88_BU3XX9AkpTpBRa_Z50zxJ8IUOfLjjyZE43jtEHzXVmSQqWt3wAtsXLf7L4GZ-qD7bSBeKxlM3bqbVMJeqyQJKlUt0euSQCM0WfEya3yPNrwJGTY9lX4MTtAK_ESGEJ5jtmePll8uI2BgzwqdLfB_00HSk9bjlv2EdoCOjMcxCgNp_Lj17ygZmbQhqIn6DWCAFB0qvrM"
          />
          <div className="flex flex-col">
            <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] sm:text-[16px] tracking-tight text-[#e3e2e8] uppercase">
              PT. Terang Nusantara Sentosa
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e4c277] tracking-[0.08em] uppercase">
              Tax, Management &amp; Finance Advisory
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = currentPage === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`py-1 cursor-pointer transition-colors text-[14px] font-semibold ${
                  isActive
                    ? 'text-[#f2ca50] border-b-2 border-[#f2ca50]'
                    : 'text-[#d0c5af] hover:text-[#e3e2e8]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Quick Call / WhatsApp */}
          <a
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1a1b20] border border-[#4d4635]/60 hover:border-[#d4af37] text-[#e3e2e8] hover:text-[#f2ca50] transition-all"
            href="https://wa.me/6287817582369?text=Halo%20PT.%20Terang%20Nusantara%20Sentosa,%20saya%20ingin%20berkonsultasi%20terkait%20perpajakan%20korporasi."
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px] text-[#f2ca50]">call</span>
            <span className="font-['Plus_Jakarta_Sans'] text-[14px] font-semibold tabular-nums">
              +62 878-1758-2369
            </span>
          </a>

          {/* Hubungi Kami Button */}
          <button
            onClick={() => handleNavClick('kontak')}
            className="inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#d4af37] text-[#554300] font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] font-bold tracking-wide hover:bg-[#f2ca50] transition-all shadow-[0_0_16px_rgba(212,175,55,0.2)] cursor-pointer"
          >
            <span className="uppercase tracking-wider">Hubungi Kami</span>
          </button>

          {/* Institutional User Profile Indicator / Modal Trigger */}
          <button
            onClick={onOpenConsultation}
            title="Akses Konsultasi Terbimbing"
            className="w-8 h-8 rounded-full bg-[#f2ca50] flex items-center justify-center shrink-0 cursor-pointer hover:scale-105 transition-transform"
          >
            <span className="material-symbols-outlined text-[#3c2f00] text-[18px]">person</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded text-[#e3e2e8] hover:text-[#f2ca50] hover:bg-[#1f1f24] transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0d0e12]/98 border-b border-[#4d4635]/60 px-5 py-4 space-y-2 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left px-3 py-2.5 rounded text-[15px] font-medium transition-colors ${
                    isActive
                      ? 'bg-[#1f1f24] text-[#f2ca50] font-semibold border-l-2 border-[#f2ca50]'
                      : 'text-[#d0c5af] hover:text-[#e3e2e8] hover:bg-[#1a1b20]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#4d4635]/30 flex flex-col gap-2">
            <a
              href="https://wa.me/6287817582369"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#1a1b20] border border-[#4d4635] text-[#e3e2e8] hover:text-[#f2ca50] text-[14px] font-semibold"
            >
              <span className="material-symbols-outlined text-[18px] text-[#f2ca50]">call</span>
              <span>+62 878-1758-2369 (WhatsApp)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 rounded bg-[#d4af37] text-[#554300] font-bold text-[14px] uppercase tracking-wider"
            >
              Jadwalkan Konsultasi Rahasia
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
