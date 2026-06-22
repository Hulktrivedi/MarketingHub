import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { Stats } from '@/components/sections/Stats'
import { CTABlock } from '@/components/sections/CTABlock'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'MarketingHub is a dedicated IT services and digital marketing company committed to helping businesses embrace digital transformation. Learn about our mission, values, and approach.',
  openGraph: {
    title: 'About Us | MarketingHub',
    description:
      'Your trusted technology partner — empowering businesses with innovative digital solutions that drive growth, efficiency, and lasting success.',
  },
}

const values = [
  {
    title: 'Innovation',
    description:
      'We stay at the forefront of technology and marketing trends, continuously exploring new approaches to deliver better outcomes for our clients.',
  },
  {
    title: 'Integrity',
    description:
      'We operate with complete honesty and transparency. No black boxes, no vague reporting — full visibility into strategy, execution, and performance at all times.',
  },
  {
    title: 'Excellence',
    description:
      'We hold our work to an exceptionally high standard across every deliverable. Mediocrity is never an option — because the businesses we serve deserve nothing less.',
  },
  {
    title: 'Customer Satisfaction',
    description:
      'Your success is our success. We measure our performance by the tangible, documented impact we create on your business — not vanity metrics.',
  },
  {
    title: 'Transparency',
    description:
      'We communicate clearly, report honestly, and involve you at every step. You always know exactly where your investment is going and what it is achieving.',
  },
  {
    title: 'Continuous Improvement',
    description:
      'We measure, test, and iterate continuously — scaling what works and refining what doesn\'t. Your results compound over time because we never stop improving.',
  },
]

const whyChooseUs = [
  {
    title: 'Experienced Team',
    description:
      'Our team brings deep expertise across web development, digital marketing, design, and IT consulting — so every project benefits from seasoned specialists.',
  },
  {
    title: 'Customized Solutions',
    description:
      'We never use a one-size-fits-all approach. Every solution is designed around your specific goals, industry, audience, and budget.',
  },
  {
    title: 'Affordable Pricing',
    description:
      'World-class results shouldn\'t be out of reach. We deliver exceptional quality at pricing structures that make sense for businesses at every stage.',
  },
  {
    title: 'Timely Delivery',
    description:
      'We respect your timelines and business priorities. Projects are delivered on schedule — without compromising on quality.',
  },
  {
    title: 'Transparent Communication',
    description:
      'You are never left wondering about progress. We maintain clear, regular communication throughout every engagement.',
  },
  {
    title: 'Customer-Centric Approach',
    description:
      'Everything we do starts and ends with your business goals. We are a genuine extension of your team, not just a vendor.',
  },
  {
    title: 'Ongoing Support',
    description:
      'Our commitment extends beyond project delivery. We provide continuous support and improvement to ensure long-term success.',
  },
]

const industries = [
  'Restaurants & Cafes',
  'Hotels & Hospitality',
  'Healthcare',
  'Retail & E-Commerce',
  'Education',
  'Real Estate',
  'Manufacturing',
  'Logistics',
  'Finance',
  'Startups',
  'Professional Services',
  'Local Businesses',
]

