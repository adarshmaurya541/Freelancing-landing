import { useEffect, useId, useState, type MouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/config/siteConfig'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { scrollToHash } from '@/hooks/useHashScroll'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/utils/cn'

const links = [
  { label: 'Home', href: '/#top' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Telegram Bot', href: '/#telegram-bot' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export function Navbar() {
  const location = useLocation()
  const reducedMotion = usePrefersReducedMotion()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      return
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const handleNav = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isHome || !href.startsWith('/#')) {
      return
    }
    event.preventDefault()
    const hash = href.slice(1)
    if (hash === '#top') {
      window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
      window.history.replaceState(null, '', '/')
      setOpen(false)
      return
    }
    scrollToHash(hash, reducedMotion)
    window.history.replaceState(null, '', hash)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4">
      <div
        className={cn(
          'mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border transition-[box-shadow,background-color,border-color] duration-300',
          'border-line/45 bg-canvas/55 backdrop-blur-xl backdrop-saturate-150',
          'supports-[backdrop-filter]:bg-canvas/40',
          scrolled || open ? 'border-line/60 shadow-[0_12px_40px_-20px_rgb(0_0_0_/0.55)]' : '',
        )}
      >
        <div className="flex h-14 items-center justify-between gap-3 px-3 sm:h-16 sm:px-4 lg:px-5">
          <Link
            to="/"
            className="shrink-0 font-serif text-lg tracking-tight text-ink"
            onClick={() => {
              if (isHome) {
                window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
              }
            }}
          >
            {siteConfig.personal.brandName}
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={handleNav(link.href)}
                className="rounded-full px-3 py-2 text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button href="#contact" className="hidden sm:inline-flex">
              {siteConfig.hero.primaryCta}
            </Button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line lg:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <div id={menuId} hidden={!open} className="border-t border-line/40 lg:hidden">
          <div className="flex flex-col gap-1 px-3 py-3 sm:px-4">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={handleNav(link.href)}
                className="rounded-xl px-3 py-3 text-base text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Button href="#contact" className="mt-2 w-full">
              {siteConfig.hero.primaryCta}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
