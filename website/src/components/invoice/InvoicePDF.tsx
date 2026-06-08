"use client";

import { type Invoice, invoiceSubtotal, invoiceTax, invoiceTotal } from "@/lib/invoiceStore";

const currSymbol: Record<string, string> = { PKR: "Rs.", USD: "$", GBP: "£", AED: "AED " };
const statusLabel: Record<string, { text: string; bg: string; color: string }> = {
  draft: { text: "DRAFT", bg: "#6b6b6b20", color: "#6b6b6b" },
  sent: { text: "SENT", bg: "#3b82f620", color: "#3b82f6" },
  paid: { text: "PAID", bg: "#22c55e20", color: "#22c55e" },
  overdue: { text: "OVERDUE", bg: "#ef444420", color: "#ef4444" },
};

function fmt(n: number, cur: string) {
  return currSymbol[cur] + n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function InvoicePDF({ invoice, onBack }: { invoice: Invoice; onBack: () => void }) {
  const sub = invoiceSubtotal(invoice.items);
  const tax = invoiceTax(invoice.items, invoice.taxPercent);
  const total = invoiceTotal(invoice);
  const st = statusLabel[invoice.status];

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `*Invoice ${invoice.invoiceNumber}*\n\nHi ${invoice.client.name},\n\nPlease find your invoice details:\n\n` +
      invoice.items.map((i) => `- ${i.description}: ${fmt(i.qty * i.rate, invoice.currency)}`).join("\n") +
      `\n\n*Total: ${fmt(total, invoice.currency)}*\n` +
      `Due: ${new Date(invoice.dueDate).toLocaleDateString()}\n\n` +
      `Payment: JazzCash/EasyPaisa: 0336-3710499\nBank: Meezan Bank\nAccount: Sohaib Mehmood\n\nThank you!`
    );
    window.open(`https://wa.me/${invoice.client.phone.replace(/[^0-9]/g, "")}?text=${msg}`, "_blank");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#080808", fontFamily: "'Outfit',sans-serif", color: "#f5f0e8" }}>
      {/* Action bar - hidden in print */}
      <div className="no-print" style={{ background: "#0f0f0f", borderBottom: "1px solid rgba(255,255,255,.07)", padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onBack} style={{ background: "none", border: "none", color: "#6b6b6b", fontSize: 20, cursor: "pointer", padding: 0, lineHeight: 1 }}>&larr;</button>
          <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 20, letterSpacing: ".06em" }}>INVOICE {invoice.invoiceNumber}</span>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={handleWhatsApp} style={{
            padding: "10px 20px", background: "#25d366", color: "#fff", fontWeight: 600, fontSize: 13,
            border: "none", borderRadius: 10, cursor: "pointer", fontFamily: "'Outfit',sans-serif",
            display: "flex", alignItems: "center", gap: 6,
          }}>Send via WhatsApp</button>
          <button onClick={handlePrint} style={{
            padding: "10px 20px", background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 13,
            border: "none", borderRadius: 10, cursor: "pointer", fontFamily: "'Outfit',sans-serif",
          }}>Print / Save PDF</button>
        </div>
      </div>

      {/* Invoice Content */}
      <div id="invoice-content" style={{ maxWidth: 800, margin: "32px auto", background: "#fff", color: "#1a1a1a", borderRadius: 16, overflow: "hidden" }}>
        {/* Header */}
        <div style={{ background: "#080808", padding: "40px 48px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src="/images/sohaib-logo.png" alt="Logo" style={{ width: 48, height: 48 }} />
            <div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 22, letterSpacing: ".06em", color: "#f5f0e8" }}>SOHAIB MEHMOOD</div>
              <div style={{ fontSize: 11, color: "#d4a017", letterSpacing: ".04em" }}>SCALING BRANDS. EMPOWERING SOULS</div>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 36, letterSpacing: ".04em", color: "#d4a017" }}>INVOICE</div>
            <div style={{ fontSize: 14, color: "#9a9a9a" }}>{invoice.invoiceNumber}</div>
          </div>
        </div>

        {/* Status & Info */}
        <div style={{ padding: "32px 48px", display: "flex", justifyContent: "space-between", borderBottom: "1px solid #eee" }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#999", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>BILL TO</div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>{invoice.client.name}</div>
            {invoice.client.company && <div style={{ fontSize: 13, color: "#666" }}>{invoice.client.company}</div>}
            {invoice.client.email && <div style={{ fontSize: 13, color: "#666" }}>{invoice.client.email}</div>}
            {invoice.client.phone && <div style={{ fontSize: 13, color: "#666" }}>{invoice.client.phone}</div>}
            {invoice.client.address && <div style={{ fontSize: 13, color: "#666", marginTop: 4 }}>{invoice.client.address}</div>}
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{
              display: "inline-block", padding: "6px 16px", borderRadius: 99,
              fontSize: 11, fontWeight: 700, letterSpacing: ".06em",
              background: st.bg, color: st.color, marginBottom: 16,
            }}>{st.text}</span>
            <div style={{ fontSize: 13, color: "#666", marginBottom: 4 }}>
              <strong>Date:</strong> {new Date(invoice.createdAt).toLocaleDateString()}
            </div>
            <div style={{ fontSize: 13, color: "#666", marginBottom: 4 }}>
              <strong>Due:</strong> {new Date(invoice.dueDate).toLocaleDateString()}
            </div>
            {invoice.paidAt && (
              <div style={{ fontSize: 13, color: "#22c55e" }}>
                <strong>Paid:</strong> {new Date(invoice.paidAt).toLocaleDateString()}
              </div>
            )}
          </div>
        </div>

        {/* Items Table */}
        <div style={{ padding: "0 48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #080808" }}>
                <th style={{ textAlign: "left", padding: "16px 0", fontSize: 10, fontWeight: 700, color: "#999", letterSpacing: ".1em", textTransform: "uppercase" }}>Description</th>
                <th style={{ textAlign: "center", padding: "16px 0", fontSize: 10, fontWeight: 700, color: "#999", letterSpacing: ".1em", width: 80 }}>QTY</th>
                <th style={{ textAlign: "right", padding: "16px 0", fontSize: 10, fontWeight: 700, color: "#999", letterSpacing: ".1em", width: 120 }}>RATE</th>
                <th style={{ textAlign: "right", padding: "16px 0", fontSize: 10, fontWeight: 700, color: "#999", letterSpacing: ".1em", width: 120 }}>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "14px 0", fontSize: 14 }}>{item.description}</td>
                  <td style={{ padding: "14px 0", fontSize: 14, textAlign: "center" }}>{item.qty}</td>
                  <td style={{ padding: "14px 0", fontSize: 14, textAlign: "right" }}>{fmt(item.rate, invoice.currency)}</td>
                  <td style={{ padding: "14px 0", fontSize: 14, textAlign: "right", fontWeight: 600 }}>{fmt(item.qty * item.rate, invoice.currency)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div style={{ padding: "24px 48px", display: "flex", justifyContent: "flex-end" }}>
          <div style={{ width: 280 }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", fontSize: 14 }}>
              <span style={{ color: "#666" }}>Subtotal</span>
              <span>{fmt(sub, invoice.currency)}</span>
            </div>
            {invoice.taxPercent > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", fontSize: 14 }}>
                <span style={{ color: "#666" }}>Tax ({invoice.taxPercent}%)</span>
                <span>{fmt(tax, invoice.currency)}</span>
              </div>
            )}
            {invoice.discount > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", fontSize: 14 }}>
                <span style={{ color: "#666" }}>Discount</span>
                <span style={{ color: "#22c55e" }}>-{fmt(invoice.discount, invoice.currency)}</span>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderTop: "2px solid #080808", marginTop: 8 }}>
              <span style={{ fontSize: 16, fontWeight: 700 }}>Total</span>
              <span style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Bebas Neue',sans-serif", color: "#080808", letterSpacing: ".02em" }}>{fmt(total, invoice.currency)}</span>
            </div>
          </div>
        </div>

        {/* Notes & Payment */}
        <div style={{ padding: "24px 48px 40px", background: "#f9f9f9", borderTop: "1px solid #eee" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#999", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>PAYMENT DETAILS</div>
              <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>
                <strong>Bank:</strong> Meezan Bank<br />
                <strong>Account:</strong> Sohaib Mehmood<br />
                <strong>JazzCash/EasyPaisa:</strong> 0336-3710499<br />
                <strong>Wise (International):</strong> meetsohaib@gmail.com
              </div>
            </div>
            {invoice.notes && (
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#999", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>NOTES</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>{invoice.notes}</div>
              </div>
            )}
          </div>
          <div style={{ textAlign: "center", marginTop: 32, paddingTop: 20, borderTop: "1px solid #ddd" }}>
            <div style={{ fontSize: 12, color: "#999" }}>Thank you for your business!</div>
            <div style={{ fontSize: 11, color: "#bbb", marginTop: 4 }}>meetsohaib.com &middot; +92 336 3710499 &middot; meetsohaib@gmail.com</div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { background: #fff !important; }
          .no-print { display: none !important; }
          #invoice-content { margin: 0 !important; border-radius: 0 !important; box-shadow: none !important; }
        }
      `}</style>
    </div>
  );
}
