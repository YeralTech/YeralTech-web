import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  const linkedin = 'https://www.linkedin.com/in/yeraldinespinosa/';
  const openLinkedin = () => {
      window.open(linkedin, '_blank');
  }
  const github = 'https://github.com/YeralTech';
  const openGithub = () => {
      window.open(github, '_blank');
  }

  
    return (
      <footer className="flex flex-col bg-text h-40 text-background py-10 text-center justify-center">
        <div className="flex justify-center pb-4 flex-col">
          <p ></p>
          <div className="flex justify-center text-2xl gap-2 ">
            <FaLinkedin   onClick={openLinkedin} className="text-secondary hover:text-hover cursor-pointer" />
            <FaGithubSquare   onClick={openGithub}   className="text-secondary hover:text-hover cursor-pointer"/>
            <MdEmail   className="text-secondary hover:text-hover cursor-pointer"/>
            </div>
        </div>
        
        <p className="text-sm">&copy; 2024 Yeraldin Espinosa. Todos los derechos reservados.</p>
      </footer>
    );
  };
  
  export default Footer;
  