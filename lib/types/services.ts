import { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  href: string;
  icon: LucideIcon;
  serviceSnapshotTitle: string;
  serviceSnapshotDescription: string;
  servicePageTitle: string;
  servicePageDescription: string;
  servicePageFeatures: string[];
};
