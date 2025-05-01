"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, CreditCard, FileText, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// This would typically come from a database or API
const getReportById = (id: string) => {
  const reports = {
    "global-economic-outlook-2023": {
      id: "global-economic-outlook-2023",
      title: "2023 Global Economic Outlook: Navigating Uncertainty",
      description:
        "A comprehensive analysis of global economic trends, challenges, and opportunities for businesses in the coming year.",
      category: "Economics",
      date: "June 2023",
      image: "/placeholder.svg?height=400&width=600",
      price: 149,
    },
    "future-of-work-remote-trends": {
      id: "future-of-work-remote-trends",
      title: "The Future of Work: Remote Work Trends and Implications",
      description:
        "An in-depth study on how remote work is reshaping organizational structures, productivity, and talent acquisition strategies.",
      category: "Workplace",
      date: "May 2023",
      image: "/placeholder.svg?height=400&width=600",
      price: 129,
    },
    // Add more reports as needed
  }

  return reports[id as keyof typeof reports]
}

export default function PurchaseReportPage({ params }: { params: { id: string } }) {
  const report = getReportById(params.id)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  if (!report) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 container py-12">
          <h1 className="text-2xl font-bold">Report not found</h1>
          <p className="mt-4">The research report you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="mt-6">
            <Link href="/resources/research-reports">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Research Reports
            </Link>
          </Button>
        </main>
        <SiteFooter />
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
    }, 2000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <AnimatedSection animation="fade-in" className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col gap-2 mb-8">
              <Link
                href={`/resources/research-reports/${report.id}`}
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Report Details
              </Link>
            </div>

            {isComplete ? (
              <Card className="mx-auto max-w-md">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                    <Check className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Purchase Complete!</CardTitle>
                  <CardDescription>
                    Thank you for your purchase. Your report is now available for download.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4 flex items-center gap-4">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-medium">{report.title}</h3>
                      <p className="text-sm text-muted-foreground">PDF, EPUB, MOBI formats</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button className="w-full" asChild>
                    <Link href="/dashboard/downloads">Download Report</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/resources/research-reports">Browse More Reports</Link>
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex gap-4">
                        <Image
                          src={report.image || "/placeholder.svg"}
                          width={100}
                          height={70}
                          alt={report.title}
                          className="rounded-md object-cover w-24 h-16"
                        />
                        <div>
                          <h3 className="font-medium">{report.title}</h3>
                          <p className="text-sm text-muted-foreground">{report.category}</p>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>${report.price.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Tax</span>
                          <span>$0.00</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-medium text-lg">
                          <span>Total</span>
                          <span>${report.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Lock className="h-4 w-4" />
                      <span>Secure checkout powered by Stripe</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      <span>Instant access after purchase</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Information</CardTitle>
                      <CardDescription>Complete your purchase to get immediate access to this report</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                          <div className="grid gap-2">
                            <Label htmlFor="name">Name on card</Label>
                            <Input id="name" placeholder="John Smith" required />
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input id="email" type="email" placeholder="john@example.com" required />
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="card">Card number</Label>
                            <div className="relative">
                              <Input id="card" placeholder="4242 4242 4242 4242" required />
                              <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="expiry">Expiry date</Label>
                              <Input id="expiry" placeholder="MM/YY" required />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="cvc">CVC</Label>
                              <Input id="cvc" placeholder="123" required />
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div className="space-y-4">
                          <Label>Payment method</Label>
                          <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                            <div>
                              <RadioGroupItem value="card" id="card" className="peer sr-only" />
                              <Label
                                htmlFor="card"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                              >
                                <CreditCard className="mb-3 h-6 w-6" />
                                Credit Card
                              </Label>
                            </div>
                            <div>
                              <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" disabled />
                              <Label
                                htmlFor="paypal"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary opacity-50"
                              >
                                <svg className="mb-3 h-6 w-6" viewBox="0 0 24 24">
                                  <path
                                    d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 4.643-5.783 4.643h-2.189c-.262 0-.484.191-.526.45l-.862 5.455-.192 1.213c-.021.136.026.254.116.33a.5.5 0 0 0 .328.124h2.3c.435 0 .807-.318.875-.748l.037-.189.704-4.462.045-.242c.068-.43.44-.748.875-.748h.55c3.568 0 6.364-1.449 7.18-5.639.34-1.75.164-3.21-.656-4.241-.264-.329-.6-.609-.986-.846z"
                                    fill="#253B80"
                                  ></path>
                                </svg>
                                PayPal
                              </Label>
                            </div>
                            <div>
                              <RadioGroupItem value="apple" id="apple" className="peer sr-only" disabled />
                              <Label
                                htmlFor="apple"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary opacity-50"
                              >
                                <svg className="mb-3 h-6 w-6" viewBox="0 0 24 24">
                                  <path
                                    d="M17.72 7.22c.67 0 1.66-.34 2.22-.89.56-.56.89-1.33.89-2.22 0-.11 0-.22-.11-.22-.67.11-1.67.44-2.22 1-.56.56-.89 1.33-.89 2.11.11.11.11.22.11.22zm1.22 1.33c-1.22 0-2.22.67-2.89.67-.67 0-1.56-.56-2.67-.56-2 0-4 1.67-4 4.89 0 3 2.67 6.67 4 6.67.67 0 1.56-.44 2.67-.44 1 0 1.78.44 2.67.44 1.33 0 3.56-3.33 3.56-6.22 0 0-2.11-.89-2.11-3.11 0-1.78 1.44-2.67 1.44-2.67-.11-1.11-.89-2.67-2.67-2.67z"
                                    fill="#000000"
                                  ></path>
                                </svg>
                                Apple Pay
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <Button type="submit" className="w-full" size="lg" disabled={isProcessing}>
                          {isProcessing ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Processing...
                            </>
                          ) : (
                            <>Pay ${report.price.toFixed(2)}</>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>
      </main>
      <SiteFooter />
    </div>
  )
}
