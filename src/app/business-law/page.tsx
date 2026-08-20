import type { Metadata } from "next";
import { Scale, Target, Lightbulb } from "lucide-react";
import { ExpandableSection } from "@/components/expandable-section";
import { CTABanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Business & Contract Law",
  description:
    "Business and contract law representation in Miami, Florida. Entity formation, contract disputes, commercial litigation. Free consultation.",
};

export default function BusinessLawPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-background py-20 md:py-28 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.55_0.22_25/0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground mb-6">
            Business &amp; Contract{" "}
            <span className="text-primary">Law</span>
          </h1>
          <blockquote className="text-lg md:text-xl text-muted-foreground italic max-w-2xl mx-auto">
            &ldquo;Genius is 1% talent 99% Hard work.&rdquo;
            <cite className="block mt-2 text-sm not-italic text-primary font-semibold">
              &mdash; Albert Einstein
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Contract Law */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-6">
            Contract <span className="text-primary">Law</span>
          </h2>
          <ExpandableSection
            title="Understanding Contract Law"
            summary="Contracts are governed by common law, statutes, the Uniform Commercial Code, and the Statute of Frauds. Which body of law applies depends on the facts — whether the contract was oral or written, for goods or services."
          >
            <p>
              Contract law is far more nuanced than many people realize. The governing body
              of law depends on the nature of the contract itself. Contracts for the sale of
              goods are primarily governed by the Uniform Commercial Code (UCC), while
              contracts for services are governed by common law. The Statute of Frauds
              requires certain types of contracts to be in writing to be enforceable.
            </p>
            <p>
              The complexity increases when a single contract involves both goods and
              services. Consider a carpet company that contracts to both supply carpet
              (goods) and install it (services). Which body of law governs? The answer
              depends on the predominant purpose of the contract &mdash; whether the
              primary objective was the purchase of the carpet itself or the installation
              services. This distinction can dramatically affect the rights and remedies
              available to both parties.
            </p>
            <p>
              Whether your contract dispute involves a breach of written agreement, an oral
              contract, a UCC matter, or a question of enforceability under the Statute of
              Frauds, our firm has the expertise to analyze the facts, determine the
              applicable law, and pursue the most effective strategy for resolution.
            </p>
          </ExpandableSection>
        </div>
      </section>

      {/* Business Law */}
      <section className="bg-card py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-6">
            Business <span className="text-primary">Law</span>
          </h2>
          <ExpandableSection
            title="Entity Formation & Business Protection"
            summary="Business law focuses on entity formation and protection for members or shareholders. One key reason for forming a company is to protect yourself from personal liability. The state will consider your company a sole proprietorship by default if you don't file."
          >
            <p>
              If you operate a business without filing the appropriate documents with the
              state, you are by default operating as a sole proprietorship. This means there
              is no legal distinction between you and your business &mdash; your personal
              assets (home, savings, vehicles) are fully exposed to any liabilities or
              debts incurred by the business.
            </p>
            <p>
              Forming a legal entity such as a Limited Liability Company (LLC), corporation,
              or partnership creates a legal barrier between your personal assets and the
              obligations of the business. This{" "}
              <strong className="text-foreground">limited liability protection</strong> is
              one of the most important reasons to properly form and maintain a business
              entity.
            </p>
            <p>
              However, simply filing formation documents is not enough. You must also
              maintain the corporate formalities required by law &mdash; maintaining
              separate bank accounts, holding required meetings, keeping proper records, and
              ensuring the entity remains in good standing with the state. Failure to do so
              can result in &ldquo;piercing the corporate veil,&rdquo; which removes the
              liability protection and exposes your personal assets.
            </p>
            <p>
              Our firm assists with entity formation, operating agreements, corporate
              governance, and ongoing compliance to ensure your business and personal assets
              remain protected.
            </p>
          </ExpandableSection>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-8">
            Our <span className="text-primary">Approach</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-3 mb-10">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
                <Target className="size-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                1. Know Your Goal
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We start by understanding the specific resolution the client is looking
                for. Every case begins with clarity on what success looks like.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
                <Scale className="size-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                2. Assess Viability
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We determine viability based on the facts and circumstances of your case.
                Honest assessment upfront saves time, money, and frustration.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
                <Lightbulb className="size-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                3. Cost-Effective Path
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We advise on the most cost-effective paths to achieve your objectives,
                balancing aggressive advocacy with practical business considerations.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              &ldquo;At our office, it is our priority to steer a client in the right
              direction, even if that translates to our firm not gaining a new client. We
              believe in providing honest counsel above all else &mdash; the right advice
              today builds the trust that defines lasting attorney-client
              relationships.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
}
