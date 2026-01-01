import { BookOpen, Palmtree, Music, Flower } from "lucide-react";
import Image from "next/image";

const amenities = [
  { icon: BookOpen, label: "Reading Library" },
  { icon: Palmtree, label: "Garden & Patio" },
  { icon: Music, label: "Music & Engagement" },
  { icon: Flower, label: "Nature Walks" },
];

export function AmenitiesSection() {
  return (
    <section className="bg-primary/5 w-full">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] w-full px-4 md:px-16 py-14 gap-6 md:gap-10">
        {/* Images */}
        <div className="col-span-2 md:col-span-1 relative w-full h-70 md:h-90 overflow-hidden rounded-sm">
          <Image
            src="/images/pexels-rdne-6148866.jpg"
            alt="Warm assisted living environment"
            fill
            className="object-cover object-top md:object-right lg:object-top"
            priority
          />
        </div>
        {/* Content */}
        <div className="col-span-1 max-w-full mx-auto">
          <h2 className="text-4xl md:text-5xl text-balance font-serif leading-tight tracking-tight mb-6">
            <span>Amenities & </span>
            <span className="italic">Activities</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-pretty">
            Our home offers a warm, inviting environment with plenty of
            opportunities for social engagement and enrichment. From our cozy
            library to backyard BBQs, bingo nights, and community outings,
            there's always something to look forward to.
          </p>
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {amenities.map((amenity) => (
              <div
                key={amenity.label}
                className="flex flex-col items-center md:items-start gap-3"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10">
                  <amenity.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-left font-medium">
                  {amenity.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 lg:hidden grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((amenity) => (
            <div
              key={amenity.label}
              className="flex flex-col items-center gap-3"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10">
                <amenity.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm text-left font-medium">
                {amenity.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
