"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Tag, ArrowRight } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for popular posts
const popularPosts = [
  {
    id: "1",
    title: "10 Strategies for Effective Leadership in Remote Teams",
    image: "/placeholder.svg?height=80&width=120",
    date: "May 15, 2023",
    slug: "strategies-for-remote-leadership",
  },
  {
    id: "2",
    title: "Economic Outlook 2023: Navigating Uncertainty in Global Markets",
    image: "/placeholder.svg?height=80&width=120",
    date: "May 10, 2023",
    slug: "economic-outlook-2023",
  },
  {
    id: "3",
    title: "Building a Personal Brand That Stands Out in a Competitive Market",
    image: "/placeholder.svg?height=80&width=120",
    date: "May 5, 2023",
    slug: "personal-brand-competitive-market",
  },
]

// Mock data for categories
const categories = [
  { name: "Leadership", count: 24, slug: "leadership" },
  { name: "Economics", count: 18, slug: "economics" },
  { name: "Career Development", count: 15, slug: "career-development" },
  { name: "Technology", count: 12, slug: "technology" },
  { name: "Sustainability", count: 9, slug: "sustainability" },
  { name: "Business Skills", count: 21, slug: "business-skills" },
]

// Mock data for tags
const tags = [
  "Remote Work",
  "Leadership",
  "Financial Planning",
  "Career Growth",
  "Artificial Intelligence",
  "Sustainability",
  "Communication",
  "Innovation",
  "Market Analysis",
  "Team Management",
]

export function BlogSidebar() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would redirect to search results
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="space-y-8 sticky top-24">
      <Card>
        <CardHeader>
          <CardTitle>Search</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Popular Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularPosts.map((post) => (
              <div key={post.id} className="flex gap-4">
                <Link href={`/blog/${post.slug}`} className="shrink-0">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={80}
                    height={60}
                    className="rounded-md object-cover"
                  />
                </Link>
                <div className="space-y-1">
                  <h4 className="font-medium line-clamp-2 text-sm">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.name} className="flex justify-between items-center">
                <Link href={`/blog/category/${category.slug}`} className="text-sm hover:text-primary transition-colors">
                  {category.name}
                </Link>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link key={tag} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                <Badge variant="outline" className="bg-muted hover:bg-primary/20 transition-colors">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Subscribe to Premium</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Get unlimited access to all our premium content, templates, and resources.
          </p>
          <Button asChild className="w-full">
            <Link href="/premium/subscribe">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
