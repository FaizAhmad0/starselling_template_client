import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardList,
  Headphones,
  Layers3,
  ListChecks,
  Package,
  PanelsTopLeft,
  Search,
  Settings2,
  Sparkles,
} from "lucide-react";
import { DashboardNavbar } from "@/components/dashboard/dashboard-navbar";
import { ButtonLink } from "@/components/shared/button-link";
import { HomeFaq } from "@/features/home/components/faq";
import { PlanCard } from "@/features/home/components/plan-card";
import { Reveal } from "@/features/home/components/reveal";
import { ThemePreview } from "@/features/home/components/theme-preview";
import { homeLinks } from "@/features/home/data/content";
import { plans } from "@/features/home/data/plans";

export const metadata: Metadata = {
  title: "Website Development Plans | Star Selling",
  description:
    "Give your business a professional online presence with Star Selling. Compare Basic, Premium, and Advanced plans for website, catalog, SEO, and mobile app services.",
  openGraph: {
    title: "Choose your theme. Get your website ready. | Star Selling",
    description:
      "Website development, simplified. Find the Star Selling service plan that fits your business.",
    siteName: "Star Selling",
    type: "website",
  },
};

const steps = [
  {
    number: "01",
    icon: Layers3,
    title: "Choose your plan.",
    description:
      "Compare the inclusions and choose the services that fit your business.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Share your vision.",
    description:
      "Share your requirements and preferred style, so your business stays at the heart of the work.",
  },
  {
    number: "03",
    icon: PanelsTopLeft,
    title: "Let’s get to work.",
    description:
      "Begin your website setup or improvement services, based on your selected plan.",
  },
] as const;

const benefits = [
  {
    icon: ListChecks,
    title: "Know what’s included.",
    description:
      "Clearly defined inclusions, exclusions, and unspecified services for every plan.",
    availability: "Every plan",
  },
  {
    icon: Package,
    title: "Give your products a place.",
    description:
      "Catalog, inventory, images, and video integration to manage your product content.",
    availability: "All three plans",
  },
  {
    icon: Search,
    title: "Make SEO part of the plan.",
    description:
      "Product and on-page SEO, with keyword research and SEO services included.",
    availability: "All three plans",
  },
  {
    icon: Settings2,
    title: "Connect the essentials.",
    description:
      "Website setup and design, with payment, shipping, Google, and social integrations.",
    availability: "Premium & Advanced",
  },
  {
    icon: Headphones,
    title: "Support to move forward.",
    description: "Website training and support are included in eligible plans.",
    availability: "Premium & Advanced",
  },
] as const;

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8";
const eyebrow =
  "text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:text-foreground";
const heading =
  "font-heading text-3xl font-semibold leading-[1.15] tracking-[-0.04em] sm:text-4xl lg:text-[44px]";

