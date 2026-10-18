import { useEffect, useMemo, useState } from 'react'
import { X } from 'lucide-react'
import { projects } from '@/config/projects'
import type { Project } from '@/config/types'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ProjectCard'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/utils/cn'

const filters = ['All', ...Array.from(new Set(projects.map((project) => project.category)))]

export function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState<Project | null>(null)

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  )

  useEffect(() => {
    if (!active) {
      return
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActive(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section id="portfolio" className="border-t border-line py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="02 / Portfolio"
            title="Selected work"
            description="Concept and demonstration projects that show layout, interaction, and range. Open any card for details. These are not client case studies."
          />
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-colors',
                filter === item
                  ? 'border-ink bg-ink text-canvas dark:border-brass dark:bg-brass dark:text-ink'
                  : 'border-line text-ink-muted hover:text-ink',
              )}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </Container>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
          onClick={() => setActive(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-line bg-canvas p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge>{active.demoLabel}</Badge>
                  <Badge>{active.status}</Badge>
                </div>
                <h3 id="project-dialog-title" className="mt-3 font-serif text-3xl text-ink">
                  {active.name}
                </h3>
              </div>
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-full border border-line"
                onClick={() => setActive(null)}
                aria-label="Close project details"
              >
                <X size={16} />
              </button>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{active.longDescription}</p>
            <ul className="mt-5 space-y-2 text-sm text-ink">
              {active.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {active.stack.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
            {(active.liveUrl || active.sourceUrl) && (
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                {active.liveUrl ? (
                  <a
                    href={active.liveUrl}
                    className="font-semibold text-brass hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live URL
                  </a>
                ) : null}
                {active.sourceUrl ? (
                  <a
                    href={active.sourceUrl}
                    className="font-semibold text-ink hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source
                  </a>
                ) : null}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </section>
  )
}
