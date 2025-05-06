"use client"

import type React from "react"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import useIntersectionObserver from "@/lib/use-intersection-observer"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-in" | "slide-up" | "slide-down" | "slide-in-right" | "slide-in-left" | "zoom-in"
  delay?: "delay-0" | "delay-100" | "delay-200" | "delay-300" | "delay-500" | "delay-700"
  threshold?: number
  rootMargin?: string
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-in",
  delay = "delay-0",
  threshold = 0.1,
  rootMargin = "0px",
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
  })

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(className, isIntersecting ? `animate-${animation}` : "opacity-0", isIntersecting ? delay : "")}
    >
      {children}
    </section>
  )
}

export function AnimatedElement({
  children,
  className,
  animation = "fade-in",
  delay = "delay-0",
  threshold = 0.1,
  rootMargin = "0px",
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
  })

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(className, isIntersecting ? `animate-${animation}` : "opacity-0", isIntersecting ? delay : "")}
    >
      {children}
    </div>
  )
}
