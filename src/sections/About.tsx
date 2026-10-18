import { siteConfig } from '@/config/siteConfig'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export function About() {
  const { personal, about } = siteConfig

  return (
    <section id="about" className="border-t border-line py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <Reveal>
          <SectionHeading eyebrow="05 / About" title={about.heading} description={personal.biography} />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">Start a conversation</Button>
            {personal.resumeUrl ? (
              <Button href={personal.resumeUrl} variant="secondary">
                View resume
              </Button>
            ) : null}
          </div>
        </Reveal>
        <Reveal>
          <div className="space-y-5">
            <article className="rounded-2xl border border-line bg-canvas-raised p-6">
              <h3 className="font-medium text-ink">How I work</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{personal.workApproach}</p>
            </article>
            <article className="rounded-2xl border border-line bg-canvas-raised p-6">
              <h3 className="font-medium text-ink">What I optimize for</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{personal.philosophy}</p>
            </article>
            <dl className="grid gap-4 rounded-2xl border border-line p-6 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                  Availability
                </dt>
                <dd className="mt-1 text-sm text-ink">{personal.availability}</dd>
              </div>
              {personal.location ? (
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm text-ink">{personal.location}</dd>
                </div>
              ) : null}
              {personal.yearsOfExperience ? (
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    Experience
                  </dt>
                  <dd className="mt-1 text-sm text-ink">{personal.yearsOfExperience}</dd>
                </div>
              ) : null}
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                  Contact
                </dt>
                <dd className="mt-1 text-sm text-ink">{personal.email}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
