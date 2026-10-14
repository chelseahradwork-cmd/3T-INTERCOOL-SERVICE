import React, { useState } from 'react';
import { ServiceItem, ServiceCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  Snowflake, 
  Box, 
  Wind, 
  Cpu, 
  Store, 
  Check, 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  Layers 
} from 'lucide-react';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectServiceForQuote: (category: ServiceCategory) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, onSelectServiceForQuote }) => {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | ServiceCategory>('ALL');
  const { language, t } = useLanguage();

  const getCategoryIndex = (category: ServiceCategory) => {
    switch (category) {
      case 'AIR_CONDITIONING': return '01';
      case 'COLD_ROOM': return '02';
      case 'DUCT_PIPE': return '03';
      case 'CHILLER': return '04';
      case 'FREEZER_SHOWCASE': return '05';
      default: return '01';
    }
  };

  const getCategoryImage = (category: ServiceCategory) => {
    switch (category) {
      case 'AIR_CONDITIONING':
        return 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80';
      case 'COLD_ROOM':
        return 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80';
      case 'DUCT_PIPE':
        return 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80';
      case 'CHILLER':
        return 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80';
      case 'FREEZER_SHOWCASE':
        return 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80';
      default:
        return 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80';
    }
  };

  const filterTabs = [
    { id: 'ALL', label: t.services.filterAll },
    { id: 'AIR_CONDITIONING', label: language === 'en' ? '01 Air Conditioning' : '01 ระบบเครื่องปรับอากาศ' },
    { id: 'COLD_ROOM', label: language === 'en' ? '02 Cold Storage' : '02 ระบบห้องเย็น' },
    { id: 'DUCT_PIPE', label: language === 'en' ? '03 Duct & Ventilation' : '03 ระบบท่อลม' },
    { id: 'CHILLER', label: language === 'en' ? '04 Water Chiller' : '04 ระบบชิลเลอร์' },
    { id: 'FREEZER_SHOWCASE', label: language === 'en' ? '05 Commercial Refrigeration' : '05 ตู้แช่เชิงพาณิชย์' },
  ];

  const filteredServices = services
    .filter(s => s.isActive)
    .filter(s => selectedFilter === 'ALL' || s.category === selectedFilter)
    .sort((a, b) => a.order - b.order);

  return (
    <section id="services" className="py-24 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Slide 2 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div className="flex items-start gap-3.5">
            <div className="w-1.5 h-12 bg-orange-500 rounded-full shrink-0" />
            <div>
              <span className="font-outfit uppercase tracking-widest text-xs font-bold text-orange-600 block">
                {t.services.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {t.services.title}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
                {t.services.subtitle}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <button
              onClick={() => onSelectServiceForQuote('AIR_CONDITIONING')}
              className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>{t.hero.ctaQuote}</span>
              <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
            </button>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as 'ALL' | ServiceCategory)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-sky-950 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Cards (CH. Karnchang Architectural Modules) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const indexNum = getCategoryIndex(service.category);
            const bgImg = getCategoryImage(service.category);
            
            // Match with translated version
            const translatedItem = t.services.items.find(item => item.category === service.category);
            const displayTitle = translatedItem ? translatedItem.title : service.title;
            const displaySummary = translatedItem ? translatedItem.summary : service.summary;
            const displayFeatures = translatedItem ? translatedItem.features : service.features;
            const displayBadge = translatedItem ? translatedItem.badge : service.badge;

            return (
              <div
                key={service.id}
                className="group relative rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Header with Index Number */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={bgImg}
                    alt={displayTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Top Index Badge */}
                  <div className="absolute top-4 left-4 font-outfit font-black text-2xl text-white/90 tracking-wider">
                    {indexNum}
                  </div>

                  {displayBadge && (
                    <div className="absolute top-4 right-4 bg-orange-600 text-white text-[10px] font-bold px-2.5 py-1 rounded">
                      {displayBadge}
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-outfit uppercase text-[10px] tracking-widest text-sky-300 font-bold block mb-1">
                      {service.category.replace(/_/g, ' ')}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug line-clamp-2">
                      {displayTitle}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {displaySummary}
                    </p>

                    {/* Features checklist */}
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <div className="text-[11px] font-outfit uppercase tracking-wider text-slate-400 font-bold">
                        Engineering Highlights
                      </div>
                      <ul className="space-y-1.5">
                        {displayFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-sky-700 mt-0.5 shrink-0" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => onSelectServiceForQuote(service.category)}
                      className="w-full py-2.5 px-4 rounded-lg bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-orange-200 text-slate-800 hover:text-orange-700 text-xs font-bold transition-all flex items-center justify-between group/btn cursor-pointer"
                    >
                      <span>{t.services.getQuote}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-orange-600 group-hover/btn:translate-x-1 transition-all" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
