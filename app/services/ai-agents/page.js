export const metadata = { title: "AI Agents" };

export default function AIAgentsPage() {
  return (
    <section className="py-12 max-w-3xl">
      <h1 className="text-3xl font-bold">AI Agents</h1>
      <p className="mt-4 text-gray-700">
        We design safe, reliable AI agents that automate workflows—research, outreach, support, lead qualification, and more.
        Our agents have clear guardrails, observability, and human override.
      </p>
      <ul className="mt-4 list-disc pl-6 text-gray-700">
        <li>Tool-integrated agents (CRMs, ERPs, internal APIs)</li>
        <li>Evaluation harnesses and red-teaming for safety</li>
        <li>Prompt, RAG, and fine-tuning strategies where appropriate</li>
        <li>Cost controls and measurable KPIs</li>
      </ul>
    </section>
  );
}
