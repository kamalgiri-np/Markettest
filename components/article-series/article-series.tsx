"use client"

import { cn } from "@/lib/utils"
import type { ArticleSeries as ArticleSeriesType } from "@/types/article-series"
import { ArticleSeriesProgress } from "./article-series-progress"
import { ArticleSeriesNavigation } from "./article-series-navigation"
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ArticleSeriesProps {
  series: ArticleSeriesType
  className?: string
  expanded?: boolean
  showProgress?: boolean
  variant?: "default" | "compact" | "inline"
}

export function ArticleSeries({
  series,
  className,
  expanded = false,
  showProgress = true,
  variant = "default",
}: ArticleSeriesProps) {
  const [isExpanded, setIsExpanded] = useState(expanded)
  const currentIndex = series.articles.findIndex((article) => article.isCurrent)
  const progress =
    series.progress || (currentIndex >= 0 ? Math.round(((currentIndex + 1) / series.totalArticles) * 100) : 0)

  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card text-card-foreground shadow-sm",
        variant === "compact" && "p-4",
        variant === "default" && "p-5",
        variant === "inline" && "border-l-4 border-l-primary p-4",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Series: {series.title}</h3>
            {variant !== "compact" && (
              <p className="text-sm text-muted-foreground">
                {currentIndex + 1} of {series.totalArticles} articles
              </p>
            )}
          </div>
        </div>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          <span className="sr-only">{isExpanded ? "Collapse" : "Expand"} series</span>
        </Button>
      </div>

      {showProgress && variant !== "compact" && (
        <div className="mt-4">
          <ArticleSeriesProgress progress={progress} />
        </div>
      )}

      {(isExpanded || variant === "compact") && (
        <div className={cn("mt-4", variant === "compact" ? "mt-3" : "mt-5")}>
          <ArticleSeriesNavigation articles={series.articles} variant={variant === "compact" ? "compact" : "default"} />
        </div>
      )}

      {!isExpanded && variant === "default" && (
        <Button
          variant="ghost"
          size="sm"
          className="mt-2 w-full justify-center text-primary"
          onClick={() => setIsExpanded(true)}
        >
          Show all articles in this series
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
