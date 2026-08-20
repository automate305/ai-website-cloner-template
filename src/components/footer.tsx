import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Meet Your Lawyer", href: "/meet-your-lawyer" },
  { label: "Results", href: "/results" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const practiceAreaLinks = [
  { label: "Personal Injury", href: "/personal-injury" },
  {
    label: "Property Insurance Litigation",
    href: "/property-insurance",
  },
  {
    label: "Business/Contract Law",
    href: "/business-law",
  },
];

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t-4 border-primary bg-card">
      {/* Tagline bar */}
      <div className="bg-primary/10 py-3 text-center">
        <p className="text-sm font-bold tracking-wider text-primary">
          FREE Phone or Virtual Consultations!
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Branding & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-6 w-1 rounded-full bg-primary" aria-hidden="true" />
              <h2 className="text-lg font-black tracking-wider text-foreground">
                MY TRIAL LAWYER, PLLC
              </h2>
            </div>
            <address className="space-y-2 not-italic text-sm text-muted-foreground">
              <p>690 SW 1st Ct</p>
              <p>Miami, FL 33130</p>
              <p className="pt-1">
                <a
                  href="tel:7868551000"
                  className="transition-colors hover:text-primary"
                >
                  (786) 855-1000
                </a>
              </p>
              <p>
                <a
                  href="tel:3056753356"
                  className="transition-colors hover:text-primary"
                >
                  (305) 675-3356
                </a>
              </p>
              <p>
                <a
                  href="mailto:service@mytriallawyer.com"
                  className="transition-colors hover:text-primary"
                >
                  service@mytriallawyer.com
                </a>
              </p>
            </address>

            {/* Social */}
            <div className="flex gap-3 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
              Practice Areas
            </h3>
            <ul className="space-y-2">
              {practiceAreaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
              Get in Touch
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Injured? Fighting an insurance company? We are here to help. Call
              us today for a free consultation.
            </p>
            <a
              href="tel:7868551000"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} My Trial Lawyer, PLLC. All rights
            reserved. The information on this website is for general information
            purposes only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
