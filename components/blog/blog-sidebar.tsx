import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function BlogSidebar() {
  const categories = [
    { name: "Business Strategy", slug: "business-strategy", count: 12 },
    { name: "Leadership", slug: "leadership", count: 8 },
    { name: "Digital Marketing", slug: "digital-marketing", count: 15 },
    { name: "Technology", slug: "technology", count: 10 },
    { name: "Sustainability", slug: "sustainability", count: 6 },
  ]

  const popularPosts = [
    {
      title: "10 Leadership Lessons from Successful CEOs",
      slug: "leadership-lessons-successful-ceos",
    },
    {
      title: "The Future of Remote Work: Trends to Watch",
      slug: "future-remote-work-trends",
    },
    {
      title: "Building a Sustainable Business Model",
      slug: "building-sustainable-business-model",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
          <CardDescription>Browse articles by category</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/blog/category/${category.slug}`}
                  className="flex items-center justify-between text-sm hover:underline"
                >
                  <span>{category.name}</span>
                  <span className="text-muted-foreground">{category.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Popular Posts</CardTitle>
          <CardDescription>Most read articles this month</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {popularPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/article/${post.slug}`} className="text-sm font-medium hover:underline">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Newsletter</CardTitle>
          <CardDescription>Stay updated with our latest insights</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <Button type="submit" className="w-full">
              Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
