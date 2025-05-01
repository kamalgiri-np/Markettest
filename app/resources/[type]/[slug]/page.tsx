import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, FileText, Video, Headphones, Share2, BookmarkPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { NewsletterSubscription } from "@/components/newsletter-subscription"

// Mock data for resources - in a real app, this would come from a database or API
const resourcesData = {
  whitepapers: {
    "digital-transformation-guide": {
      title: "Digital Transformation: A Comprehensive Guide for Business Leaders",
      description:
        "A strategic framework for navigating digital transformation initiatives, including key technologies, implementation strategies, and change management approaches.",
      type: "Whitepaper",
      icon: FileText,
      isPremium: false,
      author: "Dr. Sarah Johnson",
      publishDate: "March 15, 2023",
      readTime: "25 min read",
      image: "/placeholder.svg?height=600&width=1200",
      content: [
        {
          heading: "Executive Summary",
          text: "This comprehensive guide provides business leaders with a strategic framework for navigating digital transformation initiatives. It covers key technologies, implementation strategies, and change management approaches essential for successful digital transformation.",
        },
        {
          heading: "Understanding Digital Transformation",
          text: "Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It's also a cultural change that requires organizations to continually challenge the status quo, experiment, and get comfortable with failure.",
        },
        {
          heading: "Key Technologies Driving Transformation",
          text: "Several technologies are at the forefront of digital transformation efforts: Artificial Intelligence and Machine Learning, Internet of Things (IoT), Cloud Computing, Big Data Analytics, and Blockchain. Each offers unique capabilities that can revolutionize business operations and customer experiences.",
        },
        {
          heading: "Implementation Strategy Framework",
          text: "Successful digital transformation requires a well-structured implementation strategy. This includes conducting a digital maturity assessment, defining clear objectives aligned with business goals, creating a roadmap with measurable milestones, securing executive sponsorship, and establishing governance structures.",
        },
        {
          heading: "Change Management Approaches",
          text: "The human element is often the most challenging aspect of digital transformation. Effective change management involves clear communication of the vision, stakeholder engagement, comprehensive training programs, celebrating quick wins, and continuous feedback loops.",
        },
        {
          heading: "Case Studies",
          text: "This section presents real-world examples of successful digital transformation initiatives across various industries, highlighting key success factors and lessons learned from organizations that have navigated this journey effectively.",
        },
        {
          heading: "Measuring Success",
          text: "Establishing the right metrics is crucial for tracking transformation progress. This includes both technical KPIs (system adoption rates, performance improvements) and business KPIs (revenue growth, customer satisfaction, operational efficiency).",
        },
        {
          heading: "Conclusion",
          text: "Digital transformation is not a one-time project but a continuous journey of evolution. Organizations that approach it with strategic clarity, strong leadership, and a focus on both technology and people will be best positioned to thrive in the digital economy.",
        },
      ],
      relatedResources: [
        {
          title: "AI in Business: Practical Applications for Growth",
          type: "Webinar",
          slug: "ai-business-applications",
          resourceType: "webinars",
        },
        {
          title: "Change Management Toolkit for Digital Initiatives",
          type: "Template",
          slug: "change-management-toolkit",
          resourceType: "templates",
        },
      ],
    },
    "future-of-finance": {
      title: "The Future of Finance: Trends Reshaping Financial Services",
      description:
        "In-depth analysis of emerging trends in financial services, including fintech disruption, regulatory changes, and evolving consumer expectations.",
      type: "Whitepaper",
      icon: FileText,
      isPremium: true,
      author: "Michael Chen, CFA",
      publishDate: "January 10, 2023",
      readTime: "30 min read",
      image: "/placeholder.svg?height=600&width=1200",
      content: [
        {
          heading: "Executive Summary",
          text: "This whitepaper explores the major trends reshaping the financial services industry, from technological disruption to regulatory evolution and changing consumer behaviors.",
        },
        {
          heading: "The Fintech Revolution",
          text: "Financial technology companies are challenging traditional banking models with innovative solutions that offer greater convenience, lower costs, and improved user experiences. This section examines key fintech segments and their impact on established financial institutions.",
        },
        {
          heading: "Regulatory Landscape Evolution",
          text: "Regulatory frameworks are adapting to address new technologies, business models, and risks in financial services. This includes open banking initiatives, cryptocurrency regulations, and enhanced data protection requirements.",
        },
        {
          heading: "Digital Banking Transformation",
          text: "Traditional banks are undergoing significant digital transformation to remain competitive. This section covers strategies for core system modernization, customer experience enhancement, and operational efficiency improvements.",
        },
        {
          heading: "Emerging Technologies in Finance",
          text: "Artificial intelligence, blockchain, and quantum computing are poised to revolutionize financial services. This section explores practical applications and potential impacts of these technologies across different financial functions.",
        },
        {
          heading: "Changing Consumer Expectations",
          text: "Modern consumers expect seamless, personalized, and instant financial services. This section examines evolving customer preferences and how financial institutions can adapt their offerings to meet these expectations.",
        },
        {
          heading: "Future Business Models",
          text: "The financial services industry is moving toward platform-based, ecosystem-oriented business models. This section explores emerging models and strategies for positioning in the evolving financial landscape.",
        },
        {
          heading: "Strategic Recommendations",
          text: "Based on the identified trends, this section provides actionable recommendations for financial institutions to navigate disruption and capitalize on emerging opportunities in the evolving financial services landscape.",
        },
      ],
      relatedResources: [
        {
          title: "Financial Modeling Excel Templates for Business Planning",
          type: "Template",
          slug: "financial-modeling",
          resourceType: "templates",
        },
        {
          title: "Digital Banking Strategy Workshop",
          type: "Workshop",
          slug: "digital-banking-strategy",
          resourceType: "workshops",
        },
      ],
    },
  },
  templates: {
    "strategic-planning": {
      title: "Strategic Planning Framework & Templates Bundle",
      description:
        "Comprehensive collection of templates for strategic planning, including SWOT analysis, OKR setting, roadmapping, and implementation tracking tools.",
      type: "Template",
      icon: FileText,
      isPremium: true,
      author: "Strategic Planning Team",
      publishDate: "February 5, 2023",
      readTime: "Template Bundle",
      image: "/placeholder.svg?height=600&width=1200",
      content: [
        {
          heading: "Bundle Overview",
          text: "This comprehensive template bundle provides all the tools needed for effective strategic planning, from initial analysis to implementation tracking. Designed for business leaders and strategy professionals, these templates streamline the planning process and ensure thorough coverage of all critical elements.",
        },
        {
          heading: "What's Included",
          text: "The bundle contains 15 professionally designed templates in Excel, PowerPoint, and Word formats, covering every stage of the strategic planning process. All templates are fully customizable to fit your organization's specific needs and branding.",
        },
        {
          heading: "SWOT Analysis Templates",
          text: "Comprehensive templates for conducting Strengths, Weaknesses, Opportunities, and Threats analysis, including detailed worksheets for team input collection and visualization tools for presenting findings.",
        },
        {
          heading: "OKR Setting Framework",
          text: "Structured templates for setting and tracking Objectives and Key Results at organizational, departmental, and individual levels, with built-in alignment checks and progress tracking mechanisms.",
        },
        {
          heading: "Strategic Roadmapping Tools",
          text: "Visual roadmapping templates for different time horizons (1-year, 3-year, 5-year), with capabilities for milestone setting, dependency mapping, and resource allocation planning.",
        },
        {
          heading: "Implementation Tracking Dashboards",
          text: "Dynamic dashboards for monitoring strategic initiative progress, resource utilization, risk status, and key performance indicators, with automated visualization of progress against targets.",
        },
        {
          heading: "Strategic Communication Templates",
          text: "Ready-to-use templates for communicating strategic plans to different stakeholders, including executive presentations, all-hands meeting materials, and departmental briefing documents.",
        },
        {
          heading: "Usage Instructions",
          text: "Detailed guidance on how to effectively use each template, including best practices, example scenarios, and tips for customization to meet specific organizational needs.",
        },
      ],
      relatedResources: [
        {
          title: "Digital Transformation: A Comprehensive Guide for Business Leaders",
          type: "Whitepaper",
          slug: "digital-transformation-guide",
          resourceType: "whitepapers",
        },
        {
          title: "Project Management Toolkit for Business Leaders",
          type: "Template",
          slug: "project-management",
          resourceType: "templates",
        },
      ],
    },
    "project-management": {
      title: "Project Management Toolkit for Business Leaders",
      description:
        "Complete set of project management templates including project charter, risk assessment, stakeholder analysis, and progress tracking dashboards.",
      type: "Template",
      icon: FileText,
      isPremium: false,
      author: "Project Management Office",
      publishDate: "April 12, 2023",
      readTime: "Template Bundle",
      image: "/placeholder.svg?height=600&width=1200",
      content: [
        {
          heading: "Toolkit Overview",
          text: "This comprehensive project management toolkit provides business leaders with all the templates and tools needed to plan, execute, and monitor projects effectively. Designed to be accessible for non-project management professionals while maintaining best practices.",
        },
        {
          heading: "What's Included",
          text: "The toolkit contains 12 essential project management templates in Excel and PowerPoint formats, covering the entire project lifecycle from initiation to closure. All templates are designed for clarity and ease of use.",
        },
        {
          heading: "Project Charter Template",
          text: "A comprehensive yet concise template for defining project scope, objectives, stakeholders, and high-level requirements. Includes sections for business case, success criteria, and approval signatures.",
        },
        {
          heading: "Risk Assessment Matrix",
          text: "A structured template for identifying, analyzing, and prioritizing project risks. Includes probability and impact assessment scales, risk response strategies, and a visual heat map for risk prioritization.",
        },
        {
          heading: "Stakeholder Analysis Tools",
          text: "Templates for identifying and categorizing stakeholders, assessing their influence and interest, and developing appropriate engagement strategies for each stakeholder group.",
        },
        {
          heading: "Project Schedule Templates",
          text: "Gantt chart templates with built-in dependencies, critical path highlighting, and resource allocation features. Includes templates for different project sizes and complexities.",
        },
        {
          heading: "Progress Tracking Dashboards",
          text: "Visual dashboards for monitoring project progress, budget utilization, milestone achievement, and issue status. Includes automated calculations for earned value metrics and forecast projections.",
        },
        {
          heading: "Project Closure Documents",
          text: "Templates for conducting post-project reviews, documenting lessons learned, and transitioning deliverables to operations. Includes checklists for ensuring all project closure activities are completed.",
        },
      ],
      relatedResources: [
        {
          title: "Strategic Planning Framework & Templates Bundle",
          type: "Template",
          slug: "strategic-planning",
          resourceType: "templates",
        },
        {
          title: "Leadership in Crisis: Managing Teams Through Uncertainty",
          type: "Webinar",
          slug: "leadership-crisis-management",
          resourceType: "webinars",
        },
      ],
    },
  },
  webinars: {
    "leadership-crisis-management": {
      title: "Leadership in Crisis: Managing Teams Through Uncertainty",
      description:
        "Expert panel discussion on effective leadership strategies during times of crisis, featuring insights from CEOs who successfully navigated major disruptions.",
      type: "Webinar",
      icon: Video,
      isPremium: false,
      author: "Leadership Panel",
      publishDate: "May 20, 2023",
      readTime: "60 min webinar",
      image: "/placeholder.svg?height=600&width=1200",
      content: [
        {
          heading: "Webinar Overview",
          text: "This expert panel discussion brings together CEOs and senior leaders who have successfully guided their organizations through major crises. They share practical strategies, personal experiences, and actionable insights for effective leadership during uncertain times.",
        },
        {
          heading: "Featured Speakers",
          text: "The webinar features Jane Rodriguez (CEO, Global Innovations), Michael Chen (Former CEO, TechVantage), Dr. Sarah Williams (Crisis Management Expert), and Robert Kim (CHRO, Enterprise Solutions). Each brings unique perspectives from different industries and crisis scenarios.",
        },
        {
          heading: "Key Topics Covered",
          text: "The discussion covers critical aspects of crisis leadership: decision-making under pressure, transparent communication strategies, maintaining team cohesion remotely, balancing short-term responses with long-term vision, and personal resilience techniques for leaders.",
        },
        {
          heading: "Decision-Making Frameworks",
          text: "The panelists share practical frameworks for making difficult decisions with limited information and under time pressure. This includes approaches for rapid scenario planning, stakeholder impact assessment, and values-based decision filters.",
        },
        {
          heading: "Communication Strategies",
          text: "Effective crisis communication requires transparency, consistency, and empathy. The speakers discuss how to structure crisis communications, address difficult questions honestly, and maintain trust when the situation is evolving rapidly.",
        },
        {
          heading: "Team Management Approaches",
          text: "Leading teams through uncertainty requires special attention to psychological safety, clarity of priorities, and individual support. The panel shares techniques for virtual team management, recognizing stress signals, and fostering resilience across the organization.",
        },
        {
          heading: "Personal Leadership Resilience",
          text: "Crisis situations place enormous pressure on leaders themselves. This section covers practical strategies for maintaining personal resilience, managing stress, and ensuring leaders can continue to provide steady guidance throughout extended crisis periods.",
        },
        {
          heading: "Q&A Session Highlights",
          text: "The webinar concludes with highlights from the audience Q&A session, addressing specific challenges raised by participants and providing tailored advice for different crisis scenarios and organizational contexts.",
        },
      ],
      relatedResources: [
        {
          title: "Change Management Toolkit for Digital Initiatives",
          type: "Template",
          slug: "change-management-toolkit",
          resourceType: "templates",
        },
        {
          title: "The Future of Leadership: Adapting to a Changing World",
          type: "Podcast",
          slug: "future-leadership",
          resourceType: "podcast",
        },
      ],
    },
    "ai-business-applications": {
      title: "AI in Business: Practical Applications for Growth",
      description:
        "Comprehensive overview of how businesses are leveraging AI for competitive advantage, with case studies and implementation strategies for various industries.",
      type: "Webinar",
      icon: Video,
      isPremium: true,
      author: "Dr. Alex Rivera",
      publishDate: "June 8, 2023",
      readTime: "75 min webinar",
      image: "/placeholder.svg?height=600&width=1200",
      content: [
        {
          heading: "Webinar Overview",
          text: "This comprehensive webinar explores practical applications of artificial intelligence across different business functions and industries. It focuses on realistic implementation strategies that deliver measurable business value, rather than theoretical possibilities.",
        },
        {
          heading: "AI Fundamentals for Business Leaders",
          text: "The session begins with a non-technical explanation of key AI concepts relevant to business decision-makers. This includes distinguishing between different AI capabilities (machine learning, natural language processing, computer vision) and understanding their business applications.",
        },
        {
          heading: "Customer Experience Applications",
          text: "This segment explores how AI is transforming customer interactions through intelligent chatbots, personalization engines, sentiment analysis, and predictive service models. It includes case studies from retail, financial services, and healthcare organizations.",
        },
        {
          heading: "Operational Efficiency Use Cases",
          text: "AI offers significant opportunities for operational optimization. This section covers applications in predictive maintenance, supply chain optimization, resource allocation, and process automation, with examples from manufacturing, logistics, and service industries.",
        },
        {
          heading: "Product and Service Innovation",
          text: "AI enables entirely new products and services or significant enhancements to existing offerings. This segment showcases examples of AI-powered innovation across industries, from recommendation engines to predictive healthcare solutions.",
        },
        {
          heading: "Implementation Strategy Framework",
          text: "Moving from concept to implementation requires a structured approach. This section provides a practical framework for AI project selection, business case development, technology selection, and change management considerations.",
        },
        {
          heading: "Ethical and Governance Considerations",
          text: "Responsible AI implementation requires attention to ethical implications and appropriate governance. This segment covers key considerations around bias, transparency, privacy, and establishing appropriate oversight mechanisms.",
        },
        {
          heading: "Getting Started: Next Steps",
          text: "The webinar concludes with practical guidance on how to begin or accelerate AI adoption, including assessing organizational readiness, identifying high-value opportunities, building necessary capabilities, and developing a roadmap for implementation.",
        },
      ],
      relatedResources: [
        {
          title: "Digital Transformation: A Comprehensive Guide for Business Leaders",
          type: "Whitepaper",
          slug: "digital-transformation-guide",
          resourceType: "whitepapers",
        },
        {
          title: "Data-Driven Decision Making Workshop",
          type: "Workshop",
          slug: "data-driven-decision",
          resourceType: "workshops",
        },
      ],
    },
  },
  workshops: {
    "data-driven-decision": {
      title: "Data-Driven Decision Making Workshop",
      description:
        "Interactive workshop materials on how to leverage data for strategic decision-making, including frameworks for analysis, visualization techniques, and implementation strategies.",
      type: "Workshop",
      icon: Video,
      isPremium: true,
      author: "Data Analytics Team",
      publishDate: "July 15, 2023",
      readTime: "Workshop Materials",
      image: "/placeholder.svg?height=600&width=1200",
      content: [
        {
          heading: "Workshop Overview",
          text: "This comprehensive workshop provides business leaders with practical tools and frameworks for making better decisions using data. The materials are designed to be accessible to non-technical leaders while providing actionable insights and techniques.",
        },
        {
          heading: "Workshop Materials Included",
          text: "The package includes facilitator guides, participant workbooks, presentation slides, exercise templates, case studies, and supplementary resources. All materials are customizable to fit specific organizational contexts and challenges.",
        },
        {
          heading: "Module 1: Data Literacy Fundamentals",
          text: "This module establishes a common language and understanding of key data concepts. It covers data types, quality considerations, basic statistical concepts, and common analytical techniques relevant to business decision-making.",
        },
        {
          heading: "Module 2: Decision Framework Development",
          text: "This section helps participants develop structured frameworks for identifying what data is needed for different types of decisions. It includes templates for mapping decisions to data requirements and assessing data availability and quality.",
        },
        {
          heading: "Module 3: Data Analysis Techniques",
          text: "While maintaining accessibility for non-technical leaders, this module introduces practical analytical approaches for deriving insights from data. It covers descriptive, diagnostic, predictive, and prescriptive analytics with business-focused examples.",
        },
        {
          heading: "Module 4: Data Visualization Best Practices",
          text: "Effective communication of data insights is critical for decision-making. This module covers principles of data visualization, chart selection guidelines, dashboard design, and techniques for presenting data to different audiences.",
        },
        {
          heading: "Module 5: Overcoming Decision Biases",
          text: "This section addresses how data can help mitigate common cognitive biases in decision-making. It includes techniques for testing assumptions, challenging interpretations, and implementing decision review processes.",
        },
        {
          heading: "Module 6: Implementation Planning",
          text: "The workshop concludes with practical steps for implementing data-driven approaches within participants' teams and organizations. It includes change management considerations, quick-win identification, and capability development planning.",
        },
      ],
      relatedResources: [
        {
          title: "AI in Business: Practical Applications for Growth",
          type: "Webinar",
          slug: "ai-business-applications",
          resourceType: "webinars",
        },
        {
          title: "Strategic Planning Framework & Templates Bundle",
          type: "Template",
          slug: "strategic-planning",
          resourceType: "templates",
        },
      ],
    },
  },
  guides: {
    "negotiation-mastery": {
      title: "Negotiation Mastery: Strategies for Business Success",
      description:
        "Comprehensive guide to negotiation tactics, preparation frameworks, and psychological insights to help you achieve better outcomes in business negotiations.",
      type: "Guide",
      icon: FileText,
      isPremium: false,
      author: "Negotiation Excellence Team",
      publishDate: "August 3, 2023",
      readTime: "45 min read",
      image: "/placeholder.svg?height=600&width=1200",
      content: [
        {
          heading: "Guide Overview",
          text: "This comprehensive guide provides business professionals with practical strategies, frameworks, and psychological insights to improve negotiation outcomes. It combines academic research with real-world experience to deliver actionable techniques for various negotiation scenarios.",
        },
        {
          heading: "The Psychology of Negotiation",
          text: "Understanding the psychological dynamics at play is fundamental to effective negotiation. This section explores cognitive biases, emotional influences, and interpersonal dynamics that impact negotiation processes and outcomes.",
        },
        {
          heading: "Preparation Framework",
          text: "Thorough preparation is the foundation of successful negotiation. This chapter provides a structured framework for defining objectives, understanding interests (yours and theirs), researching alternatives, and developing a strategic approach tailored to the specific situation.",
        },
        {
          heading: "Value Creation Strategies",
          text: "Moving beyond zero-sum thinking, this section explores techniques for expanding the pie before dividing it. It covers methods for identifying mutual interests, developing creative options, and structuring agreements that maximize value for all parties.",
        },
        {
          heading: "Tactical Approaches",
          text: "This chapter provides specific tactical techniques for different negotiation phases, including effective opening strategies, response techniques for difficult situations, concession management, and approaches for breaking deadlocks.",
        },
        {
          heading: "Cross-Cultural Considerations",
          text: "Global business requires understanding how cultural differences impact negotiation. This section explores key cultural dimensions that affect negotiation styles and provides guidance for adapting approaches for international contexts.",
        },
        {
          heading: "Complex and Multi-party Negotiations",
          text: "Many business negotiations involve multiple stakeholders and complex issues. This chapter provides frameworks for managing these situations, including coalition building, issue prioritization, and process management techniques.",
        },
        {
          heading: "Implementation and Relationship Management",
          text: "Successful negotiation extends beyond the agreement itself. This final section addresses implementation planning, relationship development, and laying groundwork for future negotiations with the same parties.",
        },
      ],
      relatedResources: [
        {
          title: "Leadership in Crisis: Managing Teams Through Uncertainty",
          type: "Webinar",
          slug: "leadership-crisis-management",
          resourceType: "webinars",
        },
        {
          title: "Communication Strategy Framework",
          type: "Template",
          slug: "communication-strategy",
          resourceType: "templates",
        },
      ],
    },
  },
  podcast: {
    "future-of-work": {
      title: "The Future of Work: Adapting to AI and Automation",
      description:
        "In-depth discussion with industry experts on how AI and automation are reshaping the workplace and strategies for professionals to adapt and thrive.",
      type: "Podcast",
      icon: Headphones,
      isPremium: false,
      author: "Future of Work Podcast",
      publishDate: "September 12, 2023",
      readTime: "45 min podcast",
      image: "/placeholder.svg?height=600&width=1200",
      content: [
        {
          heading: "Episode Overview",
          text: "This podcast episode brings together industry experts to discuss how artificial intelligence and automation are fundamentally reshaping the workplace. The conversation explores both challenges and opportunities, with practical strategies for professionals and organizations to adapt and thrive in this changing landscape.",
        },
        {
          heading: "Featured Guests",
          text: "The episode features Dr. Maya Patel (AI Ethics Researcher), James Wilson (Future of Work Consultant), Elena Rodriguez (Chief People Officer, TechFuture), and Dr. Thomas Lee (Economist specializing in labor markets and technology).",
        },
        {
          heading: "Current State of Workplace Automation",
          text: "The discussion begins with an assessment of the current state of AI and automation adoption across different industries and job functions. The experts provide context on the pace of change and the types of tasks being automated today.",
        },
        {
          heading: "Impact on Different Roles and Industries",
          text: "This segment explores how automation is affecting various professions and sectors differently. The guests discuss which roles are most vulnerable to displacement, which are being augmented rather than replaced, and where new opportunities are emerging.",
        },
        {
          heading: "Skills for the Future Workplace",
          text: "The conversation turns to the evolving skill requirements in an increasingly automated workplace. The experts discuss the rising importance of uniquely human capabilities alongside technical skills, and strategies for continuous skill development.",
        },
        {
          heading: "Organizational Adaptation Strategies",
          text: "This section addresses how organizations can navigate workforce transformation effectively. Topics include responsible implementation approaches, reskilling programs, organizational structure evolution, and creating cultures that embrace technological change.",
        },
        {
          heading: "Policy and Societal Considerations",
          text: "The broader implications of workplace automation require policy attention. The guests discuss education system evolution, social safety net considerations, and potential new models for work and income in a highly automated economy.",
        },
        {
          heading: "Personal Action Plan",
          text: "The episode concludes with practical advice for individual professionals on how to assess their own role's automation risk, develop future-proof skills, position themselves for emerging opportunities, and maintain resilience through workplace transformation.",
        },
      ],
      relatedResources: [
        {
          title: "AI in Business: Practical Applications for Growth",
          type: "Webinar",
          slug: "ai-business-applications",
          resourceType: "webinars",
        },
        {
          title: "Digital Transformation: A Comprehensive Guide for Business Leaders",
          type: "Whitepaper",
          slug: "digital-transformation-guide",
          resourceType: "whitepapers",
        },
      ],
    },
  },
}

