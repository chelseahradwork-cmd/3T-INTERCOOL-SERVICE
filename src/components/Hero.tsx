import React from 'react';
import { CompanyInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  FileText,
  Building,
  Shield,
  Layers,
  Sparkles,
  TrendingUp,
  MapPin
} from 'lucide-react';

interface HeroProps {
  companyInfo: CompanyInfo;
  onRequestQuote: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ companyInfo, onRequestQuote, onExploreServices }) => {
  const { language, t } = useLanguage();

  return (
    <section id="hero" className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Cinematic Image with Deep Architectural Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-luminosity transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      
      {/* Dual Gradient Overlay for CH. Karnchang Corporate Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-sky-950/70" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,#020617_100%)]" />

      {/* Subtle Geometric Engineering Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-28 lg:pt-28 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines in CH. Karnchang Style */}
          <div className="lg:col-span-8 space-y-7">
            
            {/* Top Corporate Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-900/40 border border-sky-600/40 text-sky-300 text-xs font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="font-outfit uppercase tracking-wider">{t.hero.badge}</span>
            </div>

            {/* Signature Bold Title (CH. Karnchang "Building Beyond Limits" inspiration) */}
            <div className="space-y-2">
              <h1 className="font-outfit font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none">
                {t.hero.headlinePart1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-orange-400">
                  {t.hero.headlinePart2}
                </span>
              </h1>
              <p className="font-outfit text-sm sm:text-base font-semibold tracking-widest text-slate-400 uppercase pt-1">
                {language === 'en' ? companyInfo.companyNameEn : companyInfo.companyNameTh}
              </p>
            </div>

            {/* Corporate Mission Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            {/* 4 Standard Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-200 max-w-xl">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{t.hero.cardStd1}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{t.hero.cardStd2}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{t.hero.cardStd3}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{t.hero.cardStd4}</span>
              </div>
            </div>

            {/* Corporate Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-7 py-4 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>{t.hero.ctaServices}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onRequestQuote}
                className="w-full sm:w-auto px-7 py-4 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs uppercase tracking-wider backdrop-blur-sm transition-all cursor-pointer flex items-center justify-center gap-2.5"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>{t.hero.ctaQuote}</span>
              </button>
            </div>

            {/* Direct Line to Leadership */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{language === 'en' ? 'Headquarters: Ladkrabang, Bangkok' : 'สำนักงานใหญ่: ลาดกระบัง กรุงเทพมหานคร'}</span>
              </div>
              <span className="hidden sm:inline text-slate-700">•</span>
              <a 
                href={`tel:${companyInfo.phone.replace(/[^0-9]/g, '')}`}
                className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1.5 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{t.nav.directLine}: {companyInfo.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Executive & Engineering Credibility Panel */}
          <div className="lg:col-span-4">
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl space-y-6">
              
              <div className="border-b border-slate-800 pb-4">
                <div className="text-[11px] font-outfit uppercase tracking-widest text-sky-400 font-bold">
                  Corporate Governance
                </div>
                <h3 className="text-base font-bold text-white mt-1">
                  {language === 'en' ? 'Executive Leadership & Engineering' : 'คณะผู้บริหารและวิศวกรผู้ควบคุม'}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {language === 'en' ? 'Overseeing project quality and safety standards' : 'กำกับดูแลมาตรฐานงานติดตั้งทุกโครงการ'}
                </p>
              </div>

              {/* Managing Director Card */}
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                    {t.about.directorTitle}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {language === 'en' ? 'Direct Hotline Available' : 'พร้อมรับสายตรง'}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white">
                    {language === 'en' ? companyInfo.managingDirectorEn : companyInfo.managingDirectorTh}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-outfit">
                    {companyInfo.managingDirectorEn}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{language === 'en' ? 'Direct Telephone:' : 'โทรสายตรง:'}</span>
                  <a
                    href={`tel:${companyInfo.phone.replace(/[^0-9]/g, '')}`}
                    className="font-bold text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    {companyInfo.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">{language === 'en' ? 'LINE for Drawings:' : 'LINE สำหรับส่งแบบ:'}</span>
                  <a
                    href={`https://line.me/ti/p/~${companyInfo.lineId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-emerald-400 hover:underline"
                  >
                    @{companyInfo.lineId}
                  </a>
                </div>
              </div>

              {/* Engineering Scope Highlights */}
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">{language === 'en' ? 'Core Capabilities' : 'ขอบเขตงานระบบ'}</span>
                  <span className="font-semibold text-white">{language === 'en' ? '5 Engineering Systems' : '5 ระบบวิศวกรรมหลัก'}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">{language === 'en' ? 'Service Area' : 'พื้นที่บริการ'}</span>
                  <span className="font-semibold text-white">{language === 'en' ? 'Bangkok & Nationwide' : 'ทั่วกรุงเทพฯ และปริมณฑล'}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400">{language === 'en' ? 'PM Service Contracts' : 'สัญญาบริการ PM'}</span>
                  <span className="font-semibold text-emerald-400">{language === 'en' ? 'Annual & Periodic' : 'รายปีและรายงวด'}</span>
                </div>
              </div>

              <div className="pt-1">
                <button
                  onClick={onRequestQuote}
                  className="w-full py-2.5 rounded-lg bg-sky-900 hover:bg-sky-800 text-white font-semibold text-xs transition-colors cursor-pointer text-center"
                >
                  {t.hero.ctaQuote}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* CH. Karnchang Style Bottom Stat Counter Bar */}
      <div className="border-t border-slate-800 bg-slate-900/90 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            
            <div className="space-y-1 md:border-r border-slate-800 md:pr-6">
              <div className="font-outfit font-black text-3xl sm:text-4xl text-sky-400">
                05
              </div>
              <div className="text-xs font-bold text-slate-200">{language === 'en' ? 'Core Engineering Systems' : 'งานระบบวิศวกรรมหลัก'}</div>
              <p className="text-[11px] text-slate-400">{language === 'en' ? 'HVAC, Cold Room, Duct, Chiller, Showcase' : 'แอร์, ห้องเย็น, ท่อลม, ชิลเลอร์, ตู้แช่'}</p>
            </div>

            <div className="space-y-1 md:border-r border-slate-800 md:pr-6">
              <div className="font-outfit font-black text-3xl sm:text-4xl text-orange-400">
                -40°C
              </div>
              <div className="text-xs font-bold text-slate-200">{language === 'en' ? 'Cold Storage Capability' : 'ขีดความสามารถห้องเย็น'}</div>
              <p className="text-[11px] text-slate-400">{language === 'en' ? 'Precision control from +15°C down to -40°C' : 'ควบคุมอุณหภูมิตั้งแต่ +15°C ถึง -40°C'}</p>
            </div>

            <div className="space-y-1 md:border-r border-slate-800 md:pr-6">
              <div className="font-outfit font-black text-3xl sm:text-4xl text-emerald-400">
                {t.hero.stat1Value}
              </div>
              <div className="text-xs font-bold text-slate-200">{t.hero.stat1Label}</div>
              <p className="text-[11px] text-slate-400">{language === 'en' ? 'Compliant with SMACNA & ASHRAE' : 'ตามมาตรฐาน SMACNA & ASHRAE'}</p>
            </div>

            <div className="space-y-1">
              <div className="font-outfit font-black text-3xl sm:text-4xl text-white">
                {t.hero.stat3Value}
              </div>
              <div className="text-xs font-bold text-slate-200">{t.hero.stat3Label}</div>
              <p className="text-[11px] text-slate-400">{language === 'en' ? 'Prompt on-site survey & estimation' : 'ประเมินราคาและสำรวจหน้างานรวดเร็ว'}</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
