export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold">About Xolkit</h1>
      <p className="mt-4 text-gray-700 max-w-3xl">
        Xolkit is a product and engineering studio focused on outcomes. We blend modern design systems, battle-tested
        architectures, and pragmatic AI to ship software that delights users and drives measurable business value.
      </p>
      <p className="mt-3 text-gray-700 max-w-3xl">
        Our distributed team has shipped projects across startups and enterprises—web platforms, mobile apps, B2B SaaS,
        and internal tools. We partner closely, iterate quickly, and care deeply about reliability and polish.
      </p>
    </section>
  );
}
