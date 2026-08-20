import type { Metadata } from "next";
import { GraduationCap, Briefcase, Scale, Building, Gavel } from "lucide-react";
import { CTABanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Meet Your Lawyer",
  description:
    "Meet Devin A. Locay, Esq. — experienced Miami trial lawyer specializing in personal injury, property insurance litigation, and business law.",
};

const values = [
  "PROFESSIONALISM",
  "DEDICATION",
  "COMMITMENT",
  "PASSION",
  "PURSUIT",
  "FOCUS",
  "HARDWORK",
];

const experienceAreas = [
  {
    icon: Scale,
    label: "Personal Injury Litigation",
  },
  {
    icon: Building,
    label: "Property & Construction Litigation",
  },
  {
    icon: Briefcase,
    label: "Business & Contract Law",
  },
  {
    icon: Gavel,
    label: "Trial Advocacy & Courtroom Litigation",
  },
];

export default function MeetYourLawyerPage() {
  return (
    <>
      {/* Values Banner */}
      <section className="bg-primary py-4">
        <div className="mx-auto max-w-7xl px-4 overflow-x-auto">
          <p className="text-center text-xs md:text-sm font-black tracking-[0.2em] text-primary-foreground whitespace-nowrap">
            {values.join(" - ")}
          </p>
        </div>
      </section>

      {/* Hero Heading */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground mb-6">
            Meet the <span className="text-primary">Lawyer</span>
          </h1>
          <blockquote className="border-l-4 border-primary pl-6 text-left max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
              &ldquo;Perfection is not attainable, but if we chase perfection we
              will catch excellence.&rdquo;
            </p>
            <footer className="mt-3 text-sm font-bold text-primary uppercase tracking-wider">
              &mdash; Vince Lombardi
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Attorney Profile */}
      <section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Photo + Quick Info Column */}
            <div className="lg:col-span-1">
              {/* Photo Placeholder */}
              <div className="aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 rounded-lg bg-muted/30 border border-border flex items-center justify-center">
                <span className="text-6xl md:text-7xl font-black text-primary/40 select-none">
                  DL
                </span>
              </div>

              {/* Name */}
              <div className="mt-6 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-black text-foreground">
                  Devin A. Locay
                </h2>
                <p className="text-primary font-bold text-lg mt-1">Esq.</p>
              </div>

              {/* Education */}
              <div className="mt-8 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <GraduationCap className="size-4 text-primary" />
                  Education
                </h3>
                <ul className="space-y-3">
                  <li className="rounded-lg border border-border bg-background p-4">
                    <p className="font-bold text-foreground text-sm">
                      Florida Atlantic University
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                      B.A. Political Science &mdash; Boca Raton, FL
                    </p>
                  </li>
                  <li className="rounded-lg border border-border bg-background p-4">
                    <p className="font-bold text-foreground text-sm">
                      St. Thomas University School of Law
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                      Juris Doctor &mdash; Miami Gardens, FL
                    </p>
                  </li>
                </ul>
              </div>

              {/* Key Experience Areas */}
              <div className="mt-8 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Key Practice Areas
                </h3>
                <ul className="space-y-2">
                  {experienceAreas.map((area) => (
                    <li
                      key={area.label}
                      className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3"
                    >
                      <area.icon className="size-5 text-primary shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {area.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bio Column */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground">
                About <span className="text-primary">Devin</span>
              </h3>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
                <p>
                  Mr. Locay was born in Ft. Lauderdale, Florida as a second
                  generation Cuban American, the product of an immigrant family
                  who instilled values of hard work, dedication, and passion.
                </p>
                <p>
                  Prior to practicing as an attorney, Mr. Locay started his early
                  life in construction purchasing, drafting estimates and bids for
                  a prominent general contractor on numerous multimillion-dollar
                  residential and commercial projects throughout Palm Beach,
                  Broward, and Dade County. Years into that position he gained
                  employment with one of the largest suppliers of construction
                  materials on the planet, performing residential and commercial
                  site inspections, drafting remediation estimates, bids,
                  contracts, and overseeing remediation projects for the class
                  action suit involving defective Chinese drywall that was
                  installed in tens of thousands of homes and offices throughout
                  the state of Florida.
                </p>
                <p>
                  It was in these early years that Mr. Locay gained valuable
                  knowledge and experience in construction and property insurance
                  litigation. Mr. Locay understands how to construct homes and
                  buildings from the ground up and the processes involved, the
                  complications with contract disputes, work site injuries and
                  the litigation involved.
                </p>
                <p>
                  Mr. Locay always had a legal education in mind, graduating from
                  Florida Atlantic University in Boca Raton with a Bachelors
                  degree in Political Science. He attended St. Thomas University
                  School of Law in 2013 and quickly began to excel in all his
                  injury, business, and contract courses. Mr. Locay then sought
                  more experience in a courtroom setting while studying law. He
                  successfully competed and joined St. Thomas University&apos;s
                  award winning Trial Team. Over the following two years he
                  participated in numerous mock trials with experienced judges
                  and legal advocates winning numerous awards in advocacy in a
                  trial setting.
                </p>
                <p>
                  While attending classes, studying law and preparing for the
                  Trial Team, Mr. Locay gained employment as a law clerk with a
                  prominent litigation firm focusing on Personal Injury, Property
                  and Construction Litigation and Business Law. Over the next few
                  years he thrived in that environment, quickly exceeding
                  expectations and becoming a valuable asset to the firm, and
                  gaining employment as an associate attorney. After passing the
                  state bar exam, Mr. Locay has focused his attention litigating
                  personal injury and property damage claims.
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg border border-border bg-background p-6">
                  <p className="text-3xl font-black text-primary">10+</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Years of Legal &amp; Industry Experience
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-background p-6">
                  <p className="text-3xl font-black text-primary">FL</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Licensed Throughout Florida
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-background p-6">
                  <p className="text-3xl font-black text-primary">Trial</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Award-Winning Trial Team Member
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-background p-6">
                  <p className="text-3xl font-black text-primary">Free</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Consultations Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
