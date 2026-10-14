export type ServiceCategory = 
  | 'AIR_CONDITIONING' 
  | 'COLD_ROOM' 
  | 'DUCT_PIPE' 
  | 'CHILLER' 
  | 'FREEZER_SHOWCASE';

export type QuotationStatus = 
  | 'PENDING'       // รอดำเนินการ
  | 'CONTACTED'     // ติดต่อลูกค้าแล้ว
  | 'QUOTED'        // เสนอราคาเรียบร้อย
  | 'SCHEDULED'     // นัดหมายดูหน้างาน
  | 'COMPLETED'     // ดำเนินงานสำเร็จ
  | 'CANCELLED';    // ยกเลิก

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  summary: string;
  features: string[];
  isActive: boolean;
  order: number;
  badge?: string;
}

export interface CompanyInfo {
  companyNameTh: string;
  companyNameEn: string;
  taxId: string;
  managingDirectorTh: string;
  managingDirectorEn: string;
  phone: string;
  lineId: string;
  managerTh?: string;
  managerEn?: string;
  managerPhone?: string;
  managerLineId?: string;
  email: string;
  address: string;
  announcement: string;
  businessHours: string;
  serviceAreas: string[];
}

export interface QuotationRequest {
  id: string;
  createdAt: string;
  customerName: string;
  companyName?: string;
  phone: string;
  lineId?: string;
  email?: string;
  category: ServiceCategory;
  serviceType: string;
  location: string;
  details: string;
  isUrgent?: boolean;
  preferredDate?: string;
  estimatedBudget?: string;
  status: QuotationStatus;
  internalNotes?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientCompany: string;
  clientPosition: string;
  projectTitle: string;
  category: ServiceCategory | 'ALL';
  categoryLabel: string;
  location: string;
  rating: number;
  quote: string;
  highlight: string;
  results: string[];
  date: string;
  verified: boolean;
  avatarText?: string;
  logoBadge?: string;
}
