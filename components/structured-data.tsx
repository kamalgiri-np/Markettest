export function ArticleStructuredData({
  title,
  description,
  publishedTime,
  modifiedTime,
  authorName,
  authorUrl,
  organizationName,
  organizationLogo,
  url,
  images,
}: {
  title: string
  description: string
  publishedTime: string
  modifiedTime?: string
  authorName: string
  authorUrl: string
  organizationName: string
  organizationLogo: string
  url: string
  images: string[]
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: images,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: organizationName,
      logo: {
        "@type": "ImageObject",
        url: organizationLogo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export function WebsiteStructuredData({
  name,
  description,
  url,
  logoUrl,
}: {
  name: string
  description: string
  url: string
  logoUrl: string
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: name,
    description: description,
    url: url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: name,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
