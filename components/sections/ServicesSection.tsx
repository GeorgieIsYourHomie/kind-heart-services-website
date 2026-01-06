import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { serviceGroups } from "@/lib/data/services";
import { Button } from "../ui/button";

export function ServicesSnapshot() {
  return (
    <section
      className="w-full bg-background"
      aria-labelledby="services-heading"
    >
      <div className="grid grid-rows-[auto_1fr_auto] w-full px-4 md:px-16 py-14 gap-6 md:gap-10">
        {/* ───────────── TOP (1/5) ───────────── */}
        <div className="text-center flex flex-col items-center gap-4">
          {/* Left: Text */}
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

        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="col-span-2 md:col-span-1 relative aspect-4/3 w-full overflow-hidden rounded-sm">
            <Image
              src="/images/age-cymru-GPrh_GLiWCI-unsplash.jpg"
              alt="Warm assisted living environment"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm hidden md:block">
            <Image
              src="/images/age-cymru-bSXk1lOp8T0-unsplash.jpg"
              alt="Warm assisted living environment"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
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
                  // Add icons from health and saftey section layout
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
