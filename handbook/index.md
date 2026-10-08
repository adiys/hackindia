---
layout: home
---

<script setup>
const cards = [
  { icon: "🚀", title: "Start Here", text: "Register, form your team, choose your event, and understand the build process.", href: "/hackindia/starthere", action: "Open guide →" },
  { icon: "🤖", title: "AI & AI Agents", text: "Build with GenAI, LLMs, agents, automation, and intelligent applications.", href: "/hackindia/tracks/index", action: "Explore track →" },
  { icon: "⛓️", title: "Web3 & Blockchain", text: "Explore decentralized applications, protocols, identity, and digital ownership.", href: "/hackindia/tracks/index", action: "Explore track →" },
  { icon: "🛡️", title: "Cybersecurity", text: "Solve challenges around privacy, identity, fraud, threats, and secure systems.", href: "/hackindia/tracks/index", action: "Explore track →" },
  { icon: "💡", title: "Open Innovation", text: "Build a meaningful solution beyond a predefined problem statement.", href: "/hackindia/tracks/index", action: "Explore track →" },
  { icon: "🏆", title: "Submission & Judging", text: "Prepare your prototype, demo, repository, pitch, and final submission.", href: "/hackindia/project-submission/index", action: "View submission guide →" }
]
</script>

<div class="hackindia-feature-grid">
  <a v-for="card in cards" :key="card.title" class="hackindia-feature-card" :href="card.href">
    <div class="hackindia-feature-icon">{{ card.icon }}</div>
    <h3>{{ card.title }}</h3>
    <p>{{ card.text }}</p>
    <span class="hackindia-feature-link">{{ card.action }}</span>
  </a>
</div>

<div class="hackindia-quick-links">
  <a href="/hackindia/starthere">🚀 Start Here</a>
  <a href="/hackindia/tracks/index">🎯 Tracks</a>
  <a href="/hackindia/problem-statement/index">❓ Problem Statements</a>
  <a href="/hackindia/project-submission/index">📦 Project Submission</a>
  <a href="/hackindia/judging-criteria/index">🏆 Judging Criteria</a>
  <a href="/hackindia/resources/index">📚 Resources</a>
</div>
