import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Results",
  description:
    "See the case results and recoveries achieved by My Trial Lawyer, PLLC for clients throughout Florida in personal injury, insurance, and accident cases.",
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

const caseResults = [
  {
    opponent: "Progressive Insurance Corporation",
    amount: "$100,000",
    description:
      "Recovered policy limits for client involved in motor vehicle accident after filing suit. Insurance carrier initially denied our client’s claim.",
  },
  {
    opponent: "Uber Ride Sharing",
    amount: "$225,000",
    description:
      "Recovered $225,000 for client involved in motor vehicle accident after filing suit. Insurance carrier initially denied our client’s pre-suit demand for $225,000.",
  },
  {
    opponent: "Progressive Insurance Corporation",
    amount: "$100,000",
    description:
      "Recovered Policy Limits for client involved in Motorcycle Accident upon pre-suit demand.",
  },
  {
    opponent: "State Farm Insurance Company",
    amount: "$10,000",
    description:
      "Recovered Policy Limits upon demand from client who was involved in a motor vehicle collision.",
  },
  {
    opponent: "Government Employee Insurance Corporation (GEICO)",
    amount: "$10,000",
    description:
      "Recovered Policy Limits upon demand from client who was involved in a motor vehicle collision.",
  },
];

export default function ResultsPage() {
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

      {/* Hero */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground mb-6">
            Recent <span className="text-primary">Results</span>
          </h1>
          <blockquote className="border-l-4 border-primary pl-6 text-left max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
              &ldquo;I don&apos;t stop when I am tired, I stop when I am
              done.&rdquo;
            </p>
            <footer className="mt-3 text-sm font-bold text-primary uppercase tracking-wider">
              &mdash; David Goggins
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Fighting for Our Clients */}
      <section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground text-center mb-4">
            Fighting for Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 md:mb-16 text-lg">
            We aggressively pursue every case to recover the maximum
            compensation our clients deserve.
          </p>

          {/* Case Result Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {caseResults.map((result, index) => (
              <div
                key={index}
                className="group rounded-lg border border-border bg-background p-6 md:p-8 transition-colors hover:border-primary/40"
              >
                <div className="flex flex-col gap-4">
                  <p className="text-4xl md:text-5xl font-black text-primary tracking-tight">
                    {result.amount}
                  </p>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">
                      {result.opponent}
                    </p>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-center text-xs text-muted-foreground/60 mt-10 max-w-2xl mx-auto">
            *Past results are not a guarantee of future outcomes. Every case is
            different, and results will vary based on the specific facts and
            circumstances of each case.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
