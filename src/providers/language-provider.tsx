"use client";

import { createContext, useContext, useState, useMemo } from "react";

import { messages, LanguageSchema } from "@/i18n";

type Language = "pt" | "en";

type LanguageContextType = {
  language: Language;

  setLanguage: (lang: Language) => void;

  t: LanguageSchema;
};

const LanguageContext = createContext({} as LanguageContextType);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = useMemo(() => {
    return messages[language];
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,

        setLanguage,

        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
