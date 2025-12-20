import { BookOpen, Palmtree, Music, Flower } from "lucide-react"

const amenities = [
  { icon: BookOpen, label: "Reading Library" },
  { icon: Palmtree, label: "Garden & Patio" },
  { icon: Music, label: "Music & Entertainment" },
  { icon: Flower, label: "Nature Walks" },
]

export function AmenitiesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-balance">Amenities & Activities</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-pretty">
            Our home offers a warm, inviting environment with plenty of opportunities for social engagement and
            enrichment. From our cozy library to backyard BBQs, bingo nights, and community outings, there's always
            something to look forward to.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity) => (
              <div key={amenity.label} className="flex flex-col items-center gap-3">
                <div className="p-4 bg-accent/50 rounded-full">
                  <amenity.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-medium">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
