import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function NotFound() {
  return (
    <section className="py-24">
      <Seo title="Page not found" description="The page you requested does not exist." path="/404" />
      <Container className="max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-brass">404</p>
        <h1 className="mt-3 font-serif text-4xl text-ink">This page is not part of the site.</h1>
        <p className="mt-4 text-ink-muted">The address may be outdated or typed incorrectly.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/#portfolio" variant="secondary">
            View portfolio
          </Button>
        </div>
      </Container>
    </section>
  )
}
