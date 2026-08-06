"use client";

import { useState, useEffect } from "react";
import InvoiceDashboard from "@/components/invoice/InvoiceDashboard";

const ADMIN_PASS = "sohaib2026";

export default function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("sm_admin") === "1") setAuth(true);
  }, []);

  const login = () => {
    if (pass === ADMIN_PASS) {
      setAuth(true);
      sessionStorage.setItem("sm_admin", "1");
    } else {
      setErr(true);
      setTimeout(() => setErr(false), 2000);
    }
  };

  if (!auth) {
    return (
      <div style={{ minHeight: "100vh", background: "#080808", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
        <div style={{ background: "#161616", border: "1px solid rgba(255,255,255,.1)", borderRadius: 20, padding: "48px 40px", width: 380, textAlign: "center" }}>
          <img src="/images/sohaib-logo.png" alt="Logo" style={{ width: 56, height: 56, margin: "0 auto 20px", display: "block" }} />
          <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 28, letterSpacing: ".06em", color: "#f5f0e8", marginBottom: 8 }}>ADMIN PANEL</h1>
          <p style={{ fontSize: 13, color: "#6b6b6b", marginBottom: 28 }}>Enter password to continue</p>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && login()}
            placeholder="Password"
            style={{
              width: "100%", padding: "14px 18px", background: "#1e1e1e", border: `1px solid ${err ? "#ff4444" : "rgba(255,255,255,.1)"}`,
              borderRadius: 12, color: "#f5f0e8", fontSize: 14, outline: "none", marginBottom: 16,
              fontFamily: "'Plus Jakarta Sans',sans-serif", transition: "border-color .2s",
            }}
          />
          <button onClick={login} style={{
            width: "100%", padding: "14px", background: "#d4a017", color: "#080808", fontWeight: 700,
            fontSize: 14, border: "none", borderRadius: 12, cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif",
            transition: "opacity .2s",
          }}>Log In</button>
          {err && <p style={{ color: "#ff4444", fontSize: 12, marginTop: 12 }}>Incorrect password</p>}
          <a href="/" style={{ display: "block", marginTop: 20, fontSize: 12, color: "#6b6b6b" }}>&larr; Back to website</a>
        </div>
      </div>
    );
  }

  return <InvoiceDashboard />;
}
