export const metadata = { title: "Portfolio – Web Development" };

export default function PortfolioWebDevPage() {
  return (
    <section className="py-12 max-w-4xl">
      <h1 className="text-3xl font-bold">Web Development</h1>
      <p className="mt-4 text-gray-700">
        Selected web projects showcasing performance, craftsmanship, and scale. Replace these placeholders with your
        real projects, metrics, and screenshots.
      </p>
      <ul className="mt-4 list-disc pl-6 text-gray-700">
        <li>Marketing site with 90+ Lighthouse scores</li>
        <li>B2B dashboard with real-time analytics</li>
        <li>Multi-region e-commerce with edge rendering</li>
      </ul>
    </section>
  );
}
