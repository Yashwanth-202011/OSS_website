import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import axe from 'axe-core';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import HomePage from '@/app/page';

describe('Axe Automated Accessibility Audit (WCAG 2.2 AA)', () => {
  it('Button primitive has zero accessibility violations', async () => {
    const { container } = render(
      <div>
        <Button variant="primary">Click Me</Button>
        <Button variant="secondary" disabled>
          Disabled Button
        </Button>
      </div>
    );
    const results = await axe.run(container);
    expect(results.violations).toEqual([]);
  });

  it('Header component has zero accessibility violations', async () => {
    const { container } = render(<Header />);
    const results = await axe.run(container);
    expect(results.violations).toEqual([]);
  });

  it('Footer component has zero accessibility violations', async () => {
    const { container } = render(<Footer />);
    const results = await axe.run(container);
    expect(results.violations).toEqual([]);
  });

  it('HomePage has zero accessibility violations and valid heading hierarchy', async () => {
    const { container } = render(<HomePage />);
    const results = await axe.run(container);
    expect(results.violations).toEqual([]);
  });
});
