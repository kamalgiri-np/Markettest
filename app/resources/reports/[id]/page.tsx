import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Download, FileText, Share2, Tag, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Sample reports data - in a real application, this would come from a database or API
const reports = [
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
    author: "Dr. Sarah Johnson",
    pages: 42,
    tableOfContents: [
      "Executive Summary",
      "Market Overview",
      "Growth Sectors Analysis",
      "Emerging Players",
      "Strategic Opportunities",
      "Risk Assessment",
      "Future Outlook",
      "Recommendations",
    ],
    keyFindings: [
      "AI and machine learning sectors grew by 34% in 2023",
      "Remote collaboration tools saw continued adoption with 28% YoY growth",
      "Cybersecurity spending increased by 47% across all industries",
      "Edge computing solutions are becoming mainstream with 56% of enterprises implementing some form of edge strategy",
    ],
    relatedReports: ["marketing-trends-2023", "digital-transformation-case-studies"],
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
    author: "Michael Chen",
    pages: 38,
    tableOfContents: [
      "Executive Summary",
      "Research Methodology",
      "Channel Performance Analysis",
      "Content Marketing Effectiveness",
      "Social Media Trends",
      "Email Marketing Insights",
      "Budget Allocation Strategies",
      "Case Studies",
    ],
    keyFindings: [
      "Video content delivers 43% higher engagement than static content",
      "Email marketing remains the highest ROI channel at $42 per $1 spent",
      "TikTok emerged as the fastest-growing platform for B2C marketing",
      "Personalization increased conversion rates by an average of 29%",
    ],
    relatedReports: ["content-marketing-roi", "industry-analysis-2023"],
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
    author: "Dr. Amanda Rodriguez",
    pages: 35,
    tableOfContents: [
      "Executive Summary",
      "Research Methodology",
      "Productivity Metrics Comparison",
      "Communication Effectiveness",
      "Work-Life Balance Impact",
      "Technology Enablement",
      "Management Strategies",
      "Recommendations by Company Size",
    ],
    keyFindings: [
      "Hybrid teams reported 22% higher satisfaction scores than fully remote or fully in-office teams",
      "Asynchronous communication tools increased productivity by 31% in distributed teams",
      "Companies with clear remote work policies saw 47% lower turnover rates",
      "Structured check-ins improved project completion rates by 28%",
    ],
    relatedReports: ["digital-transformation-case-studies", "content-marketing-roi"],
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
    author: "Alex Thompson",
    pages: 56,
    tableOfContents: [
      "Executive Summary",
      "Funding Stages Overview",
      "Seed Funding Strategies",
      "Series A Preparation",
      "Series B Growth Tactics",
      "Series C and Beyond",
      "Valuation Methodologies",
      "Term Sheet Negotiation",
      "Alternative Funding Options",
    ],
    keyFindings: [
      "Startups with technical founders secured 31% more funding on average",
      "Clear unit economics documentation increased funding success rates by 47%",
      "Strategic investors provided 2.3x more value beyond capital compared to financial investors",
      "Convertible notes were used in 68% of seed rounds in 2023",
    ],
    relatedReports: ["industry-analysis-2023", "digital-transformation-case-studies"],
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
    author: "Dr. Robert Kim",
    pages: 48,
    tableOfContents: [
      "Executive Summary",
      "Transformation Framework",
      "Healthcare Case Study",
      "Manufacturing Case Study",
      "Financial Services Case Study",
      "Retail Case Study",
      "Education Case Study",
      "Common Success Factors",
      "Implementation Roadmap",
    ],
    keyFindings: [
      "Organizations with executive-level digital champions were 3.2x more likely to succeed",
      "Phased implementation approaches had 76% higher success rates than big-bang approaches",
      "Employee training programs were critical in 92% of successful transformations",
      "Data integration was cited as the biggest technical challenge in 78% of cases",
    ],
    relatedReports: ["industry-analysis-2023", "remote-work-productivity"],
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
    author: "Jennifer Williams",
    pages: 32,
    tableOfContents: [
      "Executive Summary",
      "ROI Calculation Methodology",
      "Benchmark Data by Industry",
      "Content Type Performance Analysis",
      "Distribution Channel Effectiveness",
      "Conversion Optimization Strategies",
      "ROI Calculator Tool Guide",
      "Implementation Recommendations",
    ],
    keyFindings: [
      "Long-form content (>2000 words) generated 41% more leads than short-form content",
      "Video content had the highest production cost but also the highest engagement metrics",
      "Email newsletters delivered the most consistent ROI across all industries",
      "Content repurposing strategies increased content ROI by an average of 35%",
    ],
    relatedReports: ["marketing-trends-2023", "remote-work-productivity"],
  },
]

// Function to find a report by ID
function getReportById(id: string) {
  return reports.find((report) => report.id === id)
}

// Function to get related reports
function getRelatedReports(ids: string[]) {
  return reports.filter((report) => ids.includes(report.id))
}

