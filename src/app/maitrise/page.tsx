'use client';

import MaitriseHeroSection from '@/components/maitrise/MaitriseHeroSection';
import DirectionSection from '@/components/maitrise/DirectionSection';
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
      <EnsembleSection />
      <OrganistesSection />
      <EcoleSection />
      <ChoeurGregorienSection />
      <ChapelleMusicaleSection />
    </div>
  );
}