import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Legal insights and updates from My Trial Lawyer, PLLC — articles on personal injury, insurance claims, business law, and your rights in Florida.",
};

const blogPosts = [
  {
    title: "Understanding Your Rights After a Car Accident in Florida",
    date: "August 15, 2026",
    excerpt:
      "If you have been involved in a car accident in Florida, understanding your legal rights is critical. From dealing with insurance companies to filing a personal injury claim, learn the key steps you should take to protect yourself and your family after a collision.",
    slug: "rights-after-car-accident-florida",
  },
  {
    title: "What to Do When Your Insurance Claim is Denied",
    date: "August 8, 2026",
    excerpt:
      "Insurance companies frequently deny valid claims, leaving policyholders feeling helpless. Learn about the common reasons insurers deny claims, the steps you can take to challenge a denial, and when it is time to seek legal representation to fight for the coverage you deserve.",
    slug: "insurance-claim-denied",
  },
  {
    title: "Why Every Business Needs Proper Entity Formation",
    date: "July 29, 2026",
    excerpt:
      "Starting a business without proper legal entity formation can expose you to significant personal liability. Discover the different business structures available in Florida, the advantages of each, and why consulting with an attorney early can save you from costly mistakes down the road.",
    slug: "business-entity-formation",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground mb-4">
            <span className="text-primary">Blog</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Legal insights and updates from My Trial Lawyer
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="space-y-6 md:space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-lg border border-border bg-background p-6 md:p-8 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="size-3.5" />
                  <time>{post.date}</time>
                </div>
                <h2 className="text-xl md:text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              More articles coming soon. Check back regularly for legal insights
              and updates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
