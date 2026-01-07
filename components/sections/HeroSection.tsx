import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CustomButton } from "@/components/CustomButton";

import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full" aria-label="Hero section">
      <div className="px-4 md:px-16 py-14">
        {/* Top content */}
        <div>
          <div className="flex flex-col xl:flex-row xl:gap-20 lg:mb-12">
            <div>
              <h1 className="max-w-3xl text-4xl md:text-6xl font-serif leading-tight mb-6">
                Personalized assisted living in Minnesota, in a place that feels
                like <span className="italic">home.</span>
              </h1>
            </div>

            <div className="flex flex-col gap-12 mb-12 lg:mb-0">
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Family-run assisted living rooted in comfort, care, and
                belonging. A warm home where seniors are truly cared for.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <CustomButton
                  text="Visit Our Community"
                  href="/#contact-section"
                  icon={ArrowRight}
                  iconPosition="right"
                  size="lg"
                  className="w-full sm:flex-1"
                  ariaLabel="Visit our community - navigate to contact section"
                />
                <CustomButton
                  text="Learn About Our Services"
                  href="/services"
                  size="lg"
                  variant="outline"
                  className="w-full sm:flex-1 border-2"
                  ariaLabel="Learn about our assisted living services"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-96 xl:h-120 w-full overflow-hidden rounded-sm">
          <Image
            src="/images/age-cymru-qW3DLnehg9w-unsplash.jpg"
            alt="Comfortable living room in a warm, home-like assisted living facility in Minnesota"
            fill
            className="object-cover object-center xl:object-[center_35%]"
            priority
          />
        </div>
      </div>{" "}
    </section>
  );
}
