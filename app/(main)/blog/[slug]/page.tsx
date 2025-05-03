import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, User, Bookmark, ChevronLeft, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { BlogAdvertisement } from "@/components/blog/blog-advertisement"
import { BlogAuthor } from "@/components/blog/blog-author"
import { BlogRelated } from "@/components/blog/blog-related"
import { SocialShare } from "@/components/social-share"
import { CommentSection } from "@/components/comments/comment-section"

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: "1",
    title: "10 Strategies for Effective Leadership in Remote Teams",
    excerpt:
      "Discover proven approaches to leading distributed teams and maintaining high performance in virtual environments.",
    content: `
      <p class="lead">The shift to remote work has fundamentally changed how leaders must approach team management, communication, and performance optimization.</p>
      
      <p>In today's increasingly distributed workplace, leadership requires a new set of skills and strategies. Remote team management presents unique challenges: maintaining team cohesion without physical proximity, ensuring clear communication across different time zones, and fostering engagement without face-to-face interaction.</p>
      
      <h2>1. Establish Clear Communication Protocols</h2>
      
      <p>When teams work remotely, ambiguity becomes the enemy of productivity. Successful remote leaders establish explicit guidelines for:</p>
      
      <ul>
        <li>Which communication tools to use for different types of interactions</li>
        <li>Expected response times for messages</li>
        <li>Meeting schedules and attendance expectations</li>
        <li>Documentation practices for decisions and discussions</li>
      </ul>
      
      <p>By creating clarity around communication, leaders eliminate confusion and help team members collaborate effectively despite physical distance.</p>
      
      <h2>2. Focus on Outcomes, Not Activity</h2>
      
      <p>Remote work demands a shift from monitoring presence to evaluating results. High-performing remote teams operate on a foundation of trust, with leaders who:</p>
      
      <ul>
        <li>Set clear, measurable objectives</li>
        <li>Define success criteria for projects and tasks</li>
        <li>Provide autonomy in how work gets accomplished</li>
        <li>Evaluate performance based on deliverables rather than hours logged</li>
      </ul>
      
      <p>This outcomes-based approach not only improves productivity but also enhances job satisfaction by giving team members greater control over their work process.</p>
      
      <h2>3. Create Intentional Social Connections</h2>
      
      <p>The spontaneous interactions that naturally occur in an office environment must be deliberately cultivated in remote teams. Effective remote leaders:</p>
      
      <ul>
        <li>Schedule virtual social events and team-building activities</li>
        <li>Create channels for non-work conversations</li>
        <li>Allocate time in meetings for personal check-ins</li>
        <li>Recognize and celebrate team achievements and personal milestones</li>
      </ul>
      
      <p>These social connections build the trust and rapport essential for effective collaboration, innovation, and conflict resolution.</p>
      
      <h2>4. Invest in the Right Technology</h2>
      
      <p>Technology forms the backbone of remote work, but the specific tools matter less than how they're implemented. Successful remote teams need:</p>
      
      <ul>
        <li>Reliable video conferencing platforms</li>
        <li>Collaborative document editing capabilities</li>
        <li>Project management systems with clear visibility</li>
        <li>Asynchronous communication tools</li>
        <li>Secure access to necessary resources</li>
      </ul>
      
      <p>Leaders should regularly evaluate the effectiveness of their technology stack and be willing to make changes based on team feedback and evolving needs.</p>
      
      <h2>5. Prioritize Documentation</h2>
      
      <p>In remote environments, institutional knowledge must be explicitly captured rather than organically shared. Effective documentation practices include:</p>
      
      <ul>
        <li>Maintaining comprehensive project wikis</li>
        <li>Recording and sharing meeting notes</li>
        <li>Creating accessible process documentation</li>
        <li>Building searchable knowledge bases</li>
      </ul>
      
      <p>This emphasis on documentation reduces dependency on synchronous communication and enables team members to work effectively across different schedules and time zones.</p>
      
      <h2>6. Establish Regular Check-ins</h2>
      
      <p>Without the visibility of an office environment, regular check-ins become essential for alignment and support. Effective remote leaders implement:</p>
      
      <ul>
        <li>Weekly team meetings to align priorities</li>
        <li>One-on-one sessions focused on individual needs and growth</li>
        <li>Daily asynchronous updates for continuous awareness</li>
        <li>Quarterly strategic reviews to maintain long-term direction</li>
      </ul>
      
      <p>These structured touchpoints prevent isolation and ensure that issues are identified and addressed promptly.</p>
      
      <h2>7. Develop Cultural Sensitivity</h2>
      
      <p>Global remote teams bring together diverse perspectives, which creates both opportunities and challenges. Culturally aware remote leaders:</p>
      
      <ul>
        <li>Acknowledge and accommodate different communication styles</li>
        <li>Respect cultural holidays and work norms</li>
        <li>Create inclusive meeting practices that work across time zones</li>
        <li>Build awareness of cultural differences in feedback and collaboration</li>
      </ul>
      
      <p>This cultural intelligence strengthens team cohesion and leverages diversity as a competitive advantage.</p>
      
      <h2>8. Provide Clear Career Development Paths</h2>
      
      <p>Remote workers often worry about visibility and career progression. To address these concerns, effective leaders:</p>
      
      <ul>
        <li>Create transparent promotion criteria</li>
        <li>Provide regular feedback on performance and growth</li>
        <li>Identify remote-friendly development opportunities</li>
        <li>Ensure equal access to mentorship and sponsorship</li>
      </ul>
      
      <p>By actively supporting professional development, leaders can maintain engagement and retain top talent in remote settings.</p>
      
      <h2>9. Model Healthy Work-Life Boundaries</h2>
      
      <p>Remote work can easily blur the lines between professional and personal life. Leaders set the tone by:</p>
      
      <ul>
        <li>Defining and respecting working hours</li>
        <li>Taking visible breaks and vacation time</li>
        <li>Avoiding after-hours communication except for genuine emergencies</li>
        <li>Discussing wellbeing openly and normalizing self-care</li>
      </ul>
      
      <p>These practices prevent burnout and create a sustainable remote work culture that supports long-term performance.</p>
      
      <h2>10. Adapt Leadership Style to Individual Needs</h2>
      
      <p>Remote team members have varying preferences, circumstances, and experience levels. Effective remote leaders:</p>
      
      <ul>
        <li>Understand each team member's unique situation</li>
        <li>Adjust communication frequency and style accordingly</li>
        <li>Provide appropriate levels of autonomy based on capability</li>
        <li>Offer personalized support and resources</li>
      </ul>
      
      <p>This individualized approach recognizes that remote work affects people differently and ensures that each team member receives the support they need to excel.</p>
      
      <h2>Conclusion</h2>
      
      <p>Leading remote teams effectively requires intentionality, adaptability, and a willingness to reimagine traditional management practices. By implementing these ten strategies, leaders can create high-performing remote teams characterized by strong communication, clear direction, and genuine connection.</p>
      
      <p>The future of work will likely involve some degree of remote collaboration for most organizations. Leaders who master these approaches now will be well-positioned to thrive in an increasingly distributed business landscape.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    category: "Leadership",
    tags: ["Remote Work", "Team Management", "Communication"],
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=200&width=200",
      role: "Leadership Development Consultant",
      bio: "Sarah Johnson is a leadership development consultant with over 15 years of experience working with Fortune 500 companies on remote team management and organizational effectiveness.",
    },
    date: "May 15, 2023",
    readTime: "8 min read",
    slug: "strategies-for-remote-leadership",
    relatedPosts: ["2", "3", "5"],
  },
  {
    id: "2",
    title: "Economic Outlook 2023: Navigating Uncertainty in Global Markets",
    excerpt:
      "An in-depth analysis of current economic trends and forecasts to help business leaders make informed decisions.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Economics",
    tags: ["Market Analysis", "Financial Planning", "Risk Management"],
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Chief Economist",
      bio: "Michael Chen is the Chief Economist at Global Financial Insights and a regular contributor to major financial publications.",
    },
    date: "May 10, 2023",
    readTime: "12 min read",
    slug: "economic-outlook-2023",
  },
  // Additional posts would be here
]

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | InsightfulGrowth Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = post.relatedPosts ? blogPosts.filter((p) => post.relatedPosts?.includes(p.id)) : []

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedSection
        animation="fade-in"
        className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-brand-50 to-white dark:from-background dark:to-muted/5"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary flex items-center">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Blog
              </Link>
              <Separator orientation="vertical" className="h-4" />
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {post.category}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
            <p className="text-muted-foreground md:text-xl">{post.excerpt}</p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="slide-up" className="w-full py-8">
        <div className="container px-4 md:px-6">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden mb-8">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-2/3">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-muted">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Bookmark className="h-4 w-4" />
                    <span className="sr-only">Save article</span>
                  </Button>
                  <SocialShare url={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${post.slug}`} title={post.title} />
                </div>
              </div>

              <article className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              <BlogAdvertisement
                className="my-12"
                title="Take Your Leadership Skills to the Next Level"
                description="Join our exclusive leadership workshop and learn directly from industry experts."
                ctaText="Register Now"
                ctaLink="/workshops/leadership"
                image="/placeholder.svg?height=200&width=600"
              />

              <BlogAuthor author={post.author} className="my-12" />

              <Separator className="my-12" />

              <CommentSection postId={post.id} postSlug={post.slug} />
            </div>

            <div className="w-full md:w-1/3">
              <BlogSidebar />
            </div>
          </div>

          <BlogRelated posts={relatedPosts} className="mt-16" />
        </div>
      </AnimatedSection>
    </div>
  )
}
