"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleHelp,
  Layers3,
  LayoutGrid,
  Smartphone,
  X,
} from "lucide-react";
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
const planIcons = { basic: LayoutGrid, premium: Layers3, advanced: Smartphone };

function Feature({ id, status }: { id: FeatureId; status: FeatureStatus }) {
  const Icon = statusIcons[status];
  return (
    <li
      className="flex min-h-14 items-start gap-3 py-2 lg:min-h-19"
      data-feature={id}
      data-status={status}
    >
      <span
        className={cn(
          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
          status === "included"
            ? "bg-primary/10 text-primary dark:text-foreground"
            : "bg-muted text-muted-foreground",
        )}
      >
        <Icon className="size-3" aria-hidden="true" />
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
  const Icon = planIcons[plan.id];
  const remaining = featureIds.filter((id) => !plan.featured.includes(id));

  return (
    <Card
      className={cn(
        "relative gap-0 overflow-visible rounded-2xl p-6 ring-1 ring-border sm:p-7",
        plan.recommended && "bg-primary/[0.025] ring-2 ring-primary",
      )}
    >
      <CardHeader className="gap-0 px-0">
        <div className="mb-6 flex h-10 items-center justify-between gap-2">
          <span
            className={cn(
              "flex size-10 items-center justify-center rounded-xl border border-border bg-background",
              plan.recommended &&
                "border-primary/20 bg-primary/10 text-primary dark:text-foreground",
            )}
          >
            <Icon className="size-5" aria-hidden="true" />
          </span>
          {plan.recommended && (
            <Badge className="h-7 px-3 text-xs">Recommended</Badge>
          )}
        </div>
        <p className="mb-2 text-xs font-medium text-muted-foreground">
          {plan.eyebrow}
        </p>
        <h3
          id={`plan-${plan.id}`}
          className="font-heading text-2xl font-semibold tracking-tight"
        >
          {plan.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground lg:min-h-18">
          {plan.description}
        </p>
        <p className="mt-7 font-heading text-xl font-semibold tracking-tight">
          {plan.price}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          See the plan page for pricing and details.
        </p>
      </CardHeader>
      <CardContent className="mt-6 border-t border-border px-0 pt-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Plan at a glance
        </p>
        <ul aria-label={`${plan.name} key features`}>
          {plan.featured.map((id) => (
            <Feature key={id} id={id} status={plan.features[id]} />
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
                <Feature key={id} id={id} status={plan.features[id]} />
              ))}
            </ul>
          </CollapsibleContent>
          <CollapsibleTrigger
            className="mt-3 flex min-h-11 w-full cursor-pointer items-center justify-between gap-2 rounded-md text-sm font-medium text-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            aria-label={`${open ? "Show fewer features" : "View all features"} for ${plan.name}`}
          >
            {open ? "Show fewer features" : "View all features"}
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
      <CardFooter className="mt-6 px-0">
        <ButtonLink
          href={plan.href}
          aria-label={`Learn more about ${plan.name}`}
          variant={plan.recommended ? "default" : "outline"}
          className="h-12 w-full justify-between rounded-lg px-4 text-sm"
        >
          Learn More <ArrowUpRight className="size-4" aria-hidden="true" />
        </ButtonLink>
      </CardFooter>
    </Card>
  );
}
