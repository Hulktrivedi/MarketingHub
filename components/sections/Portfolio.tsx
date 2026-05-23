import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

interface Project {
  category: string
  title: string
  tags: string[]
  gradient: string
}

const projects: Project[] = [
  {
    category: 'Brand Identity',
    title: 'Client Project — Coming Soon',
    tags: ['Strategy', 'Visual Identity', 'Guidelines'],
    gradient: 'from-white/[0.04] to-white/[0.01]',
  },
  {
    category: 'Digital Marketing',
    title: 'Client Project — Coming Soon',
    tags: ['Paid Media', 'SEO', 'Analytics'],
    gradient: 'from-accent/[0.06] to-white/[0.01]',
  },
  {
    category: 'Content Creation',
    title: 'Client Project — Coming Soon',
    tags: ['Copy', 'Creative', 'Social'],
    gradient: 'from-white/[0.06] to-accent/[0.03]',
  },
  {
    category: 'SEO & Analytics',
    title: 'Client Project — Coming Soon',
    tags: ['Technical SEO', 'CRO', 'Reporting'],
    gradient: 'from-accent/[0.04] to-white/[0.02]',
  },
  {
    category: 'Paid Media',
    title: 'Client Project — Coming Soon',
    tags: ['Google Ads', 'Meta', 'LinkedIn'],
    gradient: 'from-white/[0.05] to-white/[0.01]',
  },
  {
    category: 'Social Media',
    title: 'Client Project — Coming Soon',
    tags: ['Community', 'Campaigns', 'Growth'],
    gradient: 'from-accent/[0.05] to-white/[0.02]',
  },
]

export function Portfolio({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section id="portfolio" className="bg-black py-24 lg:py-32">
      <Container>
        {/* Section header */}
        {showHeader && (
          <Reveal className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-accent" aria-hidden="true" />
                <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Our Work
                </span>
              </div>
              <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight text-white lg:text-5xl">
                Results That
                <br />
                Speak.
              </h2>
            </div>
            <Button href="/portfolio" variant="ghost" size="md">
              View All Work
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </Button>
          </Reveal>
        )}

        {/* Projects grid */}
        <Reveal stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article
              key={`${project.category}-${i}`}
              className="group cursor-pointer"
              aria-label={`${project.category}: ${project.title}`}
            >
              {/* Image placeholder */}
              <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.04]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-accent/0 transition-all duration-300 group-hover:bg-accent/95">
                  <span className="translate-y-3 font-body text-xs font-medium uppercase tracking-[0.15em] text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View Project
                  </span>
                  <span
                    className="translate-y-3 font-display text-lg font-bold text-black opacity-0 transition-all delay-[30ms] duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </div>

              {/* Project info */}
              <div className="mt-5">
                <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-accent">
                  {project.category}
                </span>
                <h3 className="mt-1.5 font-display text-base font-bold uppercase tracking-tight text-white">
                  {project.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[10px] uppercase tracking-wide text-white/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
