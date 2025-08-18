"use client";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const services = [
  { name: "Customer Center", href: "/services/customer-center", description: "Build scalable customer support centers powered by AI and humans." },
  { name: "Web Development", href: "/services/web-development", description: "Modern, performant websites and web apps." },
  { name: "Mobile App Development", href: "/services/mobile-app-development", description: "iOS and Android apps with delightful UX." },
  { name: "Software as a Service (SaaS)", href: "/services/saas", description: "End-to-end SaaS product design, build, and launch." },
  { name: "Software Development", href: "/services/software-development", description: "Custom software tailored to your business." },
  { name: "AI Agents", href: "/services/ai-agents", description: "Autonomous and assistive agents that integrate with your stack." },
  { name: "Graphic Design", href: "/services/graphic-design", description: "Branding, UI, and visual assets that communicate clearly." },
];

const portfolio = [
  { name: "Logo Design", href: "/portfolio/logo-design", description: "Marks, wordmarks, and brand systems." },
  { name: "Web Development", href: "/portfolio/web-development", description: "Web projects and case studies." },
  { name: "App Development", href: "/portfolio/app-development", description: "Mobile and desktop apps." },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="container-px">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Xolkit" width={120} height={32} priority />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-sm font-medium hover:text-brand">About</Link>

            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="inline-flex items-center gap-1 text-sm font-medium hover:text-brand">
                Services
                <ChevronDownIcon className="h-4 w-4"/>
              </Menu.Button>
              <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute right-0 mt-2 w-[360px] origin-top-right rounded-xl border border-gray-100 bg-white shadow-lg ring-1 ring-black/5 focus:outline-none p-2">
                  {services.map((item) => (
                    <Menu.Item key={item.href}>
                      {({ active }) => (
                        <Link href={item.href} className={`block rounded-lg px-3 py-2 ${active ? "bg-gray-50" : ""}`}>
                          <div className="text-sm font-semibold">{item.name}</div>
                          <div className="text-xs text-gray-500">{item.description}</div>
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="inline-flex items-center gap-1 text-sm font-medium hover:text-brand">
                Portfolio
                <ChevronDownIcon className="h-4 w-4"/>
              </Menu.Button>
              <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute right-0 mt-2 w-[320px] origin-top-right rounded-xl border border-gray-100 bg-white shadow-lg ring-1 ring-black/5 focus:outline-none p-2">
                  {portfolio.map((item) => (
                    <Menu.Item key={item.href}>
                      {({ active }) => (
                        <Link href={item.href} className={`block rounded-lg px-3 py-2 ${active ? "bg-gray-50" : ""}`}>
                          <div className="text-sm font-semibold">{item.name}</div>
                          <div className="text-xs text-gray-500">{item.description}</div>
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
            <button aria-label="Toggle menu" onClick={() => setMobileOpen((v) => !v)} className="p-2 rounded-md hover:bg-gray-100">
              {mobileOpen ? <XMarkIcon className="h-6 w-6"/> : <Bars3Icon className="h-6 w-6"/>}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              <Link href="/about" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100">About</Link>
              <Disclosure>
                {({ open }) => (
                  <div>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-gray-100">
                      <span>Services</span>
                      <ChevronDownIcon className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pl-3">
                      {services.map((s) => (
                        <Link key={s.href} href={s.href} className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100">{s.name}</Link>
                      ))}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <div>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-gray-100">
                      <span>Portfolio</span>
                      <ChevronDownIcon className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pl-3">
                      {portfolio.map((p) => (
                        <Link key={p.href} href={p.href} className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100">{p.name}</Link>
                      ))}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
              <Link href="/blogs" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100">Blogs</Link>
              <Link href="/contact" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
