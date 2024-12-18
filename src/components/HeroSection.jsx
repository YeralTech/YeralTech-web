const HeroSection = () => {
    const addMeet = 'https://calendly.com/yeraldinespinosa/reunion-30-min';

    const AddMeetClick = () => {
        window.open(addMeet, '_blank');
    };

    return (
        <section
  id="hero-section"
  className="bg-secondary  text-text flex items-center justify-center gap-12 flex-col lg:flex-row lg:py-16"
>
  <div className="bg-secondary flex flex-col items-center justify-center gap-12 py-8 px-10 lg:px-0 max-w-screen-xl mx-auto lg:flex-row">
  <div id="hero-text" className="flex flex-col justify-left   lg:w-1/2 xl:w-1/2 py-10">
    <h1 id="hero-title" className="font-raleway text-text text-5xl font-bold pb-4">
      ¡Hola! Soy Yeraldin
    </h1>
    <p id="hero-description" className="text-text font-regular font-sans text-xl pb-6 ">
      Soy diseñadora UX/UI en Panamá. Mi misión es crear experiencias que sean tanto
      funcionales como sorprendentes. Da un vistazo a mis proyectos y veamos
      cómo puedo ayudarte a innovar.
    </p>
    <div id="hero-buttons">
      <button
        id="hero-meeting-button"
        onClick={AddMeetClick}
        className="bg-primary w-40 py-2 text-background rounded-md mr-4 shadow-sm shadow-text hover:bg-text transition duration-300"
       aria-label="Agenda una cita de 30 minutos con Yeraldin Espinosa"
      >
        Agenda una cita
      </button>
    </div>
  </div>

  <div id="hero-image-container" className="relative w-full lg:w-1/4">
    <div id="hero-image-overlay" className="w-60  absolute inset-0 bg-primary opacity-50 blur-lg rounded-full  top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    <img
      id="hero-image"
      className="rounded-full relative z-10 border-2 border-primary w-60 top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      src="/asset/image0-nA2741fkc-transformed.png"
      alt="Yeraldin Espinosa - Diseñadora UX/UI en Panamá"
    />
  </div>
  </div>
  
</section>

    );
};

export default HeroSection;
