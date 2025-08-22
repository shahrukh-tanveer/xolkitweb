export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="py-6 max-w-3xl mx-auto my-14">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-gray-700">Tell us about your project. We’ll get back within one business day.</p>
      <form className="mt-6 grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input type="text" className="mt-1 w-full rounded-lg border border-gray-800 bg-gray-900 text-gray-100 placeholder:text-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/60 focus:border-slate-400/60" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="mt-1 w-full rounded-lg border border-gray-800 bg-gray-900 text-gray-100 placeholder:text-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/60 focus:border-slate-400/60" placeholder="jane@company.com" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Company</label>
          <input type="text" className="mt-1 w-full rounded-lg border border-gray-800 bg-gray-900 text-gray-100 placeholder:text-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/60 focus:border-slate-400/60" placeholder="Acme Inc." />
        </div>
        <div>
          <label className="block text-sm font-medium">Project details</label>
          <textarea rows="6" className="mt-1 w-full rounded-lg border border-gray-800 bg-gray-900 text-gray-100 placeholder:text-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/60 focus:border-slate-400/60" placeholder="What are you building? Goals, timeline, and success metrics." />
        </div>
  <button type="button" className="w-max mx-auto mt-2 inline-flex items-center rounded-lg bg-[#1a2530] px-6 py-3 text-slate-100 font-semibold shadow hover:bg-[#22303c] hover:shadow-[0_4px_18px_-6px_rgba(0,0,0,0.6)] focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:ring-offset-0 transition">Send inquiry</button>
        <p className="mx-auto text-xs text-gray-500">This form is a placeholder. Wire up your preferred form backend.</p>
      </form>
    </section>
  );
}
