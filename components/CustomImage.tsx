"use client";

import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

type CustomImageProps = {
  // wrapper controls the container (size, radius, overflow, shadows, etc.)
  wrapperClassName?: string;

  // image controls object-fit and positioning
  imageClassName?: string;

  // optional link behavior
  href?: string;
  target?: string;
  rel?: string;

  // hover tooltip
  title?: string;

  // alt text for accessibility
  alt: string;

  // next/image core props
  src: ImageProps["src"];
  fill?: boolean;
  sizes?: string;
  priority?: boolean;

  // optional placeholder behavior
  placeholder?: "empty" | "blur";
  blurDataURL?: string;

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
  placeholder = "empty",
  blurDataURL,
  ariaHidden,
}: CustomImageProps) {
  // 1. track load state for smooth transitions + skeleton
  const [loaded, setLoaded] = useState(false);

  const content = (
    <div
      className={cn("relative overflow-hidden", wrapperClassName)}
      title={title}
      aria-hidden={ariaHidden}
    >
      {/* 2. skeleton loader while the image is decoding */}
      {!loaded && <Skeleton className="absolute inset-0 h-full w-full" />}

      {/* 3. image fades in when ready */}
      <Image
        // key helps prevent "old image" linger on src swap in dynamic UIs
        key={typeof src === "string" ? src : undefined}
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={cn(
          "transition-opacity duration-200",
          loaded ? "opacity-100" : "opacity-0",
          imageClassName
        )}
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );

  // 4. optional link wrapper
  if (!href) return content;

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      aria-label={title || alt}
      className="block"
    >
      {content}
    </Link>
  );
}
