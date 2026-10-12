import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-hero py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(251,191,36,0.5) 0%, transparent 60%)",
        }}
      />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to grow your business?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-brand-100 sm:text-lg">
          Join 10,000+ dealers who trust FEMXO ERP. Start free — no credit card
          required.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            asChild
            className="w-full bg-white text-brand-700 shadow-xl hover:bg-brand-50 sm:w-auto"
          >
            <Link href="#pricing">
              Start Free Trial
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full border-white/30 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:text-white sm:w-auto"
          >
            <Link href="#faq">Read FAQs</Link>
          </Button>
        </div>
        <p className="mt-6 text-xs text-brand-200">
          ✓ 14-day free trial · ✓ No credit card · ✓ Cancel anytime
        </p>
      </Container>
    </section>
  );
}