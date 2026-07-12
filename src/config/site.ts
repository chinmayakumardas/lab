export const siteConfig = {
  name: "Chinmaya Kumar Das",
  title: "Chinmaya Kumar Das | Lab",
  description:
    "Personal developer lab where I build tools, experiment with technologies, and create useful projects.",

  url: "https://lab.chinmayakumardas.com",

  author: {
    name: "Chinmaya Kumar Das",
    email: "chinmayakumardas2000@gmail.com",
  },

  social: [
    {
      name: "GitHub",
      url: "https://github.com/chinmayakumardas",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/chinmayakumardas2",
    },
    {
      name: "X",
      url: "https://x.com/chinmayakmrdas",
    },
  ],

  navigation: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  routes: [
    {
      path: "/",
      priority: 1,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/about",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/contact",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/tools",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/privacy-policy",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/cookies-policy",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/terms-and-conditions",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
  ],

};