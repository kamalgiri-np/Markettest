import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  // Check if we're in a development environment and Supabase might not be configured
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase environment variables not configured. Auth middleware skipped.")
    return NextResponse.next()
  }

  try {
    // Dynamically import the Supabase client to avoid initialization errors
    const { createMiddlewareClient } = await import("@supabase/auth-helpers-nextjs")

    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res })

    // Refresh session if expired
    await supabase.auth.getSession()

    return res
  } catch (error) {
    console.error("Error in auth middleware:", error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/account/:path*", "/premium/:path*", "/resources/research-reports/:path*"],
}
