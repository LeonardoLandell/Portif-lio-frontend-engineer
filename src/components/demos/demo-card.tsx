"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowUpRight, GitBranch } from "lucide-react";

import { Demo } from "@/data/demos";

import { useLanguage } from "@/hooks/use-language";

import styles from "./demo-card.module.css";

type Props = {
  demo: Demo;
};

export function DemoCard({ demo }: Props) {
  const { t } = useLanguage();

  const content = t.demoCards?.[demo.id as keyof typeof t.demoCards];

  return (
    <motion.article
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className={styles.card}
    >
      <div className={styles.thumbnail}>
        <img
          src={demo.thumbnail}
          alt={content?.title}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <span className={styles.category}>{content?.category}</span>

            <h3 className={styles.title}>{content?.title}</h3>
          </div>

          <span className={styles.status}>{content?.status}</span>
        </div>

        <p className={styles.description}>{content?.description}</p>

        <div className={styles.stack}>
          {demo.stack.map((item) => (
            <span key={item} className={styles.tag}>
              {item}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          <Link
            href={demo.liveUrl}
            target="_blank"
            className={styles.primaryButton}
          >
            Live Demo
            <ArrowUpRight size={16} />
          </Link>

          <Link
            href={demo.githubUrl}
            target="_blank"
            className={styles.secondaryButton}
          >
            Github
            <GitBranch size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