export default function ReportDetailPage({ params }: { params: { id: string } }) {
  const report = getReportById(params.id)

  // If report not found, we could redirect or show a not found page
  if (!report) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Report not found</h1>
        <p className="mt-4">The report you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="mt-6">
          <Link href="/resources/reports">Back to Reports</Link>
        </Button>
      </div>
    )
  }

  const relatedReports = report.relatedReports ? getRelatedReports(report.relatedReports) : []

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="bg-slate-50 dark:bg-slate-900 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
              <Link href="/resources" className="hover:text-slate-900 dark:hover:text-slate-100">
                Resources
              </Link>
              <span className="mx-2">/</span>
              <Link href="/resources/reports" className="hover:text-slate-900 dark:hover:text-slate-100">
                Reports
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-900 dark:text-slate-100">{report.title}</span>
            </div>
          </div>
        </div>

        {/* Report Hero Section */}
        <section className="bg-white dark:bg-slate-950 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="md:w-2/3">
                <Link
                  href="/resources/reports"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Reports
                </Link>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {report.category}
                  </Badge>
                  {report.isPremium && <Badge className="bg-blue-600 hover:bg-blue-700">Premium</Badge>}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">{report.title}</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">{report.description}</p>
                <div className="flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-400 mb-8">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{report.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>By {report.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>{report.pages} pages</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {report.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                    >
                      <Tag className="h-3 w-3 inline mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  {report.isPremium ? (
                    <>
                      <Button size="lg" asChild>
                        <Link href={`/resources/reports/${report.id}/purchase`}>Purchase for ${report.price}</Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <Link href={`/resources/reports/${report.id}/preview`}>Preview Report</Link>
                      </Button>
                    </>
                  ) : (
                    <Button size="lg" asChild>
                      <Link href={`/resources/reports/${report.id}/download`}>
                        <Download className="mr-2 h-5 w-5" />
                        Download Free Report
                      </Link>
                    </Button>
                  )}
                  <Button variant="outline" size="lg">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={report.image || "/placeholder.svg"}
                    alt={report.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Report Content Preview */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="sticky top-8">
                  <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
                  <ul className="space-y-2">
                    {report.tableOfContents.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs mr-2">
                          {index + 1}
                        </span>
                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Key Findings</h2>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 mb-8">
                  <ul className="space-y-4">
                    {report.keyFindings.map((finding, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                          {index + 1}
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">{finding}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6">Executive Summary</h2>
                <div className="prose dark:prose-invert max-w-none mb-8">
                  <p>
                    This report provides a comprehensive analysis of {report.title.toLowerCase()}. Our research team has
                    conducted extensive analysis of market data, industry trends, and expert interviews to deliver
                    actionable insights for business leaders and decision-makers.
                  </p>
                  <p className="mt-4">
                    The findings in this report are based on data collected from over 500 companies across multiple
                    industries, providing a robust foundation for the conclusions and recommendations presented.
                  </p>
                  <p className="mt-4">
                    {report.isPremium
                      ? "Purchase the full report to access all insights, data visualizations, and implementation frameworks."
                      : "Download the full report to access all insights, data visualizations, and implementation frameworks."}
                  </p>
                </div>

                {report.isPremium && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                      What's included in the full report:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
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
                          className="h-5 w-5 text-blue-600 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Complete data analysis and visualizations</span>
                      </li>
                      <li className="flex items-center">
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
                          className="h-5 w-5 text-blue-600 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Detailed case studies and examples</span>
                      </li>
                      <li className="flex items-center">
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
                          className="h-5 w-5 text-blue-600 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Implementation frameworks and templates</span>
                      </li>
                      <li className="flex items-center">
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
                          className="h-5 w-5 text-blue-600 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Expert recommendations and action plans</span>
                      </li>
                    </ul>
                    <Button className="mt-4 w-full sm:w-auto" asChild>
                      <Link href={`/resources/reports/${report.id}/purchase`}>Purchase for ${report.price}</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related Reports Section */}
        {relatedReports.length > 0 && (
          <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">Related Reports</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedReports.map((relatedReport) => (
                  <Card key={relatedReport.id} className="h-full flex flex-col">
                    <div className="relative">
                      <Image
                        src={relatedReport.image || "/placeholder.svg"}
                        width={600}
                        height={400}
                        alt={relatedReport.title}
                        className="aspect-[4/3] w-full rounded-t-lg object-cover"
                      />
                      {relatedReport.isPremium && (
                        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-medium py-1 px-2 rounded">
                          Premium
                        </div>
                      )}
                    </div>
                    <CardContent className="flex-1 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {relatedReport.category}
                        </Badge>
                        <span className="text-xs text-slate-500">{relatedReport.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        <Link href={`/resources/reports/${relatedReport.id}`} className="hover:underline">
                          {relatedReport.title}
                        </Link>
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">
                        {relatedReport.description}
                      </p>
                      <Button variant="outline" size="sm" className="mt-auto" asChild>
                        <Link href={`/resources/reports/${relatedReport.id}`}>View Report</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Need more specialized insights for your business?
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Our team of industry experts can create custom reports tailored to your specific business challenges
                  and opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/contact">Request Custom Report</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/resources/reports">Browse All Reports</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
