import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false); // cerrar menú si estaba abierto
  };

  const addMeet = "https://calendly.com/yeraldinespinosa/reunion-30-min";

  const AddMeetClick = () => {
    window.open(addMeet, "_blank");
    setMenuOpen(false); // cerrar menú si estaba abierto
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <button className="w-24" onClick={scrollToTop} aria-label="Ir al inicio">
        <img src="/asset/LOGO (1).png" alt="Logo" />
      </button>

      {/* Menú escritorio */}
      <nav className="space-x-6 text-md text-text hidden md:flex">
        <a
          href="#about"
          className="hover:text-hover border-b-2 border-transparent hover:border-p300"
        >
          Sobre mí
        </a>
        <a
          href="#services"
          className="hover:text-hover border-b-2 border-transparent hover:border-primary"
        >
          Soluciones
        </a>
        <a
          href="#projects"
          className="hover:text-hover border-b-2 border-transparent hover:border-primary"
        >
          Proyectos
        </a>
        <a
          href="#testimonials"
          className="hover:text-hover border-b-2 border-transparent hover:border-primary"
        >
          Testimonios
        </a>
        <a
          href="#contact"
          className="hover:text-hover border-b-2 border-transparent hover:border-primary"
        >
          Contacto
        </a>
      </nav>

      {/* Botón agenda escritorio */}
      <button
        id="hero-meeting-button"
        onClick={AddMeetClick}
        className="hidden md:block text-white bg-primary px-4 py-2 rounded-full hover:bg-hover"
        aria-label="Agenda una cita de 30 minutos con Yeraldin Espinosa"
      >
        Agenda una reunión
      </button>

      {/* Botón menú hamburguesa móvil */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        aria-label="Abrir menú"
      >
        <span
          className={`block h-0.5 w-full bg-text transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-full bg-text transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-full bg-text transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden z-40">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-text hover:text-hover"
          >
            Sobre mí
          </a>
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="text-text hover:text-hover"
          >
            Soluciones
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-text hover:text-hover"
          >
            Proyectos
          </a>
          <a
            href="#testimonials"
            onClick={() => setMenuOpen(false)}
            className="text-text hover:text-hover"
          >
            Testimonios
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-text hover:text-hover"
          >
            Contacto
          </a>
          <button
            onClick={AddMeetClick}
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-hover"
            aria-label="Agenda una cita de 30 minutos con Yeraldin Espinosa"
          >
            Agenda una reunión
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
