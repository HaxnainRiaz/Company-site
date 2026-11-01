import React from "react";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-primary focus:text-white focus:font-medium focus:rounded-lg focus:shadow-lg focus:outline-2 focus:outline-focus focus:outline-offset-2 transition-transform"
    >
      Skip to main content
    </a>
  );
}
