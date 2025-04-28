import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection, AnimatedElement } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"

export default function EventsPage() {
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
                    Events Calendar
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join our upcoming webinars, workshops, and conferences to connect with industry experts and fellow
                    professionals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="hover-scale transition-all duration-300">
                    <Link href="#upcoming-events">
                      View Events
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="hover-scale transition-all duration-300">
                    <Link href="/events/submit">Submit an Event</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=800"
                width={800}
                height={550}
                alt="Events illustration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" className="w-full py-12 md:py-24 lg:py-32" id="upcoming-events">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-100 px-3 py-1 text-sm font-medium">
                  Events Calendar
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-text">
                  Upcoming Professional Events
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Expand your knowledge and network with our curated selection of professional events.
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="mt-12">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All Events</TabsTrigger>
                  <TabsTrigger value="webinars">Webinars</TabsTrigger>
                  <TabsTrigger value="workshops">Workshops</TabsTrigger>
                  <TabsTrigger value="conferences">Conferences</TabsTrigger>
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
                          alt="Event thumbnail"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </CardHeader>
                      <CardContent className="flex-1 p-6">
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            Webinar
                          </Badge>
                          <Badge variant="outline" className="text-muted-foreground">
                            Free
                          </Badge>
                        </div>
                        <CardTitle className="mt-2 line-clamp-2">
                          <Link href="/events/leadership-innovation-webinar" className="hover:underline">
                            Leadership Innovation in the Digital Age
                          </Link>
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          Join industry leaders as they discuss innovative leadership approaches for navigating digital
                          transformation and organizational change.
                        </CardDescription>
                        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-primary" />
                            <span>June 15, 2023</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-primary" />
                            <span>2:00 PM - 3:30 PM EST</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4 text-primary" />
                            <span>Online (Zoom)</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4 text-primary" />
                            <span>500+ Registered</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href="/events/leadership-innovation-webinar">
                            Register Now
                            <ArrowRight className="ml-2 h-4 w-4" />
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
                          alt="Event thumbnail"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </CardHeader>
                      <CardContent className="flex-1 p-6">
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            Workshop
                          </Badge>
                          <Badge variant="outline" className="text-muted-foreground">
                            Premium
                          </Badge>
                        </div>
                        <CardTitle className="mt-2 line-clamp-2">
                          <Link href="/events/data-analytics-workshop" className="hover:underline">
                            Advanced Data Analytics for Business Decision-Making
                          </Link>
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          A hands-on workshop teaching practical data analysis techniques to drive strategic business
                          decisions and identify growth opportunities.
                        </CardDescription>
                        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-primary" />
                            <span>June 22, 2023</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-primary" />
                            <span>10:00 AM - 4:00 PM EST</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4 text-primary" />
                            <span>Online (Interactive)</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4 text-primary" />
                            <span>Limited to 50 Participants</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href="/events/data-analytics-workshop">
                            Register Now
                            <ArrowRight className="ml-2 h-4 w-4" />
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
                          alt="Event thumbnail"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </CardHeader>
                      <CardContent className="flex-1 p-6">
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            Conference
                          </Badge>
                          <Badge variant="outline" className="text-muted-foreground">
                            Paid
                          </Badge>
                        </div>
                        <CardTitle className="mt-2 line-clamp-2">
                          <Link href="/events/future-of-finance-conference" className="hover:underline">
                            Future of Finance Global Conference 2023
                          </Link>
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          A premier gathering of financial leaders exploring emerging trends, technologies, and
                          strategies shaping the future of the financial industry.
                        </CardDescription>
                        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-primary" />
                            <span>July 10-12, 2023</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-primary" />
                            <span>9:00 AM - 5:00 PM Daily</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4 text-primary" />
                            <span>New York Hilton Midtown</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4 text-primary" />
                            <span>1,200+ Attendees Expected</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href="/events/future-of-finance-conference">
                            Register Now
                            <ArrowRight className="ml-2 h-4 w-4" />
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
                          alt="Event thumbnail"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </CardHeader>
                      <CardContent className="flex-1 p-6">
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            Webinar
                          </Badge>
                          <Badge variant="outline" className="text-muted-foreground">
                            Free
                          </Badge>
                        </div>
                        <CardTitle className="mt-2 line-clamp-2">
                          <Link href="/events/ai-business-applications" className="hover:underline">
                            AI Applications for Business Growth
                          </Link>
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          Discover practical AI applications that businesses of all sizes can implement to drive
                          efficiency, innovation, and competitive advantage.
                        </CardDescription>
                        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-primary" />
                            <span>June 28, 2023</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-primary" />
                            <span>1:00 PM - 2:30 PM EST</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4 text-primary" />
                            <span>Online (Zoom)</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4 text-primary" />
                            <span>750+ Registered</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href="/events/ai-business-applications">
                            Register Now
                            <ArrowRight className="ml-2 h-4 w-4" />
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
                          alt="Event thumbnail"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </CardHeader>
                      <CardContent className="flex-1 p-6">
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            Workshop
                          </Badge>
                          <Badge variant="outline" className="text-muted-foreground">
                            Premium
                          </Badge>
                        </div>
                        <CardTitle className="mt-2 line-clamp-2">
                          <Link href="/events/strategic-negotiation-workshop" className="hover:underline">
                            Strategic Negotiation Masterclass
                          </Link>
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          An intensive workshop teaching advanced negotiation techniques for business leaders, featuring
                          role-playing exercises and personalized feedback.
                        </CardDescription>
                        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-primary" />
                            <span>July 5, 2023</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-primary" />
                            <span>9:00 AM - 5:00 PM EST</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4 text-primary" />
                            <span>Online (Interactive)</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4 text-primary" />
                            <span>Limited to 30 Participants</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href="/events/strategic-negotiation-workshop">
                            Register Now
                            <ArrowRight className="ml-2 h-4 w-4" />
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
                          alt="Event thumbnail"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </CardHeader>
                      <CardContent className="flex-1 p-6">
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            Conference
                          </Badge>
                          <Badge variant="outline" className="text-muted-foreground">
                            Paid
                          </Badge>
                        </div>
                        <CardTitle className="mt-2 line-clamp-2">
                          <Link href="/events/sustainable-business-summit" className="hover:underline">
                            Sustainable Business Summit 2023
                          </Link>
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          A gathering of business leaders and sustainability experts exploring strategies for building
                          environmentally and socially responsible businesses.
                        </CardDescription>
                        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-primary" />
                            <span>July 20-21, 2023</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-primary" />
                            <span>9:00 AM - 6:00 PM Daily</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4 text-primary" />
                            <span>San Francisco Marriott Marquis</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4 text-primary" />
                            <span>800+ Attendees Expected</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href="/events/sustainable-business-summit">
                            Register Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </AnimatedElement>
                </div>
              </TabsContent>

              <TabsContent value="webinars" className="mt-8">
                <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Webinar content would go here - similar cards filtered for webinars only */}
                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Event thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          Webinar
                        </Badge>
                        <Badge variant="outline" className="text-muted-foreground">
                          Free
                        </Badge>
                      </div>
                      <CardTitle className="mt-2 line-clamp-2">
                        <Link href="/events/leadership-innovation-webinar" className="hover:underline">
                          Leadership Innovation in the Digital Age
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        Join industry leaders as they discuss innovative leadership approaches for navigating digital
                        transformation and organizational change.
                      </CardDescription>
                      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-primary" />
                          <span>June 15, 2023</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-primary" />
                          <span>2:00 PM - 3:30 PM EST</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 text-primary" />
                          <span>Online (Zoom)</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4 text-primary" />
                          <span>500+ Registered</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/events/leadership-innovation-webinar">
                          Register Now
                          <ArrowRight className="ml-2 h-4 w-4" />
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
                        alt="Event thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          Webinar
                        </Badge>
                        <Badge variant="outline" className="text-muted-foreground">
                          Free
                        </Badge>
                      </div>
                      <CardTitle className="mt-2 line-clamp-2">
                        <Link href="/events/ai-business-applications" className="hover:underline">
                          AI Applications for Business Growth
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        Discover practical AI applications that businesses of all sizes can implement to drive
                        efficiency, innovation, and competitive advantage.
                      </CardDescription>
                      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-primary" />
                          <span>June 28, 2023</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-primary" />
                          <span>1:00 PM - 2:30 PM EST</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 text-primary" />
                          <span>Online (Zoom)</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4 text-primary" />
                          <span>750+ Registered</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/events/ai-business-applications">
                          Register Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="workshops" className="mt-8">
                <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Workshop content would go here - similar cards filtered for workshops only */}
                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Event thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          Workshop
                        </Badge>
                        <Badge variant="outline" className="text-muted-foreground">
                          Premium
                        </Badge>
                      </div>
                      <CardTitle className="mt-2 line-clamp-2">
                        <Link href="/events/data-analytics-workshop" className="hover:underline">
                          Advanced Data Analytics for Business Decision-Making
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        A hands-on workshop teaching practical data analysis techniques to drive strategic business
                        decisions and identify growth opportunities.
                      </CardDescription>
                      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-primary" />
                          <span>June 22, 2023</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-primary" />
                          <span>10:00 AM - 4:00 PM EST</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 text-primary" />
                          <span>Online (Interactive)</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4 text-primary" />
                          <span>Limited to 50 Participants</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/events/data-analytics-workshop">
                          Register Now
                          <ArrowRight className="ml-2 h-4 w-4" />
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
                        alt="Event thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          Workshop
                        </Badge>
                        <Badge variant="outline" className="text-muted-foreground">
                          Premium
                        </Badge>
                      </div>
                      <CardTitle className="mt-2 line-clamp-2">
                        <Link href="/events/strategic-negotiation-workshop" className="hover:underline">
                          Strategic Negotiation Masterclass
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        An intensive workshop teaching advanced negotiation techniques for business leaders, featuring
                        role-playing exercises and personalized feedback.
                      </CardDescription>
                      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-primary" />
                          <span>July 5, 2023</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-primary" />
                          <span>9:00 AM - 5:00 PM EST</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 text-primary" />
                          <span>Online (Interactive)</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4 text-primary" />
                          <span>Limited to 30 Participants</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/events/strategic-negotiation-workshop">
                          Register Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="conferences" className="mt-8">
                <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Conference content would go here - similar cards filtered for conferences only */}
                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Event thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          Conference
                        </Badge>
                        <Badge variant="outline" className="text-muted-foreground">
                          Paid
                        </Badge>
                      </div>
                      <CardTitle className="mt-2 line-clamp-2">
                        <Link href="/events/future-of-finance-conference" className="hover:underline">
                          Future of Finance Global Conference 2023
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        A premier gathering of financial leaders exploring emerging trends, technologies, and strategies
                        shaping the future of the financial industry.
                      </CardDescription>
                      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-primary" />
                          <span>July 10-12, 2023</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-primary" />
                          <span>9:00 AM - 5:00 PM Daily</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 text-primary" />
                          <span>New York Hilton Midtown</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4 text-primary" />
                          <span>1,200+ Attendees Expected</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/events/future-of-finance-conference">
                          Register Now
                          <ArrowRight className="ml-2 h-4 w-4" />
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
                        alt="Event thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          Conference
                        </Badge>
                        <Badge variant="outline" className="text-muted-foreground">
                          Paid
                        </Badge>
                      </div>
                      <CardTitle className="mt-2 line-clamp-2">
                        <Link href="/events/sustainable-business-summit" className="hover:underline">
                          Sustainable Business Summit 2023
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        A gathering of business leaders and sustainability experts exploring strategies for building
                        environmentally and socially responsible businesses.
                      </CardDescription>
                      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-primary" />
                          <span>July 20-21, 2023</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-primary" />
                          <span>9:00 AM - 6:00 PM Daily</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 text-primary" />
                          <span>San Francisco Marriott Marquis</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4 text-primary" />
                          <span>800+ Attendees Expected</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full hover-scale transition-all duration-300" asChild>
                        <Link href="/events/sustainable-business-summit">
                          Register Now
                          <ArrowRight className="ml-2 h-4 w-4" />
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
                <Link href="/events/all">
                  View All Events
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
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Host Your Own Event</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl gradient-text">Partner With Us</h2>
                <p className="text-muted-foreground md:text-lg">
                  Interested in hosting your own event or webinar with our platform? We offer comprehensive support for
                  event planning, promotion, and execution.
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
                    <span>Access to our professional event platform</span>
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
                    <span>Promotion to our community of professionals</span>
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
                    <span>Technical support and event management</span>
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
                    <span>Post-event analytics and attendee insights</span>
                  </li>
                </ul>
                <Button asChild className="hover-scale transition-all duration-300">
                  <Link href="/events/partner">
                    Become a Partner
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Event partnership"
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
              <h2 className="mt-4 text-3xl font-bold tracking-tighter md:text-4xl">Never Miss an Event</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Subscribe to our events newsletter to receive notifications about upcoming webinars, workshops, and
                conferences.
              </p>
              <div className="mt-6">
                <form className="flex flex-col gap-2 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button type="submit" className="hover-scale transition-all duration-300">
                    Subscribe
                  </Button>
                </form>
                <p className="mt-2 text-xs text-muted-foreground">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <SiteFooter />
    </div>
  )
}
