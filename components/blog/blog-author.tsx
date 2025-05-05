import Image from "next/image"
import Link from "next/link"
import { Twitter, Linkedin, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Author {
  name: string
  role: string
  image: string
  bio: string
  twitter?: string
  linkedin?: string
  website?: string
}

interface BlogAuthorProps {
  author: Author
}

// Verify the BlogAuthor export
export function BlogAuthor({ author }: BlogAuthorProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4 space-y-0">
        <div className="relative h-16 w-16 rounded-full overflow-hidden">
          <Image src={author.image || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
        </div>
        <div>
          <CardTitle>{author.name}</CardTitle>
          <CardDescription>{author.role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{author.bio}</p>
      </CardContent>
      <CardFooter className="flex justify-start gap-2">
        {author.twitter && (
          <Button variant="ghost" size="icon" asChild>
            <Link href={author.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
        )}
        {author.linkedin && (
          <Button variant="ghost" size="icon" asChild>
            <Link href={author.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        )}
        {author.website && (
          <Button variant="ghost" size="icon" asChild>
            <Link href={author.website} target="_blank" rel="noopener noreferrer">
              <Globe className="h-4 w-4" />
              <span className="sr-only">Website</span>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
