import React from 'react';
import { useForm, ValidationError } from 
'@formspree/react';
import { FaCheckCircle } from "react-icons/fa";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("meoqenyb");

  if (state.succeeded) {
    return <section id="form-section" className="py-20 flex justify-center items-center gap-8 max-w-screen-lg mx-auto">
      <h2 className="font-bold text-5xl w-1/2">¡Lleva tu diseño al siguiente nivel! Contáctame.</h2> 
      <div className='bg-text w-96 px-10 py-10 flex flex-col justify-center items-center  rounded-md font-sans shadow-xl '>
      <FaCheckCircle className='text-5xl text-white pb-2 text-center' />
      <p className='text-white text-2xl text-center'> ¡Tu solicitud se ha enviado exitosamente!</p>
      </div>
      
      </section>
    }

  return (
    <section id="form-section" className="py-20 flex flex-col justify-center items-center gap-8 max-w-screen-lg mx-auto lg:flex-row">
      <h2 className="font-bold text-5xl text-center lg:w-1/2">¡Lleva tu diseño al siguiente nivel! Contáctame.</h2>
      <form 
        action="https://formspree.io/f/meoqenyb"
        method="POST"
        onSubmit={handleSubmit} 
        className="bg-text w-96 px-10 py-10 flex flex-col justify-center rounded-md font-sans shadow-xl"
      >
        <h3 className="text-2xl text-background text-center pb-4 font-bold">Contacto</h3>

        <label className="text-background pb-1" htmlFor="name">
          Nombre
        </label>
        <input
          id="name"
          type="text" 
          name="name"
          className="mb-4 pl-2 text-md py-2 text-base rounded-md"
          required 
        />
        <ValidationError 
          prefix="Nombre" 
          field="name"
          errors={state.errors}
        />

        <label className="text-background pb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className="mb-4 pl-2 text-md py-2 text-base rounded-md"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />

        <label className="text-background pb-1" htmlFor="asunto">
          Asunto
        </label>
        <input
          id="asunto"
          type="text" 
          name="asunto"
          className="mb-4 pl-2 text-md py-2 text-base rounded-md"
          required 
        />
        <ValidationError 
          prefix="Asunto" 
          field="asunto"
          errors={state.errors}
        />

        <label className="text-background pb-1" htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          className="mb-4 h-24 pl-2 text-md py-2 text-base rounded-md"
          required
        />
        <ValidationError 
          prefix="Mensaje" 
          field="message"
          errors={state.errors}
        />
        
        <button type="submit" disabled={state.submitting} className="bg-secondary mt-4 rounded-md py-2 shadow-sm shadow-text transition duration-300 hover:bg-hover hover:text-background">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
