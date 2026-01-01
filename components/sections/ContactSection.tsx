import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { kindHeartServicesContactInfo } from "@/lib/data/kindheartservices-contact-info";
import GoogleMaps from "../GoogleMaps";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact-section" className="bg-primary scroll-mt-20">
      {/* Section Container */}
      <div className="flex flex-col items-stretch gap-12">
        {/* Section Header */}
        {/* Image */}
        <div className="col-span-1 mb-6">
          <div className="relative w-full h-86 sm:h-80 md:h-full overflow-hidden">
            <Image
              src="/images/sergiu-valena-7VPdLfzLwg8-unsplash.jpg"
              alt="Warm assisted living environment"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-16 text-center">
          <div className="text-background">
            <h2 className="text-4xl md:text-5xl text-balance font-serif leading-tight tracking-tight mb-6">
              <span>Ready to Learn </span>
              <span className="italic">More?</span>
            </h2>
            <p className="text-lg mb-12 leading-relaxed text-pretty">
              We're here to answer your questions and help you find the right
              care solution for your loved one. Schedule a tour to visit us in
              person.
            </p>
          </div>
          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              className="flex-1 bg-accent/10 hover:bg-accent/20 transition-colors text-background hover:text-background"
              variant="outline"
              asChild
              size="lg"
            >
              <Link
                target="blank"
                href="https://calendly.com/kindheartservicesllc/30min"
              >
                Schedule a Tour
              </Link>
            </Button>
            <div className="flex flex-row gap-4 w-full">
              <Button className="flex-1" asChild size="lg" variant="outline">
                <a href="tel:5551234567">
                  <Phone className="mr-2 h-5 w-5" />
                  (612) 405-3679
                </a>
              </Button>
              <Button className="flex-1" asChild size="lg" variant="outline">
                <a href="mailto:kindheartservicesllc@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
        {/* Contact Info */}
        <div className="px-4 md:px-16 text-background max-w-full flex flex-wrap justify-center items-start gap-6 md:gap-10">
          {/* Location */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="h-12 w-12 p-3 bg-accent/20 rounded-sm">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-semibold mb-1">Location</h3>
              <p>
                {kindHeartServicesContactInfo.address} <br />
                {kindHeartServicesContactInfo.city},{" "}
                {kindHeartServicesContactInfo.state}{" "}
                {kindHeartServicesContactInfo.zipcode}
              </p>
            </div>
          </div>

          {/* Tour Hours */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="h-12 w-12 p-3 bg-accent/20 rounded-sm">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-semibold mb-1">Tour Hours</h3>
              <p>
                Monday - Friday: 9am - 5pm
                <br />
                Saturday: 10am - 3pm
                <br />
                Sunday: By appointment
              </p>
            </div>
          </div>
        </div>
        {/* Image and Contact Form */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="hidden md:block col-span-1 md:pl-16">
            <div className="shadow-xl relative w-full h-86 sm:h-80 md:h-full overflow-hidden rounded-tl-sm rounded-bl-sm">
              <Image
                src="/images/sergiu-valena-7VPdLfzLwg8-unsplash.jpg"
                alt="Warm assisted living environment"
                fill
                className="object-cover object-center md:object-right"
                priority
              />
            </div>
          </div>
          {/* Section Contact Form */}
          <div className="col-span-1 px-4 md:pr-16 md:px-0">
            <ContactForm />
          </div>
        </div>

        {/* Google Map */}
        <GoogleMaps />
      </div>
    </section>
  );
}
