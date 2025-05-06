import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Facebook, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AuthorPage({ params }: { params: { slug: string } }) {
  // This would normally come from a database or API
  const authorData = {
    "sarah-johnson": {
      name: "Sarah Johnson",
      title: "Economics Editor",
      bio: "Sarah Johnson is a financial analyst with over 15 years of experience in investment banking and market analysis. She holds an MBA from Harvard Business School and is a Chartered Financial Analyst (CFA).",
      longBio:
        "Sarah Johnson brings over 15 years of experience in investment banking and economic analysis to her role as Economics Editor at InsightfulGrowth. After earning her MBA from Harvard Business School, Sarah worked at Goldman Sachs and JP Morgan, where she specialized in market analysis and economic forecasting. As a Chartered Financial Analyst (CFA), she combines technical expertise with clear, accessible writing to help readers understand complex economic concepts and market trends. Sarah is a frequent speaker at financial conferences and has been featured in The Wall Street Journal, Bloomberg, and CNBC. Her areas of expertise include monetary policy, market volatility, and global economic trends.",
      avatar: "/placeholder.svg?height=400&width=400",
      social: {
        twitter: "https://twitter.com/sarahjohnson",
        linkedin: "https://linkedin.com/in/sarahjohnson",
        email: "sarah.johnson@insightfulgrowth.com",
      },
      featured: true,
      articles: [
        {
          title: "Understanding Market Volatility in Uncertain Times",
          description:
            "An in-depth analysis of how global events impact market stability and what investors should consider.",
          category: "Economics",
          categoryHref: "/category/economics",
          image: "/placeholder.svg?height=400&width=600",
          date: "Apr 24, 2023",
          readTime: "10 min read",
          href: "/article/understanding-market-volatility",
        },
        {
          title: "The Impact of Rising Interest Rates on Global Markets",
          description: "Examining how central bank policies are reshaping investment landscapes worldwide.",
          category: "Economics",
          categoryHref: "/category/economics",
          image: "/placeholder.svg?height=400&width=600",
          date: "Mar 15, 2023",
          readTime: "8 min read",
          href: "/article/impact-rising-interest-rates",
        },
        {
          title: "Supply Chain Disruptions: Economic Implications and Solutions",
          description: "Analyzing the ongoing challenges in global supply chains and strategies for resilience.",
          category: "Economics",
          categoryHref: "/category/economics",
          image: "/placeholder.svg?height=400&width=600",
          date: "Feb 8, 2023",
          readTime: "12 min read",
          href: "/article/supply-chain-disruptions",
        },
      ],
      expertise: ["Monetary Policy", "Market Analysis", "Economic Forecasting", "Investment Strategy", "Global Trade"],
      education: [
        {
          degree: "MBA, Finance",
          institution: "Harvard Business School",
          year: "2008",
        },
        {
          degree: "Bachelor of Economics",
          institution: "University of Pennsylvania",
          year: "2004",
        },
      ],
      speaking: [
        {
          event: "Global Economic Forum",
          topic: "Navigating Market Volatility in a Post-Pandemic World",
          year: "2023",
        },
        {
          event: "Financial Analysts Conference",
          topic: "The Future of Central Banking",
          year: "2022",
        },
      ],
    },
  }[params.slug] || {
    name: "Author Not Found",
    title: "Not Available",
    bio: "Author information not available.",
    longBio: "Author information not available.",
    avatar: "/placeholder.svg?height=400&width=400",
    social: {},
    featured: false,
    articles: [],
    expertise: [],
    education: [],
    speaking: [],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-16">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{authorData.name}</h1>
                <p className="text-xl text-muted-foreground">{authorData.title}</p>
                <p className="text-muted-foreground md:text-lg">{authorData.longBio}</p>
                <div className="flex space-x-4">
                  {authorData.social.twitter && (
                    <Button variant="outline" size="icon" asChild>
                      <Link href={authorData.social.twitter} target="_blank" rel="noreferrer">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    </Button>
                  )}
                  {authorData.social.linkedin && (
                    <Button variant="outline" size="icon" asChild>
                      <Link href={authorData.social.linkedin} target="_blank" rel="noreferrer">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
                  )}
                  {authorData.social.facebook && (
                    <Button variant="outline" size="icon" asChild>
                      <Link href={authorData.social.facebook} target="_blank" rel="noreferrer">
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                    </Button>
                  )}
                  {authorData.social.email && (
                    <Button variant="outline" size="icon" asChild>
                      <Link href={`mailto:${authorData.social.email}`}>
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email</span>
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Image
                  src={authorData.avatar || "/placeholder.svg"}
                  alt={authorData.name}
                  width={300}
                  height={300}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="articles" className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="articles">Articles</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
              </TabsList>
              <TabsContent value="articles" className="mt-6">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {authorData.articles.map((article, index) => (
                    <Card key={index} className="h-full flex flex-col">
                      <CardHeader className="p-0">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          width={600}
                          height={400}
                          alt={article.title}
                          className="aspect-[4/3] w-full rounded-t-lg object-cover"
                        />
                      </CardHeader>
                      <CardContent className="flex-1 p-6">
                        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                          {article.category}
                        </div>
                        <CardTitle className="mt-4 line-clamp-2">
                          <Link href={article.href} className="hover:underline">
                            {article.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">{article.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between p-6 pt-0">
                        <div className="text-sm text-muted-foreground">
                          <p>
                            {article.date} • {article.readTime}
                          </p>
                        </div>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={article.href}>
                            <BookOpen className="h-4 w-4" />
                            <span className="sr-only">Read</span>
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                {authorData.articles.length > 3 && (
                  <div className="mt-10 flex justify-center">
                    <Button variant="outline">
                      View All Articles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="about" className="mt-6">
                <div className="grid gap-10 md:grid-cols-2">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold">Areas of Expertise</h3>
                      <Separator className="my-4" />
                      <div className="flex flex-wrap gap-2">
                        {authorData.expertise.map((item, index) => (
                          <div key={index} className="rounded-full border px-3 py-1 text-sm">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Education</h3>
                      <Separator className="my-4" />
                      <div className="space-y-4">
                        {authorData.education.map((item, index) => (
                          <div key={index} className="space-y-1">
                            <div className="font-medium">{item.degree}</div>
                            <div className="text-sm text-muted-foreground">
                              {item.institution}, {item.year}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold">Speaking Engagements</h3>
                      <Separator className="my-4" />
                      <div className="space-y-4">
                        {authorData.speaking.map((item, index) => (
                          <div key={index} className="space-y-1">
                            <div className="font-medium">{item.topic}</div>
                            <div className="text-sm text-muted-foreground">
                              {item.event}, {item.year}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Contact for Speaking</h3>
                      <Separator className="my-4" />
                      <p className="text-muted-foreground">
                        Interested in having {authorData.name} speak at your event? Please contact us for availability
                        and rates.
                      </p>
                      <Button className="mt-4" asChild>
                        <Link href="/contact">
                          <Mail className="mr-2 h-4 w-4" />
                          Contact for Speaking
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
