import { serviceGroups } from "@/lib/data/services";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <div className="grid grid-rows-[auto_auto_1fr] gap-4 lg:gap-15 pt-14">
        {/* Header */}
        <div className="px-4 md:px-16 flex flex-col justify-center mb-12">
          <h1 className="text-4xl md:text-6xl text-balance font-serif leading-tight tracking-tight mb-6">
            Comprehensive assisted living services for the best{" "}
            <span className="italic">care.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mt-4">
            At Kind Heart Services, we provide a full range of personalized
            assisted living services designed to support independence, enhance
            quality of life, and ensure peace of mind for families in Minnesota.
          </p>
        </div>
        {/* Image */}
        <div className="px-4 md:px-16 pb-16">
          {/* Image container */}
          <div className="h-96 w-full overflow-hidden rounded-sm relative">
            <Image
              src="/images/the-unmistakables-suNS4qGA1i0-unsplash.jpg"
              alt="Residents receiving compassionate care in our Minnesota assisted living facility"
              fill
              className="object-cover object-center xl:object-[center_35%]"
              priority
            />
          </div>
        </div>

        {/* Services content */}
        <section
          className="bg-primary grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-16 px-4 md:px-16 py-14 pb-16"
          aria-labelledby="services-heading"
        >
          {serviceGroups.map((group) => {
            return (
              <article
                key={group.id}
                className="text-background flex flex-col gap-8 lg:gap-12"
              >
                {/* Service group title */}
                <div className="flex flex-col gap-4">
                  <h2 className="font-serif font-semibold">{group.title}</h2>
                  <p className="text-xl lg:text-3xl text-balance font-sans leading-tight tracking-tight">
                    {group.description}
                  </p>
                </div>

                {/* Service group services */}
                <div
                  className="flex flex-col gap-6"
                  role="list"
                  aria-label={`${group.title} services`}
                >
                  {group.services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.slug}
                        className="flex gap-4"
                        role="listitem"
                      >
                        <div className="shrink-0" aria-hidden="true">
                          <div className="w-12 h-12 rounded-sm bg-accent/20 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-accent" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-md mb-2">
                            {service.serviceSnapshotTitle}
                          </h3>
                          <p className="text-background/90 text-base leading-relaxed">
                            {service.serviceSnapshotDescription}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
