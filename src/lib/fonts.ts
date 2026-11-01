import localFont from "next/font/local";

export const instrumentSans = localFont({
  src: "../assets/fonts/InstrumentSans-Latin-Variable.woff2",
  variable: "--font-instrument",
  display: "swap",
  weight: "400 700",
  style: "normal",
});
