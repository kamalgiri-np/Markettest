import Image from "next/image"
import Link from "next/link"
import { Twitter, Linkedin, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Author {
  name: string
  avatar: string
  role: string
  bio: string
  twitter?: string
  linkedin?: string
  website?: string
}

interface BlogAuthorProps {
  author: Author
  className?: string
}

export function BlogAuthor({ author, className }: BlogAuthorProps) {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0">
            <Image src={author.avatar || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">{author.name}</h3>
            <p className="text-primary font-medium mb-3">{author.role}</p>
            <p className="text-muted-foreground mb-4">{author.bio}</p>
            <div className="flex gap-2">
              {author.twitter && (
                <Button variant="outline" size="icon" asChild>
                  <Link href={author.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
              )}
              {author.linkedin && (
                <Button variant="outline" size="icon" asChild>
                  <Link href={author.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              )}
              {author.website && (
                <Button variant="outline" size="icon" asChild>
                  <Link href={author.website} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4" />
                    <span className="sr-only">Website</span>
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
