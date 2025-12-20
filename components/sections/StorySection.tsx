import { Card } from "@/components/ui/card";
import Image from "next/image";

export function StorySection() {
  return (
    <section className="bg-primary w-full px-4 md:px-16 py-14">
      <div
        className="flex
      flex-col md:flex-row md:justify-between md:gap-14"
      >
        <h1 className="text-background text-4xl md:text-5xl text-balance font-serif leading-tight tracking-tight mb-6">
          <span className="italic">Our{" "}</span>
          <span>Story</span>
        </h1>
        <div className="max-w-4xl">
          <p className="font-sans font-medium text-xl lg:text-3xl leading-relaxed text-background mb-8">
            Kind Heart Services was founded to provide a true home for
            seniors—one rooted in personalized care, respect, and compassion. As
            a family-run assisted living residence, we treat every resident like
            family, offering attentive support from a dedicated caregiving team
            committed to honor, comfort, and quality of life in a warm,
            welcoming environment.
          </p>
        </div>
      </div>
    </section>
  );
}
