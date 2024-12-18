import { Link } from 'react-router-dom';
const AboutSection = () => {
  
    const downloadCv = '/public/asset/Yeraldin Espinosa UX-UI.pdf';
    const imgAbout = '/public/asset/rb_28004 1.png'

    return (
        <>
            <section id="aboutme-section" className="flex flex-col bg-secondary justify-center items-center py-20">
                <h2 className="font-raleway font-bold text-4xl text-text">Acerca de mí</h2>
                <div className="flex flex-col max-w-screen-lg py-6 items-center justify-center gap-8 lg:flex-row" id="about-me-container">
                    <div className="flex flex-col px-10 " id="about-me-textcontainer">
                        <p className="pb-8 text-text text-xl">
                            Soy diseñadora UX/UI apasionada por crear experiencias digitales intuitivas y funcionales. Mi formación en herramientas de diseño como Figma, junto con mi experiencia previa en ventas, me ha permitido desarrollar habilidades clave en comunicación y resolución de problemas, lo que me facilita comprender las necesidades de los usuarios y colaborar eficazmente con equipos multidisciplinarios.
                        </p>
                     
                        <div id="buttons-container" className="flex text-center">
                            <a
                                href={downloadCv}
                                download="CV-YeraldinEspinosa.pdf" 
                                className="bg-primary w-40 py-2 text-background rounded-md mr-4 shadow-sm shadow-text transition duration-300 hover:bg-text"
                            >
                                Descargar CV
                            </a>
                           <Link to="/About">
                           <button  className="border-2 border-primary w-52 py-2 text-text rounded-md shadow-sm shadow-text transition duration-300 hover:bg-text hover:text-background">
                                Descubre más de mí
                            </button>
                           </Link>
                            
                        </div>
                    </div>
                    <img className="w-96 drop-shadow-xl" src="/public/asset/rb_28004 1.png" alt="" />
                </div>
            </section>
        </>
    );
};

export default AboutSection;
