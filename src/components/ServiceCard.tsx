import { Bot, Globe, Server, Smartphone, Webhook } from 'lucide-react'
import type { ServiceItem } from '@/config/types'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/utils/format'

const icons = {
  globe: Globe,
  smartphone: Smartphone,
  server: Server,
  bot: Bot,
  webhook: Webhook,
}

export function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = icons[service.icon]

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-canvas-raised p-6 shadow-[var(--shadow)] transition-colors duration-200 hover:border-brass">
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex size-11 items-center justify-center rounded-2xl border border-line bg-canvas text-brass">
          <Icon size={20} aria-hidden="true" />
        </div>
        <p className="text-right text-sm font-semibold text-ink">
          {formatPrice(service.price, service.currency, service.priceSuffix, service.pricingModel)}
        </p>
      </div>
      <h3 className="mt-5 font-serif text-2xl text-ink">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.summary}</p>
      <ul className="mt-5 space-y-2 text-sm text-ink">
        {service.details.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
      <p className="mt-4 text-xs text-ink-muted">{service.deliveryEstimate}</p>
      <div className="mt-auto pt-6">
        <Button href="#contact" variant="secondary" className="w-full">
          {service.ctaLabel}
        </Button>
      </div>
    </article>
  )
}
