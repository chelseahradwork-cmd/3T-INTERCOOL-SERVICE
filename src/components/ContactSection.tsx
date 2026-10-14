import React from 'react';
import { CompanyInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Building2, 
  UserCheck, 
  Clock, 
  ShieldCheck, 
  Share2,
  Navigation,
  FileCheck2
} from 'lucide-react';

interface ContactSectionProps {
  companyInfo: CompanyInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ companyInfo }) => {
  const { language, t } = useLanguage();

  const directorName = language === 'en' ? companyInfo.managingDirectorEn : companyInfo.managingDirectorTh;
  const companyTitle = language === 'en' ? companyInfo.companyNameEn : companyInfo.companyNameTh;

  return (
    <section id="contact" className="py-20 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div id="about" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-slate-200 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-outfit uppercase tracking-widest text-xs font-bold text-sky-800">
              <span className="w-2.5 h-0.5 bg-orange-500" />
              <span>{t.contact.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>
        </div>

        {/* Leadership Contact Card */}
        <div className="max-w-2xl mx-auto mb-10">
          {/* Managing Director Card */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden space-y-5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sky-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-xl shadow-xs">
                  <UserCheck className="w-7 h-7 text-sky-700" />
                </div>
                <div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                    {t.contact.directorRole}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {directorName}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium tracking-wide font-outfit">
                    {companyInfo.managingDirectorEn}
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[11px] text-slate-400 block">{language === 'en' ? 'Direct Hotline' : 'ติดต่อสายตรง'}</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {language === 'en' ? '24/7 Available' : 'พร้อมรับสาย 24 ชม.'}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-500 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>{language === 'en' ? 'Direct Hotline:' : 'เบอร์โทรศัพท์สายด่วน:'}</span>
                </span>
                <a
                  href={`tel:${companyInfo.phone.replace(/[^0-9]/g, '')}`}
                  className="font-bold text-sky-800 hover:text-orange-600 text-sm"
                >
                  {companyInfo.phone}
                </a>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-500 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>LINE ID:</span>
                </span>
                <a
                  href={`https://line.me/ti/p/~${companyInfo.lineId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-emerald-700 hover:underline text-sm"
                >
                  {companyInfo.lineId}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${companyInfo.phone.replace(/[^0-9]/g, '')}`}
                className="flex-1 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{t.contact.callDirectorBtn} ({companyInfo.phone})</span>
              </a>
              <a
                href={`https://line.me/ti/p/~${companyInfo.lineId}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.contact.chatLineBtn} (@{companyInfo.lineId})</span>
              </a>
            </div>
          </div>
        </div>

        {/* Office Address & Business Info */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Address Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sky-900 font-bold text-base">
                <Building2 className="w-5 h-5 text-sky-700" />
                <span>{t.contact.officeTitle}</span>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                  <div className="leading-relaxed">
                    <strong className="text-slate-900 block font-semibold">{companyTitle}</strong>
                    <span>{companyInfo.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                  <div>
                    <span className="text-slate-500">{language === 'en' ? 'Official Email: ' : 'อีเมลทางการ: '}</span>
                    <a href={`mailto:${companyInfo.email}`} className="text-sky-700 hover:underline font-semibold">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FileCheck2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <div>
                    <span className="text-slate-500">{t.nav.legalTaxId}: </span>
                    <span className="font-mono font-semibold text-slate-900">{companyInfo.taxId}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                  <div>
                    <span className="text-slate-500">{t.contact.hoursLabel} </span>
                    <span className="font-medium text-slate-800">{t.contact.hoursValue}</span>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="pt-3 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-800 mb-2">
                  {t.contact.areasLabel}
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  {t.contact.areasValue}
                </div>
              </div>
            </div>

            {/* Interactive Map & Route Guidance */}
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex flex-col justify-between">
              <div className="p-4 bg-slate-800 text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold">{language === 'en' ? '3T Intercool Map Coordinates' : 'พิกัดแผนที่ บจก. 3ต อินเตอร์คูล'}</div>
                  <div className="text-[11px] text-slate-300">Chalongkrung 53, Lamplathio, Latkrabang, Bangkok</div>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{t.contact.mapDirectionsBtn}</span>
                </a>
              </div>

              <div className="h-48 sm:h-56 relative bg-slate-200 flex items-center justify-center overflow-hidden">
                <iframe
                  title="3T Intercool Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?q=109/94%20Chalongkrung%2053%20Lamplathio%20Latkrabang%20Bangkok&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>

              <div className="p-3 bg-white border-t border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
                <span>{language === 'en' ? 'Near KMITL University & Ladkrabang Industrial Estate' : 'ใกล้สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง & นิคมฯ ลาดกระบัง'}</span>
                <span className="font-semibold text-emerald-700">{language === 'en' ? 'Easy Access' : 'เดินทางสะดวก'}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
