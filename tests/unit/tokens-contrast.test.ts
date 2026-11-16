import { describe, it, expect } from 'vitest';

/**
 * WCAG 2.2 Relative Luminance and Contrast Ratio Calculation
 * Formula:
 *   L = 0.2126 * R + 0.7152 * G + 0.0722 * B
 *   where channel = c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
 *   Contrast Ratio = (L1 + 0.05) / (L2 + 0.05) where L1 > L2
 */

function hexToRgb(hex: string): [number, number, number] {
  const cleanHex = hex.replace('#', '');
  const bigint = parseInt(cleanHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

function getLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map((c) => {
    const sRGB = c / 255;
    return sRGB <= 0.04045
      ? sRGB / 12.92
      : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getContrastRatio(hex1: string, hex2: string): number {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const brighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (brighter + 0.05) / (darker + 0.05);
}

describe('Design Tokens WCAG 2.2 AA Contrast Ratios', () => {
  describe('Dark Mode Palette', () => {
    const darkTokens = {
      bg: '#0B0D0C',
      surface: '#121614',
      surface2: '#181D1A',
      text: '#E8EDEA',
      textMuted: '#93A09A',
      textFaint: '#5E6A64',
      brand: '#22C55E',
      brandInk: '#052E16',
      focus: '#7CE3A6',
    };

    it('achieves >= 4.5:1 contrast for body text against dark background', () => {
      const ratio = getContrastRatio(darkTokens.text, darkTokens.bg);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
      expect(ratio).toBeGreaterThan(15); // typically ~16:1
    });

    it('achieves >= 4.5:1 contrast for muted text against dark background', () => {
      const ratio = getContrastRatio(darkTokens.textMuted, darkTokens.bg);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
    });

    it('achieves >= 4.5:1 contrast for body text against dark surface', () => {
      const ratio = getContrastRatio(darkTokens.text, darkTokens.surface);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
    });

    it('achieves >= 3:1 contrast for focus indicator against dark background', () => {
      const ratio = getContrastRatio(darkTokens.focus, darkTokens.bg);
      expect(ratio).toBeGreaterThanOrEqual(3.0);
    });

    it('achieves >= 4.5:1 contrast for primary button text against brand green', () => {
      const ratio = getContrastRatio(darkTokens.brandInk, darkTokens.brand);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
    });
  });

  describe('Light Mode Palette', () => {
    const lightTokens = {
      bg: '#F7F8F6',
      surface: '#FFFFFF',
      surface2: '#EFF2EF',
      text: '#101412',
      textMuted: '#38443E',
      brand: '#15803D',
      brandInk: '#FFFFFF',
      focus: '#15803D',
    };

    it('achieves >= 4.5:1 contrast for body text against light background', () => {
      const ratio = getContrastRatio(lightTokens.text, lightTokens.bg);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
      expect(ratio).toBeGreaterThan(15);
    });

    it('achieves >= 4.5:1 contrast for muted text against light background', () => {
      const ratio = getContrastRatio(lightTokens.textMuted, lightTokens.bg);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
    });

    it('achieves >= 3:1 contrast for focus indicator against light background', () => {
      const ratio = getContrastRatio(lightTokens.focus, lightTokens.bg);
      expect(ratio).toBeGreaterThanOrEqual(3.0);
    });

    it('achieves >= 4.5:1 contrast for button text against brand green', () => {
      const ratio = getContrastRatio(lightTokens.brandInk, lightTokens.brand);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
    });
  });
});
