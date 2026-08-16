"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { IconMenu, IconX } from "./icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo size="sm" />

        <div className="hidden items-center gap-8 sm:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide uppercase transition-colors ${
                  active ? "text-white" : "text-mist hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-gradient-to-r from-red via-white to-blue" />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-sm border border-blue/50 bg-blue/10 px-4 py-2 text-sm font-semibold text-blue transition-colors hover:bg-blue/20"
          >
            Talk to us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-white sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium tracking-wide uppercase ${
                  pathname === link.href ? "text-white" : "text-mist"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="w-fit rounded-sm border border-blue/50 bg-blue/10 px-4 py-2 text-sm font-semibold text-blue"
            >
              Talk to us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
