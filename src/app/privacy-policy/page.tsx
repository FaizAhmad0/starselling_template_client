import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, List } from "lucide-react";
import { DashboardNavbar } from "@/components/dashboard/dashboard-navbar";

/* ─── Constants ───────────────────────────────────────────────────── */

// TODO: Confirm effective date before publishing
const LAST_UPDATED = "";

const CONTACT_EMAIL = "info@starsellingz.com";

interface PolicySection {
  readonly id: string;
  readonly title: string;
  readonly content: string | readonly string[];
}

const SECTIONS: readonly PolicySection[] = [
  {
    id: "info-we-collect",
    title: "Information We Collect",
    content: [
      "Full Name",
      "Email Address",
      "Mobile Number",
      "Billing Address",
      "Payment Information (processed securely through third-party payment gateways)",
      "Course Enrollment Details",
      "Website Usage Data (Cookies, IP Address, Browser Information)",
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: [
      "Process course registrations and payments",
      "Provide access to purchased courses",
      "Communicate important updates regarding your enrollment",
      "Respond to customer support requests",
      "Improve our courses and website experience",
      "Send promotional offers and educational content (you may opt out at any time)",
      "Comply with legal and regulatory requirements",
    ],
  },
  {
    id: "payment-security",
    title: "Payment Security",
    content:
      "All payments are processed through secure and trusted payment gateways. Star Sellingz (Saumic Craft Pvt. Ltd) does not store your debit card, credit card, UPI PIN, or banking credentials on our servers.",
  },
  {
    id: "info-sharing",
    title: "Information Sharing",
    content: [
      "We respect your privacy and do not sell, rent, or trade your personal information. We may share your information only:",
      "With trusted service providers who help us operate our business",
      "When required by law or legal authorities",
      "To protect our legal rights and prevent fraudulent activities",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    content:
      "Our website may use cookies to improve user experience, remember preferences, analyze website traffic, and enhance website performance. You can disable cookies through your browser settings if you prefer.",
  },
  {
    id: "data-security",
    title: "Data Security",
    content:
      "We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, misuse, alteration, or disclosure.",
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    content:
      "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those external websites. Please review their privacy policies before sharing any information.",
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: [
      "Access your personal information",
      "Request correction of inaccurate information",
      "Request deletion of your personal data where legally applicable",
      "Withdraw consent for marketing communications at any time",
    ],
  },
  {
    id: "children",
    title: "Children's Privacy",
    content:
      "Our courses and services are intended for individuals aged 18 years or older. We do not knowingly collect personal information from children under 18.",
  },
  {
    id: "changes",
    title: "Changes to This Privacy Policy",
    content:
      "Star Sellingz (Saumic Craft Pvt. Ltd) reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with the updated effective date.",
  },
] as const;

/* ─── Style constants ─────────────────────────────────────────────── */

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8";
const heading =
  "font-heading text-3xl font-semibold leading-[1.15] tracking-[-0.04em] sm:text-4xl lg:text-[44px]";

/* ─── Metadata ────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Privacy Policy | Star Selling",
  description:
    "Privacy Policy for Star Selling (Saumic Craft Pvt. Ltd). Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Star Selling",
    description:
      "Learn how Star Selling protects your privacy and handles your personal information.",
    siteName: "Star Selling",
    type: "website",
  },
};

/* ─── Page ─────────────────────────────────────────────────────────── */

export default function PrivacyPolicyPage() {
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
        {/* ── Header ────────────────────────────────────────────────── */}
        <section
          aria-labelledby="policy-heading"
          className="border-b border-border pt-18 pb-10 sm:pt-24 sm:pb-14"
        >
          <div className={`${container} max-w-3xl`}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:text-foreground">
              Legal
            </p>
            <h1
              id="policy-heading"
              className={`${heading} mt-4`}
            >
              Privacy Policy
            </h1>
            {LAST_UPDATED && (
              <p className="mt-3 text-sm text-muted-foreground">
                Last updated: {LAST_UPDATED}
              </p>
            )}
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
              Welcome to Star Sellingz (Saumic Craft Pvt. Ltd). Your privacy is
              important to us, and we are committed to protecting the personal
              information you share while using our website and services. This
              Privacy Policy explains how we collect, use, and protect your
              information.
            </p>
          </div>
        </section>

        {/* ── Two-column layout ─────────────────────────────────────── */}
        <div className={`${container} py-12 sm:py-16`}>
          <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
            {/* ── Left: Table of contents ──────────────────────────── */}
            <aside className="lg:hidden">
              <details className="group">
                <summary className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-foreground select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                  <List
                    className="size-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  On this page
                </summary>
                <nav aria-label="Table of contents" className="mt-4">
                  <ul className="space-y-2 text-sm">
                    {SECTIONS.map((section, i) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                        >
                          {i + 1}. {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </details>
            </aside>

            <aside className="hidden lg:block">
              <nav
                aria-label="Table of contents"
                className="sticky top-24"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  On this page
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {SECTIONS.map((section, i) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                      >
                        {i + 1}. {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* ── Right: Policy content ────────────────────────────── */}
            <div className="max-w-3xl space-y-10">
              {SECTIONS.map((section, i) => (
                <section key={section.id} id={section.id}>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    {i + 1}. {section.title}
                  </h2>
                  {typeof section.content === "string" ? (
                    <p className="mt-4 text-base leading-7 text-muted-foreground">
                      {section.content}
                    </p>
                  ) : (
                    <ul className="mt-4 space-y-2 text-base leading-7 text-muted-foreground list-disc pl-5">
                      {section.content.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* ── Footer note ────────────────────────────────────── */}
              <div className="border-t border-border pt-8">
                <p className="text-base leading-7 text-muted-foreground">
                  Questions about this policy? Contact us at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary dark:text-foreground"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
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
