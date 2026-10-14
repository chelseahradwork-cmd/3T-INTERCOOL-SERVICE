import React from 'react';
import { CompanyInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Shield, Phone, Mail, MapPin, MessageSquare, ArrowUp, Snowflake } from 'lucide-react';

interface FooterProps {
  companyInfo: CompanyInfo;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ companyInfo, onOpenAdmin }) => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const companyTitle = language === 'en' ? companyInfo.companyNameEn : companyInfo.companyNameTh;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-slate-900 via-sky-950 to-blue-950 border border-sky-800/40 flex items-center justify-center text-white">
                <span className="font-outfit font-black text-lg">3T</span>
                <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-orange-500 rounded-xs" />
              </div>
              <div>
                <span className="font-outfit font-black text-white text-base tracking-tight block">
                  3T INTERCOOL & SERVICE
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {companyTitle}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              {t.footer.desc}
            </p>

            <div className="text-[11px] text-slate-500 font-mono">
              {t.nav.legalTaxId}: {companyInfo.taxId}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.systemsHeading}
            </h4>
            <ul className="space-y-2 text-slate-400">
              {t.services.items.map((srv, idx) => (
                <li key={idx}>
                  <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                    {srv.title}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800/80">
                <button onClick={() => scrollTo('testimonials')} className="text-amber-400 hover:text-amber-300 font-medium transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>{t.footer.testimonialsLink}</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors cursor-pointer">
                  {t.footer.trackRecordLink}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Fast Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.contactHeading}
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>
                  {t.nav.directLine}: <a href={`tel:${companyInfo.phone}`} className="text-white hover:text-orange-400 font-semibold">{companyInfo.phone}</a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>LINE: <strong className="text-white">@{companyInfo.lineId}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="truncate">{companyInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Address & Admin */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.officeHeading}
            </h4>
            <div className="text-slate-400 leading-relaxed text-xs">
              <MapPin className="w-3.5 h-3.5 text-sky-400 inline mr-1" />
              {companyInfo.address}
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-sky-400 hover:text-sky-300 font-medium text-xs transition-colors cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5 text-sky-400" />
                <span>{t.footer.adminPortalBtn}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {companyInfo.companyNameEn}. {t.footer.rightsReserved}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmin}
              className="hover:text-slate-300 flex items-center gap-1.5 cursor-pointer"
            >
              <Shield className="w-3 h-3 text-sky-500" />
              <span>{t.nav.admin}</span>
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
