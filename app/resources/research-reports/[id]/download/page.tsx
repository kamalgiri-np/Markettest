import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"

// This would typically come from a database or API
const getReportById = (id: string) => {
  const reports = {
    "ai-business-applications": {
      id: "ai-business-applications",
      title: "AI in Business: Applications and Implementation Guide",
      description:
        "Practical guide to implementing AI solutions across different business functions with case studies and ROI analysis.",
      category: "Technology",
      date: "March 2023",
      image: "/placeholder.svg?height=400&width=600",
      formats: [
        { name: "PDF", size: "4.2 MB", icon: "pdf" },
        { name: "EPUB", size: "2.8 MB", icon: "epub" },
        { name: "MOBI", size: "3.1 MB", icon: "mobi" },
      ],
    },
    // Add more free reports as needed
  }

  return reports[id as keyof typeof reports]
}

export default function DownloadReportPage({ params }: { params: { id: string } }) {
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
          <div className="container px-4 md:px-6 max-w-3xl">
            <div className="flex flex-col gap-2 mb-8">
              <Link
                href={`/resources/research-reports/${report.id}`}
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Report Details
              </Link>
            </div>

            <Card className="mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Download Report</CardTitle>
                <CardDescription>Select your preferred format to download the report</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={report.image || "/placeholder.svg"}
                    width={120}
                    height={80}
                    alt={report.title}
                    className="rounded-md object-cover w-28 h-20"
                  />
                  <div>
                    <h3 className="font-medium text-lg">{report.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {report.category} • {report.date}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {report.formats.map((format) => (
                    <div
                      key={format.name}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">{format.name} Format</h4>
                          <p className="text-xs text-muted-foreground">{format.size}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="hover-scale transition-all duration-300">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground text-center">
                  By downloading this report, you agree to our{" "}
                  <Link href="/terms" className="underline hover:text-primary">
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="underline hover:text-primary">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </CardFooter>
            </Card>

            <div className="mt-12 text-center">
              <h3 className="text-lg font-medium mb-4">Looking for more research?</h3>
              <Button asChild>
                <Link href="/resources/research-reports">Browse All Reports</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <SiteFooter />
    </div>
  )
}
