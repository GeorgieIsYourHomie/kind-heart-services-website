"use client";

import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

type CustomImageProps = {
  // wrapper controls container layout (size, radius, overflow, shadow, etc.)
  wrapperClassName?: string;

  // image controls object-fit and positioning
  imageClassName?: string;

  // optional link behavior
  href?: string;
  target?: string;
  rel?: string;

  // hover tooltip
  title?: string;

  // accessibility
  alt: string;

  // next/image core props
  src: ImageProps["src"];
  fill?: boolean;
  sizes?: string;
  priority?: boolean;

  // optional semantics
  ariaHidden?: boolean;
};

export function CustomImage({
  wrapperClassName,
  imageClassName,
  href,
  target,
  rel,
  title,
  alt,
  src,
  fill = true,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  ariaHidden,
}: CustomImageProps) {
  // 1. track load state (visual only)
  const [loaded, setLoaded] = useState(false);

  const image = (
    <div
      className={cn("relative overflow-hidden", wrapperClassName)}
      title={title}
      aria-hidden={ariaHidden}
    >
      {/* 2. soft skeleton overlay (never blocks image) */}
      {!loaded && <Skeleton className="absolute inset-0 h-full w-full z-10" />}

      {/* 3. image always renders */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={cn(
          "object-cover transition-opacity duration-200",
          loaded ? "opacity-100" : "opacity-100",
          imageClassName
        )}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );

  // 4. optional link wrapper
  if (!href) return image;

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      aria-label={title || alt}
      className="block"
    >
      {image}
    </Link>
  );
}
