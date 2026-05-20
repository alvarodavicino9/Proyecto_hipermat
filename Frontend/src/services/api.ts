const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

async function fetchAPI<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`API error ${res.status}: ${res.statusText}`);
  return res.json();
}

// ── Products ──────────────────────────────────────────────

export interface APIProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  unit: string;
}

export interface APICategory {
  id: string;
  name: string;
  icon: string;
  productCount: number;
}

export async function fetchProducts(params?: {
  category?: string;
  search?: string;
  limit?: number;
}): Promise<{ data: APIProduct[]; total: number }> {
  const qs = new URLSearchParams();
  if (params?.category) qs.set('category', params.category);
  if (params?.search) qs.set('search', params.search);
  if (params?.limit) qs.set('limit', String(params.limit));
  return fetchAPI(`/products?${qs}`);
}

export async function fetchCategories(): Promise<{ data: APICategory[] }> {
  return fetchAPI('/categories');
}

// ── Contact ───────────────────────────────────────────────

export interface QuoteItem {
  name: string;
  quantity: number;
  unit: string;
  notes?: string;
}

export async function sendQuoteToAPI(payload: {
  items: QuoteItem[];
  customerName?: string;
  customerPhone?: string;
  notes?: string;
}): Promise<{ whatsappUrl: string }> {
  return fetchAPI('/contact/quote', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function sendMessageToAPI(payload: {
  name: string;
  phone?: string;
  message: string;
}): Promise<{ whatsappUrl: string }> {
  return fetchAPI('/contact/message', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
