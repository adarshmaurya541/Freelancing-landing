import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/config/siteConfig'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'

export function TelegramBot() {
  const bot = siteConfig.telegramBot

  return (
    <section id="telegram-bot" className="border-t border-line py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="03 / Telegram bot"
            title={bot.name}
            description={bot.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="min-w-0">
            <div className="rounded-2xl border border-line bg-canvas-raised p-6 shadow-[var(--shadow)]">
              <div className="mx-auto w-full max-w-[280px] rounded-[2rem] border border-line bg-canvas p-3">
                <div className="rounded-[1.5rem] border border-line bg-canvas-raised p-4">
                  <p className="text-center font-mono text-[11px] text-ink-muted">{bot.username}</p>
                  <p className="mt-4 font-serif text-2xl text-ink">{bot.name}</p>
                  <p className="mt-2 text-sm text-ink-muted">{bot.shortPitch}</p>
                  <div className="mt-5 space-y-2">
                    <div className="rounded-2xl rounded-tl-sm bg-line/80 px-3 py-2 text-xs">
                      Start here to see public commands.
                    </div>
                    <div className="ml-8 rounded-2xl rounded-tr-sm bg-brass/15 px-3 py-2 text-xs">
                      Support: {bot.supportUsername}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <Badge>{bot.userCountLabel}</Badge>
                <p className="text-sm leading-relaxed text-ink-muted">{bot.targetAudience}</p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{bot.promotionalText}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={bot.url}>
                  {bot.openCtaLabel}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Button>
                <Button href={bot.supportUrl} variant="secondary">
                  Contact support
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="min-w-0 space-y-6">
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {bot.features.map((feature) => (
                  <article key={feature.title} className="rounded-2xl border border-line bg-canvas-raised p-5">
                    <h3 className="font-medium text-ink">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{feature.description}</p>
                  </article>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-3">
                {bot.howToStart.map((item) => (
                  <article key={item.step} className="rounded-2xl border border-line p-5">
                    <p className="font-mono text-[11px] text-brass">{item.step}</p>
                    <h3 className="mt-2 font-medium text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted">{item.detail}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
