"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useDebounce } from "@/lib/use-debounce"

// Mock search suggestions data
const mockSuggestions = {
  lead: [
    { title: "Leadership Principles That Transform Organizations", href: "/article/leadership-principles" },
    { title: "Leading Through Crisis: A CEO's Perspective", href: "/article/leading-through-crisis" },
    { title: "Team Leadership in Remote Work Environments", href: "/article/team-leadership-remote" },
  ],
  market: [
    { title: "Understanding Market Volatility in Uncertain Times", href: "/article/understanding-market-volatility" },
    { title: "Market Analysis Techniques for Beginners", href: "/article/market-analysis-beginners" },
    { title: "Global Market Trends 2023", href: "/article/global-market-trends-2023" },
  ],
  career: [
    { title: "Career Development Strategies for 2023", href: "/article/career-development-2023" },
    { title: "Building a Personal Brand That Opens Career Doors", href: "/article/building-personal-brand" },
    { title: "Career Transitions: From Employee to Entrepreneur", href: "/article/career-transitions" },
  ],
  digital: [
    { title: "Digital Transformation: A Comprehensive Guide", href: "/article/digital-transformation-guide" },
    { title: "Digital Marketing Strategies for B2B Companies", href: "/article/digital-marketing-b2b" },
    { title: "The Digital Economy: Opportunities and Challenges", href: "/article/digital-economy" },
  ],
  finance: [
    { title: "Financial Planning for Small Businesses", href: "/article/financial-planning-small-business" },
    { title: "Investment Strategies for Uncertain Markets", href: "/article/investment-strategies" },
    { title: "Understanding Financial Statements", href: "/article/understanding-financial-statements" },
  ],
  tech: [
    { title: "Technology Trends Reshaping Business", href: "/article/technology-trends-business" },
    { title: "AI Applications in Modern Business", href: "/article/ai-applications-business" },
    { title: "Blockchain: Beyond Cryptocurrency", href: "/article/blockchain-beyond-cryptocurrency" },
  ],
}

// Helper function to get suggestions based on query
const getSuggestions = (query: string) => {
  if (!query || query.length < 2) return []

  // Check for exact matches in our mock data
  if (mockSuggestions[query.toLowerCase()]) {
    return mockSuggestions[query.toLowerCase()]
  }

  // Check for partial matches
  const allSuggestions = Object.values(mockSuggestions).flat()
  return allSuggestions.filter((item) => item.title.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
}

export function SearchWithSuggestions({ className }: { className?: string }) {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<Array<{ title: string; href: string }>>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const debouncedQuery = useDebounce(query, 300)
  const router = useRouter()
  const searchContainerRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Update suggestions when query changes
  useEffect(() => {
    if (debouncedQuery) {
      const results = getSuggestions(debouncedQuery)
      setSuggestions(results)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [debouncedQuery])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
      setShowSuggestions(false)
    }
  }

  return (
    <div ref={searchContainerRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative w-full">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search articles..."
          className="w-full rounded-full bg-background pl-8 border-primary/20 focus:border-primary transition-colors duration-200"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setShowSuggestions(true)}
        />
        <Button
          type="submit"
          size="sm"
          variant="ghost"
          className="absolute right-1 top-1 h-7 w-7 rounded-full p-0"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </Button>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-md bg-background border shadow-lg">
          <ul className="py-2 max-h-80 overflow-auto">
            {suggestions.map((suggestion, index) => (
              <li key={index}>
                <Link
                  href={suggestion.href}
                  className="block px-4 py-2 hover:bg-muted text-sm transition-colors duration-150"
                  onClick={() => setShowSuggestions(false)}
                >
                  {suggestion.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t px-4 py-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-sm text-muted-foreground hover:text-foreground"
              onClick={() => {
                router.push(`/search?q=${encodeURIComponent(query)}`)
                setShowSuggestions(false)
              }}
            >
              See all results for "{query}"
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
