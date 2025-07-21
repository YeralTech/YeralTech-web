
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/Contacto';
import ServicesSection from '../components/Services';

const Home = () => {
  return (
    <>
        <HeroSection/>
        <ServicesSection/>
        <ProjectsSection/>
        <AboutSection/>
        <ContactSection/>
        <Footer/>
    </>
  );
};

export default Home;