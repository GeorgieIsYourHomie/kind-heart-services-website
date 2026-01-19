import { CustomButton } from "@/components/CustomButton";
import { CustomImage } from "@/components/CustomImage";
import { ArrowRight } from "lucide-react";
import { siteImages } from "@/lib/content/images";

export function HeroSection() {
  return (
    <section className="w-full" aria-labelledby="home-hero-heading">
      <div className="px-4 md:px-16 py-14">
        {/* hero copy + primary CTAs */}
        <div className="flex flex-col xl:flex-row xl:gap-20 lg:mb-12">
          {/* left: headline */}
          <div>
            <h1
              id="home-hero-heading"
              className="max-w-3xl text-4xl md:text-6xl font-serif leading-tight mb-6"
            >
              Personalized assisted living in Minnesota, in a place that feels
              like <span className="italic">home.</span>
            </h1>
          </div>

          {/* right: supporting text + buttons */}
          <div className="flex flex-col gap-12 mb-12 lg:mb-0">
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Family-run assisted living rooted in comfort, care, and belonging.
              A warm home where seniors are truly cared for.
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

        {/* hero image */}
        <CustomImage
          src={siteImages.home.src.hero}
          alt={siteImages.home.alt.hero}
          priority
          sizes="100vw"
          wrapperClassName="h-96 xl:h-120 w-full rounded-sm"
          imageClassName="object-cover object-center xl:object-[center_35%]"
        />
      </div>
    </section>
  );
}
