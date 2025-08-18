export const metadata = { title: "Portfolio – Logo Design" };

export default function PortfolioLogoPage() {
  return (
    <section className="py-12 max-w-4xl">
      <h1 className="text-3xl font-bold">Logo Design</h1>
      <p className="mt-4 text-gray-700">
        We craft logos and brand systems that are timeless, legible, and versatile. Below are representative directions
        and case narratives (replace with your actual work when available).
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="aspect-[4/3] rounded-xl border grid place-items-center text-gray-400">Placeholder</div>
        <div className="aspect-[4/3] rounded-xl border grid place-items-center text-gray-400">Placeholder</div>
      </div>
    </section>
  );
}
