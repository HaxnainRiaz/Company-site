import React from "react";
import { cn } from "@/lib/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  const sizeStyles = {
    default: "max-w-[1240px]",
    narrow: "max-w-[760px]",
    wide: "max-w-[1280px]",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-5 sm:px-7 md:px-8",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
