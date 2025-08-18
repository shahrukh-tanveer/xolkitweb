export const metadata = { title: "Software as a Service (SaaS)" };

export default function SaaSPage() {
  return (
    <section className="py-12 max-w-3xl">
      <h1 className="text-3xl font-bold">Software as a Service (SaaS)</h1>
      <p className="mt-4 text-gray-700">
        We create SaaS products with multi-tenant architectures, robust auth, billing, and admin experiences. Start with
        an MVP, then iterate with confidence as you grow.
      </p>
      <ul className="mt-4 list-disc pl-6 text-gray-700">
        <li>Multi-tenant data models and RBAC</li>
        <li>Authentication, authorization, and audit logs</li>
        <li>Billing (Stripe), subscriptions, and entitlements</li>
        <li>Admin tooling, feature flags, and A/B testing</li>
      </ul>
    </section>
  );
}
