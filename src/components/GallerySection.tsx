import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Building, 
  Award, 
  ShieldCheck, 
  ExternalLink,
  MapPin,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectItem {
  id: string;
  categoryKey: string;
  image: string;
  isFlagship?: boolean;
}

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ALL');
  const { language, t } = useLanguage();

  const projectImages: Record<string, string> = {
    'track-1': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    'track-2': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    'track-3': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    'track-4': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
    'track-5': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    'track-6': 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1000&q=80'
  };

  const projectCategories: Record<string, string> = {
    'track-1': 'COLD_ROOM',
    'track-2': 'DUCT_PIPE',
    'track-3': 'COLD_ROOM',
    'track-4': 'AIR_CONDITIONING',
    'track-5': 'CHILLER',
    'track-6': 'FREEZER_SHOWCASE'
  };

  const categoryLabels: Record<string, { th: string; en: string }> = {
    'COLD_ROOM': { th: 'ห้องเย็น', en: 'Cold Storage' },
    'DUCT_PIPE': { th: 'ท่อลม & สแตนเลส', en: 'Ductwork' },
    'AIR_CONDITIONING': { th: 'แอร์อาคาร', en: 'Commercial HVAC' },
    'CHILLER': { th: 'ชิลเลอร์', en: 'Chillers' },
    'FREEZER_SHOWCASE': { th: 'ตู้แช่เชิงพาณิชย์', en: 'Showcases' }
  };

  const tabs = [
    { key: 'ALL', label: t.projects.filterAll },
    { key: 'COLD_ROOM', label: t.projects.filterColdRoom },
    { key: 'DUCT_PIPE', label: t.projects.filterDuct },
    { key: 'AIR_CONDITIONING', label: t.projects.filterHVAC },
    { key: 'CHILLER', label: t.projects.filterChiller },
    { key: 'FREEZER_SHOWCASE', label: t.projects.filterCommercial }
  ];

  const projects = t.projects.items.map((item, idx) => ({
    ...item,
    image: projectImages[item.id] || projectImages['track-1'],
    categoryKey: projectCategories[item.id] || 'COLD_ROOM',
    isFlagship: idx < 3
  }));

  const filteredProjects = activeTab === 'ALL' 
    ? projects 
    : projects.filter(p => p.categoryKey === activeTab);

  return (
    <section id="projects" className="py-24 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with Corporate Orange Accent Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div className="flex items-start gap-3.5">
            <div className="w-1.5 h-12 bg-orange-500 rounded-full shrink-0" />
            <div>
              <span className="font-outfit uppercase tracking-widest text-xs font-bold text-orange-600 block">
                {t.projects.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {t.projects.title}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
                {t.projects.subtitle}
              </p>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="shrink-0 flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold">{t.projects.verifiedBadge}</span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-sky-950 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3 Top Featured Flagship Projects Spotlight */}
        <div className="mb-14 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold font-outfit uppercase tracking-wider text-orange-600">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span>Featured Track Record Highlights (โครงการไฮไลท์)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.filter(p => p.isFlagship).map((p, idx) => (
              <div 
                key={p.id}
                className="rounded-2xl border-2 border-slate-200 hover:border-sky-500 overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-56 overflow-hidden relative bg-slate-950">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 bg-orange-600 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-xs font-outfit">
                      Track Record {idx + 1}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] font-bold text-sky-300 block mb-0.5 font-outfit">
                        {p.client}
                      </span>
                      <h3 className="font-bold text-sm leading-snug line-clamp-2">
                        {p.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="p-3 rounded-xl bg-sky-50/70 border border-sky-100 text-[11px] text-sky-950 font-medium flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                    <span className="leading-snug">{p.scope}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => {
            const catLabel = categoryLabels[p.categoryKey]?.[language] || p.categoryKey;

            return (
              <div
                key={p.id}
                className="rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group bg-white"
              >
                <div>
                  <div className="h-56 overflow-hidden relative bg-slate-900">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded">
                      {catLabel}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-semibold px-3 py-1 rounded shadow-xs">
                      {p.location}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-[11px] font-bold text-orange-600 font-outfit">
                      {p.client}
                    </div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-sky-800 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{p.scope}</span>
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
