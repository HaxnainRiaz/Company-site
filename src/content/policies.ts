export interface PolicySection {
  title: string;
  content: string[];
}

export interface PolicyDocument {
  title: string;
  lastUpdated: string;
  legalEntityNotice: string;
  introduction: string;
  sections: PolicySection[];
}

export const privacyPolicyContent: PolicyDocument = {
  title: "Privacy Policy",
  lastUpdated: "Draft Preview — October 2026",
  legalEntityNotice:
    "Notice: This policy outlines operational data practices for this website preview. Legal entity details and registered corporate jurisdiction remain publication blockers pending final owner review.",
  introduction:
    "We respect your privacy and are committed to handling personal information transparently and securely. This policy describes how we collect, use, and protect information submitted through our website.",
  sections: [
    {
      title: "1. Information We Collect",
      content: [
        "We collect personal information that you voluntarily provide when submitting an enquiry or project brief through our contact forms. This typically includes your full name, email address, telephone number, company name, and details about your project requirements.",
        "We do not collect sensitive personal data, financial payment cards, government identification numbers, or medical health records through this public website.",
      ],
    },
    {
      title: "2. How We Use Submitted Information",
      content: [
        "Information submitted via our enquiry forms is used solely to evaluate your business requirements, prepare proposals, and communicate directly with you regarding your enquiry.",
        "We do not sell, rent, or trade your contact information to third-party data brokers or marketing lists.",
      ],
    },
    {
      title: "3. Server Storage & Data Retention",
      content: [
        "In production environments with configured persistent storage, enquiry records are stored securely in an encrypted relational database using parameterised queries.",
        "We retain enquiry records only as long as necessary to fulfill the commercial relationship or comply with statutory record-keeping obligations.",
      ],
    },
    {
      title: "4. Third-Party Service Providers",
      content: [
        "Where configured, we use Resend (a transactional email service provider) to notify our operations team of incoming enquiries. Resend processes email payloads under strict data processing agreements.",
        "We do not embed third-party advertising tracking pixels, session replay recording scripts, or social network telemetry on this website baseline.",
      ],
    },
    {
      title: "5. Your Rights & Contact Details",
      content: [
        "You have the right to request access to the personal data we hold about you, request corrections to inaccurate records, or request the deletion of your enquiry data.",
        "To exercise these rights, submit a request via our contact form specifying your details.",
      ],
    },
  ],
};

export const termsOfServiceContent: PolicyDocument = {
  title: "Terms of Service",
  lastUpdated: "Draft Preview — October 2026",
  legalEntityNotice:
    "Notice: These terms describe website usage rules for the preview build. Formal commercial contracts, liabilities, and intellectual property terms are governed by individual client agreements signed prior to project commencement.",
  introduction:
    "By accessing this website, you agree to comply with and be bound by the following terms and conditions of use.",
  sections: [
    {
      title: "1. Website Purpose & Information Accuracy",
      content: [
        "This website is provided for informational and demonstration purposes to describe software engineering, automation, and consulting capabilities.",
        "While we endeavor to keep all information accurate and up to date, information on this website does not constitute a formal binding commercial quotation until ratified in a signed Statement of Work.",
      ],
    },
    {
      title: "2. Interactive Demonstrations & Synthetic Data",
      content: [
        "Interactive demonstrations available on this site (such as the Retail POS, Operations Dashboard, E-commerce Store, and Booking Flow) use purely synthetic demonstration data and local browser memory.",
        "Demonstrations do not process real credit card payments, place actual courier dispatch orders, or book real clinic appointments.",
      ],
    },
    {
      title: "3. Intellectual Property Rights",
      content: [
        "All website designs, layout code, branding elements, typography configurations, and original written insight articles are protected by intellectual property laws.",
        "Client project deliverables and ownership transfers are governed explicitly by the individual commercial contract established for each client engagement.",
      ],
    },
    {
      title: "4. Prohibited Uses",
      content: [
        "You agree not to use this website to submit spam, automated bot submissions, abusive payloads, or attempt to compromise server infrastructure security.",
      ],
    },
    {
      title: "5. Limitation of Liability",
      content: [
        "To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, or consequential damages resulting from the use of or inability to use this website.",
      ],
    },
  ],
};

