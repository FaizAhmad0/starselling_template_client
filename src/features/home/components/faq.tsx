"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "../data/content";

export function HomeFaq() {
  return (
    <Accordion
      className="rounded-none border-0 border-t border-border"
      aria-label="Frequently asked questions"
    >
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          value={faq.id}
          className="border-b border-border data-open:bg-transparent"
        >
          <AccordionTrigger className="min-h-20 items-center px-1 py-6 text-base font-medium leading-6 hover:no-underline hover:text-primary focus-visible:z-10 focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-primary">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pr-9 pb-6 text-sm leading-7 text-muted-foreground">
            <p>{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
