"use client";

import { serviceGroups } from "@/lib/data/services";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ServicesPage() {
  // State to track the active service group
  const [activeGroup, setActiveGroup] = useState("core-care");
  function handleGroupClick(groupId: string) {
    setActiveGroup(groupId);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }

  return (
    <main className="bg-background">
      <div className="grid grid-rows-[auto_auto_1fr] gap-4 lg:gap-15 pt-14">
        {/* Header */}
        <div className="px-4 md:px-16 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl text-balance font-serif leading-tight tracking-tight mb-6">
            The services we offer for the best{" "}
            <span className="italic">care.</span>
          </h1>
        </div>
        {/* Image */}
        <div className="px-4 md:px-16">
          {/* Image container */}
          <div className="h-96 w-full overflow-hidden rounded-sm relative">
            <Image
              src="/images/the-unmistakables-suNS4qGA1i0-unsplash.jpg"
              alt="Warm assisted living environment"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Services content */}
        <div className="bg-primary grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-16 px-4 md:px-16 py-14 pb-16">
          {serviceGroups.map((group) => {
            return (
              <div key={group.id} className="text-background flex flex-col gap-8 lg:gap-12">
                {/* Service group title */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-serif font-semibold">{group.title}</h3>
                  <p className="text-xl lg:text-3xl text-balance font-sans leading-tight tracking-tight">
                    {group.description}
                  </p>
                </div>

                {/* Service group services */}
                <div className="flex flex-col gap-6 ">
                  {group.services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div key={service.slug} className="flex gap-4">
                        <div className="shrink-0">
                          <div className="w-8 h-8 rounded-sm bg-accent/20 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-accent" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-md mb-2">
                            {service.serviceSnapshotTitle}
                          </h4>
                          <p className="text-background/90 text-base leading-relaxed">
                            {service.serviceSnapshotDescription}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
