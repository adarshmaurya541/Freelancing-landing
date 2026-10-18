import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/siteConfig'
import { Container } from '@/components/ui/Container'

const footerLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Telegram Bot', href: '/#telegram-bot' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export function Footer() {
  const year = new Date().getFullYear()
  const socials = [
    siteConfig.personal.telegramUrl
      ? { label: 'Telegram', href: siteConfig.personal.telegramUrl }
      : null,
    siteConfig.personal.github
      ? { label: 'GitHub', href: siteConfig.personal.github }
      : null,
    siteConfig.personal.linkedin
      ? { label: 'LinkedIn', href: siteConfig.personal.linkedin }
      : null,
    ...siteConfig.personal.socials,
  ].filter((item): item is { label: string; href: string } => Boolean(item))

  return (
    <footer className="border-t border-line bg-canvas-raised">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-serif text-2xl text-ink">{siteConfig.personal.brandName}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
            {siteConfig.personal.title}
          </p>
          <a
            href={siteConfig.telegramBot.url}
            className="mt-4 inline-block text-sm font-medium text-brass hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {siteConfig.telegramBot.openCtaLabel}: {siteConfig.telegramBot.username}
          </a>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">Navigate</p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-sm text-ink hover:text-brass">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${siteConfig.personal.email}`} className="text-ink hover:text-brass">
                {siteConfig.personal.email}
              </a>
            </li>
            {siteConfig.personal.phone ? (
              <li>
                <a href={`tel:${siteConfig.personal.phone}`} className="text-ink hover:text-brass">
                  {siteConfig.personal.phone}
                </a>
              </li>
            ) : null}
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  className="text-ink hover:text-brass"
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-line py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.personal.brandName}. All rights reserved.
        </p>
        <p>Independent freelance development — not a template gallery.</p>
      </Container>
    </footer>
  )
}
