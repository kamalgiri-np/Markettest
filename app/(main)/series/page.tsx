import type { Metadata } from "next"
import { ArticleSeriesCard } from "@/components/article-series"
import { AnimatedSection } from "@/components/animated-section"

export const metadata: Metadata = {
  title: "Article Series | InsightfulGrowth Blog",
  description: "Explore our comprehensive article series on various business and professional growth topics.",
}

// This would typically come from a CMS or database
const seriesList = [
  {
    id: "business-resilience",
    title: "Building Business Resilience",
    description:
      "A comprehensive guide to building resilient businesses that can withstand economic uncertainty and market disruptions.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    totalArticles: 5,
    progress: 20,
    tags: ["Business Strategy", "Risk Management", "Leadership"],
    articles: [
      {
        id: "1",
        title: "Navigating Economic Uncertainty: Strategies for Business Leaders",
        slug: "navigating-economic-uncertainty",
        excerpt:
          "Learn how to guide your organization through volatile economic conditions with strategic planning and risk management.",
        publishedAt: "May 10, 2023",
        readingTime: "12 min read",
        isCompleted: true,
        isCurrent: true,
      },
      // Other articles would be here
    ],
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Guide",
    description:
      "A step-by-step guide to implementing digital transformation in your organization for improved efficiency and innovation.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    totalArticles: 4,
    progress: 0,
    tags: ["Digital Transformation", "Technology", "Innovation"],
    articles: [
      {
        id: "1",
        title: "Understanding Digital Transformation: Beyond the Buzzword",
        slug: "understanding-digital-transformation",
        excerpt: "Learn what digital transformation really means and why it's essential for modern businesses.",
        publishedAt: "June 15, 2023",
        readingTime: "10 min read",
      },
      // Other articles would be here
    ],
  },
  {
    id: "leadership-essentials",
    title: "Leadership Essentials for the Modern Workplace",
    description:
      "Essential leadership skills and strategies for navigating the complexities of today's rapidly evolving workplace.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    totalArticles: 6,
    progress: 50,
    tags: ["Leadership", "Management", "Team Building"],
    articles: [
      {
        id: "1",
        title: "Adaptive Leadership: Thriving in Uncertainty",
        slug: "adaptive-leadership",
        excerpt:
          "Discover the principles of adaptive leadership and how to apply them in uncertain business environments.",
        publishedAt: "April 5, 2023",
        readingTime: "13 min read",
        isCompleted: true,
      },
      // Other articles would be here
    ],
  },
]

export default function SeriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedSection
        animation="fade-in"
        className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-brand-50 to-white dark:from-background dark:to-muted/5"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Article Series</h1>
            <p className="text-muted-foreground md:text-xl">
              Explore our comprehensive article series on various business and professional growth topics.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="slide-up" className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {seriesList.map((series) => (
              <ArticleSeriesCard key={series.id} series={series} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
