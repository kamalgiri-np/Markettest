import { createClient } from "@supabase/supabase-js"

// Check for environment variables and provide helpful error messages
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  console.error("Missing environment variable: NEXT_PUBLIC_SUPABASE_URL")
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.error("Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY")
}

// Use optional chaining and provide fallbacks for development
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

// Create a Supabase client for browser-side usage (auth)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Create a Supabase client with the service role key for server-side operations
// This should only be used in server components or server actions
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey)

// Types for our database tables
export type Profile = {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export type Subscription = {
  id: string
  user_id: string
  stripe_customer_id: string
  stripe_subscription_id: string
  plan_id: string
  status: "active" | "trialing" | "past_due" | "canceled" | "incomplete" | "incomplete_expired"
  current_period_start: string
  current_period_end: string
  created_at: string
  updated_at: string
}

export type Plan = {
  id: string
  name: string
  description: string
  price: number
  interval: "month" | "year"
  features: string[]
  stripe_price_id: string
  created_at: string
  updated_at: string
}

export type Content = {
  id: string
  title: string
  description: string
  content_type: "article" | "video" | "ebook" | "webinar" | "template"
  access_level: "free" | "basic" | "professional" | "executive"
  slug: string
  thumbnail_url?: string
  created_at: string
  updated_at: string
}

export type UserContent = {
  id: string
  user_id: string
  content_id: string
  is_favorite: boolean
  is_read: boolean
  last_accessed: string
  created_at: string
  updated_at: string
}
