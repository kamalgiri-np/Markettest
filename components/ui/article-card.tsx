import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ArticleCardProps {
  article: {
    title: string
    excerpt: string
    image: string
    category: string
    date: string
    readTime: string
    slug: string
  }
  variant?: "default" | "featured" | "compact"
  className?: string
}

export function ArticleCard({ article, variant = "default", className }: ArticleCardProps) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className={cn(
        "group block overflow-hidden rounded-lg border border-border transition-all duration-300 hover:shadow-md",
        variant === "featured" ? "md:grid md:grid-cols-2 md:gap-6" : "",
        variant === "compact" ? "flex gap-4 items-center p-3" : "",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          variant === "default" ? "aspect-video" : "",
          variant === "featured" ? "aspect-video md:aspect-square" : "",
          variant === "compact" ? "h-16 w-16 flex-shrink-0 rounded" : "",
        )}
      >
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className={cn("p-4", variant === "compact" ? "p-0" : "")}>
        <Badge
          variant="outline"
          className={cn("mb-2 bg-primary/10 text-primary border-primary/20", variant === "compact" ? "text-xs" : "")}
        >
          {article.category}
        </Badge>
        <h3
          className={cn(
            "font-bold tracking-tight transition-colors group-hover:text-primary",
            variant === "default" ? "text-xl" : "",
            variant === "featured" ? "text-2xl" : "",
            variant === "compact" ? "text-base" : "",
          )}
        >
          {article.title}
        </h3>
        {variant !== "compact" && <p className="mt-2 line-clamp-2 text-muted-foreground">{article.excerpt}</p>}
        <div
          className={cn(
            "mt-4 flex items-center gap-4 text-sm text-muted-foreground",
            variant === "compact" ? "mt-1 text-xs" : "",
          )}
        >
          <div className="flex items-center gap-1">
            <Calendar className={cn("h-4 w-4", variant === "compact" ? "h-3 w-3" : "")} />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className={cn("h-4 w-4", variant === "compact" ? "h-3 w-3" : "")} />
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
