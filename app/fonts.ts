import localFont from "next/font/local";

/**
 * Self-hosted Barlow + Barlow Condensed (latin subset, woff2),
 * matching the typeface pairing of the reference design.
 */
export const barlow = localFont({
  src: [
    { path: "../public/fonts/Barlow-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Barlow-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Barlow-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/Barlow-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-barlow",
  display: "swap",
});

export const barlowCondensed = localFont({
  src: [
    {
      path: "../public/fonts/Barlow-Condensed-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Barlow-Condensed-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Barlow-Condensed-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-barlow-condensed",
  display: "swap",
});
