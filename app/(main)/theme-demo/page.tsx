import { ThemeCard } from "@/components/ui/theme-card"
import { ThemeButton } from "@/components/ui/theme-button"
import { ThemeBadge } from "@/components/ui/theme-badge"
import { ThemeSection } from "@/components/ui/theme-section"
import { ThemeText } from "@/components/ui/theme-text"
import { ThemeHeading } from "@/components/ui/theme-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ThemeDemoPage() {
  return (
    <div className="py-10">
      <div className="container px-4 md:px-6">
        <ThemeHeading level={1} variant="gradient" className="mb-6 text-center">
          Theme-Aware Components
        </ThemeHeading>
        <ThemeText className="text-center mb-12 max-w-2xl mx-auto">
          These components automatically adapt to the current theme, providing a consistent and visually appealing
          experience in both light and dark modes.
        </ThemeText>

        <Tabs defaultValue="cards" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="sections">Sections</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
          </TabsList>
          <TabsContent value="cards" className="p-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ThemeCard>
                <ThemeHeading level={3} className="mb-2">
                  Default Card
                </ThemeHeading>
                <ThemeText>This is a default card that adapts to the current theme.</ThemeText>
              </ThemeCard>
              <ThemeCard variant="highlight">
                <ThemeHeading level={3} className="mb-2">
                  Highlight Card
                </ThemeHeading>
                <ThemeText>This card uses the muted background color for subtle emphasis.</ThemeText>
              </ThemeCard>
              <ThemeCard variant="glass">
                <ThemeHeading level={3} className="mb-2">
                  Glass Card
                </ThemeHeading>
                <ThemeText>This card has a glass morphism effect that works in both themes.</ThemeText>
              </ThemeCard>
              <ThemeCard variant="gradient">
                <ThemeHeading level={3} className="mb-2">
                  Gradient Card
                </ThemeHeading>
                <ThemeText>
                  This card uses a gradient background that adapts to the current theme, with lighter colors in light
                  mode and darker colors in dark mode.
                </ThemeText>
              </ThemeCard>
              <ThemeCard variant="glow">
                <ThemeHeading level={3} className="mb-2">
                  Glow Card
                </ThemeHeading>
                <ThemeText>This card has a subtle glow effect that's more pronounced on hover.</ThemeText>
              </ThemeCard>
              <ThemeCard padding="lg">
                <ThemeHeading level={3} className="mb-2">
                  Large Padding Card
                </ThemeHeading>
                <ThemeText>This card uses larger padding for more spacious content.</ThemeText>
              </ThemeCard>
            </div>
          </TabsContent>
          <TabsContent value="buttons" className="p-4">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <ThemeHeading level={3} className="mb-2">
                  Button Variants
                </ThemeHeading>
                <div className="flex flex-wrap gap-4">
                  <ThemeButton variant="primary">Primary</ThemeButton>
                  <ThemeButton variant="secondary">Secondary</ThemeButton>
                  <ThemeButton variant="outline">Outline</ThemeButton>
                  <ThemeButton variant="ghost">Ghost</ThemeButton>
                  <ThemeButton variant="link">Link</ThemeButton>
                  <ThemeButton variant="gradient">Gradient</ThemeButton>
                  <ThemeButton variant="glow">Glow</ThemeButton>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <ThemeHeading level={3} className="mb-2">
                  Button Sizes
                </ThemeHeading>
                <div className="flex flex-wrap items-center gap-4">
                  <ThemeButton size="sm">Small</ThemeButton>
                  <ThemeButton size="md">Medium</ThemeButton>
                  <ThemeButton size="lg">Large</ThemeButton>
                  <ThemeButton size="icon">
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
                      className="h-4 w-4"
                    >
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </ThemeButton>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="badges" className="p-4">
            <div className="flex flex-col gap-6">
              <ThemeHeading level={3} className="mb-2">
                Badge Variants
              </ThemeHeading>
              <div className="flex flex-wrap gap-4">
                <ThemeBadge variant="default">Default</ThemeBadge>
                <ThemeBadge variant="outline">Outline</ThemeBadge>
                <ThemeBadge variant="secondary">Secondary</ThemeBadge>
                <ThemeBadge variant="destructive">Destructive</ThemeBadge>
                <ThemeBadge variant="gradient">Gradient</ThemeBadge>
                <ThemeBadge variant="glow">Glow</ThemeBadge>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="sections" className="p-4">
            <div className="flex flex-col gap-6">
              <ThemeSection variant="default" spacing="sm" className="border rounded-lg">
                <ThemeHeading level={3} className="mb-2">
                  Default Section
                </ThemeHeading>
                <ThemeText>This section uses the default background color.</ThemeText>
              </ThemeSection>
              <ThemeSection variant="alt" spacing="sm" className="border rounded-lg">
                <ThemeHeading level={3} className="mb-2">
                  Alternative Section
                </ThemeHeading>
                <ThemeText>This section uses the muted background color for contrast.</ThemeText>
              </ThemeSection>
              <ThemeSection variant="gradient" spacing="sm" className="border rounded-lg">
                <ThemeHeading level={3} className="mb-2">
                  Gradient Section
                </ThemeHeading>
                <ThemeText>This section uses a gradient background that adapts to the current theme.</ThemeText>
              </ThemeSection>
              <ThemeSection variant="glass" spacing="sm" className="border rounded-lg">
                <ThemeHeading level={3} className="mb-2">
                  Glass Section
                </ThemeHeading>
                <ThemeText>This section has a glass morphism effect that works in both themes.</ThemeText>
              </ThemeSection>
            </div>
          </TabsContent>
          <TabsContent value="typography" className="p-4">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <ThemeHeading level={2} className="mb-4">
                  Heading Variants
                </ThemeHeading>
                <ThemeHeading level={3} variant="default">
                  Default Heading
                </ThemeHeading>
                <ThemeHeading level={3} variant="gradient">
                  Gradient Heading
                </ThemeHeading>
                <ThemeHeading level={3} variant="underline">
                  Underlined Heading
                </ThemeHeading>
                <ThemeHeading level={3} variant="highlight">
                  Highlighted Heading
                </ThemeHeading>
              </div>
              <div className="flex flex-col gap-4">
                <ThemeHeading level={2} className="mb-4">
                  Text Variants
                </ThemeHeading>
                <ThemeText variant="default">
                  Default text adapts to the foreground color of the current theme.
                </ThemeText>
                <ThemeText variant="muted">
                  Muted text is slightly less prominent, perfect for secondary information.
                </ThemeText>
                <ThemeText variant="gradient">
                  Gradient text uses a beautiful gradient that adapts to the current theme.
                </ThemeText>
                <ThemeText variant="highlight">
                  Highlighted text stands out with a background color based on the primary color.
                </ThemeText>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <ThemeHeading level={2} variant="underline" className="mb-6">
          Theme-Aware Design System
        </ThemeHeading>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <ThemeCard>
            <ThemeHeading level={3} className="mb-4">
              Consistent Experience
            </ThemeHeading>
            <ThemeText className="mb-4">
              Our theme-aware components provide a consistent experience across light and dark modes, ensuring your
              content looks great regardless of user preference.
            </ThemeText>
            <ThemeButton variant="primary">Learn More</ThemeButton>
          </ThemeCard>
          <ThemeCard variant="gradient">
            <ThemeHeading level={3} className="mb-4">
              Adaptive Design
            </ThemeHeading>
            <ThemeText className="mb-4">
              Components automatically adapt their colors, shadows, and effects based on the current theme, providing
              optimal contrast and visual appeal.
            </ThemeText>
            <ThemeButton variant="outline" className="bg-white/20 dark:bg-black/20">
              Explore
            </ThemeButton>
          </ThemeCard>
          <ThemeCard variant="glass">
            <ThemeHeading level={3} className="mb-4">
              Modern Aesthetics
            </ThemeHeading>
            <ThemeText className="mb-4">
              Incorporating modern design trends like glass morphism, gradients, and subtle animations that work
              beautifully in both light and dark modes.
            </ThemeText>
            <ThemeButton variant="gradient">See Examples</ThemeButton>
          </ThemeCard>
        </div>

        <ThemeSection variant="alt" className="rounded-lg mb-12">
          <div className="py-12 text-center">
            <ThemeHeading level={2} variant="gradient" className="mb-4">
              Ready to Enhance Your UI?
            </ThemeHeading>
            <ThemeText className="mb-6 max-w-2xl mx-auto">
              Our theme-aware components make it easy to create beautiful interfaces that adapt to user preferences.
              Start using them in your project today.
            </ThemeText>
            <div className="flex flex-wrap justify-center gap-4">
              <ThemeButton variant="primary">Get Started</ThemeButton>
              <ThemeButton variant="outline">View Documentation</ThemeButton>
            </div>
          </div>
        </ThemeSection>
      </div>
    </div>
  )
}
