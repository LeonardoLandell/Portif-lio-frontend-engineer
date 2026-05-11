import { demos } from "@/data/demos";

import { Container } from "@/components/layout/container";

import { DemoCard } from "./demo-card";

import styles from "./demos-section.module.css";

export function DemosSection() {
  const featuredDemos = demos.filter((demo) => demo.featured);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>FEATURED DEMOS</span>

          <h2 className={styles.title}>
            Product-driven systems built with engineering, UX and motion.
          </h2>

          <p className={styles.description}>
            Interactive experiences focused on enterprise workflows, intelligent
            interfaces and scalable frontend architecture.
          </p>
        </div>

        <div className={styles.grid}>
          {featuredDemos.map((demo) => (
            <DemoCard key={demo.id} demo={demo} />
          ))}
        </div>
      </Container>
    </section>
  );
}
