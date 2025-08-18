export const metadata = { title: "Mobile App Development" };

export default function MobileAppPage() {
  return (
    <section className="py-12 max-w-3xl">
      <h1 className="text-3xl font-bold">Mobile App Development</h1>
      <p className="mt-4 text-gray-700">
        We build mobile apps with responsive performance and native-feel UX. Whether React Native or fully native,
        we select the right stack for your product, timeline, and team.
      </p>
      <ul className="mt-4 list-disc pl-6 text-gray-700">
        <li>Prototyping, user testing, and iterative delivery</li>
        <li>Offline-first, push notifications, and in-app purchases</li>
        <li>Release pipelines for TestFlight, Play Console, and over-the-air updates</li>
        <li>Telemetry, crash reporting, and growth analytics</li>
      </ul>
    </section>
  );
}
