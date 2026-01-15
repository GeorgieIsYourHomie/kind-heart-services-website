"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CustomImage } from "@/components/CustomImage";
import { aboutTabs } from "@/lib/content/about";
import { CustomButton } from "@/components/CustomButton";

export default function AboutPage() {
  // 1. tab state
  const [activeTab, setActiveTab] = useState("story");

  // 2. derived current tab
  const currentTab =
    aboutTabs.find((aboutTab) => aboutTab.id === activeTab) || aboutTabs[0];

  // 3. preload all tab images (prevents visible lag on switch)
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
        {/* intro (mobile) */}
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

          <CustomButton
            text="Experience Our Warmth"
            variant="outline"
            href="/#contact-section"
            size="lg"
            className="w-full sm:flex-1 md:hidden"
            ariaLabel="Connect With Us - navigate to contact section"
          />
        </section>

        {/* tabs + content */}
        <section className="w-full" aria-label="About sections">
          {/* mobile: tabs above content */}
          <div className="md:hidden mx-auto max-w-6xl px-6">
            <div
              role="tablist"
              aria-label="About us sections"
              className="mb-12 flex justify-center gap-8 border-b border-foreground/10"
            >
              {aboutTabs.map((aboutTab) => (
                <button
                  key={aboutTab.id}
                  type="button"
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

          {/* content panel */}
          <div
            role="tabpanel"
            id={`panel-${currentTab.id}`}
            aria-labelledby={`tab-${currentTab.id}`}
            className="grid grid-cols-1 md:grid-cols-2 gap-0"
          >
            <div className="md:hidden px-6 text-balance text-center">
              <h2 className="text-xl lg:text-3xl font-sans leading-tight tracking-tight mb-6">
                {currentTab.title}
              </h2>

              <p className="mb-6 leading-relaxed text-muted-foreground md:text-md">
                {currentTab.content}
              </p>
            </div>
            {/* image */}
            <div className="order-2 md:order-1 w-full">
              <CustomImage
                src={currentTab.image || "/placeholder.svg"}
                alt={currentTab.imageAlt}
                title={currentTab.label}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                wrapperClassName="w-full h-[420px] md:h-[600px] xl:h-[700px] overflow-hidden"
                imageClassName="object-cover object-center md:object-right lg:object-center"
              />
            </div>

            {/* text */}
            <div className="order-1 md:order-2 flex flex-col px-4 md:px-16">
              {/* desktop intro */}
              <header
                className="hidden xl:block mx-auto max-w-3xl py-16"
                aria-labelledby="about-intro-heading-desktop"
              >
                <h1
                  id="about-intro-heading-desktop"
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

              {/* desktop: tabs above text content */}
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
                        type="button"
                        role="tab"
                        aria-selected={activeTab === aboutTab.id}
                        aria-controls={`panel-${aboutTab.id}`}
                        id={`tab-${aboutTab.id}`}
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
