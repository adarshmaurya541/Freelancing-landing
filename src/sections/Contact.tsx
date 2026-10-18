import { Mail, Send } from 'lucide-react'
import { siteConfig } from '@/config/siteConfig'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/ContactForm'
import { Reveal } from '@/components/ui/Reveal'

export function Contact() {
  const { personal } = siteConfig

  return (
    <section id="contact" className="border-t border-line py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionHeading
            eyebrow="07 / Contact"
            title="Tell me what you want to build"
            description="Share a short brief. I will reply with questions, a suggested approach, and whether I am the right fit."
          />
          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 rounded-2xl border border-line bg-canvas-raised px-4 py-3 text-sm text-ink hover:border-brass"
            >
              <Mail size={18} className="text-brass" aria-hidden="true" />
              {personal.email}
            </a>
            <a
              href={personal.telegramUrl}
              className="flex items-center gap-3 rounded-2xl border border-line bg-canvas-raised px-4 py-3 text-sm text-ink hover:border-brass"
              target="_blank"
              rel="noreferrer"
            >
              <Send size={18} className="text-brass" aria-hidden="true" />
              Telegram {personal.telegramUsername}
            </a>
            <p className="text-sm text-ink-muted">{personal.availability}</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="rounded-2xl border border-line bg-canvas-raised p-5 sm:p-6">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
