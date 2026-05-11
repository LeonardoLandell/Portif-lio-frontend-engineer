"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";

import { useLanguage } from "@/hooks/use-language";

import styles from "./hero.module.css";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <Container>
        <motion.div
          className={styles.content}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className={styles.badge}>{t.hero.badge}</div>

          <h1 className={styles.title}>{t.hero.title}</h1>

          <p className={styles.description}>{t.hero.description}</p>

          <div className={styles.actions}>
            <Link href="/demos" className={styles.primaryButton}>
              {t.hero.explore}
            </Link>

            <Link href="/engineering" className={styles.secondaryButton}>
              {t.hero.projects}
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
