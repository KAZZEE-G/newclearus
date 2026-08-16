import Link from "next/link";
import Backdrop from "@/components/Backdrop";
import Logo from "@/components/Logo";
import {
  IconHeadset,
  IconCode,
  IconShield,
  IconServer,
  IconSignal,
  IconGlobe,
  IconArrowRight,
  IconLock,
  IconMapPin,
} from "@/components/icons";

const pillars = [
  {
    icon: IconHeadset,
    title: "IT Support",
    copy: "On-site and remote support that keeps your team working, whatever the issue.",
  },
  {
    icon: IconCode,
    title: "Software Teams",
    copy: "Dedicated development teams that plug straight into your product roadmap.",
  },
  {
    icon: IconShield,
    title: "Cyber Teams",
    copy: "Security specialists protecting your business from the inside out.",
  },
  {
    icon: IconServer,
    title: "IT Infrastructure",
    copy: "Infrastructure designed and built for new businesses and scaled for existing ones.",
  },
  {
    icon: IconSignal,
    title: "Connectivity Ventures",
    copy: "Entering MVNO, hosting reseller and fibre reseller markets across South Africa.",
  },
  {
    icon: IconGlobe,
    title: "Global Remote Delivery",
    copy: "Compliant remote solutions for clients across the UK and USA.",
  },
];

const regions = [
  { place: "South Africa", detail: "Home base — on-site & remote delivery" },
  { place: "United Kingdom", detail: "Remote delivery, GDPR compliant" },
  { place: "United States", detail: "Remote delivery, CCPA compliant" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Backdrop />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-20 text-center sm:pb-32 sm:pt-28">
          <span className="animate-fade-up rounded-full border border-line bg-panel px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-mist">
            IT Support &middot; Software &middot; Cyber &middot; Infrastructure
          </span>

          <div className="mt-8 animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <Logo size="lg" href={null} />
          </div>

          <h1
            className="mt-8 max-w-3xl animate-fade-up text-3xl font-semibold leading-tight text-white sm:text-5xl"
            style={{ animationDelay: "0.1s" }}
          >
            Technology, <span className="text-gradient">simplified</span> for
            businesses that can&rsquo;t afford downtime.
          </h1>

          <p
            className="mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-mist sm:text-lg"
            style={{ animationDelay: "0.15s" }}
          >
            newclearus builds and runs the technology backbone of your business
            — IT support, software teams, cyber teams and infrastructure —
            delivered on-site in South Africa and remotely to the UK and USA,
            with data compliance built in from day one.
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.2s" }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-red px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Explore our services
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-line bg-panel px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-blue/60 hover:text-blue"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative border-t border-line bg-panel/40 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-blue">
              What we do
            </h2>
            <p className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              One partner for support, software, security and infrastructure.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, copy }) => (
              <div
                key={title}
                className="panel group relative overflow-hidden rounded-md p-6 transition-colors hover:border-blue/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-line bg-ink text-blue">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions & compliance */}
      <section className="relative border-t border-line py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-red">
              Where we operate
            </h2>
            <p className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              Rooted in South Africa. Delivering across three continents.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-mist">
              We support local businesses on-site and deliver remote IT,
              software and cyber services to clients in the UK and USA — every
              engagement built around the compliance regime that governs it.
            </p>

            <ul className="mt-8 space-y-4">
              {regions.map((region) => (
                <li key={region.place} className="flex items-start gap-3">
                  <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                  <div>
                    <p className="font-medium text-white">{region.place}</p>
                    <p className="text-sm text-mist">{region.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel flex flex-col justify-between rounded-md p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-line bg-ink text-blue">
              <IconLock className="h-6 w-6" />
            </div>
            <div className="mt-6">
              <h3 className="font-display text-xl font-semibold text-white">
                Compliance by design
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                Every remote engagement is built around the regulation that
                applies to your data and your customers.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { code: "POPIA", region: "South Africa" },
                { code: "GDPR", region: "United Kingdom" },
                { code: "CCPA", region: "United States" },
              ].map((c) => (
                <div
                  key={c.code}
                  className="rounded-sm border border-line bg-ink px-3 py-4 text-center"
                >
                  <p className="font-display text-sm font-semibold text-white">
                    {c.code}
                  </p>
                  <p className="mt-1 text-[11px] text-mist">{c.region}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-line bg-panel/60 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Ready to simplify your technology?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-mist sm:text-base">
            Tell us what you&rsquo;re building or where you&rsquo;re stuck —
            we&rsquo;ll bring the team.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-sm bg-blue px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Get in touch
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
