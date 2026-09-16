"use client";

import { useState } from "react";
import { Check, ChevronDown, CircleHelp, Star, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/shared/button-link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import {
  featureIds,
  featureLabels,
  formatPlanPrice,
  statusLabels,
  type FeatureId,
  type FeatureStatus,
  type Plan,
} from "../data/plans";

const statusIcons = {
  included: Check,
  excluded: X,
  "not-specified": CircleHelp,
};
interface FeatureProps {
  id: FeatureId;
  status: FeatureStatus;
  highlighted: boolean;
}

function Feature({ id, status, highlighted }: FeatureProps) {
  const Icon = statusIcons[status];
  return (
    <li
      className="flex min-h-12 items-start gap-3 py-1 lg:min-h-17 xl:min-h-12"
      data-feature={id}
      data-status={status}
    >
      <span
        className={cn(
          "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full",
          status === "included"
            ? "bg-primary/10 text-primary dark:text-foreground"
            : "bg-muted text-muted-foreground",
          highlighted &&
            status === "included" &&
            "bg-primary text-primary-foreground dark:text-primary-foreground",
        )}
      >
        <Icon className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
      </span>
      <span className="min-w-0 text-sm leading-5">
        <span
          className={
            status === "included" ? "text-foreground" : "text-muted-foreground"
          }
        >
          {featureLabels[id]}
        </span>
        <span className="mt-0.5 block text-xs text-muted-foreground">
          {statusLabels[status]}
        </span>
      </span>
    </li>
  );
}

export function PlanCard({ plan }: { plan: Plan }) {
  const [open, setOpen] = useState(false);
  const remaining = featureIds.filter((id) => !plan.featured.includes(id));

  return (
    <Card
      className={cn(
        "relative gap-0 overflow-visible rounded-3xl px-6 py-2 shadow-sm shadow-foreground/5 ring-1 ring-border sm:rounded-4xl sm:p-8",
        plan.recommended && "shadow-xl shadow-primary/10 ring-primary",
      )}
    >
      {plan.recommended && (
        <Badge className="absolute top-0 left-1/2 h-8 -translate-x-1/2 -translate-y-1/2 gap-1.5 px-4 text-xs shadow-md shadow-primary/15">
          <Star aria-hidden="true" /> Recommended
        </Badge>
      )}
      <CardHeader className="gap-0 px-0">
        <h3
          id={`plan-${plan.id}`}
          className={cn(
            "font-heading text-xl font-bold uppercase tracking-tight",
            plan.recommended && "text-primary dark:text-foreground",
          )}
        >
          {plan.name}
        </h3>
        <p className="mt-2 whitespace-nowrap font-heading text-[2.75rem] font-bold leading-none tracking-[-0.05em] tabular-nums sm:text-4xl">
          {formatPlanPrice(plan.price)}
        </p>
        <p className="mt-2 text-xs leading-5 text-muted-foreground lg:min-h-18">
          {plan.description}
        </p>
      </CardHeader>
      <CardContent className=" border-t border-border px-0 pt-2">
        <ul aria-label={`${plan.name} key features`}>
          {plan.featured.map((id) => (
            <Feature
              key={id}
              id={id}
              status={plan.features[id]}
              highlighted={plan.recommended}
            />
          ))}
        </ul>
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleContent
            className="home-collapsible"
            id={`${plan.id}-all-features`}
          >
            <ul
              className="pt-1"
              aria-label={`${plan.name} additional features`}
            >
              {remaining.map((id) => (
                <Feature
                  key={id}
                  id={id}
                  status={plan.features[id]}
                  highlighted={plan.recommended}
                />
              ))}
            </ul>
          </CollapsibleContent>
          <CollapsibleTrigger
            className="mt-3 flex min-h-11 w-full cursor-pointer items-center gap-2 rounded-md text-sm font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary dark:text-foreground"
            aria-label={`${open ? "Show fewer features" : "View all features"} for ${plan.name}`}
          >
            {open ? "Show fewer features" : "View all features"}
            {!open && <span aria-hidden="true">(+{remaining.length})</span>}
            <ChevronDown
              className={cn(
                "size-4 transition-transform duration-300 motion-reduce:transition-none",
                open && "rotate-180",
              )}
              aria-hidden="true"
            />
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
      <CardFooter className="mt-7 px-0">
        <ButtonLink
          href={plan.href}
          aria-label={`Subscribe Now to ${plan.name}`}
          variant={plan.recommended ? "default" : "outline"}
          className={cn(
            "h-14 w-full rounded-xl border-2 border-primary px-4 text-base font-semibold",
            plan.recommended
              ? "shadow-md shadow-primary/15"
              : "text-primary hover:bg-primary/5 hover:text-primary dark:text-foreground dark:hover:text-foreground",
          )}
        >
          Subscribe Now
        </ButtonLink>
      </CardFooter>
    </Card>
  );
}
