export const metadata = { title: "Graphic Design" };

export default function GraphicDesignPage() {
  return (
    <section className="py-12 max-w-3xl">
      <h1 className="text-3xl font-bold">Graphic Design</h1>
      <p className="mt-4 text-gray-700">
        We create visual systems that elevate your brand: logos, typography, color, and UI components working together.
        Every artifact is designed for clarity, consistency, and conversion.
      </p>
      <ul className="mt-4 list-disc pl-6 text-gray-700">
        <li>Brand identity and logo systems</li>
        <li>Design systems and component libraries</li>
        <li>Marketing sites, landing pages, and assets</li>
        <li>Product UI/UX and interaction design</li>
      </ul>
    </section>
  );
}
