import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export function CTABanner() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4 uppercase tracking-tight">
          Ready to Fight for Your Rights?
        </h2>
        <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Email, call, or text us. Free consultations available. We work
          throughout Florida.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="tel:7868551000"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-lg text-lg hover:bg-white/90 transition-colors"
          >
            <Phone className="size-5" />
            (786) 855-1000
          </Link>
          <Link
            href="mailto:service@mytriallawyer.com"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white/10 transition-colors"
          >
            <Mail className="size-5" />
            service@mytriallawyer.com
          </Link>
        </div>
      </div>
    </section>
  );
}
