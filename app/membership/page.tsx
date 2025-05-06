import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"

export default function MembershipPage() {
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
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Join Our Exclusive Membership Community
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Get unlimited access to premium content, resources, and a community of like-minded professionals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#pricing">
                      View Membership Options
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#benefits">Learn More</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=800"
                width={800}
                height={550}
                alt="Membership community illustration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Membership Benefits</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Our membership provides exclusive benefits designed to accelerate your professional growth and give you
                a competitive edge.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Check className="h-8 w-8 text-primary" />
                  <CardTitle>Exclusive Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Access in-depth analysis, research reports, and expert insights not available to regular visitors.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Check className="h-8 w-8 text-primary" />
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
                  <Check className="h-8 w-8 text-primary" />
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
                  <Check className="h-8 w-8 text-primary" />
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
                  <Check className="h-8 w-8 text-primary" />
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
                  <Check className="h-8 w-8 text-primary" />
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
        </AnimatedSection>

        <AnimatedSection animation="slide-up" id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Membership Plans</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Choose the plan that best fits your professional needs and budget.
              </p>
            </div>

            <Tabs defaultValue="monthly" className="mt-12 mx-auto max-w-4xl">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                  <TabsTrigger value="annual">
                    Annual Billing{" "}
                    <span className="ml-1 text-xs bg-primary/20 text-primary rounded-full px-2 py-0.5">Save 20%</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="monthly" className="space-y-4">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Basic Plan */}
                  <Card className="flex flex-col border-2">
                    <CardHeader>
                      <CardTitle>Basic</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $9<span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
                      </div>
                      <CardDescription className="mt-4">
                        Essential resources for individual professionals
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Access to all articles and guides</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Limited template downloads (5/month)</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Monthly newsletter</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Ad-free reading experience</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/membership/subscribe?plan=basic-monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Professional Plan */}
                  <Card className="flex flex-col border-2 border-primary relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
                      Most Popular
                    </div>
                    <CardHeader>
                      <CardTitle>Professional</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $19<span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
                      </div>
                      <CardDescription className="mt-4">
                        Comprehensive resources for growing professionals
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>All Basic plan features</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Unlimited template downloads</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Access to webinar recordings</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Quarterly trend reports</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Community forum access</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <Link href="/membership/subscribe?plan=professional-monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Executive Plan */}
                  <Card className="flex flex-col border-2">
                    <CardHeader>
                      <CardTitle>Executive</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $39<span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
                      </div>
                      <CardDescription className="mt-4">
                        Premium resources for executive-level professionals
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>All Professional plan features</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Early access to all content</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Live webinar participation</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Exclusive executive briefings</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Annual 1:1 career consultation</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Link href="/membership/subscribe?plan=executive-monthly">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="annual" className="space-y-4">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Basic Annual Plan */}
                  <Card className="flex flex-col border-2">
                    <CardHeader>
                      <CardTitle>Basic</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $79<span className="ml-1 text-xl font-normal text-muted-foreground">/year</span>
                      </div>
                      <CardDescription className="mt-1 text-sm text-green-600">
                        Save $29 compared to monthly
                      </CardDescription>
                      <CardDescription className="mt-4">
                        Essential resources for individual professionals
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Access to all articles and guides</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Limited template downloads (5/month)</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Monthly newsletter</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Ad-free reading experience</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Link href="/membership/subscribe?plan=basic-annual">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Professional Annual Plan */}
                  <Card className="flex flex-col border-2 border-primary relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
                      Most Popular
                    </div>
                    <CardHeader>
                      <CardTitle>Professional</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $149<span className="ml-1 text-xl font-normal text-muted-foreground">/year</span>
                      </div>
                      <CardDescription className="mt-1 text-sm text-green-600">
                        Save $79 compared to monthly
                      </CardDescription>
                      <CardDescription className="mt-4">
                        Comprehensive resources for growing professionals
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>All Basic plan features</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Unlimited template downloads</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Access to webinar recordings</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Quarterly trend reports</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Community forum access</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <Link href="/membership/subscribe?plan=professional-annual">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Executive Annual Plan */}
                  <Card className="flex flex-col border-2">
                    <CardHeader>
                      <CardTitle>Executive</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $299<span className="ml-1 text-xl font-normal text-muted-foreground">/year</span>
                      </div>
                      <CardDescription className="mt-1 text-sm text-green-600">
                        Save $169 compared to monthly
                      </CardDescription>
                      <CardDescription className="mt-4">
                        Premium resources for executive-level professionals
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>All Professional plan features</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Early access to all content</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Live webinar participation</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Exclusive executive briefings</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Annual 1:1 career consultation</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Link href="/membership/subscribe?plan=executive-annual">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Find answers to common questions about our membership program.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>How does the membership billing work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our memberships are billed automatically at the start of each billing period (monthly or annual).
                    You can cancel anytime through your account settings. If you cancel, you'll still have access until
                    the end of your current billing period.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can I switch between membership plans?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Yes, you can upgrade or downgrade your membership at any time. When upgrading, you'll be billed the
                    prorated difference. When downgrading, changes will take effect at the end of your current billing
                    cycle.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Is there a free trial available?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We offer a 7-day free trial for all new members. You can experience all the features of your chosen
                    plan before being charged. You can cancel anytime during the trial period.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What payment methods do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We accept various payment methods including credit/debit cards, PayPal, and regional payment options
                    like eSewa and Khalti for Nepali users, Razorpay for Indian users, and more. You can select your
                    preferred payment method during checkout.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What's your refund policy?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    If you're not satisfied with your membership, you can request a refund within 14 days of purchase.
                    Please contact our support team for assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          animation="slide-up"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-brand-50 to-white dark:from-background dark:to-muted/5"
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to join our professional community?
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Get unlimited access to premium content, resources, and a community of like-minded professionals.
              </p>
              <div className="mt-8">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="#pricing">Become a Member</Link>
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
