import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Professional Blog</h1>
        <p className="mt-6 text-xl text-muted-foreground">
          Explore our articles on business strategy, leadership, and technology.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/blog">Read Articles</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/test-articles">Test Articles</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
