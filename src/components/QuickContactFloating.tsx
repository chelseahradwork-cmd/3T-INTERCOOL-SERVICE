import React from 'react';
import { Phone, MessageSquare, Calculator } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface QuickContactFloatingProps {
  phone: string;
  lineId: string;
  onNavigateToQuote: () => void;
}

export const QuickContactFloating: React.FC<QuickContactFloatingProps> = ({ 
  phone, 
  lineId, 
  onNavigateToQuote 
}) => {
  const { language, t } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2.5 items-end">
      {/* LINE button */}
      <a
        href={`https://line.me/ti/p/~${lineId}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#06C755] hover:bg-[#05b34c] text-white shadow-lg shadow-emerald-600/30 font-bold text-xs transition-transform hover:scale-105"
        title={t.floating.lineTitle}
      >
        <MessageSquare className="w-4 h-4 fill-white" />
        <span className="hidden sm:inline">LINE ({lineId})</span>
      </a>

      {/* Direct Call button */}
      <a
        href={`tel:${phone.replace(/[^0-9]/g, '')}`}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-xl shadow-orange-600/40 font-bold text-xs transition-transform hover:scale-105 animate-pulse"
        title={t.floating.callTitle}
      >
        <Phone className="w-4 h-4" />
        <span>{t.floating.callTitle} {phone}</span>
      </a>

      {/* Floating Quote button */}
      <button
        onClick={onNavigateToQuote}
        className="flex sm:hidden items-center justify-center w-11 h-11 rounded-full bg-sky-800 text-white shadow-lg shadow-sky-900/30 transition-transform hover:scale-105 cursor-pointer"
        title={t.floating.quoteTitle}
      >
        <Calculator className="w-5 h-5" />
      </button>
    </div>
  );
};
