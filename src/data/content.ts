// ─────────────────────────────────────────────────────────────
// Edit this file to update the whole site. No component touching.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Nguyen Duc Huy",
  role: "Front-end Engineer · Product Builder",
  tagline:
    "I build products, not just features. Flutter, React & TypeScript on the surface — system design underneath.",
  blurb:
    "I'm a front-end engineer who thinks in systems. I care less about closing a single ticket and more about how the whole thing scales: architecture, extensibility, the mechanism beneath the abstraction. When I hit something I don't understand, I keep asking \"why\" until I reach the bottom.",
  location: "Vietnam",
  email: "duchuynguyen93@gmail.com",
  // Update these to your real handles:
  github: "https://github.com/duchuynguyen93",
  linkedin: "",
};

export const stats = [
  { label: "Core stack", value: "Flutter · React · TS" },
  { label: "Focus", value: "Product platforms" },
  { label: "Mindset", value: "System-first" },
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Front-end",
    items: ["Flutter", "React", "TypeScript", "Zustand", "BLoC", "Mobile / Web App"],
  },
  {
    title: "Back-end & Data",
    items: ["REST API", "Firebase", "Odoo", "PostgreSQL", "Module dev"],
  },
  {
    title: "Platform & AI",
    items: ["Mini App platforms", "LLM integration", "OpenRouter", "AI tooling"],
  },
  {
    title: "Systems & Low-level",
    items: ["OS internals", "Networking", "Reverse engineering", "Performance"],
  },
];

export type Project = {
  name: string;
  short: string;
  description: string;
  tags: string[];
  status: "Building" | "Concept" | "Shipped";
  link?: string;
};

export const projects: Project[] = [
  {
    name: "Enterprise Super App",
    short: "A WeChat-style internal platform for the enterprise.",
    description:
      "A single internal platform hosting independent Mini Apps (AMS, TMS, DMS, WMS). Each is a standalone solution, all running on one runtime — inspired by WeChat / Zalo Mini Apps and Power Apps. The hard part isn't the apps; it's the platform contract underneath them.",
    tags: ["Platform", "Mini App", "Architecture", "Flutter"],
    status: "Building",
  },
  {
    name: "AMS — Agricultural Management System",
    short: "Agriculture operations, end to end.",
    description:
      "A management system for agricultural operations — both a customer solution and a personal product idea. The first Mini App proving out the Super App platform model.",
    tags: ["Product", "Odoo", "PostgreSQL", "Mobile"],
    status: "Building",
  },
  {
    name: "Social Platform",
    short: "Community, voice & calling at scale.",
    description:
      "A social platform with calling, voice and community features — designed from day one to compete at scale rather than as a toy. An exploration of real-time infrastructure and product ambition.",
    tags: ["Real-time", "Voice", "Community", "Scale"],
    status: "Concept",
  },
];

export const principles = [
  {
    title: "Think in systems",
    body: "I start from architecture and extensibility, not from the nearest bug. A feature is just the visible edge of a system.",
  },
  {
    title: "Understand the mechanism",
    body: "Almost any topic, I want to know how it works underneath — the principle, the implementation, the trade-offs — not just how to use it.",
  },
  {
    title: "Be exact",
    body: "Accuracy over speed. I'd rather say \"I'm not sure\" and go verify than hand over something that's confidently wrong.",
  },
  {
    title: "Build the ecosystem",
    body: "The through-line across everything I do: a product ecosystem of my own, not a pile of one-off features.",
  },
];

export const interests = [
  "OS internals & kernels",
  "Reverse engineering",
  "Networking",
  "AI / LLMs",
  "Audio gear & DACs",
  "Mechanical keyboards",
  "Hardware tinkering",
  "Fantasy & cultivation fiction",
];
