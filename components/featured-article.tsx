import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface FeaturedArticleProps extends React.HTMLAttributes<HTMLDivElement> {
  article: {
    title: string
    description: string
    category: string
    categoryHref: string
    image: string
    author: {
      name: string
      avatar: string
    }
    date: string
    readTime: string
    href: string
  }
  variant?: "default" | "reversed"
}

export function FeaturedArticle({ article, variant = "default", className, ...props }: FeaturedArticleProps) {
  const isReversed = variant === "reversed"

  return (
    <div
      className={cn(
        "grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_600px]",
        isReversed && "lg:[direction:rtl]",
        "transition-all duration-500 hover:shadow-md hover:shadow-primary/10 rounded-xl p-4",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col justify-center space-y-4 lg:[direction:ltr]">
        <div className="space-y-2">
          <Badge variant="secondary" className="inline-flex">
            <Link href={article.categoryHref}>{article.category}</Link>
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl transition-all duration-300">
            <Link
              href={article.href}
              className="hover:text-primary hover:underline transition-colors duration-200 gradient-text"
            >
              {article.title}
            </Link>
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {article.description}
          </p>
        </div>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{article.author.name}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{article.readTime}</span>
          </div>
        </div>
        <div>
          <Button asChild className="transition-all duration-300 hover:translate-x-1">
            <Link href={article.href}>
              Read Article
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="lg:[direction:ltr]">
        <Link href={article.href}>
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            width={800}
            height={600}
            className="aspect-video overflow-hidden rounded-xl object-cover transition-transform duration-500 hover:scale-105"
          />
        </Link>
      </div>
    </div>
  )
}
