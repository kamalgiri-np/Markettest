export interface ArticleSeriesItem {
  id: string
  title: string
  slug: string
  excerpt?: string
  publishedAt: string
  readingTime?: string
  isCompleted?: boolean
  isCurrent?: boolean
}

export interface ArticleSeries {
  id: string
  title: string
  description: string
  coverImage?: string
  totalArticles: number
  progress?: number
  articles: ArticleSeriesItem[]
  tags?: string[]
}
