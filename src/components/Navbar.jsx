import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Cierra el menú móvil al navegar
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Define los links del menú con texto y hash
  const menuLinks = [
    { to: "/#hero", label: "Inicio" },
    { to: "/#services", label: "Servicios" },
    { to: "/#projects", label: "Proyectos" },
    { to: "/#about", label: "Sobre mí" },
    { to: "/#contact", label: "Contacto" },
  ];

  const addMeet = "https://calendly.com/yeraldinespinosa/reunion-30-min";

  const AddMeetClick = () => {
    window.open(addMeet, "_blank");
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link
        to="/"
        className="w-24"
        onClick={() => {
          setMenuOpen(false);
          // Scroll top manual si ya estás en home
          if (location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        aria-label="Ir al inicio"
      >
        <img src="/asset/LOGO (1).png" alt="Logo" />
      </Link>

      {/* Menu escritorio */}
      <nav className="hidden md:flex space-x-8 text-gray-800 text-lg ">
        {menuLinks.map(({ to, label }) => (
          <Link
            key={label}
            to={to}
            className="hover:text-primary border-b-2 border-transparent hover:border-primary transition"
            onClick={handleLinkClick}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Botón Agenda escritorio */}
      <button
        onClick={AddMeetClick}
        className="hidden md:inline-block bg-primary text-white px-5 py-2 rounded-full hover:bg-primary-dark transition"
        aria-label="Agenda una cita de 30 minutos con Yeraldin Espinosa"
      >
        Agenda una reunión
      </button>

      {/* Botón hamburguesa móvil */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <span
          className={`block h-0.5 w-full bg-gray-800 transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-gray-800 transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-gray-800 transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 space-y-6 md:hidden z-40">
          {menuLinks.map(({ to, label }) => (
            <Link
              key={label}
              to={to}
              className="text-gray-800 text-xl font-semibold hover:text-primary"
              onClick={handleLinkClick}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={AddMeetClick}
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition"
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
