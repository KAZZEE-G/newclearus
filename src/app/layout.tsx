import type { Metadata } from "next";
import { Orbitron, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newclearus.com"),
  title: {
    default: "newclearus | Technology Simplified",
    template: "%s | newclearus",
  },
  description:
    "newclearus delivers IT support, software teams, cyber teams and infrastructure for businesses in South Africa, the UK and the USA — with data compliance built in.",
  keywords: [
    "newclearus",
    "IT support South Africa",
    "managed IT services",
    "cybersecurity team",
    "software development team",
    "IT infrastructure",
    "fibre reseller South Africa",
    "MVNO South Africa",
  ],
  openGraph: {
    title: "newclearus | Technology Simplified",
    description:
      "IT support, software teams, cyber teams and infrastructure for businesses in South Africa, the UK and the USA.",
    url: "https://newclearus.com",
    siteName: "newclearus",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${manrope.variable} h-full dark`}
    >
      <body className="min-h-full flex flex-col bg-ink antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
