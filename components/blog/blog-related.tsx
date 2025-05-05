import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface BlogRelatedProps {
  currentSlug: string
}

export function BlogRelated({ currentSlug }: BlogRelatedProps) {
  // Mock related articles data - in a real app, this would come from an API
  const relatedArticles = [
    {
      title: "Digital Transformation: A Guide for Traditional Businesses",
      slug: "digital-transformation-guide",
      excerpt: "Learn how traditional businesses can successfully navigate the digital transformation journey.",
      image: "/placeholder.svg?height=200&width=400",
      date: "April 12, 2023",
      category: "Technology",
    },
    {
      title: "The Rise of Remote Work: Challenges and Opportunities",
      slug: "remote-work-challenges-opportunities",
      excerpt: "Explore the challenges and opportunities presented by the global shift to remote work.",
      image: "/placeholder.svg?height=200&width=400",
      date: "May 5, 2023",
      category: "Leadership",
    },
    {
      title: "Building a Customer-Centric Organization",
      slug: "customer-centric-organization",
      excerpt: "Discover strategies for putting customers at the center of your business decisions.",
      image: "/placeholder.svg?height=200&width=400",
      date: "June 18, 2023",
      category: "Business Strategy",
    },
  ].filter((article) => article.slug !== currentSlug)

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {relatedArticles.map((article) => (
        <Card key={article.slug} className="overflow-hidden">
          <div className="aspect-video relative">
            <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">{article.category}</div>
              <Link href={`/article/${article.slug}`} className="block">
                <h3 className="line-clamp-2 text-lg font-semibold hover:underline">{article.title}</h3>
              </Link>
              <p className="line-clamp-2 text-sm text-muted-foreground">{article.excerpt}</p>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <div className="text-xs text-muted-foreground">{article.date}</div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
