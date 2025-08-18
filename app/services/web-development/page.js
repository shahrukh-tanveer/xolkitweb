export const metadata = { title: "Web Development" };

export default function WebDevPage() {
  return (
    <section className="py-12 max-w-3xl">
      <h1 className="text-3xl font-bold">Web Development</h1>
      <p className="mt-4 text-gray-700">
        We design and deliver modern web applications using Next.js, focusing on performance, accessibility, and DX.
        We ship clean, tested code with CI/CD and observability from day one.
      </p>
      <ul className="mt-4 list-disc pl-6 text-gray-700">
        <li>Next.js (App Router), React 18, edge-friendly architectures</li>
        <li>API design (REST/GraphQL), integrations, and data pipelines</li>
        <li>Performance budgets, Core Web Vitals, and SEO best practices</li>
        <li>Design systems with Tailwind and component libraries</li>
      </ul>
    </section>
  );
}
