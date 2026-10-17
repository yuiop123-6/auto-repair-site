import type { JSX } from "react";

/**
 * Inline SVG icon set (24x24, stroke = currentColor unless noted).
 * Mirrors the iconography of the reference design.
 */
const PATHS: Record<string, JSX.Element> = {
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  diagnostics: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
  brakes: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21" />
    </>
  ),
  maintenance: (
    <path d="M12 2.7s6.5 6.8 6.5 10.8a6.5 6.5 0 0 1-13 0C5.5 9.5 12 2.7 12 2.7z" />
  ),
  quote: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.8" />
    </>
  ),
  updates: (
    <>
      <path d="M21 12a8.5 8.5 0 0 1-13.4 6.9L3 20l1.1-4.6A8.5 8.5 0 1 1 21 12z" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.8" />
    </>
  ),
  scheduling: (
    <>
      <rect x="3" y="4.5" width="18" height="17" rx="2" />
      <path d="M16 3v4M8 3v4M3 9.5h18" />
      <path d="m9 15 2 2 4-4" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
  ),
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="17" rx="2" />
      <path d="M16 3v4M8 3v4M3 9.5h18" />
      <path d="m9 15 2 2 4-4" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export type IconName = keyof typeof PATHS | "star";

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className, strokeWidth = 2 }: IconProps) {
  if (name === "star") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        className={className}
      >
        <polygon points="12 2 14.9 8.6 22 9.3 16.7 13.9 18.3 21 12 17.3 5.7 21 7.3 13.9 2 9.3 9.1 8.6" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}
