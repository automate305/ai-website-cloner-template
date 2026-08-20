import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, AlertTriangle, Stethoscope, PhoneCall } from "lucide-react";
import { ExpandableSection } from "@/components/expandable-section";
import { CTABanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Personal Injury",
  description:
    "Aggressive personal injury representation in Miami, Florida. Auto accidents, ride sharing, slip & fall, dog bites, medical malpractice, and toxic torts. Free consultation.",
};

const subNavLinks = [
  { href: "#auto-accidents", label: "Auto/Motorcycle Accidents" },
  { href: "#ride-sharing", label: "Ride Sharing Accidents" },
  { href: "#slip-trip-fall", label: "Slip/Trip & Fall Accidents" },
  { href: "#dog-bites", label: "K9/Dog Bites" },
  { href: "#medical-malpractice", label: "Medical Malpractice" },
  { href: "#toxic-torts", label: "Toxic/Chemical Torts" },
];

export default function PersonalInjuryPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-background py-20 md:py-28 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.55_0.22_25/0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground mb-6">
            Personal{" "}
            <span className="text-primary">Injury</span>
          </h1>
          <blockquote className="text-lg md:text-xl text-muted-foreground italic max-w-2xl mx-auto">
            &ldquo;No Rest is worth anything except the rest that is earned.&rdquo;
            <cite className="block mt-2 text-sm not-italic text-primary font-semibold">
              &mdash; Jean Paul
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

      {/* What is Personal Injury? */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-6">
            What is <span className="text-primary">Personal Injury</span>?
          </h2>
          <ExpandableSection
            title="Understanding Personal Injury Law"
            summary="Any type of physical injury to the body as a result of another person's negligent action will fall under this umbrella term. In legal terms, personal injury is referred to as a tort — an act or omission that gives rise to injury or harm and amounts to a civil wrong under the law."
          >
            <p>
              Personal injury law is fundamentally built on the concept of negligence. When
              one person fails to exercise the level of care that a reasonably prudent person
              would exercise under similar circumstances, and that failure results in harm to
              another, the injured party may be entitled to compensation.
            </p>
            <p>
              The legal framework for establishing a personal injury claim rests on four
              basic elements that must be proven:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Duty</strong> &mdash; The defendant owed
                a legal duty of care to the plaintiff. For example, all drivers on the road
                owe a duty to operate their vehicles safely and follow traffic laws.
              </li>
              <li>
                <strong className="text-foreground">Breach</strong> &mdash; The defendant
                breached that duty through action or inaction. Running a red light, failing
                to maintain property, or providing substandard medical care are all examples
                of breaching a duty.
              </li>
              <li>
                <strong className="text-foreground">Causation</strong> &mdash; The
                defendant&rsquo;s breach of duty was the proximate cause of the
                plaintiff&rsquo;s injuries. There must be a direct link between the
                negligent act and the harm suffered.
              </li>
              <li>
                <strong className="text-foreground">Damages or Harm</strong> &mdash; The
                plaintiff suffered actual damages as a result. These can include medical
                expenses, lost wages, pain and suffering, and diminished quality of life.
              </li>
            </ol>
            <p>
              Each element must be established by a preponderance of the evidence &mdash;
              meaning it is more likely than not that each element is true. Without
              satisfying all four elements, a personal injury claim cannot succeed.
            </p>
          </ExpandableSection>
        </div>
      </section>

      {/* Auto Accidents */}
      <section id="auto-accidents" className="bg-card py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-6">
            Auto/Motorcycle <span className="text-primary">Accidents</span>
          </h2>
          <ExpandableSection
            title="Auto Accident Claims in Florida"
            summary="Florida is often referred to as a 'No-Fault' state. However, this does not necessarily mean a person is not liable for the damage or loss they have caused. Understanding the distinctions between Bodily Injury coverage and PIP coverage is critical."
          >
            <p>
              In Florida, Personal Injury Protection (PIP) coverage is mandatory for all
              drivers. PIP covers 80% of medical expenses and 60% of lost wages up to
              $10,000, regardless of who was at fault in the accident. This is the
              &ldquo;no-fault&rdquo; aspect of Florida law.
            </p>
            <p>
              However, Bodily Injury (BI) liability coverage is separate and distinct. While
              not required by law, BI coverage is what protects you when you are at fault for
              causing injuries to another person. If you are injured by another driver, their
              BI coverage is what would compensate you beyond your own PIP benefits.
            </p>
            <p>
              Understanding Uninsured/Underinsured Motorist (UM/UIM) coverage is equally
              critical. This coverage protects you when the at-fault driver either has no
              insurance or insufficient coverage to compensate for your injuries. Given the
              high number of uninsured drivers on Florida roads, this coverage is essential.
            </p>
            <p>
              <strong className="text-foreground">Our recommendation:</strong> Carry at
              least 100/300 BI and UM/UIM policies. A 100/300 policy provides $100,000 per
              person and $300,000 per accident in coverage. This level of protection can be
              the difference between full compensation and significant out-of-pocket expenses
              after a serious accident.
            </p>
          </ExpandableSection>
        </div>
      </section>

      {/* Ride Sharing */}
      <section id="ride-sharing" className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-6">
            Ride Sharing <span className="text-primary">Accidents</span>
          </h2>
          <ExpandableSection
            title="Uber, Lyft & Ride Share Claims"
            summary="Auto accidents involving ride sharing companies such as Uber and Lyft involve much of the same legal liability as any other automotive accident with notable exceptions which can make recovery and litigation much more complex."
          >
            <p>
              Ride sharing accidents introduce layers of complexity not present in standard
              auto accident claims. The coverage available depends heavily on the
              driver&rsquo;s status at the time of the accident &mdash; whether they were
              offline, waiting for a ride request, en route to pick up a passenger, or
              actively transporting a passenger.
            </p>
            <p>
              Coverage limits can vary dramatically based on these stages. When a driver is
              actively transporting a passenger, companies like Uber and Lyft maintain $1
              million in liability coverage. However, when the driver is simply logged into
              the app waiting for a request, coverage may drop to minimal contingent
              liability coverage.
            </p>
            <p>
              These companies are also known for using self-insurance mechanisms and
              employing aggressive tactics to minimize claims. They often dispute whether
              their driver was &ldquo;on the clock&rdquo; at the time of the accident, argue
              about coverage tier applicability, and deploy teams of adjusters focused on
              reducing payouts.
            </p>
            <p>
              Having experienced legal representation is essential to navigating these
              complexities and ensuring you receive the full compensation you deserve.
            </p>
          </ExpandableSection>
        </div>
      </section>

      {/* Premises Liability */}
      <section id="slip-trip-fall" className="bg-card py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-6">
            Slip/Trip &amp; Fall <span className="text-primary">Accidents</span>
          </h2>
          <ExpandableSection
            title="Premises Liability in Florida"
            summary="This body of law deals with injuries to persons while on someone else's property. Florida classifies individuals on another's property as either invitees or licensees, each with different duties of care owed."
          >
            <p>
              Under Florida law, the duty of care a property owner owes depends on the
              classification of the person on their property:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Invitees</strong> are persons who enter
                the property for a purpose connected to the owner&rsquo;s business or for
                the mutual benefit of both parties. Examples include customers in a store,
                guests at a hotel, or patients at a medical office. Property owners owe
                invitees the highest duty of care &mdash; they must maintain the property in
                a reasonably safe condition, regularly inspect for hazards, and either fix
                dangerous conditions or adequately warn invitees about them.
              </li>
              <li>
                <strong className="text-foreground">Licensees</strong> are persons who enter
                the property for their own purposes with the owner&rsquo;s permission but
                not for the owner&rsquo;s benefit. Social guests are a common example. The
                property owner must refrain from willful or wanton harm and must warn
                licensees of known dangers that are not obvious.
              </li>
            </ul>
            <p>
              Establishing which category applies is critical to determining the standard of
              care and the strength of your claim. Our firm has extensive experience in
              premises liability cases and understands the nuances of Florida property law.
            </p>
          </ExpandableSection>
        </div>
      </section>

      {/* Dog Bites */}
      <section id="dog-bites" className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-6">
            K9/Dog <span className="text-primary">Bites</span>
          </h2>
          <ExpandableSection
            title="Dog Bite Liability in Florida"
            summary='Florida is a strict liability state when it comes to dog bites. The owner is liable for injuries regardless of whether they had previous knowledge of the dog&rsquo;s propensity to be vicious. Governed by Florida Statute 767.04.'
          >
            <p>
              Under Florida Statute 767.04, the owner of a dog that bites any person while
              such person is in a public place, or lawfully in a private place (including the
              property of the owner), is liable for damages suffered by the person bitten.
              This applies regardless of the former viciousness of the dog or the
              owner&rsquo;s knowledge of such viciousness.
            </p>
            <p>
              However, there are important exceptions to this strict liability:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                If the victim&rsquo;s own negligence contributed to the bite, the
                owner&rsquo;s liability may be reduced proportionally under Florida&rsquo;s
                comparative negligence framework.
              </li>
              <li>
                Provocation of the dog by the victim can serve as a defense. However,
                &ldquo;provocation&rdquo; is narrowly defined &mdash; accidentally stepping
                on a dog&rsquo;s tail generally does not constitute provocation, while
                deliberately taunting or striking the animal would.
              </li>
              <li>
                If the owner displayed a prominently posted &ldquo;Bad Dog&rdquo; sign at
                the time of the incident, liability may be limited in certain circumstances,
                though this defense has significant limitations.
              </li>
            </ul>
            <p>
              Dog bite injuries can be severe, particularly for children, and can result in
              significant medical expenses, scarring, emotional trauma, and ongoing treatment
              needs. Our firm pursues full compensation for all these damages.
            </p>
          </ExpandableSection>
        </div>
      </section>

      {/* Medical Malpractice */}
      <section id="medical-malpractice" className="bg-card py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-6">
            Medical <span className="text-primary">Malpractice</span>
          </h2>
          <ExpandableSection
            title="Medical Malpractice Claims"
            summary="Claims grounded in medical malpractice are notoriously difficult to litigate. The law imposes a high standard and burden governed by Title XLV, Chapter 766 of Florida statutes."
          >
            <p>
              Medical malpractice claims require establishing that a healthcare provider
              deviated from the accepted standard of care, and that this deviation directly
              caused injury to the patient. The standard of care is defined by what a
              reasonably competent medical professional with similar training and experience
              would have done under similar circumstances.
            </p>
            <p>
              The duty of care analysis in medical malpractice is specialized. Consider a
              scenario where a doctor prescribes medication without reviewing the
              patient&rsquo;s known allergies, resulting in a severe allergic reaction. The
              duty of care required the doctor to review the patient&rsquo;s medical history
              before prescribing. The breach occurred when they failed to do so. Causation is
              established by linking the allergic reaction directly to the prescribed
              medication. And the damages include the medical costs of treating the reaction,
              any lasting health effects, and the pain and suffering endured.
            </p>
            <p>
              Florida law requires that before filing a medical malpractice lawsuit, the
              plaintiff must conduct a pre-suit investigation and provide a verified written
              medical expert opinion supporting the claim. This adds both time and expense to
              the process but serves as a gatekeeping mechanism to ensure only meritorious
              claims proceed.
            </p>
            <p>
              These cases demand significant resources, expert medical testimony, and deep
              legal knowledge. Our firm works with leading medical experts to build the
              strongest possible case for our clients.
            </p>
          </ExpandableSection>
        </div>
      </section>

      {/* Toxic Torts */}
      <section id="toxic-torts" className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-6">
            Toxic/Chemical <span className="text-primary">Torts</span>
          </h2>
          <ExpandableSection
            title="Toxic Tort Claims"
            summary="Toxic torts deal with personal injury claims involving harmful substances. Unlike immediate injuries, toxic tort injuries can sometimes come years or decades after contact, making causation the most challenging element to establish."
          >
            <p>
              The fundamental challenge in toxic tort litigation is establishing causation.
              Unlike an auto accident where the cause-and-effect relationship is often
              immediately apparent &mdash; a car strikes another car, causing injuries
              &mdash; toxic tort injuries may manifest years or even decades after exposure
              to the harmful substance.
            </p>
            <p>
              Consider the difference: in a car accident, you can typically trace the chain
              of events directly from impact to injury. With toxic exposure, a worker may
              handle chemicals daily for years before developing symptoms, making it far more
              difficult to prove that a specific substance caused their condition rather than
              some other factor.
            </p>
            <p>
              Successfully prosecuting toxic tort claims requires extensive medical and
              scientific expert testimony. Medical experts must establish both general
              causation (that the substance is capable of causing the type of injury alleged)
              and specific causation (that the substance actually caused this particular
              plaintiff&rsquo;s injury). This often involves toxicologists, epidemiologists,
              oncologists, and other specialists.
            </p>
            <p>
              Our firm has the resources and expertise to pursue these complex claims and
              hold responsible parties accountable for the harm caused by dangerous
              substances.
            </p>
          </ExpandableSection>
        </div>
      </section>

      {/* What You Should Do After Being Injured */}
      <section className="bg-card py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-8">
            What You Should Do{" "}
            <span className="text-primary">After Being Injured</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
                <AlertTriangle className="size-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Step 1: Emergency Care
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If the injury is severe, dial 911 immediately. Your health and safety come
                first. Medical help is the top priority.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
                <Stethoscope className="size-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Step 2: Document Everything
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Go to the hospital, urgent care, or your physician as soon as possible to
                get checked and document your injuries. Medical records are critical
                evidence.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
                <PhoneCall className="size-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Step 3: Contact Us
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Contact our office as soon as the danger is over. We work throughout
                Florida and are ready to fight for you.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-background p-6 md:p-8 space-y-4">
            <h3 className="text-xl font-bold text-foreground">Our Legal Approach</h3>
            <p className="text-muted-foreground leading-relaxed">
              Once retained, we immediately refer our clients to qualified medical
              professionals to ensure they receive the treatment they need. We conduct
              periodic check-ins throughout the recovery process and begin gathering
              evidence to build the strongest possible case.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When our client reaches maximum medical improvement, we compile all medical
              records, bills, lost wage documentation, and other evidence of damages into a
              comprehensive demand package. This demand is presented to the responsible
              party&rsquo;s insurance carrier for negotiation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If the insurance carrier refuses to offer fair compensation, we do not
              hesitate to file suit and take the case to trial. Our firm&rsquo;s willingness
              to litigate is what sets us apart &mdash; insurance companies know that we
              will fight in court if necessary, which often leads to better settlement
              outcomes.
            </p>
          </div>

          <div className="mt-10 rounded-lg bg-primary/5 border border-primary/20 p-6 md:p-8 text-center">
            <p className="text-lg md:text-xl font-black uppercase tracking-tight text-foreground mb-4">
              Email, Call, or Text Us!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="tel:7868551000"
                className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline"
              >
                <Phone className="size-5" />
                (786) 855-1000
              </Link>
              <Link
                href="mailto:service@mytriallawyer.com"
                className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline"
              >
                <Mail className="size-5" />
                service@mytriallawyer.com
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
}
