import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/auth-provider"
import { LiveChatWidget } from "@/components/live-chat/chat-widget"
import { FloatingCta } from "@/components/floating-cta"
// Import the structured data component
import { WebsiteStructuredData } from "@/components/structured-data"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Add it inside the <head> section by modifying the metadata export
export const metadata: Metadata = {
  title: "InsightfulGrowth - Professional Insights for Career & Business Growth",
  description: "Empowering professionals with knowledge and insights to excel in today's dynamic business landscape.",
    generator: 'v0.dev'
}

// Add this to the RootLayout component, right before the closing </html> tag
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <WebsiteStructuredData
          name="InsightfulGrowth"
          description="Empowering professionals with knowledge and insights to excel in today's dynamic business landscape."
          url={process.env.NEXT_PUBLIC_APP_URL || "https://insightfulgrowth.com"}
          logoUrl={`${process.env.NEXT_PUBLIC_APP_URL || "https://insightfulgrowth.com"}/logo.png`}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            {/* Remove SiteHeader and SiteFooter from here - they will be added in page-specific layouts */}
            <main>{children}</main>
            <FloatingCta />
            <Toaster />
            <LiveChatWidget />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
