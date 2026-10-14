import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Clock, 
  Award, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface WhyChooseUsSectionProps {
  onNavigateToQuote: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onNavigateToQuote }) => {
  const { language, t } = useLanguage();

  const pillars = t.whyUs.pillars.map((p, idx) => ({
    ...p,
    badgeColor: idx === 0 ? 'bg-orange-500 text-white' : 'bg-sky-950 text-white'
  }));

  return (
    <section id="why-choose-us" className="py-24 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with Corporate Orange Accent Bar */}
        <div className="mb-14 flex items-start gap-3.5">
          <div className="w-1.5 h-12 bg-orange-500 rounded-full shrink-0" />
          <div>
            <span className="font-outfit uppercase tracking-widest text-xs font-bold text-orange-600 block">
              {t.whyUs.tag}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {t.whyUs.title}
            </h2>
          </div>
        </div>

        {/* 4 Pillar Cards matching Slide 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1 hover:border-sky-300"
            >
              <div className="space-y-4">
                {/* Number Badge */}
                <div className={`w-14 h-14 rounded-2xl ${pillar.badgeColor} flex items-center justify-center font-outfit font-black text-xl shadow-md`}>
                  {pillar.num}
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h3 className="font-outfit font-black text-lg text-slate-900 leading-snug">
                    {pillar.title}
                  </h3>
                  <div className="text-[11px] font-bold text-orange-600">
                    {pillar.subtitle}
                  </div>
                </div>

                {/* Body or Bullet Points */}
                {pillar.points ? (
                  <ul className="space-y-2 text-xs text-slate-600 pt-1">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold">•</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {pillar.desc}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-slate-500">
                <span>Core Value {pillar.num}</span>
                <Check className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-300 text-center sm:text-left">
            {t.whyUs.ctaHeading}
          </div>
          <button
            onClick={onNavigateToQuote}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0"
          >
            {t.whyUs.ctaButton}
          </button>
        </div>

      </div>
    </section>
  );
};
