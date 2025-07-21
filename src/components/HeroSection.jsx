const HeroSection = () => {
    const addMeet = 'https://calendly.com/yeraldinespinosa/reunion-30-min';

    const AddMeetClick = () => {
        window.open(addMeet, '_blank');
    };

    return (
        <section
  id="hero-section"
  className="bg-background text-text flex items-center justify-center gap-12 flex-col lg:flex-row lg:py-6"
>

  <div className=" flex flex-col items-center justify-center gap-12 pt-20 pb-10 px-10 lg:px-0 max-w-screen-xl mx-auto lg:flex-row">
  <div id="hero-text" className="flex flex-col justify-left   lg:w-1/2 xl:w-1/2 py-10">
    <h1 id="hero-title" className="font-raleway text-text text-5xl font-bold pb-4">
   Diseño experiencias digitales que conectan con tus usuarios.  
    </h1>
    <p id="hero-description" className="text-gray-600 font-regular font-sans text-xl pb-6 ">
    Soy Yeraldin Espinosa, diseño digitales que combinan estética, usabilidad y estrategia.  
    Trabajo con proyectos que necesitan una mirada enfocada y soluciones bien pensadas.
    </p>
    <div id="hero-buttons">
   
      <button
        id="hero-meeting-button"
        onClick={AddMeetClick}
        className="bg-primary w-auto px-4 py-2 text-background rounded-full mr-4 shadow-sm hover:bg-text transition duration-300"
       aria-label="Agenda una cita de 30 minutos con Yeraldin Espinosa"
      >
        ¿Tienes una idea?
      </button>
    </div>
  </div>

  <div id="hero-image-container" className="relative w-full lg:w-1/4">
    <div id="hero-image-overlay" className="w-60 h-64 absolute  inset-0 bg-primary opacity-50 blur-lg rounded-full  top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    <img
      id="hero-image"
      className="rounded-full relative z-10 border-primary w-80 top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      src="../../public/asset/Gemini_Generated_Image_rp7qkfrp7qkfrp7q.png"
      alt="Yeraldin Espinosa - Diseñadora UX/UI en Panamá"
    />
  </div>
  </div>
  
</section>

    );
};

export default HeroSection;
