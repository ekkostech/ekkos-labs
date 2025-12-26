import { Badge } from "@/components/Badge";
import { CTAButton } from "@/components/CTAButton";
import { PageContainer } from "@/components/PageContainer";
import { QuoteBlock } from "@/components/QuoteBlock";
import { Section } from "@/components/Section";

const researchThemes = [
  {
    title: "Persistent Memory",
    description:
      "AI systems that remember context across sessions and learn from every interaction.",
  },
  {
    title: "Pattern Intelligence",
    description:
      "Solutions that improve over time, automatically learning what works.",
  },
  {
    title: "Safety & Alignment",
    description:
      "Provable, auditable AI decisions that enterprises can trust.",
  },
  {
    title: "Agent Cognition",
    description:
      "Enabling the next generation of intelligent, learning AI agents.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-black via-black to-black/95">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="primary" className="mb-4">
              ekkOS_Labs
            </Badge>
            <p className="mb-4 text-base leading-relaxed text-white/80 italic">
              The research arm of EKKOS Technologies Inc.
            </p>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
              Advancing AI Memory & Cognition
            </h1>
            <p className="mb-6 text-xl leading-relaxed text-white/70">
              ekkOS Labs drives the cognitive research that powers the ekkOS
              platform—enabling AI systems to learn, remember, and improve
              over time.
            </p>
            <p className="mb-8 text-lg font-medium text-primary">
              Born from LLMs. Built for the future of intelligence.
            </p>

            <QuoteBlock>
              We're building the cognitive infrastructure that makes AI
              actually learn—not just respond.
            </QuoteBlock>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <CTAButton href="https://ekkos.dev" variant="primary">
                Visit ekkOS Platform
              </CTAButton>
              <CTAButton href="mailto:research@ekkos.dev" variant="outline">
                Research Collaboration
              </CTAButton>
            </div>
          </div>
        </PageContainer>
      </Section>

      {/* Research Focus Grid */}
      <Section>
        <PageContainer>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              What We're Building
            </h2>
            <p className="text-white/70">
              Cognitive infrastructure for intelligent AI systems
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {researchThemes.map((theme, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-primary/50 hover:bg-white/10"
              >
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {theme.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </Section>

      {/* Vision Section */}
      <Section className="bg-white/5">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">Our Vision</h2>
            <p className="mb-6 text-lg leading-relaxed text-white/80">
              Every AI system today forgets. Every session starts from zero.
              Every correction is lost. We're changing that.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-white/80">
              ekkOS Labs is building cognitive infrastructure that gives AI
              systems persistent memory—so they learn from experience, remember
              what worked, and get smarter over time.
            </p>
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <p className="text-lg font-medium text-white">
                The result: AI that actually learns.
              </p>
            </div>
          </div>
        </PageContainer>
      </Section>

      {/* Relationship to Platform */}
      <Section>
        <PageContainer>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Research Meets Product
            </h2>
            <p className="mb-6 leading-relaxed text-white/70">
              Our research powers the ekkOS platform at{" "}
              <a
                href="https://ekkos.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ekkos.dev
              </a>
              . Developers and teams use ekkOS today to give their AI
              applications persistent memory and pattern intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton
                href="https://ekkos.dev"
                variant="secondary"
                className="inline-flex"
              >
                Try ekkOS Platform
              </CTAButton>
              <CTAButton
                href="mailto:research@ekkos.dev"
                variant="outline"
                className="inline-flex"
              >
                Partner With Us
              </CTAButton>
            </div>
          </div>
        </PageContainer>
      </Section>
    </>
  );
}
