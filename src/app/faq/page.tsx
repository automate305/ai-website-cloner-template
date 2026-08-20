import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { FAQAccordion } from "./faq-accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about My Trial Lawyer, PLLC — fees, consultations, case timelines, and more. Free consultations available.",
};

const faqItems = [
  {
    question: "Does Your Firm Offer Free Consultations?",
    answer:
      "Yes. We also offer phone consultations. We are always excited and happy to meet and speak with anyone interested in speaking with us. Often, there is an attorney available to speak with you when you call. If you prefer, send us an email or a text! We offer telephonic, virtual or in person consultations.",
  },
  {
    question:
      "Can I Contact Your Office on Matters Outside of Your Practice Area?",
    answer:
      "Yes. We occasionally take on cases outside of our areas of practice. In any event, if we feel like there is another attorney better suited to take your case, we can refer you to them. We want you to be made whole, even if that means recommending you to an attorney better suited for your case than us.",
  },
  {
    question: "How Much Are Your Legal Fees?",
    answer:
      "Many of our legal services are free to you! In the cases where they are not, our fees depend on a few factors, including the complexity of your case, in addition to what area of law your case falls into. However, this does not necessarily mean the more complex, the higher the rate. We understand cost is a driving factor in most decisions. Often we are able to beat most of our competitors in flat fees or hourly rates. Just give us a call or send us a message. Do not be afraid to inquire about our fees, we have no problem discussing them with you. In some instances we will even negotiate our fees to help you as well. Our priority is you and your case!",
  },
  {
    question: "Does Your Firm Offer Flat Fees for Legal Work?",
    answer:
      "Yes. In certain areas of our practice we do offer flat rates. For example, if you need a contract drafted, we offer low cost flat rates.",
  },
  {
    question: "Does Your Firm Take Cases on Contingency?",
    answer:
      "Yes. We take cases where the fees are contingent upon the outcome. Most personal injury cases will fall in this category. However, there are certain cases by law in which we cannot take fees contingent upon the outcome of your case.",
  },
  {
    question: "How Do I Know If I Need a Lawyer Now?",
    answer:
      "In many cases you may not need a lawyer right away. This depends on what your specific problem is. This is why it is important to speak with an attorney as soon as possible. If we feel you are not ready or do not require an attorney, we will advise as such. However, if you have been served with a lawsuit, you should contact our firm or a trustworthy attorney to seek legal advice immediately. Failure to respond in a timely manner may result in a default judgment against you.",
  },
  {
    question: "I Was Injured, How Long Do I Have to Make a Claim?",
    answer:
      "The answer depends on what kind of harm you suffered. In general, an injury as a result of another’s negligence has a four year statute of limitation to file a claim in the state of Florida. However, it can also be as early as 14 days. Wrongful death suits may be commenced at anytime before two years if it is a result of negligence. It is important to contact a lawyer as soon possible.",
  },
  {
    question: "How Long Will It Take To Pursue A Claim?",
    answer:
      "Some personal injury cases may take a few years to resolve, others, just months. It really does depend on the facts surrounding your case.",
  },
  {
    question: "How Will You Inform Me of the Status of My Case?",
    answer:
      "In Florida, attorneys have a duty to keep their clients informed. Our office prides itself in keeping our clients up to date as regularly and often as possible. We will make calls and send emails regularly in order to keep you informed. Never hesitate to call our office with any questions you may have. You are our priority and we want you to be informed and in the know.",
  },
  {
    question: "Do You Take Cases Outside of South Florida?",
    answer:
      "Yes. Although many of our clients are located in the South Florida region, we will take cases throughout the state of Florida. In certain situations, we may be able to take cases outside the state of Florida.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get answers to common questions about our legal services, fees, and
            process.
          </p>
        </div>
      </section>

      {/* Question Suggestion */}
      <section className="bg-primary py-10 md:py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-lg md:text-xl font-black text-primary-foreground uppercase tracking-wider">
            Have a question you think should be on this page? Send it to us
          </h2>
          <p className="text-primary-foreground/80 mt-3 text-sm md:text-base">
            Call{" "}
            <a
              href="tel:7868551000"
              className="font-bold underline underline-offset-2 hover:text-white transition-colors"
            >
              (786) 855-1000
            </a>{" "}
            or email{" "}
            <a
              href="mailto:service@mytriallawyer.com"
              className="font-bold underline underline-offset-2 hover:text-white transition-colors"
            >
              service@mytriallawyer.com
            </a>
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
