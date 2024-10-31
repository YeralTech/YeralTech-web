import { Link } from 'react-router-dom';
const AboutSection = () => {
    // Ruta del CV
    const downloadCv = '/public/asset/Yeraldin Espinosa-CV .docx.pdf';

    return (
        <>
            <section id="aboutme-section" className="flex flex-col bg-secondary justify-center items-center py-20">
                <h2 className="font-raleway font-bold text-3xl">Acerca de mí</h2>
                <div className="flex flex-col max-w-screen-lg py-6 items-center justify-center gap-8 lg:flex-row" id="about-me-container">
                    <div className="flex flex-col px-10" id="about-me-textcontainer">
                        <p className="pb-8 text-xl">
                            Soy diseñadora UX/UI. Mi misión es crear experiencias que sean tanto funcionales como sorprendentes.
                            Da un vistazo a mis proyectos y veamos cómo puedo ayudarte a innovar.
                        </p>
                        <div id="buttons-container" className="flex text-center">
                            <a
                                href={downloadCv}
                                download="Curriculum_Yeraldin.pdf" 
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
                    <img className="w-96 drop-shadow-xl" src="/asset/rb_28004 1.png" alt="" />
                </div>
            </section>
        </>
    );
};

export default AboutSection;
