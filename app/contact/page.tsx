import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { kindHeartServicesContactInfo } from "@/lib/data/kindheartservices-contact-info";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-accent/20 via-background to-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif mb-6 text-balance">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                We're here to answer your questions and help you find the right
                care solution for your loved one. Schedule a tour to visit us in
                person.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a
                          href="tel:5551234567"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          (612) 405-3679
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:kindheartservicesllc@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          kindheartservicesllc@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-muted-foreground">
                          123 Maple Street
                          <br />
                          Minneapolis, MN 55401
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
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
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="border-8 border-amber-300 py-0">
          <div className="w-full h-96 bg-muted/50 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Map location</p>
              <p className="text-sm text-muted-foreground">
                {kindHeartServicesContactInfo.address},{" "}
                {kindHeartServicesContactInfo.city},{" "}
                {kindHeartServicesContactInfo.state}{" "}
                {kindHeartServicesContactInfo.zipcode}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
