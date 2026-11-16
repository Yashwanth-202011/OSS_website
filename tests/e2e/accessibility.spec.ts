import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility & Keyboard Navigation Baseline (WCAG 2.2 AA)', () => {
  test('homepage passes automated axe accessibility scan with 0 violations', async ({
    page,
  }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('skip-to-content link functions via keyboard navigation', async ({
    page,
  }) => {
    await page.goto('/');

    // Press Tab once to reach skip-to-content link
    await page.keyboard.press('Tab');

    const skipLink = page.locator('a.skip-link');
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toHaveText('Skip to main content');

    // Press Enter to activate skip link
    await page.keyboard.press('Enter');

    // Focus should now be on main-content container
    const mainContent = page.locator('#main-content');
    await expect(mainContent).toBeFocused();
  });

  test('theme toggle is keyboard navigable and updates aria-label', async ({
    page,
  }) => {
    await page.goto('/');

    const toggleButton = page.locator('button[aria-label*="theme"]');
    await expect(toggleButton).toBeVisible();

    const initialLabel = await toggleButton.getAttribute('aria-label');
    await toggleButton.click();

    const newLabel = await toggleButton.getAttribute('aria-label');
    expect(newLabel).not.toBe(initialLabel);
  });

  test('mobile navigation menu traps focus and restores focus on Escape', async ({
    page,
  }) => {
    // Emulate mobile viewport (360x640)
    await page.setViewportSize({ width: 360, height: 640 });
    await page.goto('/');

    const menuButton = page.locator('button[aria-label*="navigation menu"]');
    await expect(menuButton).toBeVisible();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    // Open menu
    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    const mobileDialog = page.locator('#mobile-nav-dialog');
    await expect(mobileDialog).toBeVisible();

    // Verify first link in dialog is focused
    const firstLink = mobileDialog.locator('a').first();
    await expect(firstLink).toBeFocused();

    // Press Escape to dismiss menu
    await page.keyboard.press('Escape');

    // Menu dialog should close and focus must restore to menu button
    await expect(mobileDialog).not.toBeVisible();
    await expect(menuButton).toBeFocused();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});
