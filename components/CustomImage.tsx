"use client";

import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
  // 1. image wrapper (controls layout + clipping)
  const image = (
    <div
      className={cn("relative overflow-hidden", wrapperClassName)}
      title={title}
      aria-hidden={ariaHidden}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );

  // 2. optional link wrapper
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
