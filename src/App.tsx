import React, { useState, useEffect } from 'react';
import { PagePath } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ClientsPage } from './pages/ClientsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PagePath>('beranda');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationDefaultService, setConsultationDefaultService] = useState<string | undefined>(undefined);

  // Handle URL hash navigation if user refreshes or shares URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PagePath;
      const validPages: PagePath[] = ['beranda', 'tentang-kami', 'layanan', 'klien-testimoni', 'kontak'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PagePath, serviceDefault?: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (serviceDefault) {
      setConsultationDefaultService(serviceDefault);
    }
  };

  const handleOpenConsultation = (serviceName?: string) => {
    setConsultationDefaultService(serviceName);
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#121317] text-[#e3e2e8] flex flex-col selection:bg-[#f6a000] selection:text-[#121317]">
      {/* Top Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {currentPage === 'beranda' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentPage === 'tentang-kami' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentPage === 'layanan' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentPage === 'klien-testimoni' && (
          <ClientsPage
            onNavigate={navigateTo}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentPage === 'kontak' && (
          <ContactPage
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Consultation Modal Dialog */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        defaultService={consultationDefaultService}
      />
    </div>
  );
}
