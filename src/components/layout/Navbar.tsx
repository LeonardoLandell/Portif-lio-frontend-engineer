"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import clsx from "clsx";

import { useLanguage } from "@/hooks/use-language";

import { LanguageSwitcher } from "@/components/ui/language-switcher";

import { ContactMenu } from "@/components/contact/contact-menu";

import styles from "./Navbar.module.css";

export function Navbar() {
  const pathname = usePathname();

  const { t } = useLanguage();

  const links = [
    {
      href: "/demos",

      label: t?.nav?.demos ?? "Demos",
    },

    {
      href: "/engineering",

      label: t?.nav?.engineering ?? "Engineering",
    },

    {
      href: "/cases",

      label: t?.nav?.cases ?? "Cases",
    },
  ];

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Leonardo Landell
        </Link>

        <nav className={styles.navigation}>
          {links.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className={clsx(
                styles.link,

                pathname === link.href && styles.active,
              )}
            >
              {link.label}
            </Link>
          ))}

          <ContactMenu />

          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
