import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection, AnimatedElement } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"

// Sample research reports data
const researchReports = [
  {
    id: "global-economic-outlook-2023",
    title: "2023 Global Economic Outlook: Navigating Uncertainty",
    description:
      "A comprehensive analysis of global economic trends, challenges, and opportunities for businesses in the coming year.",
    category: "Economics",
    date: "June 2023",
    image: "/placeholder.svg?height=400&width=600",
    isPremium: true,
    price: 149,
  },
  {
    id: "future-of-work-remote-trends",
    title: "The Future of Work: Remote Work Trends and Implications",
    description:
      "An in-depth study on how remote work is reshaping organizational structures, productivity, and talent acquisition strategies.",
    category: "Workplace",
    date: "May 2023",
    image: "/placeholder.svg?height=400&width=600",
    isPremium: true,
    price: 129,
  },
  {
    id: "digital-transformation-financial-services",
    title: "Digital Transformation in Financial Services: 2023 Benchmark",
    description:
      "A comprehensive benchmark study of digital transformation initiatives across the financial services industry.",
    category: "Finance",
    date: "April 2023",
    image: "/placeholder.svg?height=400&width=600",
    isPremium: true,
    price: 199,
  },
  {
    id: "ai-business-applications",
    title: "AI in Business: Applications and Implementation Guide",
    description:
      "Practical guide to implementing AI solutions across different business functions with case studies and ROI analysis.",
    category: "Technology",
    date: "March 2023",
    image: "/placeholder.svg?height=400&width=600",
    isPremium: false,
    price: 0,
  },
  {
    id: "sustainable-business-practices",
    title: "Sustainable Business Practices: Competitive Advantage Through ESG",
    description:
      "Research on how environmental, social, and governance (ESG) initiatives create long-term business value and competitive advantage.",
    category: "Sustainability",
    date: "February 2023",
    image: "/placeholder.svg?height=400&width=600",
    isPremium: true,
    price: 149,
  },
  {
    id: "consumer-behavior-post-pandemic",
    title: "Consumer Behavior in the Post-Pandemic Era",
    description:
      "Analysis of shifting consumer preferences, spending patterns, and brand loyalty in the aftermath of global disruption.",
    category: "Marketing",
    date: "January 2023",
    image: "/placeholder.svg?height=400&width=600",
    isPremium: true,
    price: 129,
  },
]

export default function ResearchReportsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <AnimatedSection
          animation="fade-in"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-brand-50 to-white dark:from-background dark:to-muted/5"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-text">
                    Research Reports
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    In-depth analysis and data-driven insights on industry trends and market developments to inform your
                    strategic decisions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="hover-scale transition-all duration-300">
                    <Link href="#featured-reports">
                      Explore Reports
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="hover-scale transition-all duration-300">
                    <Link href="/premium">Premium Access</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=800"
                width={800}
                height={550}
                alt="Research reports illustration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" className="w-full py-12 md:py-24 lg:py-32" id="featured-reports">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-100 px-3 py-1 text-sm font-medium">
                  Research Collection
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-text">
                  Data-Driven Insights for Strategic Decisions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our research reports provide comprehensive analysis and actionable recommendations based on rigorous
                  methodology and expert insights.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-1/2 lg:w-1/3">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search reports..."
                  className="w-full bg-background pl-8 rounded-md border-border"
                />
              </div>
              <div className="flex items-center gap-2 w-full md:w-auto">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  Category
                </Button>
                <Button variant="outline" size="sm">
                  Date
                </Button>
                <Button variant="outline" size="sm">
                  Type
                </Button>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {researchReports.map((report) => (
                <AnimatedElement key={report.id} animation="slide-up" className="h-full">
                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
                    <CardHeader className="p-0">
                      <div className="relative">
                        <Image
                          src={report.image || "/placeholder.svg"}
                          width={600}
                          height={400}
                          alt={report.title}
                          className="aspect-[4/3] w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                        />
                        {report.isPremium && (
                          <div className="absolute top-2 right-2 bg-primary text-white text-xs font-medium py-1 px-2 rounded">
                            Premium
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {report.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{report.date}</span>
                      </div>
                      <CardTitle className="line-clamp-2 mb-2">
                        <Link href={`/resources/research-reports/${report.id}`} className="hover:underline">
                          {report.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3">{report.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      {report.isPremium ? (
                        <Button className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href={`/resources/research-reports/${report.id}/purchase`}>
                            Purchase for ${report.price}
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="outline" className="w-full hover-scale transition-all duration-300" asChild>
                          <Link href={`/resources/research-reports/${report.id}`}>
                            <Download className="mr-2 h-4 w-4" />
                            Download Free Report
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </AnimatedElement>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" className="hover-scale transition-all duration-300">
                Load More Reports
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay="delay-200" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Research Methodology</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Our research reports are created using a rigorous methodology that combines quantitative data analysis,
                qualitative insights, and expert validation.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
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
                    className="h-6 w-6"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M8 13h2" />
                    <path d="M8 17h2" />
                    <path d="M14 13h2" />
                    <path d="M14 17h2" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium">Data Collection</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Comprehensive gathering of primary and secondary data from diverse and reliable sources.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
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
                    className="h-6 w-6"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium">Analysis</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Rigorous statistical analysis and pattern identification to extract meaningful insights.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
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
                    className="h-6 w-6"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium">Expert Validation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Review and validation by industry experts and academic professionals to ensure accuracy.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
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
                    className="h-6 w-6"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium">Actionable Insights</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Transformation of findings into practical recommendations and strategic guidance.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay="delay-300" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Premium Access</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl gradient-text">
                  Subscribe for Unlimited Access
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Get unlimited access to all our research reports with a premium subscription. Save significantly
                  compared to purchasing individual reports.
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
                      className="h-5 w-5 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Unlimited access to all premium research reports</span>
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
                      className="h-5 w-5 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Early access to new reports before public release</span>
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
                      className="h-5 w-5 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Quarterly executive summaries of key industry trends</span>
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
                      className="h-5 w-5 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Access to research analysts for questions</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="hover-scale transition-all duration-300">
                    <Link href="/premium">
                      View Subscription Plans
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Premium subscription"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <SiteFooter />
    </div>
  )
}
