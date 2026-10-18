import { useState } from 'react'
import { X } from 'lucide-react'
import { siteConfig } from '@/config/siteConfig'
import { Container } from '@/components/ui/Container'

export function ConfigHint() {
  const [visible, setVisible] = useState(siteConfig.ui.showConfigHints)

  if (!visible) {
    return null
  }

  return (
    <div className="border-b border-line bg-canvas-raised">
      <Container className="flex items-start justify-between gap-3 py-2.5">
        <p className="text-xs leading-relaxed text-ink-muted">
          Placeholder details are still in{' '}
          <code className="font-mono text-ink">src/config/siteConfig.ts</code> and{' '}
          <code className="font-mono text-ink">src/config/projects.ts</code>. Set{' '}
          <code className="font-mono text-ink">ui.showConfigHints</code> to false when you publish.
        </p>
        <button
          type="button"
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-ink-muted hover:text-ink"
          onClick={() => setVisible(false)}
          aria-label="Dismiss configuration hint"
        >
          <X size={14} />
        </button>
      </Container>
    </div>
  )
}
