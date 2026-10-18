import { useMemo, useState, type FormEvent } from 'react'
import { siteConfig } from '@/config/siteConfig'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

interface FormState {
  name: string
  email: string
  service: string
  budget: string
  description: string
  company: string
}

const initialState: FormState = {
  name: '',
  email: '',
  service: '',
  budget: '',
  description: '',
  company: '',
}

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {}
  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.service) {
    errors.service = 'Choose the service you need.'
  }
  if (values.description.trim().length < 20) {
    errors.description = 'Add a short project description (at least 20 characters).'
  }
  return errors
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [copied, setCopied] = useState(false)

  const composed = useMemo(() => {
    return [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Service: ${values.service}`,
      `Budget: ${values.budget || 'Not specified'}`,
      '',
      values.description,
    ].join('\n')
  }, [values])

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (values.company) {
      setStatus('success')
      return
    }

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      return
    }

    const subject = encodeURIComponent(`Project inquiry from ${values.name}`)
    const body = encodeURIComponent(composed)
    window.location.href = `mailto:${siteConfig.personal.email}?subject=${subject}&body=${body}`
    setStatus('success')
  }

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(composed)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const fieldClass =
    'mt-1.5 w-full rounded-xl border border-line bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/70'

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="hidden" hidden aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(event) => setValues((current) => ({ ...current, company: event.target.value }))}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Name
          <input
            className={fieldClass}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
          />
          {errors.name ? <span className="mt-1 block text-xs text-danger">{errors.name}</span> : null}
        </label>
        <label className="block text-sm font-medium text-ink">
          Email
          <input
            className={fieldClass}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
          />
          {errors.email ? <span className="mt-1 block text-xs text-danger">{errors.email}</span> : null}
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Service required
          <select
            className={fieldClass}
            name="service"
            value={values.service}
            onChange={(event) => setValues((current) => ({ ...current, service: event.target.value }))}
          >
            <option value="">Select a service</option>
            {siteConfig.services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
          {errors.service ? (
            <span className="mt-1 block text-xs text-danger">{errors.service}</span>
          ) : null}
        </label>
        <label className="block text-sm font-medium text-ink">
          Budget range
          <select
            className={fieldClass}
            name="budget"
            value={values.budget}
            onChange={(event) => setValues((current) => ({ ...current, budget: event.target.value }))}
          >
            <option value="">Optional</option>
            {siteConfig.contact.budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-ink">
        Project description
        <textarea
          className={cn(fieldClass, 'min-h-32 resize-y')}
          name="description"
          value={values.description}
          onChange={(event) =>
            setValues((current) => ({ ...current, description: event.target.value }))
          }
        />
        {errors.description ? (
          <span className="mt-1 block text-xs text-danger">{errors.description}</span>
        ) : null}
      </label>

      <p className="text-xs leading-relaxed text-ink-muted">
        This form opens your email app using mailto. No backend is configured yet, so nothing is stored
        on a server.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" className="sm:min-w-40">
          Send inquiry
        </Button>
        <Button type="button" variant="secondary" onClick={copyMessage}>
          {copied ? 'Message copied' : 'Copy message'}
        </Button>
      </div>

      {status === 'success' ? (
        <p className="rounded-xl border border-line bg-canvas px-3 py-3 text-sm text-moss" role="status">
          {siteConfig.contact.successMessage}
        </p>
      ) : null}
      {status === 'error' ? (
        <p className="text-sm text-danger" role="alert">
          Check the highlighted fields and try again.
        </p>
      ) : null}
    </form>
  )
}
