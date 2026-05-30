import { useState, useEffect } from 'react';
import cyclesUrl from '/public/data/cycles.json?url';
import portfoliosUrl from '/public/data/groupPortfolios.json?url';
import projectsUrl from '/public/data/projects.json?url';
import galleryUrl from '/public/data/gallery.json?url';
import AcademicFocusSection from '../components/sections/AcademicFocusSection';
import ContactSection from '../components/sections/ContactSection';
import CyclesSection from '../components/sections/CyclesSection';
import GroupPortfoliosSection from '../components/sections/GroupPortfoliosSection';
import GallerySection from '../components/sections/GallerySection';
import HeroSection from '../components/sections/HeroSection';
import MissionVisionSection from '../components/sections/MissionVisionSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import Toast from '../components/ui/Toast';

function HomePage() {
  const [toast, setToast] = useState(null);
  const [siteData, setSiteData] = useState({
    cycles: [],
    groupPortfolios: [],
    projects: [],
    galleryItems: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch(cyclesUrl),
          fetch(portfoliosUrl),
          fetch(projectsUrl),
          fetch(galleryUrl),
        ]);

        responses.forEach((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        });

        const [cycles, groupPortfolios, projects, galleryItems] = await Promise.all(
          responses.map((res) => res.json()),
        );

        setSiteData({ cycles, groupPortfolios, projects, galleryItems });
      } catch (error) {
        console.error('Error fetching site data:', error);
        setToast({
          type: 'error',
          message: 'No se pudieron cargar los datos del sitio. Inténtalo de nuevo más tarde.',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeroSection />
      <AcademicFocusSection />
      <MissionVisionSection />
      <CyclesSection cycles={siteData.cycles} isLoading={isLoading} />
      <GroupPortfoliosSection portfolios={siteData.groupPortfolios} isLoading={isLoading} />
      <ProjectsSection projects={siteData.projects} isLoading={isLoading} />
      <GallerySection items={siteData.galleryItems} isLoading={isLoading} />
      <ContactSection onNotify={setToast} />
      <Toast toast={toast} onClose={() => setToast(null)} />
    </>
  );
}

export default HomePage;