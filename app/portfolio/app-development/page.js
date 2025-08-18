export const metadata = { title: "Portfolio – App Development" };

export default function PortfolioAppDevPage() {
  return (
    <section className="py-12 max-w-4xl">
      <h1 className="text-3xl font-bold">App Development</h1>
      <p className="mt-4 text-gray-700">
        Mobile app case studies featuring growth, reliability, and delightful UX. Replace with your real case studies.
      </p>
      <ul className="mt-4 list-disc pl-6 text-gray-700">
        <li>React Native app with 4.8★ rating</li>
        <li>Offline-first field operations app</li>
        <li>Payments-enabled consumer app</li>
      </ul>
    </section>
  );
}
