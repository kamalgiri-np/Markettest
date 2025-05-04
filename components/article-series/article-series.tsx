import Link from "next/link"
import { Card } from "@/components/ui/card"

export interface ArticleSeriesItem {
  id: string
  title: string
  slug: string
  isCurrent?: boolean
  isCompleted?: boolean
}

export interface ArticleSeriesProps {
  title: string
  description?: string
  articles: ArticleSeriesItem[]
  currentArticleSlug?: string
}

export function ArticleSeries({ title, description, articles, currentArticleSlug }: ArticleSeriesProps) {
  // Calculate progress
  const totalArticles = articles.length
  const completedArticles = articles.filter(
    (article) => article.isCompleted || (currentArticleSlug && article.slug < currentArticleSlug),
  ).length
  const progress = totalArticles > 0 ? (completedArticles / totalArticles) * 100 : 0

  return (
    <Card className="p-6 mb-8">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold">Series: {title}</h3>
          {description && <p className="text-muted-foreground mt-1">{description}</p>}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
          <div
            className="bg-primary h-full rounded-full"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>

        {/* Articles list */}
        <ul className="space-y-2">
          {articles.map((article, index) => (
            <li key={article.id} className="flex items-center">
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mr-2">
                {article.isCompleted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-primary"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : (
                  <span className="w-5 h-5 rounded-full border flex items-center justify-center text-xs">
                    {index + 1}
                  </span>
                )}
              </div>
              {article.isCurrent ? (
                <span className="font-medium">{article.title}</span>
              ) : (
                <Link href={`/article/${article.slug}`} className="hover:text-primary transition-colors">
                  {article.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
