import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const whatsapp = 'https://wa.link/545ctg';
  const openWhatsapp = () => window.open(whatsapp, '_blank');

  return (
    <nav id="navbar" className="flex items-center justify-between px-8 lg:px-0 max-w-screen-md mx-auto ">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'text-primary' : 'text-text')}>
      <img className="w-40 h-auto" src="/asset/logo.png" alt="logo Yeraldin" />

      </NavLink>

     
      <button
        onClick={toggleMenu}
        className="lg:hidden text-text focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>


      <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col absolute top-10 w-80  text-center rounded-b-md py-4 bg-white shadow-md z-20 md:left-52 md:ml-36 lg:static lg:flex lg:flex-row lg:items-center lg:gap-2 lg:bg-transparent lg:shadow-none lg:w-auto`}
      >
        <li className="text-text hover:text-primary transition duration-300 py-2 px-2">
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-primary' : 'text-text')}>
            Acerca de mí
          </NavLink>
        </li>
        <li className="relative py-2 px-4">
          <button
            onClick={toggleDropdown}
            className="text-text hover:text-primary transition duration-300 focus:outline-none"
          >
            Proyectos
          </button>
          {dropdownOpen && (
            <div ref={dropdownRef} className="absolute left-4 mt-2 w-48 bg-white shadow-md rounded-md z-10 ">
              <NavLink to="ux-project" className="block px-4 py-2 text-text hover:bg-gray-200">
                Proyectos UX
              </NavLink>
              <NavLink to="/frontend-project" className="block px-4 py-2 text-text hover:bg-gray-200">
                Proyectos Frontend
              </NavLink>
            </div>
          )}
        </li>
        <li className="py-2 px-4">
          <button
            onClick={openWhatsapp}
            className="bg-primary text-background px-4 py-2 rounded shadow-sm shadow-text hover:bg-text hover:text-background transition duration-300"
          >
            Contacto
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
