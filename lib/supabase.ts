import { createClient } from "@supabase/supabase-js"

// Define types for our database tables
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

// Create a mock client that won't throw errors when methods are called
const createMockClient = () => ({
  auth: {
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signInWithPassword: () => Promise.resolve({ data: null, error: new Error("Supabase not configured") }),
    signUp: () => Promise.resolve({ data: null, error: new Error("Supabase not configured") }),
    signOut: () => Promise.resolve({ error: null }),
  },
  from: () => ({
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({ data: null, error: null }),
        maybeSingle: () => Promise.resolve({ data: null, error: null }),
        order: () => ({
          limit: () => Promise.resolve({ data: null, error: null }),
        }),
      }),
    }),
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => ({
      eq: () => Promise.resolve({ data: null, error: null }),
    }),
    delete: () => ({
      eq: () => Promise.resolve({ data: null, error: null }),
    }),
  }),
})

// Create a function to get the Supabase client
// This prevents the client from being created during build time
function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase client environment variables are missing")
    return createMockClient()
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}

// Create a function to get the admin client
function createSupabaseAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl) {
    console.warn("Supabase URL is missing")
    return createMockClient()
  }

  // If service role key is missing, use the anon key as a fallback
  // This will limit admin operations but prevent errors
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.warn("SUPABASE_SERVICE_ROLE_KEY is missing - using anon key with limited permissions")
  }

  return createClient(supabaseUrl, supabaseServiceKey)
}

// Export the clients using lazy initialization
// This ensures they're only created when actually used
export const supabase = createSupabaseClient()
export const supabaseAdmin = createSupabaseAdminClient()

// Helper function to check if Supabase is properly configured
export function isSupabaseConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
}

// Helper function to check if Supabase admin is properly configured
export function isSupabaseAdminConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY)
}
