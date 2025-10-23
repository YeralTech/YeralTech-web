import { useParams, useNavigate } from "react-router-dom";
import { FaFigma, FaFire } from "react-icons/fa";

const projects = [
  {
    id: 4,
    title: "Rediseño Página Web - TicTeams",
    imgBanner: "/asset/cover-ticteams.png",
    types: ["App", "Web", "UX/UI"],
    description:
      "Proyecto de rediseño de la página web de TicTeams, enfocado en mejorar la experiencia del usuario y la estética visual. Su sitio web anterior presentaba desafíos en cuanto a navegación, claridad en los servicios ofrecidos y experiencia del usuario en general.",
    altText: "Rediseño de Página Web TicTeams",
    beforeImg: "/public/asset/inicio-tic.png",
    afterImg: "/asset/inicio-newtic.png",
       before1Img: "/public/asset/facturacion-electronica.png",
    after1Img: "/asset/facturacion-newtic.png",
    processSteps: [],
    tools: ["Figma", "Hotjar", "Zeplin"],
    results:
      "Incremento del 30% en tasa de conversión y reducción de tiempo en tareas clave gracias a un flujo más intuitivo y visual atractivo.",
    link: "https://ticteams.com",
    research:
      "Se realizó investigación de usabilidad mediante mapas de calor, encuestas y grabaciones de Hotjar para identificar problemas de navegación y contenido confuso en la web anterior.",
    userflowImg: "/asset/ticteams-userflow.png",
  },
  {
    id: 2,
    title: "Aceti-oxigeno rediseño Página Web",
    imgBanner:
      "/asset/INVENTARIO/mockuuups-macbook-pro-mockup-on-a-table-with-a-plant-in-the-background.jpeg",
    types: ["App", "UX/UI"],
    description:
      "Rediseño de la página web de Aceti-Oxígeno para mejorar la experiencia del usuario, facilitar la búsqueda de productos y servicios, y transmitir solidez y confianza en la marca.",
    altText: "Rediseño de Página Web Aceti-Oxígeno",
    // Galería vertical (una debajo de otra)
    beforeImg: "/asset/INVENTARIO/Frame 270.jpg",
    before2Img: "/asset/INVENTARIO/Frame 272.png",
    before3Img: "/asset/INVENTARIO/Frame 274.png",
    afterImg: undefined,
    processSteps: [],
    tools: ["Figma", "UserTesting", "Zeplin"],
    results: "",
    link: "",
  },
  {
    id: 1,
    title: "Sistema de Ventas e Inventario (POS) - Sabores del Itsmo",
    imgBanner: "/asset/INVENTARIO/login.png",
    types: ["App", "Tablet", "UX/UI"],
    description:
      "Diseño de sistema POS para tablet, enfocado en la gestión de ventas, inventario y control de caja, optimizando procesos en el punto de venta.",
    altText: "Diseño de Sistema POS Sabores del Itsmo",
    abrirImg: "/asset/INVENTARIO/abrir.png",
    beforeImg: "/asset/INVENTARIO/home.png",
    homeImg: "/asset/INVENTARIO/home.png",
    afterImg: "/asset/INVENTARIO/crear.png",
    yappyImg: "/asset/INVENTARIO/yappy.png",
    adminImg: "/asset/INVENTARIO/admin (1).png",
    productImg: "/asset/INVENTARIO/PRODUCTOS.png",
    processSteps: [],
    tools: ["Figma", "UserTesting", "Zeplin"],
    results:
      "Un sistema POS intuitivo y ágil que permite a los vendedores registrar ventas de forma rápida, reducir errores en cálculos, gestionar inventario y controlar caja con mayor eficiencia.",
    link: "https://www.figma.com/proto/tu-link-pos",
    research:
      "Se realizaron entrevistas con vendedores para entender las principales dificultades: cálculos manuales, errores en cierres de caja y falta de control de inventario. Esto guió la priorización de funcionalidades y flujos en la app.",
    userflowImg: "/asset/INVENTARIO/Userflow - ventas.pdf",
    userflowAdminImg: "/asset/INVENTARIO/Userflow - Admin.pdf",
  },
  
    
];

const iconMap = {
  Figma: <FaFigma size={24} />,
  Hotjar: <FaFire size={24} />,
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(id, 10));

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

  // Lógica de mockups:
  const isAceti = project.id === 2;
  const hasBeforeAfter = Boolean(project.beforeImg && project.afterImg);

  const acetiGallery = isAceti
    ? [project.beforeImg, project.before2Img, project.before3Img].filter(Boolean)
    : [];

  return (
    <section className="w-full bg-background py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10">
        {/* Volver */}
        <button
          onClick={() => navigate(-1)}
          className="text-primary hover:underline self-start"
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
            alt={project.altText || project.title}
          />
          <div className="flex flex-col gap-4">
            <p className="text-gray-600 text-md max-w-xl">
              {project.description}
            </p>
            {!!project.link && (
              <button
                onClick={() => window.open(project.link, "_blank")}
                className=" text-hover border border-hover px-6 m-4 py-2 w-60 rounded-full hover:bg-hover transition"
              >
                Ver prototipo
              </button>
            )}
          </div>
        </div>

        {/* Herramientas */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-text">
            Herramientas utilizadas
          </h2>
          <ul className="flex gap-4 text-hover text-md flex-wrap">
            {project.tools
              ?.filter((tool) => iconMap[tool])
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

        {/* Mockups */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-text">Mockups</h2>

          {/* Aceti-Oxígeno: imágenes una debajo de otra */}
          {isAceti && acetiGallery.length > 0 && (
            <div className="flex flex-col gap-8 items-center">
              {acetiGallery.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${project.title} vista ${idx + 1}`}
                  className="w-full max-w-4xl rounded shadow"
                />
              ))}
            </div>
          )}

          {/* Otros proyectos con comparativo before/after (TicTeams, Home Care, POS) */}
          {!isAceti && hasBeforeAfter && (
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={project.beforeImg  || project.before1Img} 
                alt={`${project.title} antes`}
                className="w-full max-w-sm rounded shadow"
              />
              <img
                src={project.afterImg || project.after1Img}
                alt={`${project.title} después`}
                className="w-full max-w-sm rounded shadow"
              />
            </div>
          )}

          {/* Si no hay after, pero sí una imagen (fallback) */}
          {!isAceti && !hasBeforeAfter && project.beforeImg && (
            <div className="flex items-center justify-center">
              <img
                src={project.beforeImg}
                alt={project.altText || project.title}
                className="w-full max-w-3xl rounded shadow"
              />
            </div>
          )}
        </div>

        {/* (Opcional) Userflow si existe */}
        {project.userflowImg && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4 text-text">Userflow</h2>
            <div className="w-full h-[600px]">
              <iframe
                src={project.userflowImg}
                title={`Userflow de ${project.title}`}
                className="w-full h-full border rounded"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
