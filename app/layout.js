import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://xolkit.example"),
  title: {
    default: "Xolkit – Sleek digital products & AI agents",
    template: "%s • Xolkit",
  },
  description: "Xolkit builds high-performance web & mobile apps, custom software, SaaS, and AI agents. Design-forward. Results-driven.",
  openGraph: {
    title: "Xolkit – Sleek digital products & AI agents",
    description: "Web & mobile apps, custom software, SaaS, and AI agents.",
    url: "https://xolkit.example",
    siteName: "Xolkit",
    images: [
      { url: "/logo.svg", width: 1200, height: 630, alt: "Xolkit" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xolkit – Sleek digital products & AI agents",
    description: "Web & mobile apps, custom software, SaaS, and AI agents.",
    images: ["/logo.svg"],
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container-px">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
