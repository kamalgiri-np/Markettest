import { cn } from "@/lib/utils"

interface SkeletonCardProps {
  className?: string
  imageHeight?: string
}

export function SkeletonCard({ className, imageHeight = "h-48" }: SkeletonCardProps) {
  return (
    <div className={cn("rounded-lg border bg-card overflow-hidden", className)}>
      <div className={cn("bg-muted animate-pulse", imageHeight)} />
      <div className="p-4 space-y-3">
        <div className="h-4 w-1/4 bg-muted rounded animate-pulse" />
        <div className="h-6 w-3/4 bg-muted rounded animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-muted rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
            <div className="h-4 w-20 bg-muted rounded animate-pulse" />
          </div>
          <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
        </div>
      </div>
    </div>
  )
}
