"use client";

"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  DEFAULT_SITE_CONTENT,
  mergeSiteContent,
  type MainWorkService,
  type MainWorkStat,
  type PhilosophyBlock,
  type PortfolioPiece,
  type SiteContent,
  type VentureCard,
} from "@/lib/site-content";

const SESSION_KEY = "meetsohaib_admin_session";

const inputClass =
  "mt-1 w-full rounded-md border border-white/15 bg-black/50 px-3 py-2 text-sm text-foreground outline-none ring-gold/30 focus:ring-2";

const labelClass = "block text-[11px] font-semibold uppercase tracking-[0.14em] text-gold/90";

function deepClone<C>(c: C): C {
  return JSON.parse(JSON.stringify(c)) as C;
}

type Tab =
  | "hero"
  | "mainWork"
  | "ventures"
  | "philosophy"
  | "portfolio";

function newPortfolioPiece(): PortfolioPiece {
  const id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `piece-${Date.now()}`;
  return {
    id,
    title: "New project",
    subtitle: "",
    src: "",
    span: "default",
  };
}

function newVentureCard(i: number): VentureCard {
  return {
    id: `venture-${Date.now()}-${i}`,
    badge: `Venture 0${i + 1}`,
    title: "",
    body: "",
    bullets: [""],
    ctaUrl: "https://",
    ctaLabel: "Website",
  };
}

function newService(): MainWorkService {
  return { title: "", description: "", detail: "" };
}

function newStat(): MainWorkStat {
  return { value: "", label: "" };
}

function newPhilosophyBlock(): PhilosophyBlock {
  return { text: "", variant: "body", highlight: "" };
}

