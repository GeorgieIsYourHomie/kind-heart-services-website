import Link from "next/link";
import { serviceGroups } from "@/lib/data/services";
import { Button } from "../ui/button";
import { CustomImage } from "../CustomImage";
import { siteImages } from "@/lib/content/images";

export function ServicesSection() {
  return (
    <section
      className="w-full bg-background"
      aria-labelledby="services-heading"
    >
      <div className="grid grid-rows-[auto_1fr_auto] w-full px-4 md:px-16 py-14 gap-6 md:gap-10">
        {/* top (1/5) */}
        <div className="text-center flex flex-col items-center gap-4">
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl text-balance font-serif leading-tight tracking-tight mb-6"
          >
            <span className="italic">Care </span>
            <span>Services</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            We offer personalized assisted living services designed to support
            daily life with comfort and peace of mind. Each care plan is
            thoughtfully tailored to meet the unique needs and routines of every
            resident.
          </p>
        </div>

        {/* images */}
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="col-span-2 md:col-span-1">
            <CustomImage
              src={siteImages.home.src.servicesSnapshotA}
              alt={siteImages.home.alt.servicesSnapshotA}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              wrapperClassName="relative aspect-[4/3] w-full overflow-hidden rounded-sm"
              imageClassName="object-cover object-top"
            />
          </div>

          <div className="hidden md:block">
            <CustomImage
              src={siteImages.home.src.servicesSnapshotB}
              alt={siteImages.home.alt.servicesSnapshotB}
              priority
              sizes="50vw"
              wrapperClassName="relative aspect-[4/3] w-full overflow-hidden rounded-sm"
              imageClassName="object-cover object-top"
            />
          </div>
        </div>

        {/* services list */}
        <div className="w-full flex flex-col justify-center gap-8 md:gap-12">
          <div className="flex flex-col justify-center gap-6 lg:grid lg:grid-cols-3">
            {serviceGroups.map((group) =>
              group.services.map((service) => {
                // only show these three services
                if (
                  service.slug !== "adl-support" &&
                  service.slug !== "medication-management" &&
                  service.slug !== "structured-engagement"
                ) {
                  return null;
                }

                return (
                  <article key={service.slug} className="flex flex-row gap-4">
                    <div className="shrink-0" aria-hidden="true">
                      <div className="h-12 w-12 bg-primary/10 rounded-sm flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-md mb-2">
                        {service.serviceSnapshotTitle}
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {service.serviceSnapshotDescription}
                      </p>
                    </div>
                  </article>
                );
              })
            )}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="w-full max-w-md border-2"
              asChild
            >
              <Link
                href="/services"
                className="inline-flex"
                aria-label="View all assisted living services we offer"
              >
                See All Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
