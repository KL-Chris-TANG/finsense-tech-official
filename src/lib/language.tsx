import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "en" | "zh-Hant" | "zh-Hans";

const STORAGE_KEY = "finsense-language";

export const languageOptions: { value: Language; shortLabel: string; label: Record<Language, string> }[] = [
  {
    value: "en",
    shortLabel: "EN",
    label: {
      en: "English",
      "zh-Hant": "English",
      "zh-Hans": "English",
    },
  },
  {
    value: "zh-Hant",
    shortLabel: "繁",
    label: {
      en: "Traditional Chinese",
      "zh-Hant": "繁體中文",
      "zh-Hans": "繁體中文",
    },
  },
  {
    value: "zh-Hans",
    shortLabel: "简",
    label: {
      en: "Simplified Chinese",
      "zh-Hant": "簡體中文",
      "zh-Hans": "简体中文",
    },
  },
];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const isLanguage = (value: string): value is Language =>
  value === "en" || value === "zh-Hant" || value === "zh-Hans";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && isLanguage(stored)) {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang =
      language === "en" ? "en" : language === "zh-Hant" ? "zh-Hant" : "zh-Hans";
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
