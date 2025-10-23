import { Link } from 'react-router-dom'; 

const UxProject = () => {
    const projects = [
        {
            title: "TicTeams Panamá",
            imgSrc: "/asset/cover-ticteams.png",
            altText: "Diseño UX/UI para Ticteams, empresa de desarrollo de software Panamá",
            description: "Rediseño de página web para Ticteams, empresa de Desarrollo de Software ",
            projectLink: "/ticteams",
            webLink:"https://ticteams.com/"
        },
       
        {
            title: "App Velvet Blossom",
            imgSrc: "/asset/Frame 1.png",
            altText: "UX/UI Projects",
            description: "Diseño de Aplicación de floristeria ",
            projectLink: "/velvet-blossom" 
        },
        {
            title: "Web Shaik Asesores",
            imgSrc: "/asset/Cover.png",
            altText: "Diseño UX/UI de Página Web Shaik Asesores Panamá ",
            description: "Diseño de Página web de empresa de asesoría financiera ",
            projectLink: "/shaik-asesores",
            webLink: "https://shaikasesores.com/"
        },
       
    ];

    return (
        <>
            <section id="hero-section" className="relative h-60">
                <img className="absolute inset-0 w-full h-full object-fill" src="/asset/freepik__expand__40482.png" alt="imagen de fondo" />
                <div className="absolute inset-0 bg-text bg-opacity-80 flex items-center justify-center">
                    <h1 className="font-raleway text-white text-5xl font-bold">Proyectos UX/UI</h1>
                </div>
            </section>
            <section id="uxui-projects-section" className="bg-background text-text flex flex-col items-center justify-center gap-12 py-20 px-20">
                <div id="projects-container" className="flex flex-wrap gap-12 justify-center">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card flex flex-col w-96 h-auto shadow-xl rounded-md cursor-pointer justify-center items-center pb-6 border-2 border-secondary">
                            <img src={project.imgSrc} alt={project.altText} className="h-60 rounded-md" />
                            <h3 className=" font-bold text-text text-center text-2xl pt-4">{project.title}</h3>
                            <p className="pt-4 text-text text-center text-sm">{project.description}</p>
                            <div className='gap-2 flex py-4'>
                            <a href={project.webLink} target="_blank" rel="noopener noreferrer">
    <button className="bg-primary w-auto px-3 py-2 text-background rounded-md shadow-sm shadow-text hover:bg-text transition duration-300">
        Ver Sitio Web
    </button>
</a>

                            <Link to={project.projectLink}>
                                <button className="bg-primary w-auto px-3 py-2 text-background rounded-md shadow-sm shadow-text hover:bg-text transition duration-300">
                                    Ver Caso de Estudio
                                </button>
                            </Link>
                            </div>
                           
                            
                        </div>
                        
                    ))}
                </div>
            </section>
        </>
    );
};

export default UxProject;
