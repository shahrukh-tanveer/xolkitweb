export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="py-12 max-w-3xl">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-gray-700">Tell us about your project. We’ll get back within one business day.</p>
      <form className="mt-6 grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input type="text" className="mt-1 w-full rounded-lg border border-gray-800 bg-gray-900 text-gray-100 placeholder:text-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="mt-1 w-full rounded-lg border border-gray-800 bg-gray-900 text-gray-100 placeholder:text-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="jane@company.com" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Company</label>
          <input type="text" className="mt-1 w-full rounded-lg border border-gray-800 bg-gray-900 text-gray-100 placeholder:text-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Acme Inc." />
        </div>
        <div>
          <label className="block text-sm font-medium">Project details</label>
          <textarea rows="6" className="mt-1 w-full rounded-lg border border-gray-800 bg-gray-900 text-gray-100 placeholder:text-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="What are you building? Goals, timeline, and success metrics." />
        </div>
        <button type="button" className="mt-2 inline-flex items-center rounded-lg bg-brand px-5 py-3 text-white font-semibold shadow hover:bg-brand-dark">Send inquiry</button>
        <p className="text-xs text-gray-500">This form is a placeholder. Wire up your preferred form backend.</p>
      </form>
    </section>
  );
}
