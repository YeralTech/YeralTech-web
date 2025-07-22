import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/Contacto';
import ServicesSection from '../components/Services';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Scroll suave
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si no hay hash, scroll top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <div id="hero"><HeroSection /></div>
      <div id="services"><ServicesSection /></div>
      <div id="projects"><ProjectsSection /></div>
      <div id="about"><AboutSection /></div>
      <div id="contact"><ContactSection /></div>
      <Footer />
    </>
  );
};

export default Home;
