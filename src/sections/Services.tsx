import { siteConfig } from '@/config/siteConfig'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/ServiceCard'
import { Reveal } from '@/components/ui/Reveal'

export function Services() {
  return (
    <section id="services" className="border-t border-line py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="01 / Services"
            title="What I can take on"
            description="Each offering is scoped from the configuration file, including price labels. Until you add rates, every package asks for a conversation instead of inventing a number."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteConfig.services.map((service) => (
            <Reveal key={service.id}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
