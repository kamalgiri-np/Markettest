import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface SeriesPart {
  title: string
  slug: string
  isActive: boolean
}

interface Series {
  title: string
  currentPart: number
  totalParts: number
  parts: SeriesPart[]
}

interface ArticleSeriesProps {
  series: Series
}

export function ArticleSeries({ series }: ArticleSeriesProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Part of the "{series.title}"</CardTitle>
        <CardDescription>
          Part {series.currentPart} of {series.totalParts}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {series.parts.map((part, index) => (
            <div key={part.slug} className="flex items-start gap-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-background text-xs">
                {index + 1}
              </div>
              <div className="flex-1">
                {part.isActive ? (
                  <div className="font-medium text-foreground">{part.title}</div>
                ) : (
                  <Link
                    href={`/article/${part.slug}`}
                    className="font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {part.title}
                  </Link>
                )}
              </div>
              {part.isActive && (
                <div className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Current</div>
              )}
            </div>
          ))}
        </div>

        {series.currentPart < series.totalParts && (
          <div className="mt-4">
            <Link
              href={`/article/${series.parts[series.currentPart].slug}`}
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Next in series: {series.parts[series.currentPart].title}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
