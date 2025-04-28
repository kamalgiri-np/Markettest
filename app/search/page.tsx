import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { q?: string }
}) {
  const searchQuery = searchParams?.q || ""

  // Mock search results - in a real implementation, this would come from a search API
  const searchResults = [
    {
      title: "Understanding Market Volatility in Uncertain Times",
      description:
        "An in-depth analysis of how global events impact market stability and what investors should consider.",
      category: "Economics",
      categoryHref: "/category/economics",
      image: "/placeholder.svg?height=400&width=600",
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "Apr 24, 2023",
      readTime: "10 min read",
      href: "/article/understanding-market-volatility",
    },
    {
      title: "Leadership Principles That Transform Organizations",
      description:
        "Discover the key leadership principles that can help you build high-performing teams and drive organizational success.",
      category: "Leadership",
      categoryHref: "/category/leadership",
      image: "/placeholder.svg?height=400&width=600",
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "Apr 18, 2023",
      readTime: "12 min read",
      href: "/article/leadership-principles",
    },
    {
      title: "The Future of Work: Skills That Will Matter in 2025",
      description:
        "A forward-looking analysis of the skills and competencies that will be most valuable in the evolving job market.",
      category: "Career Development",
      categoryHref: "/category/career",
      image: "/placeholder.svg?height=400&width=600",
      author: {
        name: "Alex Rivera",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "Apr 12, 2023",
      readTime: "14 min read",
      href: "/article/future-skills-2025",
    },
    {
      title: "Digital Transformation: A Comprehensive Guide",
      description:
        "A strategic framework for navigating digital transformation initiatives in today's business landscape.",
      category: "Technology",
      categoryHref: "/category/technology",
      image: "/placeholder.svg?height=400&width=600",
      author: {
        name: "Elena Martinez",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "Apr 8, 2023",
      readTime: "15 min read",
      href: "/article/digital-transformation-guide",
    },
    {
      title: "Supply Chain Disruptions: Economic Implications",
      description: "Analyzing the ongoing challenges in global supply chains and strategies for business resilience.",
      category: "Economics",
      categoryHref: "/category/economics",
      image: "/placeholder.svg?height=400&width=600",
      author: {
        name: "Maria Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "Apr 5, 2023",
      readTime: "13 min read",
      href: "/article/supply-chain-disruptions",
    },
    {
      title: "Building a Personal Brand That Opens Career Doors",
      description:
        "Strategic approaches to developing your professional identity and leveraging it for career advancement.",
      category: "Career Development",
      categoryHref: "/category/career",
      image: "/placeholder.svg?height=400&width=600",
      author: {
        name: "Sophia Lee",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "Apr 1, 2023",
      readTime: "10 min read",
      href: "/article/building-personal-brand",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" asChild className="hover:bg-transparent">
                    <Link href="/">
                      <ArrowLeft className="mr-1 h-4 w-4" />
                      Back to Home
                    </Link>
                  </Button>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {searchQuery ? `Search Results for "${searchQuery}"` : "Explore Our Content"}
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  {searchQuery
                    ? `Discover articles, resources, and insights related to "${searchQuery}"`
                    : "Browse through our collection of articles, guides, and expert insights"}
                </p>
              </div>
              <div className="flex items-center">
                <div className="relative w-full">
                  <form action="/search" method="GET">
                    <Input
                      type="search"
                      name="q"
                      placeholder="Search articles, topics, authors..."
                      defaultValue={searchQuery}
                      className="w-full pl-10 pr-4 py-2 border rounded-md"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter">
                {searchResults.length} Results {searchQuery && `for "${searchQuery}"`}
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="text-sm border rounded px-2 py-1">
                  <option value="relevance">Relevance</option>
                  <option value="date-desc">Newest first</option>
                  <option value="date-asc">Oldest first</option>
                </select>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {searchResults.map((result, index) => (
                <Card
                  key={index}
                  className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift"
                >
                  <CardHeader className="p-0">
                    <Link href={result.href}>
                      <Image
                        src={result.image || "/placeholder.svg"}
                        width={600}
                        height={400}
                        alt={result.title}
                        className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </Link>
                  </CardHeader>
                  <CardContent className="flex-1 p-6">
                    <Link href={result.categoryHref}>
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 mb-2">
                        {result.category}
                      </Badge>
                    </Link>
                    <CardTitle className="mt-2 line-clamp-2">
                      <Link href={result.href} className="hover:underline">
                        {result.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="mt-2 line-clamp-3">{result.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between p-6 pt-0">
                    <div className="flex items-center space-x-2">
                      <Link href={`/author/${result.author.name.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Image
                          src={result.author.avatar || "/placeholder.svg"}
                          width={40}
                          height={40}
                          alt={result.author.name}
                          className="rounded-full"
                        />
                      </Link>
                      <div className="text-sm">
                        <Link
                          href={`/author/${result.author.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="font-medium hover:underline"
                        >
                          {result.author.name}
                        </Link>
                        <p className="text-xs text-muted-foreground">
                          {result.date} • {result.readTime}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" asChild className="hover-scale transition-all duration-300">
                      <Link href={result.href}>
                        <BookOpen className="h-4 w-4" />
                        <span className="sr-only">Read</span>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <nav aria-label="Pagination" className="inline-flex items-center space-x-1">
                <Button variant="outline" size="icon" disabled>
                  <span className="sr-only">Previous page</span>
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
                    className="h-4 w-4"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </Button>
                <Button variant="outline" size="sm" className="bg-primary text-white hover:bg-primary/90">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  4
                </Button>
                <Button variant="outline" size="sm">
                  5
                </Button>
                <Button variant="outline" size="icon">
                  <span className="sr-only">Next page</span>
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
                    className="h-4 w-4"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Button>
              </nav>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Popular Categories</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">Explore our most popular topics and categories</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/category/economics">
                  <Badge variant="secondary" className="px-4 py-2 text-base hover:bg-primary/10">
                    Economics
                  </Badge>
                </Link>
                <Link href="/category/leadership">
                  <Badge variant="secondary" className="px-4 py-2 text-base hover:bg-primary/10">
                    Leadership
                  </Badge>
                </Link>
                <Link href="/category/career">
                  <Badge variant="secondary" className="px-4 py-2 text-base hover:bg-primary/10">
                    Career Development
                  </Badge>
                </Link>
                <Link href="/category/technology">
                  <Badge variant="secondary" className="px-4 py-2 text-base hover:bg-primary/10">
                    Technology
                  </Badge>
                </Link>
                <Link href="/category/finance">
                  <Badge variant="secondary" className="px-4 py-2 text-base hover:bg-primary/10">
                    Finance
                  </Badge>
                </Link>
                <Link href="/category/strategy">
                  <Badge variant="secondary" className="px-4 py-2 text-base hover:bg-primary/10">
                    Business Strategy
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
