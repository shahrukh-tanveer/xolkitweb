import Link from "next/link";

export const metadata = { title: "Portfolio" };

const items = [
  { name: "Logo Design", href: "/portfolio/logo-design", desc: "Brand marks and visual identity." },
  { name: "Web Development", href: "/portfolio/web-development", desc: "Web apps, sites, and platforms." },
  { name: "App Development", href: "/portfolio/app-development", desc: "Mobile and desktop apps." },
];

export default function PortfolioPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <p className="mt-2 text-gray-700">A selection of our work.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((c) => (
          <Link key={c.href} href={c.href} className="rounded-xl border p-5 hover:shadow-md transition">
            <div className="text-brand font-semibold">{c.name}</div>
            <div className="mt-1 text-gray-700 text-sm">{c.desc}</div>
            <div className="mt-3 text-sm font-semibold">View →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
