import { Seo } from '@/components/Seo'
import { Hero } from '@/sections/Hero'
import { Services } from '@/sections/Services'
import { Portfolio } from '@/sections/Portfolio'
import { TelegramBot } from '@/sections/TelegramBot'
import { Pricing } from '@/sections/Pricing'
import { About } from '@/sections/About'
import { Skills } from '@/sections/Skills'
import { Contact } from '@/sections/Contact'
import { useHashScroll } from '@/hooks/useHashScroll'
import { siteConfig } from '@/config/siteConfig'

export function Home() {
  useHashScroll()

  return (
    <>
      <Seo path="/" />
      <Hero />
      <Services />
      <Portfolio />
      <TelegramBot />
      <Pricing />
      <About />
      <Skills />
      <Contact />
      <p className="sr-only">
        Contact {siteConfig.personal.fullName} at {siteConfig.personal.email}
      </p>
    </>
  )
}
