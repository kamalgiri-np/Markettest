import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { ArticleSeries, ArticleSeriesNavigation } from "@/components/article-series"
import { Button } from "@/components/ui/button"

// This would typically come from a CMS or database
const seriesList = [
  {
    id: "business-resilience",
    slug: "building-business-resilience",
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
      {
        id: "2",
        title: "Building Adaptive Teams for Uncertain Times",
        slug: "building-adaptive-teams",
        excerpt:
          "Discover how to develop teams that can quickly adapt to changing market conditions and business requirements.",
        publishedAt: "May 17, 2023",
        readingTime: "10 min read",
      },
      {
        id: "3",
        title: "Financial Strategies for Business Continuity",
        slug: "financial-strategies-business-continuity",
        excerpt: "Learn essential financial planning techniques to ensure your business can weather economic storms.",
        publishedAt: "May 24, 2023",
        readingTime: "14 min read",
      },
      {
        id: "4",
        title: "Supply Chain Resilience in a Volatile World",
        slug: "supply-chain-resilience",
        excerpt:
          "Strategies for building robust supply chains that can withstand disruptions and adapt to changing conditions.",
        publishedAt: "May 31, 2023",
        readingTime: "11 min read",
      },
      {
        id: "5",
        title: "Leading Through Crisis: Decision-Making Frameworks",
        slug: "leading-through-crisis",
        excerpt: "Effective decision-making frameworks for business leaders navigating periods of extreme uncertainty.",
        publishedAt: "June 7, 2023",
        readingTime: "15 min read",
      },
    ],
  },
  // Other series would be here
]

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const series = seriesList.find((series) => series.slug === params.slug)

  if (!series) {
    return {
      title: "Series Not Found",
    }
  }

  return {
    title: `${series.title} | InsightfulGrowth Blog`,
    description: series.description,
    openGraph: {
      title: series.title,
      description: series.description,
      type: "article",
      tags: series.tags,
    },
  }
}

export default function SeriesDetailPage({ params }: Props) {
  const series = seriesList.find((series) => series.slug === params.slug)

  if (!series) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedSection
        animation="fade-in"
        className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-brand-50 to-white dark:from-background dark:to-muted/5"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <Link href="/series" className="text-sm text-muted-foreground hover:text-primary flex items-center">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Series
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{series.title}</h1>
            <p className="text-muted-foreground md:text-xl">{series.description}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {series.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="slide-up" className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
                <Image
                  src={series.coverImage || "/placeholder.svg"}
                  alt={series.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <h2>About This Series</h2>
                <p>
                  This comprehensive series explores strategies and approaches for {series.title.toLowerCase()}. Each
                  article builds on the previous one, providing you with a complete understanding of the topic.
                </p>
                <p>
                  Whether you're new to the subject or looking to deepen your knowledge, this series offers valuable
                  insights and practical advice that you can apply immediately.
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4">Articles in This Series</h2>
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <ArticleSeriesNavigation articles={series.articles} variant="default" className="p-2" />
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Series Progress</h3>
                  <ArticleSeries series={series} variant="compact" showProgress={true} />

                  <div className="mt-6">
                    <Button asChild className="w-full">
                      <Link href={`/article/${series.articles[0].slug}`}>
                        {series.progress > 0 ? "Continue Reading" : "Start Reading"}
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="bg-muted/30 border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Share This Series</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you find this series valuable, share it with your colleagues and network.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm">
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                      Email
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
