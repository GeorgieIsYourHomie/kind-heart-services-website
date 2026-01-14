"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { aboutTabs } from "@/lib/data/about";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("story");
  const currentTab =
    aboutTabs.find((aboutTab) => aboutTab.id === activeTab) || aboutTabs[0];

  // preload all tab images
  useEffect(() => {
    aboutTabs.forEach((aboutTab) => {
      const img = new window.Image();
      img.src = aboutTab.image;
    });
  }, []);
  return (
    <>
      <Navigation />
      <main className="bg-background scroll-mt-20">
        {/* Intro Section */}
        <section
          className="xl:hidden mx-auto max-w-3xl px-6 py-16 text-center md:py-24"
          aria-labelledby="about-intro-heading"
        >
          <h1
            id="about-intro-heading"
            className="text-foreground text-4xl md:text-5xl text-balance font-serif leading-tight tracking-tight mb-6"
          >
            <span>Who We </span>
            <span className="italic">Are </span>
          </h1>

          <p className="mx-auto mb-8 max-w-4xl text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
            We are a family-run assisted living home in Minnesota dedicated to
            providing compassionate, personalized care in a warm, home-like
            setting.
          </p>
        </section>

        {/* Tab Navigation */}
        <section className="w-full">
          {/* Mobile: Tabs above everything */}
          <div className="md:hidden mx-auto max-w-6xl px-6">
            <div
              role="tablist"
              aria-label="About us sections"
              className="mb-12 flex justify-center gap-8 border-b border-foreground/10"
            >
              {aboutTabs.map((aboutTab) => (
                <button
                  key={aboutTab.id}
                  role="tab"
                  aria-selected={activeTab === aboutTab.id}
                  aria-controls={`panel-${aboutTab.id}`}
                  id={`tab-${aboutTab.id}`}
                  onClick={() => setActiveTab(aboutTab.id)}
                  className={`cursor-pointer relative pb-4 font-serif text-lg transition-colors ${
                    activeTab === aboutTab.id
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {aboutTab.label}
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
            <div className="order-2 md:order-1 relative w-full h-100 md:h-[600] xl:h-[700] md:w-full overflow-hidden">
              <Image
                src={currentTab.image || "/placeholder.svg"}
                alt={currentTab.imageAlt}
                fill
                className="object-cover object-center md:object-right lg:object-center"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2 flex flex-col px-4 md:px-16">
              {/* Intro Section */}
              <header
                className="hidden xl:block mx-auto max-w-3xl py-16"
                aria-labelledby="about-intro-heading"
              >
                <h1
                  id="about-intro-heading"
                  className="max-w-3xl text-4xl md:text-6xl font-serif leading-tight mb-6"
                >
                  <span>Who We </span>
                  <span className="italic">Are </span>
                </h1>

                <p className="mx-auto mb-8 max-w-4xl text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
                  We are a family-run assisted living home in Minnesota
                  dedicated to providing compassionate, personalized care in a
                  warm, home-like setting.
                </p>
              </header>
              {/* Desktop: Tabs above text content */}
              <div className="hidden md:block mx-auto max-w-6xl w-full pb-8">
                <div className="mb-8">
                  <div
                    role="tablist"
                    aria-label="About us sections"
                    className="flex xl:justify-start gap-8 border-b border-[#E8DED0] pb-4"
                  >
                    {aboutTabs.map((aboutTab) => (
                      <button
                        key={aboutTab.id}
                        role="about tab"
                        aria-selected={activeTab === aboutTab.id}
                        aria-controls={`panel-${aboutTab.id}`}
                        id={`tab-desktop-${aboutTab.id}`}
                        onClick={() => setActiveTab(aboutTab.id)}
                        className={`leading-6 cursor-pointer relative pb-4 font-serif text-lg transition-colors ${
                          activeTab === aboutTab.id
                            ? "text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {aboutTab.label}
                      </button>
                    ))}
                  </div>
                </div>
                <h2 className="text-xl lg:text-3xl text-balance font-sans leading-tight tracking-tight mb-6">
                  {currentTab.title}
                </h2>
                <p className="mb-6 leading-relaxed text-muted-foreground md:text-md">
                  {currentTab.content}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
