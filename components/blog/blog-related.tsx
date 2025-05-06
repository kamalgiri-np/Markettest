import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  category: string
  slug: string
}

interface BlogRelatedProps {
  posts: BlogPost[]
  className?: string
}

export function BlogRelated({ posts, className }: BlogRelatedProps) {
  if (posts.length === 0) return null

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="relative h-48">
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </Link>
            </div>
            <CardContent className="p-4">
              <Badge variant="outline" className="mb-2 bg-primary/10 text-primary border-primary/20">
                {post.category}
              </Badge>
              <h3 className="font-bold mb-2 line-clamp-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium text-primary flex items-center hover:underline"
              >
                Read More <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
