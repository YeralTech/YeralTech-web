import { useParams, useNavigate } from "react-router-dom";
import { FaFigma, FaFire } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Rediseño Página Web - TicTeams",
    imgBanner: "/asset/cover-ticteams.png",
    types: ["App", "Web", "UX/UI"],
    description:
      "Proyecto de rediseño de la página web de TicTeams, enfocado en mejorar la experiencia del usuario y la estética visual.",
    altText: "Rediseño de Página Web TicTeams",
    beforeImg: "/asset/inicio-tic.png",
    afterImg: "/asset/inicio-newtic.png",
    processSteps: [],
    tools: ["Figma", "Hotjar", "Zeplin"],
    results:
      "Incremento del 30% en tasa de conversión y reducción de tiempo en tareas clave gracias a un flujo más intuitivo y visual atractivo.",
    link: "https://ticteams.com",
  },
  {
    id: 2,
    title: "Diseño de Aplicación - Home Care",
    imgBanner: "/asset/cover-homecare.png",
    types: ["App", "UX/UI"],
    description:
      "Diseño de aplicación móvil para gestión de citas médicas y seguimiento personalizado del paciente.",
    altText: "Diseño Aplicación Home Care",
    beforeImg: '../../../asset/wireframe-home.png',
    afterImg: "../../../asset/image 10.png",
    processSteps: [],
    tools: ["Figma", "UserTesting", "Zeplin"],
    results:
      "Mejora en la retención de usuarios y reducción de errores en la gestión de citas.",
    link: "https://www.figma.com/proto/bmEUKF9PnmOdL3Qmh3TvUQ/Home-Care-App?node-id=1-252&starting-point-node-id=1%3A286&t=NSDvfppPBv1g3cfF-1",
  },
];

const iconMap = {
  Figma: <FaFigma size={24} />,
  Hotjar: <FaFire size={24} />,
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="p-10 text-center text-text">
        <h2 className="text-2xl font-semibold mb-4">Proyecto no encontrado</h2>
        <button onClick={() => navigate(-1)} className="text-primary underline">
          Volver
        </button>
      </div>
    );
  }

  return (
    <section className="w-full bg-background py-20 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10">
        {/* Volver */}
        <button
          onClick={() => navigate(-1)}
          className="text-primary hover:underline"
        >
          ← Volver a proyectos
        </button>

        {/* Título */}
        <h1 className="text-4xl font-bold text-text">{project.title}</h1>

        {/* Banner y descripción */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <img
            className="rounded w-full max-w-md object-cover"
            src={project.imgBanner}
            alt={project.altText}
          />
          <div className="flex flex-col gap-4">
            <p className="text-gray-600 text-md max-w-xl">{project.description}</p>
            {project.link && (
              <button
                onClick={() => window.open(project.link, "_blank")}
                className="bg-primary text-white px-6 py-3 w-60 rounded-full hover:bg-hover transition"
              >
                Visitar sitio web
              </button>
            )}
          </div>
        </div>

        {/* Herramientas */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-text">Herramientas usadas</h2>
          <ul className="flex gap-4 text-hover text-md flex-wrap">
            {project.tools
              .filter((tool) => iconMap[tool])
              .map((tool, i) => (
                <li
                  key={i}
                  className="px-3 py-2 flex items-center justify-center"
                  title={tool}
                >
                  {iconMap[tool]}
                </li>
              ))}
          </ul>
        </div>

        {/* Mockups Antes / Después */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-text">Mockups</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col items-center">
              <h3 className="font-semibold mb-2 text-gray-600">Antes</h3>
              <img
                src={project.beforeImg}
                alt={`${project.title} antes`}
                className="w-full max-w-sm "
              />
            </div>
            <div className="flex-1 flex flex-col items-center">
              <h3 className="font-semibold mb-2 text-gray-600">Después</h3>
              <img
                src={project.afterImg}
                alt={`${project.title} después`}
                className="w-full max-w-sm "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
