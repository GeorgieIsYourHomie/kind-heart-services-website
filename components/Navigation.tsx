"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { CustomButton } from "@/components/CustomButton";

// import { ModeToggle } from "./ModeToggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full max-w-480 mx-auto border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto px-4 md:px-16">
        {/* primary navigation */}
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          {/* logo / home link */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Kind Heart Services - Home"
          >
            <span className="text-xl font-serif font-medium text-primary">
              Kind Heart Services
            </span>
          </Link>

          {/* desktop links */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6" aria-label="Primary links">
              <li>
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact-section"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* primary CTA */}
            <CustomButton
              text="Schedule a Tour"
              href="https://calendly.com/kindheartservicesllc/30min"
              target="_blank"
              icon={ArrowRight}
              iconPosition="right"
              size="sm"
              className="ml-2"
              ariaLabel="Schedule a tour of our assisted living facility"
            />

            {/* Optional theme toggle */}
            {/* <ModeToggle /> */}
          </div>

          {/* mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* mobile navigation panel */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t py-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact-section"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>

              <li>
                <CustomButton
                  text="Schedule a Tour"
                  href="https://calendly.com/kindheartservicesllc/30min"
                  target="_blank"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full"
                  ariaLabel="Schedule a tour of our assisted living facility"
                  onClick={() => setIsOpen(false)}
                />
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
