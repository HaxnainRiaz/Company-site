"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ServicesMenu } from "./services-menu";
import { LinkButton } from "@/components/ui/link-button";
import { primaryNavLinks } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";

export function DesktopNavigation() {
  const pathname = usePathname();
  return <DesktopNavigationContent key={pathname} pathname={pathname} />;
}

function DesktopNavigationContent({ pathname }: { pathname: string }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close dropdown on click outside or Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        toggleRef.current?.focus();
      }
    }

    if (isServicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isServicesOpen]);

  const bookingHref = siteConfig.schedulingUrl || "/contact?service=discovery-call";

  return (
    <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7">
      <div className="relative" ref={dropdownRef}>
        <div className="flex items-center gap-1">
          <Link
            href="/services"
            className={cn(
              "text-[15px] font-medium transition-colors py-2 rounded-xs",
              pathname.startsWith("/services")
                ? "text-primary font-semibold"
                : "text-ink hover:text-primary"
            )}
          >
            Services
          </Link>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={isServicesOpen}
            aria-haspopup="true"
            aria-label="Toggle Services menu"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className="p-1 text-ink-muted hover:text-primary rounded-md transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus cursor-pointer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn("transition-transform duration-150", isServicesOpen && "rotate-180")}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>

        {isServicesOpen && (
          <div className="services-popover">
            <ServicesMenu onItemClick={() => setIsServicesOpen(false)} />
          </div>
        )}
      </div>

      {primaryNavLinks
        .filter((link) => link.href !== "/services" && link.href !== "/pricing")
        .map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[15px] font-medium transition-colors py-2 rounded-xs",
                isActive
                  ? "text-primary font-semibold"
                  : "text-ink hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          );
        })}

      <div className="pl-2">
        <LinkButton href={bookingHref} variant="primary" size="small">
          Let us talk ↗
        </LinkButton>
      </div>
    </nav>
  );
}
