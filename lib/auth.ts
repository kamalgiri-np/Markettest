import { cookies } from "next/headers"
import { createServerClient } from "@supabase/ssr"

export async function getServerSession() {
  // Check if Supabase environment variables are configured
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.warn("Supabase environment variables not configured. Auth functionality will be limited.")
    return { session: null, supabase: null }
  }

  const cookieStore = cookies()

  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
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

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return { session, supabase }
}

export async function getCurrentUser() {
  const { session, supabase } = await getServerSession()

  if (!session) {
    return { user: null, subscription: null }
  }

  // Get user subscription if available
  let subscription = null
  if (supabase) {
    const { data } = await supabase
      .from("subscriptions")
      .select("*")
      .eq("user_id", session.user.id)
      .eq("status", "active")
      .maybeSingle()

    subscription = data
  }

  return {
    user: session.user,
    subscription,
  }
}
