import type { Metadata } from "next";
import Link from "next/link";
import { ExpandableSection } from "@/components/expandable-section";
import { CTABanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Property Insurance Litigation",
  description:
    "Property insurance litigation attorneys in Miami, Florida. Hurricane damage, plumbing/water loss, fire, flood, and theft claims. Free consultation.",
};

const subNavLinks = [
  { href: "#hurricane-wind", label: "Hurricane/Wind Damage" },
  { href: "#plumbing-water", label: "Plumbing/Water Loss" },
  { href: "#fire-damage", label: "Fire Damage" },
  { href: "#flood-damage", label: "Flood Damage" },
  { href: "#theft", label: "Theft" },
];

export default function PropertyInsurancePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-background py-20 md:py-28 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.55_0.22_25/0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground mb-6">
            Property Insurance{" "}
            <span className="text-primary">Litigation</span>
          </h1>
          <blockquote className="text-lg md:text-xl text-muted-foreground italic max-w-2xl mx-auto">
            &ldquo;If life were predictable it would cease to be life, and be without
            flavor.&rdquo;
            <cite className="block mt-2 text-sm not-italic text-primary font-semibold">
              &mdash; Eleanor Roosevelt
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Sub-navigation */}
      <nav className="sticky top-16 z-40 border-y border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="mx-auto max-w-7xl px-4 overflow-x-auto">
          <ul className="flex items-center gap-1 py-2 min-w-max">
            {subNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block rounded-md px-3 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary hover:bg-primary/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* What is Property Insurance Litigation? */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-6">
            What is{" "}
            <span className="text-primary">Property Insurance Litigation</span>?
          </h2>
          <ExpandableSection
            title="Understanding Property Insurance Claims"
            summary="Property insurance litigation involves claims against your insurance carrier to cover losses you have sustained. Your carrier may be liable under various circumstances when damage to your property occurs from fire, smoke, rain, hurricanes, or wind."
          >
            <p>
              When your property sustains damage, your insurance carrier has a contractual
              obligation to cover the losses outlined in your policy. However, carriers
              frequently deny claims outright or dispute the scope and price of necessary
              repairs. Understanding the difference between these two situations is critical.
            </p>
            <p>
              A <strong className="text-foreground">denied claim</strong> means the carrier
              has determined that your loss is not covered under your policy. This may be due
              to policy exclusions, lapsed coverage, or the carrier&rsquo;s interpretation
              of the cause of damage. A{" "}
              <strong className="text-foreground">scope/price dispute</strong> means the
              carrier acknowledges coverage but disagrees about the extent of damage or the
              cost of repairs.
            </p>
            <p>
              As a policyholder, you have duties known as{" "}
              <strong className="text-foreground">conditions precedent</strong> that must be
              met before filing a claim. These include timely reporting of the loss,
              cooperating with the carrier&rsquo;s investigation, providing documentation
              of damages, and protecting the property from further damage. Failure to meet
              these conditions can jeopardize your claim.
            </p>
            <p>
              A significant advantage for Florida policyholders is that Florida statute
              allows for the recovery of attorney fees directly from the carrier when you
              prevail in litigation. This means that pursuing a legitimate claim through
              legal channels often costs you nothing out of pocket &mdash; the carrier
              bears the cost of your legal representation.
            </p>
          </ExpandableSection>
        </div>
      </section>

      {/* Hurricane/Wind Damage */}
      <section id="hurricane-wind" className="bg-card py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-6">
            Hurricane/Wind <span className="text-primary">Damage</span>
          </h2>
          <ExpandableSection
            title="Hurricane & Wind Damage Claims"
            summary="Damage from hurricanes is often not readily apparent. It can take months, even years before you notice the effects. Water staining may appear weeks or months later as wind damage to the roof allows elements to enter."
          >
            <p>
              Hurricane and wind damage claims are among the most common property insurance
              disputes in Florida. The challenge lies in the fact that damage may not be
              immediately visible. Wind can lift shingles, crack tiles, or compromise the
              seal of your roof without any obvious external signs. Over time, the
              compromised areas allow water intrusion, leading to staining, mold growth,
              and structural damage that may not manifest for months or years.
            </p>
            <p>
              Insurance carriers frequently argue that damage is the result of normal
              &ldquo;wear and tear&rdquo; rather than a covered wind event. They may also
              raise the concept of an &ldquo;opening&rdquo; requirement &mdash; claiming
              that wind must create a direct opening in the roof or exterior wall before
              interior water damage is covered. Understanding your policy&rsquo;s language
              regarding these provisions is essential.
            </p>
            <p>
              Our firm has extensive experience handling hurricane and wind damage claims.
              We work with licensed public adjusters, roofing contractors, and engineers to
              document the full extent of damage and demonstrate that it resulted from a
              covered event, not pre-existing deterioration.
            </p>
          </ExpandableSection>
        </div>
      </section>

      {/* Plumbing/Water Loss */}
      <section id="plumbing-water" className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-6">
            Plumbing/Water <span className="text-primary">Loss</span>
          </h2>
          <ExpandableSection
            title="Water Damage & Plumbing Claims"
            summary="Water damage due to plumbing issues is very common. Often a minor leak results in extensive hidden property damage — behind cabinets, in shower pans, baseboards. Most property owners don't know they can make a claim."
          >
            <p>
              Water damage from plumbing failures is one of the most underreported types of
              property insurance claims. A slow leak under a kitchen sink, inside a wall, or
              beneath a shower pan can cause extensive damage that remains hidden for months.
              By the time it becomes visible, the damage can extend far beyond the point of
              origin.
            </p>
            <p>
              Common areas where hidden water damage occurs include behind kitchen and
              bathroom cabinets, inside walls, beneath flooring, along baseboards, and
              within shower pans. Prolonged moisture exposure often leads to mold growth,
              which presents both health hazards and additional remediation costs.
            </p>
            <p>
              Insurance carriers employ various tactics to minimize water damage claims.
              They may argue that the damage is the result of long-term maintenance neglect
              rather than a sudden and accidental event. They may also attempt to limit the
              scope of repairs to the immediately visible damage while ignoring the fact
              that water travels &mdash; damage to a kitchen floor, for example, may extend
              under cabinets, behind walls, and into adjacent rooms.
            </p>
            <p>
              Our firm understands these tactics and works to ensure that the full extent
              of your damage is documented and compensated. We engage moisture detection
              specialists and remediation experts to uncover all damage, including what the
              carrier&rsquo;s adjuster may have overlooked.
            </p>
          </ExpandableSection>
        </div>
      </section>

      {/* Fire Damage */}
      <section id="fire-damage" className="bg-card py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-6">
            Fire <span className="text-primary">Damage</span>
          </h2>
          <ExpandableSection
            title="Fire Damage Claims"
            summary="Unlike water damage, fire damage is often readily apparent. However, damages may be deeper than observable — smoke damage can contaminate insulation and coat the entire property with residue."
          >
            <p>
              While the visible effects of fire damage &mdash; charred walls, melted
              fixtures, destroyed belongings &mdash; are immediately apparent, the full
              extent of fire damage often goes much deeper than what meets the eye. Smoke
              damage is particularly insidious: it can permeate insulation, ductwork,
              clothing, furniture, and virtually every surface within the property, leaving
              toxic residue that is difficult and expensive to remediate.
            </p>
            <p>
              Insurance carriers frequently undervalue fire damage claims by focusing only
              on the obviously damaged areas while failing to account for smoke
              contamination throughout the property. Their adjusters may use depreciation
              schedules that significantly reduce the value of your belongings, or they may
              miscalculate the cost of reconstruction by using outdated pricing or failing
              to account for code upgrade requirements.
            </p>
            <p>
              Our firm fights to ensure that every aspect of your fire damage &mdash;
              structural, contents, smoke contamination, additional living expenses, and
              code upgrades &mdash; is fully accounted for and compensated at fair market
              value.
            </p>
          </ExpandableSection>
        </div>
      </section>

      {/* Flood Damage */}
      <section id="flood-damage" className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-6">
            Flood <span className="text-primary">Damage</span>
          </h2>
          <ExpandableSection
            title="Flood Damage Claims"
            summary="Flooding can be catastrophic. If flooding reaches the interior, your property may suffer hundreds of thousands in damage. Most property insurance policies exclude floods and require a separate policy."
          >
            <p>
              Flood damage is unique in the property insurance landscape because most
              standard homeowners and commercial property policies specifically exclude
              flood coverage. A separate flood insurance policy, typically obtained through
              the National Flood Insurance Program (NFIP) or a private flood insurer, is
              required.
            </p>
            <p>
              When flooding reaches the interior of your property, the damage can be
              catastrophic. Flooring, drywall, cabinetry, electrical systems, appliances,
              and personal belongings can all be destroyed. Proper remediation requires
              significant work &mdash; including water extraction, demolition of affected
              materials, antimicrobial treatment, drying, and reconstruction.
            </p>
            <p>
              Insurance carriers frequently underpay flood claims by overlooking items that
              need replacement, undervaluing the cost of remediation, or failing to account
              for the full scope of damage. They may also raise conditions precedent issues
              &mdash; arguing that you failed to report the claim promptly, did not mitigate
              further damage, or did not provide adequate documentation.
            </p>
            <p>
              Our firm advocates aggressively for policyholders to ensure they receive the
              full value of their flood damage claim. We work with remediation specialists
              and public adjusters to document every aspect of the loss.
            </p>
          </ExpandableSection>
        </div>
      </section>

      {/* Theft */}
      <section id="theft" className="bg-card py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-6">
            <span className="text-primary">Theft</span> Claims
          </h2>
          <ExpandableSection
            title="Theft & Stolen Property Claims"
            summary="Most property insurance policies cover theft of contents — not limited to businesses. Your homeowners or renters insurance may cover theft of laptops, televisions, furniture, and more."
          >
            <p>
              Many property owners are surprised to learn that their homeowners or renters
              insurance policy covers theft of personal property. Laptops, televisions,
              jewelry, furniture, tools, and other personal belongings may all be covered
              under the contents portion of your policy.
            </p>
            <p>
              One of the biggest challenges in theft claims is proving ownership and value
              when you may not have receipts for every stolen item. While receipts are
              helpful, they are not the only way to establish proof. Credit card statements,
              photographs, product registrations, serial numbers, and even testimony from
              family members can help document what was stolen and its value.
            </p>
            <p>
              Insurance carriers often employ denial tactics in theft claims. They may
              question the legitimacy of the claim, dispute the value of stolen items, or
              offer only partial payment that doesn&rsquo;t reflect the true replacement
              cost. Some carriers will pay actual cash value (which accounts for
              depreciation) rather than replacement cost, even when your policy provides for
              replacement cost coverage.
            </p>
            <p>
              Our firm helps policyholders navigate theft claims by documenting losses
              thoroughly, challenging unfair valuations, and ensuring that carriers honor
              the full terms of the policy.
            </p>
          </ExpandableSection>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
}
