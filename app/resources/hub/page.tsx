import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, Award, BookMarked, Briefcase, FileText, Video, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection, AnimatedElement } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"

export default function ResourcesHubPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <AnimatedSection
          animation="fade-in"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-brand-50 to-white dark:from-background dark:to-muted/5"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-text">
                    Resources Hub
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Curated collections of templates, guides, and tools organized by topics to help you excel in your
                    professional journey.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="hover-scale transition-all duration-300">
                    <Link href="#featured-collections">
                      Explore Resources
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="hover-scale transition-all duration-300">
                    <Link href="/resources">All Resources</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=800"
                width={800}
                height={550}
                alt="Resources Hub illustration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" className="w-full py-12 md:py-24 lg:py-32" id="featured-collections">
          <div className="container px-4 md:px-6">
            <div className="mb-12 space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resource Collections</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Browse our carefully curated collections designed to help you succeed in different areas of your
                professional life.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatedElement animation="slide-up" delay="delay-100">
                <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Business Strategy</CardTitle>
                    <CardDescription>Tools and frameworks for strategic planning and decision-making</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Strategic Planning Templates</span>
                        <Badge variant="outline">10 items</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Competitive Analysis Guides</span>
                        <Badge variant="outline">5 items</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Market Research Frameworks</span>
                        <Badge variant="outline">7 items</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full hover-scale transition-all duration-300">
                      <Link href="/resources/business-strategy">
                        Explore Collection
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedElement>

              <AnimatedElement animation="slide-up" delay="delay-200">
                <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Career Development</CardTitle>
                    <CardDescription>Resources to help you advance your professional journey</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Resume & Cover Letter Templates</span>
                        <Badge variant="outline">8 items</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Interview Preparation Guides</span>
                        <Badge variant="outline">6 items</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Networking Strategy Tools</span>
                        <Badge variant="outline">4 items</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full hover-scale transition-all duration-300">
                      <Link href="/resources/career-development">
                        Explore Collection
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedElement>

              <AnimatedElement animation="slide-up" delay="delay-300">
                <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Leadership & Management</CardTitle>
                    <CardDescription>Tools for effective team leadership and management excellence</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Team Performance Frameworks</span>
                        <Badge variant="outline">9 items</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Feedback & Coaching Templates</span>
                        <Badge variant="outline">7 items</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Change Management Guides</span>
                        <Badge variant="outline">5 items</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full hover-scale transition-all duration-300">
                      <Link href="/resources/leadership">
                        Explore Collection
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedElement>

              <AnimatedElement animation="slide-up" delay="delay-100">
                <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Financial Planning</CardTitle>
                    <CardDescription>Resources for financial analysis, modeling, and investment</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Financial Model Templates</span>
                        <Badge variant="outline">12 items</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Investment Analysis Tools</span>
                        <Badge variant="outline">6 items</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Budget Planning Guides</span>
                        <Badge variant="outline">8 items</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full hover-scale transition-all duration-300">
                      <Link href="/resources/financial-planning">
                        Explore Collection
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedElement>

              <AnimatedElement animation="slide-up" delay="delay-200">
                <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <BookMarked className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Project Management</CardTitle>
                    <CardDescription>
                      Tools for planning, executing, and monitoring projects effectively
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Project Planning Templates</span>
                        <Badge variant="outline">10 items</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Risk Management Frameworks</span>
                        <Badge variant="outline">5 items</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Agile & Scrum Resources</span>
                        <Badge variant="outline">7 items</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full hover-scale transition-all duration-300">
                      <Link href="/resources/project-management">
                        Explore Collection
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedElement>

              <AnimatedElement animation="slide-up" delay="delay-300">
                <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Video className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Presentation & Communication</CardTitle>
                    <CardDescription>Resources to enhance your presentation and communication skills</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Presentation Templates</span>
                        <Badge variant="outline">15 items</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Communication Strategy Guides</span>
                        <Badge variant="outline">8 items</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Visual Storytelling Resources</span>
                        <Badge variant="outline">6 items</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full hover-scale transition-all duration-300">
                      <Link href="/resources/communication">
                        Explore Collection
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedElement>
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild className="hover-scale transition-all duration-300">
                <Link href="/resources">
                  View All Collections
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay="delay-200" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Featured Resources</h2>

              <div className="grid gap-8 md:grid-cols-2">
                <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                  <CardHeader className="p-0">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Resource thumbnail"
                      className="aspect-video w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </CardHeader>
                  <CardContent className="flex-1 p-6">
                    <div className="flex justify-between items-center mb-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        <FileText className="mr-1 h-3 w-3" />
                        Template
                      </Badge>
                      <Badge variant="outline" className="text-muted-foreground">
                        Premium
                      </Badge>
                    </div>
                    <CardTitle className="mt-2 line-clamp-2">
                      <Link href="/resources/templates/strategic-planning" className="hover:underline">
                        Strategic Planning Framework & Templates Bundle
                      </Link>
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Comprehensive collection of templates for strategic planning, including SWOT analysis, OKR
                      setting, roadmapping, and implementation tracking tools.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button className="w-full hover-scale transition-all duration-300" asChild>
                      <Link href="/resources/templates/strategic-planning">
                        <Download className="mr-2 h-4 w-4" />
                        Access Resource
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                  <CardHeader className="p-0">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Resource thumbnail"
                      className="aspect-video w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </CardHeader>
                  <CardContent className="flex-1 p-6">
                    <div className="flex justify-between items-center mb-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        <Video className="mr-1 h-3 w-3" />
                        Webinar
                      </Badge>
                      <Badge variant="outline" className="text-muted-foreground">
                        Free
                      </Badge>
                    </div>
                    <CardTitle className="mt-2 line-clamp-2">
                      <Link href="/resources/webinars/leadership-crisis-management" className="hover:underline">
                        Leadership in Crisis: Managing Teams Through Uncertainty
                      </Link>
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Expert panel discussion on effective leadership strategies during times of crisis, featuring
                      insights from CEOs who successfully navigated major disruptions.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button className="w-full hover-scale transition-all duration-300" asChild>
                      <Link href="/resources/webinars/leadership-crisis-management">
                        <Video className="mr-2 h-4 w-4" />
                        Watch Webinar
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="mt-12 text-center">
                <Button variant="outline" size="lg" asChild className="hover-scale transition-all duration-300">
                  <Link href="/resources">
                    Browse All Resources
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay="delay-300" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter gradient-text">Need Custom Resources?</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Our team can create tailored resources to address your specific business challenges and objectives.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild className="hover-scale transition-all duration-300">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <SiteFooter />
    </div>
  )
}
