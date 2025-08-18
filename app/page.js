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
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          <span className="gradient-text">Build boldly</span> with Xolkit
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We design, develop, and deploy modern software—web, mobile, SaaS, and AI agents—
          with craftsmanship and speed.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/contact" className="inline-flex items-center rounded-lg bg-brand px-5 py-3 text-white font-semibold shadow hover:bg-brand-dark">Start a project</Link>
          <Link href="/services" className="inline-flex items-center rounded-lg border px-5 py-3 font-semibold hover:bg-gray-50">Explore services</Link>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ title, text, href, Icon }) => (
          <Link key={title} href={href} className="group rounded-2xl border p-6 hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-brand/10 p-2 text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold text-brand">{title}</div>
            </div>
            <div className="mt-2 text-gray-700">{text}</div>
            <div className="mt-4 text-sm font-semibold text-gray-900 group-hover:text-brand">Learn more →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
