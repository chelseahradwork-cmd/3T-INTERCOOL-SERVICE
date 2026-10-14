/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CompanyInfo, ServiceItem, QuotationRequest, ServiceCategory } from './types';
import { 
  getCompanyInfo, 
  getServices, 
  getQuotations 
} from './services/storage';

import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { GallerySection } from './components/GallerySection';
import { ClientTestimonialsSection } from './components/ClientTestimonialsSection';
import { ProcessSection } from './components/ProcessSection';
import { QuoteSection } from './components/QuoteSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuickContactFloating } from './components/QuickContactFloating';
import { AdminModal } from './components/AdminModal';

export default function App() {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(getCompanyInfo());
  const [services, setServices] = useState<ServiceItem[]>(getServices());
  const [quotations, setQuotations] = useState<QuotationRequest[]>(getQuotations());
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState<ServiceCategory>('AIR_CONDITIONING');

  useEffect(() => {
    // Initial fetch
    setCompanyInfo(getCompanyInfo());
    setServices(getServices());
    setQuotations(getQuotations());

    // Event listeners for seamless real-time syncing
    const handleCompanyUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<CompanyInfo>;
      if (customEvent.detail) setCompanyInfo(customEvent.detail);
    };

    const handleServicesUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<ServiceItem[]>;
      if (customEvent.detail) setServices(customEvent.detail);
    };

    const handleQuotesUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<QuotationRequest[]>;
      if (customEvent.detail) setQuotations(customEvent.detail);
    };

    window.addEventListener('3t_company_updated', handleCompanyUpdate);
    window.addEventListener('3t_services_updated', handleServicesUpdate);
    window.addEventListener('3t_quotations_updated', handleQuotesUpdate);

    return () => {
      window.removeEventListener('3t_company_updated', handleCompanyUpdate);
      window.removeEventListener('3t_services_updated', handleServicesUpdate);
      window.removeEventListener('3t_quotations_updated', handleQuotesUpdate);
    };
  }, []);

  const handleSelectServiceForQuote = (category: ServiceCategory) => {
    setQuoteCategory(category);
    const calculatorEl = document.getElementById('calculator');
    if (calculatorEl) {
      calculatorEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToQuote = () => {
    const calculatorEl = document.getElementById('calculator');
    if (calculatorEl) {
      calculatorEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans antialiased selection:bg-sky-500 selection:text-white">
      {/* Top Urgent Announcement Banner */}
      <AnnouncementBar 
        announcement={companyInfo.announcement} 
        phone={companyInfo.phone} 
      />

      {/* Main Navbar with 3-Lines Hamburger Menu */}
      <Navbar 
        companyInfo={companyInfo}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onNavigateToQuote={handleNavigateToQuote}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero 
          companyInfo={companyInfo}
          onRequestQuote={handleNavigateToQuote}
          onExploreServices={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. เกี่ยวกับบริษัท (ABOUT US) - From Slide 1 */}
        <AboutSection onNavigateToQuote={handleNavigateToQuote} />

        {/* 3. ขอบเขตบริการหลัก (OUR SERVICES) - From Slide 2 */}
        <ServicesSection 
          services={services}
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* 4. ทำไมต้องเลือกเรา (WHY CHOOSE US) - From Slide 3 */}
        <WhyChooseUsSection onNavigateToQuote={handleNavigateToQuote} />

        {/* 5. ตัวอย่างโครงการและความไว้วางใจ (TRACK RECORD) - From Slides 4, 5, 6 */}
        <GallerySection />

        {/* 6. เสียงตอบรับและความไว้วางใจจากลูกค้าองค์กร (CLIENT TESTIMONIALS) */}
        <ClientTestimonialsSection 
          onNavigateToQuote={handleNavigateToQuote} 
          phone={companyInfo.phone} 
        />

        {/* 7. มาตรฐานการดำเนินงานวิศวกรรม (5-Step Process) */}
        <ProcessSection />

        {/* 7. ประเมินราคา / ขอใบเสนอราคาออนไลน์ */}
        <QuoteSection 
          initialCategory={quoteCategory}
          phone={companyInfo.phone}
          lineId={companyInfo.lineId}
        />

        {/* 8. คณะผู้บริหารและสถานที่ติดต่อ */}
        <ContactSection companyInfo={companyInfo} />
      </main>

      {/* Footer */}
      <Footer 
        companyInfo={companyInfo}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Floating Action Buttons */}
      <QuickContactFloating 
        phone={companyInfo.phone}
        lineId={companyInfo.lineId}
        onNavigateToQuote={handleNavigateToQuote}
      />

      {/* Admin Management Portal Modal */}
      <AdminModal 
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        companyInfo={companyInfo}
        services={services}
        quotations={quotations}
        onCompanyUpdate={(updated) => setCompanyInfo(updated)}
        onServicesUpdate={(updated) => setServices(updated)}
      />
    </div>
  );
}
