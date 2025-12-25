import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

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
];

export function TestimonialsSection() {
  return (
    <section className="bg-primary/5">
      <div className="grid grid-rows-[auto_1fr] justify-start px-4 md:px-16 py-14 gap-6 md:gap-10">
        <div className="flex flex-col gap-4">
          {/* Left: Text */}
          <h2 className="text-4xl md:text-5xl text-balance font-serif leading-tight tracking-tight mb-6">
            <span>Hear from the families who trust us </span>
            <span className="italic">with their loved ones </span>
          </h2>
          {/* <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            <span>Hear from the families who </span>
            <span className="italic">trust us </span>
            <span>with their loved ones </span>
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <Quote className="h-8 w-8 text-primary/60 mb-4" />
              <p className="text-xl md:text-2xl leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.relation}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="border grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-8 pb-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.relation}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );
}
