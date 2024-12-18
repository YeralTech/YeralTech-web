
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
    return (
        <section id="projects-section" className="bg-background text-text flex flex-col items-center justify-center gap-12 py-20">
            <h2 className="font-raleway text-4xl text-text font-bold">Proyectos</h2>
            <div className="flex gap-20 flex-col lg:flex-row">
                
                <Link to="/ux-project" className="flex flex-col w-96 h-auto bg-background shadow-xl rounded-md hover:shadow-primary transition duration-300">
                    <img src="/asset/webpage-content-design-website-icon.png" alt=""/>
                    <h3 className="py-4 font-bold text-text text-center text-2xl">UX/UI</h3>
                </Link>
                <Link to="/frontend-project" className="flex flex-col w-96 shadow-xl rounded-md hover:pointer hover:shadow-primary transition duration-300">
                    <img src="/asset/html-css-collage-concept-with-person (1).png" alt=""/>
                    <h3 className="py-4 font-bold text-text text-center text-2xl">Frontend</h3>
                </Link>
            </div>
        </section>
    );
};

export default ProjectsSection;
