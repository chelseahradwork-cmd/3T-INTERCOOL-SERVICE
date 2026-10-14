import React, { useState } from 'react';
import { CompanyInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  Phone, 
  Shield, 
  Menu, 
  X, 
  ArrowRight, 
  MessageSquare, 
  ChevronRight, 
  Globe,
  Home,
  Layers,
  Wrench,
  Building2,
  Calculator,
  UserCheck,
  CheckCircle2,
  ExternalLink,
  Award,
  ShieldCheck,
  Star
} from 'lucide-react';

interface NavbarProps {
  companyInfo: CompanyInfo;
  onOpenAdmin: () => void;
  onNavigateToQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ companyInfo, onOpenAdmin, onNavigateToQuote }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
        {/* Top Utility Bar (CH. Karnchang style) */}
        <div className="hidden lg:block bg-slate-900 text-slate-300 text-[11px] py-1.5 px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="text-slate-400 font-normal">
                {companyInfo.companyNameEn}
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300 font-medium">
                {t.nav.legalTaxId}: {companyInfo.taxId}
              </span>
            </div>

            <div className="flex items-center gap-5">
              {/* Language Switcher TH / EN in Top Bar */}
              <div className="flex items-center gap-1 bg-slate-800/80 p-0.5 rounded-md border border-slate-700">
                <Globe className="w-3.5 h-3.5 text-sky-400 ml-1.5 mr-0.5" />
                <button
                  type="button"
                  onClick={() => setLanguage('th')}
                  className={`px-2 py-0.5 rounded text-[11px] transition-all cursor-pointer ${
                    language === 'th' 
                      ? 'font-bold text-white bg-sky-600 shadow-xs' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="เปลี่ยนเป็นภาษาไทย"
                >
                  TH
                </button>
                <span className="text-slate-600 text-[10px]">|</span>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 rounded text-[11px] transition-all cursor-pointer ${
                    language === 'en' 
                      ? 'font-bold text-white bg-sky-600 shadow-xs' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Switch to English"
                >
                  EN
                </button>
              </div>

              <span className="text-slate-700">|</span>

              <a
                href={`tel:${companyInfo.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-1.5 text-orange-400 hover:text-orange-300 font-semibold"
              >
                <Phone className="w-3 h-3" />
                <span>{t.nav.directLine}: {companyInfo.phone}</span>
              </a>

              <button
                onClick={onOpenAdmin}
                title="Admin Portal"
                className="text-slate-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Shield className="w-3 h-3 text-sky-400" />
                <span>{t.nav.admin}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo & Corporate Identity */}
            <div 
              onClick={() => scrollTo('hero')} 
              className="flex items-center gap-3.5 cursor-pointer group"
            >
              <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-slate-900 via-sky-950 to-blue-950 border border-sky-800/40 flex items-center justify-center text-white shadow-md group-hover:border-sky-500 transition-colors">
                <div className="font-outfit font-black text-2xl tracking-tighter text-white">
                  3T
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-orange-500 rounded-sm" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-outfit font-black text-xl tracking-tight text-slate-900">
                    3T INTERCOOL
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-outfit uppercase tracking-widest border border-slate-200">
                    Engineering
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 leading-tight">
                  {language === 'en' ? companyInfo.companyNameEn : companyInfo.companyNameTh}
                </span>
              </div>
            </div>

            {/* Right Actions: Language Toggle, Quick Actions & 3-Lines Menu */}
            <div className="flex items-center gap-3">
              
              {/* Responsive Language Switcher Button (Visible on all screen sizes) */}
              <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200 shadow-xs">
                <button
                  type="button"
                  onClick={() => setLanguage('th')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    language === 'th' 
                      ? 'bg-slate-900 text-white shadow-xs' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="เปลี่ยนเป็นภาษาไทย"
                >
                  TH
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    language === 'en' 
                      ? 'bg-slate-900 text-white shadow-xs' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="Switch to English"
                >
                  EN
                </button>
              </div>

              {/* Quick direct contact links on desktop */}
              <div className="hidden md:flex items-center gap-3">
                <a 
                  href={`https://line.me/ti/p/~${companyInfo.lineId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 font-semibold text-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>LINE: @{companyInfo.lineId}</span>
                </a>

                <button
                  onClick={onNavigateToQuote}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs shadow-md shadow-orange-600/20 transition-all cursor-pointer"
                >
                  <span>{t.nav.requestQuoteBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* THE 3-LINES (HAMBURGER) BUTTON */}
              <button
                onClick={() => setMenuOpen(true)}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-950 text-white shadow-md shadow-slate-900/20 transition-all cursor-pointer group hover:scale-[1.02]"
                title={t.nav.menuSubheading}
                aria-label={t.nav.menuSubheading}
              >
                {/* 3 Horizontal Lines Graphic */}
                <div className="flex flex-col justify-center items-center gap-1 w-5 h-5">
                  <span className="w-5 h-0.5 bg-white rounded-full group-hover:bg-orange-400 transition-colors" />
                  <span className="w-4 h-0.5 bg-orange-400 rounded-full group-hover:w-5 transition-all" />
                  <span className="w-5 h-0.5 bg-white rounded-full group-hover:bg-orange-400 transition-colors" />
                </div>
                <span className="font-outfit font-bold text-xs uppercase tracking-wider text-slate-100 group-hover:text-white">
                  {t.nav.menuBtn}
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* FULL DRAWER / MODAL MENU (Includes ALL TOPICS when clicking the 3 lines) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-md flex justify-end animate-in fade-in duration-200">
          <div className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            
            {/* Drawer Top Bar */}
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-600 text-white flex items-center justify-center font-outfit font-black text-xl">
                  3T
                </div>
                <div>
                  <h3 className="font-outfit font-black text-base tracking-tight text-white">
                    {t.nav.menuHeading}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {t.nav.menuSubheading}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Language Switcher inside Drawer */}
                <div className="flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700">
                  <button
                    onClick={() => setLanguage('th')}
                    className={`px-2 py-1 rounded text-xs font-bold transition-all ${
                      language === 'th' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    TH
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-1 rounded text-xs font-bold transition-all ${
                      language === 'en' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    EN
                  </button>
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                  title={t.nav.menuBtn}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Topics List (รวมหัวข้อทุกหัวข้อไว้ที่นี่) */}
            <div className="p-6 space-y-3 flex-1 overflow-y-auto">
              <div className="text-[11px] font-outfit uppercase tracking-widest text-slate-400 font-bold mb-2">
                Navigation & Systems Directory
              </div>

              {/* 1. หน้าแรก */}
              <button
                onClick={() => scrollTo('hero')}
                className="w-full p-3.5 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-sky-300 text-left transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Home className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-outfit text-sky-700 font-bold uppercase tracking-wider">
                      01 • Overview
                    </div>
                    <div className="font-bold text-slate-900 text-sm">
                      {t.nav.home}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-sky-600 transition-all" />
              </button>

              {/* 2. เกี่ยวกับบริษัท */}
              <button
                onClick={() => scrollTo('about-us')}
                className="w-full p-3.5 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-sky-300 text-left transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-700 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-outfit text-orange-700 font-bold uppercase tracking-wider">
                      02 • About Company
                    </div>
                    <div className="font-bold text-slate-900 text-sm">
                      {t.nav.about}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-orange-600 transition-all" />
              </button>

              {/* 3. ขอบเขตบริการหลัก */}
              <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50">
                <button
                  onClick={() => scrollTo('services')}
                  className="w-full p-3.5 hover:bg-slate-100/80 text-left transition-colors flex items-center justify-between group cursor-pointer border-b border-slate-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center group-hover:bg-sky-900 group-hover:text-white transition-colors">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-outfit text-sky-700 font-bold uppercase tracking-wider">
                        03 • Core Services
                      </div>
                      <div className="font-bold text-slate-900 text-sm">
                        {t.nav.services}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-sky-700 transition-all" />
                </button>

                {/* Sub items for services */}
                <div className="p-2.5 bg-white space-y-1 text-xs">
                  {t.services.items.map((sub, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => scrollTo('services')}
                      className="w-full py-1.5 px-3 rounded-lg text-slate-600 hover:text-sky-900 hover:bg-sky-50 text-left flex items-center gap-2 transition-colors cursor-pointer text-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <span className="font-medium truncate">{sIdx + 1}. {sub.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. ทำไมต้องเลือกเรา */}
              <button
                onClick={() => scrollTo('why-choose-us')}
                className="w-full p-3.5 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-sky-300 text-left transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-outfit text-emerald-700 font-bold uppercase tracking-wider">
                      04 • Why Choose Us
                    </div>
                    <div className="font-bold text-slate-900 text-sm">
                      {t.nav.whyUs}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-600 transition-all" />
              </button>

              {/* 5. ตัวอย่างโครงการและความไว้วางใจ */}
              <button
                onClick={() => scrollTo('projects')}
                className="w-full p-3.5 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-sky-300 text-left transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-outfit text-indigo-700 font-bold uppercase tracking-wider">
                      05 • Track Record
                    </div>
                    <div className="font-bold text-slate-900 text-sm">
                      {t.nav.projects}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all" />
              </button>

              {/* 6. เสียงตอบรับลูกค้าองค์กร (CLIENT TESTIMONIALS) */}
              <button
                onClick={() => scrollTo('testimonials')}
                className="w-full p-3.5 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-amber-300 text-left transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <Star className="w-4 h-4 fill-amber-500 group-hover:fill-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-outfit text-amber-700 font-bold uppercase tracking-wider">
                      06 • Client Testimonials
                    </div>
                    <div className="font-bold text-slate-900 text-sm">
                      {t.nav.testimonials}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-amber-600 transition-all" />
              </button>

              {/* 7. มาตรฐานวิศวกรรม */}
              <button
                onClick={() => scrollTo('workflow')}
                className="w-full p-3.5 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-sky-300 text-left transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-outfit text-teal-700 font-bold uppercase tracking-wider">
                      07 • Standards & Process
                    </div>
                    <div className="font-bold text-slate-900 text-sm">
                      {t.nav.process}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-teal-600 transition-all" />
              </button>

              {/* 8. ประเมินราคา / ขอใบเสนอราคา */}
              <button
                onClick={() => scrollTo('calculator')}
                className="w-full p-3.5 rounded-xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-200 hover:border-orange-400 text-left transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-outfit text-orange-700 font-bold uppercase tracking-wider">
                      08 • Online Estimation
                    </div>
                    <div className="font-bold text-slate-900 text-sm">
                      {t.nav.quote}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-all" />
              </button>

              {/* 9. คณะผู้บริหารและสถานที่ติดต่อ */}
              <button
                onClick={() => scrollTo('contact')}
                className="w-full p-3.5 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-sky-300 text-left transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-outfit text-slate-500 font-bold uppercase tracking-wider">
                      09 • Corporate Contact
                    </div>
                    <div className="font-bold text-slate-900 text-sm">
                      {t.nav.contact}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-slate-900 transition-all" />
              </button>

            </div>

            {/* Drawer Bottom Actions & Direct Calling */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-3">
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${companyInfo.phone.replace(/[^0-9]/g, '')}`}
                  className="py-3 px-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.nav.callNow} ({companyInfo.phone})</span>
                </a>

                <a
                  href={`https://line.me/ti/p/~${companyInfo.lineId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-3 rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>LINE: @{companyInfo.lineId}</span>
                </a>
              </div>

              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 border-t border-slate-200/80">
                <span>{language === 'en' ? companyInfo.companyNameEn : companyInfo.companyNameTh}</span>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="text-sky-700 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>{t.nav.admin}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
