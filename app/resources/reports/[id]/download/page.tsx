import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, FileText, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample reports data - in a real application, this would come from a database or API
const reports = [
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
    fileSize: "4.2 MB",
    fileFormat: "PDF",
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
    fileSize: "5.8 MB",
    fileFormat: "PDF + Excel",
  },
]

// Function to find a report by ID
function getReportById(id: string) {
  return reports.find((report) => report.id === id)
}

export default function ReportDownloadPage({ params }: { params: { id: string } }) {
  const report = getReportById(params.id)

  // If report not found or is premium, we could redirect
  if (!report || report.isPremium) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Report not available for download</h1>
        <p className="mt-4">This report doesn't exist or is not available for free download.</p>
        <Button asChild className="mt-6">
          <Link href="/resources/reports">Back to Reports</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Link
            href={`/resources/reports/${report.id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Report Details
          </Link>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 text-center">
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200 hover:bg-green-200">
                Free Report
              </Badge>

              <h1 className="text-2xl md:text-3xl font-bold mb-4">{report.title}</h1>

              <div className="relative w-full max-w-md mx-auto aspect-[4/3] mb-8">
                <Image
                  src={report.image || "/placeholder.svg"}
                  alt={report.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="flex justify-center items-center gap-4 mb-8 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>{report.fileFormat}</span>
                </div>
                <div>•</div>
                <div>{report.fileSize}</div>
                <div>•</div>
                <div>Published: {report.date}</div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
                Thank you for your interest in our report. Click the button below to download your free copy of{" "}
                {report.title}.
              </p>

              <Button size="lg" className="mb-6" asChild>
                <a href="#" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Report
                </a>
              </Button>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                By downloading, you agree to our{" "}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  terms of use
                </Link>
                .
              </p>
            </div>

            <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Share this report with your colleagues</h2>

              <div className="flex flex-wrap gap-3 justify-center">
                <Button variant="outline" size="sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  Facebook
                </Button>

                <Button variant="outline" size="sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  Twitter
                </Button>

                <Button variant="outline" size="sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </Button>

                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Copy Link
                </Button>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-4">You might also be interested in</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="h-full flex flex-col">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Related report"
                      className="aspect-[4/3] w-full rounded-t-lg object-cover"
                    />
                  </div>
                  <CardContent className="flex-1 p-6">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 mb-2">
                      Marketing
                    </Badge>
                    <h3 className="text-lg font-semibold mb-2">
                      <Link href="/resources/reports/marketing-trends-2023" className="hover:underline">
                        Marketing Trends: What's Working in 2023
                      </Link>
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      Data-backed insights on the most effective marketing channels, strategies, and tactics.
                    </p>
                    <Button variant="outline" size="sm" className="mt-auto" asChild>
                      <Link href="/resources/reports/marketing-trends-2023">View Report</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="h-full flex flex-col">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Related report"
                      className="aspect-[4/3] w-full rounded-t-lg object-cover"
                    />
                  </div>
                  <CardContent className="flex-1 p-6">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 mb-2">
                      Technology
                    </Badge>
                    <h3 className="text-lg font-semibold mb-2">
                      <Link href="/resources/reports/digital-transformation-case-studies" className="hover:underline">
                        Digital Transformation: 10 Success Stories
                      </Link>
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      In-depth case studies of successful digital transformation initiatives across different
                      industries.
                    </p>
                    <Button variant="outline" size="sm" className="mt-auto" asChild>
                      <Link href="/resources/reports/digital-transformation-case-studies">View Report</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
