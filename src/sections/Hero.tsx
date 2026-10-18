import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/siteConfig'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { HeroVisual } from '@/components/HeroVisual'
import { Badge } from '@/components/ui/Badge'

export function Hero() {
  const { personal, hero } = siteConfig

  return (
    <section id="top" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="hero-enter">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas-raised px-3 py-1.5">
            <span
              className={`size-2 rounded-full ${personal.available ? 'bg-moss' : 'bg-ink-muted'}`}
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-ink">{personal.availability}</span>
          </div>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-brass">
            {personal.title}
          </p>
          <h1 className="mt-3 font-serif text-[2.4rem] leading-[1.1] text-ink sm:text-5xl lg:text-[3.4rem]">
            {personal.fullName}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {personal.shortIntro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#contact">
              {hero.primaryCta}
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button href="#portfolio" variant="secondary">
              {hero.secondaryCta}
            </Button>
            <Button href={siteConfig.telegramBot.url} variant="ghost" className="underline-offset-4 hover:underline">
              {hero.botCta}
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2" aria-label="Technology stack">
            {hero.stack.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
        <HeroVisual />
      </Container>
    </section>
  )
}
