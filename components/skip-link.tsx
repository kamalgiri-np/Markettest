"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function SkipLink() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <a
      href="#main-content"
      className={cn(
        "fixed top-0 left-0 z-50 p-2.5 bg-primary text-primary-foreground",
        "transform -translate-y-full focus:translate-y-0 transition",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      )}
    >
      Skip to main content
    </a>
  )
}
