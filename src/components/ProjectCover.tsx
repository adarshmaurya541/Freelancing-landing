import type { Project } from '@/config/types'

export function ProjectCover({ cover, name }: { cover: Project['cover']; name: string }) {
  if (cover === 'atelier') {
    return (
      <div
        className="relative h-48 overflow-hidden bg-[#e4dccb] text-[#2b261f]"
        aria-hidden="true"
      >
        <div className="absolute inset-6 border border-[#2b261f]/20" />
        <div className="absolute left-10 top-10 h-20 w-16 bg-[#8b5a3c]/80" />
        <div className="absolute bottom-8 right-10 h-24 w-28 bg-[#2b261f]" />
        <div className="absolute bottom-8 right-[7.5rem] h-16 w-12 bg-[#c4b79a]" />
        <p className="absolute left-8 bottom-6 font-serif text-lg">{name}</p>
      </div>
    )
  }

  if (cover === 'lumen') {
    return (
      <div className="relative h-48 overflow-hidden bg-[#10110f] text-[#e8f5a8]" aria-hidden="true">
        <div className="absolute -right-6 -top-8 size-32 rounded-full border border-[#e8f5a8]/30" />
        <div className="absolute bottom-0 left-0 h-1 w-full bg-[#e8f5a8]" />
        <p className="absolute left-6 top-8 font-serif text-4xl leading-none">Lm</p>
        <p className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.25em]">{name}</p>
      </div>
    )
  }

  return (
    <div className="relative h-48 overflow-hidden bg-[#111827] text-[#dbeafe]" aria-hidden="true">
      <div className="absolute inset-x-8 top-8 grid grid-cols-3 gap-2">
        <div className="h-16 rounded-lg bg-[#1d4ed8]/70" />
        <div className="h-16 rounded-lg bg-[#1e293b]" />
        <div className="h-16 rounded-lg bg-[#334155]" />
      </div>
      <div className="absolute inset-x-8 bottom-8 h-12 rounded-lg bg-white/10" />
      <p className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-widest">
        {name}
      </p>
    </div>
  )
}
