import { useLanguage as useLanguageContext } from "@/providers/language-provider";

export function useLanguage() {
  return useLanguageContext();
}
