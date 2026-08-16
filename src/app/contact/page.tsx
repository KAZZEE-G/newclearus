import type { Metadata } from "next";
import Backdrop from "@/components/Backdrop";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconClock,
  IconBuilding,
  IconLock,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with newclearus for IT support, software teams, cyber teams and infrastructure — serving South Africa, the UK and the USA.",
};

const offices = [
  {
    region: "South Africa",
    role: "Head office · on-site & remote",
    lines: ["hello@newclearus.com", "+27 (0) 00 000 0000"],
  },
  {
    region: "United Kingdom",
    role: "Remote delivery · GDPR aligned",
    lines: ["uk@newclearus.com"],
  },
  {
    region: "United States",
    role: "Remote delivery · CCPA aligned",
    lines: ["us@newclearus.com"],
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <Backdrop />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pb-20 sm:pt-24">
          <span className="rounded-full border border-line bg-panel px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-mist">
            Contact
          </span>
          <h1 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Let&rsquo;s simplify your technology.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            Whether you need IT support today or you&rsquo;re planning
            infrastructure for tomorrow, reach out and the right team at
            newclearus will get back to you.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-3">
          <div className="panel flex flex-col gap-4 rounded-md p-8 lg:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-line bg-ink text-blue">
              <IconMail className="h-6 w-6" />
            </div>
            <h2 className="font-display text-lg font-semibold text-white">
              General enquiries
            </h2>
            <a
              href="mailto:hello@newclearus.com"
              className="text-sm font-medium text-blue hover:underline"
            >
              hello@newclearus.com
            </a>
          </div>

          <div className="panel flex flex-col gap-4 rounded-md p-8 lg:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-line bg-ink text-blue">
              <IconPhone className="h-6 w-6" />
            </div>
            <h2 className="font-display text-lg font-semibold text-white">
              Call us
            </h2>
            <a
              href="tel:+27000000000"
              className="text-sm font-medium text-blue hover:underline"
            >
              +27 (0) 00 000 0000
            </a>
          </div>

          <div className="panel flex flex-col gap-4 rounded-md p-8 lg:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-line bg-ink text-blue">
              <IconClock className="h-6 w-6" />
            </div>
            <h2 className="font-display text-lg font-semibold text-white">
              Support hours
            </h2>
            <p className="text-sm text-white/80">
              Mon &ndash; Fri, 08:00 &ndash; 17:00 SAST
              <br />
              Extended cover for UK &amp; USA clients
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-panel/40 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-blue">
              Our regions
            </h2>
            <p className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              On-site in South Africa. Remote across the UK and USA.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {offices.map((office) => (
              <div key={office.region} className="panel rounded-md p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-line bg-ink text-blue">
                  <IconBuilding className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {office.region}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-mist">
                  {office.role}
                </p>
                <ul className="mt-4 space-y-2">
                  {office.lines.map((line) => (
                    <li key={line} className="text-sm text-white/80">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-line bg-ink text-blue">
            <IconMapPin className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Prefer to talk data compliance first?
          </h2>
          <p className="flex max-w-xl items-center justify-center gap-2 text-sm leading-relaxed text-mist sm:text-base">
            <IconLock className="h-4 w-4 shrink-0 text-blue" />
            Every engagement is scoped around POPIA, GDPR or CCPA depending on
            where your data and customers are.
          </p>
        </div>
      </section>
    </>
  );
}
