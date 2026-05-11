"use client";

import type { ReactElement } from "react";

import { PageLayout } from "@/components/layout/page-layout";
import { Container } from "@/components/layout/container";

import { useLanguage } from "@/hooks/use-language";

import styles from "./page.module.css";

export function CRMCasePage(): ReactElement | null {
  const { t } = useLanguage();

  const content = t.crmCasePage;

  if (!content) {
    return null;
  }

  const sections = content.sections;

  return (
    <PageLayout>
      <main className={styles.page}>
        <Container>
          <article className={styles.article}>
            <header className={styles.hero}>
              <span className={styles.eyebrow}>{content.eyebrow}</span>

              <h1 className={styles.title}>{content.title}</h1>

              <p className={styles.subtitle}>{content.subtitle}</p>

              <div className={styles.meta}>
                <span>{content.meta.product}</span>

                <span>{content.meta.category}</span>

                <span>{content.meta.readTime}</span>

                <span>{content.meta.year}</span>
              </div>
            </header>
          </article>
        </Container>
      </main>
    </PageLayout>
  );
}
