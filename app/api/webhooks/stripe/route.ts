import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { supabaseAdmin } from "@/lib/supabase"

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

// This is your Stripe webhook secret for verifying events
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(req: NextRequest) {
  try {
    const body = await req.text()
    const signature = req.headers.get("stripe-signature") as string

    let event: Stripe.Event

    try {
      // Verify the webhook signature
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret!)
    } catch (err) {
      console.error(`⚠️ Webhook signature verification failed:`, err)
      return NextResponse.json({ error: "Webhook signature verification failed" }, { status: 400 })
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed": {
        const checkoutSession = event.data.object as Stripe.Checkout.Session

        // Get the user ID from the metadata
        const userId = checkoutSession.metadata?.userId
        const planId = checkoutSession.metadata?.planId

        if (!userId || !planId) {
          console.error("Missing userId or planId in session metadata")
          return NextResponse.json({ error: "Missing metadata" }, { status: 400 })
        }

        // Get subscription details
        const subscriptionId = checkoutSession.subscription as string
        const subscription = await stripe.subscriptions.retrieve(subscriptionId)

        // Create or update subscription in the database
        const { data: existingSubscription } = await supabaseAdmin
          .from("subscriptions")
          .select("*")
          .eq("user_id", userId)
          .eq("stripe_subscription_id", subscriptionId)
          .maybeSingle()

        if (existingSubscription) {
          // Update existing subscription
          await supabaseAdmin
            .from("subscriptions")
            .update({
              status: subscription.status,
              current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
              current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
              updated_at: new Date().toISOString(),
            })
            .eq("id", existingSubscription.id)
        } else {
          // Create new subscription
          await supabaseAdmin.from("subscriptions").insert({
            user_id: userId,
            plan_id: planId,
            stripe_customer_id: checkoutSession.customer as string,
            stripe_subscription_id: subscriptionId,
            status: subscription.status,
            current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
          })
        }

        console.log(`💰 Payment successful for user: ${userId}, plan: ${planId}`)
        break
      }

      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice
        const subscriptionId = invoice.subscription as string

        if (!subscriptionId) break

        // Get the subscription
        const subscription = await stripe.subscriptions.retrieve(subscriptionId)

        // Update the subscription in the database
        const { data: dbSubscription } = await supabaseAdmin
          .from("subscriptions")
          .select("*")
          .eq("stripe_subscription_id", subscriptionId)
          .single()

        if (dbSubscription) {
          await supabaseAdmin
            .from("subscriptions")
            .update({
              status: subscription.status,
              current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
              current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
              updated_at: new Date().toISOString(),
            })
            .eq("stripe_subscription_id", subscriptionId)

          console.log(`📋 Invoice paid for subscription: ${subscriptionId}`)
        }

        break
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice
        const subscriptionId = invoice.subscription as string

        if (!subscriptionId) break

        // Get the subscription
        const subscription = await stripe.subscriptions.retrieve(subscriptionId)

        // Update the subscription status in the database
        await supabaseAdmin
          .from("subscriptions")
          .update({
            status: subscription.status,
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_subscription_id", subscriptionId)

        console.log(`❌ Payment failed for subscription: ${subscriptionId}`)

        break
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription

        // Update the subscription in the database
        await supabaseAdmin
          .from("subscriptions")
          .update({
            status: subscription.status,
            current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_subscription_id", subscription.id)

        console.log(`🔄 Subscription updated: ${subscription.id}, status: ${subscription.status}`)

        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription

        // Update the subscription status in the database
        await supabaseAdmin
          .from("subscriptions")
          .update({
            status: "canceled",
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_subscription_id", subscription.id)

        console.log(`🗑️ Subscription canceled: ${subscription.id}`)

        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (err) {
    console.error(`❌ Error processing webhook:`, err)
    return NextResponse.json({ error: "Error processing webhook" }, { status: 500 })
  }
}

// This is important to disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
}
