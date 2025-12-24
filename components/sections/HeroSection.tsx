import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="h-dvh w-full grid grid-rows-[2fr_3fr] lg:grid-rows-[1fr_4fr] px-4 md:px-16 py-14 gap-6 md:gap-10">
      {/* ───────────── TOP (1/5) ───────────── */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 items-start gap-4 lg:gap-30">
        {/* Left: Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl text-balance font-serif leading-tight tracking-tight mb-6">
            Personalized assisted living, in a place that feels like{" "}
            <span className="italic">home.</span>
          </h1>
        </div>

        {/* Right: Copy & CTA */}
        <div className="w-full flex flex-col gap-4">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            Assisted living centered on peace, comfort, and belonging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Schedule a Tour
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/services">Learn About Our Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* ───────────── BOTTOM (4/5) ───────────── */}
      <div className="flex flex-col items-start gap-4">
        {/* Right: Image */}
        <div className="relative h-full w-full overflow-hidden rounded-sm">
          <Image
            src="/images/ryan-reinoso-Xcjq2OK958Q-unsplash.jpg"
            alt="Warm assisted living environment"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
