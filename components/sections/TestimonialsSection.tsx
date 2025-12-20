import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The care my mother receives at Kind Heart Services is exceptional. The staff treats her like family, and I can see how happy she is. It's truly a home away from home.",
    author: "Sarah M.",
    relation: "Daughter of Resident",
  },
  {
    quote:
      "We couldn't have found a better place for my father. The personalized attention and genuine compassion shown by everyone at Kind Heart Services gives us complete peace of mind.",
    author: "Michael T.",
    relation: "Son of Resident",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-balance">What Families Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the families who trust us with their loved ones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-8 pb-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.relation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
