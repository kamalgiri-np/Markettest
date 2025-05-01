import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  // Check if Supabase environment variables are configured
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.warn("Supabase environment variables not configured. Auth middleware skipped.")
    return NextResponse.next()
  }

  try {
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
  matcher: [
    // Protected routes that require authentication
    "/dashboard/:path*",
    "/account/:path*",
    "/premium/content/:path*",
    "/api/protected/:path*",
  ],
}
