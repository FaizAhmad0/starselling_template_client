import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, List } from "lucide-react";
import { DashboardNavbar } from "@/components/dashboard/dashboard-navbar";

/* ─── Constants ───────────────────────────────────────────────────── */

// TODO: Confirm effective date before publishing
const LAST_UPDATED = "";

const CONTACT_EMAIL = "info@starsellingz.com";

interface SectionItem {
  readonly type: "paragraph" | "list";
  readonly text?: string;
  readonly items?: readonly string[];
  readonly link?: { readonly href: string; readonly label: string };
}

interface TocSection {
  readonly id: string;
  readonly title: string;
  readonly content: readonly SectionItem[];
}

const SECTIONS: readonly TocSection[] = [
  {
    id: "acceptance-of-terms",
    title: "Acceptance of Terms",
    content: [
      {
        type: "paragraph",
        text: "By using this website or purchasing any course offered by Star Sellingz (Saumic Craft Pvt. Ltd), you acknowledge that you have read, understood, and agreed to these Terms & Conditions.",
      },
    ],
  },
  {
    id: "course-enrollment",
    title: "Course Enrollment",
    content: [
      {
        type: "paragraph",
        text: "Enrollment is confirmed only after successful payment.",
      },
      {
        type: "paragraph",
        text: "Course access will be provided to the registered email address or user account.",
      },
      {
        type: "paragraph",
        text: "Students are responsible for providing accurate personal information during registration.",
      },
    ],
  },
  {
    id: "course-access",
    title: "Course Access",
    content: [
      {
        type: "paragraph",
        text: "Course access is intended for the enrolled student only.",
      },
      {
        type: "paragraph",
        text: "Sharing login credentials, videos, PDFs, or course materials with others is strictly prohibited.",
      },
      {
        type: "paragraph",
        text: "Unauthorized distribution, recording, downloading, copying, or resale of course content may result in immediate suspension without refund.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: [
      {
        type: "paragraph",
        text: "All course materials, including videos, documents, presentations, graphics, logos, and website content, are the intellectual property of Star Sellingz (Saumic Craft Pvt. Ltd) and are protected under applicable copyright and intellectual property laws. No content may be copied, reproduced, distributed, modified, or used commercially without prior written permission.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments",
    content: [
      {
        type: "paragraph",
        text: "All course fees are displayed in Indian Rupees (INR).",
      },
      {
        type: "paragraph",
        text: "GST is applicable as per Indian Government regulations.",
      },
      {
        type: "paragraph",
        text: "Payment must be completed before course access is granted.",
      },
    ],
  },
  {
    id: "refund-cancellation",
    title: "Refund & Cancellation Policy",
    content: [
      {
        type: "paragraph",
        text: "Please review our Refund Policy before purchasing any course.",
        link: { href: "/return-and-refund-policy", label: "Refund Policy" },
      },
      {
        type: "paragraph",
        text: "Unless otherwise specified, course fees are non-refundable once course access has been provided.",
      },
      {
        type: "paragraph",
        text: "Refund requests, if applicable, will be handled according to our published Refund Policy.",
        link: { href: "/return-and-refund-policy", label: "Refund Policy" },
      },
    ],
  },
  {
    id: "certificate",
    title: "Certificate",
    content: [
      {
        type: "paragraph",
        text: "Certificates of completion will be issued only after successfully meeting the course completion requirements, where applicable.",
      },
    ],
  },
  {
    id: "student-responsibilities",
    title: "Student Responsibilities",
    content: [
      { type: "paragraph", text: "Students agree to:" },
      {
        type: "list",
        items: [
          "Use the course only for personal learning.",
          "Maintain respectful communication with instructors and support staff.",
          "Not engage in any activity that disrupts the learning experience of other students.",
        ],
      },
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    content: [
      {
        type: "paragraph",
        text: "Star Sellingz (Saumic Craft Pvt. Ltd) provides educational and skill-development programs. While we share practical strategies and industry best practices, we do not guarantee any specific income, sales, employment, business success, or financial results. Individual outcomes depend on personal effort, market conditions, implementation, and various external factors.",
      },
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: [
      {
        type: "paragraph",
        text: "Star Sellingz (Saumic Craft Pvt. Ltd) shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our website, courses, or services.",
      },
    ],
  },
  {
    id: "website-availability",
    title: "Website Availability",
    content: [
      {
        type: "paragraph",
        text: "We strive to keep our website and learning platform available at all times. However, we do not guarantee uninterrupted access and may temporarily suspend services for maintenance, upgrades, or unforeseen technical issues.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    content: [
      {
        type: "paragraph",
        text: "Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.",
        link: { href: "/privacy-policy-2", label: "Privacy Policy" },
      },
    ],
  },
  {
    id: "changes-to-terms",
    title: "Changes to Terms",
    content: [
      {
        type: "paragraph",
        text: "Star Sellingz (Saumic Craft Pvt. Ltd) reserves the right to modify these Terms & Conditions at any time. Updated versions will be published on this page, and continued use of our website or services constitutes acceptance of the revised terms.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: [
      {
        type: "paragraph",
        text: "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the competent courts in India.",
      },
    ],
  },
] as const;

/* ─── Style constants ─────────────────────────────────────────────── */

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8";
const heading =
  "font-heading text-3xl font-semibold leading-[1.15] tracking-[-0.04em] sm:text-4xl lg:text-[44px]";

/* ─── Metadata ────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Terms and Conditions | Star Selling",
  description:
    "Terms and Conditions for Star Selling (Saumic Craft Pvt. Ltd). Read our terms before purchasing any course.",
  openGraph: {
    title: "Terms and Conditions | Star Selling",
    description:
      "Read the Terms and Conditions for Star Selling (Saumic Craft Pvt. Ltd).",
    siteName: "Star Selling",
    type: "website",
  },
};

/* ─── Page ─────────────────────────────────────────────────────────── */

export default function TermsAndConditionsPage() {
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
          aria-labelledby="terms-heading"
          className="border-b border-border pt-18 pb-10 sm:pt-24 sm:pb-14"
        >
          <div className={`${container} max-w-3xl`}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:text-foreground">
              Legal
            </p>
            <h1 id="terms-heading" className={`${heading} mt-4`}>
              Terms and Conditions
            </h1>
            {LAST_UPDATED && (
              <p className="mt-3 text-sm text-muted-foreground">
                Last updated: {LAST_UPDATED}
              </p>
            )}
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
              Welcome to Star Sellingz (Saumic Craft Pvt. Ltd). By accessing our
              website, enrolling in our courses, or using our services, you agree
              to comply with the following Terms &amp; Conditions. Please read
              them carefully before purchasing any course.
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

            {/* ── Right: Terms content ────────────────────────────── */}
            <div className="max-w-3xl space-y-10">
              {SECTIONS.map((section, i) => (
                <section key={section.id} id={section.id}>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    {i + 1}. {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">
                    {section.content.map((item, j) =>
                      item.type === "paragraph" ? (
                        <p key={j}>
                          {item.link ? (
                            <>
                              {item.text?.split(item.link.label)[0]}
                              <Link
                                href={item.link.href}
                                className="font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary dark:text-foreground"
                              >
                                {item.link.label}
                              </Link>
                              {item.text?.split(item.link.label)[1]}
                            </>
                          ) : (
                            item.text
                          )}
                        </p>
                      ) : (
                        <ul
                          key={j}
                          className="space-y-2 list-disc pl-5"
                        >
                          {item.items?.map((listItem) => (
                            <li key={listItem}>{listItem}</li>
                          ))}
                        </ul>
                      ),
                    )}
                  </div>
                </section>
              ))}

              {/* ── Footer note ────────────────────────────────────── */}
              <div className="border-t border-border pt-8">
                <p className="text-base leading-7 text-muted-foreground">
                  Questions about these terms? Contact us at{" "}
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
