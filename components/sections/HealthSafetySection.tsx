import { Shield, Sparkles, Users } from "lucide-react";
import { CustomImage } from "../CustomImage";
import { siteImages } from "@/lib/content/images";
import { healthSafetyProtocols } from "@/lib/content/health-safety";

export function HealthSafetySection() {
  return (
    <section
      className="bg-primary/5 w-full"
      aria-labelledby="health-safety-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] w-full px-4 md:px-16 py-14 gap-6 md:gap-10">
        {/* content */}
        <div className="w-full mx-auto text-foreground">
          <h2
            id="health-safety-heading"
            className="max-w-6xl text-4xl md:text-5xl text-left text-balance font-serif leading-tight tracking-tight mb-6"
          >
            Health & <span className="italic">Safety</span>
          </h2>

          <p className="text-muted-foreground text-lg text-left mb-12 text-pretty">
            Your loved one's safety and wellbeing are our top priorities. We
            maintain rigorous health protocols, cleanliness standards, and safe
            social practices to ensure a secure and healthy living environment.
          </p>

          <div
            className="grid grid-cols-1 gap-6"
            role="list"
            aria-label="Health and safety protocols"
          >
            {healthSafetyProtocols.map((protocol) => (
              <article
                key={protocol.title}
                className="flex flex-row gap-4"
                role="listitem"
              >
                <div className="shrink-0" aria-hidden="true">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10">
                    <protocol.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-md mb-2">
                    {protocol.title}
                  </h3>
                  <p className="text-base leading-relaxed">
                    {protocol.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* image */}
        <div className="w-full">
          <CustomImage
            src={siteImages.home.src.healthSafety}
            alt={siteImages.home.alt.healthSafety}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            wrapperClassName="w-full h-[360px] md:h-full overflow-hidden rounded-sm"
            imageClassName="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
