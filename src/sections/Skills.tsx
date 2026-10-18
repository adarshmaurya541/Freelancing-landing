import { siteConfig } from '@/config/siteConfig'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'

export function Skills() {
  return (
    <section id="skills" className="border-t border-line py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="06 / Tools"
            title="Technologies I work with"
            description="This list is edited in siteConfig.ts. Add or remove skills there instead of changing the page."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteConfig.skillGroups.map((group) => (
            <Reveal key={group.id}>
              <article className="rounded-2xl border border-line bg-canvas-raised p-6">
                <h3 className="font-medium text-ink">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
