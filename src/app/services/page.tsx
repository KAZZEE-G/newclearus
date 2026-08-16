import type { Metadata } from "next";
import Link from "next/link";
import Backdrop from "@/components/Backdrop";
import {
  IconHeadset,
  IconCode,
  IconShield,
  IconServer,
  IconSignal,
  IconGlobe,
  IconArrowRight,
  IconLock,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "IT support, software teams, cyber teams, infrastructure, connectivity ventures and compliant global remote delivery from newclearus.",
};

const services = [
  {
    icon: IconHeadset,
    title: "IT Support",
    tag: "On-site & remote",
    copy:
      "Day-to-day support for businesses that need technology to just work. Our engineers handle everything from desktop and network issues to full help-desk coverage, on-site in South Africa or remotely wherever you are.",
    points: [
      "On-site support for local businesses",
      "Remote support and monitoring",
      "Help-desk & ticketing",
      "Hardware and software troubleshooting",
    ],
  },
  {
    icon: IconCode,
    title: "Software Teams",
    tag: "Dedicated & augmented",
    copy:
      "Full software delivery teams — or specialists who slot into yours — building and maintaining the products your business runs on, from internal tools to customer-facing platforms.",
    points: [
      "Dedicated development squads",
      "Staff augmentation for existing teams",
      "Web, mobile and backend engineering",
      "Ongoing maintenance & support",
    ],
  },
  {
    icon: IconShield,
    title: "Cyber Teams",
    tag: "Defensive security",
    copy:
      "Security teams focused on keeping your business, your data and your customers safe — from proactive monitoring to incident response, built around the compliance regime that governs your data.",
    points: [
      "Threat monitoring & response",
      "Security assessments & audits",
      "Compliance-aligned controls",
      "Staff security awareness",
    ],
  },
  {
    icon: IconServer,
    title: "IT Infrastructure",
    tag: "Built & managed",
    copy:
      "We design and build IT infrastructure for new businesses from the ground up, and modernise and manage it for businesses that already have systems in place.",
    points: [
      "Infrastructure design for new businesses",
      "Upgrades & management for existing environments",
      "Cloud & on-premise architecture",
      "Networking & server management",
    ],
  },
  {
    icon: IconSignal,
    title: "Connectivity Ventures",
    tag: "New markets — South Africa",
    copy:
      "newclearus is expanding into the connectivity space — entering the MVNO, hosting reseller and fibre reseller markets in South Africa to give our clients one partner for infrastructure and connectivity.",
    points: [
      "MVNO — mobile network services",
      "Hosting reseller solutions",
      "Fibre reseller partnerships",
      "Bundled with our IT & infrastructure services",
    ],
  },
  {
    icon: IconGlobe,
    title: "Global Remote Delivery",
    tag: "UK & USA",
    copy:
      "We deliver remote IT, software and cyber services to clients in the UK and USA, with data handling built around the regulation that applies to each market.",
    points: [
      "Remote delivery for UK clients — GDPR",
      "Remote delivery for USA clients — CCPA",
      "South African delivery — POPIA",
      "Cross-border, compliance-first engagements",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <Backdrop />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pb-20 sm:pt-24">
          <span className="rounded-full border border-line bg-panel px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-mist">
            Services
          </span>
          <h1 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Everything your technology stack needs, under one roof.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            From day-to-day IT support to full infrastructure builds, dedicated
            software and cyber teams, and new connectivity ventures — this is
            how newclearus simplifies technology for your business.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map(({ icon: Icon, title, tag, copy, points }) => (
              <div
                key={title}
                className="panel flex flex-col rounded-md p-8 transition-colors hover:border-blue/40"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-line bg-ink text-blue">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-line px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-mist">
                    {tag}
                  </span>
                </div>

                <h2 className="mt-6 font-display text-xl font-semibold text-white">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-mist">{copy}</p>

                <ul className="mt-6 space-y-2.5">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-white/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-panel/60 py-16 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-line bg-ink text-blue">
            <IconLock className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Not sure which service you need?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-mist sm:text-base">
            Tell us about your business and where technology is holding you
            back — we&rsquo;ll recommend the right mix of support, software,
            security and infrastructure.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-sm bg-red px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Speak to newclearus
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
