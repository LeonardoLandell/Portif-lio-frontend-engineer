"use client";

import { useState } from "react";

import {
  Blocks,
  Cpu,
  FileText,
  LayoutDashboard,
  Rocket,
  Workflow,
} from "lucide-react";

import { PageLayout } from "@/components/layout/page-layout";

import { Container } from "@/components/layout/container";

import { useLanguage } from "@/hooks/use-language";

import styles from "./page.module.css";

const tabs = [
  {
    key: "overview",

    icon: FileText,
  },

  {
    key: "architecture",

    icon: Blocks,
  },

  {
    key: "automation",

    icon: Workflow,
  },

  {
    key: "systems",

    icon: Blocks,
  },

  {
    key: "tracking",

    icon: Workflow,
  },

  {
    key: "ux",

    icon: LayoutDashboard,
  },

  {
    key: "infrastructure",

    icon: Cpu,
  },

  {
    key: "roadmap",

    icon: Rocket,
  },
];

export function ProjectOSPage() {
  const { t } = useLanguage();

  const [activeTab, setActiveTab] = useState("overview");

  const active =
    t.projectosPage.tabs[activeTab as keyof typeof t.projectosPage.tabs];

  const activeTabData = tabs.find((tab) => tab.key === activeTab);

  const Icon = activeTabData?.icon || FileText;

  return (
    <PageLayout>
      <section className={styles.page}>
        <Container>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>{t.projectosPage.eyebrow}</span>

            <h1 className={styles.title}>{t.projectosPage.title}</h1>

            <p className={styles.description}>{t.projectosPage.description}</p>
          </div>

          <div className={styles.metadata}>
            <div className={styles.metaItem}>
              <span>{t.projectosPage.metadata.status}</span>

              <strong>{t.projectosPage.metadata.statusValue}</strong>
            </div>

            <div className={styles.metaItem}>
              <span>{t.projectosPage.metadata.platform}</span>

              <strong>{t.projectosPage.metadata.platformValue}</strong>
            </div>

            <div className={styles.metaItem}>
              <span>{t.projectosPage.metadata.architecture}</span>

              <strong>{t.projectosPage.metadata.architectureValue}</strong>
            </div>

            <div className={styles.metaItem}>
              <span>{t.projectosPage.metadata.version}</span>

              <strong>v0.1</strong>
            </div>
          </div>

          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={
                  activeTab === tab.key ? styles.activeTab : styles.tab
                }
              >
                {
                  t.projectosPage.tabs[
                    tab.key as keyof typeof t.projectosPage.tabs
                  ].label
                }
              </button>
            ))}
          </div>

          <div className={styles.panel}>
            <div className={styles.panelIcon}>
              <Icon size={24} />
            </div>

            <div>
              <span className={styles.panelLabel}>PROJECT OS</span>

              <h2 className={styles.panelTitle}>{active.title}</h2>

              <p className={styles.panelText}>{active.description}</p>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
