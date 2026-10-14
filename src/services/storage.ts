import { CompanyInfo, ServiceItem, QuotationRequest } from '../types';
import { DEFAULT_COMPANY_INFO, DEFAULT_SERVICES, INITIAL_QUOTATIONS } from '../data/defaultData';

const COMPANY_INFO_KEY = '3t_intercool_company_info';
const SERVICES_KEY = '3t_intercool_services';
const QUOTATIONS_KEY = '3t_intercool_quotations';

export function getCompanyInfo(): CompanyInfo {
  try {
    const raw = localStorage.getItem(COMPANY_INFO_KEY);
    if (!raw) return DEFAULT_COMPANY_INFO;
    const parsed = JSON.parse(raw);
    delete parsed.managerTh;
    delete parsed.managerEn;
    delete parsed.managerPhone;
    delete parsed.managerLineId;
    return { ...DEFAULT_COMPANY_INFO, ...parsed };
  } catch {
    return DEFAULT_COMPANY_INFO;
  }
}

export function saveCompanyInfo(info: CompanyInfo): void {
  try {
    localStorage.setItem(COMPANY_INFO_KEY, JSON.stringify(info));
    window.dispatchEvent(new CustomEvent('3t_company_updated', { detail: info }));
  } catch (err) {
    console.error('Error saving company info', err);
  }
}

export function getServices(): ServiceItem[] {
  try {
    const raw = localStorage.getItem(SERVICES_KEY);
    if (!raw) return DEFAULT_SERVICES;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    return DEFAULT_SERVICES;
  } catch {
    return DEFAULT_SERVICES;
  }
}

export function saveServices(services: ServiceItem[]): void {
  try {
    localStorage.setItem(SERVICES_KEY, JSON.stringify(services));
    window.dispatchEvent(new CustomEvent('3t_services_updated', { detail: services }));
  } catch (err) {
    console.error('Error saving services', err);
  }
}

export function getQuotations(): QuotationRequest[] {
  try {
    const raw = localStorage.getItem(QUOTATIONS_KEY);
    if (!raw) return INITIAL_QUOTATIONS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    return INITIAL_QUOTATIONS;
  } catch {
    return INITIAL_QUOTATIONS;
  }
}

export function saveQuotations(quotes: QuotationRequest[]): void {
  try {
    localStorage.setItem(QUOTATIONS_KEY, JSON.stringify(quotes));
    window.dispatchEvent(new CustomEvent('3t_quotations_updated', { detail: quotes }));
  } catch (err) {
    console.error('Error saving quotations', err);
  }
}

export function addQuotation(quote: Omit<QuotationRequest, 'id' | 'createdAt' | 'status'>): QuotationRequest {
  const quotes = getQuotations();
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const newId = `3T-${dateStr.slice(0, 6)}-${randomSuffix}`;

  const newQuote: QuotationRequest = {
    ...quote,
    id: newId,
    createdAt: new Date().toISOString(),
    status: 'PENDING'
  };

  const updated = [newQuote, ...quotes];
  saveQuotations(updated);
  return newQuote;
}

export function updateQuotation(id: string, updates: Partial<QuotationRequest>): void {
  const quotes = getQuotations();
  const updated = quotes.map(q => q.id === id ? { ...q, ...updates } : q);
  saveQuotations(updated);
}

export function deleteQuotation(id: string): void {
  const quotes = getQuotations();
  const updated = quotes.filter(q => q.id !== id);
  saveQuotations(updated);
}
