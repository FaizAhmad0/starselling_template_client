"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
  type AnimationPlaybackControls,
} from "motion/react";
import {
  ArrowUpRight,
  Check,
  CheckCheck,
  LockKeyhole,
  MousePointer2,
  Pause,
  Play,
  Plus,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}
function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
const getVisibility = () => document.visibilityState === "visible";
const getReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const serverVisible = () => false;
const serverReducedMotion = () => true;

function ThemeTile({
  variant,
}: {
  variant: "studio" | "editorial" | "canvas";
}) {
  return (
    <div
      className={cn(
        "h-14 rounded-md border border-border/70 bg-background p-2 sm:h-17",
        variant === "editorial" && "bg-primary/5",
      )}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="h-1 w-6 rounded-full bg-foreground/60" />
        <span className="h-1 w-4 rounded-full bg-foreground/15" />
      </div>
      {variant === "studio" ? (
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1.5 pt-1">
            <div className="h-1 w-full rounded bg-foreground/40" />
            <div className="h-1 w-2/3 rounded bg-foreground/40" />
            <div className="h-1.5 w-5 rounded bg-primary" />
          </div>
          <div className="h-6 rounded-sm bg-primary/15 sm:h-8" />
        </div>
      ) : variant === "editorial" ? (
        <div className="flex flex-col items-center gap-1.5">
          <span className="h-1.5 w-3/4 rounded-sm bg-primary/70" />
          <span className="h-1 w-1/2 rounded bg-foreground/25" />
          <div className="mt-0.5 flex w-full gap-1">
            {[1, 2, 3].map((n) => (
              <span
                key={n}
                className="h-3 flex-1 rounded-sm bg-primary/15 sm:h-4"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-1">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <span
              key={n}
              className={cn(
                "h-3 rounded-sm bg-muted sm:h-3.5",
                n === 2 && "bg-primary/25",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductShape({ kind }: { kind: "arch" | "vase" | "orb" }) {
  return (
    <div className="relative flex h-full items-end justify-center overflow-hidden rounded-md bg-primary/[0.06] pb-2">
      <span className="absolute bottom-1 h-2 w-2/3 rounded-[50%] bg-foreground/10 blur-sm" />
      {kind === "arch" && (
        <div className="relative h-4/5 w-1/2 rounded-t-full border-[8px] border-primary/35 border-b-primary/20 bg-background/70 shadow-sm sm:border-[11px]" />
      )}
      {kind === "vase" && (
        <div className="relative h-4/5 w-2/5 rounded-t-[35%] rounded-b-[40%] bg-linear-to-r from-primary/20 via-primary/40 to-primary/15">
          <span className="absolute -top-1 left-1/4 h-3 w-1/2 rounded-sm bg-primary/35" />
        </div>
      )}
      {kind === "orb" && (
        <div className="relative mb-1 aspect-square h-3/4 rounded-full bg-radial-[at_30%_25%] from-background via-primary/20 to-primary/60 shadow-md" />
      )}
    </div>
  );
}

function WebsitePreview({ editorial = false }: { editorial?: boolean }) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col bg-background p-4 sm:p-6",
        editorial && "bg-primary/[0.025]",
      )}
    >
      <div className="flex items-center justify-between border-b border-border/70 pb-3">
        <span
          className={cn(
            "text-[10px] font-bold tracking-[0.16em]",
            editorial && "font-serif text-xs tracking-[0.04em]",
          )}
        >
          FORM & FIELD
        </span>
        <div className="flex items-center gap-3 text-[8px] text-muted-foreground">
          <span>Collection</span>
          <span>Our story</span>
          <ShoppingBag className="size-3" />
        </div>
      </div>
      {editorial ? (
        <>
          <div className="py-4 text-center sm:py-5">
            <p className="mb-1.5 text-[7px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Objects for everyday living
            </p>
            <p className="font-serif text-[27px] leading-[1.05] tracking-tight sm:text-[36px]">
              A little more{" "}
              <em className="text-primary dark:text-foreground">considered.</em>
            </p>
            <span className="mt-3 inline-flex items-center gap-1 border-b border-foreground/50 pb-1 text-[8px]">
              Explore the collection <ArrowUpRight className="size-2.5" />
            </span>
          </div>
          <div className="grid min-h-0 flex-1 grid-cols-3 gap-2 sm:gap-3">
            {(["arch", "vase", "orb"] as const).map((kind, i) => (
              <div key={kind} className="flex min-h-0 flex-col gap-2">
                <div className="min-h-0 flex-1">
                  <ProductShape kind={kind} />
                </div>
                <div className="flex items-center justify-between text-[7px] text-muted-foreground">
                  <span>
                    {
                      ["Sculptural forms", "Everyday pieces", "Quiet details"][
                        i
                      ]
                    }
                  </span>
                  <Plus className="size-2" />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="grid min-h-0 flex-1 grid-cols-[1.1fr_1fr] items-center gap-4 py-5">
          <div>
            <p className="mb-3 text-[7px] font-semibold uppercase tracking-widest text-muted-foreground">
              Made for your everyday
            </p>
            <p className="font-heading text-[27px] font-semibold leading-[1.05] tracking-tight sm:text-[36px]">
              Good things.
              <br />
              Simple living.
            </p>
            <p className="mt-3 max-w-40 text-[8px] leading-relaxed text-muted-foreground">
              Thoughtful objects. A space that feels like you.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 rounded bg-primary px-3 py-2 text-[8px] text-primary-foreground">
              Explore collection <ArrowUpRight className="size-2.5" />
            </span>
          </div>
          <div className="h-4/5">
            <ProductShape kind="orb" />
          </div>
        </div>
      )}
    </div>
  );
}

export function ThemePreview() {
  const ref = useRef<HTMLElement>(null);
  const playback = useRef<AnimationPlaybackControls | null>(null);
  const inView = useInView(ref, { amount: 0.2 });
  const visible = useSyncExternalStore(
    subscribeVisibility,
    getVisibility,
    serverVisible,
  );
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    serverReducedMotion,
  );
  const [paused, setPaused] = useState(false);
  const progress = useMotionValue(0);
  const running = inView && visible && !paused && !reducedMotion;

  // A single shared clock keeps the cursor, click, selection, and preview in
  // sync. Pausing freezes the entire sequence and resuming keeps its position.
  useEffect(() => {
    if (reducedMotion) return;
    const controls = animate(progress, [0, 1], {
      duration: 12,
      ease: "linear",
      repeat: Infinity,
      autoplay: false,
    });
    playback.current = controls;
    return () => {
      controls.cancel();
      playback.current = null;
    };
  }, [progress, reducedMotion]);

  useEffect(() => {
    if (running) playback.current?.play();
    else playback.current?.pause();
  }, [running, reducedMotion]);

  const selection = useTransform(
    progress,
    [0, 0.31, 0.34, 0.91, 0.97, 1],
    [0, 0, 1, 1, 0, 0],
  );
  const initialSelection = useTransform(selection, (value) => 1 - value);
  const preview = useTransform(
    progress,
    [0, 0.34, 0.4, 0.91, 0.97, 1],
    [0, 0, 1, 1, 0, 0],
  );
  const indicator = useTransform(
    progress,
    [0, 0.42, 0.47, 0.87, 0.92, 1],
    [0, 0, 1, 1, 0, 0],
  );
  // Percentage transforms are relative to a full-size overlay of the options
  // row, so the simulated pointer remains aligned at every viewport width.
  const cursorX = useTransform(
    progress,
    [0, 0.12, 0.29, 0.5, 0.65, 1],
    ["85%", "85%", "50%", "50%", "77%", "77%"],
  );
  const cursorY = useTransform(
    progress,
    [0, 0.12, 0.29, 0.5, 0.65, 1],
    ["110%", "110%", "42%", "42%", "100%", "100%"],
  );
  const cursorOpacity = useTransform(
    progress,
    [0, 0.1, 0.14, 0.52, 0.64, 1],
    [0, 0, 1, 1, 0, 0],
  );
  const rippleScale = useTransform(
    progress,
    [0, 0.3, 0.36, 0.38, 1],
    [0, 0, 2.5, 2.5, 2.5],
  );
  const rippleOpacity = useTransform(
    progress,
    [0, 0.3, 0.31, 0.37, 1],
    [0, 0, 0.5, 0, 0],
  );

  return (
    <figure
      ref={ref}
      className="relative mx-auto w-full max-w-[580px] min-w-0"
      aria-labelledby="theme-preview-caption"
      data-animation-state={
        reducedMotion ? "static" : running ? "playing" : "paused"
      }
    >
      <div
        className="pointer-events-none absolute -inset-5 -z-10 rounded-[3rem] bg-primary/5 blur-2xl"
        aria-hidden="true"
      />
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
        <div
          className="flex h-11 items-center gap-4 border-b border-border bg-muted/50 px-4"
          aria-hidden="true"
        >
          <div className="flex gap-1.5">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className="size-2 rounded-full border border-foreground/15 bg-foreground/10"
              />
            ))}
          </div>
          <span className="mx-auto flex items-center gap-1.5 rounded-md border border-border/70 bg-background px-7 py-1 text-[9px] text-muted-foreground">
            <LockKeyhole className="size-2.5" /> Your website, your style
          </span>
          <span className="w-8" />
        </div>
        <div className="p-4 sm:p-5" aria-hidden="true">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold">
              Make it feel like you.
            </span>
            <span className="text-[9px] text-muted-foreground">
              01 / Choose a style
            </span>
          </div>
          <div className="relative mb-4 grid grid-cols-3 gap-2 sm:gap-3">
            {(["studio", "editorial", "canvas"] as const).map((theme) => (
              <div
                key={theme}
                className="relative rounded-lg border border-border bg-muted/30 p-1.5"
              >
                <ThemeTile variant={theme} />
                <div className="flex h-6 items-center justify-between px-0.5 pt-1 text-[9px] font-medium capitalize">
                  {theme}
                  {theme === "editorial" && (
                    <motion.span
                      style={{ opacity: reducedMotion ? 1 : selection }}
                      className="flex size-3.5 items-center justify-center rounded-full bg-primary text-primary-foreground"
                    >
                      <Check className="size-2.5" />
                    </motion.span>
                  )}
                </div>
                {theme !== "canvas" && (
                  <motion.span
                    className="pointer-events-none absolute -inset-px rounded-lg border-2 border-primary"
                    style={{
                      opacity: reducedMotion
                        ? theme === "editorial"
                          ? 1
                          : 0
                        : theme === "editorial"
                          ? selection
                          : initialSelection,
                    }}
                  />
                )}
              </div>
            ))}
            {!reducedMotion && (
              <>
                <div className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
                  <motion.span
                    className="block size-6 rounded-full border border-primary bg-primary/20"
                    style={{ opacity: rippleOpacity, scale: rippleScale }}
                  />
                </div>
                <motion.div
                  className="pointer-events-none absolute inset-0 z-10"
                  style={{ x: cursorX, y: cursorY, opacity: cursorOpacity }}
                >
                  <MousePointer2
                    className="size-6 fill-foreground text-background drop-shadow-sm"
                    strokeWidth={1.5}
                  />
                </motion.div>
              </>
            )}
          </div>
          <div className="relative h-[278px] overflow-hidden rounded-lg border border-border sm:h-[300px]">
            <WebsitePreview />
            <motion.div
              className="absolute inset-0 bg-background"
              style={{ opacity: reducedMotion ? 1 : preview }}
            >
              <WebsitePreview editorial />
            </motion.div>
          </div>
          <div className="mt-3 flex min-h-6 items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 text-[9px] text-muted-foreground">
              <Sparkles className="size-3" /> A starting point for your style
            </span>
            <motion.span
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2 py-1 text-[9px] font-medium text-primary dark:text-foreground"
              style={{ opacity: reducedMotion ? 1 : indicator }}
            >
              <CheckCheck className="size-3" /> Theme selected
            </motion.span>
          </div>
        </div>
      </div>
      <figcaption
        id="theme-preview-caption"
        className="mt-4 flex min-h-9 items-center justify-between gap-3 px-1"
      >
        <p className="max-w-[70%] text-[11px] leading-5 text-muted-foreground">
          Illustrative preview only. Your website is built through your selected
          service plan.
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setPaused((value) => !value)}
          disabled={reducedMotion}
          aria-label={
            reducedMotion
              ? "Animation disabled for reduced motion"
              : paused
                ? "Play preview animation"
                : "Pause preview animation"
          }
          aria-pressed={paused || reducedMotion}
          className="h-9 gap-1.5 px-2 text-xs"
        >
          {paused || reducedMotion ? (
            <Play className="size-3" aria-hidden="true" />
          ) : (
            <Pause className="size-3" aria-hidden="true" />
          )}
          {reducedMotion ? "Static" : paused ? "Play" : "Pause"}
        </Button>
      </figcaption>
    </figure>
  );
}
