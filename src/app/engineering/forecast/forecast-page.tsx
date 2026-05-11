"use client";

import { useState } from "react";

import {
  Activity,
  BarChart3,
  Brain,
  Cpu,
  LayoutDashboard,
  Rocket,
  TrendingUp,
} from "lucide-react";

import { PageLayout } from "@/components/layout/page-layout";

import { Container } from "@/components/layout/container";

import { useLanguage } from "@/hooks/use-language";

import styles from "../forecast/page.module.css";

const tabs = [
  {
    key: "overview",

    icon: LayoutDashboard,
  },

  {
    key: "analytics",

    icon: BarChart3,
  },

  {
    key: "forecasting",

    icon: TrendingUp,
  },

  {
    key: "visualization",

    icon: Brain,
  },

  {
    key: "realtime",

    icon: Activity,
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

export function ForecastPage() {
  const { t } = useLanguage();

  const [activeTab, setActiveTab] = useState("overview");

  const active =
    t.forecastPage.tabs[activeTab as keyof typeof t.forecastPage.tabs];

  const activeTabData = tabs.find((tab) => tab.key === activeTab);

  const Icon = activeTabData?.icon || LayoutDashboard;

  return (
    <PageLayout>
      <section className={styles.page}>
        <Container>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>{t.forecastPage.eyebrow}</span>

            <h1 className={styles.title}>{t.forecastPage.title}</h1>

            <p className={styles.description}>{t.forecastPage.description}</p>
          </div>

          <div className={styles.metadata}>
            <div className={styles.metaItem}>
              <span>{t.forecastPage.metadata.status}</span>

              <strong>{t.forecastPage.metadata.statusValue}</strong>
            </div>

            <div className={styles.metaItem}>
              <span>{t.forecastPage.metadata.platform}</span>

              <strong>{t.forecastPage.metadata.platformValue}</strong>
            </div>

            <div className={styles.metaItem}>
              <span>{t.forecastPage.metadata.architecture}</span>

              <strong>{t.forecastPage.metadata.architectureValue}</strong>
            </div>

            <div className={styles.metaItem}>
              <span>{t.forecastPage.metadata.version}</span>

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
                  t.forecastPage.tabs[
                    tab.key as keyof typeof t.forecastPage.tabs
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
              <span className={styles.panelLabel}>FORECAST OS</span>

              <h2 className={styles.panelTitle}>{active.title}</h2>

              <p className={styles.panelText}>{active.description}</p>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
