"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Grain } from "./Grain";
import { CineMedia } from "@/components/motion/CineMedia";

interface EditorialImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  aspect?: string;
}

export function EditorialImage({
  src,
  alt,
  priority,
  className,
  aspect,
}: EditorialImageProps) {
  return (
    <CineMedia rootClassName={cn(aspect, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="hero-image-cinematic object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <Grain />
    </CineMedia>
  );
}