export default function Home() {
  return (
    <div className="home-page bg-background text-foreground">
      <a
        href="#main-content"
        className="fixed top-3 left-4 z-[60] -translate-y-24 rounded-lg bg-primary px-4 py-3 text-sm text-primary-foreground focus:translate-y-0 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
      >
        Skip to content
      </a>
      <DashboardNavbar variant="public" />

      <main id="main-content" tabIndex={-1} className=" outline-none">
        <section
          aria-labelledby="hero-heading"
          className="relative isolate mx-auto w-full max-w-6xl overflow-hidden border-b border-border"
        >
          <div
            className="home-hero-grid pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
          />
          <div
            className={`${container} grid items-center gap-12 pt-16 pb-8 sm:pt-20 sm:pb-16 lg:grid-cols-[1fr_1.04fr] lg:gap-12 lg:py-24 xl:gap-20`}
          >
            <div className="max-w-xl">
              <p className=" inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-primary/5 px-3.5 py-2 text-xs font-medium text-primary dark:text-foreground">
                <span
                  className="size-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
                Website development, simplified
              </p>
              <h1
                id="hero-heading"
                className="font-heading text-[clamp(2.6rem,4.4vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.055em]"
              >
                Choose your theme.
                <br />
                <span className="text-primary dark:text-foreground">
                  Get your website ready.
                </span>
              </h1>
              <p className="mt-7 max-w-[440px] text-base leading-6 text-muted-foreground sm:text-sm">
                Give your business a professional online presence with website
                development plans built around your needs.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink
                  href="#pricing"
                  className="h-12 gap-6 rounded-lg px-5 text-sm"
                >
                  View Plans{" "}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink
                  href="#how-it-works"
                  variant="outline"
                  className="h-12 gap-4 rounded-lg bg-background px-5 text-sm"
                >
                  How It Works{" "}
                  <ArrowDown className="size-4" aria-hidden="true" />
                </ButtonLink>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Check
                    className="size-3.5 text-primary dark:text-foreground"
                    aria-hidden="true"
                  />{" "}
                  Clear plan inclusions
                </span>
                <span className="flex items-center gap-1.5">
                  <Check
                    className="size-3.5 text-primary dark:text-foreground"
                    aria-hidden="true"
                  />{" "}
                  Services for your next step
                </span>
              </div>
            </div>
            <ThemePreview />
          </div>
          {/* <div className="border-t border-border bg-muted/30">
            <div
              className={`${container} flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-5`}
            >
              <p className="text-xs font-medium text-muted-foreground">
                Your business. A considered online presence.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium sm:gap-x-8">
                <span className="flex items-center gap-2">
                  <PanelsTopLeft
                    className="size-4 text-muted-foreground"
                    aria-hidden="true"
                  />{" "}
                  Website services
                </span>
                <span className="flex items-center gap-2">
                  <Package
                    className="size-4 text-muted-foreground"
                    aria-hidden="true"
                  />{" "}
                  Product content
                </span>
                <span className="flex items-center gap-2">
                  <Search
                    className="size-4 text-muted-foreground"
                    aria-hidden="true"
                  />{" "}
                  SEO
                </span>
              </div>
            </div>
          </div> */}
        </section>

        {/* <section
          id="how-it-works"
          aria-labelledby="process-heading"
          className={`${container} py-20 sm:py-24 lg:py-28`}
        >
          <Reveal>
            <div className="grid gap-5 lg:grid-cols-2 lg:items-end">
              <div>
                <p className={eyebrow}>How it works</p>
                <h2 id="process-heading" className={`${heading} mt-4`}>
                  A clear path from
                  <br className="hidden sm:block" /> idea to online.
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-muted-foreground lg:justify-self-end">
                A few thoughtful steps to get started, with the right services
                for where your business is today.
              </p>
            </div>
            <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
              {steps.map((step) => (
                <li
                  key={step.number}
                  className="relative border-t border-border pt-6"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">
                      / {step.number}
                    </span>
                    <step.icon
                      className="size-5 text-primary dark:text-foreground"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-10 flex items-start gap-3 rounded-xl border border-border bg-muted/40 p-4 text-xs leading-6 text-muted-foreground">
              <span
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>
                Services depend on your selected plan.{" "}
                <strong className="font-medium text-foreground">
                  Basic improves an existing website
                </strong>{" "}
                with catalog, content, and SEO services; it does not include a
                new website build.
              </span>
            </p>
          </Reveal>
        </section> */}

        {/* <section
          id="benefits"
          aria-labelledby="benefits-heading"
          className="border-y border-border bg-muted/35"
        >
          <div className={`${container} py-20 sm:py-24`}>
            <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
              <div>
                <p className={eyebrow}>Made for your business</p>
                <h2 id="benefits-heading" className={`${heading} mt-4`}>
                  The right services.
                  <br />A stronger foundation.
                </h2>
                <p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">
                  From the details in your catalog to the essentials behind your
                  website, find the support your next step calls for.
                </p>
                <a
                  href="#pricing"
                  className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  Compare the plans{" "}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
              <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <article
                    key={benefit.title}
                    className={
                      index === 4
                        ? "flex gap-4 border-t border-border pt-7 sm:col-span-2"
                        : "border-t border-border pt-6"
                    }
                  >
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background ${index === 4 ? "" : "mb-4"}`}
                    >
                      <benefit.icon
                        className="size-[18px] text-primary dark:text-foreground"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {benefit.description}
                      </p>
                      <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {benefit.availability}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section> */}

        <section
          id="pricing"
          aria-labelledby="pricing-heading"
          className={`${container} py-12`}
        >
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className={eyebrow}>Our service plans</p>
              <h2 id="pricing-heading" className={`${heading} mt-4`}>
                Your next step starts here.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-muted-foreground">
                Improve what you have, build your online presence, or add a
                mobile app. Choose the plan that fits.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid items-start gap-8 rounded-4xl bg-muted/40 p-4 sm:p-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.id} aria-labelledby={`plan-${plan.id}`}>
                <PlanCard plan={plan} />
              </article>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-2xl text-center text-xs leading-6 text-muted-foreground">
            Each plan lists its own inclusions. “Not specified” means the
            service has not been confirmed.
            <br className="hidden sm:block" /> Mobile Responsive Development and
            Mobile App Development are separate services.
          </p>
        </section>

        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="border-t border-border"
        >
          <div
            className={`${container} grid gap-10 py-20 sm:py-24 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20`}
          >
            <div>
              <p className={eyebrow}>A little clarity</p>
              <h2 id="faq-heading" className={`${heading} mt-4`}>
                Good questions.
                <br />
                Clear answers.
              </h2>
              <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">
                The details to help you find the right starting point.
              </p>
            </div>
            <HomeFaq />
          </div>
        </section>

        <section
          aria-labelledby="cta-heading"
          className={`${container} pb-20 sm:pb-24`}
        >
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
                  <Sparkles className="size-4" aria-hidden="true" /> Let’s take
                  the next step
                </p>
                <h2
                  id="cta-heading"
                  className="max-w-xl font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl"
                >
                  Ready to build your online presence?
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-primary-foreground/90">
                  Find the plan that fits your business and take the next step.
                </p>
              </div>
              <ButtonLink
                href="#pricing"
                className="h-12 gap-8 rounded-lg bg-background px-6 text-sm text-foreground hover:bg-background/90"
              >
                View Plans{" "}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </ButtonLink>
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
                  {
                    label: "About Us",
                    href: "/about-us",
                  },
                  {
                    label: "Contact Us",
                    href: "/contact-us",
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

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Legal
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  {
                    label: "Privacy Policy",
                    href: "/privacy-policy-2",
                  },
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
