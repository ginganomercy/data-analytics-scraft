/**
 * Domain Entities and Type Definitions for Instagram Analytics
 */

export interface InstagramStats {
  readonly followers: number;
  readonly following: number;
  readonly posts: number;
  readonly followerToFollowingRatio: number;
  readonly estimatedMonthlyProfileViews: number;
  readonly engagementRatePercent: number;
  readonly auditHealthScore: number;
}

export interface InstagramBioDetail {
  readonly rawText: string;
  readonly hasExternalLink: boolean;
  readonly hasLocation: boolean;
  readonly identifiedServices: readonly string[];
  readonly identifiedTypos: readonly string[];
  readonly recommendedText: string;
}

export interface InstagramProfileSummary {
  readonly userId: string;
  readonly username: string;
  readonly displayName: string;
  readonly profileType: string;
  readonly profileUrl: string;
  readonly avatarUrl?: string;
  readonly stats: InstagramStats;
  readonly bio: InstagramBioDetail;
}

export interface FunnelStageMetric {
  readonly id: string;
  readonly stage: string;
  readonly description: string;
  readonly count: number;
  readonly conversionRate: number;
  readonly dropOffPercentage: number;
  readonly status: 'normal' | 'leakage' | 'critical';
  readonly bottleneckReason?: string;
}

export interface TimelineDataPoint {
  readonly month: string;
  readonly statusQuoFollowers: number;
  readonly projectedFollowers: number;
  readonly estimatedMonthlyInquiries: number;
}

export interface ContentPillarDistribution {
  readonly name: string;
  readonly currentSharePercent: number;
  readonly recommendedSharePercent: number;
  readonly color: string;
  readonly description: string;
}

export interface SWOTMatrixData {
  readonly strengths: readonly string[];
  readonly weaknesses: readonly string[];
  readonly opportunities: readonly string[];
  readonly threats: readonly string[];
}

export type AuditStatus = 'pass' | 'warning' | 'fail';

export interface AuditChecklistItem {
  readonly id: string;
  readonly category: 'Bio & Profil' | 'Sales Funnel' | 'Strategi Konten' | 'Social Proof';
  readonly title: string;
  readonly currentCondition: string;
  readonly status: AuditStatus;
  readonly recommendation: string;
  readonly priority: 'Tinggi' | 'Sedang' | 'Rendah';
}

export interface RoadmapPhase {
  readonly phaseNumber: number;
  readonly title: string;
  readonly timeframe: string;
  readonly focusBadge: string;
  readonly tasks: readonly string[];
  readonly expectedImpact: string;
}

