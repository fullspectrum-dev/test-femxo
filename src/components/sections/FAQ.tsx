"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-muted/30">
      <Container size="narrow">
        <SectionHeading
          eyebrow="FAQ"
          title="Aapke sawaal, hamare jawab"
          subtitle="Everything you need to know about FEMXO ERP."
        />

        <Accordion type="single" className="mt-8 w-full sm:mt-12">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="gap-3 py-5 text-left text-sm font-semibold hover:text-brand-600 sm:py-6 sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}