"use client";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useState, useEffect } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  PaintBrushIcon,
  SwatchIcon
} from "@heroicons/react/24/outline";

const services = [
  { name: "Customer Center", href: "/services/customer-center", description: "Build scalable customer support centers powered by AI and humans.", Icon: ChatBubbleLeftRightIcon },
  { name: "Web Development", href: "/services/web-development", description: "Modern, performant websites and web apps.", Icon: GlobeAltIcon },
  { name: "Mobile App Development", href: "/services/mobile-app-development", description: "iOS and Android apps with delightful UX.", Icon: DevicePhoneMobileIcon },
  { name: "SaaS", href: "/services/saas", description: "End-to-end SaaS product design, build, and launch.", Icon: CloudIcon },
  { name: "Software Development", href: "/services/software-development", description: "Custom software tailored to your business.", Icon: WrenchScrewdriverIcon },
  { name: "AI Agents", href: "/services/ai-agents", description: "Autonomous and assistive agents that integrate with your stack.", Icon: SparklesIcon },
  { name: "Graphic Design", href: "/services/graphic-design", description: "Branding, UI, and visual assets that communicate clearly.", Icon: PaintBrushIcon },
];

const portfolio = [
  { name: "Logo Design", href: "/portfolio/logo-design", description: "Marks, wordmarks, and brand systems.", Icon: SwatchIcon },
  { name: "Web Development", href: "/portfolio/web-development", description: "Web projects and case studies.", Icon: GlobeAltIcon },
  { name: "App Development", href: "/portfolio/app-development", description: "Mobile and desktop apps.", Icon: DevicePhoneMobileIcon },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [justActivated, setJustActivated] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrollY(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrollY > 32; // threshold to become solid
  const shrink = scrollY > 32; // reuse same threshold for shrink (can separate later)

  // Trigger a one-off reveal animation when becoming solid
  useEffect(() => {
    if (solid) {
      setJustActivated(true);
      const t = setTimeout(() => setJustActivated(false), 500);
      return () => clearTimeout(t);
    }
  }, [solid]);

  return (
  <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? "navbar-solid" : "navbar-initial"} ${shrink ? "navbar-shrink" : ""} ${justActivated ? "navbar-solid-enter" : ""}`}>
      <nav className="container-px">
        <div className="nav-inner flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Xolkit" width={120} height={32} priority />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-sm font-medium hover:text-brand">About</Link>

            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="inline-flex items-center gap-1 text-sm font-medium hover:text-brand group">
                <span>Services</span>
                <ChevronDownIcon className="h-4 w-4 transition-transform group-data-[headlessui-state~=open]:rotate-180"/>
              </Menu.Button>
              <Transition as={Fragment} enter="transition ease-out duration-150" enterFrom="opacity-0 -translate-y-2" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-100" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 -translate-y-1">
                <Menu.Items className="!absolute right-0 top-full mt-2 z-[60] w-[min(760px,92vw)] origin-top-right focus:outline-none p-4 flex flex-wrap gap-3 rounded-2xl bg-[#0f1924] border border-[#1e2733] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.8)]">
                  {services.map((item) => (
                    <Menu.Item key={item.href}>
                      {({ active }) => (
                        <Link href={item.href} className={`group/item relative flex flex-col gap-2 rounded-xl p-4 w-[220px] flex-shrink-0 border border-[#26323d] ${active ? "bg-[#16212c]" : "bg-[#101c26]"} hover:bg-[#1b2732] hover:border-slate-400/40 transition`}> 
                          <div className="flex items-center gap-2">
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#14222b] border border-slate-500/40 text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,0.07)]">
                              <item.Icon className="h-5 w-5" />
                            </span>
                            <span className="text-sm font-semibold text-gray-100 leading-snug">{item.name}</span>
                          </div>
                          <div className="text-xs text-gray-400 leading-relaxed line-clamp-3">{item.description}</div>
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="inline-flex items-center gap-1 text-sm font-medium hover:text-brand group">
                <span>Portfolio</span>
                <ChevronDownIcon className="h-4 w-4 transition-transform group-data-[headlessui-state~=open]:rotate-180"/>
              </Menu.Button>
              <Transition as={Fragment} enter="transition ease-out duration-150" enterFrom="opacity-0 -translate-y-2" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-100" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 -translate-y-1">
                <Menu.Items className="absolute right-0 top-full mt-2 z-[60] w-[min(520px,92vw)] origin-top-right focus:outline-none p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-2xl bg-[#0f1924] border border-[#1e2733] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.8)]">
                  {portfolio.map((item) => (
                    <Menu.Item key={item.href}>
                      {({ active }) => (
                        <Link href={item.href} className={`group/item relative flex gap-3 rounded-xl p-4 border border-[#26323d] ${active ? "bg-[#16212c]" : "bg-[#101c26]"} hover:bg-[#1b2732] hover:border-slate-400/40 transition`}>
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#14222b] border border-slate-500/40 text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,0.07)]">
                            <item.Icon className="h-5 w-5" />
                          </span>
                          <span className="flex flex-col">
                            <span className="text-sm font-semibold text-gray-100">{item.name}</span>
                            <span className="text-xs text-gray-400 leading-relaxed">{item.description}</span>
                          </span>
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            <Link href="/blogs" className="text-sm font-medium hover:text-brand">Blogs</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-brand">Contact</Link>
          </div>

          <div className="md:hidden">
            <button aria-label="Toggle menu" onClick={() => setMobileOpen((v) => !v)} className="p-2 rounded-md hover:bg-gray-800">
              {mobileOpen ? <XMarkIcon className="h-6 w-6"/> : <Bars3Icon className="h-6 w-6"/>}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              <Link href="/about" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800">About</Link>
              <Disclosure>
                {({ open }) => (
                  <div>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-gray-800">
                      <span>Services</span>
                      <ChevronDownIcon className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pl-3 grid grid-cols-1 gap-1">
                      {services.map((s) => (
                        <Link key={s.href} href={s.href} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-[#1b2732] border border-transparent hover:border-slate-400/40 transition">
                          {s.Icon && <s.Icon className="h-4 w-4 text-slate-300" />}
                          {s.name}
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <div>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-gray-800">
                      <span>Portfolio</span>
                      <ChevronDownIcon className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pl-3 grid grid-cols-1 gap-1">
                      {portfolio.map((p) => (
                        <Link key={p.href} href={p.href} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-[#1b2732] border border-transparent hover:border-slate-400/40 transition">
                          {p.Icon && <p.Icon className="h-4 w-4 text-slate-300" />}
                          {p.name}
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
              <Link href="/blogs" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800">Blogs</Link>
              <Link href="/contact" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
