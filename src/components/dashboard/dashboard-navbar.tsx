"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowUpRight, Bell, Menu, X } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/shared/button-link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { homeLinks } from "@/features/home/data/content";
import { cn } from "@/lib/utils";

type DashboardNavbarProps =
  | { variant?: "dashboard"; onMenuToggle: () => void }
  | { variant: "public"; onMenuToggle?: never };

export function DashboardNavbar({
  onMenuToggle,
  variant = "dashboard",
}: DashboardNavbarProps) {
  const isPublic = variant === "public";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuTrigger = useRef<HTMLButtonElement>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-18 border-b border-border bg-background/95 backdrop-blur-xl">
      <div
        className={cn(
          "flex h-full items-center justify-between px-4 sm:px-6",
          isPublic && "mx-auto max-w-7xl gap-3 lg:px-8",
        )}
      >
        <div className="flex items-center gap-3">
          {!isPublic && (
            <button
              type="button"
              onClick={onMenuToggle}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background text-muted-foreground shadow-sm transition hover:border-border hover:text-foreground lg:hidden"
              aria-label="Open sidebar menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          )}

          <Link
            href="/"
            aria-label="Star Selling home"
            className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <Image
              src="/logo.png"
              alt="Star Selling"
              width={854}
              height={255}
              sizes={isPublic ? "(min-width: 640px) 184px, 146px" : "188px"}
              className={
                isPublic
                  ? "h-auto w-[146px] object-contain sm:w-[184px]"
                  : "h-14 w-auto object-contain"
              }
              priority
            />
          </Link>
        </div>

        {isPublic ? (
          <>
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-7 lg:flex"
            >
              {homeLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-sm py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 sm:gap-4">
              <Link
                href="/login"
                className="inline-flex min-h-11 items-center rounded-sm px-2 text-sm font-medium hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
              >
                Sign in
              </Link>
              <ButtonLink
                href="#pricing"
                className="hidden h-10 gap-3 rounded-lg px-4 text-sm sm:inline-flex"
              >
                View Plans{" "}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <Collapsible
                open={menuOpen}
                onOpenChange={setMenuOpen}
                className="lg:hidden"
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setMenuOpen(false);
                    menuTrigger.current?.focus();
                  }
                }}
              >
                <CollapsibleTrigger
                  ref={menuTrigger}
                  aria-label={
                    menuOpen ? "Close navigation menu" : "Open navigation menu"
                  }
                  className="flex size-11 cursor-pointer items-center justify-center rounded-lg border border-border focus-visible:outline-2 focus-visible:outline-primary"
                >
                  {menuOpen ? (
                    <X className="size-5" aria-hidden="true" />
                  ) : (
                    <Menu className="size-5" aria-hidden="true" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="home-collapsible absolute inset-x-0 top-18 border-b border-border bg-background shadow-lg">
                  <nav
                    aria-label="Mobile navigation"
                    className="mx-auto flex max-w-7xl flex-col gap-1 p-4 sm:px-6"
                  >
                    {homeLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted focus-visible:outline-2 focus-visible:outline-primary"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="hidden items-center gap-1 md:flex">
              <Link
                href="/about"
                className="rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-foreground/80 transition hover:bg-muted hover:text-foreground"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className="rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-foreground/80 transition hover:bg-muted hover:text-foreground"
              >
                Contact Us
              </Link>
              <button
                type="button"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition hover:bg-muted hover:text-foreground"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute right-1 top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-bold text-white">
                  3
                </span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
