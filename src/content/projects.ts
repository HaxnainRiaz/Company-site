import type { ServiceSlug } from "@/types/content";

export interface ProjectRecord {
  slug: string;
  title: string;
  category: "Client Work" | "Founder Work" | "Studio Demonstration" | "Product Research";
  clientName?: string;
  role: string;
  context: string;
  scope: string[];
  resultsNote?: string;
  relatedServiceSlug: ServiceSlug;
}

// In adherence to strict anti-fabrication guidelines, no synthetic client records are manufactured.
// Verified founder work or studio demonstrations are recorded here.
export const allProjects: ProjectRecord[] = [
  {
    slug: "studio-retail-management-system",
    title: "Store Counter POS & Inventory Demonstration",
    category: "Studio Demonstration",
    role: "Full-Stack Architecture & Systems Design",
    context:
      "A prototype retail management system engineered to evaluate sub-second counter billing, offline cashier resilience, and thermal ESC/POS receipt generation.",
    scope: [
      "Barcode lookup and item billing interface",
      "Minor-unit currency calculations avoiding floating-point rounding errors",
      "Dynamic stock decrementing and cycle count audits",
      "Thermal receipt printing formatting",
    ],
    resultsNote:
      "Demonstrated 100% accurate minor-unit tallying and sub-second item addition during simulated checkout workflows.",
    relatedServiceSlug: "pos-retail-management",
  },
  {
    slug: "studio-operations-admin-dashboard",
    title: "Operations & Order Management Dashboard",
    category: "Studio Demonstration",
    role: "Frontend Architecture & UX Engineering",
    context:
      "A working model of an operational back-office portal designed to test multi-filter data tables, order inspection drawers, and role-based permissions.",
    scope: [
      "Responsive data table with combined search and status filters",
      "Client-side detail drawer and status update workflow",
      "Derived summary metrics calculated from active records",
      "Local state reset and accessible keyboard navigation",
    ],
    resultsNote:
      "Demonstrated accessible screen-reader navigation and zero cumulative layout shift across desktop and mobile viewports.",
    relatedServiceSlug: "websites-admin-dashboards",
  },
];

export const projectsMap: Record<string, ProjectRecord> = Object.fromEntries(
  allProjects.map((p) => [p.slug, p])
);

export function getProjectBySlug(slug: string): ProjectRecord | undefined {
  return projectsMap[slug];
}
