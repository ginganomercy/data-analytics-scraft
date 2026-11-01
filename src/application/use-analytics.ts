import { useState, useMemo } from 'react';
import {
  SHELWA_PROFILE_DATA,
  FUNNEL_STAGES_DATA,
  TIMELINE_PROJECTION_DATA,
  CONTENT_PILLARS_DATA,
  SWOT_DATA,
  AUDIT_CHECKLIST_DATA,
} from '../infrastructure/seed-data';
import { CategoryFilterType } from '../domain/constants';
import { AuditChecklistItem } from '../domain/types';

export function useAnalytics() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilterType>('Semua');
  const [isCopiedBio, setIsCopiedBio] = useState<boolean>(false);

  const filteredChecklist = useMemo<readonly AuditChecklistItem[]>(() => {
    if (selectedCategory === 'Semua') {
      return AUDIT_CHECKLIST_DATA;
    }
    return AUDIT_CHECKLIST_DATA.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const auditStats = useMemo(() => {
    const total = AUDIT_CHECKLIST_DATA.length;
    const passed = AUDIT_CHECKLIST_DATA.filter((item) => item.status === 'pass').length;
    const warning = AUDIT_CHECKLIST_DATA.filter((item) => item.status === 'warning').length;
    const failed = AUDIT_CHECKLIST_DATA.filter((item) => item.status === 'fail').length;

    return { total, passed, warning, failed };
  }, []);

  const handleCopyBio = async () => {
    try {
      await navigator.clipboard.writeText(SHELWA_PROFILE_DATA.bio.recommendedText);
      setIsCopiedBio(true);
      setTimeout(() => setIsCopiedBio(false), 2500);
    } catch {
      setIsCopiedBio(false);
    }
  };

  return {
    profile: SHELWA_PROFILE_DATA,
    funnelStages: FUNNEL_STAGES_DATA,
    timelineData: TIMELINE_PROJECTION_DATA,
    contentPillars: CONTENT_PILLARS_DATA,
    swot: SWOT_DATA,
    checklist: filteredChecklist,
    auditStats,
    selectedCategory,
    setSelectedCategory,
    isCopiedBio,
    handleCopyBio,
  };
}
