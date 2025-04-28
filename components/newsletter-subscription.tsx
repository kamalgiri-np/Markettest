"use client"

import type React from "react"

import { useState } from "react"
import { Check, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface NewsletterSubscriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  compact?: boolean
}

export function NewsletterSubscription({
  title = "Subscribe to Our Newsletter",
  description = "Get the latest insights, articles, and resources delivered to your inbox weekly.",
  compact = false,
  className,
  ...props
}: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email) {
      setStatus("error")
      setErrorMessage("Please enter your email address")
      return
    }

    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      // In a real implementation, you would handle the API response here
    }, 1500)
  }

  if (compact) {
    return (
      <div className={cn("w-full", className)} {...props}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            disabled={status === "loading" || status === "success"}
          />
          <Button type="submit" disabled={status === "loading" || status === "success"}>
            {status === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : status === "success" ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Subscribed
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>
        {status === "error" && <p className="mt-2 text-sm text-destructive">{errorMessage}</p>}
        <p className="mt-2 text-xs text-muted-foreground">
          By subscribing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    )
  }

  return (
    <Card className={cn("w-full transition-all duration-300 hover:shadow-lg", className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 focus:border-primary transition-colors duration-200"
            disabled={status === "loading" || status === "success"}
          />
          <Button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className={cn("transition-all duration-300", status === "success" ? "bg-green-600 hover:bg-green-700" : "")}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : status === "success" ? (
              <>
                <Check className="mr-2 h-4 w-4 animate-fade-in" />
                Subscribed
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>
        {status === "error" && <p className="mt-2 text-sm text-destructive">{errorMessage}</p>}
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          By subscribing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </CardFooter>
    </Card>
  )
}
