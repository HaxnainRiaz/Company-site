import React from "react";
import Link from "next/link";
import { navigationServices } from "@/content/navigation";
import { serviceGroupLabels } from "@/content/site";

export interface ServicesMenuProps {
  onItemClick?: () => void;
}

export function ServicesMenu({ onItemClick }: ServicesMenuProps) {
  const groups = ["build-sell", "automate-operate", "attract-grow"] as const;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white border border-border rounded-xl shadow-lg w-full max-w-[840px]">
      {groups.map((group) => {
        const items = navigationServices.filter((s) => s.group === group);
        return (
          <div key={group} className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent border-b border-border/60 pb-1.5">
              {serviceGroupLabels[group]}
            </div>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={item.href}
                    onClick={onItemClick}
                    className="group block p-2 -mx-2 rounded-lg hover:bg-surface-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    <div className="text-sm font-medium text-ink group-hover:text-primary transition-colors">
                      {item.label}
                    </div>
                    <p className="text-xs text-ink-muted leading-snug mt-0.5 line-clamp-2">
                      {item.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
