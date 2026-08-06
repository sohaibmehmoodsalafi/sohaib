"use client";

import { useState, useEffect, useCallback } from "react";
import { getInvoices, invoiceStats, invoiceTotal, deleteInvoice, saveInvoice, type Invoice } from "@/lib/invoiceStore";
import InvoiceForm from "./InvoiceForm";
import InvoicePDF from "./InvoicePDF";

const currSymbol: Record<string, string> = { PKR: "Rs.", USD: "$", GBP: "£", AED: "AED " };
const statusColor: Record<string, string> = { draft: "#6b6b6b", sent: "#3b82f6", paid: "#22c55e", overdue: "#ef4444" };

function fmt(n: number, cur: string) {
  return currSymbol[cur] + n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function InvoiceDashboard() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [stats, setStats] = useState(invoiceStats());
  const [view, setView] = useState<"list" | "create" | "edit" | "pdf">("list");
  const [editId, setEditId] = useState<string | null>(null);
  const [pdfInvoice, setPdfInvoice] = useState<Invoice | null>(null);
  const [filter, setFilter] = useState<"all" | "draft" | "sent" | "paid" | "overdue">("all");
  const [search, setSearch] = useState("");

  const refresh = useCallback(() => {
    setInvoices(getInvoices());
    setStats(invoiceStats());
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const filtered = invoices
    .filter((i) => filter === "all" || i.status === filter)
    .filter((i) => !search || i.client.name.toLowerCase().includes(search.toLowerCase()) || i.invoiceNumber.toLowerCase().includes(search.toLowerCase()));

  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthly = (() => {
    const map: Record<string, { count: number; billed: number; paid: number; pending: number; y: number; m: number }> = {};
    invoices.forEach((v) => {
      const d = new Date(v.createdAt);
      const key = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0");
      if (!map[key]) map[key] = { count: 0, billed: 0, paid: 0, pending: 0, y: d.getFullYear(), m: d.getMonth() };
      const t = invoiceTotal(v);
      map[key].count++; map[key].billed += t;
      if (v.status === "paid") map[key].paid += t;
      else if (v.status === "sent" || v.status === "overdue") map[key].pending += t;
    });
    return Object.keys(map).sort().reverse().map((k) => map[k]);
  })();

  const handleDelete = (id: string) => {
    if (confirm("Delete this invoice?")) { deleteInvoice(id); refresh(); }
  };
  const handleStatusChange = (inv: Invoice, status: Invoice["status"]) => {
    const updated = { ...inv, status, paidAt: status === "paid" ? new Date().toISOString() : inv.paidAt };
    saveInvoice(updated);
    refresh();
  };

  if (view === "create") return <InvoiceForm onDone={() => { setView("list"); refresh(); }} />;
  if (view === "edit" && editId) return <InvoiceForm editId={editId} onDone={() => { setView("list"); setEditId(null); refresh(); }} />;
  if (view === "pdf" && pdfInvoice) return <InvoicePDF invoice={pdfInvoice} onBack={() => { setView("list"); setPdfInvoice(null); }} />;

  return (
    <div style={{ minHeight: "100vh", background: "#080808", fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#f5f0e8" }}>
      {/* Top bar */}
      <div style={{ background: "#0f0f0f", borderBottom: "1px solid rgba(255,255,255,.07)", padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/images/sohaib-logo.png" alt="Logo" style={{ width: 32, height: 32 }} />
          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 20, letterSpacing: ".06em" }}>INVOICE DASHBOARD</span>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href="/" style={{ fontSize: 13, color: "#6b6b6b", textDecoration: "none" }}>Website</a>
          <button onClick={() => { sessionStorage.removeItem("sm_admin"); window.location.reload(); }}
            style={{ fontSize: 13, color: "#6b6b6b", background: "none", border: "none", cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Logout</button>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}>
        {/* Stats Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 32 }}>
          {[
            { label: "Total Invoices", value: stats.total, color: "#d4a017" },
            { label: "Paid", value: stats.paidCount, color: "#22c55e" },
            { label: "Pending", value: stats.unpaidCount, color: "#3b82f6" },
            { label: "Draft", value: stats.draftCount, color: "#6b6b6b" },
            { label: "Total Revenue", value: `Rs.${stats.totalRevenue.toLocaleString()}`, color: "#22c55e" },
            { label: "Pending Amount", value: `Rs.${stats.pendingAmount.toLocaleString()}`, color: "#ef4444" },
          ].map((s, i) => (
            <div key={i} style={{
              background: "#161616", border: "1px solid rgba(255,255,255,.07)", borderRadius: 16,
              padding: "24px 20px", position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: s.color }} />
              <div style={{ fontSize: 12, color: "#6b6b6b", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 8 }}>{s.label}</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 32, color: s.color, lineHeight: 1 }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Monthly Summary */}
        {monthly.length > 0 && (
          <div style={{ background: "#161616", border: "1px solid rgba(255,255,255,.07)", borderRadius: 16, padding: "24px 20px", marginBottom: 32 }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 20, letterSpacing: ".04em", marginBottom: 16 }}>MONTHLY SUMMARY</div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>
                    {["Month", "Invoices", "Billed", "Paid", "Pending"].map((h, i) => (
                      <th key={h} style={{ textAlign: i === 0 ? "left" : "right", padding: "10px 12px", fontSize: 11, color: "#6b6b6b", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {monthly.map((o, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,.04)" }}>
                      <td style={{ padding: "12px", fontSize: 13, fontWeight: 600, color: "#d4a017" }}>{MONTHS[o.m]} {o.y}</td>
                      <td style={{ padding: "12px", fontSize: 13, textAlign: "right" }}>{o.count}</td>
                      <td style={{ padding: "12px", fontSize: 13, textAlign: "right" }}>Rs.{o.billed.toLocaleString()}</td>
                      <td style={{ padding: "12px", fontSize: 13, textAlign: "right", color: "#22c55e" }}>Rs.{o.paid.toLocaleString()}</td>
                      <td style={{ padding: "12px", fontSize: 13, textAlign: "right", color: "#ef4444" }}>Rs.{o.pending.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Actions & Filters */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {(["all", "draft", "sent", "paid", "overdue"] as const).map((f) => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding: "8px 16px", borderRadius: 99, fontSize: 12, fontWeight: 600, cursor: "pointer",
                background: filter === f ? "#d4a017" : "#1e1e1e",
                color: filter === f ? "#080808" : "#9a9a9a",
                border: "1px solid " + (filter === f ? "#d4a017" : "rgba(255,255,255,.07)"),
                fontFamily: "'Plus Jakarta Sans',sans-serif", textTransform: "capitalize", transition: "all .2s",
              }}>{f === "all" ? `All (${invoices.length})` : `${f} (${invoices.filter(i => i.status === f).length})`}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <input
              placeholder="Search client or invoice #"
              value={search} onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "10px 16px", background: "#1e1e1e", border: "1px solid rgba(255,255,255,.07)",
                borderRadius: 12, color: "#f5f0e8", fontSize: 13, outline: "none", width: 220,
                fontFamily: "'Plus Jakarta Sans',sans-serif",
              }}
            />
            <button onClick={() => setView("create")} style={{
              padding: "10px 24px", background: "#d4a017", color: "#080808", fontWeight: 700,
              fontSize: 13, border: "none", borderRadius: 12, cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif",
              display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap",
            }}>+ New Invoice</button>
          </div>
        </div>

        {/* Invoice Table */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 20px", color: "#6b6b6b" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>&#128203;</div>
            <p style={{ fontSize: 16, marginBottom: 8 }}>No invoices yet</p>
            <p style={{ fontSize: 13 }}>Click &quot;+ New Invoice&quot; to create your first invoice</p>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>
                  {["Invoice #", "Client", "Amount", "Status", "Date", "Due Date", "Actions"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "12px 16px", fontSize: 11, color: "#6b6b6b", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((inv) => (
                  <tr key={inv.id} style={{ borderBottom: "1px solid rgba(255,255,255,.04)", transition: "background .2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.02)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                    <td style={{ padding: "16px", fontSize: 14, fontWeight: 600, color: "#d4a017" }}>{inv.invoiceNumber}</td>
                    <td style={{ padding: "16px" }}>
                      <div style={{ fontSize: 14, fontWeight: 500 }}>{inv.client.name}</div>
                      {inv.client.company && <div style={{ fontSize: 11, color: "#6b6b6b" }}>{inv.client.company}</div>}
                    </td>
                    <td style={{ padding: "16px", fontSize: 14, fontWeight: 600 }}>{fmt(invoiceTotal(inv), inv.currency)}</td>
                    <td style={{ padding: "16px" }}>
                      <select
                        value={inv.status}
                        onChange={(e) => handleStatusChange(inv, e.target.value as Invoice["status"])}
                        style={{
                          padding: "6px 12px", borderRadius: 99, fontSize: 11, fontWeight: 700,
                          background: statusColor[inv.status] + "18", color: statusColor[inv.status],
                          border: `1px solid ${statusColor[inv.status]}40`, cursor: "pointer",
                          fontFamily: "'Plus Jakarta Sans',sans-serif", textTransform: "uppercase", letterSpacing: ".04em",
                          appearance: "none", WebkitAppearance: "none",
                        }}
                      >
                        {["draft", "sent", "paid", "overdue"].map((s) => (
                          <option key={s} value={s} style={{ background: "#1e1e1e", color: "#f5f0e8" }}>{s}</option>
                        ))}
                      </select>
                    </td>
                    <td style={{ padding: "16px", fontSize: 13, color: "#9a9a9a" }}>{new Date(inv.createdAt).toLocaleDateString()}</td>
                    <td style={{ padding: "16px", fontSize: 13, color: "#9a9a9a" }}>{new Date(inv.dueDate).toLocaleDateString()}</td>
                    <td style={{ padding: "16px" }}>
                      <div style={{ display: "flex", gap: 6 }}>
                        <Btn label="View" color="#3b82f6" onClick={() => { setPdfInvoice(inv); setView("pdf"); }} />
                        <Btn label="Edit" color="#d4a017" onClick={() => { setEditId(inv.id); setView("edit"); }} />
                        <Btn label="Del" color="#ef4444" onClick={() => handleDelete(inv.id)} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function Btn({ label, color, onClick }: { label: string; color: string; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{
      padding: "6px 12px", borderRadius: 8, fontSize: 11, fontWeight: 600, cursor: "pointer",
      background: color + "15", color, border: `1px solid ${color}30`,
      fontFamily: "'Plus Jakarta Sans',sans-serif", transition: "all .2s",
    }}
      onMouseEnter={(e) => { e.currentTarget.style.background = color + "30"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = color + "15"; }}
    >{label}</button>
  );
}
