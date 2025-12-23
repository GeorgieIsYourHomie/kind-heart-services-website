import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services } from "@/lib/data/services";
import { Clock, Shield } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-accent/20 via-background to-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif mb-6 text-balance">
                Comprehensive Care Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Licensed under Minnesota 144 G regulations, we provide
                personalized care tailored to each resident's unique needs and
                preferences.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => (
                <Card
                  id={service.slug}
                  key={service.servicePageTitle}
                  className="border-2 scroll-mt-28"
                >
                  <CardHeader>
                    <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-3 w-fit">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-2">
                      {service.servicePageTitle}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.servicePageDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.servicePageFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Individualized Care */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-balance">
                Personalized Care Plans
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every resident receives an individualized care plan developed in
                collaboration with family members and healthcare providers. We
                understand that needs change over time, and we adjust our
                services accordingly.
              </p>
              <Card className="border-2 text-left">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Our approach begins with a comprehensive assessment to
                    understand your loved one's preferences, routines, health
                    conditions, and goals. From there, we create a tailored plan
                    that honors their independence while providing the support
                    they need to thrive.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Shield className="h-12 w-12 text-secondary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-balance">
                Licensed & Certified Care
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Kind Heart Services is fully licensed under Minnesota 144 G
                regulations, ensuring we meet the highest standards for assisted
                living care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Schedule a Tour</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
