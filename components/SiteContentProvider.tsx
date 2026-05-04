"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_SITE_CONTENT,
  mergeSiteContent,
  type SiteContent,
} from "@/lib/site-content";

type SiteContentContextValue = {
  content: SiteContent;
  /** False until `/data/site.json` load attempt finishes */
  loaded: boolean;
};

const SiteContentContext = createContext<SiteContentContextValue>({
  content: DEFAULT_SITE_CONTENT,
  loaded: false,
});

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState(DEFAULT_SITE_CONTENT);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const rev =
      typeof process !== "undefined" &&
      process.env.NEXT_PUBLIC_SITE_JSON_REV?.trim()
        ? process.env.NEXT_PUBLIC_SITE_JSON_REV.trim()
        : "";
    const jsonUrl =
      rev.length > 0
        ? `/data/site.json?v=${encodeURIComponent(rev)}`
        : "/data/site.json";

    (async () => {
      try {
        const res = await fetch(jsonUrl, {
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        });
        if (!res.ok) throw new Error(String(res.status));
        const raw: unknown = await res.json();
        if (!cancelled) setContent(mergeSiteContent(raw));
      } catch {
        if (!cancelled) setContent(DEFAULT_SITE_CONTENT);
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(
    () => ({ content, loaded }),
    [content, loaded],
  );

  return (
    <SiteContentContext.Provider value={value}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}
