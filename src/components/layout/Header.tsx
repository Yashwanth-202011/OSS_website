'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on Esc key and restore focus to menu button
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!isMobileMenuOpen) return;

      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }

      // Focus trap within mobile menu
      if (event.key === 'Tab' && mobileNavRef.current) {
        const focusableElements =
          mobileNavRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Automatically focus first link in mobile menu on open
      const firstLink = mobileNavRef.current?.querySelector<HTMLElement>('a');
      firstLink?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#manifesto', label: 'Manifesto' },
    { href: '#events', label: 'Events' },
    { href: '#contribute', label: 'Contribute' },
  ];

  return (
    <header
      role="banner"
      className="sticky top-0 z-40 w-full border-b border-border bg-bg/95 backdrop-blur-md transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 rounded-sm p-1"
            aria-label="Open Source Software Club Homepage"
          >
            <Image
              src="/assets/brand/logo.png"
              alt="OSS Club Logo - Sai Vidya Institute of Technology"
              width={36}
              height={36}
              priority
              className="w-9 h-9 object-contain rounded-sm"
            />
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-text leading-tight">
                OSS Club
              </span>
              <span className="text-[11px] font-mono text-text-muted tracking-wider uppercase">
                SVIT Bangalore
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-text transition-colors py-2 px-1 rounded-sm focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile Menu Trigger */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-dialog"
            aria-label={
              isMobileMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            className="md:hidden inline-flex items-center justify-center p-2 rounded-sm text-text hover:bg-surface-2 border border-border focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 min-w-[44px] min-h-[44px] cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          ref={mobileNavRef}
          className="md:hidden fixed inset-x-0 top-16 bg-surface border-b border-border shadow-lg p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <nav aria-label="Mobile Menu Links" className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  menuButtonRef.current?.focus();
                }}
                className="text-lg font-medium text-text py-2 px-3 rounded hover:bg-surface-2 transition-colors focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
