
import Footer from '../components/Footer';
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAdobexd } from "react-icons/si";


const About = () => {
  return (
    <>
  
    <section id="aboutme-section" className="flex flex-col bg-secondary py-20 justify-center items-center">
        <h2 className="text-center font-raleway font-bold text-3xl">Acerca de mí </h2>
        <div className="flex flex-col py-6 items-center justify-center gap-8 lg:flex-row lg:px-20" id="about-me-container ">
            <div className="flex flex-col px-20 " id="about-me-textcontainer">
                <p className="pb-8 text-xl">¡Hola! Soy Diseñadora UX/UI con una trayectoria que comenzó en ventas, lo que me ha proporcionado una comprensión profunda de las necesidades y expectativas del cliente. Esta experiencia me permite diseñar productos digitales que no solo se centran en la estética, sino que también crean soluciones reales para problemas específicos, mejorando así la experiencia del usuario.</p>
                <div id="buttons-container" className="flex">
                    <button className="bg-primary w-40 py-2 text-background rounded-md mr-4 shadow-sm shadow-text transition duration-300 hover:bg-text">Descargar CV</button>
                   
                </div>
            </div>
            <img className="w-96 drop-shadow-xl" src="/asset/rb_28004 1.png" alt=""/>
        </div>
    </section>
   {/*<section id="aboutme-section" className="flex flex-col  justify-center items-center py-20">
        <h2 className="font-raleway font-bold text-3xl">Especialidad </h2>
        
        <div className="flex flex-col py-6 items-center justify-center gap-8 lg:flex-row lg:px-20" id="about-me-container">
        <img className="w-96 drop-shadow-xl" src="/asset/rb_214777795.png" alt=""/>
            <div className="flex flex-col px-20 lg:flex-row lg:px-20" id="about-me-textcontainer">
                <p className="pb-8 text-xl">Me especializo en diseñar interfaces intuitivas y atractivas que facilitan la interacción del usuario. Utilizo herramientas como Figma para el diseño, y HTML, CSS y JavaScript para el desarrollo frontend. Mi enfoque es transformar ideas complejas en productos sencillos de usar, asegurando que cada interacción sea fluida, eficiente y visualmente agradable.
                </p>
            </div>
        </div>
    </section>
    <section id="aboutme-section" className="flex flex-col bg-primary justify-center items-center py-20">
        <h2 className="font-raleway font-bold text-3xl text-white">Compromiso y Objetivos</h2>
        
        <div className="flex flex-col py-6 items-center justify-center gap-8 lg:flex-row lg:px-20" id="about-me-container ">
        
            <div className="flex flex-col px-20" id="about-me-textcontainer">
                <p className="pb-4 text-xl text-white">Estoy comprometida con el aprendizaje continuo y la colaboración en equipos creativos para impulsar productos digitales centrados en el usuario. Busco mejorar la accesibilidad y crear un impacto medible en la vida de las personas a través de mis diseños. Mi interés por explorar nuevas tecnologías me mantiene a la vanguardia en el sector.

                </p>
            </div>
            <img className="w-96 drop-shadow-xl" src="/asset/rb_3041 (2).png" alt=""/>
        </div>
    </section>*/}
    <section className="flex flex-col bg-background justify-center items-center py-20">
        <h2 className="font-raleway text-text font-bold text-3xl pb-8">Stack Tecnológico</h2>
        <div className='flex gap-3 text-5xl  text-primary drop-shadow-lg drop-shadow-text'>
            <SiAdobeillustrator />
            <SiAdobephotoshop />
            <IoLogoFigma />
            <FaHtml5 />
            <FaCss3Alt />
            <RiTailwindCssFill />
            <FaGithubSquare />
            <FaGitAlt />
            <IoLogoJavascript />
            <SiAdobexd />
        </div>
       
    </section>
    <Footer/>
    </>
  );
};

export default About;
