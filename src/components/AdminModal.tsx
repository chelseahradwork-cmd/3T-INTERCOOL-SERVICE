import React, { useState } from 'react';
import { CompanyInfo, ServiceItem, QuotationRequest, QuotationStatus, ServiceCategory } from '../types';
import { 
  updateQuotation, 
  deleteQuotation, 
  addQuotation, 
  saveCompanyInfo, 
  saveServices 
} from '../services/storage';
import { 
  X, 
  Search, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  FileText, 
  Settings, 
  Layers, 
  BarChart3, 
  Plus, 
  Trash2, 
  Save, 
  Building, 
  ExternalLink,
  Lock,
  Unlock,
  Printer
} from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyInfo: CompanyInfo;
  services: ServiceItem[];
  quotations: QuotationRequest[];
  onCompanyUpdate: (info: CompanyInfo) => void;
  onServicesUpdate: (services: ServiceItem[]) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  companyInfo,
  services,
  quotations,
  onCompanyUpdate,
  onServicesUpdate
}) => {
  const [activeTab, setActiveTab] = useState<'QUOTES' | 'NEW_QUOTE' | 'SERVICES' | 'COMPANY' | 'STATS'>('QUOTES');
  
  // Quotes filter & search
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [selectedQuoteId, setSelectedQuoteId] = useState<string | null>(
    quotations.length > 0 ? quotations[0].id : null
  );

  // Selected quote internal notes editing
  const [currentNote, setCurrentNote] = useState('');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);

  // Company Edit Form State
  const [companyForm, setCompanyForm] = useState<CompanyInfo>(companyInfo);

  // Services Edit Form State
  const [servicesList, setServicesList] = useState<ServiceItem[]>(services);

  // New Quote Manual Form State
  const [newQuoteCustomer, setNewQuoteCustomer] = useState('');
  const [newQuoteCompany, setNewQuoteCompany] = useState('');
  const [newQuotePhone, setNewQuotePhone] = useState('');
  const [newQuoteCategory, setNewQuoteCategory] = useState<ServiceCategory>('AIR_CONDITIONING');
  const [newQuoteType, setNewQuoteType] = useState('ติดตั้งใหม่');
  const [newQuoteLocation, setNewQuoteLocation] = useState('');
  const [newQuoteDetails, setNewQuoteDetails] = useState('');

  if (!isOpen) return null;

  const selectedQuote = quotations.find(q => q.id === selectedQuoteId) || quotations[0];

  const handleSelectQuote = (quote: QuotationRequest) => {
    setSelectedQuoteId(quote.id);
    setCurrentNote(quote.internalNotes || '');
    setSaveSuccessMsg(null);
  };

  const handleUpdateStatus = (status: QuotationStatus) => {
    if (!selectedQuote) return;
    updateQuotation(selectedQuote.id, { status });
  };

  const handleSaveNotes = () => {
    if (!selectedQuote) return;
    updateQuotation(selectedQuote.id, { internalNotes: currentNote });
    setSaveSuccessMsg('บันทึกโน้ตเรียบร้อย');
    setTimeout(() => setSaveSuccessMsg(null), 2500);
  };

  const handleDeleteQuote = (id: string) => {
    if (window.confirm('ยืนยันที่จะลบรายการคำขอนี้หรือไม่?')) {
      deleteQuotation(id);
      if (selectedQuoteId === id) {
        setSelectedQuoteId(null);
      }
    }
  };

  const handleCreateManualQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuoteCustomer.trim() || !newQuotePhone.trim()) {
      alert('กรุณากรอกชื่อลูกค้าและเบอร์โทรศัพท์');
      return;
    }

    const created = addQuotation({
      customerName: newQuoteCustomer.trim(),
      companyName: newQuoteCompany.trim() || undefined,
      phone: newQuotePhone.trim(),
      category: newQuoteCategory,
      serviceType: newQuoteType,
      location: newQuoteLocation.trim() || 'กทม.',
      details: newQuoteDetails.trim()
    });

    setNewQuoteCustomer('');
    setNewQuoteCompany('');
    setNewQuotePhone('');
    setNewQuoteLocation('');
    setNewQuoteDetails('');
    setSelectedQuoteId(created.id);
    setActiveTab('QUOTES');
  };

  const handleSaveCompany = (e: React.FormEvent) => {
    e.preventDefault();
    saveCompanyInfo(companyForm);
    onCompanyUpdate(companyForm);
    setSaveSuccessMsg('บันทึกข้อมูลบริษัทเรียบร้อย');
    setTimeout(() => setSaveSuccessMsg(null), 2500);
  };

  const handleToggleServiceActive = (id: string) => {
    const updated = servicesList.map(s => s.id === id ? { ...s, isActive: !s.isActive } : s);
    setServicesList(updated);
    saveServices(updated);
    onServicesUpdate(updated);
  };

  const getStatusBadge = (status: QuotationStatus) => {
    switch (status) {
      case 'PENDING':
        return <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800">รอดำเนินการ</span>;
      case 'CONTACTED':
        return <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-sky-100 text-sky-800">ติดต่อลูกค้าแล้ว</span>;
      case 'QUOTED':
        return <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800">เสนอราคาเรียบร้อย</span>;
      case 'SCHEDULED':
        return <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-purple-100 text-purple-800">นัดหมายดูหน้างาน</span>;
      case 'COMPLETED':
        return <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">ดำเนินงานสำเร็จ</span>;
      case 'CANCELLED':
        return <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-rose-100 text-rose-800">ยกเลิก</span>;
      default:
        return <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-800">{status}</span>;
    }
  };

  const filteredQuotes = quotations
    .filter(q => statusFilter === 'ALL' || q.status === statusFilter)
    .filter(q => {
      if (!searchQuery.trim()) return true;
      const s = searchQuery.toLowerCase();
      return (
        q.customerName.toLowerCase().includes(s) ||
        (q.companyName && q.companyName.toLowerCase().includes(s)) ||
        q.phone.includes(s) ||
        q.location.toLowerCase().includes(s) ||
        q.id.toLowerCase().includes(s)
      );
    });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden border border-slate-200">
        
        {/* Modal Top Header */}
        <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-600 flex items-center justify-center font-black text-sm">
              3T
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm text-white">ระบบจัดการข้อมูล บจก. 3ต อินเตอร์คูล</h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-900 text-sky-300 border border-sky-700">
                  ADMIN PORTAL
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                จัดการคำขอใบเสนอราคา, สเปกบริการ, และข้อมูลบริษัท
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="px-5 py-2.5 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <button
              onClick={() => setActiveTab('QUOTES')}
              className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'QUOTES' ? 'bg-white text-sky-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-sky-600" />
              <span>คำขอเสนอราคา ({quotations.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('NEW_QUOTE')}
              className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'NEW_QUOTE' ? 'bg-white text-sky-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Plus className="w-3.5 h-3.5 text-orange-600" />
              <span>บันทึกคำขอใหม่</span>
            </button>

            <button
              onClick={() => setActiveTab('SERVICES')}
              className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'SERVICES' ? 'bg-white text-sky-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              <span>จัดการบริการ 5 ระบบ</span>
            </button>

            <button
              onClick={() => setActiveTab('COMPANY')}
              className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'COMPANY' ? 'bg-white text-sky-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building className="w-3.5 h-3.5 text-teal-600" />
              <span>ข้อมูลบริษัท & ประกาศ</span>
            </button>

            <button
              onClick={() => setActiveTab('STATS')}
              className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'STATS' ? 'bg-white text-sky-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
              <span>สถิติและภาพรวม</span>
            </button>
          </div>

          {saveSuccessMsg && (
            <div className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 animate-in fade-in">
              ✓ {saveSuccessMsg}
            </div>
          )}
        </div>

        {/* Modal Main Body */}
        <div className="flex-1 overflow-y-auto p-5">
          
          {/* TAB 1: QUOTATIONS LIST & DETAIL */}
          {activeTab === 'QUOTES' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-full">
              
              {/* Left Column: List with Filter & Search (5 cols) */}
              <div className="lg:col-span-5 flex flex-col space-y-3">
                {/* Search & Filter */}
                <div className="space-y-2">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="ค้นหาชื่อลูกค้า, เบอร์โทร, สถานที่..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                    />
                  </div>

                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-slate-50 text-slate-700 font-medium"
                  >
                    <option value="ALL">สถานะทั้งหมด ({quotations.length})</option>
                    <option value="PENDING">รอดำเนินการ</option>
                    <option value="CONTACTED">ติดต่อลูกค้าแล้ว</option>
                    <option value="QUOTED">เสนอราคาเรียบร้อย</option>
                    <option value="SCHEDULED">นัดหมายดูหน้างาน</option>
                    <option value="COMPLETED">ดำเนินงานสำเร็จ</option>
                    <option value="CANCELLED">ยกเลิก</option>
                  </select>
                </div>

                {/* List items */}
                <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                  {filteredQuotes.length === 0 ? (
                    <div className="p-8 text-center text-xs text-slate-400 bg-slate-50 rounded-xl">
                      ไม่พบคำขอตามเงื่อนไขที่เลือก
                    </div>
                  ) : (
                    filteredQuotes.map((quote) => {
                      const isSelected = selectedQuote?.id === quote.id;
                      return (
                        <div
                          key={quote.id}
                          onClick={() => handleSelectQuote(quote)}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left space-y-1.5 ${
                            isSelected
                              ? 'bg-sky-50/80 border-sky-400 shadow-xs'
                              : 'bg-white border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] font-bold text-slate-500">
                              {quote.id}
                            </span>
                            {getStatusBadge(quote.status)}
                          </div>

                          <div className="font-bold text-xs text-slate-900 leading-snug">
                            {quote.customerName}
                            {quote.companyName && (
                              <span className="block text-[11px] font-normal text-slate-500">
                                {quote.companyName}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between text-[11px] text-slate-600">
                            <span className="text-sky-700 font-semibold">{quote.serviceType}</span>
                            <span>{quote.location.split(',')[0]}</span>
                          </div>

                          {quote.isUrgent && (
                            <div className="text-[10px] text-rose-600 font-bold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping" />
                              <span>งานด่วนฉุกเฉิน</span>
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Right Column: Selected Quote Details & Actions (7 cols) */}
              <div className="lg:col-span-7">
                {selectedQuote ? (
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-5">
                    
                    {/* Header of Detail */}
                    <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-sky-900 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                            {selectedQuote.id}
                          </span>
                          {selectedQuote.isUrgent && (
                            <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-700 text-[10px] font-bold">
                              งานด่วน
                            </span>
                          )}
                        </div>
                        <h4 className="text-base font-bold text-slate-900 mt-1">
                          {selectedQuote.customerName}
                        </h4>
                        {selectedQuote.companyName && (
                          <p className="text-xs text-slate-500">{selectedQuote.companyName}</p>
                        )}
                      </div>

                      <div className="text-right">
                        <div className="text-[11px] text-slate-400">
                          {new Date(selectedQuote.createdAt).toLocaleString('th-TH')}
                        </div>
                        <div className="mt-1">{getStatusBadge(selectedQuote.status)}</div>
                      </div>
                    </div>

                    {/* Contact details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-sky-600" />
                        <div>
                          <span className="text-slate-400 block text-[10px]">เบอร์โทร:</span>
                          <a href={`tel:${selectedQuote.phone}`} className="font-bold text-sky-800 hover:underline">
                            {selectedQuote.phone}
                          </a>
                        </div>
                      </div>

                      {selectedQuote.lineId && (
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-emerald-600" />
                          <div>
                            <span className="text-slate-400 block text-[10px]">LINE ID:</span>
                            <a 
                              href={`https://line.me/ti/p/~${selectedQuote.lineId}`} 
                              target="_blank" 
                              rel="noreferrer"
                              className="font-bold text-emerald-700 hover:underline"
                            >
                              {selectedQuote.lineId}
                            </a>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-600" />
                        <div>
                          <span className="text-slate-400 block text-[10px]">สถานที่หน้างาน:</span>
                          <span className="font-semibold text-slate-800">{selectedQuote.location}</span>
                        </div>
                      </div>

                      {selectedQuote.preferredDate && (
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-indigo-600" />
                          <div>
                            <span className="text-slate-400 block text-[10px]">วันที่สะดวกนัดหมาย:</span>
                            <span className="font-semibold text-slate-800">{selectedQuote.preferredDate}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Scope & Details */}
                    <div className="space-y-1.5 text-xs">
                      <div className="font-bold text-slate-700 flex items-center justify-between">
                        <span>รายละเอียดและอาการที่แจ้ง:</span>
                        <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                          {selectedQuote.category} • {selectedQuote.serviceType}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 whitespace-pre-wrap leading-relaxed">
                        {selectedQuote.details || 'ไม่มีรายละเอียดเพิ่มเติม'}
                      </div>
                    </div>

                    {/* Change Status Buttons */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        เปลี่ยนสถานะการดำเนินงาน:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {(['PENDING', 'CONTACTED', 'QUOTED', 'SCHEDULED', 'COMPLETED', 'CANCELLED'] as QuotationStatus[]).map((st) => (
                          <button
                            key={st}
                            onClick={() => handleUpdateStatus(st)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                              selectedQuote.status === st
                                ? 'bg-sky-800 text-white shadow-xs'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {st === 'PENDING' && 'รอดำเนินการ'}
                            {st === 'CONTACTED' && 'ติดต่อแล้ว'}
                            {st === 'QUOTED' && 'เสนอราคาแล้ว'}
                            {st === 'SCHEDULED' && 'นัดดูหน้างาน'}
                            {st === 'COMPLETED' && 'เสร็จสิ้น'}
                            {st === 'CANCELLED' && 'ยกเลิก'}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Internal Notes */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                          บันทึกโน้ตภายใน (สำหรับทีมช่าง/ฝ่ายขาย):
                        </label>
                        <button
                          onClick={handleSaveNotes}
                          className="px-3 py-1 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Save className="w-3 h-3" />
                          <span>บันทึกโน้ต</span>
                        </button>
                      </div>
                      <textarea
                        rows={2}
                        value={currentNote}
                        onChange={(e) => setCurrentNote(e.target.value)}
                        placeholder="เช่น เสนอราคาแอร์ 28,000 บาท หรือนัดดูหน้างานวันเสาร์ที่ 18..."
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                      />
                    </div>

                    {/* Bottom Action bar */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${selectedQuote.phone}`}
                          className="px-3 py-1.5 rounded-lg bg-orange-600 text-white text-xs font-bold flex items-center gap-1.5"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>โทรหาลูกค้า</span>
                        </a>
                        <button
                          onClick={() => window.print()}
                          className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                        >
                          <Printer className="w-3.5 h-3.5" />
                          <span>พิมพ์ใบงาน</span>
                        </button>
                      </div>

                      <button
                        onClick={() => handleDeleteQuote(selectedQuote.id)}
                        className="text-xs text-rose-600 hover:text-rose-800 p-1.5 rounded-lg hover:bg-rose-50 flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>ลบรายการนี้</span>
                      </button>
                    </div>

                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center p-12 text-slate-400 text-xs">
                    คลิกเลือกรายการคำขอทางด้านซ้ายเพื่อดูรายละเอียด
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 2: RECORD NEW MANUAL QUOTATION */}
          {activeTab === 'NEW_QUOTE' && (
            <div className="max-w-2xl mx-auto py-4">
              <form onSubmit={handleCreateManualQuote} className="space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h4 className="text-base font-bold text-slate-900">
                    บันทึกคำขอเสนอราคาใหม่ (รับสายโทรศัพท์ / ติดต่อหน้าร้าน)
                  </h4>
                  <p className="text-xs text-slate-500">
                    กรอกข้อมูลคำขอเพื่อส่งเข้าสู่ระบบงานของ บจก. 3ต อินเตอร์คูล ทันที
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      ชื่อลูกค้า <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="เช่น คุณธวัชชัย"
                      value={newQuoteCustomer}
                      onChange={(e) => setNewQuoteCustomer(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">ชื่อบริษัท / องค์กร</label>
                    <input
                      type="text"
                      placeholder="เช่น บจก. ตัวอย่าง อินดัสทรี"
                      value={newQuoteCompany}
                      onChange={(e) => setNewQuoteCompany(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      เบอร์โทรศัพท์ <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="เช่น 081-5163898"
                      value={newQuotePhone}
                      onChange={(e) => setNewQuotePhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">สถานที่ดูหน้างาน</label>
                    <input
                      type="text"
                      placeholder="เช่น ลาดกระบัง, กทม."
                      value={newQuoteLocation}
                      onChange={(e) => setNewQuoteLocation(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">งานระบบ</label>
                    <select
                      value={newQuoteCategory}
                      onChange={(e) => setNewQuoteCategory(e.target.value as ServiceCategory)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    >
                      <option value="AIR_CONDITIONING">เครื่องปรับอากาศ (Air Conditioning)</option>
                      <option value="COLD_ROOM">ห้องเย็น (Cold Room)</option>
                      <option value="DUCT_PIPE">งานท่อลม (Duct Pipe)</option>
                      <option value="CHILLER">ชิลเลอร์ (Chiller)</option>
                      <option value="FREEZER_SHOWCASE">ตู้แช่ทุกประเภท</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">ประเภทบริการ</label>
                    <select
                      value={newQuoteType}
                      onChange={(e) => setNewQuoteType(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    >
                      <option value="ติดตั้งใหม่">ติดตั้งใหม่</option>
                      <option value="ซ่อมบำรุง / แก้ไขปัญหา">ซ่อมบำรุง / แก้ไขปัญหา</option>
                      <option value="ล้างทำความสะอาด / บำรุงรักษา PM">ล้างทำความสะอาด / บำรุงรักษา PM</option>
                      <option value="ออกแบบและวางระบบ">ออกแบบและวางระบบ</option>
                      <option value="ตรวจเช็คประเมินอาการ">ตรวจเช็คประเมินอาการ</option>
                    </select>
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block font-bold text-slate-700 mb-1">รายละเอียดงาน</label>
                  <textarea
                    rows={3}
                    placeholder="รายละเอียดอาการ หรือขอบเขตงาน..."
                    value={newQuoteDetails}
                    onChange={(e) => setNewQuoteDetails(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>บันทึกลงระบบจัดการ</span>
                </button>
              </form>
            </div>
          )}

          {/* TAB 3: SERVICES CATALOG MANAGEMENT */}
          {activeTab === 'SERVICES' && (
            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="border-b border-slate-200 pb-3">
                <h4 className="text-base font-bold text-slate-900">
                  จัดการรายการบริการ (5 ระบบหลัก)
                </h4>
                <p className="text-xs text-slate-500">
                  ข้อมูลบริการจะแสดงผลบนหน้าเว็บไซต์ทันที
                </p>
              </div>

              <div className="space-y-3">
                {servicesList.map((srv) => (
                  <div
                    key={srv.id}
                    className="p-4 rounded-xl border border-slate-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-slate-900">{srv.title}</span>
                        {srv.badge && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-sky-50 text-sky-700 font-semibold">
                            {srv.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">{srv.summary}</p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleToggleServiceActive(srv.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                          srv.isActive
                            ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                            : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                        }`}
                      >
                        {srv.isActive ? '✓ เปิดแสดง' : '✕ ปิดซ่อน'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: COMPANY PROFILE & ANNOUNCEMENT */}
          {activeTab === 'COMPANY' && (
            <div className="max-w-3xl mx-auto py-2">
              <form onSubmit={handleSaveCompany} className="space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h4 className="text-base font-bold text-slate-900">
                    แก้ไขข้อมูลบริษัท (อ้างอิงข้อมูลจากนามบัตรบริษัท 3ต อินเตอร์คูล แอนด์ เซอร์วิส จำกัด)
                  </h4>
                  <p className="text-xs text-slate-500">
                    อัปเดตเบอร์โทรผู้บริหาร, LINE ID, ที่อยู่ และข้อความประกาศด่วน
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">ชื่อบริษัท (ภาษาไทย)</label>
                    <input
                      type="text"
                      value={companyForm.companyNameTh}
                      onChange={(e) => setCompanyForm({ ...companyForm, companyNameTh: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">ชื่อบริษัท (ภาษาอังกฤษ)</label>
                    <input
                      type="text"
                      value={companyForm.companyNameEn}
                      onChange={(e) => setCompanyForm({ ...companyForm, companyNameEn: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">ชื่อผู้บริหาร (กรรมการผู้จัดการ)</label>
                    <input
                      type="text"
                      value={companyForm.managingDirectorTh}
                      onChange={(e) => setCompanyForm({ ...companyForm, managingDirectorTh: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">เบอร์โทรศัพท์ (คุณธวัชชัย)</label>
                    <input
                      type="text"
                      value={companyForm.phone}
                      onChange={(e) => setCompanyForm({ ...companyForm, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">LINE ID (คุณธวัชชัย)</label>
                    <input
                      type="text"
                      value={companyForm.lineId}
                      onChange={(e) => setCompanyForm({ ...companyForm, lineId: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">อีเมลทางการของบริษัท</label>
                    <input
                      type="email"
                      value={companyForm.email}
                      onChange={(e) => setCompanyForm({ ...companyForm, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">เลขทะเบียนนิติบุคคล</label>
                    <input
                      type="text"
                      value={companyForm.taxId}
                      onChange={(e) => setCompanyForm({ ...companyForm, taxId: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block font-bold text-slate-700 mb-1">ที่อยู่สำนักงาน</label>
                  <input
                    type="text"
                    value={companyForm.address}
                    onChange={(e) => setCompanyForm({ ...companyForm, address: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>

                <div className="text-xs">
                  <label className="block font-bold text-slate-700 mb-1">
                    ประกาศด่วน / ข่าวสารบริการ (แสดงบนแถบบนสุดของเว็บ)
                  </label>
                  <textarea
                    rows={2}
                    value={companyForm.announcement}
                    onChange={(e) => setCompanyForm({ ...companyForm, announcement: e.target.value })}
                    placeholder="เช่น เปิดรับงานติดตั้งระบบห้องเย็นโซนบางพลี-ลาดกระบัง"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-sky-800 hover:bg-sky-900 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>บันทึกข้อมูลบริษัท</span>
                </button>
              </form>
            </div>
          )}

          {/* TAB 5: STATS & OVERVIEW */}
          {activeTab === 'STATS' && (
            <div className="max-w-4xl mx-auto space-y-6 py-2">
              <div className="border-b border-slate-200 pb-3">
                <h4 className="text-base font-bold text-slate-900">
                  สถิติคำขอแยกตามงานระบบและสถานะ
                </h4>
                <p className="text-xs text-slate-500">
                  ภาพรวมปริมาณงานที่ลูกค้าส่งเข้ามาในระบบ
                </p>
              </div>

              {/* Status summary cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 font-medium">คำขอทั้งหมด</div>
                  <div className="text-2xl font-black text-slate-900 pt-1">{quotations.length}</div>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="text-amber-800 font-medium">รอดำเนินการ</div>
                  <div className="text-2xl font-black text-amber-700 pt-1">
                    {quotations.filter(q => q.status === 'PENDING').length}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-200">
                  <div className="text-purple-800 font-medium">นัดหมายดูหน้างาน</div>
                  <div className="text-2xl font-black text-purple-700 pt-1">
                    {quotations.filter(q => q.status === 'SCHEDULED').length}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="text-emerald-800 font-medium">ปิดงาน / เรียบร้อย</div>
                  <div className="text-2xl font-black text-emerald-700 pt-1">
                    {quotations.filter(q => q.status === 'COMPLETED').length}
                  </div>
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-3">
                <h5 className="font-bold text-xs text-slate-800">ปริมาณงานแบ่งตาม 5 ระบบหลัก:</h5>
                <div className="space-y-2 text-xs">
                  {[
                    { key: 'AIR_CONDITIONING', name: 'งานระบบเครื่องปรับอากาศ (Air Conditioning)' },
                    { key: 'COLD_ROOM', name: 'งานระบบห้องเย็น (Cold Room)' },
                    { key: 'DUCT_PIPE', name: 'งานระบบท่อลม (Duct Pipe)' },
                    { key: 'CHILLER', name: 'งานระบบชิลเลอร์ (Chiller)' },
                    { key: 'FREEZER_SHOWCASE', name: 'งานระบบตู้แช่ทุกประเภท' },
                  ].map((cat) => {
                    const count = quotations.filter(q => q.category === cat.key).length;
                    const pct = quotations.length > 0 ? Math.round((count / quotations.length) * 100) : 0;
                    return (
                      <div key={cat.key} className="space-y-1">
                        <div className="flex justify-between text-slate-700">
                          <span>{cat.name}</span>
                          <span className="font-bold">{count} รายการ ({pct}%)</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-sky-600 h-2 rounded-full"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
