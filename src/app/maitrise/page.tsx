'use client';

import MaitriseHeroSection from '@/components/maitrise/MaitriseHeroSection';
import DirectionSection from '@/components/maitrise/DirectionSection';
import ConseilFondationSection from '@/components/maitrise/ConseilFondationSection';
import OrganistesSection from '@/components/maitrise/OrganistesSection';
import EnsembleSection from '@/components/maitrise/EnsembleSection';
import EcoleSection from '@/components/maitrise/EcoleSection';
import ChoeurGregorienSection from '@/components/maitrise/ChoeurGregorienSection';
import ChapelleMusicaleSection from '@/components/maitrise/ChapelleMusicaleSection';

export default function MaitrisePage() {
  return (
    <div style={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <MaitriseHeroSection />
      <DirectionSection />
      <ConseilFondationSection />
      <EnsembleSection />
      <EcoleSection />
      <OrganistesSection />
      <ChoeurGregorienSection />
      <ChapelleMusicaleSection />
    </div>
  );
}