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
    <section className="w-full bg-primary/5">
      <div className="grid grid-rows-[auto_1fr_auto] w-full px-4 md:px-16 py-14 gap-6 md:gap-10">
        {/* ───────────── TOP (1/5) ───────────── */}
        <div className="text-center flex flex-col items-center gap-4">
          {/* Left: Text */}
          <h2 className="text-4xl md:text-5xl text-balance font-serif leading-tight tracking-tight mb-6">
            <span className="italic">Care </span>
            <span>Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            We offer a full range of personalized services designed to support
            independence and enhance quality of life.
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
        <div className="w-full flex flex-col justify-center gap-4 md:gap-6">
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
                  <div key={service.slug} className="flex flex-row gap-4">
                    <div className="shrink-0">
                      <div className="bg-primary/10 w-11 h-11 rounded-sm bg-accent/20 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-md mb-2">
                        {service.serviceSnapshotTitle}
                      </h4>
                      <p className="text-background/90 text-muted-foreground text-base leading-relaxed">
                        {service.serviceSnapshotDescription}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="w-full md:w-auto"
              asChild
            >
              <Link href="/services" className="inline-flex">
                See All Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
