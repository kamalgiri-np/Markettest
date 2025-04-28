import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PremiumPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Premium Insights for Professional Growth
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Gain exclusive access to in-depth analysis, research reports, and expert resources designed for
                    ambitious professionals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/premium/subscribe">
                      Subscribe Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/premium/preview">Preview Content</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=800"
                width={800}
                height={550}
                alt="Premium content illustration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Premium?</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Our premium subscription provides exclusive benefits designed to accelerate your professional growth and
                give you a competitive edge.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <CardTitle>Exclusive Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Access in-depth analysis, research reports, and expert insights not available to regular
                    subscribers.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <CardTitle>Early Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Get early access to our most valuable content before it's available to the general public.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <CardTitle>Expert Webinars</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Participate in monthly webinars with industry experts and thought leaders on trending topics.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <CardTitle>Resource Library</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Download templates, frameworks, and tools to implement strategies discussed in our content.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <CardTitle>Community Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Connect with like-minded professionals in our exclusive community forum for networking and
                    discussion.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <CardTitle>Ad-Free Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Enjoy an ad-free reading experience across all our content platforms.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Premium Content</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                A selection of our premium content to give you a taste of what's available with a subscription.
              </p>
            </div>

            <Tabs defaultValue="reports" className="mt-12">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="reports">Research Reports</TabsTrigger>
                  <TabsTrigger value="whitepapers">Whitepapers</TabsTrigger>
                  <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="reports" className="mt-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="relative overflow-hidden">
                    <div className="absolute right-2 top-2 z-10 rounded-full bg-background/80 p-1.5 backdrop-blur">
                      <Lock className="h-4 w-4 text-primary" />
                    </div>
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Report thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="line-clamp-2">
                        2023 Global Economic Outlook: Navigating Uncertainty
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        A comprehensive analysis of global economic trends, challenges, and opportunities for businesses
                        in the coming year.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/premium/subscribe">
                          <Lock className="mr-2 h-4 w-4" />
                          Unlock with Premium
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="relative overflow-hidden">
                    <div className="absolute right-2 top-2 z-10 rounded-full bg-background/80 p-1.5 backdrop-blur">
                      <Lock className="h-4 w-4 text-primary" />
                    </div>
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Report thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="line-clamp-2">
                        The Future of Work: Remote Work Trends and Implications
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        An in-depth study on how remote work is reshaping organizational structures, productivity, and
                        talent acquisition strategies.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/premium/subscribe">
                          <Lock className="mr-2 h-4 w-4" />
                          Unlock with Premium
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="relative overflow-hidden">
                    <div className="absolute right-2 top-2 z-10 rounded-full bg-background/80 p-1.5 backdrop-blur">
                      <Lock className="h-4 w-4 text-primary" />
                    </div>
                    <CardHeader className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt="Report thumbnail"
                        className="aspect-[4/3] w-full rounded-t-lg object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="line-clamp-2">
                        Digital Transformation in Financial Services: 2023 Benchmark
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        A comprehensive benchmark study of digital transformation initiatives across the financial
                        services industry.
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/premium/subscribe">
                          <Lock className="mr-2 h-4 w-4" />
                          Unlock with Premium
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="whitepapers" className="mt-8">
                {/* Similar content for whitepapers */}
              </TabsContent>

              <TabsContent value="case-studies" className="mt-8">
                {/* Similar content for case studies */}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Subscription Plans</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Choose the plan that best fits your professional needs and budget.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Monthly</CardTitle>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    $19<span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Full access to premium content</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Monthly webinars</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Resource library access</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Ad-free experience</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/premium/subscribe?plan=monthly">Subscribe Now</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col border-primary">
                <CardHeader className="bg-primary/5">
                  <div className="text-sm font-medium text-primary">Most Popular</div>
                  <CardTitle>Annual</CardTitle>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    $149<span className="ml-1 text-xl font-normal text-muted-foreground">/year</span>
                  </div>
                  <CardDescription className="mt-2">Save $79 compared to monthly</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>All features in Monthly plan</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>2 exclusive e-books per year</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Quarterly trend reports</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Community forum access</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/premium/subscribe?plan=annual">Subscribe Now</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    Custom<span className="ml-1 text-xl font-normal text-muted-foreground">/team</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>All features in Annual plan</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Multi-user access</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Custom research requests</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Dedicated account manager</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/premium/enterprise">Contact Sales</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
