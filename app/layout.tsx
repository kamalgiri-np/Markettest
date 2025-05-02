import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingCta } from "@/components/floating-cta"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/auth-provider"
import { LiveChatWidget } from "@/components/live-chat/chat-widget"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "InsightfulGrowth - Professional Insights for Career & Business Growth",
  description: "Empowering professionals with knowledge and insights to excel in today's dynamic business landscape.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <FloatingCta />
            <Toaster />
            {/* Live Chat Widget */}
            <LiveChatWidget />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
