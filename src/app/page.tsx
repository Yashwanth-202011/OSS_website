import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Code2,
  Users,
  Calendar,
  Sparkles,
  CheckCircle2,
  GitPullRequest,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  const featuredProjects = [
    {
      title: 'OSS Website & Portal',
      description:
        'Official digital presence for the OSS Club built with Next.js, TypeScript strict, and Supabase integration.',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'A11y'],
      difficulty: 'Intermediate',
      href: 'https://github.com/Open-Source-Software-Club/OSS_website',
    },
    {
      title: 'Campus Hackathon Hub',
      description:
        'Real-time coordination platform for university hackathons with automated team formation and submission evaluation.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      difficulty: 'Beginner Friendly',
      href: 'https://github.com/Open-Source-Software-Club',
    },
    {
      title: 'Student Open Source Kit',
      description:
        'Curated templates, CLI workflows, and interactive guides to help first-year students make their first Git commit.',
      tags: ['Git', 'Shell', 'Documentation'],
      difficulty: 'Beginner',
      href: 'https://github.com/Open-Source-Software-Club',
    },
  ];

  const upcomingEvents = [
    {
      date: 'Dec 05, 2026',
      time: '3:00 PM IST',
      title: 'Git & GitHub Fundamentals for Beginners',
      location: 'Seminar Hall 2 / Online',
      status: 'RSVP Open',
    },
    {
      date: 'Dec 12, 2026',
      time: '4:30 PM IST',
      title: 'Building Accessible Web Apps (WCAG 2.2 AA)',
      location: 'Lab 4 / SVIT Campus',
      status: 'Registration Upcoming',
    },
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24 py-8 md:py-16">
      {/* 1. Hero Section */}
      <section
        aria-labelledby="hero-title"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (Editorial content) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-border w-fit">
              <span
                className="w-2 h-2 rounded-full bg-brand animate-pulse"
                aria-hidden="true"
              />
              <span className="text-xs font-mono tracking-wider uppercase text-text-muted">
                OSS CLUB · SAI VIDYA INSTITUTE OF TECHNOLOGY
              </span>
            </div>

            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-text tracking-tight leading-[1.15]"
            >
              Read the source.
              <br />
              <span className="text-brand">Then write the next commit.</span>
            </h1>

            <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
              We are a student-led collective empowering engineers to master
              real-world software collaboration. Learn Git workflows, contribute
              to production codebases, and build meaningful open-source projects
              together.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="#contribute">
                <Button variant="primary" size="md">
                  <span>Start Contributing</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="#projects">
                <Button variant="secondary" size="md">
                  <span>Browse Projects</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Live Terminal Style Panel */}
          <div className="lg:col-span-5 w-full">
            <div
              className="rounded-lg border border-border bg-surface p-6 shadow-lg relative overflow-hidden"
              aria-label="Recent Repository Activity"
            >
              <div className="flex items-center justify-between border-b border-border pb-3 mb-4 text-xs font-mono text-text-muted">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full bg-danger/80"
                    aria-hidden="true"
                  />
                  <div
                    className="w-2.5 h-2.5 rounded-full bg-warn/80"
                    aria-hidden="true"
                  />
                  <div
                    className="w-2.5 h-2.5 rounded-full bg-brand/80"
                    aria-hidden="true"
                  />
                  <span className="ml-2 font-semibold text-text">
                    live-sync.sh
                  </span>
                </div>
                <span className="text-brand flex items-center gap-1">
                  <Sparkles className="w-3 h-3" aria-hidden="true" /> Synced
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-start gap-2.5 text-text">
                  <span className="text-brand shrink-0">merged</span>
                  <span className="text-text-muted shrink-0">#49</span>
                  <span className="truncate">
                    feat(ci): add hardened PR reviewer
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-text">
                  <span className="text-info shrink-0">opened</span>
                  <span className="text-text-muted shrink-0">#47</span>
                  <span className="truncate">
                    WCAG 2.2 AA accessibility audit baseline
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-text">
                  <span className="text-brand shrink-0">merged</span>
                  <span className="text-text-muted shrink-0">#14</span>
                  <span className="truncate">
                    feat(ci): branch-protection rulesets
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-text">
                  <span className="text-warn shrink-0">commit</span>
                  <span className="text-text-muted shrink-0">66b7ef</span>
                  <span className="truncate">
                    docs: implementation PRD specification
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span>Branch: main</span>
                <span className="text-brand">All checks passing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Manifesto Section */}
      <section
        id="manifesto"
        aria-labelledby="manifesto-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="rounded-xl border border-border bg-surface p-8 sm:p-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">
              § 01 — OUR MANIFESTO
            </span>
            <h2
              id="manifesto-heading"
              className="text-3xl sm:text-4xl font-serif font-bold text-text mt-3 mb-6"
            >
              Software is written by people, for people.
            </h2>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-6">
              In university, tutorials show how code works in isolation. Open
              source shows how software survives in the wild: through pull
              request discussions, automated continuous integration, careful
              architectural stewardship, and deep empathy for users and fellow
              maintainers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-border">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-semibold text-text">
                  Radical Transparency
                </h3>
                <p className="text-xs text-text-muted">
                  Every decision, review, and milestone is documented in public
                  issue trackers.
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-semibold text-text">
                  Accessibility First
                </h3>
                <p className="text-xs text-text-muted">
                  Full WCAG 2.2 AA compliance ensures every student can
                  participate equally.
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-semibold text-text">
                  Continuous Mentorship
                </h3>
                <p className="text-xs text-text-muted">
                  Senior club members review code kindly and help beginners
                  overcome imposter syndrome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects Section */}
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">
                § 02 — FEATURED WORK
              </span>
              <h2
                id="projects-heading"
                className="text-3xl sm:text-4xl font-serif font-bold text-text mt-2"
              >
                Projects built in the open
              </h2>
            </div>
            <a
              href="https://github.com/Open-Source-Software-Club"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 rounded-sm"
            >
              <span>View all on GitHub</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">(opens in new tab)</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 rounded-lg border border-border bg-surface hover:border-border-strong transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className="text-text-muted">PRD Verified</span>
                    <span className="px-2 py-0.5 rounded-full bg-surface-2 text-brand border border-border">
                      {project.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div
                    className="flex flex-wrap gap-1.5 mb-5"
                    aria-label="Technologies used"
                  >
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-2 text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-text hover:text-brand focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 rounded-sm"
                  >
                    <span>View Repository</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    <span className="sr-only">
                      for {project.title} (opens in new tab)
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Events Section */}
      <section
        id="events"
        aria-labelledby="events-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">
              § 03 — GATHERINGS
            </span>
            <h2
              id="events-heading"
              className="text-3xl sm:text-4xl font-serif font-bold text-text mt-2"
            >
              Upcoming Workshops &amp; Hack Nights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((evt, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-surface flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="flex flex-col items-center justify-center bg-surface-2 border border-border rounded p-3 min-w-[90px] text-center">
                  <Calendar
                    className="w-5 h-5 text-brand mb-1"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-mono font-bold text-text">
                    {evt.date.split(',')[0]}
                  </span>
                  <span className="text-[11px] font-mono text-text-muted">
                    {evt.time}
                  </span>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2 py-0.5 text-xs font-mono text-brand bg-brand/10 rounded mb-2">
                      {evt.status}
                    </span>
                    <h3 className="text-lg font-bold text-text mb-1">
                      {evt.title}
                    </h3>
                    <p className="text-sm text-text-muted">{evt.location}</p>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" size="sm">
                      <span>RSVP Details</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contribute / Call to Action Section */}
      <section
        id="contribute"
        aria-labelledby="contribute-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8"
      >
        <div className="rounded-xl border border-border bg-surface-2 p-8 sm:p-12 text-center flex flex-col items-center gap-6">
          <div className="p-3 rounded-full bg-brand/10 border border-brand/20 text-brand">
            <GitPullRequest className="w-8 h-8" aria-hidden="true" />
          </div>

          <div className="max-w-2xl">
            <h2
              id="contribute-heading"
              className="text-3xl sm:text-4xl font-serif font-bold text-text mb-3"
            >
              Ready to make your first contribution?
            </h2>
            <p className="text-base text-text-muted leading-relaxed">
              Whether you are fixing a typo in documentation, improving
              accessibility contrast ratios, or proposing a full architectural
              feature, there is a place for you in our community.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Open-Source-Software-Club/OSS_website/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg">
                <span>Explore Good First Issues</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                <span className="sr-only">(opens in new tab)</span>
              </Button>
            </a>
            <Link href="/CONTRIBUTING.md">
              <Button variant="outline" size="lg">
                <span>Read Contributing Guide</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
