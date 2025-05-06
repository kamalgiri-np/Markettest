"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Check, CreditCard, Globe, Info, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { createStripeCheckoutSession } from "@/app/actions/stripe"
import { useToast } from "@/hooks/use-toast"

// Membership plan data
const plans = {
  "basic-monthly": {
    name: "Basic",
    price: 9,
    interval: "month",
    description: "Essential resources for individual professionals",
  },
  "professional-monthly": {
    name: "Professional",
    price: 19,
    interval: "month",
    description: "Comprehensive resources for growing professionals",
  },
  "executive-monthly": {
    name: "Executive",
    price: 39,
    interval: "month",
    description: "Premium resources for executive-level professionals",
  },
  "basic-annual": {
    name: "Basic",
    price: 79,
    interval: "year",
    description: "Essential resources for individual professionals",
  },
  "professional-annual": {
    name: "Professional",
    price: 149,
    interval: "year",
    description: "Comprehensive resources for growing professionals",
  },
  "executive-annual": {
    name: "Executive",
    price: 299,
    interval: "year",
    description: "Premium resources for executive-level professionals",
  },
}

export default function SubscribePage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { toast } = useToast()
  const planId = searchParams.get("plan") || "professional-monthly"
  const [selectedPlan, setSelectedPlan] = useState(plans[planId as keyof typeof plans])
  const [region, setRegion] = useState("global")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  useEffect(() => {
    if (planId && plans[planId as keyof typeof plans]) {
      setSelectedPlan(plans[planId as keyof typeof plans])
    }
  }, [planId])

  const handleRegionChange = (value: string) => {
    setRegion(value)
    // Reset payment method when region changes
    if (value === "nepal") {
      setPaymentMethod("esewa")
    } else if (value === "india") {
      setPaymentMethod("razorpay")
    } else if (value === "africa") {
      setPaymentMethod("flutterwave")
    } else {
      setPaymentMethod("card")
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      if (paymentMethod === "card") {
        // Process with Stripe
        const result = await createStripeCheckoutSession({
          planId: planId as string,
          planName: selectedPlan.name,
          price: selectedPlan.price,
          interval: selectedPlan.interval as "month" | "year",
          successUrl: `${window.location.origin}/dashboard?success=true`,
          cancelUrl: `${window.location.origin}/membership/subscribe?plan=${planId}`,
          customerEmail: formData.email,
        })

        if (result.success && result.url) {
          // Redirect to Stripe Checkout
          window.location.href = result.url
          return
        } else {
          throw new Error(result.error || "Failed to create checkout session")
        }
      } else {
        // For demo purposes, simulate other payment methods
        // In a real implementation, you would integrate with the respective payment gateways
        setTimeout(() => {
          setIsProcessing(false)
          setIsComplete(true)
        }, 2000)
      }
    } catch (error) {
      setIsProcessing(false)
      toast({
        title: "Payment Error",
        description: (error as Error).message || "There was an error processing your payment",
        variant: "destructive",
      })
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
                href="/membership"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Membership Plans
              </Link>
            </div>

            {isComplete ? (
              <Card className="mx-auto max-w-md">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                    <Check className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Welcome to Our Community!</CardTitle>
                  <CardDescription>
                    Thank you for subscribing to our {selectedPlan.name} plan. Your membership is now active.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Membership Details</h3>
                    <div className="mt-2 space-y-1 text-sm">
                      <p>
                        <span className="text-muted-foreground">Plan:</span> {selectedPlan.name}
                      </p>
                      <p>
                        <span className="text-muted-foreground">Billing:</span> ${selectedPlan.price}/
                        {selectedPlan.interval}
                      </p>
                      <p>
                        <span className="text-muted-foreground">Next billing date:</span>{" "}
                        {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button className="w-full" asChild>
                    <Link href="/dashboard">Go to Member Dashboard</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/">Return to Homepage</Link>
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
                      <div>
                        <h3 className="font-medium">{selectedPlan.name} Membership</h3>
                        <p className="text-sm text-muted-foreground">{selectedPlan.description}</p>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>${selectedPlan.price.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Tax</span>
                          <span>$0.00</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-medium text-lg">
                          <span>Total</span>
                          <span>${selectedPlan.price.toFixed(2)}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Billed {selectedPlan.interval === "month" ? "monthly" : "annually"}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>Secure payment processing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Info className="h-4 w-4" />
                      <span>Cancel anytime from your account</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Information</CardTitle>
                      <CardDescription>Complete your subscription to get immediate access</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                          <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              placeholder="John Smith"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                            />
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@example.com"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                          </div>

                          <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="region">Your Region</Label>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 text-muted-foreground" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>We offer different payment methods based on your region</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <Select value={region} onValueChange={handleRegionChange}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your region" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="global">
                                  <div className="flex items-center">
                                    <Globe className="mr-2 h-4 w-4" />
                                    Global (Americas, Europe, etc.)
                                  </div>
                                </SelectItem>
                                <SelectItem value="nepal">
                                  <div className="flex items-center">
                                    <span className="mr-2">🇳🇵</span>
                                    Nepal
                                  </div>
                                </SelectItem>
                                <SelectItem value="india">
                                  <div className="flex items-center">
                                    <span className="mr-2">🇮🇳</span>
                                    India
                                  </div>
                                </SelectItem>
                                <SelectItem value="africa">
                                  <div className="flex items-center">
                                    <span className="mr-2">🌍</span>
                                    Africa
                                  </div>
                                </SelectItem>
                                <SelectItem value="other">
                                  <div className="flex items-center">
                                    <Globe className="mr-2 h-4 w-4" />
                                    Other Regions
                                  </div>
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <Separator />

                        <div className="space-y-4">
                          <Label>Payment method</Label>
                          {region === "global" && (
                            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid gap-4">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="card" id="card" />
                                <Label htmlFor="card" className="flex items-center gap-2">
                                  <CreditCard className="h-4 w-4" />
                                  Credit/Debit Card (Stripe)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="paypal" id="paypal" />
                                <Label htmlFor="paypal" className="flex items-center gap-2">
                                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                                    <path
                                      d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 4.643-5.783 4.643h-2.189c-.262 0-.484.191-.526.45l-.862 5.455-.192 1.213c-.021.136.026.254.116.33a.5.5 0 0 0 .328.124h2.3c.435 0 .807-.318.875-.748l.037-.189.704-4.462.045-.242c.068-.43.44-.748.875-.748h.55c3.568 0 6.364-1.449 7.18-5.639.34-1.75.164-3.21-.656-4.241-.264-.329-.6-.609-.986-.846z"
                                      fill="#253B80"
                                    ></path>
                                  </svg>
                                  PayPal
                                </Label>
                              </div>
                            </RadioGroup>
                          )}

                          {/* Other region payment options remain the same */}
                          {region === "nepal" && (
                            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid gap-4">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="esewa" id="esewa" />
                                <Label htmlFor="esewa" className="flex items-center gap-2">
                                  <span className="text-green-600 font-bold">e</span>
                                  eSewa
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="khalti" id="khalti" />
                                <Label htmlFor="khalti" className="flex items-center gap-2">
                                  <span className="text-purple-600 font-bold">K</span>
                                  Khalti
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="card" id="card-nepal" />
                                <Label htmlFor="card-nepal" className="flex items-center gap-2">
                                  <CreditCard className="h-4 w-4" />
                                  Credit/Debit Card (Stripe)
                                </Label>
                              </div>
                            </RadioGroup>
                          )}

                          {region === "india" && (
                            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid gap-4">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="razorpay" id="razorpay" />
                                <Label htmlFor="razorpay" className="flex items-center gap-2">
                                  <span className="text-blue-600 font-bold">R</span>
                                  Razorpay
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="upi" id="upi" />
                                <Label htmlFor="upi" className="flex items-center gap-2">
                                  <span className="font-bold">UPI</span>
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="card" id="card-india" />
                                <Label htmlFor="card-india" className="flex items-center gap-2">
                                  <CreditCard className="h-4 w-4" />
                                  Credit/Debit Card (Stripe)
                                </Label>
                              </div>
                            </RadioGroup>
                          )}

                          {region === "africa" && (
                            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid gap-4">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="flutterwave" id="flutterwave" />
                                <Label htmlFor="flutterwave" className="flex items-center gap-2">
                                  <span className="text-orange-600 font-bold">F</span>
                                  Flutterwave
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="mpesa" id="mpesa" />
                                <Label htmlFor="mpesa" className="flex items-center gap-2">
                                  <span className="text-green-600 font-bold">M</span>
                                  M-Pesa
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="card" id="card-africa" />
                                <Label htmlFor="card-africa" className="flex items-center gap-2">
                                  <CreditCard className="h-4 w-4" />
                                  Credit/Debit Card (Stripe)
                                </Label>
                              </div>
                            </RadioGroup>
                          )}

                          {region === "other" && (
                            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid gap-4">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="payoneer" id="payoneer" />
                                <Label htmlFor="payoneer" className="flex items-center gap-2">
                                  <span className="text-red-600 font-bold">P</span>
                                  Payoneer
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="card" id="card-other" />
                                <Label htmlFor="card-other" className="flex items-center gap-2">
                                  <CreditCard className="h-4 w-4" />
                                  Credit/Debit Card (Stripe)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="paypal" id="paypal-other" />
                                <Label htmlFor="paypal-other" className="flex items-center gap-2">
                                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                                    <path
                                      d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 4.643-5.783 4.643h-2.189c-.262 0-.484.191-.526.45l-.862 5.455-.192 1.213c-.021.136.026.254.116.33a.5.5 0 0 0 .328.124h2.3c.435 0 .807-.318.875-.748l.037-.189.704-4.462.045-.242c.068-.43.44-.748.875-.748h.55c3.568 0 6.364-1.449 7.18-5.639.34-1.75.164-3.21-.656-4.241-.264-.329-.6-.609-.986-.846z"
                                      fill="#253B80"
                                    ></path>
                                  </svg>
                                  PayPal
                                </Label>
                              </div>
                            </RadioGroup>
                          )}
                        </div>

                        {paymentMethod === "card" && (
                          <div className="space-y-4">
                            <div className="p-4 bg-muted/50 rounded-md">
                              <p className="text-sm">
                                You'll be redirected to Stripe's secure payment page to complete your subscription.
                              </p>
                            </div>
                          </div>
                        )}

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
                            <>
                              Subscribe - ${selectedPlan.price}/{selectedPlan.interval}
                            </>
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
