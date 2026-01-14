import { Shield, Sparkles, Users } from "lucide-react";
import type { HealthSafetyProtocol } from "@/lib/types/health-safety";

export const healthSafetyProtocols: HealthSafetyProtocol[] = [
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
