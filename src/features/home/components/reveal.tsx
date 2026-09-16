"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

// The server renders visible content, including when JavaScript is unavailable.
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || reducedMotion !== false || !ref.current) return;
    const animation = animate(
      ref.current,
      { opacity: [0.5, 1], y: [12, 0] },
      {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    );
    return () => animation.complete();
  }, [inView, reducedMotion]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
