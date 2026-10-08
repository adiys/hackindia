import { defineConfig } from "vitepress";

export default defineConfig({
  title: "HackIndia Handbook",
  description: "HackIndia 2026–27 participant handbook",
  appearance: "dark",
  base: "/handbook/",
  cleanUrls: true,
  head: [
    ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-29NMW93BKC" }],
    ["script", {}, `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-29NMW93BKC');`],
  ],
  themeConfig: {
    logo: "https://github.com/HackIndiaXYZ/Logo-and-Assets/blob/main/HackIndia%20Logo/Only%20Logo%20-%20HackIndia%20512x512.png?raw=true",
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      { text: "Home 🏠", items: [{ text: "Start Here", link: "/starthere" }] },
      { text: "Tracks 🚗", items: [{ text: "Overview", link: "/tracks/index" }] },
      { text: "Problem Statements ❓", items: [{ text: "2026–27 Overview", link: "/problem-statement/index" }] },
      { text: "Resources 📚", collapsed: true, items: [
        { text: "AI ", base: "/resources/ai/", items: [
          { text: "Glossary", link: "glossary" }, { text: "Videos", link: "videos" }, { text: "Courses", link: "courses" }
        ]},
        { text: "Web3 ", base: "/resources/web3/", items: [
          { text: "Glossary", link: "glossary" }, { text: "Videos", link: "videos" }, { text: "Courses", link: "courses" }
        ]}
      ]},
      { text: "Important Links 🔗", items: [{ text: "Overview", link: "/important-links/index" }] },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2026-present HackIndia",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/HackIndiaXYZ" },
      { icon: "x", link: "https://x.com/HackIndiaXYZ" },
      { icon: "facebook", link: "https://facebook.com/HackIndiaXYZ" },
    ],
    search: { provider: "local" },
  },
});