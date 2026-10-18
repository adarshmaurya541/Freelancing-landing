import { useEffect } from 'react'
import { siteConfig } from '@/config/siteConfig'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  if (!content) {
    return
  }
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  if (!href) {
    return
  }
  let tag = document.head.querySelector(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

export function Seo({
  title,
  description,
  path = '/',
}: {
  title?: string
  description?: string
  path?: string
}) {
  useEffect(() => {
    const nextTitle = title ?? siteConfig.seo.title
    const nextDescription = description ?? siteConfig.seo.description
    const canonical = siteConfig.seo.siteUrl
      ? `${siteConfig.seo.siteUrl.replace(/\/$/, '')}${path}`
      : ''

    document.title = nextTitle
    upsertMeta('name', 'description', nextDescription)
    upsertMeta('property', 'og:title', nextTitle)
    upsertMeta('property', 'og:description', nextDescription)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('name', 'twitter:card', 'summary')
    upsertMeta('name', 'twitter:title', nextTitle)
    upsertMeta('name', 'twitter:description', nextDescription)

    if (canonical) {
      upsertMeta('property', 'og:url', canonical)
      upsertLink('canonical', canonical)
    }
    if (siteConfig.seo.ogImage) {
      upsertMeta('property', 'og:image', siteConfig.seo.ogImage)
    }
  }, [title, description, path])

  return null
}
