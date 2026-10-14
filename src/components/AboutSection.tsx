import React from 'react';
import { 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  Award, 
  Zap, 
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutSectionProps {
  onNavigateToQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigateToQuote }) => {
  const { language, t } = useLanguage();

  return (
    <section id="about-us" className="py-24 bg-slate-50 text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with Corporate Orange Accent Bar */}
        <div className="mb-14 flex items-start gap-3.5">
          <div className="w-1.5 h-12 bg-orange-500 rounded-full shrink-0" />
          <div>
            <span className="font-outfit uppercase tracking-widest text-xs font-bold text-orange-600 block">
              {t.about.tag}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {t.about.title}
            </h2>
          </div>
        </div>

        {/* Content Layout matching Slide 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Large Description Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-4">
                {t.about.heading}
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  {t.about.desc1}
                </p>
                <p>
                  {t.about.desc2}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{t.about.guaranteeText}</span>
              </div>

              <button
                onClick={onNavigateToQuote}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-sky-950 hover:bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>{t.about.consultBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
              </button>
            </div>
          </div>

          {/* Right 4 Feature Cards matching Slide 1 */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
            
            {/* Card 1: 100% One-Stop Service (Dark Navy Highlight) */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-white shadow-md border border-sky-800/40 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-bl-full pointer-events-none" />
              <div className="flex items-center justify-between">
                <span className="font-outfit font-black text-2xl text-orange-400">100%</span>
                <Zap className="w-5 h-5 text-orange-400" />
              </div>
              <h4 className="font-bold text-base text-white mt-1">
                {language === 'en' ? 'One-Stop Turnkey Service' : 'บริการครบวงจร One-Stop Service'}
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                {language === 'en' 
                  ? 'Complete lifecycle from design and AutoCAD drafting to installation & dedicated warranty.' 
                  : 'ดูแลครบทุกขั้นตอน ออกแบบ เขียนแบบ ติดตั้ง และบริการหลังการขายในที่เดียว'}
              </p>
            </div>

            {/* Card 2: Professional */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-sky-300 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-outfit font-black text-sm text-slate-900 tracking-tight">Professional</h4>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">
                    {language === 'en' 
                      ? 'Certified engineering technicians with specialized thermal skills.' 
                      : 'ทีมงานที่มีประสบการณ์และเป็นผู้เชี่ยวชาญเฉพาะด้าน'}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Standard */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-sky-300 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center font-bold shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-outfit font-black text-sm text-slate-900 tracking-tight">Standard</h4>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">
                    {language === 'en' 
                      ? 'International standard testing equipment and certified OEM parts.' 
                      : 'เครื่องมือและวัสดุอุปกรณ์ที่ได้มาตรฐานสากลและอะไหล่แท้'}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Fast Service */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-sky-300 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-outfit font-black text-sm text-slate-900 tracking-tight">Fast Service</h4>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">
                    {language === 'en' 
                      ? 'Rapid site audits, strict delivery adherence, and preventive PM contracts.' 
                      : 'การเข้าตรวจสอบปัญหาที่รวดเร็ว ตรงต่อเวลา และมีสัญญา PM'}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
