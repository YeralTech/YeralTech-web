import { FiSmartphone, FiGlobe, FiLayers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Rediseño Página Web - TicTeams",
    types: ["App", "Web", "UX/UI"],
    description:
      "Proyecto de rediseño de la página web de TicTeams, enfocada en mejorar la experiencia del usuario y la estética visual.",
    imgSrc: "/asset/cover-ticteams.png",
    altText: "Rediseño de Página Web TicTeams",
  },
  {
    id: 2,
    title: "Diseño de Aplicación - Home Care",
    types: ["App", "Web", "UX/UI"],
    description:
      "Diseño de aplicación móvil para gestión de citas médicas y seguimiento personalizado del paciente.",
    imgSrc: "/asset/cover-homecare.png",
    altText: "diseño de aplicación Home Care",
  },
   {
    id: 3,
    title: "Sistema de Ventas e Inventario (POS) - Sabores de Istmo",
    types: ["UX/UI"],
    description:
      "Diseño de sistema para gestión de ventas, inventario y control de caja en tiempo real, optimizando procesos de punto de venta.",
    imgSrc: "/asset/INVENTARIO/mockuuups-free-ipad-pro-mockup-on-textured-fabric-and-wooden-surface.jpeg",
    altText: "Diseño de Sistema POS Sabores de Istmo",
  },
];

const ProjectsList = () => {
  const navigate = useNavigate();

  const goToDetail = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <section id="projects" className="px-6 py-20 bg-background">
      <h2 className="text-3xl font-raleway text-text font-bold  text-center mb-4 ">
        Proyectos destacados
      </h2>
      <p className="text-center  max-w-xl mx-auto mb-12 text-gray-600 text-lg">
        Algunos trabajos donde he aportado valor con diseño UX/UI estratégico y visual.
      </p>

      <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-2 ">
        {projects.map(({ id, title, types, description, imgSrc, altText }) => (
          <div
            key={id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition bg-secondary w-96"
          >
            <div className="h-44 rounded overflow-hidden mb-6 mt-2">
              <img
                className="w-full h-full object-cover"
                src={imgSrc}
                alt={altText}
              />
            </div>
            <h3 className=" text-raleway font-semibold text-xl pt-2 mb-2 text-text">{title}</h3>
            <div className="flex gap-4 mb-3 text-primary">
              {types.includes("App") && <FiSmartphone className="w-5 h-5" />}
              {types.includes("Web") && <FiGlobe className="w-5 h-5" />}
              {types.includes("UX") && <FiLayers className="w-5 h-5" />}
            </div>
            <p className="text-md mb-6 text-gray-600 ">{description}</p>
            <button
              onClick={() => goToDetail(id)}
              className="text-hover border border-primary px-4 py-1 rounded-xl hover:bg-[#EFEAF8] transition"
            >
              Ver caso
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
