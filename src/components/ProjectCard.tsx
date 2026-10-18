import type { Project } from '@/config/types'
import { Badge } from '@/components/ui/Badge'
import { ProjectCover } from '@/components/ProjectCover'

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (project: Project) => void
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-canvas-raised shadow-[var(--shadow)] transition-colors duration-200 hover:border-brass">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="flex h-full flex-col text-left"
      >
        <ProjectCover cover={project.cover} name={project.name} />
        <div className="flex flex-1 flex-col p-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{project.demoLabel}</Badge>
            <Badge>{project.category}</Badge>
            <Badge>{project.status}</Badge>
          </div>
          <h3 className="mt-4 font-serif text-2xl text-ink">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
          <p className="mt-auto pt-5 text-sm font-semibold text-brass">View details</p>
        </div>
      </button>
    </article>
  )
}
