import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface BlogAdvertisementProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  image: string
  className?: string
}

export function BlogAdvertisement({ title, description, ctaText, ctaLink, image, className }: BlogAdvertisementProps) {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10" />
        <Image
          src={image || "/placeholder.svg"}
          alt="Advertisement"
          width={1200}
          height={200}
          className="w-full h-auto object-cover"
        />
        <CardContent className="absolute inset-0 z-20 flex flex-col justify-center p-8">
          <div className="max-w-md">
            <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground mb-4">{description}</p>
            <Button asChild>
              <Link href={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
