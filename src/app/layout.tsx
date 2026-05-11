import type { Metadata } from "next";

import "@/styles/globals.css";

import { LanguageProvider } from "@/providers/language-provider";

export const metadata: Metadata = {
  title: "Leonardo Landell",

  description: "Premium Product Engineer Portfolio",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
