import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export interface ArticleSeriesCardProps {
  id: string
  title: string
  description: string
  slug: string
  articleCount: number
  image?: string
}

export function ArticleSeriesCard({ id, title, description, slug, articleCount, image }: ArticleSeriesCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{description}</p>
        <p className="text-sm mt-4 font-medium">{articleCount} articles in this series</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/series/${slug}`}>View Series</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
