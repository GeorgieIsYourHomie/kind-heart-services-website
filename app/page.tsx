import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Sections
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { HealthSafetySection } from "@/components/sections/HealthSafetySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import { siteImages } from "@/lib/content/images";

export default function HomePage() {
  const contactSectionImage = {
    src: siteImages.contact.imageASrc,
    alt: siteImages.contact.imageAAlt,
  };
  return (
    <>
      <Navigation />
      <main
        className="max-w-480 mx-auto scroll-mt-20"
        aria-label="Kind Heart Services home page"
      >
        <HeroSection />
        <StorySection />
        <ServicesSection />
        <AmenitiesSection />
        <HealthSafetySection />
        <TestimonialsSection />
        <ContactSection image={contactSectionImage} />
      </main>
      <Footer />
    </>
  );
}
