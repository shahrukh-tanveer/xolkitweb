import Link from "next/link";

export default function Footer() {
  return (
  <footer className="mt-20 border-t border-gray-800 bg-transparent">
      <div className="container-px py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-bold text-lg">Xolkit</div>
          <p className="mt-2 text-gray-400">We craft digital products and AI solutions that move the needle.</p>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><Link href="/about" className="hover:text-brand">About</Link></li>
            <li><Link href="/blogs" className="hover:text-brand">Blogs</Link></li>
            <li><Link href="/contact" className="hover:text-brand">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Services</div>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><Link href="/services/web-development" className="hover:text-brand">Web Development</Link></li>
            <li><Link href="/services/mobile-app-development" className="hover:text-brand">Mobile Apps</Link></li>
            <li><Link href="/services/ai-agents" className="hover:text-brand">AI Agents</Link></li>
            <li><Link href="/services/saas" className="hover:text-brand">SaaS</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><span className="opacity-60">Privacy Policy (placeholder)</span></li>
            <li><span className="opacity-60">Terms (placeholder)</span></li>
          </ul>
        </div>
      </div>
      <div className="container-px py-6 border-t border-gray-800 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between">
        <p>© {new Date().getFullYear()} Xolkit. All rights reserved.</p>
        <p>Fonts via next/font (replace with your licensed fonts if needed).</p>
      </div>
    </footer>
  );
}
