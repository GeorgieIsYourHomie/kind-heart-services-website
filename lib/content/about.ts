import type { AboutTab } from "@/lib/types/about";
import { siteImages } from "./images";

export const aboutTabs: AboutTab[] = [
  {
    id: "story",
    label: "Our Story",
    title: "A Home Built on Love and Family Values",
    content:
      "Kind Heart Services was founded to create a true home for seniors in Minnesota...",
    image: siteImages.about.story,
    imageAlt:
      "Caregivers having a warm conversation with a resident in a comfortable living space",
  },
  {
    id: "mission",
    label: "Our Mission",
    title: "Care That Honors Independence and Wellbeing",
    content:
      "Our mission is to provide personalized assisted living care that supports comfort, connection, and peace of mind for residents and families.",
    image: siteImages.about.mission,
    imageAlt: "Caregiver gently supporting a resident during a daily activity",
  },
  {
    id: "vision",
    label: "Our Vision",
    title: "A Future Where Aging is Peaceful and Dignified",
    content:
      "Our vision is simple: To create a future where assisted living feels personal, peaceful, and truly supportive...",
    image: siteImages.about.vision,
    imageAlt:
      "Residents enjoying a peaceful moment in a naturally lit common area",
  },
];
