import { siteConfig } from '@/config/siteConfig'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PricingCard } from '@/components/PricingCard'
import { Reveal } from '@/components/ui/Reveal'

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-line py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="04 / Pricing"
            title="Freelance project packages"
            description={siteConfig.pricing.intro}
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {siteConfig.pricing.plans.map((plan) => (
            <Reveal key={plan.id}>
              <PricingCard plan={plan} />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-muted">
          Freelance quotes on this page are separate from any Telegram bot access, which is handled
          only inside the bot.
        </p>
      </Container>
    </section>
  )
}
