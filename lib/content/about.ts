import type { AboutTab } from "@/lib/types/about";
import { siteImages } from "./images";

export const aboutTabs: AboutTab[] = [
  {
    id: "story",
    label: "Our Story",
    title: "A Home Built on Love and Family Values",
    content:
      "Kind Heart Services was founded to create a true home for seniors in Minnesota. As a family-run assisted living residence, we focus on personalized care, consistency, and meaningful relationships. Every resident is supported by caregivers who truly know and care for them.",
    image: siteImages.about.src.story,
    imageAlt: siteImages.about.alt.story,
  },
  {
    id: "mission",
    label: "Our Mission",
    title: "Care That Honors Independence and Wellbeing",
    content:
      "Our mission is to To provide personalized assisted living care that supports comfort, connection, and peace of mind for residents and families.",
    image: siteImages.about.src.mission,
    imageAlt: siteImages.about.alt.mission,
  },
  {
    id: "vision",
    label: "Our Vision",
    title: "A Future Where Aging is Peaceful and Dignified",
    content:
      "Our vision is simple: To create a future where assisted living feels personal, peaceful, and truly supportive. A place where seniors can age gracefully, surrounded by care and kindness.",
    image: siteImages.about.src.vision,
    imageAlt: siteImages.about.alt.vision,
  },
];
