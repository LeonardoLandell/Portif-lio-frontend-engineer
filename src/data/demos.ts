export type Demo = {
  id: string;

  stack: string[];

  liveUrl: string;

  githubUrl: string;

  thumbnail: string;

  featured?: boolean;
};

export const demos: Demo[] = [
  {
    id: "crm",

    stack: ["Next.js", "TypeScript", "Framer Motion"],

    liveUrl: "https://mini-crm-os.vercel.app/",

    githubUrl: "https://github.com/LeonardoLandell/mini-crm-os",

    thumbnail: "/demos/thumb-crm.png",

    featured: true,
  },

  {
    id: "forecast",

    stack: ["AI", "Analytics", "Data Visualization"],

    liveUrl: "https://forecast-os-one.vercel.app/",

    githubUrl: "https://vercel.com/landell-studios/forecast-os",

    thumbnail: "/demos/thum-foracast.png",

    featured: true,
  },
  {
    id: "projectos",

    stack: ["Next.js", "Automation", "Workspace"],

    liveUrl: "https://project-os-smoky.vercel.app/",

    githubUrl: "https://github.com/LeonardoLandell/Project-OS",

    thumbnail: "/demos/ThumbP-O.png",

    featured: true,
  },
];
