"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-300",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none",
        )}
      >
        <Button className="rounded-full size-12 p-0 shadow-md bg-primary hover:bg-primary/90" onClick={scrollToTop}>
          <ArrowUp className="h-5 w-5" />
          <span className="sr-only">Scroll to top</span>
        </Button>
        <Button asChild className="rounded-full shadow-md animate-pulse-subtle">
          <Link href="/premium/subscribe">Subscribe</Link>
        </Button>
      </div>
    </>
  )
}
