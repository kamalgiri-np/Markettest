import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://insightfulgrowth.com"

  // Main pages
  const routes = [
    "",
    "/about",
    "/contact",
    "/blog",
    "/resources",
    "/resources/hub",
    "/premium",
    "/login",
    "/register",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Category pages
  const categories = [
    "/category/economics",
    "/category/leadership",
    "/category/career",
    "/category/technology",
    "/category/strategy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Resource pages
  const resources = [
    "/resources/guides",
    "/resources/webinars",
    "/resources/podcast",
    "/resources/templates",
    "/resources/glossary",
    "/resources/research-reports",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  return [...routes, ...categories, ...resources]
}
