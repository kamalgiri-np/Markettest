import { cn } from "@/lib/utils"

interface ArticleSeriesProgressProps {
  progress: number
  className?: string
}

export function ArticleSeriesProgress({ progress, className }: ArticleSeriesProgressProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-center justify-between text-sm">
        <p className="text-muted-foreground">Progress</p>
        <p className="font-medium">{progress}%</p>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div className="h-full bg-primary transition-all duration-300 ease-in-out" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
