import React from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/Contacto';


const Home = () => {
  return (
    <>
        <HeroSection/>
        <ProjectsSection/>
        <AboutSection/>
        <ContactSection/>
        <Footer/>
    </>
  );
};

export default Home;