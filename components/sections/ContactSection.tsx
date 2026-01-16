import { ContactForm } from "@/components/ContactForm";
import { CustomButton } from "@/components/CustomButton";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { kindHeartServicesContactInfo } from "@/lib/data/kindheartservices-contact-info";
import GoogleMaps from "../GoogleMaps";
import { CustomImage } from "../CustomImage";

type ContactSectionProps = {
  image: {
    src: string;
    alt: string;
  };
};

export default function ContactSection({ image }: ContactSectionProps) {
  return (
    <section
      id="contact-section"
      className="bg-primary scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      {/* section container */}
      <div className="flex flex-col items-stretch gap-12">
        {/* header */}
        <div className="max-w-4xl mx-auto px-4 md:px-16 text-center w-full pt-14">
          <h2
            id="contact-heading"
            className="text-background text-4xl md:text-5xl text-balance font-serif leading-tight tracking-tight mb-6"
          >
            <span>Ready to Learn </span>
            <span className="italic">More?</span>
          </h2>

          <p className="text-background text-lg mb-12 leading-relaxed text-pretty">
            We're here to answer your questions and help you find the right care
            solution for your loved one. Schedule a tour to visit our Minnesota
            assisted living facility in person and see how we create a warm,
            home-like environment for our residents.
          </p>

          {/* buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 w-full">
            <CustomButton
              text="Plan Your Visit"
              href="https://calendly.com/kindheartservicesllc/30min"
              icon={ArrowRight}
              iconPosition="right"
              variant="outline"
              size="lg"
              className="flex-1 min-w-0 bg-accent/10 hover:bg-accent/20 transition-colors text-background hover:text-background"
              target="blank"
              ariaLabel="Schedule a tour of our assisted living facility"
            />

            <div className="flex flex-row gap-4 w-full">
              <CustomButton
                text="Call Us"
                href="tel:6124053679"
                icon={Phone}
                iconPosition="left"
                size="lg"
                variant="outline"
                className="flex-1"
                ariaLabel="Call us at 612-405-3679"
              />

              <CustomButton
                text="Email Us"
                href="mailto:kindheartservicesllc@gmail.com"
                icon={Mail}
                iconPosition="left"
                size="lg"
                variant="outline"
                className="flex-1"
                ariaLabel="Email us at kindheartservicesllc@gmail.com"
              />
            </div>
          </div>
        </div>

        {/* contact info */}
        <div
          className="px-4 md:px-16 text-background max-w-full flex flex-wrap justify-center items-start gap-6 md:gap-10"
          role="list"
          aria-label="Contact information"
        >
          {/* location */}
          <address
            className="flex flex-col md:flex-row items-center md:items-start gap-4 not-italic"
            role="listitem"
          >
            <div
              className="h-12 w-12 p-3 bg-accent/20 rounded-sm"
              aria-hidden="true"
            >
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
          </address>

          {/* tour hours */}
          <div
            className="flex flex-col md:flex-row items-center md:items-start gap-4"
            role="listitem"
          >
            <div
              className="h-12 w-12 p-3 bg-accent/20 rounded-sm"
              aria-hidden="true"
            >
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

        {/* image and form (mobile stacks / desktop side-by-side) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          {/* image */}
          <div className="col-span-1 md:pl-16">
            <CustomImage
              src={image.src}
              alt={image.alt}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              wrapperClassName="shadow-xl w-full h-86 sm:h-80 md:h-full rounded-tl-none md:rounded-bl-none md:rounded-tl-sm md:rounded-bl-sm mb-10"
              imageClassName="object-cover object-center md:object-right"
            />
          </div>

          {/* contact form */}
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
