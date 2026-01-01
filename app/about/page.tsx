"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Image from "next/image";

const tabs = [
  {
    id: "story",
    label: "Our Story",
    title: "A Home Built on Love and Family Values",
    content:
      "Our assisted living home was founded with a simple belief: that every senior deserves to live with dignity, warmth, and genuine care. Started by a family who experienced firsthand the challenge of finding compassionate, personalized care for a loved one, we created the kind of place we wished had existed—a true home, not an institution. Every day, we honor that commitment with consistency, respect, and unwavering dedication to the people we serve.",
    image: "/images/pexels-jsme-mila-523821574-18459207.jpg",
    imageAlt:
      "Caregiver having a warm conversation with a resident in a comfortable living space",
  },
  {
    id: "mission",
    label: "Our Mission",
    title: "Care That Honors Independence and Wellbeing",
    content:
      "Our mission is to provide daily care that balances safety with freedom, support with independence. We believe in treating each resident as an individual—honoring their preferences, their pace, and their dignity. From shared meals to quiet conversations, we focus on emotional wellbeing just as much as physical health. Our caregivers are not just staff; they are companions who listen, respect, and truly care.",
    image: "/images/pexels-jsme-mila-523821574-29372710.jpg",
    imageAlt: "Caregiver gently supporting a resident during a daily activity",
  },
  {
    id: "vision",
    label: "Our Vision",
    title: "A Future Where Aging is Peaceful and Dignified",
    content:
      "We envision a community where aging is not something to fear, but a natural stage of life met with grace, comfort, and connection. Our long-term commitment is to continually elevate the quality of care—creating environments filled with natural light, calm moments, and meaningful relationships. We believe in aging with dignity, surrounded by people who see you, know you, and care deeply about your wellbeing.",
    image: "/images/pexels-arthur-swiffen-172080999-14185266.jpg",
    imageAlt:
      "Residents enjoying a peaceful moment in a naturally lit common area",
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("story");
  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <>
      <Navigation />
      <main className="min-h-dvh bg-[#FAF8F5]">
        {/* Intro Section */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <div className="mb-6 inline-flex items-center rounded-full border border-[#D4C4B0] bg-white px-4 py-1.5">
            <span className="font-serif text-sm text-[#6B5D4F]">
              Who We Are
            </span>
          </div>

          <p className="mx-auto mb-8 max-w-2xl font-serif text-lg leading-relaxed text-[#3D3630] md:text-xl">
            We are a family-run assisted living home dedicated to providing
            compassionate, personalized care in a warm, home-like environment.
            Every resident is treated with dignity, respect, and genuine
            kindness—because this is more than a residence. It's a home.
          </p>

          <Button
            size="lg"
            className="bg-[#8B7355] text-white hover:bg-[#6B5D4F]"
          >
            Schedule a Tour
          </Button>
        </section>

        {/* Tab Navigation */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div
            role="tablist"
            aria-label="About us sections"
            className="mb-12 flex justify-center gap-8 border-b border-[#E8DED0]"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-4 font-serif text-lg transition-colors ${
                  activeTab === tab.id
                    ? "text-[#8B7355]"
                    : "text-[#6B5D4F] hover:text-[#8B7355]"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B7355]" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            role="tabpanel"
            id={`panel-${currentTab.id}`}
            aria-labelledby={`tab-${currentTab.id}`}
            className="grid gap-8 md:grid-cols-2 md:gap-12"
          >
            {/* Image */}
            <div className="h-[400] order-2 md:order-1 w-full overflow-hidden rounded-sm">
              <Image
                width={600}
                height={400}
                src={currentTab.image || "/placeholder.svg"}
                alt={currentTab.imageAlt}
                className="h-full w-full rounded-2xl object-cover object-center"
              />
            </div>

            {/* Text Content */}
            <div className="order-1 flex flex-col justify-center md:order-2">
              <h2 className="mb-4 font-serif text-3xl leading-tight text-[#3D3630] md:text-4xl">
                {currentTab.title}
              </h2>
              <p className="mb-6 leading-relaxed text-[#5A4F43] md:text-lg">
                {currentTab.content}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
