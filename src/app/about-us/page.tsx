import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle,
  Compass,
  GraduationCap,
  Layers,
  Lightbulb,
  Rocket,
  Store,
  Target,
  TrendingUp,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DashboardNavbar } from "@/components/dashboard/dashboard-navbar";
import { ButtonLink } from "@/components/shared/button-link";

export const metadata: Metadata = {
  title: "About Us | Star Selling",
  description:
    "Learn about Star Selling (Saumic Craft Pvt. Ltd) – a professional e-commerce learning platform dedicated to helping entrepreneurs build successful online businesses.",
  openGraph: {
    title: "About Us | Star Selling",
    description:
      "Your trusted partner in building successful e-commerce businesses.",
    siteName: "Star Selling",
    type: "website",
  },
};

/* ─── Content arrays ──────────────────────────────────────────────── */

interface Program {
  icon: LucideIcon;
  title: string;
  description: string;
}

const programs: readonly Program[] = [
  {
    icon: Target,
    title: "Amazon Seller Mastery",
    description:
      "Learn to list, price, and fulfil products on Amazon. You'll walk away able to manage inventory, run Sponsored ads, and optimise listings for the Buy Box.",
  },
  {
    icon: TrendingUp,
    title: "Meesho Seller Training",
    description:
      "Set up a Meesho supplier account, create catalogues, and handle orders end-to-end. You'll know how to price for margins and use Meesho's growth tools.",
  },
  {
    icon: Store,
    title: "Etsy Business Programme",
    description:
      "Open and brand an Etsy shop, craft SEO-friendly listings, and manage international shipping. You'll be ready to sell handmade or digital products globally.",
  },
  {
    icon: Layers,
    title: "E-Commerce Website Development",
    description:
      "Build a professional online store from scratch — domain, hosting, payment gateway, and shipping integration — without writing code.",
  },
  {
    icon: Lightbulb,
    title: "Digital Business Growth Strategies",
    description:
      "Apply paid and organic acquisition channels — Google Ads, Meta Ads, email marketing, and SEO — to drive consistent traffic and repeat orders.",
  },
  {
    icon: BookOpen,
    title: "Live Practical Projects",
    description:
      "Work on real store setups during the course so you finish with a live, revenue-ready project instead of just theory notes.",
  },
  {
    icon: Rocket,
    title: "Business Automation & Scaling",
    description:
      "Automate order processing, inventory syncing, and customer communications so you can scale without adding headcount.",
  },
];

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: readonly Step[] = [
  {
    number: "01",
    icon: Compass,
    title: "Choose your programme",
    description:
      "Pick the course that matches your goal — Amazon, Meesho, Etsy, or a full website build.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Learn step by step",
    description:
      "Follow structured video lessons and practical assignments designed for absolute beginners.",
  },
  {
    number: "03",
    icon: WandSparkles,
    title: "Build a live project",
    description:
      "Apply what you learn to a real store or listing during the course — not after it.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch and scale",
    description:
      "Go live, get your first orders, and use proven strategies to grow sustainably.",
  },
];

const benefits = [
  "Beginner to Advanced Learning",
  "Practical, Industry-Oriented Training",
  "Step-by-Step Video Lessons",
  "Real Business Case Studies",
  "Expert Guidance & Mentorship",
  "Lifetime Learning Resources",
  "Certificate of Completion",
  "Dedicated Student Support",
] as const;

/* ─── Style constants ─────────────────────────────────────────────── */

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8";
const eyebrow =
  "text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:text-foreground";
const heading =
  "font-heading text-3xl font-semibold leading-[1.15] tracking-[-0.04em] sm:text-4xl lg:text-[44px]";

/* ─── Page ─────────────────────────────────────────────────────────── */

