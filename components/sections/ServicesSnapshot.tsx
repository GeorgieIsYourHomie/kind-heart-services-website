import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Heart, Pill, Home, Car, Brain, Utensils } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Heart,
    title: "Daily Living Assistance",
    description: "Compassionate support with bathing, dressing, grooming, and mobility.",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Professional oversight to ensure medications are taken safely and on time.",
  },
  {
    icon: Home,
    title: "Housekeeping & Laundry",
    description: "Clean, comfortable living spaces maintained with care and attention.",
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Safe, reliable transportation to appointments and community activities.",
  },
  {
    icon: Brain,
    title: "Memory Care",
    description: "Specialized support for residents with dementia and cognitive challenges.",
  },
  {
    icon: Utensils,
    title: "Nutritious Meals",
    description: "Delicious, home-cooked meals prepared with dietary needs in mind.",
  },
]

export function ServicesSnapshot() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-balance">Comprehensive Care Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We offer a full range of personalized services designed to support independence and enhance quality of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.title} href="/services" className="block group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
