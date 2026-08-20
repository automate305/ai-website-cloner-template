"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const practiceAreas = [
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

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "AREAS OF PRACTICE", href: "/areas-of-practice", children: practiceAreas },
  { label: "MEET YOUR LAWYER", href: "/meet-your-lawyer" },
  { label: "RESULTS", href: "/results" },
  { label: "FAQ", href: "/faq" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-brand-blue bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="h-8 w-1.5 rounded-full bg-primary" aria-hidden="true" />
          <span className="text-xl font-black tracking-widest text-brand-blue transition-colors group-hover:text-primary">
            LOCAY LAW
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-xs font-bold tracking-wider text-foreground/70 transition-colors hover:text-brand-blue",
                    dropdownOpen && "text-brand-blue"
                  )}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "size-3.5 transition-transform duration-200",
                      dropdownOpen && "rotate-180"
                    )}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={cn(
                    "absolute left-0 top-full pt-1 transition-all duration-200",
                    dropdownOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  )}
                >
                  <ul className="min-w-[260px] rounded-lg border border-border bg-card p-1.5 shadow-xl shadow-black/10">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="rounded-md px-3 py-2 text-xs font-bold tracking-wider text-foreground/70 transition-colors hover:text-brand-blue"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Phone CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:7868551000"
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/85 sm:flex"
          >
            <Phone className="size-4" />
            (786) 855-1000
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-blue transition-colors hover:text-primary lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="space-y-1 px-4 py-4">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-bold tracking-wider text-foreground/70 transition-colors hover:text-brand-blue"
                  onClick={() => setMobileDropdownOpen((prev) => !prev)}
                  aria-expanded={mobileDropdownOpen}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform duration-200",
                      mobileDropdownOpen && "rotate-180"
                    )}
                  />
                </button>
                <ul
                  className={cn(
                    "overflow-hidden transition-all duration-200",
                    mobileDropdownOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block rounded-md py-2 pl-8 pr-3 text-sm text-foreground/70 transition-colors hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2.5 text-sm font-bold tracking-wider text-foreground/70 transition-colors hover:text-brand-blue"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}

          {/* Mobile phone CTA */}
          <li className="pt-2">
            <a
              href="tel:7868551000"
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              <Phone className="size-4" />
              (786) 855-1000
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
