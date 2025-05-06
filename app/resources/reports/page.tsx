"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Filter, Search, Tag, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Sample reports data
const allReports = [
  {
    id: "industry-analysis-2023",
    title: "Industry Analysis Report: Tech Sector Growth in 2023",
    description:
      "A detailed breakdown of tech industry growth sectors, emerging players, and strategic opportunities for businesses looking to expand or pivot.",
    category: "Industry Analysis",
    date: "September 2023",
    image: "/placeholder.svg?height=400&width=600",
    isPremium: true,
    price: 99,
    tags: ["Technology", "Market Analysis", "Strategic Planning"],
  },
  {
    id: "marketing-trends-2023",
    title: "Marketing Trends: What's Working in 2023",
    description:
      "Data-backed insights on the most effective marketing channels, strategies, and tactics based on results from over 500 companies across multiple industries.",
    category: "Marketing",
    date: "August 2023",
    image: "/placeholder.svg?height=400&width=600",
    isPremium: true,
    price: 79,
    tags: ["Marketing", "Digital Strategy", "ROI"],
  },
  {
    id: "remote-work-productivity",
    title: "Remote Work Productivity Report",
    description:
      "Analysis of productivity metrics across remote, hybrid, and office-based teams with actionable recommendations for optimizing each work model.",
    category: "Workplace",
    date: "July 2023",
    image: "/placeholder.svg?height=400&width=600",
    isPremium: false,
    price: 0,
    tags: ["Remote Work", "Productivity", "Team Management"],
  },
  {
    id: "startup-funding-guide",
    title: "Startup Funding Guide: From Seed to Series C",
    description:
      "Comprehensive guide to funding options for startups at different stages, including investor expectations, valuation methodologies, and negotiation strategies.",
    category: "Finance",
    date: "June 2023",
    image: "/placeholder.svg?height=400&width=600",
    isPremium: true,
    price: 129,
    tags: ["Startups", "Funding", "Venture Capital"],
  },
  {
    id: "digital-transformation-case-studies",
    title: "Digital Transformation: 10 Success Stories",
    description:
      "In-depth case studies of successful digital transformation initiatives across different industries, with key lessons and implementation frameworks.",
    category: "Technology",
    date: "May 2023",
    image: "/placeholder.svg?height=400&width=600",
    isPremium: true,
    price: 89,
    tags: ["Digital Transformation", "Case Studies", "Implementation"],
  },
  {
    id: "content-marketing-roi",
    title: "Content Marketing ROI Calculator and Benchmark Report",
    description:
      "Interactive tool and benchmarking report to measure and optimize content marketing ROI across different channels and content types.",
    category: "Marketing",
    date: "April 2023",
    image: "/placeholder.svg?height=400&width=600",
    isPremium: false,
    price: 0,
    tags: ["Content Marketing", "ROI", "Analytics"],
  },
  {
    id: "ai-business-applications",
    title: "AI Business Applications: Implementation Guide",
    description:
      "Practical guide to implementing AI solutions across different business functions with case studies, ROI calculations, and implementation roadmaps.",
    category: "Technology",
    date: "March 2023",
    image: "/placeholder.svg?height=400&width=600",
    isPremium: true,
    price: 119,
    tags: ["Artificial Intelligence", "Implementation", "Business Strategy"],
  },
  {
    id: "ecommerce-optimization",
    title: "E-commerce Optimization: Conversion Rate Playbook",
    description:
      "Tactical guide to optimizing e-commerce conversion rates with proven strategies for product pages, checkout flows, and customer retention.",
    category: "E-commerce",
    date: "February 2023",
    image: "/placeholder.svg?height=400&width=600",
    isPremium: true,
    price: 89,
    tags: ["E-commerce", "Conversion Optimization", "Customer Experience"],
  },
  {
    id: "sustainability-business-case",
    title: "The Business Case for Sustainability",
    description:
      "Analysis of how sustainability initiatives impact business performance, customer loyalty, and long-term growth with actionable implementation frameworks.",
    category: "Sustainability",
    date: "January 2023",
    image: "/placeholder.svg?height=400&width=600",
    isPremium: false,
    price: 0,
    tags: ["Sustainability", "ESG", "Business Strategy"],
  },
]

// Extract unique categories, dates, and price ranges for filters
const allCategories = [...new Set(allReports.map((report) => report.category))]
const allDates = [...new Set(allReports.map((report) => report.date))]
const priceRanges = [
  { label: "Free", min: 0, max: 0 },
  { label: "$1 - $50", min: 1, max: 50 },
  { label: "$51 - $100", min: 51, max: 100 },
  { label: "Over $100", min: 101, max: Number.POSITIVE_INFINITY },
]

