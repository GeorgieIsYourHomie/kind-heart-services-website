import {
  Heart,
  Pill,
  Home,
  Car,
  Brain,
  Utensils,
  Activity,
  Users,
} from "lucide-react";
import type { Service } from "../types/services";

export const services: Service[] = [
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
    slug: "health-wellness",
    href: "/services#health-wellness",
    icon: Activity,
    serviceSnapshotTitle: "Health & Wellness",
    serviceSnapshotDescription:
      "Professional health monitoring and coordination with healthcare providers.",
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
  {
    slug: "transportation",
    href: "/services#transportation",
    icon: Car,
    serviceSnapshotTitle: "Transportation",
    serviceSnapshotDescription:
      "Reliable transportation for appointments and community outings.",
    servicePageTitle: "Transportation Services",
    servicePageDescription:
      "Safe, dependable transportation for medical appointments, errands, and community engagement.",
    servicePageFeatures: [
      "Medical appointments",
      "Shopping trips",
      "Social outings",
      "Family visits",
    ],
  },
  {
    slug: "memory-care",
    href: "/services#memory-care",
    icon: Brain,
    serviceSnapshotTitle: "Memory Care",
    serviceSnapshotDescription:
      "Specialized support for memory and cognitive challenges.",
    servicePageTitle: "Memory & Dementia Care",
    servicePageDescription:
      "Specialized care for individuals with Alzheimer’s, dementia, and other cognitive conditions.",
    servicePageFeatures: [
      "Cognitive stimulation",
      "Structured routines",
      "Enhanced safety protocols",
      "Family education and support",
    ],
  },
  {
    slug: "social-activities",
    href: "/services#social-activities",
    icon: Users,
    serviceSnapshotTitle: "Social Activities",
    serviceSnapshotDescription:
      "Engaging activities that foster connection and joy.",
    servicePageTitle: "Social & Recreational Activities",
    servicePageDescription:
      "Meaningful activities designed to promote social connection, mental stimulation, and emotional wellbeing.",
    servicePageFeatures: [
      "Group activities",
      "Entertainment events",
      "Outdoor excursions",
      "Creative programs",
    ],
  },
];
