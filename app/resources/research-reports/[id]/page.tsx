import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, FileText, Share2, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

// This would typically come from a database or API
const getReportById = (id: string) => {
  const reports = {
    "global-economic-outlook-2023": {
      id: "global-economic-outlook-2023",
      title: "2023 Global Economic Outlook: Navigating Uncertainty",
      description:
        "A comprehensive analysis of global economic trends, challenges, and opportunities for businesses in the coming year.",
      fullDescription: `
        <p>The global economy continues to face unprecedented challenges in 2023, from persistent inflation and rising interest rates to geopolitical tensions and supply chain disruptions. This comprehensive report provides business leaders with a detailed analysis of the current economic landscape and forecasts for key regions and sectors.</p>
        
        <p>Our team of economists and industry experts have analyzed extensive data sets, conducted interviews with business leaders, and synthesized insights to provide you with actionable intelligence for strategic planning.</p>
        
        <h3>Key Insights:</h3>
        <ul>
          <li>Regional economic forecasts for North America, Europe, Asia-Pacific, and emerging markets</li>
          <li>Sector-specific analysis covering technology, manufacturing, financial services, healthcare, and consumer goods</li>
          <li>Impact assessment of monetary policies on business financing and investment</li>
          <li>Strategic recommendations for navigating economic headwinds while capitalizing on emerging opportunities</li>
          <li>Risk analysis framework for scenario planning and resilience building</li>
        </ul>
        
        <p>This report is essential reading for C-suite executives, strategic planners, investment professionals, and business leaders seeking to make informed decisions in an uncertain economic environment.</p>
      `,
      category: "Economics",
      date: "June 2023",
      image: "/placeholder.svg?height=600&width=1200",
      author: "Dr. Sarah Chen, Chief Economist",
      pages: 87,
      format: "PDF, EPUB, MOBI",
      isPremium: true,
      price: 149,
      tableOfContents: [
        "Executive Summary",
        "Global Economic Indicators",
        "Regional Analysis",
        "Sector Outlook",
        "Monetary Policy Impact",
        "Supply Chain Evolution",
        "Labor Market Trends",
        "Strategic Recommendations",
        "Risk Assessment Framework",
        "Appendix: Data Tables",
      ],
      relatedReports: [
        {
          id: "future-of-work-remote-trends",
          title: "The Future of Work: Remote Work Trends and Implications",
          category: "Workplace",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          id: "digital-transformation-financial-services",
          title: "Digital Transformation in Financial Services: 2023 Benchmark",
          category: "Finance",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    "future-of-work-remote-trends": {
      id: "future-of-work-remote-trends",
      title: "The Future of Work: Remote Work Trends and Implications",
      description:
        "An in-depth study on how remote work is reshaping organizational structures, productivity, and talent acquisition strategies.",
      fullDescription: `
        <p>The pandemic-accelerated shift to remote work has fundamentally changed how organizations operate. This comprehensive report examines the lasting impact of remote and hybrid work models on business operations, employee productivity, organizational culture, and talent strategies.</p>
        
        <p>Based on surveys of over 5,000 employees and 500 business leaders across industries, combined with expert analysis, this report provides actionable insights for adapting to the evolving workplace landscape.</p>
        
        <h3>Key Insights:</h3>
        <ul>
          <li>Productivity analysis comparing in-office, remote, and hybrid work models across different job functions</li>
          <li>Best practices for managing distributed teams and maintaining organizational cohesion</li>
          <li>Technology infrastructure requirements for supporting effective remote collaboration</li>
          <li>Impact on real estate strategies and office space utilization</li>
          <li>Emerging trends in talent acquisition and retention in a location-flexible environment</li>
        </ul>
        
        <p>This report is essential for HR leaders, operations executives, facility managers, and organizational strategists planning for the future of work.</p>
      `,
      category: "Workplace",
      date: "May 2023",
      image: "/placeholder.svg?height=600&width=1200",
      author: "Jennifer Martinez, Workplace Strategy Consultant",
      pages: 64,
      format: "PDF, EPUB, MOBI",
      isPremium: true,
      price: 129,
      tableOfContents: [
        "Executive Summary",
        "Remote Work Adoption Trends",
        "Productivity Analysis",
        "Organizational Culture Impact",
        "Technology Infrastructure",
        "Real Estate Implications",
        "Talent Acquisition Strategies",
        "Legal and Compliance Considerations",
        "Future Scenarios",
        "Implementation Roadmap",
      ],
      relatedReports: [
        {
          id: "global-economic-outlook-2023",
          title: "2023 Global Economic Outlook: Navigating Uncertainty",
          category: "Economics",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          id: "ai-business-applications",
          title: "AI in Business: Applications and Implementation Guide",
          category: "Technology",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    // Add more reports as needed
  }

  return reports[id as keyof typeof reports]
}

export default function ResearchReportPage({ params }: { params: { id: string } }) {
  const report = getReportById(params.id)

  if (!report) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 container py-12">
          <h1 className="text-2xl font-bold">Report not found</h1>
          <p className="mt-4">The research report you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="mt-6">
            <Link href="/resources/research-reports">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Research Reports
            </Link>
          </Button>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <AnimatedSection animation="fade-in" className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-2 mb-8">
              <Link
                href="/resources/research-reports"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Research Reports
              </Link>

              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {report.category}
                </Badge>
                <span className="text-sm text-muted-foreground">{report.date}</span>
                {report.isPremium && (
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    Premium
                  </Badge>
                )}
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text mb-6">
                  {report.title}
                </h1>

                <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
                  <Image
                    src={report.image || "/placeholder.svg"}
                    alt={report.title}
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-xl text-muted-foreground mb-6">{report.description}</p>
                  <div dangerouslySetInnerHTML={{ __html: report.fullDescription }} />
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Table of Contents</h3>
                  <ol className="list-decimal pl-5 space-y-1">
                    {report.tableOfContents.map((item, index) => (
                      <li key={index} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    {report.isPremium ? (
                      <div className="space-y-4">
                        <div className="text-3xl font-bold">${report.price}</div>
                        <p className="text-sm text-muted-foreground">
                          One-time purchase with lifetime access to this report
                        </p>
                        <Button className="w-full hover-scale transition-all duration-300" size="lg" asChild>
                          <Link href={`/resources/research-reports/${report.id}/purchase`}>
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Purchase Report
                          </Link>
                        </Button>
                        <div className="flex items-center justify-between mt-4">
                          <Button variant="outline" size="sm" className="w-[48%]">
                            <FileText className="mr-2 h-4 w-4" />
                            Preview
                          </Button>
                          <Button variant="outline" size="sm" className="w-[48%]">
                            <Share2 className="mr-2 h-4 w-4" />
                            Share
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="text-2xl font-bold text-green-600">Free Report</div>
                        <p className="text-sm text-muted-foreground">This report is available for free download</p>
                        <Button className="w-full hover-scale transition-all duration-300" size="lg" asChild>
                          <Link href={`/resources/research-reports/${report.id}/download`}>
                            <Download className="mr-2 h-4 w-4" />
                            Download Report
                          </Link>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Report Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Author</span>
                      <span className="font-medium">{report.author}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pages</span>
                      <span className="font-medium">{report.pages}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Format</span>
                      <span className="font-medium">{report.format}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Published</span>
                      <span className="font-medium">{report.date}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Related Reports</h3>
                  <div className="space-y-4">
                    {report.relatedReports.map((related) => (
                      <Link
                        key={related.id}
                        href={`/resources/research-reports/${related.id}`}
                        className="flex gap-3 group hover:bg-muted p-2 rounded-lg transition-colors"
                      >
                        <Image
                          src={related.image || "/placeholder.svg"}
                          width={80}
                          height={60}
                          alt={related.title}
                          className="rounded-md object-cover w-20 h-16"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                          <span className="text-xs text-muted-foreground">{related.category}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <SiteFooter />
    </div>
  )
}
