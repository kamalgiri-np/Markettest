import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Filter, Clock, Calendar, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { BlogFeatured } from "@/components/blog/blog-featured"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"
import { BlogAdvertisement } from "@/components/blog/blog-advertisement"

export const metadata: Metadata = {
  title: "Blog | InsightfulGrowth",
  description: "Latest insights, analysis, and thought leadership for professionals.",
}

// Mock data for blog posts
const blogPosts = [
  {
    id: "1",
    title: "10 Strategies for Effective Leadership in Remote Teams",
    excerpt:
      "Discover proven approaches to leading distributed teams and maintaining high performance in virtual environments.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Leadership",
    tags: ["Remote Work", "Team Management", "Communication"],
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "May 15, 2023",
    readTime: "8 min read",
    slug: "strategies-for-remote-leadership",
  },
  {
    id: "2",
    title: "Economic Outlook 2023: Navigating Uncertainty in Global Markets",
    excerpt:
      "An in-depth analysis of current economic trends and forecasts to help business leaders make informed decisions.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Economics",
    tags: ["Market Analysis", "Financial Planning", "Risk Management"],
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "May 10, 2023",
    readTime: "12 min read",
    slug: "economic-outlook-2023",
  },
  {
    id: "3",
    title: "Building a Personal Brand That Stands Out in a Competitive Market",
    excerpt: "Learn how to develop and leverage your professional identity to create new opportunities in your career.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Career Development",
    tags: ["Personal Branding", "Career Growth", "Networking"],
    author: {
      name: "Alex Rivera",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "May 5, 2023",
    readTime: "10 min read",
    slug: "personal-brand-competitive-market",
  },
  {
    id: "4",
    title: "The Future of AI in Business: Opportunities and Ethical Considerations",
    excerpt:
      "Exploring how artificial intelligence is transforming industries and the ethical frameworks needed to guide implementation.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Technology",
    tags: ["Artificial Intelligence", "Ethics", "Innovation"],
    author: {
      name: "Priya Sharma",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "April 28, 2023",
    readTime: "15 min read",
    slug: "ai-business-ethics",
  },
  {
    id: "5",
    title: "Sustainable Business Practices: The Competitive Advantage",
    excerpt: "How implementing environmentally responsible strategies can drive growth and create long-term value.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Sustainability",
    tags: ["ESG", "Corporate Responsibility", "Green Business"],
    author: {
      name: "Thomas Anderson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "April 22, 2023",
    readTime: "9 min read",
    slug: "sustainable-business-practices",
  },
  {
    id: "6",
    title: "Mastering Negotiation: Techniques for Win-Win Outcomes",
    excerpt:
      "Advanced strategies for negotiating effectively in high-stakes business situations and creating value for all parties.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Business Skills",
    tags: ["Negotiation", "Communication", "Conflict Resolution"],
    author: {
      name: "Elena Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "April 18, 2023",
    readTime: "11 min read",
    slug: "mastering-negotiation-techniques",
  },
]

// Categories for filtering
const categories = [
  "All Categories",
  "Leadership",
  "Economics",
  "Career Development",
  "Technology",
  "Sustainability",
  "Business Skills",
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedSection
        animation="fade-in"
        className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-brand-50 to-white dark:from-background dark:to-muted/5"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-100 px-3 py-1 text-sm font-medium">
              Our Blog
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl gradient-text">
              Insights & Perspectives
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Expert analysis, thought leadership, and practical advice for professionals navigating today's complex
              business landscape.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="slide-up" className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <BlogFeatured post={blogPosts[0]} />
        </div>
      </AnimatedSection>

      <AnimatedSection animation="slide-up" delay="delay-100" className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-2/3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <h2 className="text-2xl font-bold">Latest Articles</h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <span className="text-sm font-medium">Filter by:</span>
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Tabs defaultValue="all" className="mb-8">
                <TabsList className="w-full md:w-auto grid grid-cols-3 md:flex md:flex-wrap gap-2">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <div className="grid gap-8">
                    {blogPosts.map((post) => (
                      <Card
                        key={post.id}
                        className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                      >
                        <div className="grid md:grid-cols-[2fr_3fr] gap-0">
                          <div className="relative h-48 md:h-full">
                            <Link href={`/blog/${post.slug}`}>
                              <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                              />
                            </Link>
                          </div>
                          <div className="flex flex-col p-6">
                            <div className="mb-2">
                              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                                {post.category}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold mb-2 line-clamp-2">
                              <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                {post.title}
                              </Link>
                            </h3>
                            <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-auto">
                              <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                <span>{post.author.name}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <div className="mt-4">
                              <Button variant="link" asChild className="p-0 h-auto font-medium">
                                <Link href={`/blog/${post.slug}`} className="flex items-center">
                                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-center">
                    <Button variant="outline">Load More Articles</Button>
                  </div>
                </TabsContent>
                <TabsContent value="popular" className="mt-6">
                  <div className="grid gap-8">
                    {blogPosts.slice(1, 4).map((post) => (
                      <Card
                        key={post.id}
                        className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                      >
                        <div className="grid md:grid-cols-[2fr_3fr] gap-0">
                          <div className="relative h-48 md:h-full">
                            <Link href={`/blog/${post.slug}`}>
                              <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                              />
                            </Link>
                          </div>
                          <div className="flex flex-col p-6">
                            <div className="mb-2">
                              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                                {post.category}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold mb-2 line-clamp-2">
                              <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                {post.title}
                              </Link>
                            </h3>
                            <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-auto">
                              <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                <span>{post.author.name}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <div className="mt-4">
                              <Button variant="link" asChild className="p-0 h-auto font-medium">
                                <Link href={`/blog/${post.slug}`} className="flex items-center">
                                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="trending" className="mt-6">
                  <div className="grid gap-8">
                    {blogPosts.slice(3, 6).map((post) => (
                      <Card
                        key={post.id}
                        className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                      >
                        <div className="grid md:grid-cols-[2fr_3fr] gap-0">
                          <div className="relative h-48 md:h-full">
                            <Link href={`/blog/${post.slug}`}>
                              <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                              />
                            </Link>
                          </div>
                          <div className="flex flex-col p-6">
                            <div className="mb-2">
                              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                                {post.category}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold mb-2 line-clamp-2">
                              <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                {post.title}
                              </Link>
                            </h3>
                            <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-auto">
                              <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                <span>{post.author.name}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <div className="mt-4">
                              <Button variant="link" asChild className="p-0 h-auto font-medium">
                                <Link href={`/blog/${post.slug}`} className="flex items-center">
                                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              <BlogAdvertisement
                className="my-12"
                title="Grow Your Business with Our Premium Resources"
                description="Access exclusive templates, guides, and tools designed for professional success."
                ctaText="Explore Premium Content"
                ctaLink="/premium"
                image="/placeholder.svg?height=200&width=600"
              />
            </div>

            <div className="w-full md:w-1/3">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-in" className="w-full py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <BlogNewsletter />
        </div>
      </AnimatedSection>
    </div>
  )
}
