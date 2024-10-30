
const FrontendProjects = () => {
    // Lista de proyectos de frontend
    const projectsData = [
        {
            title: 'Shaik Asesores',
            link: 'https://shaikasesores.com',
            imgSrc: '/asset/screencapture-shaikasesores-2024-06-28-15_53_32.png',
            description: 'Página para una empresa panameña dedicada a la asesoría de préstamos personales, creada desde cero con Figma, HTML, Tailwind, React.',
            githubLink: 'https://github.com/YeralTech/web-Shaikk'
        },
        {
            title: 'Web Store',
            link: 'https://yeralshaik.github.io/Store/',
            imgSrc: '/asset/screencapture-yeralshaik-github-io-Store-2024-06-03-20_48_55 (1).png',
            description: 'API Store, creada desde cero con Figma, HTML, CSS y JavaScript.',
            githubLink: 'https://github.com/YeralTech/Store'
        },
        {
            title: 'Cook Quick',
            link: 'https://yeralshaik.github.io/QuickCook/',
            imgSrc: '/asset/screencapture-127-0-0-1-5500-2024-04-11-17_08_12.png',
            description: 'Página de recetas, creada desde cero con Figma, HTML, CSS y JavaScript.',
            githubLink: 'https://github.com/YeralTech/QuickCook'
        },

    ];

    return (
        <>
            <section id="hero-section" className="relative h-60 ">
                <img className="absolute inset-0 w-full h-full object-cover" src="/asset/freepik__expand__87754.png" alt="imagen de fondo" />
                <div className="absolute inset-0 bg-text bg-opacity-80 flex items-center justify-center">
                    <h1 className="font-raleway text-white text-5xl font-bold">Proyectos Frontend</h1>
                </div>
            </section>

            <section id="projects-section" className="bg-background text-text flex flex-col items-center justify-center gap-8 py-20 ">
                <div id="projects-container" className="flex flex-wrap gap-12 justify-center items-center max-w-screen-lg">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-card flex flex-col w-96 h-auto shadow-xl rounded-md cursor-pointer justify-center items-center pb-6 border-2 border-secondary ">
                            <a href={project.link} target="_blank">
                                <img src={project.imgSrc} alt={`Imagen del proyecto ${project.title}`} className="h-60 w-full object-cover rounded-t-md" />
                                <h3 className="py-2 font-bold text-text text-center text-2xl">{project.title}</h3>
                                <p className=" pb-4  text-text text-center text-base px-4 ">{project.description}</p>
                            </a>
                            <div className="flex gap-4">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-primary px-4 py-2 text-background rounded-md shadow-sm shadow-text hover:bg-text transition duration-300 text-center">
                                    Código
                                </a>
                                <a href={project.link} target="_blank"  className="  py-2 border-2 border-primary px-4 text-text text-center rounded-md shadow-sm shadow-text transition duration-300 hover:bg-text hover:text-background">
                                    Ver Proyecto
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default FrontendProjects;
