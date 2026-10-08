import { defineConfig } from "vitepress";

export default defineConfig({
  title: "HackIndia Handbook",
  description: "HackIndia 2026–27 participant handbook",
  appearance: "dark",
  base: "/hackindia/",
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
    nav: [
      { text: "Home", link: "/" },
      { text: "Start Here", link: "/starthere" },
      { text: "Tracks", link: "/tracks/index" },
      { text: "Problem Statements", link: "/problem-statement/index" },
      { text: "Submission", link: "/project-submission/index" },
      { text: "Judging", link: "/judging-criteria/index" },
      { text: "Resources", link: "/resources/index" },
    ],
    sidebar: [
      {
        text: "Home 🏠",
        items: [{ text: "Start Here", link: "/starthere" }]
      },
      {
        text: "Tracks 🚀",
        items: [{ text: "Overview", link: "/tracks/index" }]
      },
      {
        text: "Problem Statements ❓",
        items: [{ text: "2026–27 Overview", link: "/problem-statement/index" }]
      },
      {
        text: "Project Submission 📦",
        items: [{ text: "Submission Guide", link: "/project-submission/index" }]
      },
      {
        text: "Judging Criteria 🏆",
        items: [{ text: "Evaluation", link: "/judging-criteria/index" }]
      },
      {
        text: "Resources 📚",
        items: [
          { text: "AI Glossary", link: "/resources/ai/glossary" },
          { text: "AI Videos", link: "/resources/ai/videos" },
          { text: "AI Courses", link: "/resources/ai/courses" },
          { text: "Web3 Glossary", link: "/resources/web3/glossary" },
          { text: "Web3 Videos", link: "/resources/web3/videos" },
          { text: "Web3 Courses", link: "/resources/web3/courses" }
        ]
      },
      {
        text: "Important Links 🔗",
        items: [{ text: "Overview", link: "/important-links/index" }]
      }
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