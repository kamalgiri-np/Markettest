import { cn } from "@/lib/utils"
import Image from "next/image"

interface ArticleImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  caption?: string
  className?: string
}

export function ArticleImage({ src, alt, width, height, caption, className }: ArticleImageProps) {
  return (
    <figure className={cn("my-8", className)}>
      <div className="overflow-hidden rounded-lg border border-border">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width || 1200}
          height={height || 675}
          className="w-full transition-transform duration-500 hover:scale-105 dark:brightness-90 dark:contrast-110"
        />
      </div>
      {caption && <figcaption className="mt-2 text-center text-sm text-muted-foreground">{caption}</figcaption>}
    </figure>
  )
}
