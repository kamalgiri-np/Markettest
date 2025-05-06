import { cn } from "@/lib/utils"
import { List } from "lucide-react"

interface TocItem {
  id: string
  text: string
  level: number
}

interface ArticleTocProps {
  items: TocItem[]
  className?: string
}

export function ArticleToc({ items, className }: ArticleTocProps) {
  return (
    <div className={cn("rounded-lg border border-border p-4", className)}>
      <div className="flex items-center gap-2 font-medium mb-3">
        <List className="h-5 w-5 text-primary" />
        <h3>Table of Contents</h3>
      </div>
      <nav>
        <ul className="space-y-1">
          {items.map((item) => (
            <li
              key={item.id}
              className={cn(
                "transition-colors hover:text-primary",
                item.level === 2 ? "pl-0" : "pl-4",
                item.level === 4 ? "pl-8" : "",
              )}
            >
              <a href={`#${item.id}`} className="block py-1 text-sm no-underline hover:underline">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
