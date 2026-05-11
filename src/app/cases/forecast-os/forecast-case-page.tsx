"use client";

import type { ReactElement } from "react";

import { PageLayout } from "@/components/layout/page-layout";
import { Container } from "@/components/layout/container";

import { useLanguage } from "@/hooks/use-language";

import styles from "./page.module.css";

export function ForecastCasePage(): ReactElement | null {
  const { t } = useLanguage();

  const content = t.forecastCasePage;

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

            <section className={styles.section}>
              <h2>{sections.context.title}</h2>

              {sections.context.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={`context-${index}`}>{paragraph}</p>
                ),
              )}
            </section>

            <section className={styles.section}>
              <h2>{sections.challenge.title}</h2>

              {sections.challenge.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={`challenge-${index}`}>{paragraph}</p>
                ),
              )}

              <blockquote>{sections.challenge.quote}</blockquote>
            </section>

            <section className={styles.section}>
              <h2>{sections.thinking.title}</h2>

              {sections.thinking.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={`thinking-${index}`}>{paragraph}</p>
                ),
              )}

              <div className={styles.note}>
                <strong>{sections.thinking.noteTitle}</strong>

                <p>{sections.thinking.note}</p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>{sections.architecture.title}</h2>

              {sections.architecture.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={`architecture-${index}`}>{paragraph}</p>
                ),
              )}
            </section>

            <section className={styles.section}>
              <h2>{sections.ux.title}</h2>

              {sections.ux.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={`ux-${index}`}>{paragraph}</p>
                ),
              )}

              <blockquote>{sections.ux.quote}</blockquote>
            </section>

            <section className={styles.section}>
              <h2>{sections.scalability.title}</h2>

              {sections.scalability.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={`scalability-${index}`}>{paragraph}</p>
                ),
              )}
            </section>

            <section className={styles.section}>
              <h2>{sections.future.title}</h2>

              {sections.future.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={`future-${index}`}>{paragraph}</p>
                ),
              )}
            </section>
          </article>
        </Container>
      </main>
    </PageLayout>
  );
}