export default function ReportsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedDates, setSelectedDates] = useState<string[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])
  const [showPremiumOnly, setShowPremiumOnly] = useState(false)
  const [showFreeOnly, setShowFreeOnly] = useState(false)
  const [reports, setReports] = useState(allReports)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [isFiltering, setIsFiltering] = useState(false)

  // Apply filters when any filter state changes
  useEffect(() => {
    let filteredReports = [...allReports]
    const currentActiveFilters: string[] = []

    // Apply search filter
    if (searchQuery) {
      filteredReports = filteredReports.filter(
        (report) =>
          report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          report.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          report.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
      currentActiveFilters.push(`Search: "${searchQuery}"`)
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      filteredReports = filteredReports.filter((report) => selectedCategories.includes(report.category))
      currentActiveFilters.push(`Categories: ${selectedCategories.length}`)
    }

    // Apply date filter
    if (selectedDates.length > 0) {
      filteredReports = filteredReports.filter((report) => selectedDates.includes(report.date))
      currentActiveFilters.push(`Dates: ${selectedDates.length}`)
    }

    // Apply price range filter
    if (selectedPriceRanges.length > 0) {
      filteredReports = filteredReports.filter((report) => {
        return selectedPriceRanges.some((rangeLabel) => {
          const range = priceRanges.find((r) => r.label === rangeLabel)
          if (!range) return false
          return report.price >= range.min && report.price <= range.max
        })
      })
      currentActiveFilters.push(`Price: ${selectedPriceRanges.length}`)
    }

    // Apply premium/free filters
    if (showPremiumOnly) {
      filteredReports = filteredReports.filter((report) => report.isPremium)
      currentActiveFilters.push("Premium Only")
    }

    if (showFreeOnly) {
      filteredReports = filteredReports.filter((report) => !report.isPremium)
      currentActiveFilters.push("Free Only")
    }

    setReports(filteredReports)
    setActiveFilters(currentActiveFilters)
    setIsFiltering(currentActiveFilters.length > 0)
  }, [searchQuery, selectedCategories, selectedDates, selectedPriceRanges, showPremiumOnly, showFreeOnly])

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setSelectedDates([])
    setSelectedPriceRanges([])
    setShowPremiumOnly(false)
    setShowFreeOnly(false)
    setActiveFilters([])
    setIsFiltering(false)
  }

  // Remove a specific filter
  const removeFilter = (filter: string) => {
    if (filter.startsWith("Search:")) {
      setSearchQuery("")
    } else if (filter.startsWith("Categories:")) {
      setSelectedCategories([])
    } else if (filter.startsWith("Dates:")) {
      setSelectedDates([])
    } else if (filter.startsWith("Price:")) {
      setSelectedPriceRanges([])
    } else if (filter === "Premium Only") {
      setShowPremiumOnly(false)
    } else if (filter === "Free Only") {
      setShowFreeOnly(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Business Reports</h1>
                  <p className="max-w-[600px] text-slate-500 dark:text-slate-400 md:text-xl">
                    Practical, data-driven reports that provide actionable insights for your business strategy,
                    marketing initiatives, and operational improvements.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#featured-reports">
                      Browse Reports
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/resources">All Resources</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=800"
                width={800}
                height={550}
                alt="Business reports collection"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Featured Reports Section */}
        <section className="w-full py-12 md:py-24 lg:py-32" id="featured-reports">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium">
                  Report Collection
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Strategy-Focused Business Reports
                </h2>
                <p className="max-w-[900px] text-slate-500 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our reports combine industry expertise with data analytics to help you make informed decisions and
                  implement effective strategies for your business challenges.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-1/2 lg:w-1/3">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500 dark:text-slate-400" />
                <Input
                  type="search"
                  placeholder="Search reports..."
                  className="w-full pl-8 rounded-md"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Filter className="h-4 w-4" />
                      Filter
                      {isFiltering && (
                        <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center">
                          {activeFilters.length}
                        </Badge>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Filters</h3>
                        <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 px-2 text-xs">
                          Reset all
                        </Button>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Type</h4>
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="premium-only"
                              checked={showPremiumOnly}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setShowPremiumOnly(true)
                                  setShowFreeOnly(false)
                                } else {
                                  setShowPremiumOnly(false)
                                }
                              }}
                            />
                            <Label htmlFor="premium-only">Premium reports only</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="free-only"
                              checked={showFreeOnly}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setShowFreeOnly(true)
                                  setShowPremiumOnly(false)
                                } else {
                                  setShowFreeOnly(false)
                                }
                              }}
                            />
                            <Label htmlFor="free-only">Free reports only</Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Price Range</h4>
                        <RadioGroup
                          value={selectedPriceRanges.length === 1 ? selectedPriceRanges[0] : ""}
                          onValueChange={(value) => {
                            if (value) {
                              setSelectedPriceRanges([value])
                            } else {
                              setSelectedPriceRanges([])
                            }
                          }}
                        >
                          {priceRanges.map((range) => (
                            <div key={range.label} className="flex items-center space-x-2">
                              <RadioGroupItem value={range.label} id={`price-${range.label}`} />
                              <Label htmlFor={`price-${range.label}`}>{range.label}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="whitespace-nowrap">
                      <Tag className="h-3 w-3 mr-1" />
                      Category
                      {selectedCategories.length > 0 && (
                        <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center">
                          {selectedCategories.length}
                        </Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    {allCategories.map((category) => (
                      <DropdownMenuCheckboxItem
                        key={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCategories([...selectedCategories, category])
                          } else {
                            setSelectedCategories(selectedCategories.filter((c) => c !== category))
                          }
                        }}
                      >
                        {category}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="whitespace-nowrap">
                      Date
                      {selectedDates.length > 0 && (
                        <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center">
                          {selectedDates.length}
                        </Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    {allDates.map((date) => (
                      <DropdownMenuCheckboxItem
                        key={date}
                        checked={selectedDates.includes(date)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedDates([...selectedDates, date])
                          } else {
                            setSelectedDates(selectedDates.filter((d) => d !== date))
                          }
                        }}
                      >
                        {date}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Active filters */}
            {isFiltering && (
              <div className="mt-4 flex flex-wrap gap-2">
                {activeFilters.map((filter) => (
                  <Badge key={filter} variant="outline" className="flex items-center gap-1 px-2 py-1">
                    {filter}
                    <button
                      onClick={() => removeFilter(filter)}
                      className="ml-1 rounded-full hover:bg-slate-100 p-0.5"
                      aria-label={`Remove ${filter} filter`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                <Button variant="ghost" size="sm" onClick={resetFilters} className="h-7 px-2 text-xs">
                  Clear all
                </Button>
              </div>
            )}

            {/* Results count */}
            <div className="mt-4 text-sm text-slate-500">
              Showing {reports.length} {reports.length === 1 ? "report" : "reports"}
              {isFiltering ? " with selected filters" : ""}
            </div>

            {/* Reports grid */}
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reports.length > 0 ? (
                reports.map((report) => (
                  <Card key={report.id} className="h-full flex flex-col">
                    <CardHeader className="p-0">
                      <div className="relative">
                        <Image
                          src={report.image || "/placeholder.svg"}
                          width={600}
                          height={400}
                          alt={report.title}
                          className="aspect-[4/3] w-full rounded-t-lg object-cover"
                        />
                        {report.isPremium && (
                          <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-medium py-1 px-2 rounded">
                            Premium
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {report.category}
                        </Badge>
                        <span className="text-xs text-slate-500">{report.date}</span>
                      </div>
                      <CardTitle className="line-clamp-2 mb-2">
                        <Link href={`/resources/reports/${report.id}`} className="hover:underline">
                          {report.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3">{report.description}</CardDescription>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {report.tags.map((tag, i) => (
                          <span key={i} className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      {report.isPremium ? (
                        <Button className="w-full" asChild>
                          <Link href={`/resources/reports/${report.id}/purchase`}>Purchase for ${report.price}</Link>
                        </Button>
                      ) : (
                        <Button variant="outline" className="w-full" asChild>
                          <Link href={`/resources/reports/${report.id}`}>
                            <Download className="mr-2 h-4 w-4" />
                            Download Free Report
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full py-12 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
                    <Search className="h-10 w-10 text-slate-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">No reports found</h3>
                  <p className="mt-2 text-sm text-slate-500">Try adjusting your search or filter criteria</p>
                  <Button onClick={resetFilters} className="mt-4">
                    Reset filters
                  </Button>
                </div>
              )}
            </div>

            {reports.length > 6 && (
              <div className="mt-12 text-center">
                <Button variant="outline">Load More Reports</Button>
              </div>
            )}
          </div>
        </section>

        {/* Report Categories Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  width={700}
                  height={500}
                  alt="Report categories showcase"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="space-y-4 flex flex-col justify-center">
                <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium">
                  Report Categories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Specialized Reports for Every Business Need
                </h2>
                <p className="text-slate-500 dark:text-slate-400 md:text-lg">
                  Our reports cover a wide range of business topics, each designed to address specific challenges and
                  opportunities.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M3 3v18h18" />
                        <path d="m19 9-5 5-4-4-3 3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Market Analysis</h3>
                      <p className="text-sm text-slate-500">Industry trends and competitive landscape</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M12 2v20" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Financial Strategy</h3>
                      <p className="text-sm text-slate-500">Funding, investment, and financial planning</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Operational Excellence</h3>
                      <p className="text-sm text-slate-500">Process optimization and efficiency</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Digital Marketing</h3>
                      <p className="text-sm text-slate-500">Channel strategies and ROI optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Access Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm">Premium Access</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Subscribe for Complete Access</h2>
                <p className="text-slate-500 dark:text-slate-400 md:text-lg">
                  Get unlimited access to our complete library of business reports, plus exclusive content and tools
                  with a premium subscription.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Unlimited access to all premium reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Access to editable templates and frameworks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Monthly strategy briefings and trend insights</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/premium">
                      View Subscription Plans
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/resources/reports/sample">View Sample Report</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Premium subscription benefits"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
