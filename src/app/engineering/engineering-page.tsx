"use client";

import { PageLayout } from "@/components/layout/page-layout";

import { Container } from "@/components/layout/container";

import { EngineeringCard } from "@/components/engineering/engineering-card";

import { engineeringItems } from "@/data/engineering";

import { useLanguage } from "@/hooks/use-language";

import styles from "./page.module.css";

export function EngineeringPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <section className={styles.page}>
        <Container>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>{t.engineeringPage.eyebrow}</span>

            <h1 className={styles.title}>{t.engineeringPage.title}</h1>

            <p className={styles.description}>
              {t.engineeringPage.description}
            </p>
          </div>

          <div className={styles.focusGrid}>
            {t.engineeringFocus.map((item) => (
              <div key={item} className={styles.focusCard}>
                {item}
              </div>
            ))}
          </div>

          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>
              {t.engineeringPage.systemsLabel}
            </span>

            <h2 className={styles.sectionTitle}>
              {t.engineeringPage.systemsTitle}
            </h2>
          </div>

          <div className={styles.grid}>
            {engineeringItems.map((item) => (
              <EngineeringCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
