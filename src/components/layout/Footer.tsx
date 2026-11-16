import React from 'react';
import Link from 'next/link';
import { ExternalLink, Github, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="mt-auto border-t border-border bg-surface py-12 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h2 className="text-lg font-bold text-text tracking-tight">
              Open Source Software Club
            </h2>
            <p className="text-sm text-text-muted max-w-md">
              Sai Vidya Institute of Technology, Bangalore. Fostering a culture
              of collaboration, peer learning, and real-world software
              contributions.
            </p>
            <p className="text-xs text-text-muted font-mono flex items-center gap-1.5 mt-2">
              <span>Built with care</span>
              <Heart
                className="w-3.5 h-3.5 text-danger inline"
                aria-hidden="true"
              />
              <span>for student developers</span>
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-3 font-semibold">
              Explore
            </h3>
            <nav
              aria-label="Footer Navigation - Explore"
              className="flex flex-col gap-2"
            >
              <Link
                href="#projects"
                className="text-sm text-text-muted hover:text-text transition-colors py-1 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 rounded-sm"
              >
                Projects
              </Link>
              <Link
                href="#manifesto"
                className="text-sm text-text-muted hover:text-text transition-colors py-1 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 rounded-sm"
              >
                Manifesto
              </Link>
              <Link
                href="#events"
                className="text-sm text-text-muted hover:text-text transition-colors py-1 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 rounded-sm"
              >
                Events &amp; Workshops
              </Link>
              <Link
                href="#contribute"
                className="text-sm text-text-muted hover:text-text transition-colors py-1 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 rounded-sm"
              >
                Contribute
              </Link>
            </nav>
          </div>

          {/* Column 3: Community & External Links */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-3 font-semibold">
              Community
            </h3>
            <nav
              aria-label="Footer Navigation - Community"
              className="flex flex-col gap-2"
            >
              <a
                href="https://github.com/Open-Source-Software-Club/OSS_website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors py-1 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 rounded-sm"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>GitHub Repository</span>
                <ExternalLink
                  className="w-3 h-3 ml-0.5 opacity-70"
                  aria-hidden="true"
                />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <a
                href="https://saividya.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors py-1 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 rounded-sm"
              >
                <span>SVIT Official Site</span>
                <ExternalLink
                  className="w-3 h-3 ml-0.5 opacity-70"
                  aria-hidden="true"
                />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <Link
                href="/CODE_OF_CONDUCT.md"
                className="text-sm text-text-muted hover:text-text transition-colors py-1 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 rounded-sm"
              >
                Code of Conduct
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-text-muted">
          <p>
            © {new Date().getFullYear()} OSS Club, Sai Vidya Institute of
            Technology. Released under MIT License.
          </p>
          <p className="font-mono">WCAG 2.2 AA Compliant · Zero Layout Shift</p>
        </div>
      </div>
    </footer>
  );
}
