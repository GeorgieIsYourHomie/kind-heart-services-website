import { Card } from "@/components/ui/card"

export function StorySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-center text-balance">Our Story</h2>
          <Card className="p-8 border-2">
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Kind Heart Services was founded with a simple mission: to create a home where seniors receive the
              personalized care and attention they deserve. As a family-run business, we understand the importance of
              treating every resident like family.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our dedicated team of caregivers brings compassion, expertise, and a genuine commitment to enhancing the
              quality of life for those in our care. We believe that everyone deserves to age with dignity, surrounded
              by warmth and respect.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
