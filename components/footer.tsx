import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { kindHeartServicesContactInfo } from "@/lib/data/kindheartservices-contact-info";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="px-4 md:px-16 py-14">
        <div className="flex flex-wrap md:grid md:grid-cols-3 gap-12">
          <div className="flex-2">
            <h3 className="text-lg font-serif font-semibold text-primary mb-4">
              Kind Heart Services
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Compassionate, personalized assisted living in a warm Minnesota
              home.
            </p>
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact-section"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  {kindHeartServicesContactInfo.phone}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  {kindHeartServicesContactInfo.email}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  {kindHeartServicesContactInfo.address} <br />
                  {kindHeartServicesContactInfo.city},{" "}
                  {kindHeartServicesContactInfo.state}{" "}
                  {kindHeartServicesContactInfo.zipcode}
                </span>
              </li>
            </ul>
          </div>
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
