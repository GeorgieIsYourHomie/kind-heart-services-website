import { Shield, Sparkles, Users } from "lucide-react"

const protocols = [
  {
    icon: Shield,
    title: "Health Protocols",
    description: "Regular health monitoring and professional nursing assessments",
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
]

export function HealthSafetySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center text-balance">Health & Safety</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 text-pretty">
            Your loved one's safety and wellbeing are our top priorities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {protocols.map((protocol) => (
              <div key={protocol.title} className="text-center">
                <div className="inline-flex p-4 bg-secondary/20 rounded-full mb-4">
                  <protocol.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{protocol.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{protocol.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
