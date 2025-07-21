import { FiLayout, FiSearch, FiMousePointer, FiUserCheck } from "react-icons/fi";

const ServicesSection = () => {
  const services = [
     {
      title: "Evaluación UX ",
      description: "Sesiones colaborativas para revisar tu producto y ofrecer recomendaciones precisas.",
      icon: <FiUserCheck className="text-primary w-8 h-8" />,
    },
     {
      title: "Investigación UX",
      description:
        "Analizo tu interfaz y flujo de navegación para identificar problemas de usabilidad, inconsistencias y oportunidades de mejora.",
      icon: <FiSearch className="text-primary w-8 h-8" />,
    },
    {
      title: "Diseño de interfaces funcionales",
      description:
        "Diseño productos digitales con un enfoque moderno, funcional, alineadas a los objetivos del negocio y orientado al usuario.",
      icon: <FiLayout className="text-primary w-8 h-8" />,
    },
   
    {
      title: "Prototipos navegables",
      description:
        "Diseño prototipos navegables que permiten probar funcionalidades,recibir feedback temprano y reducir riesgos antes de desarrollar.",
      icon: <FiMousePointer className="text-primary w-8 h-8" />,
    },
   
  ];

  return (
    <section id="services" className="px-6 py-20 bg-p200"> 
      <h2 className="text-2xl font-raleway  font-bold text-center mb-2 text-text">
        Soluciones
      </h2>
      <p className="text-gray-600 font-sans pb-6 text-center text-lg">Diseño soluciones digitales que mejoran la experiencia del usuario, aumentan la eficiencia del producto y fortalecen la percepción de marca.</p>
      <div className="grid gap-10 mt-4 max-w-5xl mx-auto md:grid-cols-2">
        {services.map(({ title, description, icon }, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="flex-shrink-0">{icon}</div>
            <div>
              <h3 className="font-semibold text-lg  text-text">{title}</h3>
              <p className=" text-sm text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
