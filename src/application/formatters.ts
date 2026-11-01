/**
 * Pure formatters and calculation utilities.
 */

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('id-ID').format(num);
}

export function formatPercentage(val: number): string {
  return `${val.toFixed(1)}%`;
}

export function calculateDropOffRatio(current: number, previous: number): number {
  if (previous === 0) return 0;
  const ratio = ((previous - current) / previous) * 100;
  return Math.max(0, Math.min(100, ratio));
}

