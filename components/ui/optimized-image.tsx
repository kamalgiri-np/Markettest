import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  ...props
}: OptimizedImageProps) {
  // Check if the source is a placeholder
  const isPlaceholder = src.includes("placeholder.svg")

  // If it's a placeholder, use a blurhash or color as placeholder
  const blurDataURL = isPlaceholder
    ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4="
    : undefined

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={fill ? undefined : width || 1200}
      height={fill ? undefined : height || 800}
      className={cn("object-cover", className)}
      priority={priority}
      fill={fill}
      placeholder={isPlaceholder ? "blur" : "empty"}
      blurDataURL={blurDataURL}
      {...props}
    />
  )
}
