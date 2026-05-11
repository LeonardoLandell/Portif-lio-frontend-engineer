"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowUpRight, FileText } from "lucide-react";

import { EngineeringItem } from "@/data/engineering";

import { useLanguage } from "@/hooks/use-language";

import styles from "./engineering-card.module.css";

type Props = {
  item: EngineeringItem;
};

export function EngineeringCard({ item }: Props) {
  const { t } = useLanguage();

  const content =
    t.engineeringCards?.[item.id as keyof typeof t.engineeringCards];

  return (
    <motion.article
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Link href={item.href} className={styles.card}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <FileText size={20} className={styles.icon} />
          </div>

          <ArrowUpRight size={18} className={styles.arrow} />
        </div>

        <div className={styles.content}>
          <span className={styles.projectLabel}>{content?.title}</span>

          <h3 className={styles.title}>{content?.category}</h3>

          <p className={styles.description}>{content?.description}</p>
        </div>

        <div className={styles.stack}>
          {item.stack.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.article>
  );
}
