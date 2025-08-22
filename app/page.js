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
      <div className="relative container-px py-16 sm:py-24">
        {/* Left Centered Wrapper */}
        <div className="w-full max-w-3xl ">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mx-auto">
            <span className="gradient-text block">The platform for</span>
            <span className="block text-gray-100">building tomorrow's intelligent applications</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            We design, develop, and deploy modern software—web, mobile, SaaS, and AI agents—
            with craftsmanship and speed.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Link
              href="/services"
              className="group relative inline-flex items-center rounded-xl px-6 py-3 font-semibold text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 transition"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-lime-300 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] group-hover:brightness-110 group-active:brightness-95" />
              <span className="relative">Explore services</span>
            </Link>
          </div>
        </div>
      </div>

  <div className="relative mx-auto mt-4 sm:mt-0 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8 pb-16">
        {cards.map(({ title, text, href, Icon }) => (
          <Link key={title} href={href} className="group rounded-2xl border border-gray-800 bg-gray-900 p-6 hover:bg-gray-800 transition">
            <div className="flex items-center gap-3">
              <div className="hex-badge">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold text-brand">{title}</div>
            </div>
            <div className="mt-2 text-gray-300">{text}</div>
            <div className="mt-4 text-sm font-semibold text-gray-200 group-hover:text-brand">Learn more →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
