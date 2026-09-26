import React from 'react';
import { PagePath } from '../types';

interface FooterProps {
  onNavigate: (page: PagePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: PagePath, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0d0e12] border-t border-[#4d4635]/40 text-[#d0c5af]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mb-16">
          {/* Column 1: Brand & Credibility Badges */}
          <div className="flex flex-col gap-4">
            <img
              alt="Logo Kartu Nama TNS"
              className="h-12 w-auto object-contain self-start"
              src="https://lh3.googleusercontent.com/aida/AEtjO1XbmJrkFyqCRguYZ-ibBXUum6dLDln6lAO2xIUPcjU7dFhpA88_BU3XX9AkpTpBRa_Z50zxJ8IUOfLjjyZE43jtEHzXVmSQqWt3wAtsXLf7L4GZ-qD7bSBeKxlM3bqbVMJeqyQJKlUt0euSQCM0WfEya3yPNrwJGTY9lX4MTtAK_ESGEJ5jtmePll8uI2BgzwqdLfB_00HSk9bjlv2EdoCOjMcxCgNp_Lj17ygZmbQhqIn6DWCAFB0qvrM"
            />
            <div className="flex flex-col gap-1">
              <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#e3e2e8] uppercase">
                PT. Terang Nusantara Sentosa
              </h4>
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#d0c5af] leading-relaxed">
                Konsultan Pajak &amp; Tata Kelola Finansial Terpercaya. Memberikan kepastian
                kepatuhan fiskal, advokasi legalitas pajak, dan penataan struktur finansial
                korporasi serta high-net-worth individuals dengan integritas prima.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#1f1f24] border border-[#4d4635]/60 font-['Plus_Jakarta_Sans'] text-[11px] font-bold tracking-[0.08em] uppercase text-[#e4c277]">
                BKP Tingkat C
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#1f1f24] border border-[#4d4635]/60 font-['Plus_Jakarta_Sans'] text-[11px] font-bold tracking-[0.08em] uppercase text-[#e4c277]">
                IKPI Terdaftar
              </span>
            </div>
          </div>

          {/* Column 2: Navigasi Cepat */}
          <div className="flex flex-col gap-4">
            <h5 className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider text-[#e4c277] border-b border-[#4d4635]/30 pb-2">
              Navigasi Cepat
            </h5>
            <ul className="flex flex-col gap-2 text-[13px]">
              <li>
                <button
                  onClick={(e) => handleNav('beranda', e)}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav('tentang-kami', e)}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav('layanan', e)}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left"
                >
                  Layanan &amp; Solusi
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav('klien-testimoni', e)}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left"
                >
                  Klien &amp; Testimoni
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav('kontak', e)}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left"
                >
                  Hubungi Kantor Kami
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Layanan Unggulan */}
          <div className="flex flex-col gap-4">
            <h5 className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider text-[#e4c277] border-b border-[#4d4635]/30 pb-2">
              Layanan Unggulan
            </h5>
            <ul className="flex flex-col gap-2 text-[13px]">
              <li>
                <button
                  onClick={(e) => handleNav('layanan', e)}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left"
                >
                  Konsultasi &amp; Perencanaan Pajak
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav('layanan', e)}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left"
                >
                  Pelaporan SPT Masa &amp; Tahunan
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav('layanan', e)}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left"
                >
                  Pendampingan Pemeriksaan Pajak
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav('layanan', e)}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left"
                >
                  Restitusi Pajak Korporasi
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav('layanan', e)}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left"
                >
                  Transfer Pricing Documentation (TP Doc)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Kantor & Kontak */}
          <div className="flex flex-col gap-4">
            <h5 className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider text-[#e4c277] border-b border-[#4d4635]/30 pb-2">
              Kantor &amp; Kontak
            </h5>
            <div className="flex flex-col gap-3 text-[13px]">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#f2ca50] shrink-0 mt-0.5">
                  location_on
                </span>
                <span className="leading-relaxed">
                  Ruko Mutiara Garuda Blok C12 No. 4B, Kampung Melayu Timur, Teluknaga, Kab.
                  Tangerang, Banten 15510
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#f2ca50] shrink-0">
                  phone
                </span>
                <span>
                  Telp / WA:{' '}
                  <a
                    className="text-[#e3e2e8] hover:text-[#f2ca50] transition-colors font-semibold tabular-nums"
                    href="https://wa.me/6287817582369"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +62 878-1758-2369
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#f2ca50] shrink-0">
                  mail
                </span>
                <span>
                  Email:{' '}
                  <a
                    className="text-[#e3e2e8] hover:text-[#f2ca50] transition-colors"
                    href="mailto:deasy@tnsconsulting.co.id"
                  >
                    deasy@tnsconsulting.co.id
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#f2ca50] shrink-0">
                  schedule
                </span>
                <span>Jam Kerja: Senin - Jumat 08:30 - 17:30 WIB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#4d4635]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[12px]">
          <div className="flex flex-col gap-1">
            <p className="text-[#d0c5af]">
              &copy; 2026 PT. Terang Nusantara Sentosa. All rights reserved.
            </p>
            <p className="text-[#d0c5af]/80">
              By{' '}
              <a
                className="text-[#e3e2e8] hover:text-[#f2ca50] underline underline-offset-4 transition-colors font-medium"
                href="https://immcreates.my.id"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://immcreates.my.id
              </a>
            </p>
          </div>
          <p className="text-[#d0c5af]/70 max-w-xl text-center md:text-right">
            Informasi dan konsultasi yang disajikan tunduk pada ketentuan hukum perpajakan Republik
            Indonesia yang berlaku dan standar kode etik Ikatan Konsultan Pajak Indonesia (IKPI).
          </p>
        </div>
      </div>
    </footer>
  );
};
