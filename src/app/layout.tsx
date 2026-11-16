import type { Metadata, Viewport } from 'next';
import React from 'react';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7F8F6' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0D0C' },
  ],
};

export const metadata: Metadata = {
  title: 'Open Source Software Club | Sai Vidya Institute of Technology',
  description:
    'Connecting student developers through open-source methodologies, workshops, and collaborative project development at Sai Vidya Institute of Technology.',
  icons: {
    icon: '/assets/brand/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  if (stored === 'light' || stored === 'dark') {
                    document.documentElement.setAttribute('data-theme', stored);
                  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg text-text antialiased">
        {/* WCAG 2.2 AA Skip to content landmark */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />

        <main
          id="main-content"
          tabIndex={-1}
          className="flex-1 focus:outline-none"
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
