"use client";

import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { PageLayout } from "@/components/layout/page-layout";

import { Container } from "@/components/layout/container";

import { useLanguage } from "@/hooks/use-language";

import styles from "./page.module.css";

export function CasesPage() {
  const { t } = useLanguage();

  const featured = t.casesPage.featured;

  const cases = [
    {
      ...t.casesPage.cases.crm,

      href: "/cases/crm",
    },

    {
      ...t.casesPage.cases.forecast,

      href: "/cases/forecast-os",
    },
  ];

  return (
    <PageLayout>
      <main className={styles.page}>
        <Container>
          <section className={styles.hero}>
            <span className={styles.eyebrow}>{t.casesPage.eyebrow}</span>

            <h1 className={styles.title}>{t.casesPage.title}</h1>

            <p className={styles.description}>{t.casesPage.description}</p>
          </section>

          <Link href="/cases/project-os" className={styles.featured}>
            <div className={styles.featuredContent}>
              <span className={styles.category}>{featured.category}</span>

              <h2 className={styles.featuredTitle}>{featured.title}</h2>

              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>

              <div className={styles.footer}>
                <span>{featured.readTime}</span>

                <ArrowUpRight size={18} />
              </div>
            </div>
          </Link>

          <section className={styles.grid}>
            {cases.map((item) => (
              <Link key={item.title} href={item.href} className={styles.card}>
                <span className={styles.category}>{item.category}</span>

                <h3 className={styles.cardTitle}>{item.title}</h3>

                <p className={styles.cardExcerpt}>{item.excerpt}</p>

                <div className={styles.footer}>
                  <span>{item.readTime}</span>

                  <ArrowUpRight size={18} />
                </div>
              </Link>
            ))}
          </section>
        </Container>
      </main>
    </PageLayout>
  );
}
