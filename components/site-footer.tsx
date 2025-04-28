import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Twitter, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-gradient-to-b from-white to-muted/40 dark:from-background dark:to-muted/5">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary animate-pulse-subtle" />
              <span className="text-xl font-bold gradient-text">InsightfulGrowth</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering professionals with knowledge and insights to excel in today's dynamic business landscape.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary hover:bg-primary/10 transition-colors duration-200"
              >
                <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary hover:bg-primary/10 transition-colors duration-200"
              >
                <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary hover:bg-primary/10 transition-colors duration-200"
              >
                <Link href="https://facebook.com" target="_blank" rel="noreferrer">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary hover:bg-primary/10 transition-colors duration-200"
              >
                <Link href="https://instagram.com" target="_blank" rel="noreferrer">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/category/economics"
                  className="text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  Economics
                </Link>
              </li>
              <li>
                <Link
                  href="/category/leadership"
                  className="text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/category/career"
                  className="text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  Career Development
                </Link>
              </li>
              <li>
                <Link
                  href="/category/technology"
                  className="text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/category/strategy"
                  className="text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  Business Strategy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/resources/guides"
                  className="text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  Guides & Whitepapers
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/webinars"
                  className="text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  Webinars & Events
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/podcast"
                  className="text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  Podcast
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/templates"
                  className="text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/glossary"
                  className="text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  Glossary
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-foreground">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-muted-foreground hover:text-foreground">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <h3 className="text-sm font-medium">Subscribe</h3>
            <p className="text-sm text-muted-foreground">Get the latest insights delivered to your inbox.</p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/subscribe">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} InsightfulGrowth. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground hover:underline underline-offset-4">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="text-xs text-muted-foreground hover:underline underline-offset-4">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
