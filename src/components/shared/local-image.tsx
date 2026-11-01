import React from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/cn";

export interface LocalImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  isDecorative?: boolean;
  className?: string;
}

export function LocalImage({
  alt,
  isDecorative = false,
  className,
  ...props
}: LocalImageProps) {
  return (
    <Image
      alt={isDecorative ? "" : alt}
      aria-hidden={isDecorative ? "true" : undefined}
      className={cn("rounded-lg object-cover", className)}
      {...props}
    />
  );
}
