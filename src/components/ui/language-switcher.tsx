"use client";

import { useLanguage } from "@/hooks/use-language";

import styles from "./language-switcher.module.css";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      className={styles.button}
      onClick={() => setLanguage(language === "en" ? "pt" : "en")}
    >
      {language.toUpperCase()}
    </button>
  );
}