export default function AboutUsPage() {
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
          aria-labelledby="about-hero-heading"
          className="relative isolate border-b border-border pt-18 pb-16 sm:pt-24 sm:pb-24"
        >
          <div
            className="home-hero-grid pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
          />
          <div className={`${container} max-w-3xl text-center`}>
            <p className={eyebrow}>About Us</p>
            <h1
              id="about-hero-heading"
              className={`${heading} mt-4`}
            >
              Your Trusted Partner in
              <br />
              <span className="text-primary dark:text-foreground">
                E-Commerce Success
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground">
              Star Sellingz (Saumic Craft Pvt. Ltd) is a professional e-commerce
              training company that turns aspiring entrepreneurs into confident,
              revenue-ready online sellers.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink
                href="/courses"
                className="h-12 gap-6 rounded-lg px-5 text-sm"
              >
                Explore Courses{" "}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href="/contact-us"
                variant="outline"
                className="h-12 gap-4 rounded-lg bg-background px-5 text-sm"
              >
                Talk to Us{" "}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </section>

        {/* ── 2. Who We Are ────────────────────────────────────────── */}
        <section
          aria-labelledby="who-we-are-heading"
          className="border-b border-border py-20 sm:py-24"
        >
          <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
            <div>
              <p className={eyebrow}>Who We Are</p>
              <h2 id="who-we-are-heading" className={`${heading} mt-4`}>
                We teach people how to sell online — and make it stick
              </h2>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                Star Sellingz (Saumic Craft Pvt. Ltd) is an Indian e-commerce
                training company built for aspiring entrepreneurs, working
                professionals, students, and small-business owners who want a
                structured path to online revenue — not another round of
                scattered YouTube tutorials.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Every course we offer is built around a specific marketplace
                (Amazon, Meesho, Etsy) or a specific skill (website building,
                automation, growth marketing). You learn by doing: each module
                ends with a practical assignment, and the final outcome is a
                live, revenue-ready project you own.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-muted/40 p-10">
                <Image
                  src="/logo.png"
                  alt="Star Selling"
                  width={854}
                  height={255}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. What We Teach ─────────────────────────────────────── */}
        <section
          aria-labelledby="what-we-teach-heading"
          className="border-b border-border bg-muted/35 py-20 sm:py-24"
        >
          <div className={container}>
            <div className="max-w-2xl">
              <p className={eyebrow}>What We Teach</p>
              <h2 id="what-we-teach-heading" className={`${heading} mt-4`}>
                programmes built around real marketplaces
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
                Every programme is designed around a specific selling channel so
                you learn exactly what to do — and in what order — to start
                generating revenue.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {programs.map((program) => (
                <article
                  key={program.title}
                  className="flex flex-col rounded-xl border border-border bg-background p-6"
                >
                  <span className="mb-4 flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/40">
                    <program.icon
                      className="size-[18px] text-primary dark:text-foreground"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight">
                    {program.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                    {program.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. How It Works ──────────────────────────────────────── */}
        <section
          aria-labelledby="how-it-works-heading"
          className="py-20 sm:py-24"
        >
          <div className={container}>
            <div className="max-w-2xl">
              <p className={eyebrow}>How It Works</p>
              <h2 id="how-it-works-heading" className={`${heading} mt-4`}>
                Four steps from sign-up to first sale
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
                Every learner follows the same clear path — so you always know
                what comes next.
              </p>
            </div>

            {/* Desktop horizontal stepper */}
            <div className="mt-14 hidden md:block">
              <ol className="relative grid grid-cols-4 gap-8">
                {/* Connecting line */}
                <div
                  className="pointer-events-none absolute left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] top-5 h-px bg-border"
                  aria-hidden="true"
                />
                {steps.map((step) => (
                  <li key={step.number} className="relative flex flex-col items-center text-center">
                    <span className="relative z-10 flex size-10 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold">
                      {step.number}
                    </span>
                    <h3 className="mt-5 text-base font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Mobile vertical stepper */}
            <div className="mt-14 md:hidden">
              <ol className="relative space-y-10 pl-8">
                {/* Vertical connecting line */}
                <div
                  className="pointer-events-none absolute left-[15px] top-5 bottom-5 w-px bg-border"
                  aria-hidden="true"
                />
                {steps.map((step) => (
                  <li key={step.number} className="relative">
                    <span className="absolute -left-8 top-0 flex size-8 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold">
                      {step.number}
                    </span>
                    <h3 className="text-base font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── 5. Why Choose Us ─────────────────────────────────────── */}
        <section
          aria-labelledby="why-choose-heading"
          className="border-t border-border bg-muted/35 py-20 sm:py-24"
        >
          <div className={`${container} grid gap-12 lg:grid-cols-2 lg:gap-20`}>
            <div>
              <p className={eyebrow}>Why Choose Star Sellingz?</p>
              <h2 id="why-choose-heading" className={`${heading} mt-4`}>
                Built for learners who want results, not just recordings
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
                Whether your goal is to sell on Amazon, Meesho, Etsy, or build
                your own professional e-commerce website, our courses give you
                the tools, strategies, and ongoing support to get there.
              </p>
              <div className="mt-8">
                <ButtonLink
                  href="/courses"
                  className="h-12 gap-6 rounded-lg px-5 text-sm"
                >
                  Explore Courses{" "}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle
                    className="mt-0.5 size-5 shrink-0 text-primary dark:text-foreground"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Closing CTA ───────────────────────────────────────── */}
        <section
          aria-labelledby="about-cta-heading"
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
                    id="about-cta-heading"
                    className="max-w-xl font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl"
                  >
                    Ready to start your e-commerce journey?
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-7 text-primary-foreground/90">
                    Whether you&apos;re starting from scratch or looking to
                    expand your existing business, Star Sellingz (Saumic Craft
                    Pvt. Ltd) is here to help you learn, launch, and grow with
                    confidence.
                  </p>
                </div>
                <ButtonLink
                  href="/contact-us"
                  className="h-12 gap-8 rounded-lg bg-background px-6 text-sm text-foreground hover:bg-background/90"
                >
                  Contact Us{" "}
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
