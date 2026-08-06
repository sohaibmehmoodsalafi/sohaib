"use client";

import { useState, useEffect } from "react";
import { getInvoice, saveInvoice, nextInvoiceNumber, getClients, saveClient, uid, type Invoice, type InvoiceItem, type Client } from "@/lib/invoiceStore";
import { SERVICE_PACKAGES } from "@/lib/packages";

const currencies = ["PKR", "USD", "GBP", "AED"] as const;
const countryCodes = ["+92", "+1", "+44", "+971", "+966", "+91", "+61", "+60", "+49", "+33", "+90", "+880"];
const ccLabel: Record<string, string> = { "+92": "🇵🇰 +92", "+1": "🇺🇸 +1", "+44": "🇬🇧 +44", "+971": "🇦🇪 +971", "+966": "🇸🇦 +966", "+91": "🇮🇳 +91", "+61": "🇦🇺 +61", "+60": "🇲🇾 +60", "+49": "🇩🇪 +49", "+33": "🇫🇷 +33", "+90": "🇹🇷 +90", "+880": "🇧🇩 +880" };

function emptyItem(): InvoiceItem {
  return { description: "", qty: 1, rate: 0 };
}

export default function InvoiceForm({ editId, onDone }: { editId?: string; onDone: () => void }) {
  const isEdit = !!editId;
  const existing = editId ? getInvoice(editId) : null;

  const [invoiceNumber, setInvoiceNumber] = useState(existing?.invoiceNumber || nextInvoiceNumber());
  const [clientName, setClientName] = useState(existing?.client.name || "");
  const [clientEmail, setClientEmail] = useState(existing?.client.email || "");
  const [clientPhone, setClientPhone] = useState(existing?.client.phone || "");
  const [clientCountryCode, setClientCountryCode] = useState(existing?.client.countryCode || "+92");
  const [clientCompany, setClientCompany] = useState(existing?.client.company || "");
  const [clientAddress, setClientAddress] = useState(existing?.client.address || "");
  const [items, setItems] = useState<InvoiceItem[]>(existing?.items || [emptyItem()]);
  const [currency, setCurrency] = useState<typeof currencies[number]>(existing?.currency || "PKR");
  const [taxPercent, setTaxPercent] = useState(existing?.taxPercent || 0);
  const [discount, setDiscount] = useState(existing?.discount || 0);
  const [notes, setNotes] = useState(existing?.notes || "");
  const [dueDate, setDueDate] = useState(existing?.dueDate ? existing.dueDate.slice(0, 10) : new Date(Date.now() + 15 * 86400000).toISOString().slice(0, 10));
  const [status, setStatus] = useState<Invoice["status"]>(existing?.status || "draft");
  const [savedClients, setSavedClients] = useState<Client[]>([]);
  const [showClientList, setShowClientList] = useState(false);

  useEffect(() => { setSavedClients(getClients()); }, []);

  const updateItem = (idx: number, field: keyof InvoiceItem, val: string | number) => {
    setItems((prev) => prev.map((it, i) => i === idx ? { ...it, [field]: val } : it));
  };
  const removeItem = (idx: number) => setItems((prev) => prev.filter((_, i) => i !== idx));
  const addItem = () => setItems((prev) => [...prev, emptyItem()]);

  const addPackage = (pkgId: string) => {
    if (!pkgId) return;
    if (pkgId === "__other__") {
      // "Others" — blank custom line item
      setItems((prev) => {
        const last = prev[prev.length - 1];
        const isLastEmpty = prev.length === 1 && last && !last.description && last.rate === 0;
        return isLastEmpty ? prev : [...prev, emptyItem()];
      });
      return;
    }
    const pkg = SERVICE_PACKAGES.find((p) => p.id === pkgId);
    if (!pkg) return;
    const newItem: InvoiceItem = { description: pkg.description, qty: 1, rate: pkg.rate };
    setItems((prev) => {
      const last = prev[prev.length - 1];
      const isLastEmpty = prev.length === 1 && last && !last.description && last.rate === 0;
      return isLastEmpty ? [newItem] : [...prev, newItem];
    });
  };

  const subtotal = items.reduce((s, i) => s + i.qty * i.rate, 0);
  const tax = subtotal * (taxPercent / 100);
  const total = subtotal + tax - discount;

  const selectClient = (c: Client) => {
    setClientName(c.name);
    setClientEmail(c.email);
    setClientPhone(c.phone);
    setClientCountryCode(c.countryCode || "+92");
    setClientCompany(c.company || "");
    setClientAddress(c.address || "");
    setShowClientList(false);
  };

  const handleSave = () => {
    if (!invoiceNumber.trim()) { alert("Invoice number is required"); return; }
    if (!clientName.trim()) { alert("Client name is required"); return; }
    if (items.length === 0 || items.every((i) => !i.description)) { alert("Add at least one item"); return; }

    const client: Client = {
      id: existing?.client.id || uid(),
      name: clientName.trim(),
      email: clientEmail.trim(),
      phone: clientPhone.trim(),
      countryCode: clientCountryCode,
      company: clientCompany.trim() || undefined,
      address: clientAddress.trim() || undefined,
    };
    saveClient(client);

    const inv: Invoice = {
      id: existing?.id || uid(),
      invoiceNumber: invoiceNumber.trim(),
      client,
      items: items.filter((i) => i.description.trim()),
      status,
      currency,
      taxPercent,
      discount,
      notes: notes.trim(),
      createdAt: existing?.createdAt || new Date().toISOString(),
      dueDate: new Date(dueDate).toISOString(),
      paidAt: existing?.paidAt,
    };
    saveInvoice(inv);
    onDone();
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 14px", background: "#1e1e1e", border: "1px solid rgba(255,255,255,.1)",
    borderRadius: 10, color: "#f5f0e8", fontSize: 13, outline: "none", fontFamily: "'Plus Jakarta Sans',sans-serif",
  };
  const labelStyle: React.CSSProperties = { fontSize: 11, color: "#6b6b6b", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 6, display: "block" };

  return (
    <div style={{ minHeight: "100vh", background: "#080808", fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#f5f0e8" }}>
      {/* Top bar */}
      <div style={{ background: "#0f0f0f", borderBottom: "1px solid rgba(255,255,255,.07)", padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onDone} style={{ background: "none", border: "none", color: "#6b6b6b", fontSize: 20, cursor: "pointer", padding: 0, lineHeight: 1 }}>&larr;</button>
          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 20, letterSpacing: ".06em" }}>
            {isEdit ? "EDIT INVOICE" : "NEW INVOICE"} — {invoiceNumber}
          </span>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={onDone} style={{ padding: "10px 20px", background: "#1e1e1e", color: "#9a9a9a", border: "1px solid rgba(255,255,255,.07)", borderRadius: 10, fontSize: 13, cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Cancel</button>
          <button onClick={handleSave} style={{ padding: "10px 24px", background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 13, border: "none", borderRadius: 10, cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            {isEdit ? "Update Invoice" : "Save Invoice"}
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px" }}>
        {/* Client Section */}
        <div style={{ background: "#161616", border: "1px solid rgba(255,255,255,.07)", borderRadius: 16, padding: "28px 24px", marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 22, letterSpacing: ".04em" }}>CLIENT DETAILS</h2>
            {savedClients.length > 0 && (
              <button onClick={() => setShowClientList(!showClientList)} style={{
                padding: "6px 14px", background: "#1e1e1e", color: "#d4a017", border: "1px solid rgba(212,160,23,.2)",
                borderRadius: 8, fontSize: 12, cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif",
              }}>Select Saved Client</button>
            )}
          </div>
          {showClientList && (
            <div style={{ background: "#1e1e1e", borderRadius: 12, padding: 12, marginBottom: 16, maxHeight: 200, overflowY: "auto" }}>
              {savedClients.map((c) => (
                <div key={c.id} onClick={() => selectClient(c)}
                  style={{ padding: "10px 12px", borderRadius: 8, cursor: "pointer", transition: "background .2s", marginBottom: 4 }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: "#6b6b6b" }}>{c.company} &middot; {c.email}</div>
                </div>
              ))}
            </div>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div><label style={labelStyle}>Client Name *</label><input style={inputStyle} value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="e.g. Muhammad Ahmed" /></div>
            <div><label style={labelStyle}>Company</label><input style={inputStyle} value={clientCompany} onChange={(e) => setClientCompany(e.target.value)} placeholder="e.g. ABC Corp" /></div>
            <div><label style={labelStyle}>Email</label><input style={inputStyle} value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder="client@email.com" /></div>
            <div><label style={labelStyle}>Phone</label>
              <div style={{ display: "flex", gap: 8 }}>
                <select style={{ ...inputStyle, width: 110, flex: "none", cursor: "pointer" }} value={clientCountryCode} onChange={(e) => setClientCountryCode(e.target.value)}>
                  {countryCodes.map((c) => <option key={c} value={c}>{ccLabel[c]}</option>)}
                </select>
                <input style={inputStyle} value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} placeholder="300 1234567" />
              </div>
            </div>
            <div style={{ gridColumn: "span 2" }}><label style={labelStyle}>Address</label><input style={inputStyle} value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} placeholder="Full address" /></div>
          </div>
        </div>

        {/* Items Section */}
        <div style={{ background: "#161616", border: "1px solid rgba(255,255,255,.07)", borderRadius: 16, padding: "28px 24px", marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 22, letterSpacing: ".04em" }}>LINE ITEMS</h2>
            <select
              value=""
              onChange={(e) => { addPackage(e.target.value); e.target.value = ""; }}
              style={{
                padding: "10px 16px", background: "#1e1e1e", color: "#d4a017",
                border: "1px solid rgba(212,160,23,.3)", borderRadius: 10, fontSize: 13,
                cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", outline: "none", minWidth: 220,
              }}
            >
              <option value="" disabled style={{ background: "#1e1e1e", color: "#6b6b6b" }}>+ Add from My Packages</option>
              {SERVICE_PACKAGES.map((p) => (
                <option key={p.id} value={p.id} style={{ background: "#1e1e1e", color: "#f5f0e8" }}>
                  {p.tier} — {p.name} (Rs.{p.rate.toLocaleString()})
                </option>
              ))}
              <option value="__other__" style={{ background: "#1e1e1e", color: "#f5f0e8" }}>Others (Custom Item)</option>
            </select>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr 1fr 1fr 40px", gap: 8, marginBottom: 8 }}>
            <span style={labelStyle}>Description</span>
            <span style={labelStyle}>Qty</span>
            <span style={labelStyle}>Rate</span>
            <span style={labelStyle}>Amount</span>
            <span />
          </div>
          {items.map((item, idx) => (
            <div key={idx} style={{ display: "grid", gridTemplateColumns: "3fr 1fr 1fr 1fr 40px", gap: 8, marginBottom: 8, alignItems: "center" }}>
              <input style={inputStyle} value={item.description} onChange={(e) => updateItem(idx, "description", e.target.value)} placeholder="Service description" />
              <input style={inputStyle} type="number" min={1} value={item.qty} onChange={(e) => updateItem(idx, "qty", Number(e.target.value))} />
              <input style={inputStyle} type="number" min={0} value={item.rate} onChange={(e) => updateItem(idx, "rate", Number(e.target.value))} />
              <div style={{ ...inputStyle, background: "transparent", border: "none", color: "#d4a017", fontWeight: 600 }}>
                {(item.qty * item.rate).toLocaleString()}
              </div>
              {items.length > 1 && (
                <button onClick={() => removeItem(idx)} style={{ background: "none", border: "none", color: "#ef4444", fontSize: 18, cursor: "pointer", padding: 0 }}>&times;</button>
              )}
            </div>
          ))}
          <button onClick={addItem} style={{
            padding: "10px 20px", background: "transparent", color: "#d4a017", border: "1px dashed rgba(212,160,23,.3)",
            borderRadius: 10, fontSize: 13, cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", marginTop: 8, width: "100%",
          }}>+ Add Item</button>
        </div>

        {/* Settings & Summary */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
          {/* Settings */}
          <div style={{ background: "#161616", border: "1px solid rgba(255,255,255,.07)", borderRadius: 16, padding: "28px 24px" }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 22, letterSpacing: ".04em", marginBottom: 20 }}>SETTINGS</h2>
            <div style={{ display: "grid", gap: 16 }}>
              <div><label style={labelStyle}>Invoice Number</label><input style={inputStyle} value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} placeholder="e.g. SM-0001" /></div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={labelStyle}>Currency</label>
                  <select style={{ ...inputStyle, cursor: "pointer" }} value={currency} onChange={(e) => setCurrency(e.target.value as typeof currencies[number])}>
                    {currencies.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Status</label>
                  <select style={{ ...inputStyle, cursor: "pointer" }} value={status} onChange={(e) => setStatus(e.target.value as Invoice["status"])}>
                    {["draft", "sent", "paid", "overdue"].map((s) => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div><label style={labelStyle}>Tax %</label><input style={inputStyle} type="number" min={0} max={100} value={taxPercent} onChange={(e) => setTaxPercent(Number(e.target.value))} /></div>
                <div><label style={labelStyle}>Discount ({currency})</label><input style={inputStyle} type="number" min={0} value={discount} onChange={(e) => setDiscount(Number(e.target.value))} /></div>
              </div>
              <div><label style={labelStyle}>Due Date</label><input style={{ ...inputStyle, colorScheme: "dark" }} type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} /></div>
              <div><label style={labelStyle}>Notes</label><textarea style={{ ...inputStyle, minHeight: 80, resize: "vertical" }} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Payment terms, bank details, etc." /></div>
            </div>
          </div>

          {/* Summary */}
          <div style={{ background: "#161616", border: "1px solid rgba(255,255,255,.07)", borderRadius: 16, padding: "28px 24px" }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 22, letterSpacing: ".04em", marginBottom: 20 }}>SUMMARY</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Row label="Subtotal" value={subtotal.toLocaleString()} />
              <Row label={`Tax (${taxPercent}%)`} value={tax.toLocaleString()} />
              {discount > 0 && <Row label="Discount" value={`-${discount.toLocaleString()}`} color="#22c55e" />}
              <div style={{ borderTop: "1px solid rgba(255,255,255,.1)", paddingTop: 16 }}>
                <Row label="TOTAL" value={`${currency} ${total.toLocaleString()}`} bold />
              </div>
            </div>
            <div style={{ marginTop: 32 }}>
              <button onClick={handleSave} style={{
                width: "100%", padding: "16px", background: "#d4a017", color: "#080808", fontWeight: 700,
                fontSize: 15, border: "none", borderRadius: 12, cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif",
              }}>{isEdit ? "Update Invoice" : "Save Invoice"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, bold, color }: { label: string; value: string; bold?: boolean; color?: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{ fontSize: 14, color: bold ? "#f5f0e8" : "#6b6b6b", fontWeight: bold ? 700 : 400 }}>{label}</span>
      <span style={{ fontSize: bold ? 20 : 14, fontWeight: bold ? 700 : 500, color: color || (bold ? "#d4a017" : "#f5f0e8"), fontFamily: bold ? "'Plus Jakarta Sans',sans-serif" : "inherit", letterSpacing: bold ? ".02em" : "0" }}>{value}</span>
    </div>
  );
}
