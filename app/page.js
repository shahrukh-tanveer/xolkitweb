import Link from "next/link";
import { CodeBracketIcon, DevicePhoneMobileIcon, SparklesIcon, BuildingOffice2Icon, WrenchScrewdriverIcon, PaintBrushIcon } from "@heroicons/react/24/outline";

export default function HomePage() {
  const cards = [
    { title: "Web Development", text: "Next.js apps that are fast, accessible, and scalable.", href: "/services/web-development", Icon: CodeBracketIcon },
    { title: "Mobile Apps", text: "Native-like experiences for iOS and Android.", href: "/services/mobile-app-development", Icon: DevicePhoneMobileIcon },
    { title: "AI Agents", text: "Autonomous/assistive agents that act in your stack.", href: "/services/ai-agents", Icon: SparklesIcon },
    { title: "SaaS", text: "From MVP to scale with robust multi-tenant architectures.", href: "/services/saas", Icon: BuildingOffice2Icon },
    { title: "Software", text: "Custom software that unlocks business value.", href: "/services/software-development", Icon: WrenchScrewdriverIcon },
    { title: "Design", text: "Visual identities and interfaces that convert.", href: "/services/graphic-design", Icon: PaintBrushIcon },
  ];
  return (
    <section className="relative overflow-hidden">
      <div className="relative container-px pt-36 sm:pt-44 lg:pt-56 pb-24 sm:pb-32 min-h-[70vh]">
        <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-gray-100">
          Launchpad for building tomorrow's intelligent applications
        </h1>
  <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
    Integrate AI. Ship faster. Web, mobile, and SaaS—built right.
  </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <Link href="/contact" className="inline-flex items-center rounded-lg bg-brand px-5 py-3 text-white font-semibold shadow hover:bg-brand-dark">Start a project</Link>
          <Link href="/services" className="inline-flex items-center rounded-lg border border-gray-800 bg-gray-900 px-5 py-3 font-semibold hover:bg-gray-800 text-gray-100">Explore services</Link>
        </div>
        </div>
      </div>

      {/* Prominent feature tiles */}
      <div className="relative mx-auto mt-2 sm:mt-6 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
        {cards.map(({ title, text, href, Icon }) => (
          <Link
            key={title}
            href={href}
            className="group relative overflow-hidden rounded-3xl border border-[#1e2733] bg-[#0f1924] p-7 sm:p-8 min-h-[220px] flex flex-col justify-between shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.6)] hover:border-slate-400/30 transition"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <span className="hex-badge">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-base font-semibold text-brand">{title}</span>
            </div>
            <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed">{text}</p>
            <span className="mt-5 text-sm font-semibold text-gray-200 group-hover:text-brand">Learn more →</span>
          </Link>
        ))}
      </div>

      {/* Newsletter subscribe */}
      <div className="relative mx-auto mt-12 sm:mt-16 max-w-4xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-3xl border border-[#1e2733] bg-[#0f1924] p-6 sm:p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Stay ahead of the curve</h2>
          <p className="mt-2 text-gray-300">
            Join our newsletter for practical insights on modern web, mobile, and AI. Get early access to new
            playbooks, tech deep dives, and exclusive discounts on build sprints. Zero spam—just value.
          </p>
          <form className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="rounded-xl bg-gray-900/80 border border-[#1e2733] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400/30 placeholder:text-gray-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="rounded-xl bg-gray-900/80 border border-[#1e2733] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400/30 placeholder:text-gray-500"
              required
            />
            <button
              type="button"
              className="rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow hover:bg-brand-dark"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-400">We’ll send 1–2 emails a month and never share your data. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
