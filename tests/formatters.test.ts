import { describe, expect, it } from 'bun:test';
import {
  formatNumber,
  formatPercentage,
  calculateDropOffRatio,
} from '../src/application/formatters';
import { BENCHMARK_THRESHOLDS } from '../src/domain/constants';

describe('formatters', () => {
  it('should format numbers with Indonesian locale separators', () => {
    const formatted = formatNumber(1000000);
    // In id-ID locale, 1000000 is formatted as "1.000.000"
    expect(formatted).toContain('1.000.000');
  });

  it('should format percentage with one decimal place', () => {
    expect(formatPercentage(25.456)).toBe('25.5%');
    expect(formatPercentage(0)).toBe('0.0%');
    expect(formatPercentage(100)).toBe('100.0%');
  });

  it('should calculate drop-off ratio correctly between stages', () => {
    // Drop off from 100 to 25 is 75%
    expect(calculateDropOffRatio(25, 100)).toBe(75);
    // Drop off from 85 to 14 is ((85 - 14) / 85) * 100 = 83.529%
    const drop = calculateDropOffRatio(14, 85);
    expect(Math.round(drop * 10) / 10).toBe(83.5);
  });

  it('should handle zero previous count safely without division by zero', () => {
    expect(calculateDropOffRatio(0, 0)).toBe(0);
    expect(calculateDropOffRatio(10, 0)).toBe(0);
  });
});

describe('benchmark constants', () => {
  it('should contain valid baseline metrics for pearl.storeflowers', () => {
    expect(BENCHMARK_THRESHOLDS.CURRENT_FOLLOWER_COUNT).toBe(63);
    expect(BENCHMARK_THRESHOLDS.CURRENT_FOLLOWING_COUNT).toBe(135);
    expect(BENCHMARK_THRESHOLDS.CURRENT_POSTS_COUNT).toBe(44);
    expect(BENCHMARK_THRESHOLDS.CURRENT_AUDIT_SCORE).toBe(75);
  });
});

