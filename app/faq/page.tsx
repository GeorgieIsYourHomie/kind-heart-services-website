import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import ContactSection from "@/components/sections/ContactSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/content/faq";
import { siteImages } from "@/lib/content/images";

export default function FAQPage() {
 const contactSectionImage = {
    src: siteImages.contact.imageBSrc,
    alt: siteImages.contact.imageBAlt,
  };

  return (
    <>
      <Navigation />

      <main className="mx-auto bg-background scroll-mt-20">
        <section aria-labelledby="about-intro-heading">
          <div className="mx-auto max-w-4xl px-4 md:px-16 py-14">
            {/* h1 */}
            <h1 className="text-4xl md:text-6xl text-balance font-serif leading-tight tracking-tight mb-18">
              Frequently Asked Questions
            </h1>

            <div className="flex flex-col gap-16">
              {/* general */}
              <div>
                <h2 className="text-lg lg:text-2xl text-balance text-muted-foreground font-sans font-medium leading-tight tracking-tight mb-3">
                  General
                </h2>
                <Accordion type="single" collapsible>
                  {faqs
                    .filter((faq) => faq.category === "general")
                    .map((faqItem) => (
                      <AccordionItem key={faqItem.id} value={faqItem.id}>
                        <AccordionTrigger className="text-xl font-medium hover:no-underline">
                          {faqItem.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-lg">
                          {faqItem.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>

              {/* services */}
              <div>
                <h2 className="text-lg lg:text-2xl text-balance text-muted-foreground font-sans font-medium leading-tight tracking-tight mb-3">
                  Services
                </h2>
                <Accordion type="single" collapsible>
                  {faqs
                    .filter((faq) => faq.category === "services")
                    .map((faqItem) => (
                      <AccordionItem key={faqItem.id} value={faqItem.id}>
                        <AccordionTrigger className="text-xl font-medium hover:no-underline">
                          {faqItem.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-lg">
                          {faqItem.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>

              {/* care */}
              <div>
                <h2 className="text-lg lg:text-2xl text-balance text-muted-foreground font-sans font-medium leading-tight tracking-tight mb-3">
                  Care
                </h2>
                <Accordion type="single" collapsible>
                  {faqs
                    .filter((faq) => faq.category === "care")
                    .map((faqItem) => (
                      <AccordionItem key={faqItem.id} value={faqItem.id}>
                        <AccordionTrigger className="text-xl font-medium hover:no-underline">
                          {faqItem.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-lg">
                          {faqItem.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>

              {/* daily life */}
              <div>
                <h2 className="text-lg lg:text-2xl text-balance text-muted-foreground font-sans font-medium leading-tight tracking-tight mb-3">
                  Daily Life
                </h2>
                <Accordion type="single" collapsible>
                  {faqs
                    .filter((faq) => faq.category === "daily-life")
                    .map((faqItem) => (
                      <AccordionItem key={faqItem.id} value={faqItem.id}>
                        <AccordionTrigger className="text-xl font-medium hover:no-underline">
                          {faqItem.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-lg">
                          {faqItem.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>

              {/* family */}
              <div>
                <h2 className="text-lg lg:text-2xl text-balance text-muted-foreground font-sans font-medium leading-tight tracking-tight mb-3">
                  Family
                </h2>
                <Accordion type="single" collapsible>
                  {faqs
                    .filter((faq) => faq.category === "family")
                    .map((faqItem) => (
                      <AccordionItem key={faqItem.id} value={faqItem.id}>
                        <AccordionTrigger className="text-xl font-medium hover:no-underline">
                          {faqItem.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-lg">
                          {faqItem.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>

              {/* Touring */}
              <div>
                <h2 className="text-lg lg:text-2xl text-balance text-muted-foreground font-sans font-medium leading-tight tracking-tight mb-3">
                  Getting Started
                </h2>
                <Accordion type="single" collapsible>
                  {faqs
                    .filter((faq) => faq.category === "tour-next-steps")
                    .map((faqItem) => (
                      <AccordionItem key={faqItem.id} value={faqItem.id}>
                        <AccordionTrigger className="text-xl font-medium hover:no-underline">
                          {faqItem.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-lg">
                          {faqItem.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <ContactSection image={contactSectionImage} />
      </main>
      <Footer />
    </>
  );
}
