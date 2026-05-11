import type { ReactElement } from "react";

import { Hero } from "@/components/hero/hero";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

export default function Page(): ReactElement {
  return (
    <main>
      <LanguageSwitcher />

      <Hero />
    </main>
  );
}
