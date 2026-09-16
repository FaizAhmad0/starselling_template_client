import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, List } from "lucide-react";
import { DashboardNavbar } from "@/components/dashboard/dashboard-navbar";

/* ─── Constants ───────────────────────────────────────────────────── */

// TODO: Confirm effective date before publishing
const LAST_UPDATED = "";

const CONTACT_EMAIL = "info@starsellingz.com";
const CONTACT_WEBSITE = "https://starsellingz.com/";

interface RichListItem {
  readonly text: string;
  readonly link?: { readonly href: string; readonly label: string };
}

interface SectionItem {
  readonly type: "paragraph" | "list";
  readonly text?: string;
  readonly items?: readonly (string | RichListItem)[];
  readonly link?: { readonly href: string; readonly label: string };
}

interface TocSection {
  readonly id: string;
  readonly title: string;
  readonly content: readonly SectionItem[];
}

const SECTIONS: readonly TocSection[] = [
  {
    id: "refund-eligibility",
    title: "Refund Eligibility",
    content: [
      {
        type: "paragraph",
        text: "We offer a 7-Day Refund Policy for eligible course purchases.",
      },
      {
        type: "paragraph",
        text: "You may request a refund within 7 calendar days from the date of purchase if:",
      },
      {
        type: "list",
        items: [
          "You are not satisfied with the course.",
          "Your request is submitted within the eligible refund period.",
          "The course has not been misused or shared with others.",
        ],
      },
      {
        type: "paragraph",
        text: "After the 7-day refund period, no refund requests will be accepted.",
      },
    ],
  },
  {
    id: "how-to-request-a-refund",
    title: "How to Request a Refund",
    content: [
      {
        type: "paragraph",
        text: "To request a refund, please contact our support team with the following details:",
      },
      {
        type: "list",
        items: [
          "Full Name",
          "Registered Email Address",
          "Mobile Number",
          "Order ID",
          "Payment Reference",
          "Reason for Refund",
        ],
      },
      {
        type: "paragraph",
        text: "Our support team will review your request and respond within 3–7 business days.",
      },
    ],
  },
  {
    id: "refund-process",
    title: "Refund Process",
    content: [
      {
        type: "paragraph",
        text: "Once your refund request is approved:",
      },
      {
        type: "list",
        items: [
          "The refund will be processed to the original payment method.",
          "Refunds are generally credited within 7–10 business days, depending on your bank or payment provider.",
        ],
      },
    ],
  },
  {
    id: "non-refundable-cases",
    title: "Non-Refundable Cases",
    content: [
      {
        type: "paragraph",
        text: "Refunds will not be provided in the following situations:",
      },
      {
        type: "list",
        items: [
          "Refund request submitted after 7 days of purchase.",
          "Course materials have been copied, downloaded, shared, or distributed.",
          {
            text: "Violation of our Terms & Conditions.",
            link: { href: "/terms-and-conditions", label: "Terms & Conditions" },
          },
          "Purchases made using fraudulent payment methods.",
        ],
      },
    ],
  },
  {
    id: "course-access",
    title: "Course Access",
    content: [
      {
        type: "paragraph",
        text: "If a refund is approved:",
      },
      {
        type: "list",
        items: [
          "Access to the purchased course will be permanently revoked.",
          "All associated learning materials, downloads, and resources must no longer be used.",
        ],
      },
    ],
  },
  {
    id: "cancellation-policy",
    title: "Cancellation Policy",
    content: [
      {
        type: "paragraph",
        text: "You may cancel your enrollment within the 7-day refund period by contacting our support team. If the cancellation request is approved, the applicable refund will be processed according to this policy.",
      },
    ],
  },
  {
    id: "changes-to-this-policy",
    title: "Changes to This Policy",
    content: [
      {
        type: "paragraph",
        text: "Star Sellingz (Saumic Craft Pvt. Ltd) reserves the right to modify or update this Return & Refund Policy at any time. Any changes will be posted on this page with the updated effective date.",
      },
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: [
      {
        type: "paragraph",
        text: "If you have any questions regarding our Return & Refund Policy, please contact us:",
      },
      {
        type: "paragraph",
        text: "Star Sellingz (Saumic Craft Pvt. Ltd)",
      },
      {
        type: "paragraph",
        text: "Email:",
        link: { href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL },
      },
      {
        type: "paragraph",
        text: "Website:",
        link: { href: CONTACT_WEBSITE, label: "starsellingz.com" },
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
  title: "Return and Refund Policy | Star Selling",
  description:
    "Return and Refund Policy for Star Selling (Saumic Craft Pvt. Ltd). Learn about our 7-day refund policy for course purchases.",
  openGraph: {
    title: "Return and Refund Policy | Star Selling",
    description:
      "Read the Return and Refund Policy for Star Selling (Saumic Craft Pvt. Ltd).",
    siteName: "Star Selling",
    type: "website",
  },
};

/* ─── Page ─────────────────────────────────────────────────────────── */

export default function ReturnAndRefundPolicyPage() {
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
          aria-labelledby="refund-heading"
          className="border-b border-border pt-18 pb-10 sm:pt-24 sm:pb-14"
        >
          <div className={`${container} max-w-3xl`}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:text-foreground">
              Legal
            </p>
            <h1 id="refund-heading" className={`${heading} mt-4`}>
              Return and Refund Policy
            </h1>
            {LAST_UPDATED && (
              <p className="mt-3 text-sm text-muted-foreground">
                Last updated: {LAST_UPDATED}
              </p>
            )}
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
              Thank you for choosing Star Sellingz (Saumic Craft Pvt. Ltd). We
              are committed to providing high-quality e-commerce training and
              ensuring customer satisfaction. Please read our Return &amp; Refund
              Policy carefully before purchasing any course.
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
                  <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">
                    {section.content.map((item, j) =>
                      item.type === "paragraph" ? (
                        <p key={j}>
                          {item.link ? (
                            <>
                              {item.text && item.text + " "}
                              <Link
                                href={item.link.href}
                                className="font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary dark:text-foreground"
                              >
                                {item.link.label}
                              </Link>
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
                          {item.items?.map((listItem) => {
                            if (typeof listItem === "string") {
                              return <li key={listItem}>{listItem}</li>;
                            }
                            return (
                              <li key={listItem.text}>
                                {listItem.text.split(listItem.link!.label)[0]}
                                <Link
                                  href={listItem.link!.href}
                                  className="font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary dark:text-foreground"
                                >
                                  {listItem.link!.label}
                                </Link>
                                {listItem.text.split(listItem.link!.label)[1]}
                              </li>
                            );
                          })}
                        </ul>
                      ),
                    )}
                  </div>
                </section>
              ))}
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
