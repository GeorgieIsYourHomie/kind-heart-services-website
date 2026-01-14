"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomButton } from "@/components/CustomButton";

import { ModeToggle } from "./ModeToggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full max-w-480 mx-auto border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" mx-auto px-4 md:px-16">
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Kind Heart Services - Home"
          >
            <span className="text-xl font-serif font-medium text-primary">
              Kind Heart Services
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6" role="list">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
              role="listitem"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
              role="listitem"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-primary transition-colors"
              role="listitem"
            >
              Services
            </Link>
            <Link
              href="/#contact-section"
              className="text-sm font-medium hover:text-primary transition-colors"
              role="listitem"
            >
              Contact
            </Link>
            <CustomButton
              text="Schedule a Tour"
              href="https://calendly.com/kindheartservicesllc/30min"
              icon={ArrowRight}
              iconPosition="right"
              size="sm"
              className="ml-2"
              ariaLabel="Schedule a tour of our assisted living facility"
            />
            {/* <ModeToggle/> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t py-4"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                Services
              </Link>
              <Link
                href="/#contact-section"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                Contact
              </Link>
              <CustomButton
                text="Schedule a Tour"
                href="https://calendly.com/kindheartservicesllc/30min"
                icon={ArrowRight}
                iconPosition="right"
                target="blank"
                className="w-full"
                ariaLabel="Schedule a tour of our assisted living facility"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
