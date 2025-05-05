import { cn } from "@/lib/utils"

interface CodeBlockProps {
  language?: string
  code: string
  className?: string
}

export function CodeBlock({ language, code, className }: CodeBlockProps) {
  return (
    <div className={cn("relative rounded-lg bg-muted p-4", className)}>
      {language && <div className="absolute right-4 top-4 text-xs text-muted-foreground">{language}</div>}
      <pre className="overflow-x-auto">
        <code className="text-sm font-mono">{code}</code>
      </pre>
    </div>
  )
}
