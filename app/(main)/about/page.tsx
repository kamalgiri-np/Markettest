import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
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
            <span className="text-xl font-bold">InsightfulGrowth</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/category/economics" className="text-sm font-medium hover:text-primary">
              Economics
            </Link>
            <Link href="/category/leadership" className="text-sm font-medium hover:text-primary">
              Leadership
            </Link>
            <Link href="/category/career" className="text-sm font-medium hover:text-primary">
              Career Development
            </Link>
            <Link href="/about" className="text-sm font-medium text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Subscribe
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
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
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    About InsightfulGrowth
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Empowering professionals with knowledge and insights to excel in today's dynamic business landscape.
                  </p>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=800"
                width={800}
                height={550}
                alt="Team working together"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Mission</h2>
              <p className="text-muted-foreground md:text-xl">
                At InsightfulGrowth, we believe that access to high-quality, actionable information is the foundation of
                professional success. Our mission is to provide professionals at all career stages with the knowledge,
                tools, and perspectives they need to make informed decisions, develop their skills, and advance their
                careers.
              </p>
              <p className="text-muted-foreground md:text-xl">
                Through rigorous analysis, expert insights, and practical advice, we aim to be a trusted resource for
                those navigating the complexities of today's business environment. We are committed to delivering
                content that is not only informative but also applicable to real-world challenges and opportunities.
              </p>
              <Separator className="my-8" />
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Story</h2>
              <p className="text-muted-foreground md:text-xl">
                InsightfulGrowth was founded in 2020 by a team of professionals with backgrounds in finance, management
                consulting, and corporate leadership. Recognizing a gap in accessible, high-quality business content,
                they set out to create a platform that would democratize access to professional insights.
              </p>
              <p className="text-muted-foreground md:text-xl">
                What began as a small blog has grown into a comprehensive resource hub serving thousands of
                professionals worldwide. Our growth has been driven by our commitment to quality, relevance, and
                integrity in everything we publish.
              </p>
              <Separator className="my-8" />
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Values</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      We are committed to delivering content of the highest quality, backed by research and expert
                      analysis.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Integrity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      We maintain editorial independence and transparency in all our content and business relationships.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Relevance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      We focus on topics and insights that have practical applications in today's professional
                      landscape.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Inclusivity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      We create content that is accessible and valuable to professionals from diverse backgrounds and
                      industries.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      We continuously explore new formats, topics, and perspectives to provide fresh insights to our
                      audience.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      We foster a community of professionals who learn from and support each other in their growth
                      journeys.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet Our Team</h2>
              <p className="text-muted-foreground md:text-xl">
                The experts behind InsightfulGrowth's content and strategy.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Team member"
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">Founder & Economics Editor</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Former investment banker with 15+ years of experience in financial markets and economic analysis.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Team member"
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">Michael Chen</h3>
                  <p className="text-sm text-muted-foreground">Co-Founder & Leadership Editor</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Executive coach and former management consultant specializing in organizational leadership and team
                  dynamics.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Team member"
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">Alex Rivera</h3>
                  <p className="text-sm text-muted-foreground">Career Development Editor</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  HR executive and career strategist with expertise in talent development and workplace trends.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
                <p className="text-muted-foreground md:text-xl">
                  Have questions, feedback, or partnership inquiries? We'd love to hear from you. Reach out to our team
                  using the contact information below.
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div className="space-y-2">
                      <h3 className="font-bold">Email</h3>
                      <p className="text-sm text-muted-foreground">contact@insightfulgrowth.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div className="space-y-2">
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div className="space-y-2">
                      <h3 className="font-bold">Address</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Business Avenue
                        <br />
                        Suite 400
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Work With Us</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Partnership Opportunities</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Interested in advertising, sponsored content, or other partnership opportunities? We offer various ways
                to collaborate.
              </p>
              <div className="mt-6">
                <Button>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
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
            <p className="text-sm font-medium">InsightfulGrowth © 2023</p>
          </div>
          <div className="flex gap-4 md:gap-6">
            <Link href="/about" className="text-xs hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-xs hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href="/privacy" className="text-xs hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs hover:underline underline-offset-4">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
