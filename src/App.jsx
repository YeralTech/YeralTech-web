import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';  
import UxProject from './pages/UxProject'; // Asegúrate de importar el componente
import FrontendProject from './pages/FrontendProject';
import VelvetBlossom from './components/Proyects/VelvetBlosom';
import ShaikProject from './components/Proyects/ShaikProyect';
import TicteamsProject from './components/Proyects/Ticteams';
import HomeCare from './components/Proyects/homecare';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Ruta raíz (inicio) */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ux-project" element={<UxProject />} />  
        <Route path="/frontend-project" element={<FrontendProject />} />
        <Route path="/velvet-blossom" element={<VelvetBlossom />} />
        <Route path="/shaik-asesores" element={<ShaikProject />} />
        <Route path="/ticteams" element={<TicteamsProject />} />
        <Route path="/homecare" element={<HomeCare />} />
      </Routes>
    </Router>
  );
}

export default App;
