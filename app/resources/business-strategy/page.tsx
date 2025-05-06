import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, FileText, Video, Download, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { AnimatedSection, AnimatedElement } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BusinessStrategyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <AnimatedSection
          animation="fade-in"
          className="w-full py-12 md:py-24 bg-gradient-to-br from-brand-50 to-white dark:from-background dark:to-muted/5"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-8">
              <Link
                href="/resources/hub"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resource Collections
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  Business Strategy Resources
                </h1>

                <p className="text-muted-foreground text-lg mb-6">
                  Tools and frameworks for strategic planning, market analysis, and decision-making to help you develop
                  and execute effective business strategies.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button asChild className="hover-scale transition-all duration-300">
                    <a href="#resources">
                      Browse Resources
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>

                  <Button variant="outline" asChild className="hover-scale transition-all duration-300">
                    <Link href="/premium/subscribe">Get Premium Access</Link>
                  </Button>
                </div>
              </div>

              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Business Strategy Resources"
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" className="w-full py-12 md:py-24" id="resources">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold">All Business Strategy Resources</h2>

              <div className="flex flex-col sm:flex-row gap-4">
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="title">Title A-Z</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter</span>
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="webinars">Webinars</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <AnimatedElement animation="slide-up" delay="delay-100">
                    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                      <CardHeader className="p-0">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          width={600}
                          height={400}
                          alt="Resource thumbnail"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </CardHeader>
                      <CardContent className="flex-1 p-6">
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            <FileText className="mr-1 h-3 w-3" />
                            Whitepaper
                          </Badge>
                          <Badge variant="outline">Free</Badge>
                        </div>
                        <CardTitle className="mt-2 line-clamp-2">
                          <Link href="/resources/whitepapers/digital-transformation-guide" className="hover:underline">
                            Digital Transformation: A Comprehensive Guide for Business Leaders
                          </Link>
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          A strategic framework for navigating digital transformation initiatives, including key
                          technologies, implementation strategies, and change management approaches.
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href="/resources/whitepapers/digital-transformation-guide">
                            <Download className="mr-2 h-4 w-4" />
                            Download Whitepaper
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </AnimatedElement>

                  <AnimatedElement animation="slide-up" delay="delay-200">
                    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                      <CardHeader className="p-0">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          width={600}
                          height={400}
                          alt="Resource thumbnail"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </CardHeader>
                      <CardContent className="flex-1 p-6">
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            <FileText className="mr-1 h-3 w-3" />
                            Template
                          </Badge>
                          <Badge variant="outline" className="text-amber-500 border-amber-500">
                            Premium
                          </Badge>
                        </div>
                        <CardTitle className="mt-2 line-clamp-2">
                          <Link href="/resources/templates/strategic-planning" className="hover:underline">
                            Strategic Planning Framework & Templates Bundle
                          </Link>
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          Comprehensive collection of templates for strategic planning, including SWOT analysis, OKR
                          setting, roadmapping, and implementation tracking tools.
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href="/resources/templates/strategic-planning">
                            <Download className="mr-2 h-4 w-4" />
                            Access Templates
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </AnimatedElement>

                  <AnimatedElement animation="slide-up" delay="delay-300">
                    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                      <CardHeader className="p-0">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          width={600}
                          height={400}
                          alt="Resource thumbnail"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </CardHeader>
                      <CardContent className="flex-1 p-6">
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            <Video className="mr-1 h-3 w-3" />
                            Webinar
                          </Badge>
                          <Badge variant="outline">Free</Badge>
                        </div>
                        <CardTitle className="mt-2 line-clamp-2">
                          <Link href="/resources/webinars/leadership-crisis-management" className="hover:underline">
                            Leadership in Crisis: Managing Teams Through Uncertainty
                          </Link>
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
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
                  </AnimatedElement>

                  <AnimatedElement animation="slide-up" delay="delay-100">
                    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                      <CardHeader className="p-0">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          width={600}
                          height={400}
                          alt="Resource thumbnail"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </CardHeader>
                      <CardContent className="flex-1 p-6">
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            <FileText className="mr-1 h-3 w-3" />
                            Guide
                          </Badge>
                          <Badge variant="outline">Free</Badge>
                        </div>
                        <CardTitle className="mt-2 line-clamp-2">
                          <Link href="/resources/guides/negotiation-mastery" className="hover:underline">
                            Negotiation Mastery: Strategies for Business Success
                          </Link>
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          Comprehensive guide to negotiation tactics, preparation frameworks, and psychological insights
                          to help you achieve better outcomes in business negotiations.
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href="/resources/guides/negotiation-mastery">
                            <Download className="mr-2 h-4 w-4" />
                            Download Guide
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </AnimatedElement>

                  <AnimatedElement animation="slide-up" delay="delay-200">
                    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                      <CardHeader className="p-0">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          width={600}
                          height={400}
                          alt="Resource thumbnail"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </CardHeader>
                      <CardContent className="flex-1 p-6">
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            <FileText className="mr-1 h-3 w-3" />
                            Whitepaper
                          </Badge>
                          <Badge variant="outline" className="text-amber-500 border-amber-500">
                            Premium
                          </Badge>
                        </div>
                        <CardTitle className="mt-2 line-clamp-2">
                          <Link href="/resources/whitepapers/future-of-finance" className="hover:underline">
                            The Future of Finance: Trends Reshaping Financial Services
                          </Link>
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          In-depth analysis of emerging trends in financial services, including fintech disruption,
                          regulatory changes, and evolving consumer expectations.
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href="/resources/whitepapers/future-of-finance">
                            <Download className="mr-2 h-4 w-4" />
                            Access Whitepaper
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </AnimatedElement>

                  <AnimatedElement animation="slide-up" delay="delay-300">
                    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                      <CardHeader className="p-0">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          width={600}
                          height={400}
                          alt="Resource thumbnail"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </CardHeader>
                      <CardContent className="flex-1 p-6">
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            <Video className="mr-1 h-3 w-3" />
                            Workshop
                          </Badge>
                          <Badge variant="outline" className="text-amber-500 border-amber-500">
                            Premium
                          </Badge>
                        </div>
                        <CardTitle className="mt-2 line-clamp-2">
                          <Link href="/resources/workshops/data-driven-decision" className="hover:underline">
                            Data-Driven Decision Making Workshop
                          </Link>
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          Interactive workshop materials on how to leverage data for strategic decision-making,
                          including frameworks for analysis, visualization techniques, and implementation strategies.
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href="/resources/workshops/data-driven-decision">
                            <Download className="mr-2 h-4 w-4" />
                            Access Workshop
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </AnimatedElement>
                </div>
              </TabsContent>

              <TabsContent value="templates">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Resource thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          <FileText className="mr-1 h-3 w-3" />
                          Template
                        </Badge>
                        <Badge variant="outline" className="text-amber-500 border-amber-500">
                          Premium
                        </Badge>
                      </div>
                      <CardTitle className="mt-2 line-clamp-2">
                        <Link href="/resources/templates/strategic-planning" className="hover:underline">
                          Strategic Planning Framework & Templates Bundle
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        Comprehensive collection of templates for strategic planning, including SWOT analysis, OKR
                        setting, roadmapping, and implementation tracking tools.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/resources/templates/strategic-planning">
                          <Download className="mr-2 h-4 w-4" />
                          Access Templates
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
                        alt="Resource thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          <FileText className="mr-1 h-3 w-3" />
                          Template
                        </Badge>
                        <Badge variant="outline">Free</Badge>
                      </div>
                      <CardTitle className="mt-2 line-clamp-2">
                        <Link href="/resources/templates/project-management" className="hover:underline">
                          Project Management Toolkit for Business Leaders
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        Complete set of project management templates including project charter, risk assessment,
                        stakeholder analysis, and progress tracking dashboards.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/resources/templates/project-management">
                          <Download className="mr-2 h-4 w-4" />
                          Download Templates
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="guides">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Resource thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          <FileText className="mr-1 h-3 w-3" />
                          Guide
                        </Badge>
                        <Badge variant="outline">Free</Badge>
                      </div>
                      <CardTitle className="mt-2 line-clamp-2">
                        <Link href="/resources/guides/negotiation-mastery" className="hover:underline">
                          Negotiation Mastery: Strategies for Business Success
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        Comprehensive guide to negotiation tactics, preparation frameworks, and psychological insights
                        to help you achieve better outcomes in business negotiations.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/resources/guides/negotiation-mastery">
                          <Download className="mr-2 h-4 w-4" />
                          Download Guide
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
                        alt="Resource thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          <FileText className="mr-1 h-3 w-3" />
                          Whitepaper
                        </Badge>
                        <Badge variant="outline">Free</Badge>
                      </div>
                      <CardTitle className="mt-2 line-clamp-2">
                        <Link href="/resources/whitepapers/digital-transformation-guide" className="hover:underline">
                          Digital Transformation: A Comprehensive Guide for Business Leaders
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        A strategic framework for navigating digital transformation initiatives, including key
                        technologies, implementation strategies, and change management approaches.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/resources/whitepapers/digital-transformation-guide">
                          <Download className="mr-2 h-4 w-4" />
                          Download Whitepaper
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="webinars">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Resource thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          <Video className="mr-1 h-3 w-3" />
                          Webinar
                        </Badge>
                        <Badge variant="outline">Free</Badge>
                      </div>
                      <CardTitle className="mt-2 line-clamp-2">
                        <Link href="/resources/webinars/leadership-crisis-management" className="hover:underline">
                          Leadership in Crisis: Managing Teams Through Uncertainty
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
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

                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Resource thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          <Video className="mr-1 h-3 w-3" />
                          Workshop
                        </Badge>
                        <Badge variant="outline" className="text-amber-500 border-amber-500">
                          Premium
                        </Badge>
                      </div>
                      <CardTitle className="mt-2 line-clamp-2">
                        <Link href="/resources/workshops/data-driven-decision" className="hover:underline">
                          Data-Driven Decision Making Workshop
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        Interactive workshop materials on how to leverage data for strategic decision-making, including
                        frameworks for analysis, visualization techniques, and implementation strategies.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/resources/workshops/data-driven-decision">
                          <Video className="mr-2 h-4 w-4" />
                          Access Workshop
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Looking for more specialized resources? Check out our premium subscription for exclusive access to our
                complete library.
              </p>
              <Button asChild className="hover-scale transition-all duration-300">
                <Link href="/premium/subscribe">
                  Upgrade to Premium
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  )
}
