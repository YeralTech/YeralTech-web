import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-text text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo o Nombre */}
        <div className="text-xl font-bold cursor-pointer select-none" onClick={() => window.scrollTo({top:0, behavior:"smooth"})}>
          <img className="w-20" src="../../public/asset/logowhite.png" alt="" />
        </div>

      
        {/* Redes sociales */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://linkedin.com/in/yeraldinespinosa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-hover transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yeraldinespinosa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-hover transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/yeraldinespinosa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-hover transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-white/70 mt-8 select-none">
        &copy; {new Date().getFullYear()} Yeraldin Espinosa. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
