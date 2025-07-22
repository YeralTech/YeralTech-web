// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import UxProject from './pages/UxProject';
import FrontendProject from './pages/FrontendProject';
import VelvetBlossom from './components/Proyects/VelvetBlosom';
import ShaikProject from './components/Proyects/ShaikProyect';
import TicteamsProject from './components/Proyects/ProjectDetail';
import HomeCare from './components/Proyects/homecare';
import ProjectDetail from './components/Proyects/ProjectDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ux-project" element={<UxProject />} />
        <Route path="/frontend-project" element={<FrontendProject />} />
        <Route path="/velvet-blossom" element={<VelvetBlossom />} />
        <Route path="/shaik-asesores" element={<ShaikProject />} />
        <Route path="/ticteams" element={<TicteamsProject />} />
        <Route path="/homecare" element={<HomeCare />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
