import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, CreditCard, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

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
  },
  // Other reports data...
]

// Function to find a report by ID
function getReportById(id: string) {
  return reports.find((report) => report.id === id)
}

export default function ReportPurchasePage({ params }: { params: { id: string } }) {
  const report = getReportById(params.id)

  // If report not found or not premium, we could redirect
  if (!report || !report.isPremium) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Report not available for purchase</h1>
        <p className="mt-4">This report doesn't exist or is not available for purchase.</p>
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

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold mb-6">Purchase Report</h1>

              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="relative w-20 h-20 overflow-hidden rounded-md">
                      <Image
                        src={report.image || "/placeholder.svg"}
                        alt={report.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 mb-2">
                      {report.category}
                    </Badge>
                    <h2 className="text-xl font-semibold mb-1">{report.title}</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Published: {report.date}</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h3 className="text-lg font-semibold mb-4">Payment Information</h3>

                {/* This would be replaced with a real payment form in a production app */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="cardName" className="text-sm font-medium">
                        Name on Card
                      </label>
                      <input
                        id="cardName"
                        type="text"
                        placeholder="John Smith"
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="cardNumber" className="text-sm font-medium">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          id="cardNumber"
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full p-2 pl-10 border rounded-md"
                        />
                        <CreditCard className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="expMonth" className="text-sm font-medium">
                        Expiry Month
                      </label>
                      <select id="expMonth" className="w-full p-2 border rounded-md">
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                          <option key={month} value={month}>
                            {month.toString().padStart(2, "0")}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="expYear" className="text-sm font-medium">
                        Expiry Year
                      </label>
                      <select id="expYear" className="w-full p-2 border rounded-md">
                        {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="cvc" className="text-sm font-medium">
                        CVC
                      </label>
                      <input
                        id="cvc"
                        type="text"
                        placeholder="123"
                        className="w-full p-2 border rounded-md"
                        maxLength={4}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <Shield className="h-4 w-4 mr-2 text-green-600" />
                  Your payment information is encrypted and secure
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Billing Information</h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <input id="firstName" type="text" placeholder="John" className="w-full p-2 border rounded-md" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <input id="lastName" type="text" placeholder="Smith" className="w-full p-2 border rounded-md" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name (Optional)
                    </label>
                    <input id="company" type="text" placeholder="Acme Inc." className="w-full p-2 border rounded-md" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 sticky top-8">
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Report Price</span>
                    <span>${report.price.toFixed(2)}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${report.price.toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full mt-6" size="lg">
                  Complete Purchase
                </Button>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Instant access after purchase</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">PDF, Excel, and PowerPoint formats</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Access on all your devices</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">30-day money-back guarantee</span>
                  </div>
                </div>

                <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
                  Need help?{" "}
                  <Link href="/contact" className="text-blue-600 hover:underline">
                    Contact support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
