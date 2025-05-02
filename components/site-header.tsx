"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { TrendingUp } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SearchWithSuggestions } from "@/components/search-suggestions"

const categories = [
  {
    title: "Economics",
    href: "/category/economics",
    description: "Market trends, financial analysis, and economic insights for informed decision-making.",
    subcategories: [
      { title: "Market Analysis", href: "/category/economics/market-analysis" },
      { title: "Global Economy", href: "/category/economics/global-economy" },
      { title: "Financial Trends", href: "/category/economics/financial-trends" },
      { title: "Investment Strategies", href: "/category/economics/investment-strategies" },
    ],
  },
  {
    title: "Leadership",
    href: "/category/leadership",
    description: "Strategies, principles, and case studies to enhance your leadership capabilities.",
    subcategories: [
      { title: "Executive Development", href: "/category/leadership/executive-development" },
      { title: "Team Management", href: "/category/leadership/team-management" },
      { title: "Organizational Culture", href: "/category/leadership/organizational-culture" },
      { title: "Crisis Leadership", href: "/category/leadership/crisis-leadership" },
    ],
  },
  {
    title: "Career Development",
    href: "/category/career",
    description:
      "Practical advice, skill-building resources, and industry insights to accelerate your professional growth.",
    subcategories: [
      { title: "Skill Enhancement", href: "/category/career/skill-enhancement" },
      { title: "Career Transitions", href: "/category/career/transitions" },
      { title: "Professional Networking", href: "/category/career/networking" },
      { title: "Work-Life Integration", href: "/category/career/work-life-integration" },
    ],
  },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between transition-all duration-300 ease-in-out">
        <Link href="/" className="flex items-center space-x-2">
          <TrendingUp className="h-6 w-6 text-primary animate-pulse-subtle" />
          <span className="text-xl font-bold gradient-text">InsightfulGrowth</span>
        </Link>

        <div className="hidden md:flex md:flex-1 md:justify-center md:px-4">
          <div className="relative w-full max-w-sm transition-all duration-300 ease-in-out hover:scale-102">
            <SearchWithSuggestions />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-1">
              {categories.map((category) => (
                <NavigationMenuItem key={category.title}>
                  <NavigationMenuTrigger
                    className={cn(
                      "text-sm font-medium transition-colors duration-200",
                      pathname.startsWith(category.href) ? "text-primary" : "text-foreground hover:text-primary",
                    )}
                  >
                    {category.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href={category.href}
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-brand-100 to-brand-50 dark:from-brand-900 dark:to-brand-800 hover:from-brand-200 hover:to-brand-100 dark:hover:from-brand-800 dark:hover:to-brand-700 p-6 no-underline outline-none focus:shadow-md transition-colors duration-300"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">{category.title}</div>
                            <p className="text-sm leading-tight text-muted-foreground">{category.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={subcategory.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:scale-102"
                            >
                              <div className="text-sm font-medium leading-none">{subcategory.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-sm font-medium transition-colors duration-200",
                      pathname === "/about" ? "text-primary" : "text-foreground hover:text-primary",
                    )}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-sm font-medium transition-colors duration-200",
                      pathname === "/contact" ? "text-primary" : "text-foreground hover:text-primary",
                    )}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="outline" size="sm" className="hidden md:flex hover-scale hover:border-primary">
            Subscribe
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-4">
                <div className="relative">
                  <SearchWithSuggestions />
                </div>
                <div className="grid gap-2">
                  {categories.map((category) => (
                    <div key={category.title} className="grid gap-1">
                      <Link href={category.href} className="text-base font-medium hover:text-primary">
                        {category.title}
                      </Link>
                      <div className="grid gap-1 pl-4">
                        {category.subcategories.map((subcategory) => (
                          <Link
                            key={subcategory.title}
                            href={subcategory.href}
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            {subcategory.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link href="/about" className="text-base font-medium hover:text-primary">
                    About
                  </Link>
                  <Link href="/contact" className="text-base font-medium hover:text-primary">
                    Contact
                  </Link>
                </div>
                <Button className="w-full">Subscribe</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
