import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { kindHeartServicesContactInfo } from "@/lib/data/kindheartservices-contact-info";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30" role="contentinfo">
      <div className="px-4 md:px-16 py-14">
        <div className="flex flex-wrap md:grid md:grid-cols-3 gap-12">
          <div className="flex-2">
            <h3 className="text-lg font-serif font-semibold text-primary mb-4">
              Kind Heart Services
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Personalized family-run assisted living rooted in warmth, comfort
              and genuine compassion for every resident.
            </p>
          </div>

          <nav className="flex-1" aria-label="Footer navigation">
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm" role="list">
              <li role="listitem">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li role="listitem">
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li role="listitem">
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li role="listitem">
                <Link
                  href="/#contact-section"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li role="listitem">
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </nav>

          <address
            className="flex-1 not-italic"
            aria-label="Contact information"
          >
            <h3 className="text-sm font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm" role="list">
              <li className="flex items-start gap-2" role="listitem">
                <Phone
                  className="h-4 w-4 text-primary mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${kindHeartServicesContactInfo.phone.replace(
                    /\D/g,
                    ""
                  )}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Call us at ${kindHeartServicesContactInfo.phone}`}
                >
                  {kindHeartServicesContactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2" role="listitem">
                <Mail
                  className="h-4 w-4 text-primary mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${kindHeartServicesContactInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                  aria-label={`Email us at ${kindHeartServicesContactInfo.email}`}
                >
                  {kindHeartServicesContactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2" role="listitem">
                <MapPin
                  className="h-4 w-4 text-primary mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-muted-foreground">
                  {kindHeartServicesContactInfo.address} <br />
                  {kindHeartServicesContactInfo.city},{" "}
                  {kindHeartServicesContactInfo.state}{" "}
                  {kindHeartServicesContactInfo.zipcode}
                </span>
              </li>
            </ul>
          </address>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Kind Heart Services. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