export const cookiePolicyContent: PolicyDocument = {
  title: "Cookie Policy",
  lastUpdated: "Draft Preview — October 2026",
  legalEntityNotice:
    "Notice: This site operates in privacy-first mode without non-essential advertising or cross-site tracking cookies.",
  introduction:
    "This Cookie Policy explains how our website handles cookies and local browser storage.",
  sections: [
    {
      title: "1. What Are Cookies?",
      content: [
        "Cookies are small text files stored on your computer or mobile device when you visit a website. They are commonly used to make websites work efficiently and provide essential functional capabilities.",
      ],
    },
    {
      title: "2. How We Use Cookies & Storage",
      content: [
        "Our baseline website does not use non-essential marketing, behavioral advertising, or third-party profiling cookies.",
        "We may use essential session storage purely to remember your interactive demo state (such as simulated items added to a test shopping basket) during your visit. This data remains on your device and is never transmitted to advertising networks.",
      ],
    },
    {
      title: "3. No Consent Banner Fatigue",
      content: [
        "Because we do not load non-essential tracking scripts or sell your browsing data, an intrusive cookie banner is not required under privacy regulations. If analytics tools are integrated in the future, we will deploy compliant preference controls prior to activation.",
      ],
    },
    {
      title: "4. Managing Cookies in Your Browser",
      content: [
        "You can configure your browser to block or delete cookies at any time via your browser settings. Doing so will not impair your ability to read our content or submit contact enquiries.",
      ],
    },
  ],
};

export const accessibilityContent: PolicyDocument = {
  title: "Accessibility Statement",
  lastUpdated: "Draft Preview — October 2026",
  legalEntityNotice:
    "Notice: This statement documents accessibility design practices implemented during engineering. Automated checks have been performed, and formal human user testing will be completed before public release.",
  introduction:
    "We are committed to ensuring digital accessibility for people of all abilities. We apply modern accessibility standards to provide an inclusive browsing experience.",
  sections: [
    {
      title: "1. Measures to Support Accessibility",
      content: [
        "We integrate accessibility into our design system and development practices by adhering to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA requirements.",
        "Our implementation emphasizes semantic HTML elements, logical heading hierarchies, keyboard navigation support, and sufficient color contrast.",
      ],
    },
    {
      title: "2. Technical Implementation Highlights",
      content: [
        "Color Contrast: All body text meets or exceeds the WCAG 4.5:1 minimum contrast requirement against light surfaces (our primary ink color provides a 12.49:1 ratio).",
        "Keyboard Operability: All interactive controls, including navigation menus, dialogs, forms, and demo interfaces, are fully operable via standard keyboard commands (Tab, Enter, Space, Escape).",
        "Visible Focus: Clear, high-contrast focus outlines with offset spacing are applied to all focusable elements.",
        "Reduced Motion: We respect the 'prefers-reduced-motion' media query, suppressing non-essential transitions for visitors sensitive to motion.",
        "Form Accessibility: All form fields feature explicit, visible labels, programmatic aria-describedby associations for hints and errors, and clear text error descriptions.",
      ],
    },
    {
      title: "3. Known Limitations & Ongoing Enhancements",
      content: [
        "While we aim for full accessibility, some complex interactive demonstration widgets (such as the simulated barcode scanner) are primarily mouse/keyboard simulated workflows and may require additional screen-reader annotations.",
        "We continuously audit our components using automated tooling (@axe-core/playwright) and manual keyboard testing across multiple viewport sizes.",
      ],
    },
    {
      title: "4. Feedback & Contact Information",
      content: [
        "We welcome feedback on the accessibility of this website. If you encounter accessibility barriers, please contact our team via the contact form, and we will work to provide the information you need through an accessible method.",
      ],
    },
  ],
};
