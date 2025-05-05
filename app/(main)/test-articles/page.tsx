import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeExample } from "@/components/blog/code-example"

export default function TestArticlesPage() {
  const articleSlugs = [
    "navigating-economic-uncertainty",
    "building-adaptive-teams",
    "future-proofing-business-model",
    "ai-in-content-marketing",
    "sustainable-business-practices",
  ]

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Test Article Pages</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {articleSlugs.map((slug) => (
          <Card key={slug} className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="line-clamp-2">
                {slug
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </CardTitle>
              <CardDescription>Test article page rendering</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Click the button below to test if this article page renders correctly.</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/article/${slug}`}>View Article</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-card p-8 rounded-lg border">
        <h2 className="text-2xl font-bold mb-6">Code Block Test</h2>
        <p className="mb-6">This section tests if code blocks are rendering correctly with the fixed CSS.</p>

        <CodeExample />
      </div>
    </div>
  )
}
