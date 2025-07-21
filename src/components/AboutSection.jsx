const AboutSection = () => {
  return (
    <section id="about" className="px-6 py-20 bg-p200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">

        {/* Imagen con fondo borroso decorativo */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          {/* Círculo decorativo borroso */}

          <div className="absolute w-80 h-64 bg-primary/60 rounded-full blur-2xl z-0" />
         
          {/* Imagen encima */}
          <img
            src="/asset/5-removebg-preview (2).png"
            alt="Yeraldin Espinosa UX/UI Designer"
            className="relative rounded-full w-80  object-cover z-10"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-text text-raleway ">Sobre mí</h2>
          <p className="text-gray-600  text-sans text-md leading-relaxed">
            Soy Yeraldin Espinosa, diseñadora UX/UI enfocada en crear interfaces claras y funcionales.
            He trabajado en el rediseño de sitios web empresariales, en el diseño de aplicaciones móviles
            para servicios financieros, y en plataformas orientadas a mejorar la experiencia de usuarios reales.
          </p>
          <p className="text-gray-600  text-sans text-md leading-relaxed mt-4">
            Mi enfoque está basado en entender los flujos reales del negocio y traducirlos en pantallas que
            reduzcan la fricción, mejoren el uso y ayuden a lograr conversiones. Uso herramientas como Figma,
            Zeplin y Hotjar para alinear diseño con objetivos del cliente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
