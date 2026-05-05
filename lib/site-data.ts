import { Bot, BriefcaseBusiness, Code2, Crown, LineChart, Rocket, ShieldCheck, Smartphone, Workflow } from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    title: "AI Automation",
    slug: "ai-automation",
    icon: Bot,
    summary: "Turn repeat work into reviewed, trackable workflows your team can trust.",
    benefits: ["Process automation", "AI copilots", "CRM and support intelligence", "Data-driven decisioning"],
  },
  {
    title: "Website Development",
    slug: "website-development",
    icon: Code2,
    summary: "Build a web presence that explains the business clearly and earns the next conversation.",
    benefits: ["Next.js architecture", "SEO and performance", "CMS-ready systems", "Conversion-focused UX"],
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    icon: Smartphone,
    summary: "Design focused mobile tools for customers, teams, or field workflows.",
    benefits: ["React Native apps", "API integration", "Design systems", "Store launch support"],
  },
  {
    title: "Business Optimization",
    slug: "business-optimization",
    icon: LineChart,
    summary: "Untangle scattered tools and make everyday operations easier to manage.",
    benefits: ["Workflow audits", "Growth analytics", "Tech stack modernization", "Operational dashboards"],
  },
];

export const differentiators = [
  { title: "Strategy before software", icon: BriefcaseBusiness, copy: "We map business outcomes first, then build the systems that move them." },
  { title: "Automation with accountability", icon: Workflow, copy: "Every AI workflow includes human review paths, clear metrics, and maintainable logic." },
  { title: "Launch-ready engineering", icon: Rocket, copy: "We design for performance, accessibility, SEO, and future iteration from day one." },
  { title: "Trust-centered delivery", icon: ShieldCheck, copy: "Transparent scope, secure defaults, and pragmatic documentation keep teams confident." },
];

export const testimonials = [
  {
    quote: "Aurentra helped us replace manual lead handling with a smart automation flow. Response speed improved immediately.",
    name: "Priya Mehta",
    role: "Founder, Growthlane",
  },
  {
    quote: "The team translated our scattered ideas into a polished product experience investors could understand in one demo.",
    name: "Arjun Rao",
    role: "CEO, Northstar Labs",
  },
  {
    quote: "Fast, thoughtful, and very clear. They built the kind of website that finally matched our positioning.",
    name: "Nisha Kapoor",
    role: "Director, FinEdge",
  },
];

export const projects = [
  { title: "AI Sales Copilot", category: "Automation", result: "42% faster lead qualification" },
  { title: "Clinic Booking Platform", category: "Web App", result: "3x appointment completion" },
  { title: "Retail Ops Dashboard", category: "Transformation", result: "18 hours saved weekly" },
];

export const jobs = [
  { title: "Full-Stack Developer", type: "Full-time", location: "Remote / India", focus: "Next.js, Node.js, APIs" },
  { title: "AI Automation Consultant", type: "Contract", location: "Hybrid", focus: "Workflow design, LLM tools, integrations" },
  { title: "UI/UX Designer", type: "Full-time", location: "Remote", focus: "Product design, design systems, prototypes" },
];

export const team = [
  { name: "Akhil S", role: "CEO & Co-Founder", icon: Crown },
  { name: "Subash Chandra Bose G S", role: "Co-Founder", icon: BriefcaseBusiness },
  { name: "Aurentra Delivery Team", role: "AI, Web, Mobile & Growth Specialists", icon: Code2 },
];
