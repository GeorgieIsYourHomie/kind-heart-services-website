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
import {
  Heart,
  Pill,
  Home,
  Car,
  Brain,
  Utensils,
  Activity,
  Users,
  Clock,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Activities of Daily Living (ADL) Support",
    description:
      "Compassionate assistance with bathing, dressing, grooming, toileting, and mobility. Our trained caregivers help maintain dignity and independence while ensuring safety and comfort.",
    features: [
      "Personal hygiene assistance",
      "Dressing and grooming",
      "Mobility support",
      "Toileting care",
    ],
  },
  {
    icon: Activity,
    title: "Health & Wellness",
    description:
      "Professional health monitoring and coordination with healthcare providers to ensure optimal wellbeing.",
    features: [
      "Regular RN assessments",
      "Medication management",
      "Vital signs monitoring",
      "Therapy coordination",
    ],
  },
  {
    icon: Pill,
    title: "Medication Management",
    description:
      "Professional oversight to ensure medications are administered safely, correctly, and on schedule.",
    features: [
      "Medication reminders",
      "Prescription tracking",
      "Doctor coordination",
      "Safe storage",
    ],
  },
  {
    icon: Home,
    title: "Housekeeping & Laundry",
    description:
      "Maintain a clean, comfortable living environment with regular housekeeping and personal laundry services.",
    features: [
      "Room cleaning",
      "Bed linen changes",
      "Personal laundry",
      "Common area maintenance",
    ],
  },
  {
    icon: Utensils,
    title: "Nutritious Meals",
    description:
      "Delicious, home-cooked meals prepared fresh daily with attention to dietary restrictions and preferences.",
    features: [
      "Three meals daily plus snacks",
      "Special diet accommodations",
      "Fresh ingredients",
      "Dining together",
    ],
  },
  {
    icon: Car,
    title: "Transportation Services",
    description:
      "Safe, reliable transportation to medical appointments, errands, and community activities.",
    features: [
      "Medical appointments",
      "Shopping trips",
      "Social outings",
      "Family visits",
    ],
  },
  {
    icon: Brain,
    title: "Memory & Dementia Care",
    description:
      "Specialized support for residents with Alzheimer's, dementia, and other cognitive challenges.",
    features: [
      "Cognitive stimulation",
      "Routine maintenance",
      "Safety protocols",
      "Family education",
    ],
  },
  {
    icon: Users,
    title: "Social & Recreational Activities",
    description:
      "Engaging activities that promote social connection, mental stimulation, and overall wellbeing.",
    features: [
      "Group activities",
      "Entertainment events",
      "Outdoor excursions",
      "Creative programs",
    ],
  },
];

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
                <Card key={service.title} className="border-2">
                  <CardHeader>
                    <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-3 w-fit">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
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
