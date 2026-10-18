import type { PricingModel } from '@/config/types'
import { isPlaceholderValue } from '@/utils/placeholders'

export function formatPrice(
  price: number | null,
  currency: string,
  suffix: string,
  model: PricingModel,
): string {
  if (price === null || Number.isNaN(price)) {
    return model === 'hourly' ? 'Contact for hourly rate' : 'Contact for pricing'
  }

  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: price % 1 === 0 ? 0 : 2,
  }).format(price)

  if (model === 'starting_at') {
    return `From ${formatted}${suffix}`
  }

  return `${formatted}${suffix}`
}

export function displayOrPlaceholder(value: string, fallback: string) {
  if (!value.trim() || isPlaceholderValue(value)) {
    return fallback
  }
  return value
}

export function isExternalHref(href: string) {
  return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:')
}
