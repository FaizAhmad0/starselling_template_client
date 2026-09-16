import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  ClipboardList,
  CreditCard,
  GraduationCap,
  Globe,
  LifeBuoy,
  Mail,
  MapPin,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DashboardNavbar } from "@/components/dashboard/dashboard-navbar";
import { ButtonLink } from "@/components/shared/button-link";
import { ContactForm } from "./contact-form";

/* ─── Contact data ────────────────────────────────────────────────── */

const CONTACT = {
  email: "info@starsellingz.com",
  website: "https://www.starsellingz.com",
  address:
    "Plot No. 102-A, Mahaveer Nagar-B, Golyawas, Near Prem Enterprises, Mansarovar, Jaipur, Rajasthan – 302020",
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 7:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  // TODO: no phone/WhatsApp number was provided — add one here when available.
  phone: null as string | null,
} as const;

const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`;

/* ─── Support topics ──────────────────────────────────────────────── */

interface SupportTopic {
  icon: LucideIcon;
  title: string;
}

const supportTopics: readonly SupportTopic[] = [
  { icon: BookOpen, title: "Course Information" },
  { icon: ClipboardList, title: "Enrollment & Registration" },
  { icon: CreditCard, title: "Payment Assistance" },
  { icon: LifeBuoy, title: "Technical Support" },
  { icon: Briefcase, title: "Business Consultation" },
  { icon: Users, title: "Student Support" },
];

/* ─── Style constants ─────────────────────────────────────────────── */

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8";
const eyebrow =
  "text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:text-foreground";
const heading =
  "font-heading text-3xl font-semibold leading-[1.15] tracking-[-0.04em] sm:text-4xl lg:text-[44px]";

/* ─── Metadata ────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Contact Us | Star Selling",
  description:
    "Get in touch with Star Selling (Saumic Craft Pvt. Ltd). We're here to help with course information, enrollment, payment assistance, and more.",
  openGraph: {
    title: "Contact Us | Star Selling",
    description: "We'd love to hear from you! Contact us for any questions.",
    siteName: "Star Selling",
    type: "website",
  },
};

/* ─── Page ─────────────────────────────────────────────────────────── */

export default function ContactUsPage() {
  return (
    <div className="home-page bg-background text-foreground">
      <a
        href="#main-content"
        className="fixed top-3 left-4 z-[60] -translate-y-24 rounded-lg bg-primary px-4 py-3 text-sm text-primary-foreground focus:translate-y-0 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
      >
        Skip to content
      </a>
      <DashboardNavbar variant="public" />

      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* ── 1. Hero ──────────────────────────────────────────────── */}
        <section
          aria-labelledby="contact-hero-heading"
          className="relative isolate border-b border-border pt-18 pb-16 sm:pt-24 sm:pb-24"
        >
          <div
            className="home-hero-grid pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
          />
          <div className={`${container} max-w-3xl text-center`}>
            <p className={eyebrow}>Contact Us</p>
            <h1 id="contact-hero-heading" className={`${heading} mt-4`}>
              We&apos;d love to
              <br />
              <span className="text-primary dark:text-foreground">
                hear from you
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground">
              Whether you have questions about our courses, need assistance with
              enrollment, or want guidance on choosing the right program, our
              team is here to help.
            </p>
          </div>
        </section>

        {/* ── 2. Main contact block ────────────────────────────────── */}
        <section
          aria-labelledby="contact-block-heading"
          className="border-b border-border py-20 sm:py-24"
        >
          <div className={`${container} grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16`}>
            {/* Left — form */}
            <div>
              <h2 id="contact-block-heading" className={`${heading} mb-8`}>
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Right — info cards */}
            <div className="space-y-5">
              {/* Email */}
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-start gap-4 rounded-xl border border-border p-5 transition-colors hover:bg-muted/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/40">
                  <Mail
                    className="size-[18px] text-primary dark:text-foreground"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {CONTACT.email}
                  </p>
                </div>
              </a>

              {/* Website */}
              <a
                href={CONTACT.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-xl border border-border p-5 transition-colors hover:bg-muted/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/40">
                  <Globe
                    className="size-[18px] text-primary dark:text-foreground"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Website
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    www.starsellingz.com{" "}
                    <ArrowUpRight
                      className="ml-0.5 inline size-3.5"
                      aria-hidden="true"
                    />
                  </p>
                </div>
              </a>

              {/* Address + directions */}
              <div className="flex items-start gap-4 rounded-xl border border-border p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/40">
                  <MapPin
                    className="size-[18px] text-primary dark:text-foreground"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Address
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {CONTACT.address}
                  </p>
                  <a
                    href={mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary dark:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    Get directions{" "}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="rounded-xl border border-border p-5">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/40">
                    <svg
                      className="size-[18px] text-primary dark:text-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Business Hours
                    </p>
                    <div className="mt-3 space-y-2.5">
                      {CONTACT.hours.map((h) => (
                        <div
                          key={h.days}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="font-medium">{h.days}</span>
                          <span className="text-muted-foreground">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Need Help With? ───────────────────────────────────── */}
        <section
          aria-labelledby="need-help-heading"
          className="border-b border-border bg-muted/35 py-20 sm:py-24"
        >
          <div className={container}>
            <div className="max-w-2xl">
              <p className={eyebrow}>Need Help?</p>
              <h2 id="need-help-heading" className={`${heading} mt-4`}>
                How we can assist you
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
                Our support team is available to assist you with:
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {supportTopics.map((topic) => (
                <article
                  key={topic.title}
                  className="flex items-center gap-4 rounded-xl border border-border bg-background p-5"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/40">
                    <topic.icon
                      className="size-[18px] text-primary dark:text-foreground"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="text-sm font-semibold tracking-tight">
                    {topic.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Closing CTA ───────────────────────────────────────── */}
        <section
          aria-labelledby="contact-cta-heading"
          className="py-20 sm:py-24"
        >
          <div className={container}>
            <div className="relative isolate overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-12 sm:py-16">
              <div
                className="pointer-events-none absolute -top-32 -right-24 -z-10 size-[450px] rounded-full border border-primary-foreground/15 p-12"
                aria-hidden="true"
              >
                <div className="size-full rounded-full border border-primary-foreground/15 p-12">
                  <div className="size-full rounded-full border border-primary-foreground/15" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                <div>
                  <p className="mb-5 flex items-center gap-2 text-xs font-medium">
                    <GraduationCap className="size-4" aria-hidden="true" />{" "}
                    Your Journey Starts Here
                  </p>
                  <h2
                    id="contact-cta-heading"
                    className="max-w-xl font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl"
                  >
                    Ready to start your e-commerce journey?
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-7 text-primary-foreground/90">
                    Start your e-commerce journey with Star Sellingz (Saumic
                    Craft Pvt. Ltd) today. We&apos;re here to help you succeed!
                  </p>
                </div>
                <ButtonLink
                  href="/courses"
                  className="h-12 gap-8 rounded-lg bg-background px-6 text-sm text-foreground hover:bg-background/90"
                >
                  Explore Courses{" "}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-muted/25">
        <div
          className={`${container} grid gap-12 pt-14 pb-10 md:grid-cols-[minmax(0,1fr)_auto]`}
        >
          <div className="max-w-xs">
            <Link
              href="/"
              aria-label="Star Selling home"
              className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <Image
                src="/logo.png"
                alt="Star Selling"
                width={854}
                height={255}
                sizes="184px"
                className="h-auto w-[184px]"
              />
            </Link>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Website, catalog, and SEO services to help your business take its
              next step online.
            </p>
            <Link
              href="/login"
              className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-lg border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Sign in
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-16 gap-y-10 sm:gap-x-24"
          >
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Company
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about-us" },
                  { label: "Contact Us", href: "/contact-us" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Legal
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  {
                    label: "Terms and Conditions",
                    href: "/terms-and-conditions",
                  },
                  {
                    label: "Return and Refund Policy",
                    href: "/return-and-refund-policy",
                  },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div
          className={`${container} border-t flex border-border py-6 text-xs text-muted-foreground items-center justify-center`}
        >
          <p>© {new Date().getFullYear()} Star Selling. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
