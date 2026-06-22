import type { MetadataRoute } from 'next'
import { services } from '@/lib/services'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://marketinghub.com'

type ChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'

const staticRoutes: Array<{
  path: string
  priority: number
  changeFrequency: ChangeFrequency
}> = [
  { path: '', priority: 1.0, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/portfolio', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))

  const serviceEntries = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.85,
  }))

  return [...staticEntries, ...serviceEntries]
}
