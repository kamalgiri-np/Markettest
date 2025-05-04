import { cn } from "@/lib/utils"
import type { ArticleSeries as ArticleSeriesType } from "@/types/article-series"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ArrowRight } from "lucide-react"
import { ArticleSeriesProgress } from "./article-series-progress"

interface ArticleSeriesCardProps {
  series: ArticleSeriesType
  className?: string
}

export function ArticleSeriesCard({ series, className }: ArticleSeriesCardProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md",
        className,
      )}
    >
      {series.coverImage && (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={series.coverImage || "/placeholder.svg"}
            alt={series.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
            <BookOpen className="h-3.5 w-3.5" />
            <span>{series.totalArticles} articles</span>
          </div>
        </div>
      )}
      <div className="p-5">
        <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary">{series.title}</h3>
        <p className="mt-2 line-clamp-2 text-muted-foreground">{series.description}</p>

        {series.tags && series.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {series.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-muted">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {typeof series.progress === "number" && (
          <div className="mt-4">
            <ArticleSeriesProgress progress={series.progress} />
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {series.progress ? "Continue reading" : "Start reading"}
          </span>
          <Link
            href={`/article/${series.articles[0].slug}`}
            className="flex items-center gap-1 text-sm font-medium text-primary"
          >
            Read series
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
