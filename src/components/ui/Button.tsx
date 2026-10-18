import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { isExternalHref } from '@/utils/format'
import { scrollToHash } from '@/hooks/useHashScroll'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type Variant = 'primary' | 'secondary' | 'ghost'

const variants: Record<Variant, string> = {
  primary:
    'bg-[#14120e] text-[#f3eee4] hover:bg-[#2a261f] dark:bg-[#d4b57a] dark:text-[#14120e] dark:hover:bg-[#c4a36a]',
  secondary:
    'border border-line bg-transparent text-ink hover:border-ink/40 hover:bg-canvas-raised',
  ghost: 'text-ink hover:text-brass',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  href?: string
  children: ReactNode
}

export function Button({
  variant = 'primary',
  href,
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  const reducedMotion = usePrefersReducedMotion()
  const classes = cn(
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold tracking-tight transition-colors',
    variants[variant],
    className,
  )

  if (href) {
    if (href.startsWith('#')) {
      return (
        <a
          href={href}
          className={classes}
          onClick={(event) => {
            event.preventDefault()
            scrollToHash(href, reducedMotion)
            window.history.replaceState(null, '', href)
          }}
        >
          {children}
        </a>
      )
    }

    if (isExternalHref(href)) {
      return (
        <a href={href} className={classes} target="_blank" rel="noreferrer">
          {children}
        </a>
      )
    }

    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
