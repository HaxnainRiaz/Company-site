"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { navigationServices, primaryNavLinks } from "@/content/navigation";
import { serviceGroupLabels, siteConfig } from "@/content/site";
import { LinkButton } from "@/components/ui/link-button";

export function MobileNavigation() {
  const pathname = usePathname();
  return <MobileNavigationContent key={pathname} />;
}

function MobileNavigationContent() {
  const [isOpen, setIsOpen] = useState(false);

  const bookingHref = siteConfig.schedulingUrl || "/contact?service=discovery-call";
  const groups = ["build-sell", "automate-operate", "attract-grow"] as const;

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open mobile navigation menu"
          className="lg:hidden p-2 rounded-lg text-ink hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200" />
        <Dialog.Content aria-describedby={undefined} className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-canvas p-6 shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-250">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <Dialog.Title className="text-base font-semibold text-ink">
                Navigation Menu
              </Dialog.Title>
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-surface-muted min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-focus"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </Dialog.Close>
            </div>

            <Dialog.Description className="sr-only">
              Browse site routes, service categories, and company information.
            </Dialog.Description>

            {/* Quick Links */}
            <div className="py-4 border-b border-border/60 space-y-1">
              {primaryNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-ink hover:text-primary hover:bg-surface-muted rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Grouped Services */}
            <div className="py-4 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-ink">
                All Services
              </div>

              {groups.map((group) => {
                const items = navigationServices.filter((s) => s.group === group);
                return (
                  <div key={group} className="space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {serviceGroupLabels[group]}
                    </div>
                    <ul className="space-y-1 pl-2 border-l-2 border-border">
                      {items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-1.5 px-2 text-sm text-ink-muted hover:text-primary hover:bg-surface-muted rounded-md transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-border space-y-3">
            <LinkButton
              href={bookingHref}
              variant="primary"
              size="normal"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Book a Discovery Call
            </LinkButton>
            <p className="text-xs text-center text-ink-muted">
              Direct consultation with senior engineering leads.
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
