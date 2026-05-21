import { useState } from 'react';
import AcademicFocusSection from '../components/sections/AcademicFocusSection';
import ContactSection from '../components/sections/ContactSection';
import CyclesSection from '../components/sections/CyclesSection';
import GroupPortfoliosSection from '../components/sections/GroupPortfoliosSection';
import GallerySection from '../components/sections/GallerySection';
import HeroSection from '../components/sections/HeroSection';
import MissionVisionSection from '../components/sections/MissionVisionSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import Toast from '../components/ui/Toast';
import { cycles, galleryItems, projects, groupPortfolios } from '../data/siteContent';

function HomePage() {
  const [toast, setToast] = useState(null);

  return (
    <>
      <HeroSection />
      <AcademicFocusSection />
      <MissionVisionSection />
      <CyclesSection cycles={cycles} />
      <GroupPortfoliosSection portfolios={groupPortfolios} />
      <ProjectsSection projects={projects} />
      <GallerySection items={galleryItems} />
      <ContactSection onNotify={setToast} />
      <Toast toast={toast} onClose={() => setToast(null)} />
    </>
  );
}

export default HomePage;