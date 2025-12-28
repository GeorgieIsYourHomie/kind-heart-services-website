import {
  Heart,
  Pill,
  Home,
  Brain,
  Utensils,
  Activity,
} from "lucide-react";
import type { ServiceGroup } from "../types/services";

export const serviceGroups: ServiceGroup[] = [
  {
    id: "core-care",
    title: "Core Care & Daily Support",
    description:
      "Foundational support that ensures comfort, dignity, and safety throughout daily life.",
    services: [
      {
        slug: "adl-support",
        href: "/services#adl-support",
        icon: Heart,
        serviceSnapshotTitle: "Daily Living Assistance",
        serviceSnapshotDescription:
          "Compassionate support with bathing, dressing, grooming, and mobility.",
        servicePageTitle: "Activities of Daily Living (ADL) Support",
        servicePageDescription:
          "Compassionate assistance with bathing, dressing, grooming, toileting, and mobility. Our trained caregivers help maintain dignity and independence while ensuring safety and comfort.",
        servicePageFeatures: [
          "Personal hygiene assistance",
          "Dressing and grooming",
          "Mobility support",
          "Toileting care",
        ],
      },
      {
        slug: "housekeeping",
        href: "/services#housekeeping",
        icon: Home,
        serviceSnapshotTitle: "Housekeeping & Laundry",
        serviceSnapshotDescription:
          "A clean, comfortable living environment maintained with care.",
        servicePageTitle: "Housekeeping & Laundry",
        servicePageDescription:
          "Routine housekeeping and personal laundry services that promote comfort, cleanliness, and dignity.",
        servicePageFeatures: [
          "Room cleaning",
          "Bed linen changes",
          "Personal laundry",
          "Common area maintenance",
        ],
      },
      {
        slug: "meals",
        href: "/services#meals",
        icon: Utensils,
        serviceSnapshotTitle: "Nutritious Meals",
        serviceSnapshotDescription:
          "Home-cooked meals prepared with dietary needs in mind.",
        servicePageTitle: "Nutritious Meals",
        servicePageDescription:
          "Fresh, home-cooked meals prepared daily with attention to nutrition, dietary restrictions, and personal preferences.",
        servicePageFeatures: [
          "Three meals daily plus snacks",
          "Special diet accommodations",
          "Fresh ingredients",
          "Shared dining experiences",
        ],
      },
    ],
  },

  {
    id: "health-safety",
    title: "Health & Safety Oversight",
    description:
      "Thoughtful medical oversight and medication support to promote wellbeing and peace of mind.",
    services: [
      {
        slug: "medication-management",
        href: "/services#medication-management",
        icon: Pill,
        serviceSnapshotTitle: "Medication Management",
        serviceSnapshotDescription:
          "Safe and accurate medication support tailored to individual needs.",
        servicePageTitle: "Medication Management",
        servicePageDescription:
          "Professional oversight to ensure medications are administered safely, correctly, and on schedule.",
        servicePageFeatures: [
          "Medication reminders",
          "Prescription tracking",
          "Doctor coordination",
          "Safe storage",
        ],
      },
      {
        slug: "health-wellness",
        href: "/services#health-wellness",
        icon: Activity,
        serviceSnapshotTitle: "Health & Wellness",
        serviceSnapshotDescription:
          "Ongoing health monitoring and coordination with healthcare providers.",
        servicePageTitle: "Health & Wellness Support",
        servicePageDescription:
          "Ongoing health oversight, RN coordination, and wellness monitoring to support overall physical and mental wellbeing.",
        servicePageFeatures: [
          "Regular RN assessments",
          "Vital signs monitoring",
          "Care coordination",
          "Wellness planning",
        ],
      },
    ],
  },

  {
    id: "engagement",
    title: "Structured Routines & Engagement",
    description:
      "Predictable routines and meaningful engagement that support orientation, confidence, and connection.",
    services: [
      {
        slug: "structured-engagement",
        href: "/services#structured-engagement",
        icon: Brain,
        serviceSnapshotTitle: "Structured Daily Routines",
        serviceSnapshotDescription:
          "Consistent routines and purposeful engagement that foster comfort and familiarity.",
        servicePageTitle: "Structured Routines & Cognitive Engagement",
        servicePageDescription:
          "Our care is built around predictable daily rhythms and purposeful engagement. Familiar routines, gentle guidance, and meaningful activities help residents feel grounded, confident, and connected throughout the day.",
        servicePageFeatures: [
          "Consistent daily schedules",
          "Cognitive-friendly activity planning",
          "Gentle cueing and redirection",
          "Familiar routines that reduce anxiety",
          "Purposeful social interaction",
          "Individualized engagement based on abilities",
        ],
      },
    ],
  },
];
