"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, CheckCircle, FileText, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"
import { useToast } from "@/hooks/use-toast"
import { getCheckoutSession } from "@/app/actions/stripe"

export default function DashboardPage() {
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [subscription, setSubscription] = useState<any>(null)

  // Check for successful subscription
  useEffect(() => {
    const sessionId = searchParams.get("session_id")
    const success = searchParams.get("success")

    if (success === "true") {
      toast({
        title: "Subscription Successful",
        description: "Thank you for subscribing to our membership plan!",
      })
    }

    if (sessionId) {
      const fetchSession = async () => {
        setIsLoading(true)
        const result = await getCheckoutSession(sessionId)
        setIsLoading(false)

        if (result.success) {
          setSubscription(result.session.subscription)
          toast({
            title: "Subscription Activated",
            description: "Your membership has been successfully activated.",
          })
        } else {
          toast({
            title: "Error",
            description: "Could not retrieve subscription details.",
            variant: "destructive",
          })
        }
      }

      fetchSession()
    }
  }, [searchParams, toast])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <AnimatedSection animation="fade-in" className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-2 mb-8">
              <h1 className="text-3xl font-bold tracking-tight">Member Dashboard</h1>
              <p className="text-muted-foreground">
                Access your premium content, saved resources, and account settings.
              </p>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : (
              <Tabs defaultValue="overview" className="space-y-8">
                <TabsList className="grid grid-cols-4 md:grid-cols-5 lg:w-[600px]">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="saved">Saved</TabsTrigger>
                  <TabsTrigger value="settings" className="hidden md:inline-flex">
                    Settings
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8">
                  {/* Subscription Status Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Membership Status</CardTitle>
                      <CardDescription>Your current subscription details</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="font-medium">{subscription ? "Active" : "Professional"} Membership</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <p>
                            Next billing date:{" "}
                            {subscription
                              ? new Date(subscription.current_period_end * 1000).toLocaleDateString()
                              : "June 1, 2025"}
                          </p>
                          <p>Plan: {subscription ? subscription.plan.nickname || "Professional" : "Professional"}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/membership">Manage Subscription</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Your latest interactions and updates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Read "Digital Transformation Strategies"</p>
                            <p className="text-sm text-muted-foreground">2 days ago</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <Calendar className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Registered for "Leadership Summit 2025"</p>
                            <p className="text-sm text-muted-foreground">1 week ago</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Downloaded "Market Analysis Report Q1 2025"</p>
                            <p className="text-sm text-muted-foreground">2 weeks ago</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recommended Content */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recommended For You</CardTitle>
                      <CardDescription>Based on your interests and activity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                          <CardHeader className="p-4">
                            <CardTitle className="text-base">AI in Business Operations</CardTitle>
                          </CardHeader>
                          <CardFooter className="p-4 pt-0">
                            <Button variant="ghost" size="sm" className="w-full" asChild>
                              <Link href="/resources/technology/ai-business-operations">
                                Read Now
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                        <Card>
                          <CardHeader className="p-4">
                            <CardTitle className="text-base">Remote Team Management</CardTitle>
                          </CardHeader>
                          <CardFooter className="p-4 pt-0">
                            <Button variant="ghost" size="sm" className="w-full" asChild>
                              <Link href="/resources/leadership/remote-team-management">
                                Read Now
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                        <Card className="md:col-span-2 lg:col-span-1">
                          <CardHeader className="p-4">
                            <CardTitle className="text-base">Financial Planning for Startups</CardTitle>
                          </CardHeader>
                          <CardFooter className="p-4 pt-0">
                            <Button variant="ghost" size="sm" className="w-full" asChild>
                              <Link href="/resources/finance/startup-planning">
                                Read Now
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/resources">View All Resources</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="resources" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Premium Resources</CardTitle>
                      <CardDescription>Access your exclusive member content</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p>Your premium resources will appear here.</p>
                        <Button asChild>
                          <Link href="/resources">Browse Resources</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="events" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Events</CardTitle>
                      <CardDescription>Webinars, workshops and networking opportunities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p>Your registered events will appear here.</p>
                        <Button asChild>
                          <Link href="/events">Browse Events</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="saved" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Saved Items</CardTitle>
                      <CardDescription>Articles, resources and events you've saved</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p>Your saved items will appear here.</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="settings" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                      <CardDescription>Manage your profile and preferences</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p>Your account settings will appear here.</p>
                        <Button variant="outline" asChild>
                          <Link href="/settings">
                            <Settings className="mr-2 h-4 w-4" />
                            Manage Settings
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            )}
          </div>
        </AnimatedSection>
      </main>
      <SiteFooter />
    </div>
  )
}
