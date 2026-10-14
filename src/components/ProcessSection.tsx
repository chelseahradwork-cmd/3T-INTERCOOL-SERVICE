import React from 'react';
import { 
  ClipboardCheck, 
  PenTool, 
  FileSpreadsheet, 
  Wrench, 
  ShieldCheck, 
  Leaf,
  Activity,
  Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ProcessSection: React.FC = () => {
  const { language, t } = useLanguage();

  const stepIcons = [
    <ClipboardCheck className="w-5 h-5 text-sky-400" />,
    <PenTool className="w-5 h-5 text-orange-400" />,
    <FileSpreadsheet className="w-5 h-5 text-emerald-400" />,
    <Wrench className="w-5 h-5 text-sky-400" />,
    <ShieldCheck className="w-5 h-5 text-orange-400" />
  ];

  const steps = t.process.steps.map((st, idx) => ({
    ...st,
    icon: stepIcons[idx] || <ShieldCheck className="w-5 h-5 text-sky-400" />
  }));

  return (
    <section id="workflow" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-outfit uppercase tracking-widest text-xs font-bold text-sky-400">
            <span className="w-2.5 h-0.5 bg-sky-400" />
            <span>Engineering Excellence & Quality Policy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {t.process.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* Steps Grid (Architectural Progress Timeline) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="relative p-6 rounded-xl bg-slate-800/70 border border-slate-700/80 backdrop-blur-sm flex flex-col justify-between space-y-5 hover:border-sky-500/60 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-outfit font-black text-3xl text-slate-500 group-hover:text-orange-400 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-slate-700/60 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <div className="font-outfit uppercase text-[10px] tracking-wider text-sky-400 font-semibold mb-1">
                  {step.subtitle}
                </div>
                <h3 className="font-bold text-sm sm:text-base text-white leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-outfit uppercase text-sky-400 font-bold">{step.badge}</span>
                <span className="text-slate-500 font-outfit">{step.num}/05</span>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Cards (ASHRAE / SMACNA / ISO Compliant) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">{language === 'en' ? 'Eco-Friendly Refrigeration' : 'สารทำความเย็นที่เป็นมิตรต่อสิ่งแวดล้อม'}</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {language === 'en' 
                  ? 'Compliant with ozone depletion regulations (ODP=0) using R32, R410A, and R134a.' 
                  : 'เลือกใช้สารทำความเย็นที่ไม่ทำลายชั้นบรรยากาศ (ODP=0) เช่น R32, R410A, R134a'}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">{language === 'en' ? 'Certified Equipment Calibration' : 'ตรวจวัดด้วยเครื่องมือสอบเทียบ'}</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {language === 'en' 
                  ? 'Digital manifolds, micron vacuum gauges, and laser alignment tools calibrated annually.' 
                  : 'เครื่องมือวัดดิจิทัล เกจวัดแรงดัน และไมครอนเกจ ผ่านการสอบเทียบมาตรฐานความแม่นยำ'}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">{language === 'en' ? 'Comprehensive 1-Year Warranty' : 'การรับประกันผลงาน 1 ปีเต็ม'}</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {language === 'en' 
                  ? 'Official warranty documentation and fast response emergency service for all projects.' 
                  : 'ออกเอกสารรับประกันผลงานอย่างเป็นทางการ พร้อมทีมดูแลฉุกเฉินตลอดอายุสัญญา'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