export function AdminDashboard() {
  const adminPass = process.env.NEXT_PUBLIC_SITE_ADMIN_PASS ?? "";
  const adminEnabled = adminPass.length > 0;

  const [unlocked, setUnlocked] = useState(false);
  const [passInput, setPassInput] = useState("");
  const [passError, setPassError] = useState("");
  const [draft, setDraft] = useState<SiteContent>(DEFAULT_SITE_CONTENT);
  const [tab, setTab] = useState<Tab>("hero");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!adminEnabled) return;
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "1") {
        setUnlocked(true);
      }
    } catch {
      /* private mode */
    }
  }, [adminEnabled]);

  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        const res = await fetch("/data/site.json", { cache: "no-store" });
        if (res.ok) {
          const raw: unknown = await res.json();
          if (!cancel) setDraft(mergeSiteContent(raw));
        } else if (!cancel) setDraft(deepClone(DEFAULT_SITE_CONTENT));
      } catch {
        if (!cancel) setDraft(deepClone(DEFAULT_SITE_CONTENT));
      } finally {
        if (!cancel) setLoaded(true);
      }
    })();
    return () => {
      cancel = true;
    };
  }, []);

  const tryLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passInput === adminPass) {
      setUnlocked(true);
      setPassError("");
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
    } else {
      setPassError("Incorrect passphrase.");
    }
  };

  const logout = () => {
    setUnlocked(false);
    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch {
      /* ignore */
    }
  };

  const downloadJson = useCallback(() => {
    const blob = new Blob([JSON.stringify(draft, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "site.json";
    a.click();
    URL.revokeObjectURL(url);
  }, [draft]);

  if (!adminEnabled) {
    return (
      <div className="min-h-dvh bg-bg px-4 py-16 text-foreground">
        <div className="mx-auto max-w-lg rounded-lg border border-gold/25 bg-surface/80 p-8">
          <h1 className="font-heading text-xl font-bold text-gold-bright">
            Site editor disabled
          </h1>
          <p className="mt-3 text-sm font-light text-muted">
            Set{" "}
            <code className="rounded bg-black/50 px-1 text-gold/90">
              NEXT_PUBLIC_SITE_ADMIN_PASS
            </code>{" "}
            in your environment, then run{" "}
            <code className="rounded bg-black/50 px-1">npm run build</code> again
            before deploying.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block text-sm font-medium text-gold underline-offset-4 hover:underline"
          >
            ← Back to site
          </Link>
        </div>
      </div>
    );
  }

  if (!unlocked) {
    return (
      <div className="min-h-dvh bg-bg px-4 py-16 text-foreground">
        <div className="mx-auto max-w-sm rounded-lg border border-gold/25 bg-surface/80 p-8">
          <h1 className="font-heading text-lg font-bold text-gold-bright">
            Site editor
          </h1>
          <form onSubmit={tryLogin} className="mt-6 space-y-4">
            <div>
              <label className={labelClass} htmlFor="admin-pass">
                Passphrase
              </label>
              <input
                id="admin-pass"
                type="password"
                autoComplete="current-password"
                value={passInput}
                onChange={(e) => setPassInput(e.target.value)}
                className={inputClass}
              />
              {passError ? (
                <p className="mt-2 text-xs text-red-400">{passError}</p>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-gradient-to-r from-[#f3e6c8] via-gold to-[#8a6f35] py-3 font-heading text-xs font-bold uppercase tracking-[0.18em] text-black"
            >
              Unlock
            </button>
          </form>
          <p className="mt-4 text-[11px] leading-relaxed text-muted">
            This passphrase ships in the public JavaScript bundle — use a unique
            low-stakes password and do not reuse important credentials.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block text-sm font-medium text-gold underline-offset-4 hover:underline"
          >
            ← Back to site
          </Link>
        </div>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-bg text-muted">
        Loading…
      </div>
    );
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: "hero", label: "Hero" },
    { id: "mainWork", label: "Main work" },
    { id: "ventures", label: "Ventures" },
    { id: "philosophy", label: "Philosophy" },
    { id: "portfolio", label: "Portfolio" },
  ];

  return (
    <div className="min-h-dvh bg-bg pb-20 pt-28 text-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <h1 className="font-heading text-xl font-bold text-gold-bright">
              Site content
            </h1>
            <p className="mt-2 max-w-xl text-xs font-light text-muted">
              Edits preview only in your browser until you replace{" "}
              <code className="rounded bg-black/40 px-1 text-gold/80">
                data/site.json
              </code>{" "}
              on hosting (inside your exported{" "}
              <code className="rounded bg-black/40 px-1">public_html</code> or{" "}
              <code className="rounded bg-black/40 px-1">out</code> folder) and refresh
              the site.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setDraft(deepClone(DEFAULT_SITE_CONTENT))}
              className="rounded-md border border-white/20 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted transition hover:border-gold/40 hover:text-gold"
            >
              Reset all
            </button>
            <button
              type="button"
              onClick={downloadJson}
              className="rounded-md bg-gradient-to-r from-[#f3e6c8] via-gold to-[#8a6f35] px-4 py-2 font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-black"
            >
              Download site.json
            </button>
            <button
              type="button"
              onClick={logout}
              className="rounded-md border border-white/15 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted hover:text-foreground"
            >
              Log out
            </button>
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-gold/35 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-bright hover:bg-gold/10"
            >
              View site
            </Link>
          </div>
        </div>

        <div className="mt-6 flex gap-1 overflow-x-auto border-b border-white/[0.06] pb-px">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`shrink-0 rounded-t-md px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] ${
                tab === t.id
                  ? "bg-gold/15 text-gold-bright"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-6 rounded-lg border border-white/[0.08] bg-surface/40 p-6 sm:p-8">
          {tab === "hero" ? (
            <div className="space-y-4">
              {(
                [
                  ["kicker", "Kicker"],
                  ["headline", "Headline"],
                  ["subtitle", "Subtitle"],
                  ["subtitleHighlight", "Gold highlight phrase (exact substring)"],
                  ["primaryCtaLabel", "Primary CTA label"],
                  ["primaryCtaHref", "Primary CTA link"],
                  ["secondaryCtaLabel", "Secondary CTA label"],
                  ["secondaryCtaHref", "Secondary CTA link"],
                ] as const
              ).map(([key, label]) => (
                <div key={key}>
                  <label className={labelClass} htmlFor={`hero-${key}`}>
                    {label}
                  </label>
                  {key === "subtitle" ? (
                    <textarea
                      id={`hero-${key}`}
                      rows={4}
                      value={draft.hero[key]}
                      onChange={(e) =>
                        setDraft((d) => ({
                          ...d,
                          hero: { ...d.hero, [key]: e.target.value },
                        }))
                      }
                      className={`${inputClass} min-h-[100px] resize-y`}
                    />
                  ) : (
                    <input
                      id={`hero-${key}`}
                      value={draft.hero[key]}
                      onChange={(e) =>
                        setDraft((d) => ({
                          ...d,
                          hero: { ...d.hero, [key]: e.target.value },
                        }))
                      }
                      className={inputClass}
                    />
                  )}
                </div>
              ))}
            </div>
          ) : null}

          {tab === "mainWork" ? (
            <div className="space-y-8">
              {(
                [
                  ["kicker", "Section kicker"],
                  ["title", "Title"],
                  ["intro", "Intro"],
                  ["asideKicker", "Aside kicker"],
                  ["asideNote", "Aside note"],
                ] as const
              ).map(([key, label]) => (
                <div key={key}>
                  <label className={labelClass} htmlFor={`mw-${key}`}>
                    {label}
                  </label>
                  {key === "intro" || key === "asideNote" ? (
                    <textarea
                      id={`mw-${key}`}
                      rows={key === "intro" ? 4 : 3}
                      value={draft.mainWork[key]}
                      onChange={(e) =>
                        setDraft((d) => ({
                          ...d,
                          mainWork: { ...d.mainWork, [key]: e.target.value },
                        }))
                      }
                      className={`${inputClass} resize-y`}
                    />
                  ) : (
                    <input
                      id={`mw-${key}`}
                      value={draft.mainWork[key]}
                      onChange={(e) =>
                        setDraft((d) => ({
                          ...d,
                          mainWork: { ...d.mainWork, [key]: e.target.value },
                        }))
                      }
                      className={inputClass}
                    />
                  )}
                </div>
              ))}

              <div>
                <div className="flex items-center justify-between">
                  <span className={labelClass}>Service cards</span>
                  <button
                    type="button"
                    onClick={() =>
                      setDraft((d) => ({
                        ...d,
                        mainWork: {
                          ...d.mainWork,
                          services: [...d.mainWork.services, newService()],
                        },
                      }))
                    }
                    className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold-bright hover:underline"
                  >
                    + Add service
                  </button>
                </div>
                <div className="mt-4 space-y-6">
                  {draft.mainWork.services.map((s, i) => (
                    <div
                      key={`svc-${i}`}
                      className="rounded-md border border-white/[0.08] p-4"
                    >
                      <div className="mb-3 flex justify-end gap-2">
                        <button
                          type="button"
                          className="text-[10px] uppercase tracking-wider text-muted hover:text-gold"
                          onClick={() =>
                            setDraft((d) => {
                              const next = [...d.mainWork.services];
                              if (i > 0) [next[i - 1], next[i]] = [next[i], next[i - 1]];
                              return {
                                ...d,
                                mainWork: { ...d.mainWork, services: next },
                              };
                            })
                          }
                        >
                          Up
                        </button>
                        <button
                          type="button"
                          className="text-[10px] uppercase tracking-wider text-muted hover:text-gold"
                          onClick={() =>
                            setDraft((d) => {
                              const next = [...d.mainWork.services];
                              if (i < next.length - 1)
                                [next[i], next[i + 1]] = [next[i + 1], next[i]];
                              return {
                                ...d,
                                mainWork: { ...d.mainWork, services: next },
                              };
                            })
                          }
                        >
                          Down
                        </button>
                        <button
                          type="button"
                          className="text-[10px] uppercase tracking-wider text-red-400 hover:underline"
                          onClick={() =>
                            setDraft((d) => ({
                              ...d,
                              mainWork: {
                                ...d.mainWork,
                                services: d.mainWork.services.filter((_, j) => j !== i),
                              },
                            }))
                          }
                        >
                          Remove
                        </button>
                      </div>
                      <input
                        placeholder="Title"
                        value={s.title}
                        onChange={(e) =>
                          setDraft((d) => {
                            const next = [...d.mainWork.services];
                            next[i] = { ...next[i], title: e.target.value };
                            return {
                              ...d,
                              mainWork: { ...d.mainWork, services: next },
                            };
                          })
                        }
                        className={inputClass}
                      />
                      <textarea
                        placeholder="Description"
                        value={s.description}
                        rows={2}
                        onChange={(e) =>
                          setDraft((d) => {
                            const next = [...d.mainWork.services];
                            next[i] = { ...next[i], description: e.target.value };
                            return {
                              ...d,
                              mainWork: { ...d.mainWork, services: next },
                            };
                          })
                        }
                        className={`${inputClass} mt-2 resize-y`}
                      />
                      <input
                        placeholder="Detail line"
                        value={s.detail}
                        onChange={(e) =>
                          setDraft((d) => {
                            const next = [...d.mainWork.services];
                            next[i] = { ...next[i], detail: e.target.value };
                            return {
                              ...d,
                              mainWork: { ...d.mainWork, services: next },
                            };
                          })
                        }
                        className={`${inputClass} mt-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className={labelClass}>Stats</span>
                  <button
                    type="button"
                    onClick={() =>
                      setDraft((d) => ({
                        ...d,
                        mainWork: {
                          ...d.mainWork,
                          stats: [...d.mainWork.stats, newStat()],
                        },
                      }))
                    }
                    className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold-bright hover:underline"
                  >
                    + Add stat
                  </button>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {draft.mainWork.stats.map((st, i) => (
                    <div
                      key={`st-${i}`}
                      className="rounded-md border border-white/[0.08] p-3"
                    >
                      <input
                        placeholder="Value"
                        value={st.value}
                        onChange={(e) =>
                          setDraft((d) => {
                            const next = [...d.mainWork.stats];
                            next[i] = { ...next[i], value: e.target.value };
                            return {
                              ...d,
                              mainWork: { ...d.mainWork, stats: next },
                            };
                          })
                        }
                        className={inputClass}
                      />
                      <input
                        placeholder="Label"
                        value={st.label}
                        onChange={(e) =>
                          setDraft((d) => {
                            const next = [...d.mainWork.stats];
                            next[i] = { ...next[i], label: e.target.value };
                            return {
                              ...d,
                              mainWork: { ...d.mainWork, stats: next },
                            };
                          })
                        }
                        className={`${inputClass} mt-2`}
                      />
                      <button
                        type="button"
                        className="mt-2 text-[10px] text-red-400 hover:underline"
                        onClick={() =>
                          setDraft((d) => ({
                            ...d,
                            mainWork: {
                              ...d.mainWork,
                              stats: d.mainWork.stats.filter((_, j) => j !== i),
                            },
                          }))
                        }
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {tab === "ventures" ? (
            <div className="space-y-6">
              {(
                [
                  ["kicker", "Kicker"],
                  ["title", "Title"],
                  ["intro", "Intro"],
                ] as const
              ).map(([key, label]) => (
                <div key={key}>
                  <label className={labelClass}>{label}</label>
                  {key === "intro" ? (
                    <textarea
                      rows={3}
                      value={draft.ventures[key]}
                      onChange={(e) =>
                        setDraft((d) => ({
                          ...d,
                          ventures: { ...d.ventures, [key]: e.target.value },
                        }))
                      }
                      className={`${inputClass} resize-y`}
                    />
                  ) : (
                    <input
                      value={draft.ventures[key]}
                      onChange={(e) =>
                        setDraft((d) => ({
                          ...d,
                          ventures: { ...d.ventures, [key]: e.target.value },
                        }))
                      }
                      className={inputClass}
                    />
                  )}
                </div>
              ))}

              <div className="flex items-center justify-between">
                <span className={labelClass}>Venture cards</span>
                <button
                  type="button"
                  onClick={() =>
                    setDraft((d) => ({
                      ...d,
                      ventures: {
                        ...d.ventures,
                        cards: [
                          ...d.ventures.cards,
                          newVentureCard(d.ventures.cards.length),
                        ],
                      },
                    }))
                  }
                  className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold-bright hover:underline"
                >
                  + Add card
                </button>
              </div>

              <div className="space-y-8">
                {draft.ventures.cards.map((card, i) => (
                  <div
                    key={card.id}
                    className="rounded-lg border border-white/[0.08] p-4 sm:p-5"
                  >
                    <div className="mb-3 flex flex-wrap justify-end gap-2">
                      <button
                        type="button"
                        className="text-[10px] uppercase text-muted hover:text-gold"
                        onClick={() =>
                          setDraft((d) => {
                            const next = [...d.ventures.cards];
                            if (i > 0) [next[i - 1], next[i]] = [next[i], next[i - 1]];
                            return {
                              ...d,
                              ventures: { ...d.ventures, cards: next },
                            };
                          })
                        }
                      >
                        Up
                      </button>
                      <button
                        type="button"
                        className="text-[10px] uppercase text-muted hover:text-gold"
                        onClick={() =>
                          setDraft((d) => {
                            const next = [...d.ventures.cards];
                            if (i < next.length - 1)
                              [next[i], next[i + 1]] = [next[i + 1], next[i]];
                            return {
                              ...d,
                              ventures: { ...d.ventures, cards: next },
                            };
                          })
                        }
                      >
                        Down
                      </button>
                      <button
                        type="button"
                        className="text-[10px] uppercase text-red-400 hover:underline"
                        onClick={() =>
                          setDraft((d) => ({
                            ...d,
                            ventures: {
                              ...d.ventures,
                              cards: d.ventures.cards.filter((_, j) => j !== i),
                            },
                          }))
                        }
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className={labelClass}>Badge</label>
                        <input
                          value={card.badge}
                          onChange={(e) =>
                            setDraft((d) => {
                              const next = [...d.ventures.cards];
                              next[i] = { ...next[i], badge: e.target.value };
                              return {
                                ...d,
                                ventures: { ...d.ventures, cards: next },
                              };
                            })
                          }
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Title</label>
                        <input
                          value={card.title}
                          onChange={(e) =>
                            setDraft((d) => {
                              const next = [...d.ventures.cards];
                              next[i] = { ...next[i], title: e.target.value };
                              return {
                                ...d,
                                ventures: { ...d.ventures, cards: next },
                              };
                            })
                          }
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className={labelClass}>Body</label>
                      <textarea
                        rows={4}
                        value={card.body}
                        onChange={(e) =>
                          setDraft((d) => {
                            const next = [...d.ventures.cards];
                            next[i] = { ...next[i], body: e.target.value };
                            return {
                              ...d,
                              ventures: { ...d.ventures, cards: next },
                            };
                          })
                        }
                        className={`${inputClass} resize-y`}
                      />
                    </div>
                    <div className="mt-3">
                      <label className={labelClass}>
                        Bullets (one per line)
                      </label>
                      <textarea
                        rows={4}
                        value={card.bullets.join("\n")}
                        onChange={(e) =>
                          setDraft((d) => {
                            const next = [...d.ventures.cards];
                            next[i] = {
                              ...next[i],
                              bullets: e.target.value
                                .split("\n")
                                .map((l) => l.trim())
                                .filter(Boolean),
                            };
                            return {
                              ...d,
                              ventures: { ...d.ventures, cards: next },
                            };
                          })
                        }
                        className={`${inputClass} resize-y font-mono text-xs`}
                      />
                    </div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className={labelClass}>CTA URL</label>
                        <input
                          value={card.ctaUrl}
                          onChange={(e) =>
                            setDraft((d) => {
                              const next = [...d.ventures.cards];
                              next[i] = { ...next[i], ctaUrl: e.target.value };
                              return {
                                ...d,
                                ventures: { ...d.ventures, cards: next },
                              };
                            })
                          }
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>CTA label</label>
                        <input
                          value={card.ctaLabel}
                          onChange={(e) =>
                            setDraft((d) => {
                              const next = [...d.ventures.cards];
                              next[i] = { ...next[i], ctaLabel: e.target.value };
                              return {
                                ...d,
                                ventures: { ...d.ventures, cards: next },
                              };
                            })
                          }
                          className={inputClass}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {tab === "philosophy" ? (
            <div className="space-y-6">
              <div>
                <label className={labelClass}>Kicker</label>
                <input
                  value={draft.philosophy.kicker}
                  onChange={(e) =>
                    setDraft((d) => ({
                      ...d,
                      philosophy: { ...d.philosophy, kicker: e.target.value },
                    }))
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Title</label>
                <input
                  value={draft.philosophy.title}
                  onChange={(e) =>
                    setDraft((d) => ({
                      ...d,
                      philosophy: { ...d.philosophy, title: e.target.value },
                    }))
                  }
                  className={inputClass}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className={labelClass}>Paragraphs</span>
                <button
                  type="button"
                  onClick={() =>
                    setDraft((d) => ({
                      ...d,
                      philosophy: {
                        ...d.philosophy,
                        blocks: [...d.philosophy.blocks, newPhilosophyBlock()],
                      },
                    }))
                  }
                  className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold-bright hover:underline"
                >
                  + Add block
                </button>
              </div>
              <div className="space-y-4">
                {draft.philosophy.blocks.map((block, i) => (
                  <div
                    key={`pb-${i}`}
                    className="rounded-md border border-white/[0.08] p-4"
                  >
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <select
                        value={block.variant}
                        onChange={(e) =>
                          setDraft((d) => {
                            const next = [...d.philosophy.blocks];
                            next[i] = {
                              ...next[i],
                              variant: e.target.value === "quote" ? "quote" : "body",
                            };
                            return {
                              ...d,
                              philosophy: { ...d.philosophy, blocks: next },
                            };
                          })
                        }
                        className={inputClass + " max-w-[200px]"}
                      >
                        <option value="body">Body</option>
                        <option value="quote">Quote (left border)</option>
                      </select>
                      <button
                        type="button"
                        className="text-[10px] uppercase text-red-400 hover:underline"
                        onClick={() =>
                          setDraft((d) => ({
                            ...d,
                            philosophy: {
                              ...d.philosophy,
                              blocks: d.philosophy.blocks.filter((_, j) => j !== i),
                            },
                          }))
                        }
                      >
                        Remove
                      </button>
                    </div>
                    {block.variant === "body" ? (
                      <div className="mb-3">
                        <label className={labelClass}>
                          Gold phrase (exact substring — optional)
                        </label>
                        <input
                          value={block.highlight ?? ""}
                          onChange={(e) =>
                            setDraft((d) => {
                              const next = [...d.philosophy.blocks];
                              next[i] = {
                                ...next[i],
                                highlight: e.target.value,
                              };
                              return {
                                ...d,
                                philosophy: { ...d.philosophy, blocks: next },
                              };
                            })
                          }
                          placeholder="Phrase to emphasize"
                          className={inputClass}
                        />
                      </div>
                    ) : null}
                    <textarea
                      rows={4}
                      value={block.text}
                      onChange={(e) =>
                        setDraft((d) => {
                          const next = [...d.philosophy.blocks];
                          next[i] = { ...next[i], text: e.target.value };
                          return {
                            ...d,
                            philosophy: { ...d.philosophy, blocks: next },
                          };
                        })
                      }
                      className={`${inputClass} resize-y`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {tab === "portfolio" ? (
            <div className="space-y-6">
              {(
                [
                  ["kicker", "Kicker"],
                  ["title", "Title"],
                  ["intro", "Intro"],
                ] as const
              ).map(([key, label]) => (
                <div key={key}>
                  <label className={labelClass}>{label}</label>
                  {key === "intro" ? (
                    <textarea
                      rows={3}
                      value={draft.portfolio[key]}
                      onChange={(e) =>
                        setDraft((d) => ({
                          ...d,
                          portfolio: { ...d.portfolio, [key]: e.target.value },
                        }))
                      }
                      className={`${inputClass} resize-y`}
                    />
                  ) : (
                    <input
                      value={draft.portfolio[key]}
                      onChange={(e) =>
                        setDraft((d) => ({
                          ...d,
                          portfolio: { ...d.portfolio, [key]: e.target.value },
                        }))
                      }
                      className={inputClass}
                    />
                  )}
                </div>
              ))}

              <div className="flex items-center justify-between">
                <span className={labelClass}>Projects</span>
                <button
                  type="button"
                  onClick={() =>
                    setDraft((d) => ({
                      ...d,
                      portfolio: {
                        ...d.portfolio,
                        pieces: [...d.portfolio.pieces, newPortfolioPiece()],
                      },
                    }))
                  }
                  className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold-bright hover:underline"
                >
                  + Add project
                </button>
              </div>

              <div className="space-y-6">
                {draft.portfolio.pieces.map((piece, i) => (
                  <div
                    key={piece.id}
                    className="rounded-lg border border-white/[0.08] p-4 sm:p-5"
                  >
                    <div className="mb-3 flex flex-wrap justify-end gap-2">
                      <button
                        type="button"
                        className="text-[10px] uppercase text-muted hover:text-gold"
                        onClick={() =>
                          setDraft((d) => {
                            const next = [...d.portfolio.pieces];
                            if (i > 0) [next[i - 1], next[i]] = [next[i], next[i - 1]];
                            return {
                              ...d,
                              portfolio: { ...d.portfolio, pieces: next },
                            };
                          })
                        }
                      >
                        Up
                      </button>
                      <button
                        type="button"
                        className="text-[10px] uppercase text-muted hover:text-gold"
                        onClick={() =>
                          setDraft((d) => {
                            const next = [...d.portfolio.pieces];
                            if (i < next.length - 1)
                              [next[i], next[i + 1]] = [next[i + 1], next[i]];
                            return {
                              ...d,
                              portfolio: { ...d.portfolio, pieces: next },
                            };
                          })
                        }
                      >
                        Down
                      </button>
                      <button
                        type="button"
                        className="text-[10px] uppercase text-red-400 hover:underline"
                        onClick={() =>
                          setDraft((d) => ({
                            ...d,
                            portfolio: {
                              ...d.portfolio,
                              pieces: d.portfolio.pieces.filter((_, j) => j !== i),
                            },
                          }))
                        }
                      >
                        Remove
                      </button>
                    </div>
                    <input
                      placeholder="Title"
                      value={piece.title}
                      onChange={(e) =>
                        setDraft((d) => {
                          const next = [...d.portfolio.pieces];
                          next[i] = { ...next[i], title: e.target.value };
                          return {
                            ...d,
                            portfolio: { ...d.portfolio, pieces: next },
                          };
                        })
                      }
                      className={inputClass}
                    />
                    <textarea
                      placeholder="Subtitle"
                      value={piece.subtitle}
                      rows={2}
                      onChange={(e) =>
                        setDraft((d) => {
                          const next = [...d.portfolio.pieces];
                          next[i] = { ...next[i], subtitle: e.target.value };
                          return {
                            ...d,
                            portfolio: { ...d.portfolio, pieces: next },
                          };
                        })
                      }
                      className={`${inputClass} mt-2 resize-y`}
                    />
                    <input
                      placeholder="Image URL (https://…)"
                      value={piece.src}
                      onChange={(e) =>
                        setDraft((d) => {
                          const next = [...d.portfolio.pieces];
                          next[i] = { ...next[i], src: e.target.value };
                          return {
                            ...d,
                            portfolio: { ...d.portfolio, pieces: next },
                          };
                        })
                      }
                      className={`${inputClass} mt-2 font-mono text-xs`}
                    />
                    <div className="mt-2">
                      <label className={labelClass}>Layout</label>
                      <select
                        value={piece.span}
                        onChange={(e) =>
                          setDraft((d) => {
                            const next = [...d.portfolio.pieces];
                            const span =
                              e.target.value === "tall"
                                ? "tall"
                                : e.target.value === "wide"
                                  ? "wide"
                                  : "default";
                            next[i] = { ...next[i], span };
                            return {
                              ...d,
                              portfolio: { ...d.portfolio, pieces: next },
                            };
                          })
                        }
                        className={inputClass}
                      >
                        <option value="default">Default</option>
                        <option value="tall">Tall</option>
                        <option value="wide">Wide</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
