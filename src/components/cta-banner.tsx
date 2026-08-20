import { Phone, Mail } from "lucide-react";

interface CTABannerProps {
  heading?: string;
  subheading?: string;
}

export function CTABanner({
  heading = "Ready to Fight for Your Rights?",
  subheading = "Email, call, or text us today. Free phone and virtual consultations available. We fight for clients throughout Florida.",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-20">
      {/* Subtle diagonal accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        aria-hidden="true"
      >
        <div className="absolute -right-20 -top-20 size-80 rotate-45 rounded-3xl bg-white/20" />
        <div className="absolute -bottom-16 -left-16 size-64 rotate-12 rounded-3xl bg-black/20" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-black uppercase tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
          {heading}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
          {subheading}
        </p>

        {/* Contact info */}
        <div className="mb-8 flex flex-col items-center justify-center gap-4 text-primary-foreground/80 sm:flex-row sm:gap-8">
          <a
            href="tel:7868551000"
            className="flex items-center gap-2 text-lg font-semibold transition-colors hover:text-white"
          >
            <Phone className="size-5" />
            (786) 855-1000
          </a>
          <a
            href="mailto:service@mytriallawyer.com"
            className="flex items-center gap-2 text-lg font-semibold transition-colors hover:text-white"
          >
            <Mail className="size-5" />
            service@mytriallawyer.com
          </a>
        </div>

        {/* CTA button */}
        <a
          href="/contact"
          className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-lg font-black uppercase tracking-wide text-primary transition-colors hover:bg-white/90"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
}
