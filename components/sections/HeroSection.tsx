import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-dvh w-full px-4 md:px-16 py-14">
      {/* Top content */}
      <div>
       <div className="flex flex-col lg:flex-row lg:gap-12">
          <div>
            <h1 className="max-w-3xl text-4xl md:text-6xl font-serif leading-tight mb-6">
              Personalized assisted living, in a place that feels like{" "}
              <span className="italic">home.</span>
            </h1>
          </div>
  
          <div className="flex flex-col gap-4 mb-12">
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Assisted living centered on peace, comfort, and belonging.
            </p>
  
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="w-full sm:flex-1" asChild size="lg">
                <Link
                  href="/contact"
                  className="flex justify-center items-center"
                >
                  Schedule a Tour
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
  
              <Button
                className="w-full sm:flex-1"
                asChild
                size="lg"
                variant="outline"
              >
                <Link
                  href="/services"
                  className="flex justify-center items-center"
                >
                  Learn About Our Services
                </Link>
              </Button>
            </div>
          </div>
       </div>
      </div>

      {/* Image */}
      <div className="relative h-96 xl:h-120 w-full overflow-hidden rounded-sm">
        <Image
          src="/images/ryan-reinoso-Xcjq2OK958Q-unsplash.jpg"
          alt="Warm assisted living environment"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
}