const team = [
  { name: 'Placeholder', role: 'Chief Executive Officer' },
  { name: 'Placeholder', role: 'Head of Technology' },
  { name: 'Placeholder', role: 'Creative Director' },
  { name: 'Placeholder', role: 'Head of Digital Marketing' },
  { name: 'Placeholder', role: 'Head of SEO' },
  { name: 'Placeholder', role: 'Head of Content' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title={
          <>
            Your Trusted
            <br />
            Technology Partner.
          </>
        }
        subtitle="We are a dedicated IT services and digital marketing company committed to helping businesses embrace digital transformation and achieve lasting growth."
      />

      {/* Mission & Vision */}
      <section className="bg-white py-32 lg:py-44">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-black" aria-hidden="true" />
                <span className="font-body text-xs font-medium uppercase tracking-[0.2em]">
                  Our Mission
                </span>
              </div>
              <p className="font-display text-2xl font-bold uppercase leading-[1.1] tracking-tight text-black md:text-3xl lg:text-4xl">
                To empower businesses with innovative technology solutions that
                drive growth, efficiency, and digital success.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-black" aria-hidden="true" />
                <span className="font-body text-xs font-medium uppercase tracking-[0.2em]">
                  Our Vision
                </span>
              </div>
              <p className="font-display text-2xl font-bold uppercase leading-[1.1] tracking-tight text-black md:text-3xl lg:text-4xl">
                To become a trusted global technology partner known for
                delivering exceptional digital solutions and outstanding
                customer service.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-20 border-t border-black/10 pt-20">
            <div className="max-w-3xl">
              <p className="font-body text-base leading-relaxed text-black/60">
                With expertise in web technologies, software development, digital
                marketing, and business automation, we provide comprehensive
                solutions tailored to our clients&apos; unique needs. We serve
                businesses of every size — from local startups to established
                enterprises — with the same commitment to quality and results.
              </p>
              <p className="mt-5 font-body text-base leading-relaxed text-black/60">
                Our focus is always on delivering measurable business results and
                long-term success. Every solution we build is reliable, scalable,
                and designed to grow with your business.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-black py-32 lg:py-44">
        <Container>
          <Reveal className="mb-16">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Our Values
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight text-white lg:text-5xl">
              How We Operate.
            </h2>
          </Reveal>

          <Reveal
            stagger
            className="grid grid-cols-1 gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3"
          >
            {values.map((value) => (
              <div key={value.title} className="group bg-black p-8 lg:p-10">
                <div
                  className="mb-5 h-0.5 w-8 bg-accent/40 transition-all duration-300 group-hover:w-12 group-hover:bg-accent"
                  aria-hidden="true"
                />
                <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
                  {value.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-white/50">
                  {value.description}
                </p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Stats */}
      <Stats />

      {/* Why Choose Us */}
      <section className="bg-white py-32 lg:py-44">
        <Container>
          <Reveal className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-black" aria-hidden="true" />
                <span className="font-body text-xs font-medium uppercase tracking-[0.2em]">
                  Why Choose Us
                </span>
              </div>
              <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight lg:text-5xl">
                Built for Your
                <br />
                Success.
              </h2>
            </div>
            <p className="max-w-xs font-body text-sm leading-relaxed text-black/55 lg:text-right">
              Our focus is on delivering measurable business results and
              long-term success for every client we serve.
            </p>
          </Reveal>

          <Reveal
            stagger
            className="grid grid-cols-1 gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group relative bg-white p-8 transition-colors duration-300 hover:bg-gray-100"
              >
                <div
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <h3 className="font-display text-sm font-bold uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-black/55">
                  {item.description}
                </p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Industries We Serve */}
      <section className="bg-gray-100 py-32 lg:py-44">
        <Container>
          <Reveal className="mb-14">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-black" aria-hidden="true" />
              <span className="font-body text-xs font-medium uppercase tracking-[0.2em]">
                Industries We Serve
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight lg:text-5xl">
              Expertise Across
              <br />
              Every Sector.
            </h2>
          </Reveal>

          <Reveal
            stagger
            className="grid grid-cols-2 gap-px bg-black/10 sm:grid-cols-3 lg:grid-cols-4"
          >
            {industries.map((industry) => (
              <div
                key={industry}
                className="group relative bg-gray-100 p-6 transition-colors duration-300 hover:bg-white"
              >
                <div
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <p className="font-display text-sm font-bold uppercase tracking-wide">
                  {industry}
                </p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Team */}
      <section className="bg-white py-32 lg:py-44">
        <Container>
          <Reveal className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-black" aria-hidden="true" />
                <span className="font-body text-xs font-medium uppercase tracking-[0.2em]">
                  Our Team
                </span>
              </div>
              <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight lg:text-5xl">
                The People
                <br />
                Behind the Work.
              </h2>
            </div>
            <p className="max-w-xs font-body text-sm leading-relaxed text-black/55 lg:text-right">
              Team profiles and photography coming soon.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {team.map((member, i) => (
              <div key={i} className="group text-center">
                <div className="mx-auto flex aspect-square w-full flex-col items-center justify-center gap-2 bg-gray-100 transition-colors group-hover:bg-gray-200">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black/15"
                    aria-hidden="true"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="mt-3 font-display text-xs font-bold uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="mt-1 font-body text-xs text-black/45">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABlock />
    </>
  )
}
