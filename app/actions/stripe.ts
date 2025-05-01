"use server"

import Stripe from "stripe"
import { supabaseAdmin } from "@/lib/supabase"
import { cookies } from "next/headers"
import { createServerClient } from "@supabase/ssr"

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

// Create a server-side Supabase client
function getSupabaseServerClient() {
  const cookieStore = cookies()

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: any) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name: string, options: any) {
        cookieStore.set({ name, value: "", ...options })
      },
    },
  })
}

export async function createStripeCheckoutSession(params: {
  planId: string
  planName: string
  price: number
  interval: "month" | "year"
  successUrl: string
  cancelUrl: string
  customerEmail?: string
}) {
  try {
    // Get the current user
    const supabase = getSupabaseServerClient()
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      return { success: false, error: "User not authenticated" }
    }

    const userId = session.user.id

    // Check if user already has a Stripe customer ID
    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", userId)
      .single()

    let customerId = profile?.stripe_customer_id

    // If no customer ID exists, create a new customer
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: session.user.email,
        metadata: {
          userId,
        },
      })

      customerId = customer.id

      // Save the customer ID to the user's profile
      await supabaseAdmin.from("profiles").update({ stripe_customer_id: customerId }).eq("id", userId)
    }

    // Create a Stripe checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${params.planName} Membership (${params.interval}ly)`,
              description: `Subscription to ${params.planName} plan, billed ${params.interval}ly`,
            },
            unit_amount: params.price * 100, // Convert to cents
            recurring: {
              interval: params.interval,
            },
          },
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${params.successUrl}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: params.cancelUrl,
      metadata: {
        userId,
        planId: params.planId,
      },
    })

    return { success: true, sessionId: checkoutSession.id, url: checkoutSession.url }
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error)
    return { success: false, error: (error as Error).message }
  }
}

export async function getSubscriptionStatus(subscriptionId: string) {
  try {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
    return {
      success: true,
      status: subscription.status,
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
    }
  } catch (error) {
    console.error("Error retrieving subscription:", error)
    return { success: false, error: (error as Error).message }
  }
}

export async function cancelSubscription(subscriptionId: string) {
  try {
    // Get the current user
    const supabase = getSupabaseServerClient()
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      return { success: false, error: "User not authenticated" }
    }

    // Verify that this subscription belongs to the user
    const { data: userSubscription } = await supabaseAdmin
      .from("subscriptions")
      .select("*")
      .eq("user_id", session.user.id)
      .eq("stripe_subscription_id", subscriptionId)
      .single()

    if (!userSubscription) {
      return { success: false, error: "Subscription not found" }
    }

    // Cancel the subscription in Stripe
    const subscription = await stripe.subscriptions.cancel(subscriptionId)

    // Update the subscription status in the database
    await supabaseAdmin
      .from("subscriptions")
      .update({ status: subscription.status })
      .eq("stripe_subscription_id", subscriptionId)

    return { success: true, status: subscription.status }
  } catch (error) {
    console.error("Error canceling subscription:", error)
    return { success: false, error: (error as Error).message }
  }
}

export async function getCheckoutSession(sessionId: string) {
  try {
    // Get the current user
    const supabase = getSupabaseServerClient()
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      return { success: false, error: "User not authenticated" }
    }

    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["subscription"],
    })

    // Verify that this session belongs to the user
    if (checkoutSession.metadata?.userId !== session.user.id) {
      return { success: false, error: "Unauthorized" }
    }

    return { success: true, session: checkoutSession }
  } catch (error) {
    console.error("Error retrieving checkout session:", error)
    return { success: false, error: (error as Error).message }
  }
}

export async function createCustomerPortalSession() {
  try {
    // Get the current user
    const supabase = getSupabaseServerClient()
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      return { success: false, error: "User not authenticated" }
    }

    // Get the user's Stripe customer ID
    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", session.user.id)
      .single()

    if (!profile?.stripe_customer_id) {
      return { success: false, error: "No subscription found" }
    }

    // Create a customer portal session
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: profile.stripe_customer_id,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/account`,
    })

    return { success: true, url: portalSession.url }
  } catch (error) {
    console.error("Error creating customer portal session:", error)
    return { success: false, error: (error as Error).message }
  }
}
