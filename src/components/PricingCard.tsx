import { Check } from 'lucide-react'
import type { PricingPlan } from '@/config/types'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { formatPrice } from '@/utils/format'
import { cn } from '@/utils/cn'

export function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-2xl border bg-canvas-raised p-6 shadow-[var(--shadow)] transition-colors duration-200',
        plan.recommended ? 'border-brass' : 'border-line',
        'hover:border-brass',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-2xl text-ink">{plan.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{plan.description}</p>
        </div>
        {plan.recommended ? (
          <Badge className="mt-1 border-brass text-brass">Recommended</Badge>
        ) : null}
      </div>
      <p className="mt-6 text-3xl font-semibold tracking-tight text-ink">
        {formatPrice(plan.price, plan.currency, plan.priceSuffix, plan.pricingModel)}
      </p>
      <p className="mt-1 text-xs text-ink-muted">{plan.deliveryEstimate}</p>
      <ul className="mt-6 space-y-3 text-sm text-ink">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <Check size={16} className="mt-0.5 shrink-0 text-brass" aria-hidden="true" />
            <span className="break-words">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <Button href={plan.ctaHref} className="w-full" variant={plan.recommended ? 'primary' : 'secondary'}>
          {plan.ctaLabel}
        </Button>
      </div>
    </article>
  )
}
