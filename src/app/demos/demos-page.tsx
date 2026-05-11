"use client";

import { demos } from "@/data/demos";

import { useLanguage } from "@/hooks/use-language";

import { PageLayout } from "@/components/layout/page-layout";

import { Container } from "@/components/layout/container";

import { DemoCard } from "@/components/demos/demo-card";

import styles from "./page.module.css";

export function DemosPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <section className={styles.page}>
        <Container>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>{t.demosPage.eyebrow}</span>

            <h1 className={styles.title}>
              {t.demosPage.title.first}

              <span className={styles.highlight}>
                {t.demosPage.title.highlight}
              </span>

              {t.demosPage.title.second}
            </h1>

            <p className={styles.description}>{t.demosPage.description}</p>
          </div>

          <div className={styles.grid}>
            {demos.map((demo) => (
              <DemoCard key={demo.id} demo={demo} />
            ))}
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
