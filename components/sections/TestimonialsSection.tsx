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
    <section className="bg-muted/30">
      <div className="grid grid-rows-[auto_1fr] px-4 md:px-16 py-14 gap-8 md:gap-14">
        <div className="max-w-6xl mx-auto md:text-center">
          <h2 className="text-center text-4xl md:text-5xl text-balance font-serif leading-tight tracking-tight mb-6">
            Hear from the families who trust us with their{" "}
            <span className="italic">loved ones</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <Quote className="h-7 w-7 text-primary/60 mb-4" />
              <p className="text-pretty text-xl lg:text-2xl leading-relaxed mb-6 font-sans">
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
      </div>
    </section>
  );
}
