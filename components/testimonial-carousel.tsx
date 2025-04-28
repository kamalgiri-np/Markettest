"use client"

import { useState, useEffect } from "react"
import { Testimonial } from "@/components/testimonial"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TestimonialData {
  quote: string
  name: string
  title: string
  company?: string
  avatar?: string
}

interface TestimonialCarouselProps {
  testimonials: TestimonialData[]
  className?: string
  autoplaySpeed?: number
}

export function TestimonialCarousel({ testimonials, className, autoplaySpeed = 5000 }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoplaySpeed)

    return () => clearInterval(interval)
  }, [testimonials.length, autoplaySpeed])

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <div className={cn("relative overflow-hidden py-10", className)}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4 transition-opacity duration-500"
                style={{
                  opacity: activeIndex === index ? 1 : 0.3,
                  transform: `scale(${activeIndex === index ? 1 : 0.9})`,
                  transition: "all 0.5s ease",
                }}
              >
                <Testimonial
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                  company={testimonial.company}
                  avatar={testimonial.avatar}
                  className="mx-auto hover-lift"
                />
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur hover:bg-primary/10"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur hover:bg-primary/10"
            onClick={goToNext}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-primary w-4" : "bg-muted-foreground/30",
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
