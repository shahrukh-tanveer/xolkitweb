import Link from "next/link";

export const metadata = { title: "Services" };

const services = [
  { name: "Customer Center", href: "/services/customer-center", desc: "Omnichannel support with automation and human-in-the-loop." },
  { name: "Web Development", href: "/services/web-development", desc: "Next.js apps, APIs, and integrations." },
  { name: "Mobile App Development", href: "/services/mobile-app-development", desc: "React Native or platform-native as needed." },
  { name: "Software as a Service (SaaS)", href: "/services/saas", desc: "Multi-tenant, secure, scalable products." },
  { name: "Software Development", href: "/services/software-development", desc: "From discovery to delivery for custom software." },
  { name: "AI Agents", href: "/services/ai-agents", desc: "Autonomous and assistive agents built for outcomes." },
  { name: "Graphic Design", href: "/services/graphic-design", desc: "Branding, UI kits, and marketing assets." },
];

export default function ServicesPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-2 text-gray-700 max-w-3xl">End-to-end product development, with AI when it helps—not when it doesn’t.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Link key={s.href} href={s.href} className="rounded-xl border border-gray-800 bg-gray-900 p-5 hover:bg-gray-800 transition">
            <div className="text-brand font-semibold">{s.name}</div>
            <div className="mt-1 text-gray-300 text-sm">{s.desc}</div>
            <div className="mt-3 text-sm font-semibold text-gray-200">Learn more →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
