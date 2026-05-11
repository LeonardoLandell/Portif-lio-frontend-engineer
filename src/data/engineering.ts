export type EngineeringItem = {
  id: string;

  title: string;

  category: string;

  description: string;

  stack: string[];

  href: string;
};

export const engineeringItems: EngineeringItem[] = [
  {
    id: "projectos",

    title: "Project OS",

    category: "Operational Workspace",

    description:
      "Architecture decisions, workflow systems and operational infrastructure behind Project OS.",

    stack: ["Next.js", "Automation", "Workspace"],

    href: "/engineering/projectos",
  },

  {
    id: "crm",

    title: "Executive CRM",

    category: "Sales Platform",

    description:
      "Scalable frontend architecture and UX engineering behind the CRM experience.",

    stack: ["Realtime", "Drag & Drop", "Framer Motion"],

    href: "/engineering/crm",
  },

  {
    id: "forecast",

    title: "Forecast Engine",

    category: "Predictive Analytics",

    description:
      "Data visualization systems, forecasting interfaces and executive intelligence architecture.",

    stack: ["Analytics", "Charts", "AI"],

    href: "/engineering/forecast",
  },
];
