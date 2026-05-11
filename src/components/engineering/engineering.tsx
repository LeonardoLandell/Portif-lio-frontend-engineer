"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

import { EngineeringItem } from "@/data/engineering";

import styles from "./engineering-card.module.css";

type Props = {
  item: EngineeringItem;
};

export function EngineeringCard({ item }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Link href={item.href} className={styles.card}>
        <div className={styles.top}>
          <span className={styles.category}>{item.category}</span>

          <ArrowUpRight size={18} className={styles.icon} />
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{item.title}</h3>

          <p className={styles.description}>{item.description}</p>
        </div>

        <div className={styles.stack}>
          {item.stack.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
