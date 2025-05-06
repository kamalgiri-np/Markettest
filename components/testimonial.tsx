import type React from "react"
import Image from "next/image"
import { Quote } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string
  name: string
  title: string
  company?: string
  avatar?: string
}

export function Testimonial({
  quote,
  name,
  title,
  company,
  avatar = "/placeholder.svg?height=40&width=40",
  className,
  ...props
}: TestimonialProps) {
  return (
    <Card className={cn("h-full", className)} {...props}>
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-primary/20" />
        <blockquote className="mt-4 text-lg font-medium leading-relaxed">"{quote}"</blockquote>
      </CardContent>
      <CardFooter>
        <div className="flex items-center space-x-3">
          <Image src={avatar || "/placeholder.svg"} alt={name} width={40} height={40} className="rounded-full" />
          <div>
            <div className="font-medium">{name}</div>
            <div className="text-sm text-muted-foreground">
              {title}
              {company && `, ${company}`}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
