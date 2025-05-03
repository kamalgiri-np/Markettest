import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, User, Bookmark, ChevronLeft, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { SocialShare } from "@/components/social-share"
import { CommentSection } from "@/components/comments/comment-section"
import { ArticleStyles } from "@/components/ui/article-styles"
import { ArticleCallout } from "@/components/ui/article-callout"
import { ArticleToc } from "@/components/ui/article-toc"

// This would typically come from a CMS or database
const articles = [
  {
    id: "1",
    title: "Navigating Economic Uncertainty: Strategies for Business Leaders",
    excerpt:
      "Learn how to guide your organization through volatile economic conditions with strategic planning and risk management.",
    content: `
      <p class="lead">In today's rapidly changing economic landscape, business leaders face unprecedented challenges in steering their organizations through uncertainty.</p>
      
      <p>Economic volatility has become the new normal, with global events, technological disruption, and shifting consumer behaviors creating a complex environment for decision-making. This article explores practical strategies for business leaders to navigate these uncertain waters effectively.</p>
      
      <h2 id="understanding-landscape">Understanding the Current Economic Landscape</h2>
      
      <p>Before implementing strategies, it's essential to develop a clear understanding of the current economic context. This includes:</p>
      
      <ul>
        <li>Monitoring key economic indicators relevant to your industry</li>
        <li>Analyzing supply chain vulnerabilities and dependencies</li>
        <li>Tracking changing consumer behaviors and preferences</li>
        <li>Assessing competitive landscape shifts</li>
      </ul>
      
      <p>By establishing robust economic intelligence gathering, organizations can identify early warning signs and potential opportunities amid volatility.</p>
      
      <h2 id="financial-resilience">Building Financial Resilience</h2>
      
      <p>Financial flexibility is crucial during uncertain times. Consider these approaches:</p>
      
      <ul>
        <li>Maintaining healthy cash reserves and optimizing working capital</li>
        <li>Diversifying revenue streams to reduce dependency on single markets</li>
        <li>Implementing variable cost structures where possible</li>
        <li>Securing flexible financing arrangements</li>
        <li>Regularly stress-testing financial models against various scenarios</li>
      </ul>
      
      <p>Organizations with strong balance sheets and financial agility can weather economic storms and potentially capitalize on opportunities that arise when competitors struggle.</p>
      
      <h2 id="scenario-planning">Scenario Planning and Strategic Flexibility</h2>
      
      <p>Rather than creating a single strategic plan, develop multiple scenarios with corresponding action plans:</p>
      
      <ul>
        <li>Identify key uncertainties that could significantly impact your business</li>
        <li>Develop 3-5 plausible future scenarios ranging from optimistic to pessimistic</li>
        <li>Create strategic responses for each scenario</li>
        <li>Identify early indicators that would signal which scenario is unfolding</li>
      </ul>
      
      <p>This approach allows organizations to respond quickly as conditions change, rather than being caught unprepared by emerging developments.</p>
      
      <h2 id="digital-transformation">Investing in Digital Transformation</h2>
      
      <p>Economic uncertainty often accelerates technological change. Organizations should:</p>
      
      <ul>
        <li>Prioritize digital initiatives that enhance operational efficiency</li>
        <li>Implement data analytics capabilities for real-time decision support</li>
        <li>Explore automation opportunities to reduce costs and increase scalability</li>
        <li>Build digital channels to reach customers in changing environments</li>
      </ul>
      
      <p>Companies that emerge strongest from economic downturns are often those that continued strategic technology investments while competitors pulled back.</p>
      
      <h2 id="talent-strategy">Talent Strategy for Uncertain Times</h2>
      
      <p>Your workforce approach may need adjustment during economic uncertainty:</p>
      
      <ul>
        <li>Develop flexible workforce models combining core employees with contingent workers</li>
        <li>Invest in cross-training to build organizational adaptability</li>
        <li>Identify and retain key talent critical to business continuity</li>
        <li>Maintain transparent communication about business conditions</li>
      </ul>
      
      <p>Organizations that manage their talent effectively during downturns often emerge with stronger employee loyalty and capabilities.</p>
      
      <h2 id="supply-chain">Supply Chain Resilience</h2>
      
      <p>Recent global events have highlighted supply chain vulnerabilities. Consider:</p>
      
      <ul>
        <li>Mapping extended supply networks to identify hidden dependencies</li>
        <li>Developing relationships with alternative suppliers</li>
        <li>Considering nearshoring or reshoring for critical components</li>
        <li>Implementing inventory strategies that balance efficiency with risk</li>
      </ul>
      
      <p>Supply chain resilience requires moving beyond just-in-time efficiency to incorporate redundancy and flexibility where strategically necessary.</p>
      
      <h2 id="customer-focus">Customer-Centric Focus</h2>
      
      <p>During economic uncertainty, customer needs and behaviors often shift dramatically:</p>
      
      <ul>
        <li>Increase customer listening through formal and informal channels</li>
        <li>Segment customers based on changing needs and value</li>
        <li>Adjust value propositions to address emerging pain points</li>
        <li>Consider pricing and packaging flexibility</li>
      </ul>
      
      <p>Organizations that stay closely attuned to evolving customer needs can pivot offerings accordingly and maintain relevance.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      
      <p>Navigating economic uncertainty requires a balanced approach that combines prudent risk management with strategic opportunism. By building organizational resilience while remaining alert to emerging possibilities, business leaders can guide their organizations through volatile conditions and position them for success in the eventual recovery.</p>
      
      <p>The most successful leaders recognize that uncertainty, while challenging, also creates opportunities for innovation, market share gains, and competitive repositioning for those prepared to act decisively from a position of relative strength.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    category: "Economics",
    tags: ["Business Strategy", "Risk Management", "Financial Planning"],
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=200&width=200",
      role: "Chief Economist",
      bio: "Michael Chen is the Chief Economist at Global Financial Insights and a regular contributor to major financial publications.",
    },
    date: "May 10, 2023",
    readTime: "12 min read",
    slug: "navigating-economic-uncertainty",
    relatedArticles: ["2", "3", "5"],
  },
  // Additional articles would be here
]

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((article) => article.slug === params.slug)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: `${article.title} | InsightfulGrowth Blog`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author.name],
      tags: article.tags,
    },
  }
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((article) => article.slug === params.slug)

  if (!article) {
    notFound()
  }

  // Extract headings for table of contents
  const headings =
    article.content.match(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)?.map((heading) => {
      const id = heading.match(/id="([^"]+)"/)?.[1] || ""
      const text = heading.match(/>([^<]+)</)?.[1] || ""
      return { id, text, level: 2 }
    }) || []

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedSection
        animation="fade-in"
        className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-brand-50 to-white dark:from-background dark:to-muted/5"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary flex items-center">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Articles
              </Link>
              <Separator orientation="vertical" className="h-4" />
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {article.category}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{article.title}</h1>
            <p className="text-muted-foreground md:text-xl">{article.excerpt}</p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{article.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="slide-up" className="w-full py-8">
        <div className="container px-4 md:px-6">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden mb-8">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2 flex-wrap">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-muted">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Bookmark className="h-4 w-4" />
                    <span className="sr-only">Save article</span>
                  </Button>
                  <SocialShare
                    url={`${process.env.NEXT_PUBLIC_APP_URL}/article/${article.slug}`}
                    title={article.title}
                  />
                </div>
              </div>

              <ArticleStyles className="mb-8">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />

                <ArticleCallout type="tip" title="Expert Insight">
                  <p>
                    When navigating economic uncertainty, it's crucial to maintain a balance between defensive measures
                    and strategic investments. Companies that continue to innovate during downturns often emerge as
                    market leaders in the recovery phase.
                  </p>
                </ArticleCallout>
              </ArticleStyles>

              <Separator className="my-12" />

              <CommentSection postId={article.id} postSlug={article.slug} />
            </div>

            <div className="w-full lg:w-1/3">
              {/* Sidebar content */}
              <div className="sticky top-24 space-y-8">
                <ArticleToc items={headings} />

                <div className="bg-muted/30 rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={article.author.avatar || "/placeholder.svg"}
                        alt={article.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{article.author.name}</p>
                      <p className="text-sm text-muted-foreground">{article.author.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{article.author.bio}</p>
                </div>

                <div className="theme-card">
                  <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest insights and articles delivered straight to your inbox.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/newsletter">Subscribe Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
