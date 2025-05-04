import { cn } from "@/lib/utils"
import type { ArticleSeriesItem } from "@/types/article-series"
import Link from "next/link"
import { CheckCircle2, Circle } from "lucide-react"

interface ArticleSeriesNavigationProps {
  articles: ArticleSeriesItem[]
  className?: string
  variant?: "default" | "compact"
}

export function ArticleSeriesNavigation({ articles, className, variant = "default" }: ArticleSeriesNavigationProps) {
  return (
    <nav className={cn("space-y-1", className)} aria-label="Series navigation">
      <ol className="space-y-1">
        {articles.map((article, index) => (
          <li key={article.id}>
            <Link
              href={`/article/${article.slug}`}
              className={cn(
                "group flex items-start gap-3 rounded-md px-3 py-2 transition-colors",
                article.isCurrent ? "bg-primary/10 text-primary" : "hover:bg-muted/50",
                variant === "compact" && "py-1.5",
              )}
              aria-current={article.isCurrent ? "page" : undefined}
            >
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center">
                {article.isCompleted ? (
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                ) : (
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    <Circle className={cn("h-5 w-5", article.isCurrent ? "text-primary" : "text-muted-foreground")} />
                    <span
                      className={cn(
                        "absolute text-xs font-medium",
                        article.isCurrent ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {index + 1}
                    </span>
                  </span>
                )}
              </div>
              <div>
                <div className="font-medium leading-snug">{article.title}</div>
                {variant !== "compact" && article.excerpt && (
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{article.excerpt}</p>
                )}
                {variant !== "compact" && (
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{article.publishedAt}</span>
                    {article.readingTime && (
                      <>
                        <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                        <span>{article.readingTime}</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
