import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export function Badge({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-line bg-canvas-raised px-2.5 py-1 text-xs text-ink-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
