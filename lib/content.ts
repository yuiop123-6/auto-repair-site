import siteContent from "@/site_content.json";

/**
 * Single source of truth for all business copy on the page.
 * Components import from here (or read the JSON directly) instead of
 * hard-coding text, so site_content.json stays the only place to edit copy.
 */
export const content = siteContent;

export type SiteContent = typeof siteContent;
export type NavItem = SiteContent["nav"][number];
