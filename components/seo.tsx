import type { Metadata } from "next"

interface SeoProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  type?: "website" | "article"
  publishedTime?: string
  authors?: string[]
  tags?: string[]
}

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage,
  canonical,
  type = "website",
  publishedTime,
  authors,
  tags,
}: SeoProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://insightfulgrowth.com"

  return {
    title,
    description,
    keywords,
    authors: authors?.map((author) => ({ name: author })),
    openGraph: {
      title,
      description,
      type,
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      images: ogImage ? [{ url: ogImage }] : undefined,
      publishedTime,
      authors,
      tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    alternates: {
      canonical: canonical ? `${baseUrl}${canonical}` : baseUrl,
    },
  }
}
