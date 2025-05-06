import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, FileText, Video, Headphones } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection, AnimatedElement } from "@/components/animated-section"
import { NewsletterSubscription } from "@/components/newsletter-subscription"

export default function ResourcesPage() {
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
                    Professional Resources Hub
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Access our comprehensive collection of tools, templates, guides, and insights to accelerate your
                    professional growth and business success.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="hover-scale transition-all duration-300">
                    <Link href="#featured-resources">
                      Explore Resources
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="hover-scale transition-all duration-300">
                    <Link href="/premium">Premium Access</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=800"
                width={800}
                height={550}
                alt="Resources illustration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" className="w-full py-12 md:py-24 lg:py-32" id="featured-resources">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-100 px-3 py-1 text-sm font-medium">
                  Featured Resources
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-text">
                  Tools for Professional Excellence
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our most popular resources designed to help you excel in your career and business endeavors.
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="mt-12">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All Resources</TabsTrigger>
                  <TabsTrigger value="guides">Guides & Whitepapers</TabsTrigger>
                  <TabsTrigger value="templates">Templates</TabsTrigger>
                  <TabsTrigger value="webinars">Webinars</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-8">
                <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                          <FileText className="mr-1 h-3 w-3" />
                          Whitepaper
                        </div>
                        <CardTitle className="mt-4 line-clamp-2">
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
                        <Button variant="outline" className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href="/resources/whitepapers/digital-transformation-guide">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
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
                        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                          <Video className="mr-1 h-3 w-3" />
                          Webinar
                        </div>
                        <CardTitle className="mt-4 line-clamp-2">
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
                        <Button variant="outline" className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href="/resources/webinars/leadership-crisis-management">
                            <Video className="mr-2 h-4 w-4" />
                            Watch Webinar
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
                        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                          <FileText className="mr-1 h-3 w-3" />
                          Template
                        </div>
                        <CardTitle className="mt-4 line-clamp-2">
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
                        <Button variant="outline" className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href="/resources/templates/strategic-planning">
                            <Download className="mr-2 h-4 w-4" />
                            Download Templates
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
                        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                          <Headphones className="mr-1 h-3 w-3" />
                          Podcast
                        </div>
                        <CardTitle className="mt-4 line-clamp-2">
                          <Link href="/resources/podcast/future-of-work" className="hover:underline">
                            The Future of Work: Adapting to AI and Automation
                          </Link>
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          In-depth discussion with industry experts on how AI and automation are reshaping the workplace
                          and strategies for professionals to adapt and thrive.
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button variant="outline" className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href="/resources/podcast/future-of-work">
                            <Headphones className="mr-2 h-4 w-4" />
                            Listen to Episode
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
                        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                          <FileText className="mr-1 h-3 w-3" />
                          Guide
                        </div>
                        <CardTitle className="mt-4 line-clamp-2">
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
                        <Button variant="outline" className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href="/resources/guides/negotiation-mastery">
                            <Download className="mr-2 h-4 w-4" />
                            Download Guide
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
                        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                          <Video className="mr-1 h-3 w-3" />
                          Workshop
                        </div>
                        <CardTitle className="mt-4 line-clamp-2">
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
                        <Button variant="outline" className="w-full hover-scale transition-all duration-300" asChild>
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

              <TabsContent value="guides" className="mt-8">
                <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                      <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        <FileText className="mr-1 h-3 w-3" />
                        Whitepaper
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
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
                      <Button variant="outline" className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/resources/whitepapers/digital-transformation-guide">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
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
                      <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        <FileText className="mr-1 h-3 w-3" />
                        Guide
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
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
                      <Button variant="outline" className="w-full hover-scale transition-all duration-300" asChild>
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
                      <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        <FileText className="mr-1 h-3 w-3" />
                        Whitepaper
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
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
                      <Button variant="outline" className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/resources/whitepapers/future-of-finance">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="templates" className="mt-8">
                <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                      <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        <FileText className="mr-1 h-3 w-3" />
                        Template
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
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
                      <Button variant="outline" className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/resources/templates/strategic-planning">
                          <Download className="mr-2 h-4 w-4" />
                          Download Templates
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
                      <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        <FileText className="mr-1 h-3 w-3" />
                        Template
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
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
                      <Button variant="outline" className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/resources/templates/project-management">
                          <Download className="mr-2 h-4 w-4" />
                          Download Templates
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
                      <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        <FileText className="mr-1 h-3 w-3" />
                        Template
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
                        <Link href="/resources/templates/financial-modeling" className="hover:underline">
                          Financial Modeling Excel Templates for Business Planning
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        Professional-grade financial modeling templates for forecasting, valuation, budgeting, and
                        scenario analysis with built-in formulas and dashboards.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="outline" className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/resources/templates/financial-modeling">
                          <Download className="mr-2 h-4 w-4" />
                          Download Templates
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="webinars" className="mt-8">
                <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                      <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        <Video className="mr-1 h-3 w-3" />
                        Webinar
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
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
                      <Button variant="outline" className="w-full hover-scale transition-all duration-300" asChild>
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
                      <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        <Video className="mr-1 h-3 w-3" />
                        Webinar
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
                        <Link href="/resources/webinars/ai-business-applications" className="hover:underline">
                          AI in Business: Practical Applications for Growth
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        Comprehensive overview of how businesses are leveraging AI for competitive advantage, with case
                        studies and implementation strategies for various industries.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="outline" className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/resources/webinars/ai-business-applications">
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
                      <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        <Video className="mr-1 h-3 w-3" />
                        Workshop
                      </div>
                      <CardTitle className="mt-4 line-clamp-2">
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
                      <Button variant="outline" className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/resources/workshops/data-driven-decision">
                          <Download className="mr-2 h-4 w-4" />
                          Access Workshop
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
                <Link href="/resources/all">
                  View All Resources
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay="delay-200" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Premium Access</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl gradient-text">
                  Unlock Exclusive Resources
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Subscribe to our premium plan to access our complete library of professional resources, including
                  exclusive content not available to free users.
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
                    <span>Unlimited access to all premium resources</span>
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
                    <span>Early access to new content</span>
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
                    <span>Monthly live webinars with industry experts</span>
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
                    <span>Customizable templates and tools</span>
                  </li>
                </ul>
                <Button asChild className="hover-scale transition-all duration-300">
                  <Link href="/premium">
                    Explore Premium
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Premium resources"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay="delay-300" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-block rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-100 px-3 py-1 text-sm font-medium">
                Stay Updated
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter md:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Get notified when we release new resources, guides, and insights to help you excel in your professional
                journey.
              </p>
              <div className="mt-6">
                <NewsletterSubscription compact />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <SiteFooter />
    </div>
  )
}
