export interface AssetRecord {
  localPath: string;
  sourceType: "Code-Native SVG Rendered to WebP" | "Local Typography WOFF2" | "Vector SVG Icon" | "Licensed Stock Photograph";
  sourcePage: string;
  creatorCredit: string;
  licenceReference: string;
  accessDate: string;
  subjectContext: string;
  permissionNotes: string;
  dimensions: { width: number; height: number };
  altStatus: "descriptive" | "decorative";
  altText: string;
  focalPoint: string;
  intendedPlacement: string;
}

export const registeredAssets: AssetRecord[] = [
{
  "localPath": "/images/stock/studio-collaboration.webp",
  "sourceType": "Licensed Stock Photograph",
  "sourcePage": "https://www.pexels.com/photo/office-team-looking-at-the-laptop-5466236/",
  "creatorCredit": "Antoni Shkraba",
  "licenceReference": "https://www.pexels.com/license/",
  "accessDate": "2026-10-28",
  "subjectContext": "Collaborators reviewing ideas around a laptop",
  "permissionNotes": "Licensed contextual photography; not evidence of staff, customers, client work, or ownership of a pictured interface.",
  "dimensions": {
    "width": 1600,
    "height": 1063
  },
  "altStatus": "descriptive",
  "altText": "Collaborators reviewing ideas around a laptop",
  "focalPoint": "center",
  "intendedPlacement": "Home hero, studio, process, about, contact, growth services"
},
{
  "localPath": "/images/stock/appointment-workspace.webp",
  "sourceType": "Licensed Stock Photograph",
  "sourcePage": "https://www.pexels.com/photo/woman-at-reception-desk-showing-a-calendar-to-a-man-6809657/",
  "creatorCredit": "Pavel Danilyuk",
  "licenceReference": "https://www.pexels.com/license/",
  "accessDate": "2026-10-28",
  "subjectContext": "A receptionist and visitor reviewing an appointment book",
  "permissionNotes": "Licensed contextual photography; not evidence of staff, customers, client work, or ownership of a pictured interface.",
  "dimensions": {
    "width": 1200,
    "height": 801
  },
  "altStatus": "descriptive",
  "altText": "A receptionist and visitor reviewing an appointment book",
  "focalPoint": "center",
  "intendedPlacement": "Booking concept and AI reception service"
},
{
  "localPath": "/images/stock/mobile-commerce.webp",
  "sourceType": "Licensed Stock Photograph",
  "sourcePage": "https://www.pexels.com/photo/photo-of-a-hand-holding-a-phone-with-a-delivery-app-on-screen-16052344/",
  "creatorCredit": "Erik Mclean",
  "licenceReference": "https://www.pexels.com/license/",
  "accessDate": "2026-10-28",
  "subjectContext": "A hand holding a smartphone showing a delivery interface",
  "permissionNotes": "Licensed contextual photography; not evidence of staff, customers, client work, or ownership of a pictured interface.",
  "dimensions": {
    "width": 1200,
    "height": 800
  },
  "altStatus": "descriptive",
  "altText": "A hand holding a smartphone showing a delivery interface",
  "focalPoint": "center",
  "intendedPlacement": "Home services, e-commerce concept, build service heroes"
},
{
  "localPath": "/images/stock/retail-checkout.webp",
  "sourceType": "Licensed Stock Photograph",
  "sourcePage": "https://www.pexels.com/photo/cashier-at-supermarket-checkout-counter-36772947/",
  "creatorCredit": "Radik 2707",
  "licenceReference": "https://www.pexels.com/license/",
  "accessDate": "2026-10-28",
  "subjectContext": "A cashier at a supermarket checkout counter",
  "permissionNotes": "Licensed contextual photography; not evidence of staff, customers, client work, or ownership of a pictured interface.",
  "dimensions": {
    "width": 1200,
    "height": 912
  },
  "altStatus": "descriptive",
  "altText": "A cashier at a supermarket checkout counter",
  "focalPoint": "center",
  "intendedPlacement": "Retail concept, operations service heroes"
},
  {
    localPath: "/src/assets/fonts/InstrumentSans-Latin-Variable.woff2",
    sourceType: "Local Typography WOFF2",
    sourcePage: "https://fontsource.org/fonts/instrument-sans",
    creatorCredit: "The Instrument Sans Project Authors",
    licenceReference: "SIL Open Font License 1.1 (public/licenses/INSTRUMENT_SANS_LICENSE)",
    accessDate: "2026-10-27",
    subjectContext: "Primary brand variable typeface (weights 400-700 normal)",
    permissionNotes: "Open font license permitting local distribution and bundling.",
    dimensions: { width: 0, height: 0 },
    altStatus: "decorative",
    altText: "",
    focalPoint: "center",
    intendedPlacement: "Root typography system via next/font/local",
  },
  {
    localPath: "/favicon.svg",
    sourceType: "Vector SVG Icon",
    sourcePage: "Original Studio Design",
    creatorCredit: "Studio Engineering",
    licenceReference: "Proprietary Workspace Asset",
    accessDate: "2026-10-27",
    subjectContext: "Browser tab icon featuring brand primary teal and terracotta accent",
    permissionNotes: "Original studio asset.",
    dimensions: { width: 32, height: 32 },
    altStatus: "decorative",
    altText: "Studio brand mark",
    focalPoint: "center",
    intendedPlacement: "Browser shortcut icon",
  },
  {
    localPath: "/images/products/espresso-beans.webp",
    sourceType: "Code-Native SVG Rendered to WebP",
    sourcePage: "Original Studio Design",
    creatorCredit: "Studio Engineering via Sharp WebP",
    licenceReference: "Proprietary Demonstration Asset",
    accessDate: "2026-10-27",
    subjectContext: "Sample product demonstration image for e-commerce store demo: Organic Coffee Roast",
    permissionNotes: "Synthetic studio demonstration asset.",
    dimensions: { width: 600, height: 600 },
    altStatus: "descriptive",
    altText: "Bag of whole bean organic coffee roast with green and cream label",
    focalPoint: "center",
    intendedPlacement: "E-commerce demonstration catalogue and checkout flow",
  },
  {
    localPath: "/images/products/ceramic-cup.webp",
    sourceType: "Code-Native SVG Rendered to WebP",
    sourcePage: "Original Studio Design",
    creatorCredit: "Studio Engineering via Sharp WebP",
    licenceReference: "Proprietary Demonstration Asset",
    accessDate: "2026-10-27",
    subjectContext: "Sample product demonstration image for e-commerce store demo: Ceramic Coffee Mug",
    permissionNotes: "Synthetic studio demonstration asset.",
    dimensions: { width: 600, height: 600 },
    altStatus: "descriptive",
    altText: "Handcrafted terracotta ceramic mug on warm neutral background",
    focalPoint: "center",
    intendedPlacement: "E-commerce demonstration catalogue",
  },
  {
    localPath: "/images/products/linen-apron.webp",
    sourceType: "Code-Native SVG Rendered to WebP",
    sourcePage: "Original Studio Design",
    creatorCredit: "Studio Engineering via Sharp WebP",
    licenceReference: "Proprietary Demonstration Asset",
    accessDate: "2026-10-27",
    subjectContext: "Sample product demonstration image for e-commerce store demo: Barista Linen Apron",
    permissionNotes: "Synthetic studio demonstration asset.",
    dimensions: { width: 600, height: 600 },
    altStatus: "descriptive",
    altText: "Dark charcoal washed linen workshop apron with pocket details",
    focalPoint: "center",
    intendedPlacement: "E-commerce demonstration catalogue",
  },
  {
    localPath: "/images/products/pour-over-kettle.webp",
    sourceType: "Code-Native SVG Rendered to WebP",
    sourcePage: "Original Studio Design",
    creatorCredit: "Studio Engineering via Sharp WebP",
    licenceReference: "Proprietary Demonstration Asset",
    accessDate: "2026-10-27",
    subjectContext: "Sample product demonstration image for e-commerce store demo: Gooseneck Drip Kettle",
    permissionNotes: "Synthetic studio demonstration asset.",
    dimensions: { width: 600, height: 600 },
    altStatus: "descriptive",
    altText: "Matte green gooseneck pour-over coffee kettle with ergonomic handle",
    focalPoint: "center",
    intendedPlacement: "E-commerce demonstration catalogue",
  },
];
