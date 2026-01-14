import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { HealthSafetySection } from "@/components/sections/HealthSafetySection";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { kindHeartServicesContactInfo } from "@/lib/data/kindheartservices-contact-info";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="max-w-480 mx-auto scroll-mt-20">
        <HeroSection />
        <StorySection />
        <ServicesSection />
        <AmenitiesSection />
        <HealthSafetySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
