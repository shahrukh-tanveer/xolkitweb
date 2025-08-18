export const metadata = { title: "Software Development" };

export default function SoftwareDevPage() {
  return (
    <section className="py-12 max-w-3xl">
      <h1 className="text-3xl font-bold">Software Development</h1>
      <p className="mt-4 text-gray-700">
        From discovery to delivery, we build custom software that aligns to your business objectives. We de-risk with small
        milestones and strong engineering practices.
      </p>
      <ul className="mt-4 list-disc pl-6 text-gray-700">
        <li>Product discovery and technical architecture</li>
        <li>Incremental delivery with CI/CD and code reviews</li>
        <li>Automated testing and performance profiling</li>
        <li>Post-launch support and iterative roadmaps</li>
      </ul>
    </section>
  );
}
