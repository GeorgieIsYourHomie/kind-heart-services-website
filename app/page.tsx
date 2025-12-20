import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { ServicesSnapshot } from "@/components/sections/ServicesSnapshot";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { HealthSafetySection } from "@/components/sections/HealthSafetySection";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";


export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <StorySection />
        <ServicesSnapshot />
        <AmenitiesSection />
        <TestimonialsSection />
        <HealthSafetySection />

        {/* Contact Strip */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-balance">
                Ready to Learn More?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a tour or reach out with any questions
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button asChild size="lg">
                  <Link href="/contact">Schedule a Tour</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:5551234567">
                    <Phone className="mr-2 h-5 w-5" />
                    (555) 123-4567
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="mailto:info@kindheartservices.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
