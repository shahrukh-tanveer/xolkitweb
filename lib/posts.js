export const posts = [
  {
    slug: "ai-agents-in-2025",
    title: "AI Agents in 2025: From Demos to Durable Workflows",
    date: "2025-08-01",
    excerpt: "How production-grade agents are reshaping outreach, support, and ops.",
    content: `Agents moved beyond chat into work. The shift is from prompts to processes:\n\n- Tool use grounded in reliable APIs\n- Observability and guardrails\n- Outcome-first evaluation\n\nWe cover patterns that work today and traps to avoid.`,
  },
  {
    slug: "design-systems-that-convert",
    title: "Design Systems That Convert",
    date: "2025-07-18",
    excerpt: "Marrying brand, speed, and clarity to move key metrics.",
    content: `Not all systems are equal. The best ones ship faster without sacrificing UX.\nWe share principles and components that reduce complexity while improving outcomes.`,
  },
  {
    slug: "nextjs-performance-playbook",
    title: "Next.js Performance Playbook",
    date: "2025-07-05",
    excerpt: "A practical guide to hit Core Web Vitals consistently.",
    content: `Focus on render strategy, cache, and payload:\n- Static/ISR where possible\n- Edge for latency-sensitive paths\n- Ship fewer bytes: images, fonts, JS\n- Measure and iterate`,
  },
  {
    slug: "shipping-saas-faster",
    title: "Shipping SaaS Faster (Without Regrets)",
    date: "2025-06-22",
    excerpt: "Choosing the right abstractions early pays compounding dividends.",
    content: `Pick the basics and nail them: auth, billing, environments, migrations, and observability.\nAdopt feature flags, lean schemas, and pay down debt continuously.`,
  },
  {
    slug: "mobile-ux-in-the-ai-era",
    title: "Mobile UX in the AI Era",
    date: "2025-06-10",
    excerpt: "Context-aware interfaces that feel magical—yet predictable.",
    content: `AI-native apps must be assistive, not intrusive.\nDesign with intent: progressive disclosure, transparent AI actions, and clear undo.`,
  },
  {
    slug: "evaluating-ai-products",
    title: "Evaluating AI Products: Metrics That Matter",
    date: "2025-05-28",
    excerpt: "From accuracy to ROI: align evaluation with business outcomes.",
    content: `Adopt a layered scorecard: offline evals, online A/Bs, and operational metrics.\nInclude cost controls and safety checks in the loop.`,
  },
  {
    slug: "secure-software-by-default",
    title: "Secure Software by Default",
    date: "2025-05-12",
    excerpt: "Bake security and privacy into the product, not the checklist.",
    content: `Principle of least privilege, audit trails, encryption in transit/at rest.\nThreat model early and revisit with each major change.`,
  },
  {
    slug: "from-mvp-to-scale",
    title: "From MVP to Scale: What Actually Changes",
    date: "2025-04-30",
    excerpt: "Team, process, and architecture shifts you should plan for.",
    content: `You don't rewrite—You refactor with intent.\nIntroduce boundaries, queues, and robust contracts where the traffic flows.`,
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}
