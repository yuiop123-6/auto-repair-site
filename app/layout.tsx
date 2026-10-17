import type { Metadata } from "next";
import { barlow, barlowCondensed } from "./fonts";
import { content } from "@/lib/content";
import "./globals.css";

const { brand, hero } = content;

export const metadata: Metadata = {
  title: `${brand.name} — ${brand.tagline}`,
  description: `${hero.subheading} ${brand.name}: diagnostics, brake service, and oil changes with transparent estimates and clear communication at every stage.`,
  keywords: [
    "auto repair",
    "car mechanic",
    "engine diagnostics",
    "brake service",
    "oil change",
    "vehicle maintenance",
  ],
  authors: [{ name: brand.name }],
  robots: { index: true, follow: true },
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description: hero.subheading,
    type: "website",
    siteName: brand.name,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
