import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  X, 
  PhoneCall, 
  ArrowRight,
  Sparkles,
  Award,
  ThumbsUp
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ClientTestimonialsSectionProps {
  onNavigateToQuote: () => void;
  phone?: string;
}

export const ClientTestimonialsSection: React.FC<ClientTestimonialsSectionProps> = ({ 
  onNavigateToQuote,
  phone = '081-300-8451'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalItemId, setActiveModalItemId] = useState<string | null>(null);
  const { language, t } = useLanguage();

  const categories = [
    { key: 'ALL', label: t.testimonials.filterAll },
    { key: 'COLD_ROOM', label: t.testimonials.filterColdRoom },
    { key: 'AIR_CONDITIONING', label: t.testimonials.filterHVAC },
    { key: 'DUCT_PIPE', label: t.testimonials.filterDuct }
  ];

  const filteredTestimonials = selectedCategory === 'ALL'
    ? t.testimonials.items
    : t.testimonials.items.filter(item => item.category === selectedCategory);

  const activeModalItem = activeModalItemId 
    ? t.testimonials.items.find(item => item.id === activeModalItemId) || null
    : null;

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Decorative background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold mb-4 shadow-xs">
            <Award className="w-3.5 h-3.5 text-sky-600" />
            <span className="tracking-wide uppercase font-outfit">{t.testimonials.badge}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.testimonials.heading}
          </h2>
          
          <p className="text-slate-600 text-base leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Corporate Trust Statistics Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {t.testimonials.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-sky-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 font-outfit tracking-tight group-hover:text-sky-700 transition-colors">
                  {stat.metric}
                </span>
                <span className="w-2 h-2 rounded-full bg-orange-500" />
              </div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">
                {stat.label}
              </h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Top: Category Badge, Verified Tag, and Rating */}
              <div className="p-6 pb-4 border-b border-slate-100 bg-slate-50/40">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-sky-100/80 text-sky-800 border border-sky-200">
                    {item.categoryLabel}
                  </span>
                  
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.testimonials.verifiedBadge}</span>
                  </span>
                </div>

                {/* Stars and Project Title */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1.5 font-outfit">
                    {t.testimonials.scoreLabel}
                  </span>
                </div>

                <div className="text-xs font-semibold text-slate-900 line-clamp-1 group-hover:text-sky-700 transition-colors">
                  {item.projectTitle}
                </div>
              </div>

              {/* Card Body: Quote and Highlights */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="relative">
                    <Quote className="w-7 h-7 text-sky-200/60 absolute -top-2 -left-2 rotate-180 pointer-events-none" />
                    <p className="text-slate-800 font-bold text-sm leading-snug pl-5">
                      {item.highlight}
                    </p>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-4">
                    {item.quote}
                  </p>
                </div>

                {/* Key measurable results */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {t.testimonials.resultsLabel}
                  </div>
                  {item.results.slice(0, 2).map((res, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-tight">{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Reviewer Info */}
              <div className="p-6 pt-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-800 to-sky-900 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs border border-sky-400/30 font-outfit">
                    3T
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {item.clientName}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate font-medium">
                      {item.clientPosition}
                    </p>
                    <p className="text-[11px] text-sky-700 font-bold truncate">
                      {item.clientCompany}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalItemId(item.id)}
                  className="p-2 rounded-lg bg-white hover:bg-sky-50 text-slate-600 hover:text-sky-700 border border-slate-200 transition-colors shrink-0 cursor-pointer"
                  title={t.testimonials.moreDetails}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Reassurance and CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-sky-950 to-blue-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-sky-900/50">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-500/30">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>{t.testimonials.bannerBadge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {t.testimonials.bannerHeading}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.testimonials.bannerSubheading}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <button
                onClick={onNavigateToQuote}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <span>{t.testimonials.bannerQuoteBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-orange-400" />
                <span>{t.testimonials.bannerCallBtn}: {phone}</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Detailed Testimonial Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200 my-8">
            
            {/* Modal Header */}
            <div className="p-6 bg-slate-900 text-white flex items-start justify-between border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-sky-600 text-white uppercase tracking-wider font-outfit">
                    {activeModalItem.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400">
                    {t.testimonials.modalInspected} {activeModalItem.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {activeModalItem.projectTitle}
                </h3>
              </div>

              <button
                onClick={() => setActiveModalItemId(null)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title={t.nav.closeMenu}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              
              {/* Reviewer Information */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-bold text-base flex items-center justify-center shrink-0 font-outfit">
                  3T
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">
                    {activeModalItem.clientName}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium">
                    {activeModalItem.clientPosition}
                  </p>
                  <p className="text-xs text-sky-800 font-bold">
                    {activeModalItem.clientCompany}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{activeModalItem.location}</span>
                  </div>
                </div>
              </div>

              {/* Verified Feedback Content */}
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1">
                    {t.testimonials.scoreLabel}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-100 text-slate-800 font-medium text-sm leading-relaxed mb-4">
                  {activeModalItem.quote}
                </div>
              </div>

              {/* Results & Engineering Highlights */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <ThumbsUp className="w-3.5 h-3.5 text-sky-600" />
                  <span>{t.testimonials.modalResultsTitle}</span>
                </h5>
                <div className="grid grid-cols-1 gap-2">
                  {activeModalItem.results.map((res, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50 border border-emerald-100 text-xs text-emerald-900 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                {t.testimonials.modalSimilarTitle}
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActiveModalItemId(null);
                    onNavigateToQuote();
                  }}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{t.testimonials.modalQuoteBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
