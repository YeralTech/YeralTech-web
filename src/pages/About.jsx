
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
const downloadCv = '/public/asset/Yeraldin Espinosa UX-UI.pdf';

const About = () => {
  return (
    <>
  
    <section id="aboutme-section" className="flex flex-col bg-secondary py-20 justify-center items-center">
        <h2 className="text-text text-center font-raleway font-bold text-4xl">Acerca de Mí </h2>
        <div className="flex flex-col py-10 items-center justify-center lg:px-0 max-w-screen-xl mx-auto flex-col gap-8 lg:flex-row lg:px-20" id="about-me-container ">
            <div className="flex flex-col px-10 text-text " id="about-me-textcontainer">
                <p className="pb-3 text-xl">Soy diseñadora UX/UI apasionada por crear experiencias digitales intuitivas y funcionales. Mi formación en herramientas de diseño como Figma, junto con mi experiencia previa en ventas, me ha permitido desarrollar habilidades clave en comunicación y resolución de problemas, lo que me facilita comprender las necesidades de los usuarios y colaborar eficazmente con equipos multidisciplinarios. </p>
                <p className="pb-3 text-xl">He trabajado en el rediseño de interfaces y mejora de la usabilidad de páginas web, transformando ideas complejas en soluciones visuales sencillas y efectivas. Mi enfoque está en asegurar que cada producto digital no solo sea estéticamente atractivo, sino que también resuelva problemas reales y proporcione una experiencia fluida y agradable. </p>

                <p className="pb-8 text-xl">Mi pasión por el aprendizaje continuo me mantiene siempre explorando nuevas metodologías y tecnologías en UX/UI y desarrollo frontend. Busco colaborar con equipos creativos para crear productos digitales centrados en el usuario que generen resultados medibles y mejoren la interacción digital.</p>    
               
               
                <div id="buttons-container" className="flex">
                <a
                                href={downloadCv}
                                download="CV-YeraldinEspinosa.pdf" 
                                className="bg-primary w-40 py-2 text-center text-background rounded-md mr-4 shadow-sm shadow-text transition duration-300 hover:bg-text"
                            >
                                Descargar CV
                            </a>
                   
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
        <div className='flex gap-3 text-7xl  text-hover drop-shadow-lg drop-shadow-text'>
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
