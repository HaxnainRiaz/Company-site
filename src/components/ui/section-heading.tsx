import React from "react";
import { cn } from "@/lib/cn";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  headingLevel?: "h1" | "h2" | "h3";
  id?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  headingLevel = "h2",
  id,
  align = "left",
  className,
}: SectionHeadingProps) {
  const HeadingTag = headingLevel;

  const headingStyles = {
    h1: "text-[30px] sm:text-[44px] md:text-[56px] leading-[1.18] font-medium text-ink",
    h2: "text-[24px] sm:text-[32px] md:text-[38px] leading-[1.24] font-medium text-ink",
    h3: "text-[20px] sm:text-[22px] leading-[1.3] font-medium text-ink",
  };

  const alignStyles = {
    left: "text-left",
    center: "text-center mx-auto",
  };

  return (
    <div className={cn("max-w-[760px] mb-8 sm:mb-12", alignStyles[align], className)}>
      {eyebrow && (
        <div className="text-[13px] sm:text-[14px] font-medium tracking-wide text-accent mb-2 uppercase">
          {eyebrow}
        </div>
      )}
      <HeadingTag id={id} className={headingStyles[headingLevel]}>
        {title}
      </HeadingTag>
      {description && (
        <p className="mt-3 text-[16px] sm:text-[17px] text-ink-muted leading-[1.65]">
          {description}
        </p>
      )}
    </div>
  );
}
