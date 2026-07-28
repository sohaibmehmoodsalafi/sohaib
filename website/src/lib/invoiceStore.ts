// Invoice data types & localStorage persistence

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  countryCode?: string;
  company?: string;
  address?: string;
}

export interface InvoiceItem {
  description: string;
  qty: number;
  rate: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  client: Client;
  items: InvoiceItem[];
  status: "draft" | "sent" | "paid" | "overdue";
  currency: "PKR" | "USD" | "GBP" | "AED";
  taxPercent: number;
  discount: number;
  notes: string;
  createdAt: string;
  dueDate: string;
  paidAt?: string;
}

const INVOICES_KEY = "sm_invoices";
const CLIENTS_KEY = "sm_clients";
const COUNTER_KEY = "sm_invoice_counter";

// ── Helpers ──
function getLS<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}
function setLS<T>(key: string, val: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(val));
}

export function uid(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

// ── Invoice CRUD ──
export function getInvoices(): Invoice[] {
  return getLS<Invoice[]>(INVOICES_KEY, []);
}
export function getInvoice(id: string): Invoice | undefined {
  return getInvoices().find((i) => i.id === id);
}
export function saveInvoice(inv: Invoice) {
  const all = getInvoices();
  const idx = all.findIndex((i) => i.id === inv.id);
  if (idx >= 0) all[idx] = inv;
  else all.unshift(inv);
  setLS(INVOICES_KEY, all);
}
export function deleteInvoice(id: string) {
  setLS(INVOICES_KEY, getInvoices().filter((i) => i.id !== id));
}
export function nextInvoiceNumber(): string {
  const n = getLS<number>(COUNTER_KEY, 0) + 1;
  setLS(COUNTER_KEY, n);
  return `SM-${String(n).padStart(4, "0")}`;
}

// ── Client CRUD ──
export function getClients(): Client[] {
  return getLS<Client[]>(CLIENTS_KEY, []);
}
export function saveClient(c: Client) {
  const all = getClients();
  const idx = all.findIndex((x) => x.id === c.id);
  if (idx >= 0) all[idx] = c;
  else all.unshift(c);
  setLS(CLIENTS_KEY, all);
}
export function deleteClient(id: string) {
  setLS(CLIENTS_KEY, getClients().filter((c) => c.id !== id));
}

// ── Calculations ──
export function invoiceSubtotal(items: InvoiceItem[]): number {
  return items.reduce((s, i) => s + i.qty * i.rate, 0);
}
export function invoiceTax(items: InvoiceItem[], taxPercent: number): number {
  return invoiceSubtotal(items) * (taxPercent / 100);
}
export function invoiceTotal(inv: Invoice): number {
  const sub = invoiceSubtotal(inv.items);
  const tax = sub * (inv.taxPercent / 100);
  return sub + tax - inv.discount;
}

// ── Stats ──
export function invoiceStats() {
  const all = getInvoices();
  const total = all.length;
  const paid = all.filter((i) => i.status === "paid");
  const unpaid = all.filter((i) => i.status === "sent" || i.status === "overdue");
  const draft = all.filter((i) => i.status === "draft");
  const totalRevenue = paid.reduce((s, i) => s + invoiceTotal(i), 0);
  const pendingAmount = unpaid.reduce((s, i) => s + invoiceTotal(i), 0);
  return { total, paidCount: paid.length, unpaidCount: unpaid.length, draftCount: draft.length, totalRevenue, pendingAmount };
}
