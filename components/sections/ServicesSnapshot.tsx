import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data/services";

export function ServicesSnapshot() {
  return (
    <section className="w-full bg-primary/5">
      <div className="min-h-dvh grid grid-rows-[auto_1fr_auto] w-full px-4 md:px-16 py-14 gap-6 md:gap-10">
        {/* ───────────── TOP (1/5) ───────────── */}
        <div className="flex flex-col items-start gap-4">
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
          <div className="col-span-2 md:col-span-1 relative aspect-5/4 w-full overflow-hidden rounded-sm">
            <Image
              src="/images/age-cymru-GPrh_GLiWCI-unsplash.jpg"
              alt="Warm assisted living environment"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="relative aspect-5/4 w-full overflow-hidden rounded-sm hidden md:block">
            <Image
              src="/images/age-cymru-bSXk1lOp8T0-unsplash.jpg"
              alt="Warm assisted living environment"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              // Don't render Health and Social
              if (
                service.serviceSnapshotTitle === "Transportation" ||
                service.serviceSnapshotTitle === "Social Activities"
              ) {
                return null; // don't render a card
              }

              return (
                <Link
                  key={service.serviceSnapshotTitle}
                  href={service.href}
                  className="block group"
                >
                  <div className="h-full transition-all border-2 hover:shadow-lg hover:border-primary/50 rounded-sm py-6 px-2">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-2">
                        {service.serviceSnapshotTitle}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {service.serviceSnapshotDescription}
                      </CardDescription>
                    </CardHeader>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
