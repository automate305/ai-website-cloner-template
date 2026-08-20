import Link from "next/link";
import {
  Car,
  ShieldAlert,
  PackageX,
  PersonStanding,
  Home,
  HardHat,
  CloudLightning,
  Droplets,
  FileText,
  Dog,
  Phone,
  Mail,
  MapPin,
  Printer,
  MessageSquare,
  ArrowRight,
  Scale,
  Users,
  Target,
} from "lucide-react";
import { CTABanner } from "@/components/cta-banner";

const practiceAreas = [
  { icon: Car, title: "Motor Vehicle Collisions" },
  { icon: ShieldAlert, title: "Insurance Litigation" },
  { icon: PackageX, title: "Product Liability" },
  { icon: PersonStanding, title: "Slip & Fall / Premises Liability" },
  { icon: Home, title: "Real Estate Closings" },
  { icon: HardHat, title: "Work Place Accidents" },
  { icon: CloudLightning, title: "Weather & Hurricane Related Property Damage" },
  { icon: Droplets, title: "Water/Fire/Flood Property Damage" },
  { icon: FileText, title: "Contractual Disputes" },
  { icon: Dog, title: "Dog Bites" },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ───────────────── HERO ───────────────── */}
      <section className="relative isolate overflow-hidden bg-brand-blue">
        {/* Red gradient accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, oklch(0.52 0.235 25 / 0.35), transparent 70%)",
          }}
        />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center sm:py-36 lg:py-44">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            My Trial Lawyer, PLLC
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-blue-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Innovative Legal Help
          </h1>
          <p className="mt-4 text-base text-brand-blue-foreground/70 sm:text-lg">
            A Professional Limited Liability Company
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-8 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Free Consultation
              <ArrowRight className="size-5" />
            </Link>
            <a
              href="tel:+17868551000"
              className="inline-flex h-12 items-center gap-2 rounded-lg border-2 border-brand-blue-foreground/30 px-8 text-base font-bold text-brand-blue-foreground transition-colors hover:bg-brand-blue-foreground/10"
            >
              <Phone className="size-5" />
              (786) 855-1000
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────── WHY CHOOSE US ───────────────── */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Why Choose Our Firm?
          </h2>
          <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-primary" />
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            We believe that being well informed is an integral part of making
            important legal decisions. Our office prides itself on transparency,
            confidentiality, and the relentless pursuit of our clients&apos; best
            interests.
          </p>
        </div>
      </section>

      {/* ───────────────── PRACTICE AREAS ───────────────── */}
      <section className="bg-secondary/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Areas of Practice
            </h2>
            <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-primary" />
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {practiceAreas.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-brand-blue-light text-brand-blue transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-lg font-bold leading-snug text-foreground">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── THE FIRM ───────────────── */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1px_1fr]">
            {/* Left column */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Scale className="size-7 text-primary" />
                <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  The Firm
                </h2>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                While many firms in today&apos;s legal industry can be labeled
                &ldquo;mills,&rdquo; where the demeanor of the firm is geared
                toward volume rather than quality, our office utilizes a different
                and more personal approach. Our legal team consists of dedicated
                professionals to make sure legal claims are heard, understood, and
                remedied in order to make our clients whole again. This firm prides
                itself on quality work as a foundation to all of our legal
                services. In order to effectively advocate on your behalf, we
                aggressively pursue your claim using innovative strategies and
                critical thinking.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden bg-border lg:block lg:self-stretch" />

            {/* Right column — Mission */}
            <div className="flex flex-col justify-center">
              <div className="rounded-xl border border-brand-blue/20 bg-brand-blue-light p-8">
                <Users className="mb-4 size-7 text-brand-blue" />
                <p className="text-xl font-semibold italic leading-relaxed text-brand-blue sm:text-2xl">
                  &ldquo;Our mission is to take a genuine interest in our clients,
                  understand their objectives, and exceed them.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── OUR FOCUS ───────────────── */}
      <section className="bg-secondary/60 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6 flex items-center gap-3">
            <Target className="size-7 text-primary" />
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Our Focus
            </h2>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              We focus our legal efforts on Personal Injury cases including
              automobile accidents, slip and falls, dog bites, wrongful death,
              product liability, work place accidents, and any negligence related
              injuries. In addition to negligence claims, we place a strong focus
              on Property Damage claims such as sudden water loss from plumbing
              lines, fire, flood, hurricane, and weather related damage. We also
              take a personal interest in Contract Litigation.
            </p>

            <div className="rounded-xl border-l-4 border-primary bg-card p-6 shadow-sm sm:p-8">
              <p className="text-lg font-semibold leading-relaxed text-foreground sm:text-xl">
                When we take your case, our first goal is to understand the
                objectives that you as our client are seeking. We understand that
                no two cases are alike, and most importantly, no two clients are
                alike. Finding the remedy that is most important to you, is the
                most important objective to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── CONTACT / CTA ───────────────── */}
      <section className="relative isolate overflow-hidden bg-brand-blue py-20 sm:py-24">
        {/* Red gradient accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 30% 60%, oklch(0.52 0.235 25 / 0.25), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-blue-foreground sm:text-4xl">
              Get in Touch
            </h2>
            <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-primary" />
            <p className="mt-6 text-lg font-semibold text-primary sm:text-xl">
              FREE Phone or Virtual Consultations!
            </p>
            <p className="mt-2 text-base text-brand-blue-foreground/70 sm:text-lg">
              Contact us or send us a TEXT Today!
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Address */}
            <div className="flex flex-col items-center rounded-xl border border-brand-blue-foreground/15 bg-brand-blue-foreground/5 p-6 text-center backdrop-blur-sm">
              <MapPin className="mb-3 size-7 text-primary" />
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue-foreground/60">
                Address
              </p>
              <p className="mt-2 text-base leading-relaxed text-brand-blue-foreground">
                690 SW 1st Ct
                <br />
                Miami, FL 33130
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center rounded-xl border border-brand-blue-foreground/15 bg-brand-blue-foreground/5 p-6 text-center backdrop-blur-sm">
              <Phone className="mb-3 size-7 text-primary" />
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue-foreground/60">
                Phone
              </p>
              <a
                href="tel:+17868551000"
                className="mt-2 text-base font-bold text-brand-blue-foreground transition-colors hover:text-primary"
              >
                (786) 855-1000
              </a>
            </div>

            {/* Fax */}
            <div className="flex flex-col items-center rounded-xl border border-brand-blue-foreground/15 bg-brand-blue-foreground/5 p-6 text-center backdrop-blur-sm">
              <Printer className="mb-3 size-7 text-primary" />
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue-foreground/60">
                Fax
              </p>
              <p className="mt-2 text-base text-brand-blue-foreground">(305) 675-3356</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center rounded-xl border border-brand-blue-foreground/15 bg-brand-blue-foreground/5 p-6 text-center backdrop-blur-sm">
              <Mail className="mb-3 size-7 text-primary" />
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue-foreground/60">
                Email
              </p>
              <a
                href="mailto:service@mytriallawyer.com"
                className="mt-2 text-base font-bold text-brand-blue-foreground transition-colors hover:text-primary"
              >
                service@mytriallawyer.com
              </a>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-8 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              <MessageSquare className="size-5" />
              Contact Us Now
            </Link>
            <a
              href="tel:+17868551000"
              className="inline-flex h-12 items-center gap-2 rounded-lg border-2 border-brand-blue-foreground/30 px-8 text-base font-bold text-brand-blue-foreground transition-colors hover:bg-brand-blue-foreground/10"
            >
              <Phone className="size-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────── CTA BANNER ───────────────── */}
      <CTABanner />
    </>
  );
}
