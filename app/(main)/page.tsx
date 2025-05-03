import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, BarChart3, Award, BookMarked, Briefcase } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsletterSubscription } from "@/components/newsletter-subscription"
import { FeaturedArticle } from "@/components/featured-article"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/components/animated-section"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <AnimatedSection
          animation="fade-in"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-brand-50 to-white dark:from-background dark:to-muted/5"
        >
          <div className="container px-4 md:px-6">
            <FeaturedArticle
              article={{
                title: "Navigating Economic Uncertainty: Strategic Approaches for Business Leaders",
                description:
                  "Comprehensive analysis and actionable strategies to help executives and business leaders navigate through economic volatility while positioning their organizations for sustainable growth.",
                category: "Economics",
                categoryHref: "/category/economics",
                image: "/placeholder.svg?height=600&width=800",
                author: {
                  name: "Sarah Johnson",
                  avatar: "/placeholder.svg?height=40&width=40",
                },
                date: "May 15, 2023",
                readTime: "15 min read",
                href: "/article/navigating-economic-uncertainty",
              }}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-100 px-3 py-1 text-sm font-medium">
                  Curated Content
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-text">
                  Expert Insights for Professionals
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover in-depth analysis and practical advice from industry leaders and subject matter experts.
                </p>
              </div>
            </div>

            <Tabs defaultValue="featured" className="mt-12">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="economics">Economics</TabsTrigger>
                  <TabsTrigger value="leadership">Leadership</TabsTrigger>
                  <TabsTrigger value="career">Career Development</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="featured" className="mt-8">
                <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Article thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        Economics
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
                        <Link href="/article/understanding-market-volatility" className="hover:underline">
                          Understanding Market Volatility in Uncertain Times
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        An in-depth analysis of how global events impact market stability and what investors should
                        consider for long-term portfolio resilience.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between p-6 pt-0">
                      <div className="flex items-center space-x-2">
                        <Link href="/author/sarah-johnson">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Author"
                            className="rounded-full"
                          />
                        </Link>
                        <div className="text-sm">
                          <Link href="/author/sarah-johnson" className="font-medium hover:underline">
                            Sarah Johnson
                          </Link>
                          <p className="text-xs text-muted-foreground">Apr 24, 2023 • 10 min read</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" asChild className="hover-scale transition-all duration-300">
                        <Link href="/article/understanding-market-volatility">
                          <BookOpen className="h-4 w-4" />
                          <span className="sr-only">Read</span>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Article thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        Leadership
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
                        <Link href="/article/leadership-principles" className="hover:underline">
                          5 Leadership Principles That Transform Organizations
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        Discover the key leadership principles that can help you build high-performing teams and drive
                        organizational success in today's complex business environment.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between p-6 pt-0">
                      <div className="flex items-center space-x-2">
                        <Link href="/author/michael-chen">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Author"
                            className="rounded-full"
                          />
                        </Link>
                        <div className="text-sm">
                          <Link href="/author/michael-chen" className="font-medium hover:underline">
                            Michael Chen
                          </Link>
                          <p className="text-xs text-muted-foreground">Apr 18, 2023 • 12 min read</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" asChild className="hover-scale transition-all duration-300">
                        <Link href="/article/leadership-principles">
                          <BookOpen className="h-4 w-4" />
                          <span className="sr-only">Read</span>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Article thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        Career Development
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
                        <Link href="/article/future-skills-2025" className="hover:underline">
                          The Future of Work: Skills That Will Matter in 2025
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        A forward-looking analysis of the skills and competencies that will be most valuable in the
                        evolving job market, based on industry trends and technological advancements.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between p-6 pt-0">
                      <div className="flex items-center space-x-2">
                        <Link href="/author/alex-rivera">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Author"
                            className="rounded-full"
                          />
                        </Link>
                        <div className="text-sm">
                          <Link href="/author/alex-rivera" className="font-medium hover:underline">
                            Alex Rivera
                          </Link>
                          <p className="text-xs text-muted-foreground">Apr 12, 2023 • 14 min read</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" asChild className="hover-scale transition-all duration-300">
                        <Link href="/article/future-skills-2025">
                          <BookOpen className="h-4 w-4" />
                          <span className="sr-only">Read</span>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="economics" className="mt-8">
                <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Article thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        Economics
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
                        <Link href="/article/impact-rising-interest-rates" className="hover:underline">
                          The Impact of Rising Interest Rates on Global Markets
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        Examining how central bank policies are reshaping investment landscapes worldwide and what it
                        means for investors in different asset classes.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between p-6 pt-0">
                      <div className="flex items-center space-x-2">
                        <Link href="/author/david-wong">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Author"
                            className="rounded-full"
                          />
                        </Link>
                        <div className="text-sm">
                          <Link href="/author/david-wong" className="font-medium hover:underline">
                            David Wong
                          </Link>
                          <p className="text-xs text-muted-foreground">Apr 18, 2023 • 11 min read</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" asChild className="hover-scale transition-all duration-300">
                        <Link href="/article/impact-rising-interest-rates">
                          <BookOpen className="h-4 w-4" />
                          <span className="sr-only">Read</span>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Article thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        Economics
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
                        <Link href="/article/supply-chain-disruptions" className="hover:underline">
                          Supply Chain Disruptions: Economic Implications and Solutions
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        Analyzing the ongoing challenges in global supply chains and strategies for building resilience
                        in an interconnected economy.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between p-6 pt-0">
                      <div className="flex items-center space-x-2">
                        <Link href="/author/maria-rodriguez">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Author"
                            className="rounded-full"
                          />
                        </Link>
                        <div className="text-sm">
                          <Link href="/author/maria-rodriguez" className="font-medium hover:underline">
                            Maria Rodriguez
                          </Link>
                          <p className="text-xs text-muted-foreground">Apr 12, 2023 • 13 min read</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" asChild className="hover-scale transition-all duration-300">
                        <Link href="/article/supply-chain-disruptions">
                          <BookOpen className="h-4 w-4" />
                          <span className="sr-only">Read</span>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Article thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        Economics
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
                        <Link href="/article/digital-currencies-future" className="hover:underline">
                          Digital Currencies and the Future of Global Finance
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        Exploring how central bank digital currencies and cryptocurrencies are reshaping the financial
                        landscape and monetary policy.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between p-6 pt-0">
                      <div className="flex items-center space-x-2">
                        <Link href="/author/james-wilson">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Author"
                            className="rounded-full"
                          />
                        </Link>
                        <div className="text-sm">
                          <Link href="/author/james-wilson" className="font-medium hover:underline">
                            James Wilson
                          </Link>
                          <p className="text-xs text-muted-foreground">Apr 5, 2023 • 15 min read</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" asChild className="hover-scale transition-all duration-300">
                        <Link href="/article/digital-currencies-future">
                          <BookOpen className="h-4 w-4" />
                          <span className="sr-only">Read</span>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="leadership" className="mt-8">
                <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Article thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        Leadership
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
                        <Link href="/article/emotional-intelligence-leadership" className="hover:underline">
                          Emotional Intelligence: The Leadership Superpower
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        How developing emotional intelligence can dramatically improve your leadership effectiveness and
                        transform team dynamics in the workplace.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between p-6 pt-0">
                      <div className="flex items-center space-x-2">
                        <Link href="/author/priya-sharma">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Author"
                            className="rounded-full"
                          />
                        </Link>
                        <div className="text-sm">
                          <Link href="/author/priya-sharma" className="font-medium hover:underline">
                            Priya Sharma
                          </Link>
                          <p className="text-xs text-muted-foreground">Apr 15, 2023 • 9 min read</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" asChild className="hover-scale transition-all duration-300">
                        <Link href="/article/emotional-intelligence-leadership">
                          <BookOpen className="h-4 w-4" />
                          <span className="sr-only">Read</span>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Article thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        Leadership
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
                        <Link href="/article/leading-through-crisis" className="hover:underline">
                          Leading Through Crisis: Lessons from Successful CEOs
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        Case studies and actionable insights on how top executives navigate and thrive during
                        challenging times and organizational disruption.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between p-6 pt-0">
                      <div className="flex items-center space-x-2">
                        <Link href="/author/thomas-anderson">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Author"
                            className="rounded-full"
                          />
                        </Link>
                        <div className="text-sm">
                          <Link href="/author/thomas-anderson" className="font-medium hover:underline">
                            Thomas Anderson
                          </Link>
                          <p className="text-xs text-muted-foreground">Apr 8, 2023 • 14 min read</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" asChild className="hover-scale transition-all duration-300">
                        <Link href="/article/leading-through-crisis">
                          <BookOpen className="h-4 w-4" />
                          <span className="sr-only">Read</span>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Article thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        Leadership
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
                        <Link href="/article/inclusive-leadership-strategies" className="hover:underline">
                          Inclusive Leadership: Strategies for Building Diverse Teams
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        Practical approaches to fostering diversity, equity, and inclusion in the workplace and
                        leveraging diverse perspectives for innovation.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between p-6 pt-0">
                      <div className="flex items-center space-x-2">
                        <Link href="/author/elena-martinez">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Author"
                            className="rounded-full"
                          />
                        </Link>
                        <div className="text-sm">
                          <Link href="/author/elena-martinez" className="font-medium hover:underline">
                            Elena Martinez
                          </Link>
                          <p className="text-xs text-muted-foreground">Apr 3, 2023 • 12 min read</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" asChild className="hover-scale transition-all duration-300">
                        <Link href="/article/inclusive-leadership-strategies">
                          <BookOpen className="h-4 w-4" />
                          <span className="sr-only">Read</span>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="career" className="mt-8">
                <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Article thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        Career Development
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
                        <Link href="/article/navigating-career-transitions" className="hover:underline">
                          Navigating Career Transitions in a Changing Economy
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        Strategic approaches to pivoting your career path during economic shifts and industry
                        disruptions with minimal risk and maximum opportunity.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between p-6 pt-0">
                      <div className="flex items-center space-x-2">
                        <Link href="/author/james-wilson">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Author"
                            className="rounded-full"
                          />
                        </Link>
                        <div className="text-sm">
                          <Link href="/author/james-wilson" className="font-medium hover:underline">
                            James Wilson
                          </Link>
                          <p className="text-xs text-muted-foreground">Apr 20, 2023 • 11 min read</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" asChild className="hover-scale transition-all duration-300">
                        <Link href="/article/navigating-career-transitions">
                          <BookOpen className="h-4 w-4" />
                          <span className="sr-only">Read</span>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Article thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        Career Development
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
                        <Link href="/article/building-personal-brand" className="hover:underline">
                          Building a Personal Brand That Opens Career Doors
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        Strategic approaches to developing your professional identity and leveraging it for career
                        advancement in competitive industries.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between p-6 pt-0">
                      <div className="flex items-center space-x-2">
                        <Link href="/author/sophia-lee">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Author"
                            className="rounded-full"
                          />
                        </Link>
                        <div className="text-sm">
                          <Link href="/author/sophia-lee" className="font-medium hover:underline">
                            Sophia Lee
                          </Link>
                          <p className="text-xs text-muted-foreground">Apr 14, 2023 • 10 min read</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" asChild className="hover-scale transition-all duration-300">
                        <Link href="/article/building-personal-brand">
                          <BookOpen className="h-4 w-4" />
                          <span className="sr-only">Read</span>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Article thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        Career Development
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
                        <Link href="/article/negotiation-skills-career" className="hover:underline">
                          Mastering Negotiation Skills for Career Advancement
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        Essential negotiation techniques for salary discussions, promotions, and workplace agreements
                        that can accelerate your professional growth.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between p-6 pt-0">
                      <div className="flex items-center space-x-2">
                        <Link href="/author/robert-kim">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Author"
                            className="rounded-full"
                          />
                        </Link>
                        <div className="text-sm">
                          <Link href="/author/robert-kim" className="font-medium hover:underline">
                            Robert Kim
                          </Link>
                          <p className="text-xs text-muted-foreground">Apr 7, 2023 • 13 min read</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" asChild className="hover-scale transition-all duration-300">
                        <Link href="/article/negotiation-skills-career">
                          <BookOpen className="h-4 w-4" />
                          <span className="sr-only">Read</span>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-10 flex justify-center">
              <Button
                variant="outline"
                asChild
                className="hover-scale hover:border-primary hover-scale transition-all duration-300"
              >
                <Link href="/articles">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay="delay-100" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Premium Content</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Professional Resources</h2>
                <p className="text-muted-foreground md:text-lg">
                  Access our comprehensive library of professional resources designed to help you excel in your career
                  and business endeavors.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <BarChart3 className="h-8 w-8 text-primary" />
                    <CardTitle>Research Reports</CardTitle>
                    <CardDescription>
                      In-depth analysis and data-driven insights on industry trends and market developments.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover-scale transition-all duration-300"
                      asChild
                    >
                      <Link href="/resources/reports">
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <BookMarked className="h-8 w-8 text-primary" />
                    <CardTitle>Whitepapers</CardTitle>
                    <CardDescription>
                      Authoritative guides on complex topics, providing strategic frameworks and best practices.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover-scale transition-all duration-300"
                      asChild
                    >
                      <Link href="/resources/whitepapers">
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <Briefcase className="h-8 w-8 text-primary" />
                    <CardTitle>Case Studies</CardTitle>
                    <CardDescription>
                      Real-world examples of successful strategies and implementations across various industries.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover-scale transition-all duration-300"
                      asChild
                    >
                      <Link href="/resources/case-studies">
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <Award className="h-8 w-8 text-primary" />
                    <CardTitle>Executive Education</CardTitle>
                    <CardDescription>
                      Curated learning paths and resources for senior professionals and executives.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover-scale transition-all duration-300"
                      asChild
                    >
                      <Link href="/resources/executive-education">
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-100 px-3 py-1 text-sm font-medium animate-pulse-subtle">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl gradient-text">What Our Readers Say</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Hear from professionals who have leveraged our insights to advance their careers and businesses.
                </p>
              </div>
            </div>
            <TestimonialCarousel
              testimonials={[
                {
                  quote:
                    "InsightfulGrowth has been an invaluable resource for staying ahead of economic trends. Their analysis is both deep and accessible.",
                  name: "David Chen",
                  title: "Chief Investment Officer",
                  company: "Global Investments Ltd.",
                  avatar: "/placeholder.svg?height=80&width=80",
                },
                {
                  quote:
                    "The leadership content has transformed how I approach team management. I've implemented several strategies with remarkable results.",
                  name: "Jennifer Patel",
                  title: "VP of Operations",
                  company: "Tech Innovations Inc.",
                  avatar: "/placeholder.svg?height=80&width=80",
                },
                {
                  quote:
                    "As someone navigating a career transition, the practical advice and industry insights have been instrumental in my professional development.",
                  name: "Marcus Johnson",
                  title: "Senior Product Manager",
                  company: "Digital Solutions Co.",
                  avatar: "/placeholder.svg?height=80&width=80",
                },
                {
                  quote:
                    "The premium resources have delivered exceptional ROI for our team. The frameworks and templates have become essential tools in our workflow.",
                  name: "Sophia Williams",
                  title: "Director of Strategy",
                  company: "Future Brands Inc.",
                  avatar: "/placeholder.svg?height=80&width=80",
                },
              ]}
              className="mt-12"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay="delay-300" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Stay Informed</div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter md:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Join over 25,000 professionals receiving our weekly insights on economics, leadership, and career
                development.
              </p>
              <div className="mt-6">
                <NewsletterSubscription compact />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay="delay-400" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">For Organizations</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl gradient-text">Corporate Solutions</h2>
                <p className="text-muted-foreground md:text-lg">
                  Empower your team with premium access to our comprehensive library of professional resources and
                  custom content solutions.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Team subscriptions with multi-user access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Custom research and analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Executive briefings and workshops</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Branded content and thought leadership</span>
                  </li>
                </ul>
                <Button asChild className="hover-scale transition-all duration-300">
                  <Link href="/corporate">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Corporate solutions"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  )
}
