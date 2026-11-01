/**
 * Domain-wide constants and benchmark thresholds.
 * Adhering to rule: All numeric thresholds must be named constants.
 */

export const AUDIT_DATE_ISO = '2026-10-31';
export const AUDIT_DATE_DISPLAY = '31 Oktober 2026';

export const BENCHMARK_THRESHOLDS = {
  // Engagement rates
  EXCELLENT_ENGAGEMENT_RATE: 4.5,
  AVERAGE_ENGAGEMENT_RATE: 2.0,
  
  // Follower to following ratio
  HEALTHY_FOLLOWER_FOLLOWING_RATIO_MIN: 1.2,
  EXCELLENT_FOLLOWER_FOLLOWING_RATIO_MIN: 3.0,
  
  // Conversion Funnel Benchmarks
  BENCHMARK_VISIT_TO_ENGAGE_MIN: 15.0,
  BENCHMARK_ENGAGE_TO_CHAT_MIN: 8.0,
  BENCHMARK_CHAT_TO_DEAL_MIN: 20.0,
  
  // Growth Targets
  TARGET_FOLLOWER_GOAL_60_DAYS: 300,
  CURRENT_FOLLOWER_COUNT: 58,
  CURRENT_FOLLOWING_COUNT: 40,
  CURRENT_POSTS_COUNT: 38,
  
  // Audit Score weights
  SCORE_TOTAL_MAX: 100,
  CURRENT_AUDIT_SCORE: 58,
} as const;

export const CATEGORY_FILTERS = [
  'Semua',
  'Bio & Profil',
  'Sales Funnel',
  'Strategi Konten',
  'Social Proof',
] as const;

export type CategoryFilterType = (typeof CATEGORY_FILTERS)[number];

