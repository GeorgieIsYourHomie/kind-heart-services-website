export type FAQItem = {
  id: string; // stable key for UI + schema
  question: string; // H3 / Accordion title
  answer: string; // short, plain-language answer
  category?:
    | "general"
    | "services"
    | "care"
    | "daily-life"
    | "family"
    | "tour-next-steps";
  keywords?: string[]; // optional: helpful for search/filter UI
};
