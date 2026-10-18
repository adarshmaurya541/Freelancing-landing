import { siteConfig } from '@/config/siteConfig'

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg overflow-hidden">
      <div className="absolute inset-0 rounded-[2rem] bg-brass/10 blur-2xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[1.6rem] border border-line bg-canvas-raised shadow-[var(--shadow)]">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#c9846a]" />
          <span className="size-2.5 rounded-full bg-[#d4b57a]" />
          <span className="size-2.5 rounded-full bg-[#7f9d7a]" />
          <p className="ml-2 font-mono text-[11px] text-ink-muted">workspace / client-preview</p>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-xl border border-line bg-canvas p-4">
            <p className="font-mono text-[11px] uppercase tracking-widest text-brass">Build</p>
            <div className="mt-3 space-y-2 font-mono text-[11px] leading-5 text-ink-muted">
              <p>
                <span className="text-moss">const</span> scope = {'{'} pages, api, bot {'}'}
              </p>
              <p>
                <span className="text-moss">return</span> ship(scope)
              </p>
              <p className="text-ink">// reviews every week</p>
            </div>
          </div>
          <div className="rounded-xl border border-line bg-canvas p-4">
            <p className="font-mono text-[11px] uppercase tracking-widest text-brass">Telegram</p>
            <div className="mt-3 space-y-2">
              <div className="rounded-2xl rounded-tl-sm bg-line/70 px-3 py-2 text-xs text-ink">
                {siteConfig.telegramBot.name}
              </div>
              <div className="ml-6 rounded-2xl rounded-tr-sm bg-brass/15 px-3 py-2 text-xs text-ink">
                {siteConfig.telegramBot.userCountLabel}
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-line bg-canvas p-4 sm:col-span-2">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-ink">Delivery board</p>
              <span className="font-mono text-[11px] text-moss">on track</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {['Discovery', 'Build', 'Handoff'].map((stage, index) => (
                <div key={stage} className="rounded-lg bg-canvas-raised px-2 py-3 text-center">
                  <p className="font-mono text-[10px] text-ink-muted">0{index + 1}</p>
                  <p className="mt-1 text-xs font-medium text-ink">{stage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