// Function to get resource data or return null if not found
function getResourceData(type, slug) {
  if (resourcesData[type] && resourcesData[type][slug]) {
    return resourcesData[type][slug]
  }
  return null
}

export default function ResourceDetailPage({ params }: { params: { type: string; slug: string } }) {
  const { type, slug } = params
  const resource = getResourceData(type, slug)

  // If resource not found, we could redirect or show a not found page
  if (!resource) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 container px-4 md:px-6 py-12">
          <h1 className="text-3xl font-bold mb-6">Resource Not Found</h1>
          <p className="mb-6">Sorry, the resource you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link href="/resources">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Link>
          </Button>
        </main>
        <SiteFooter />
      </div>
    )
  }

  const ResourceIcon = resource.icon

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <AnimatedSection
          animation="fade-in"
          className="w-full py-12 md:py-24 bg-gradient-to-br from-brand-50 to-white dark:from-background dark:to-muted/5"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-8">
              <Link
                href="/resources"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    <ResourceIcon className="mr-1 h-3 w-3" />
                    {resource.type}
                  </Badge>
                  {resource.isPremium && (
                    <Badge variant="outline" className="border-amber-500 text-amber-500">
                      Premium
                    </Badge>
                  )}
                </div>

                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{resource.title}</h1>

                <p className="text-muted-foreground text-lg mb-6">{resource.description}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-1">
                    <span>By {resource.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{resource.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{resource.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  <Button className="hover-scale transition-all duration-300">
                    {resource.type === "Template" || resource.type === "Whitepaper" || resource.type === "Guide" ? (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Download {resource.type}
                      </>
                    ) : resource.type === "Webinar" || resource.type === "Workshop" ? (
                      <>
                        <Video className="mr-2 h-4 w-4" />
                        Watch {resource.type}
                      </>
                    ) : resource.type === "Podcast" ? (
                      <>
                        <Headphones className="mr-2 h-4 w-4" />
                        Listen to Episode
                      </>
                    ) : (
                      <>Access Resource</>
                    )}
                  </Button>

                  <Button variant="outline" className="hover-scale transition-all duration-300">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>

                  <Button variant="outline" className="hover-scale transition-all duration-300">
                    <BookmarkPlus className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>

              <div>
                <Image
                  src={resource.image || "/placeholder.svg"}
                  width={600}
                  height={400}
                  alt={resource.title}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
              <div className="space-y-8">
                {resource.content.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h2 className="text-2xl font-bold">{section.heading}</h2>
                    <p className="text-muted-foreground">{section.text}</p>
                  </div>
                ))}

                {resource.isPremium && (
                  <Card className="mt-8 bg-muted/30">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Premium Content</h3>
                      <p className="mb-4">
                        This is a premium resource. Subscribe to our premium plan to access the full content.
                      </p>
                      <Button asChild className="hover-scale transition-all duration-300">
                        <Link href="/premium/subscribe">Upgrade to Premium</Link>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div className="space-y-8">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Related Resources</h3>
                  <div className="space-y-4">
                    {resource.relatedResources.map((related, index) => (
                      <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                        <h4 className="font-medium mb-1">
                          <Link href={`/resources/${related.resourceType}/${related.slug}`} className="hover:underline">
                            {related.title}
                          </Link>
                        </h4>
                        <div className="text-sm text-muted-foreground">{related.type}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Subscribe to Updates</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get notified when we release new resources like this one.
                  </p>
                  <NewsletterSubscription compact />
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
