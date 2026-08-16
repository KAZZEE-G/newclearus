import Link from "next/link";
import Logo from "./Logo";
import { IconMail, IconPhone, IconMapPin } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-panel">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo size="sm" withTagline />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
            IT support, software teams, cyber teams and infrastructure — built
            for businesses in South Africa, the UK and the USA.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-mist">
            Navigate
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/" className="text-white/80 hover:text-blue">Home</Link></li>
            <li><Link href="/services" className="text-white/80 hover:text-blue">Services</Link></li>
            <li><Link href="/contact" className="text-white/80 hover:text-blue">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-mist">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <IconMail className="h-4 w-4 text-blue" />
              <a href="mailto:hello@newclearus.com" className="hover:text-blue">hello@newclearus.com</a>
            </li>
            <li className="flex items-center gap-2">
              <IconPhone className="h-4 w-4 text-blue" />
              <a href="tel:+27000000000" className="hover:text-blue">+27 (0) 00 000 0000</a>
            </li>
            <li className="flex items-center gap-2">
              <IconMapPin className="h-4 w-4 text-blue" />
              <span>South Africa · UK · USA</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-mist">
            Compliance
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {["POPIA", "GDPR", "CCPA"].map((badge) => (
              <span
                key={badge}
                className="rounded-sm border border-line bg-ink px-2.5 py-1 text-xs font-medium tracking-wide text-mist"
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            Data-compliant delivery for local and international clients.
          </p>
        </div>
      </div>

      <div className="border-t border-line px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-mist sm:flex-row">
          <span>&copy; {year} newclearus. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">Technology Simplified</span>
        </div>
      </div>
    </footer>
  );
}
