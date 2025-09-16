import { useParams, useNavigate } from "react-router-dom";
import { FaFigma, FaFire } from "react-icons/fa";
const projects = [
  {
    id: 1,
    title: "Rediseño Página Web - TicTeams",
    imgBanner: "/asset/cover-ticteams.png",
    types: ["App", "Web", "UX/UI"],
    description:
      "Proyecto de rediseño de la página web de TicTeams, enfocado en mejorar la experiencia del usuario y la estética visual. Su sitio web anterior presentaba desafíos en cuanto a navegación, claridad en los servicios ofrecidos y experiencia del usuario en general.",
    altText: "Rediseño de Página Web TicTeams",
    beforeImg: "/asset/inicio-tic.png",
    afterImg: "/asset/inicio-newtic.png",
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
    title: "Diseño de Aplicación - Home Care",
    imgBanner: "/asset/cover-homecare.png",
    types: ["App", "UX/UI"],
    description:
      "Diseño de aplicación móvil para gestión de citas médicas y seguimiento personalizado del paciente.",
    altText: "Diseño Aplicación Home Care",
    beforeImg: "/asset/wireframe-home.png",
    afterImg: "/asset/image-10.png",
    processSteps: [],
    tools: ["Figma", "UserTesting", "Zeplin"],
    results:
      "Mejora en la retención de usuarios y reducción de errores en la gestión de citas.",
    link: "https://www.figma.com/proto/bmEUKF9PnmOdL3Qmh3TvUQ/Home-Care-App?node-id=1-252&starting-point-node-id=1%3A286&t=NSDvfppPBv1g3cfF-1",
  },
  {
    id: 3,
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
    yappyImg: "/asset/INVENTARIO/pago yappy.png",
    adminImg: "/asset/INVENTARIO/admin (1).png",
    productImg: "/asset/INVENTARIO/PRODUCTOS.png",
    processSteps: [
      "Investigación de necesidades de los vendedores en el punto de venta.",
      "Diseño de flujos de venta: agregar productos por peso o unidad, cálculo automático de precios y edición rápida.",
      "Definición de cierre de caja, métodos de pago (efectivo, tarjeta, Yappy) y gestión de inventario.",
      "Creación de prototipos en Figma y validación con usuarios.",
    ],
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
            alt={project.altText}
          />
          <div className="flex flex-col gap-4">
            <p className="text-gray-600 text-md max-w-xl">{project.description}</p>
            {project.link && (
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
            Herramientas usadas
          </h2>
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


        {/* Investigación Detallada (solo para POS) */}
        {project.id === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-text">Investigación Detallada</h2>
            <p className="text-gray-600 mb-4">
              {project.research} <br /><br />
              <strong>Descripción:</strong> Es una solución integral de punto de venta diseñada específicamente para fruterías y negocios de productos frescos. Nuestro sistema automatiza completamente las operaciones diarias, desde la gestión de inventario hasta el procesamiento de ventas, proporcionando control total sobre el negocio.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Valor de Negocio</h3>
            <ul className="list-disc ml-6 mb-4 text-gray-600">
              <li><strong>Problemas que resuelve:</strong> Control manual de inventario propenso a errores, pérdida de productos por vencimiento, falta de trazabilidad en ventas, gestión ineficiente de cajeros, reportes manuales que consumen tiempo.</li>
              <li><strong>Beneficios clave:</strong> Ahorro de tiempo, reducción de pérdidas, mayor rentabilidad, control total y escalabilidad del negocio.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Casos de Uso Reales</h3>
            <p className="text-gray-600 mb-4">
              Escenarios como compra de frutas mixtas, llegada de nueva mercancía y análisis de rentabilidad, mostrando cómo el sistema facilita las operaciones diarias y mejora la toma de decisiones.
            </p>
          </div>
        )}

        {/* Mockups Antes / Después → solo para TicTeams y Home Care */}
        {(project.id === 1 || project.id === 2) && (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-text">Mockups</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col items-center">
                <h3 className="font-semibold mb-2 text-gray-600">Antes</h3>
                <img
                  src={project.beforeImg}
                  alt={`${project.title} antes`}
                  className="w-full max-w-sm"
                />
              </div>
              <div className="flex-1 flex flex-col items-center">
                <h3 className="font-semibold mb-2 text-gray-600">Después</h3>
                <img
                  src={project.afterImg}
                  alt={`${project.title} después`}
                  className="w-full max-w-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* Mockups → POS Sabores del Itsmo */}
        {project.id === 3 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 text-text">Mockups del Sistema POS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg font-semibold text-text">
              <div className="flex flex-col items-center">
                <h3 className="mb-2 text-gray-600">Home - Abrir caja</h3>
                <img src={project.abrirImg} alt="Abrir venta" className="w-full rounded shadow" /> 
              </div>  
              <div className="flex flex-col items-center">
                <h3 className="mb-2 text-gray-600">Home - Ventas</h3>
                <img src={project.beforeImg} alt="Abrir venta" className="w-full rounded shadow" /> 
              </div>  
              <div className="flex flex-col items-center">
                <h3 className="mb-2 text-gray-600">Agregar producto</h3>
                <img src={project.afterImg} alt="Crear venta" className="w-full rounded shadow" /> 
              </div>
              <div className="flex flex-col items-center">
                <h3 className="mb-2 text-gray-600">Home - Pagar</h3>
                <img src={project.yappyImg} alt="Pago Yappy" className="w-full rounded shadow" /> 
              </div>
              <div className="flex flex-col items-center">
                <h3 className="mb-2 text-gray-600">Dashboard Administrador</h3>
                <img src={project.adminImg} alt="Pantalla admin" className="w-full rounded shadow" /> 
              </div>
              <div className="flex flex-col items-center">
                <h3 className="mb-2 text-gray-600">Productos</h3>
                <img src={project.productImg} alt="Gestión de productos" className="w-full rounded shadow" /> 
              </div>
            </div>
          </div>
        )}

        {/* Userflow (si existe) */}
        {project.userflowImg && (
          <div className="mt-20">
            <h2 className="text-2xl font-semibold mb-4 text-text">Userflow</h2>
            <div className="w-full h-[600px] mb-4">
              <iframe
                src={project.userflowImg}
                title={`Userflow PDF de ${project.title}`}
                className="w-full h-full border rounded"
              />
            </div>
            {project.userflowAdminImg && project.userflowAdminImg.endsWith(".pdf") && (
              <div className="w-full h-[600px] mb-4">
                <iframe
                  src={project.userflowAdminImg}
                  title={`Userflow Admin PDF de ${project.title}`}
                  className="w-full h-full border rounded"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
