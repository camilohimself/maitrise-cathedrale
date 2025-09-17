'use client';

import MaitriseHeroSection from '@/components/maitrise/MaitriseHeroSection';
import ConseilFondationSection from '@/components/maitrise/ConseilFondationSection';

export default function MaitrisePage() {
  return (
    <div style={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <MaitriseHeroSection />
      <ConseilFondationSection />
    </div>
  );
}