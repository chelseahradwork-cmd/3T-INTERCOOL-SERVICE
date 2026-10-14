import React, { useState, useEffect } from 'react';
import { ServiceCategory } from '../types';
import { addQuotation } from '../services/storage';
import { useLanguage } from '../context/LanguageContext';
import { 
  Calculator, 
  Send, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  Clock, 
  FileCheck, 
  Sparkles, 
  Info,
  Calendar,
  MapPin,
  Building,
  User,
  AlertCircle
} from 'lucide-react';

interface QuoteSectionProps {
  initialCategory: ServiceCategory;
  phone: string;
  lineId: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ initialCategory, phone, lineId }) => {
  const { language, t } = useLanguage();
  const [category, setCategory] = useState<ServiceCategory>(initialCategory);
  const [serviceType, setServiceType] = useState('ติดตั้งใหม่');
  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactLine, setContactLine] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);

  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!customerName.trim()) {
      setErrorMsg(language === 'en' ? 'Please enter contact person or company name' : 'กรุณากรอกชื่อผู้ติดต่อ หรือชื่อบริษัท');
      return;
    }
    if (!contactPhone.trim() || contactPhone.replace(/[^0-9]/g, '').length < 8) {
      setErrorMsg(language === 'en' ? 'Please enter a valid telephone number' : 'กรุณากรอกเบอร์โทรศัพท์สำหรับติดต่อกลับให้ถูกต้อง');
      return;
    }
    if (!location.trim()) {
      setErrorMsg(language === 'en' ? 'Please enter the project location or district' : 'กรุณาระบุสถานที่หรือพื้นที่ปฏิบัติงาน (เช่น ลาดกระบัง, บางนา, ชลบุรี ฯลฯ)');
      return;
    }

    setIsSubmitting(true);

    try {
      const newQuote = addQuotation({
        customerName: customerName.trim(),
        companyName: companyName.trim() || undefined,
        phone: contactPhone.trim(),
        lineId: contactLine.trim() || undefined,
        email: contactEmail.trim() || undefined,
        category,
        serviceType,
        location: location.trim(),
        details: details.trim(),
        isUrgent,
        preferredDate: preferredDate || undefined
      });

      setSubmittedId(newQuote.id);
    } catch {
      setErrorMsg(language === 'en' 
        ? `Error saving quotation request. Please try again or call ${phone} directly.` 
        : `เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง หรือโทรติดต่อ ${phone} โดยตรง`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmittedId(null);
    setCustomerName('');
    setCompanyName('');
    setContactPhone('');
    setContactLine('');
    setContactEmail('');
    setLocation('');
    setDetails('');
    setPreferredDate('');
    setIsUrgent(false);
  };

  const systemOptions = [
    { id: 'AIR_CONDITIONING', label: language === 'en' ? 'Air Conditioning' : 'เครื่องปรับอากาศ' },
    { id: 'COLD_ROOM', label: language === 'en' ? 'Cold Storage Room' : 'ห้องเย็น' },
    { id: 'DUCT_PIPE', label: language === 'en' ? 'Ductwork & Ventilation' : 'งานท่อลม' },
    { id: 'CHILLER', label: language === 'en' ? 'Water Chiller' : 'ชิลเลอร์' },
    { id: 'FREEZER_SHOWCASE', label: language === 'en' ? 'Commercial Freezers' : 'ตู้แช่ทุกประเภท' },
  ];

  return (
    <section id="calculator" className="py-20 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-slate-200 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-outfit uppercase tracking-widest text-xs font-bold text-sky-800">
              <span className="w-2.5 h-0.5 bg-orange-500" />
              <span>{t.quote.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {t.quote.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              {t.quote.subtitle}
            </p>
          </div>
        </div>

        {/* 3 Step Workflow Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-600 text-white font-bold text-sm flex items-center justify-center shrink-0 font-outfit">
              1
            </div>
            <div>
              <div className="font-bold text-xs text-sky-950">
                {language === 'en' ? 'Direct System Submission' : 'ส่งเข้าสู่ระบบบริษัท'}
              </div>
              <div className="text-[11px] text-slate-600 leading-normal">
                {language === 'en' ? 'Request is dispatched directly to our engineering system.' : 'ข้อมูลคำขอจะถูกส่งตรงเข้าสู่ฐานข้อมูล บจก. 3ต อินเตอร์คูล ทันที'}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-orange-50 border border-orange-100 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-600 text-white font-bold text-sm flex items-center justify-center shrink-0 font-outfit">
              2
            </div>
            <div>
              <div className="font-bold text-xs text-orange-950">
                {language === 'en' ? 'Prompt Engineer Callback' : 'การติดต่อกลับ'}
              </div>
              <div className="text-[11px] text-slate-600 leading-normal">
                {language === 'en' ? 'Our field technician will call to verify cooling loads & dimensions.' : 'ทีมช่างจะโทรติดต่อกลับผ่านเบอร์โทรศัพท์ที่ท่านระบุ เพื่อยืนยันขนาดและสเปก'}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0 font-outfit">
              3
            </div>
            <div>
              <div className="font-bold text-xs text-emerald-950">
                {language === 'en' ? 'Formal Quotation Document' : 'จัดส่งเอกสารใบเสนอราคา'}
              </div>
              <div className="text-[11px] text-slate-600 leading-normal">
                {language === 'en' ? 'Receive itemized BOQ and official quotation via LINE or Email.' : 'จัดส่งไฟล์ใบเสนอราคาทางการผ่าน LINE ID หรือ อีเมล ที่ระบุไว้'}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-4xl mx-auto">
          {submittedId ? (
            /* Submission Success View */
            <div className="rounded-2xl bg-gradient-to-b from-emerald-50/70 to-white border-2 border-emerald-300 p-8 sm:p-10 text-center space-y-6 shadow-xl animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900">
                  {t.quote.successTitle}
                </h3>
                <p className="text-sm text-slate-600">
                  {t.quote.successMessage}
                </p>
              </div>

              {/* Reference Code Box */}
              <div className="inline-block p-4 rounded-xl bg-white border border-emerald-200 shadow-xs">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-outfit">
                  {t.quote.trackingIdLabel}
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-black text-sky-900 pt-1 tracking-wider">
                  {submittedId}
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 text-left space-y-1.5 max-w-lg mx-auto">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'en' ? 'Next steps for your request:' : 'สถานะการดำเนินงานของฝ่ายบริการ:'}</span>
                </div>
                <p>{language === 'en' ? '1. Assigned to designated regional engineering manager.' : '1. ข้อมูลถูกส่งถึงทีมงานผู้รับผิดชอบพื้นที่แล้ว'}</p>
                <p>{language === 'en' ? '2. Senior engineer will call to schedule physical site survey.' : '2. ช่างผู้เชี่ยวชาญจะโทรยืนยันขนาดและนัดหมายเวลาเข้าตรวจสอบ'}</p>
                <p>{language === 'en' ? '3. Official itemized proposal delivered via LINE or Email.' : '3. เจ้าหน้าที่จะจัดส่งไฟล์ใบเสนอราคาอย่างเป็นทางการให้ทาง LINE หรือ อีเมล'}</p>
              </div>

              {/* Direct Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.quote.emergencyCall} ({phone})</span>
                </a>

                <a
                  href={`https://line.me/ti/p/~${lineId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>LINE: @{lineId}</span>
                </a>

                <button
                  onClick={handleResetForm}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs transition-colors cursor-pointer"
                >
                  {t.quote.newQuoteBtn}
                </button>
              </div>
            </div>
          ) : (
            /* Quotation Request Form */
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-lg space-y-6">
              
              {errorMsg && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* System Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  {t.quote.systemLabel} <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                  {systemOptions.map((sys) => (
                    <button
                      key={sys.id}
                      type="button"
                      onClick={() => setCategory(sys.id as ServiceCategory)}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                        category === sys.id
                          ? 'bg-sky-800 border-sky-800 text-white shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {sys.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Type Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  {t.quote.jobTypeLabel}
                </label>
                <div className="flex flex-wrap gap-2">
                  {t.quote.jobTypes.map((job) => (
                    <button
                      key={job.id}
                      type="button"
                      onClick={() => setServiceType(job.label)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                        serviceType === job.label
                          ? 'bg-orange-500 border-orange-500 text-white'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {job.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information Fields */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  {language === 'en' ? 'Contact Details & Site Location' : '3. ข้อมูลผู้ติดต่อและสถานที่นัดหมาย'}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.quote.nameLabel} <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder={t.quote.namePlaceholder}
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.quote.phoneLabel} <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        placeholder={t.quote.phonePlaceholder}
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.quote.lineLabel}
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder={t.quote.linePlaceholder}
                        value={contactLine}
                        onChange={(e) => setContactLine(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.quote.locationLabel} <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder={t.quote.locationPlaceholder}
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.quote.emailLabel}
                    </label>
                    <input
                      type="email"
                      placeholder={t.quote.emailPlaceholder}
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.quote.preferredDateLabel}
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder={language === 'en' ? 'e.g., Next Monday or specific date' : 'เช่น วันเสาร์นี้ หรือ ระบุวันที่'}
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.quote.detailsLabel}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={t.quote.detailsPlaceholder}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                  />
                </div>

                {/* Urgent Checkbox */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="urgentCheck"
                    checked={isUrgent}
                    onChange={(e) => setIsUrgent(e.target.checked)}
                    className="w-4 h-4 text-orange-600 rounded border-slate-300 focus:ring-orange-500 cursor-pointer"
                  />
                  <label htmlFor="urgentCheck" className="text-xs text-slate-700 font-medium cursor-pointer">
                    {t.quote.urgentCheckbox}
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-sky-600" />
                  <span>{language === 'en' ? 'Encrypted direct transmission to certified engineer' : 'ข้อมูลจะถูกเข้ารหัสและส่งตรงถึงวิศวกรผู้ดูแลพื้นที่'}</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-sm shadow-md shadow-orange-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? t.quote.submittingBtn : t.quote.submitBtn}</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
