"use client";

import { useState } from "react";

import {
  Blocks,
  Cpu,
  LayoutDashboard,
  Rocket,
  Workflow,
  BarChart3,
  KanbanSquare,
} from "lucide-react";

import { PageLayout } from "@/components/layout/page-layout";

import { Container } from "@/components/layout/container";

import { useLanguage } from "@/hooks/use-language";

import styles from "./page.module.css";

const tabs = [
  {
    key: "overview",

    icon: LayoutDashboard,
  },

  {
    key: "pipeline",

    icon: KanbanSquare,
  },

  {
    key: "automation",

    icon: Workflow,
  },

  {
    key: "tracking",

    icon: BarChart3,
  },

  {
    key: "ux",

    icon: Blocks,
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

export function CRMPage() {
  const { t } = useLanguage();

  const [activeTab, setActiveTab] = useState("overview");

  const active = t.crmPage.tabs[activeTab as keyof typeof t.crmPage.tabs];

  const activeTabData = tabs.find((tab) => tab.key === activeTab);

  const Icon = activeTabData?.icon || LayoutDashboard;

  return (
    <PageLayout>
      <section className={styles.page}>
        <Container>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>{t.crmPage.eyebrow}</span>

            <h1 className={styles.title}>{t.crmPage.title}</h1>

            <p className={styles.description}>{t.crmPage.description}</p>
          </div>

          <div className={styles.metadata}>
            <div className={styles.metaItem}>
              <span>{t.crmPage.metadata.status}</span>

              <strong>{t.crmPage.metadata.statusValue}</strong>
            </div>

            <div className={styles.metaItem}>
              <span>{t.crmPage.metadata.platform}</span>

              <strong>{t.crmPage.metadata.platformValue}</strong>
            </div>

            <div className={styles.metaItem}>
              <span>{t.crmPage.metadata.architecture}</span>

              <strong>{t.crmPage.metadata.architectureValue}</strong>
            </div>

            <div className={styles.metaItem}>
              <span>{t.crmPage.metadata.version}</span>

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
                {t.crmPage.tabs[tab.key as keyof typeof t.crmPage.tabs].label}
              </button>
            ))}
          </div>

          <div className={styles.panel}>
            <div className={styles.panelIcon}>
              <Icon size={24} />
            </div>

            <div>
              <span className={styles.panelLabel}>EXECUTIVE CRM</span>

              <h2 className={styles.panelTitle}>{active.title}</h2>

              <p className={styles.panelText}>{active.description}</p>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
