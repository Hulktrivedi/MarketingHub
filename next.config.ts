import type { NextConfig } from 'next'
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/*
 * Content Security Policy
 *
 * script-src requires 'unsafe-inline' because Next.js App Router injects
 * inline hydration scripts in static builds. Nonce-based CSP (the stricter
 * alternative) requires dynamic rendering and breaks static generation.
 * Upgrade to nonces + Middleware when the site moves to SSR or Edge Runtime.
 *
 * All other directives are strict: no external sources, no object embedding,
 * no framing, forced HTTPS, restricted form targets.
 */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob:;
  font-src 'self';
  connect-src 'self';
  media-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, ' ')
  .trim()

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy,
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    // Kept as fallback for browsers that don't support CSP frame-ancestors
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // X-XSS-Protection intentionally omitted: deprecated, removed from Chrome v78+,
  // and can introduce XSS vulnerabilities in legacy IE. CSP is the modern replacement.
]

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Image optimisation
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Turbopack root — suppresses false-positive workspace warning when a
  // parent directory also contains a lockfile (WSL / monorepo environments).
  turbopack: {
    root: __dirname,
  },

  // Experimental features
  experimental: {
    optimizePackageImports: ['clsx', 'tailwind-merge'],
    viewTransition: true,
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

export default withBundleAnalyzer(nextConfig)
