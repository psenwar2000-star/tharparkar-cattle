import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "hi";

type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (copy: { en: string; hi: string } | string) => string;
};

const I18nContext = createContext<I18nValue | null>(null);
const KEY = "tharparkar-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(KEY);
    if (stored === "hi" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(KEY, next);
    document.documentElement.lang = next === "hi" ? "hi" : "en";
  };

  useEffect(() => {
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
  }, [lang]);

  const t = (copy: { en: string; hi: string } | string) =>
    typeof copy === "string" ? copy : lang === "hi" ? copy.hi : copy.en;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n outside provider");
  return ctx;
}
