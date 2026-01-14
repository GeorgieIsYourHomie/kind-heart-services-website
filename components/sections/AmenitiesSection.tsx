import { BookOpen, Palmtree, Music, Flower } from "lucide-react";
import { CustomImage } from "../CustomImage";
import { siteImages } from "@/lib/content/images";

const amenities = [
  { icon: BookOpen, label: "Reading Library" },
  { icon: Palmtree, label: "Garden & Patio" },
  { icon: Music, label: "Music & Engagement" },
  { icon: Flower, label: "Nature Walks" },
];

export function AmenitiesSection() {
  return (
    <section
      className="bg-primary/5 w-full"
      aria-labelledby="amenities-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] w-full px-4 md:px-16 py-14 gap-6 md:gap-10">
        {/* ───────────── IMAGE ───────────── */}
        <div className="col-span-2 md:col-span-1">
          <CustomImage
            src={siteImages.home.amenities}
            alt="Residents enjoying activities in a comfortable common area at our Minnesota assisted living facility"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            wrapperClassName="w-full h-[280px] md:h-[360px] overflow-hidden rounded-sm"
            imageClassName="object-cover object-top md:object-right lg:object-top"
          />
        </div>

        {/* ───────────── CONTENT ───────────── */}
        <div className="col-span-1 max-w-full mx-auto">
          <h2
            id="amenities-heading"
            className="text-4xl md:text-5xl text-balance font-serif leading-tight tracking-tight mb-6"
          >
            <span>Amenities & </span>
            <span className="italic">Activities</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-pretty">
            Our home offers a warm, welcoming environment with meaningful
            opportunities to stay engaged and connected. From quiet reading time
            to music, shared meals, outdoor walks, and group activities,
            residents are encouraged to participate at their own pace in ways
            that feel enjoyable and familiar.
          </p>

          <div
            className="hidden lg:grid grid-cols-4 gap-6"
            role="list"
            aria-label="Available amenities"
          >
            {amenities.map((amenity) => (
              <div
                key={amenity.label}
                className="flex flex-col items-center md:items-start gap-3"
                role="listitem"
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10"
                  aria-hidden="true"
                >
                  <amenity.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-left font-medium">
                  {amenity.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ───────────── MOBILE AMENITIES GRID ───────────── */}
        <div
          className="col-span-2 lg:hidden grid grid-cols-2 md:grid-cols-4 gap-6"
          role="list"
          aria-label="Available amenities"
        >
          {amenities.map((amenity) => (
            <div
              key={amenity.label}
              className="flex flex-col items-center gap-3"
              role="listitem"
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10"
                aria-hidden="true"
              >
                <amenity.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm text-center font-medium">
                {amenity.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
