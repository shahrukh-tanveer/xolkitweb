export const metadata = { title: "Customer Center" };

export default function CustomerCenterPage() {
  return (
    <section className="py-12 max-w-3xl">
      <h1 className="text-3xl font-bold">Customer Center</h1>
      <p className="mt-4 text-gray-700">
        We build customer support centers that are fast, personal, and scalable. From knowledge bases and ticketing
        systems to AI triage and deflection, we integrate channels like email, chat, voice, and social, with human-in-the-loop
        workflows to ensure accuracy and empathy.
      </p>
      <ul className="mt-4 list-disc pl-6 text-gray-700">
        <li>Unified inbox and SLAs</li>
        <li>AI routing, summarization, and suggested replies</li>
        <li>Self-serve help centers and in-product support</li>
        <li>Quality assurance and analytics dashboards</li>
      </ul>
    </section>
  );
}
