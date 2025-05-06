import Link from "next/link"
import Image from "next/image"
import { Check, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PremiumSubscribePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <AnimatedSection
          animation="fade-in"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-brand-50 to-white dark:from-background dark:to-muted/5"
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl gradient-text">
                Elevate Your Professional Growth
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl lg:text-2xl">
                Choose the plan that best fits your professional needs and unlock exclusive content, resources, and
                opportunities.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="monthly" className="mx-auto max-w-4xl">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                  <TabsTrigger value="annual">
                    Annual Billing{" "}
                    <span className="ml-1 text-xs bg-primary/20 text-primary rounded-full px-2 py-0.5">Save 34%</span>
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
                      <Button className="w-full hover-scale transition-all duration-300">Subscribe Now</Button>
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
                      <Button className="w-full bg-primary hover:bg-primary/90 hover-scale transition-all duration-300">
                        Subscribe Now
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
                      <Button className="w-full hover-scale transition-all duration-300">Subscribe Now</Button>
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
                      <Button className="w-full hover-scale transition-all duration-300">Subscribe Now</Button>
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
                      <Button className="w-full bg-primary hover:bg-primary/90 hover-scale transition-all duration-300">
                        Subscribe Now
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
                      <Button className="w-full hover-scale transition-all duration-300">Subscribe Now</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-16 mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold tracking-tighter text-center mb-8">What Our Premium Members Say</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-muted p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-sm italic mb-2">
                    "The premium content has been invaluable for my professional development. The templates alone have
                    saved me countless hours."
                  </blockquote>
                  <p className="text-sm font-medium">David Chen</p>
                  <p className="text-xs text-muted-foreground">Chief Investment Officer, Global Investments Ltd.</p>
                </div>

                <div className="rounded-lg bg-muted p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-sm italic mb-2">
                    "The exclusive webinars have connected me with industry leaders I wouldn't have had access to
                    otherwise. Definitely worth the investment."
                  </blockquote>
                  <p className="text-sm font-medium">Jennifer Patel</p>
                  <p className="text-xs text-muted-foreground">VP of Operations, Tech Innovations Inc.</p>
                </div>

                <div className="rounded-lg bg-muted p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-sm italic mb-2">
                    "I've been able to implement strategies from the premium reports directly into my business
                    operations, resulting in measurable improvements."
                  </blockquote>
                  <p className="text-sm font-medium">Marcus Johnson</p>
                  <p className="text-xs text-muted-foreground">Senior Product Manager, Digital Solutions Co.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 mx-auto max-w-4xl border rounded-lg p-8 bg-muted/30">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold tracking-tighter">Business Subscriptions</h2>
                  <p className="mt-4 text-muted-foreground">
                    Looking for multi-user access for your team or organization? We offer special rates and custom
                    solutions for businesses of all sizes.
                  </p>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      <span>Team subscriptions with multi-user access</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      <span>Custom research and analysis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      <span>Branded content and thought leadership</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      <span>Advanced reporting and analytics</span>
                    </li>
                  </ul>
                  <Button className="mt-6 hover-scale transition-all duration-300">Contact Sales</Button>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Business team collaboration"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="mt-16 mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tighter text-center">Frequently Asked Questions</h2>
              <div className="mt-8 space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">How does the subscription billing work?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Our subscriptions are billed automatically at the start of each billing period (monthly or annual).
                    You can cancel anytime through your account settings.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Can I switch between plans?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Yes, you can upgrade or downgrade your subscription at any time. When upgrading, you'll be billed
                    the prorated difference. When downgrading, changes will take effect at the end of your current
                    billing cycle.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Is there a free trial available?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We offer a 7-day free trial for all new subscribers. You can experience all the features of your
                    chosen plan before being charged.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">What's your refund policy?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    If you're not satisfied with your subscription, you can request a refund within 14 days of purchase.
                    Please contact our support team for assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay="delay-200" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter gradient-text">
                Ready to accelerate your professional growth?
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Join thousands of professionals who are leveraging our premium resources to advance their careers and
                businesses.
              </p>
              <div className="mt-8">
                <Button size="lg" className="text-lg px-8 hover-scale transition-all duration-300">
                  Subscribe Now
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Have questions?{" "}
                <Link href="/contact" className="underline hover:text-primary">
                  Contact our support team
                </Link>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <SiteFooter />
    </div>
  )
}
