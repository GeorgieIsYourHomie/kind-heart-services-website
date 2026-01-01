import { Shield, Sparkles, Users } from "lucide-react";
import Image from "next/image";

const protocols = [
  {
    icon: Shield,
    title: "Health Protocols",
    description:
      "Regular health monitoring and professional nursing assessments",
  },
  {
    icon: Sparkles,
    title: "Cleanliness Standards",
    description: "Frequent disinfecting and rigorous hygiene practices",
  },
  {
    icon: Users,
    title: "Social Distancing",
    description: "Safe gathering spaces and physical distancing when needed",
  },
];

export function HealthSafetySection() {
  return (
    <section className="bg-primary/5 w-full">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] w-full px-4 md:px-16 py-14 gap-6 md:gap-10">
        <div className="w-full mx-auto text-foreground">
          <h2 className="max-w-6xl text-4xl md:text-5xl text-left text-balance font-serif leading-tight tracking-tight mb-6">
            Health & <span className="italic">Safety</span>
          </h2>
          <p className="text-muted-foreground text-lg text-left mb-12 text-pretty">
            Your loved one's safety and wellbeing are our top priorities
          </p>

          <div className="grid grid-cols-1 gap-6">
            {protocols.map((protocol) => (
              <div key={protocol.title} className="flex flex-row gap-4">
                <div className="shrink-0">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10">
                    <protocol.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-md mb-2">{protocol.title}</h4>
                  <p className="text-base leading-relaxed">
                    {protocol.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="relative w-full h-86 sm:h-80 md:h-full overflow-hidden rounded-sm">
          <Image
            src="/images/fanny-renaud-71KMQp-Qkvw-unsplash.jpg"
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
