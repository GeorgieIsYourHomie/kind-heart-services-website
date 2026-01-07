import { Card } from "@/components/ui/card";
import Image from "next/image";

export function StorySection() {
  return (
    <section
      className="bg-primary w-full px-4 md:px-16 py-14"
      aria-labelledby="story-heading"
    >
      <div
        className="flex
      flex-col md:flex-row md:justify-between md:gap-14"
      >
        <h2
          id="story-heading"
          className="text-background text-4xl md:text-5xl text-balance font-serif leading-tight tracking-tight mb-6"
        >
          <span className="italic">Our </span>
          <span>Story</span>
        </h2>
        <div className="max-w-4xl">
          <p className="font-sans text-background text-lg lg:text-2xl leading-relaxed mb-8">
            Founded by family, Kind Heart Services exists to offer seniors a
            place that truly feels like home. We focus on personalized care,
            meaningful relationships, and everyday comfort. Our caregivers don’t
            just support residents — they care for them with patience, kindness,
            and heart.
          </p>
        </div>
      </div>
    </section>
  );
}
