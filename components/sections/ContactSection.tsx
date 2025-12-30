import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { kindHeartServicesContactInfo } from "@/lib/data/kindheartservices-contact-info";
import GoogleMaps from "../GoogleMaps";

export default function ContactSection() {
  return (
    <section className="bg-muted/30">
      {/* Section Container */}
      <div className="flex flex-col items-stretch gap-12 pt-14">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto px-4 md:px-16 text-center">
          <h2 className="text-4xl md:text-5xl text-balance font-serif leading-tight tracking-tight mb-6">
            <span>Ready to Learn </span>
            <span className="italic">More?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-pretty">
            We're here to answer your questions and help you find the right care
            solution for your loved one. Schedule a tour to visit us in person.
          </p>
          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild size="lg">
              <Link
                target="blank"
                href="https://calendly.com/kindheartservicesllc/30min"
              >
                Schedule a Tour
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:5551234567">
                <Phone className="mr-2 h-5 w-5" />
                (612) 405-3679
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:kindheartservicesllc@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
        {/* Contact Info */}
        <div className="max-w-full text-center md:text-left flex flex-wrap justify-center items-start gap-6 md:gap-10">
          {/* Location */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="h-12 w-12 p-3 bg-primary/10 rounded-sm">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-muted-foreground">
                {kindHeartServicesContactInfo.address} <br />
                {kindHeartServicesContactInfo.city},{" "}
                {kindHeartServicesContactInfo.state}{" "}
                {kindHeartServicesContactInfo.zipcode}
              </p>
            </div>
          </div>

          {/* Tour Hours */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="h-12 w-12 p-3 bg-primary/10 rounded-sm">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Tour Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9am - 5pm
                <br />
                Saturday: 10am - 3pm
                <br />
                Sunday: By appointment
              </p>
            </div>
          </div>
        </div>
        {/* Section Contact Form */}
        <div className="w-full max-w-4xl px-4 md:px-16 mx-auto">
          <ContactForm />
        </div>

        {/* Google Map */}
        <GoogleMaps />
      </div>
    </section>
  );
}
