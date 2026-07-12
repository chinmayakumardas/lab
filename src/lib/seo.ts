import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface SEOOptions {
  title?: string;
  description?: string;
  path?: string;
}

export function generateSEO({
  title,
  description,
  path = "",
}: SEOOptions = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;

  const pageDescription =
    description || siteConfig.description;

  return {
    title: pageTitle,

    description: pageDescription,

    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },

    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
}