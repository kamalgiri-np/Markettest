"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CreditCard, LogOut, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"
import { cancelSubscription } from "@/app/actions/stripe"
import { useToast } from "@/hooks/use-toast"

export default function AccountPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  // In a real app, you would fetch this data from your database
  const mockSubscription = {
    id: "sub_1234567890",
    status: "active",
    plan: "Professional",
    interval: "month",
    amount: 19,
    currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    paymentMethod: {
      brand: "visa",
      last4: "4242",
    },
  }

  const handleCancelSubscription = async () => {
    if (
      !confirm(
        "Are you sure you want to cancel your subscription? You'll lose access to premium content at the end of your billing period.",
      )
    ) {
      return
    }

    setIsLoading(true)

    try {
      const result = await cancelSubscription(mockSubscription.id)

      if (result.success) {
        toast({
          title: "Subscription Canceled",
          description: "Your subscription has been canceled and will end at the current billing period.",
        })
      } else {
        throw new Error(result.error || "Failed to cancel subscription")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: (error as Error).message || "There was an error canceling your subscription",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <AnimatedSection animation="fade-in" className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col gap-2 mb-8">
              <Link
                href="/dashboard"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Link>
              <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
              <p className="text-muted-foreground">Manage your profile, subscription, and preferences</p>
            </div>

            <div className="grid gap-8 md:grid-cols-[240px_1fr]">
              <div className="hidden md:block">
                <div className="space-y-4">
                  <div className="font-medium">Account</div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/account"
                        className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-primary"
                      >
                        <User className="h-4 w-4" />
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/account/subscription"
                        className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted"
                      >
                        <CreditCard className="h-4 w-4" />
                        Subscription
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/account/settings"
                        className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted"
                      >
                        <Settings className="h-4 w-4" />
                        Preferences
                      </Link>
                    </li>
                    <li>
                      <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-red-500 hover:bg-muted">
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your personal information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="font-medium">Name</div>
                        <div>John Smith</div>
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <div>john@example.com</div>
                      </div>
                      <div>
                        <div className="font-medium">Member Since</div>
                        <div>May 1, 2025</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Edit Profile</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Subscription Details</CardTitle>
                    <CardDescription>Manage your membership plan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Current Plan</div>
                        <div className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {mockSubscription.status.toUpperCase()}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">{mockSubscription.plan} Membership</div>
                        <div className="text-sm text-muted-foreground">
                          ${mockSubscription.amount}/{mockSubscription.interval}
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <div className="font-medium">Payment Method</div>
                        <div className="text-sm text-muted-foreground">
                          {mockSubscription.paymentMethod.brand.toUpperCase()} ending in{" "}
                          {mockSubscription.paymentMethod.last4}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">Next Billing Date</div>
                        <div className="text-sm text-muted-foreground">
                          {mockSubscription.currentPeriodEnd.toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-2 items-start">
                    <Button variant="outline" asChild>
                      <Link href="/membership">Change Plan</Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={handleCancelSubscription}
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : "Cancel Subscription"}
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Email Preferences</CardTitle>
                    <CardDescription>Manage your email notifications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="newsletter" className="rounded border-gray-300" defaultChecked />
                        <label htmlFor="newsletter">Weekly newsletter</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="new-content" className="rounded border-gray-300" defaultChecked />
                        <label htmlFor="new-content">New content alerts</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="events" className="rounded border-gray-300" defaultChecked />
                        <label htmlFor="events">Upcoming events</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="offers" className="rounded border-gray-300" />
                        <label htmlFor="offers">Special offers and promotions</label>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Preferences</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <SiteFooter />
    </div>
  )
}
