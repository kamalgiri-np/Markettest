import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // This would normally come from a database or API
  const categoryData = {
    economics: {
      title: "Economics",
      description: "Market trends, financial analysis, and economic insights for informed decision-making.",
      icon: "📈",
    },
    leadership: {
      title: "Leadership",
      description: "Strategies, principles, and case studies to enhance your leadership capabilities.",
      icon: "👥",
    },
    career: {
      title: "Career Development",
      description:
        "Practical advice, skill-building resources, and industry insights to accelerate your professional growth.",
      icon: "📚",
    },
  }[params.slug] || {
    title: "Category",
    description: "Articles in this category",
    icon: "📄",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
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
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
          </svg>
          <span className="text-xl font-bold">InsightfulGrowth</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/category/economics"
            className={`text-sm font-medium hover:text-primary ${params.slug === "economics" ? "text-primary" : ""}`}
          >
            Economics
          </Link>
          <Link
            href="/category/leadership"
            className={`text-sm font-medium hover:text-primary ${params.slug === "leadership" ? "text-primary" : ""}`}
          >
            Leadership
          </Link>
          <Link
            href="/category/career"
            className={`text-sm font-medium hover:text-primary ${params.slug === "career" ? "text-primary" : ""}`}
          >
            Career Development
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="sm" className="hidden md:flex">
          Subscribe
        </Button>
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
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="text-4xl">{categoryData.icon}</div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{categoryData.title}</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{categoryData.description}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Featured Articles</h2>
                <p className="text-muted-foreground">
                  Our most popular and insightful content in {categoryData.title.toLowerCase()}.
                </p>
              </div>
              <Separator className="my-4" />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="p-0">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Article thumbnail"
                      className="aspect-[4/3] w-full rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      {categoryData.title}
                    </div>
                    <CardTitle className="mt-4 line-clamp-2">
                      {params.slug === "economics"
                        ? "Understanding Market Volatility in Uncertain Times"
                        : params.slug === "leadership"
                          ? "5 Leadership Principles That Transform Teams"
                          : "The Future of Work: Skills That Will Matter in 2025"}
                    </CardTitle>
                    <CardDescription className="mt-2 line-clamp-3">
                      {params.slug === "economics"
                        ? "An in-depth analysis of how global events impact market stability and what investors should consider."
                        : params.slug === "leadership"
                          ? "Discover the key leadership principles that can help you build high-performing teams and drive organizational success."
                          : "A forward-looking analysis of the skills and competencies that will be most valuable in the evolving job market."}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between p-6 pt-0">
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="Author"
                        className="rounded-full"
                      />
                      <div className="text-sm">
                        <p className="font-medium">
                          {params.slug === "economics"
                            ? "Sarah Johnson"
                            : params.slug === "leadership"
                              ? "Michael Chen"
                              : "Alex Rivera"}
                        </p>
                        <p className="text-xs text-muted-foreground">Apr 24, 2023</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <BookOpen className="h-4 w-4" />
                      <span className="sr-only">Read</span>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="p-0">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Article thumbnail"
                      className="aspect-[4/3] w-full rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      {categoryData.title}
                    </div>
                    <CardTitle className="mt-4 line-clamp-2">
                      {params.slug === "economics"
                        ? "The Impact of Rising Interest Rates on Global Markets"
                        : params.slug === "leadership"
                          ? "Emotional Intelligence: The Leadership Superpower"
                          : "Navigating Career Transitions in a Changing Economy"}
                    </CardTitle>
                    <CardDescription className="mt-2 line-clamp-3">
                      {params.slug === "economics"
                        ? "Examining how central bank policies are reshaping investment landscapes worldwide."
                        : params.slug === "leadership"
                          ? "How developing emotional intelligence can dramatically improve your leadership effectiveness and team dynamics."
                          : "Strategic approaches to pivoting your career path during economic shifts and industry disruptions."}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between p-6 pt-0">
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="Author"
                        className="rounded-full"
                      />
                      <div className="text-sm">
                        <p className="font-medium">
                          {params.slug === "economics"
                            ? "David Wong"
                            : params.slug === "leadership"
                              ? "Priya Sharma"
                              : "James Wilson"}
                        </p>
                        <p className="text-xs text-muted-foreground">Apr 18, 2023</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <BookOpen className="h-4 w-4" />
                      <span className="sr-only">Read</span>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="p-0">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Article thumbnail"
                      className="aspect-[4/3] w-full rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      {categoryData.title}
                    </div>
                    <CardTitle className="mt-4 line-clamp-2">
                      {params.slug === "economics"
                        ? "Supply Chain Disruptions: Economic Implications and Solutions"
                        : params.slug === "leadership"
                          ? "Leading Through Crisis: Lessons from Successful CEOs"
                          : "Building a Personal Brand That Opens Career Doors"}
                    </CardTitle>
                    <CardDescription className="mt-2 line-clamp-3">
                      {params.slug === "economics"
                        ? "Analyzing the ongoing challenges in global supply chains and strategies for resilience."
                        : params.slug === "leadership"
                          ? "Case studies and actionable insights on how top executives navigate and thrive during challenging times."
                          : "Strategic approaches to developing your professional identity and leveraging it for career advancement."}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between p-6 pt-0">
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="Author"
                        className="rounded-full"
                      />
                      <div className="text-sm">
                        <p className="font-medium">
                          {params.slug === "economics"
                            ? "Maria Rodriguez"
                            : params.slug === "leadership"
                              ? "Thomas Anderson"
                              : "Sophia Lee"}
                        </p>
                        <p className="text-xs text-muted-foreground">Apr 12, 2023</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <BookOpen className="h-4 w-4" />
                      <span className="sr-only">Read</span>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center w-full pt-6">
                <Button variant="outline">
                  Load More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Stay Updated</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Get the latest {categoryData.title.toLowerCase()} insights, articles, and resources delivered to your
                inbox weekly.
              </p>
              <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row items-center justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm flex-1"
                />
                <Button>Subscribe</Button>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
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
              className="h-5 w-5"
            >
              <path d="M3 3v18h18" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
            <p className="text-sm font-medium">InsightfulGrowth © 2023</p>
          </div>
          <div className="flex gap-4 md:gap-6">
            <Link href="/about" className="text-xs hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-xs hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href="/privacy" className="text-xs hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs hover:underline underline-offset-4">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
