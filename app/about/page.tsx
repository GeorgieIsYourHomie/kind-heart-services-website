"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tabs = [
  {
    id: "story",
    label: "Our Story",
    title: "A Home Built on Love and Family Values",
    content:
      "Kind Heart Services was founded to create a true home for seniors in Minnesota. As a family-run assisted living residence, we focus on personalized care, consistency, and meaningful relationships. Every resident is supported by caregivers who truly know and care for them.",
    image: "/images/pexels-jsme-mila-523821574-18459207.jpg",
    imageAlt:
      "Caregivers having a warm conversation with a resident in a comfortable living space",
  },
  {
    id: "mission",
    label: "Our Mission",
    title: "Care That Honors Independence and Wellbeing",
    content:
      "Our mission is to To provide personalized assisted living care that supports comfort, connection, and peace of mind for residents and families.",
    image: "/images/pexels-jsme-mila-523821574-29372710.jpg",
    imageAlt: "Caregiver gently supporting a resident during a daily activity",
  },
  {
    id: "vision",
    label: "Our Vision",
    title: "A Future Where Aging is Peaceful and Dignified",
    content:
      "Our vision is simple: To create a future where assisted living feels personal, peaceful, and truly supportive. A place where seniors can age gracefully, surrounded by care and kindness.",
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
        <section
          className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24"
          aria-labelledby="about-intro-heading"
        >
          <h1
            id="about-intro-heading"
            className="text-foreground text-4xl md:text-5xl text-balance font-serif leading-tight tracking-tight mb-6"
          >
            <span>Who We </span>
            <span className="italic">Are </span>
          </h1>

          <p className="mx-auto mb-8 max-w-4xl text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            We are a family-run assisted living home in Minnesota dedicated to
            providing compassionate, personalized care in a warm, home-like
            setting. Every resident is treated with tenderness, respect, and
            genuine kindness—because this is more than a residence. It's a home
            where seniors can age with grace, surrounded by people who truly
            care about their wellbeing and happiness.
          </p>

          <Button className="w-auto" asChild size="lg">
            <Link
              href="https://calendly.com/kindheartservicesllc/30min"
              target="blank"
              className="flex justify-center items-center"
              aria-label="Schedule a tour of our Minnesota assisted living facility"
            >
              Arrange Your Visit
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </section>

        {/* Tab Navigation */}
        <section className="w-full">
          <div className="mx-auto max-w-6xl px-6 pb-16">
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
                  className={`cursor-pointer relative pb-4 font-serif text-lg transition-colors ${
                    activeTab === tab.id
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div
            role="tabpanel"
            id={`panel-${currentTab.id}`}
            aria-labelledby={`tab-${currentTab.id}`}
            className="grid grid-cols-1 md:grid-cols-2 gap-0"
          >
            {/* Image */}
            <div className="order-2 md:order-1 relative w-full h-86 sm:h-80 md:h-full overflow-hidden">
              <Image
                src={currentTab.image || "/placeholder.svg"}
                alt={currentTab.imageAlt}
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2 flex flex-col justify-center px-4 md:px-16 py-8 md:py-14">
              <h2 className="font-serif text-3xl mb-6">{currentTab.title}</h2>
              <p className="mb-6 leading-relaxed text-muted-foreground md:text-lg">
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
