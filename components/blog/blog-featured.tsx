import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  category: string
  author: {
    name: string
    avatar: string
  }
  date: string
  readTime: string
  slug: string
}

interface BlogFeaturedProps {
  post: BlogPost
  className?: string
}

export function BlogFeatured({ post, className }: BlogFeaturedProps) {
  return (
    <Card className={`overflow-hidden border-none shadow-lg ${className}`}>
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative h-64 md:h-auto">
          <Link href={`/blog/${post.slug}`}>
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </Link>
        </div>
        <CardContent className="flex flex-col p-8 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="mb-2">
            <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
              Featured
            </Badge>
            <Badge variant="outline" className="ml-2 bg-background/80">
              {post.category}
            </Badge>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
              {post.title}
            </Link>
          </h2>
          <p className="text-muted-foreground mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-auto mb-6">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <Button asChild>
            <Link href={`/blog/${post.slug}`}>
              Read Article
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}
