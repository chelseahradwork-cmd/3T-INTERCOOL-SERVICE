import React from 'react';
import { Megaphone, PhoneCall, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AnnouncementBarProps {
  announcement: string;
  phone: string;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ announcement, phone }) => {
  const { language, t } = useLanguage();

  if (!announcement && !t.announcement.text) return null;

  const displayText = language === 'en' 
    ? t.announcement.text 
    : (announcement || t.announcement.text);

  return (
    <aside aria-label="Company announcements" className="bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 text-white border-b border-sky-800/40 text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 overflow-hidden text-center sm:text-left">
          <span className="inline-flex items-center gap-1 bg-orange-500 text-white font-bold px-2 py-0.5 rounded text-[10px] tracking-wide shrink-0 animate-pulse">
            <Megaphone className="w-3 h-3" />
            <span>{t.announcement.badge}</span>
          </span>
          <p className="text-slate-200 text-xs truncate max-w-2xl">
            {displayText}
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-[11px] text-slate-300 shrink-0">
          <span className="flex items-center gap-1.5 text-sky-300">
            <Clock className="w-3.5 h-3.5" />
            <span>{t.announcement.urgent}</span>
          </span>
          <a
            href={`tel:${phone.replace(/[^0-9]/g, '')}`}
            className="flex items-center gap-1 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
          >
            <PhoneCall className="w-3 h-3" />
            <span>{phone}</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
