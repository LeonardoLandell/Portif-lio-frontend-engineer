import { pt as commonPt } from "./common/pt";

import { en as commonEn } from "./common/en";

import { engineeringPt } from "./engineering/pt";

import { engineeringEn } from "./engineering/en";

import { projectosPt } from "./projectos/pt";

import { projectosEn } from "./projectos/en";

import { crmPt } from "./crm/pt";

import { crmEn } from "./crm/en";

import { forecastPt } from "./forecast-os/pt";

import { forecastEn } from "./forecast-os/en";

import { demosPt } from "./demos/pt";

import { demosEn } from "./demos/en";

import { casesPt } from "./cases/pt";

import { casesEn } from "./cases/en";

import { projectOSCasePt } from "./cases/project-os/pt";

import { projectOSCaseEn } from "./cases/project-os/en";

import { crmCasePt } from "./cases/crm/pt";

import { crmCaseEn } from "./cases/crm/en";

import { forecastCasePt } from "./cases/forecast/pt";

import { forecastCaseEn } from "./cases/forecast/en";

export const messages = {
  pt: {
    ...commonPt,

    ...engineeringPt,

    ...projectosPt,

    ...crmPt,

    ...forecastPt,

    ...demosPt,

    ...casesPt,

    ...projectOSCasePt,

    ...crmCasePt,

    ...forecastCasePt,
  },

  en: {
    ...commonEn,

    ...engineeringEn,

    ...projectosEn,

    ...crmEn,

    ...forecastEn,

    ...demosEn,

    ...casesEn,

    ...projectOSCaseEn,

    ...crmCaseEn,

    ...forecastCaseEn,
  },
};

export type Language = keyof typeof messages;

export type LanguageSchema = typeof messages.pt;
