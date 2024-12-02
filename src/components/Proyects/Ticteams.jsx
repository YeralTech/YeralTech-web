// VelvetBlossom.jsx

const TicteamsProject = () => {
    return (
    <>
        <section className='flex justify-center py-4 bg-tic'>
                    <div className='w-auto'>
                    <img className='px-20 h-full' src="/public/asset/cover-ticteams.png" alt="" />
                    </div>
        </section> 
        <section className="flex bg-bglight  py-20 gap-10 justify-center items-center">
            <div className="flex flex-col  max-w-screen-lg justify-center items-center ">
            <h2 className=" font-bold text-2xl pb-6">Resumen del Proyecto</h2>
                    <p className="px-10 text-lg pb">
                    <strong>Objetivo:</strong> Rediseñar el sitio web para mejorar la experiencia de usuario y comunicar los servicios de TicTeams de manera efectiva, alineada a su identidad y valores.</p>
                    
                    <p >
                    <strong>Duración del Proyecto: </strong>6 semanas</p>
                    <p><strong>Rol en el Proyecto:</strong>UX/UI Designer</p>
            </div>
        </section>
       
        <section className="flex   justify-center items-center text-white bg-bgtic py-10 px-10">
        <div className="flex gap-8 max-w-screen-lg justify-center items-center px-6 flex-col lg:flex-row">
        <img  src="/public/asset/section2-tic.png" alt="" />
            <div className="flex-col">
            <h2 className="text-3xl font-bold pb-2">Introducción</h2>
                <p className="text-md text-justify">TicTeams es una empresa panameña de desarrollo de software que se especializa en soluciones tecnológicas a medida para optimizar procesos en empresas locales. A pesar de ofrecer servicios avanzados en tecnología y desarrollo, su sitio web anterior presentaba desafíos en cuanto a navegación, claridad en los servicios ofrecidos y experiencia del usuario en general. Esto dificultaba que los usuarios potenciales comprendieran el valor diferencial de TIC Teams y se decidieran a contactarlos para nuevos proyectos.</p>
            </div>
            </div>
        </section>
        <section className="flex   justify-center items-center  bg-bglight py-10 px-10">
        <div className="flex gap-8 max-w-screen-lg justify-center items-center px-6 flex-col lg:flex-row">
            <div className="flex-col ">
            <h2 className="text-3xl font-bold pb-2">Contexto y Problemática</h2>
                <p className="text-md text-justify">El sitio web original de TicTeams no estaba cumpliendo con los objetivos de negocio ni con las expectativas de los usuarios. Tras una auditoría inicial y análisis de métricas, se identificaron los siguientes problemas:
                Falta de claridad en los servicios: Los usuarios no entendían rápidamente qué tipo de servicios ofrecía TIC Teams ni cómo podrían ayudarles.
                Navegación confusa: La estructura del sitio web no facilitaba la búsqueda de información, lo cual aumentaba la tasa de rebote.
                Ausencia de elementos de confianza: No se mostraban testimonios, casos de éxito ni portafolio de proyectos, lo cual reducía la credibilidad de la empresa y dificultaba la generación de confianza con nuevos clientes.
                Proceso de contacto poco intuitivo: El formulario de contacto era poco visible y su diseño no incentivaba a los usuarios a completar una solicitud de asesoría.</p>
            </div>
                <img  src="/public/asset/section-contexto.png" alt="" />
            </div>
        </section>
         
        <section className="flex   justify-center items-center  py-10 px-10">
        <div className="flex gap-8 max-w-screen-lg justify-center items-center px-6 flex-col lg:flex-row">
        <img  src="/public/asset/3441210.png" alt="" />
            <div className="flex-col">
            <h2 className="text-3xl font-bold pb-2">Objetivos del Proyecto</h2>
                <p className="text-md text-justify">Los objetivos del proyecto de rediseño se centran en corregir estas deficiencias y mejorar la experiencia del usuario, alineándose con las siguientes heurísticas:
                <p><strong>Visibilidad del estado del sistema:</strong> Crear una jerarquía visual clara y consistente para que los usuarios siempre sepan dónde se encuentran y qué pasos seguir.</p>
                <p><strong>Relación entre el sistema y el mundo real:</strong> Utilizar un lenguaje sencillo y familiar para describir los servicios y las funcionalidades del sitio.</p>
                <p> <strong>Control y libertad del usuario:</strong> Proporcionar opciones de navegación claras y permitir a los usuarios deshacer acciones fácilmente.</p>
               <p><strong>Consistencia y estándares:</strong> Establecer una guía de estilo visual coherente y utilizarla en todo el sitio.</p>
                <p><strong>Prevención de errores:</strong> Diseñar formularios intuitivos y proporcionar mensajes de error claros y constructivos.</p></p>
                
            </div>
            </div>
        </section>
        <section className="flex flex-col font-bold text-2xl  justify-center bg-bglight items-center py-20">
        <h2 className="text-3xl pb-8">User Person</h2>
        <div className="flex flex-col text-shaik font-bold text-2xl gap-8 max-w-screen-lg justify-center items-center ">
                <img className="user person- Juan" src="/public/asset/user-Juan.png" alt="" />
                <img className=""  src="/public/asset/user-Laura.png" alt="" />
            </div>
        </section>
        <section className="flex flex-col font-bold text-white bg-tic  justify-center items-center py-20">
        <h2 className="text-3xl pb-20">Flujo del Usuario</h2>
        <div className="flex font-bold gap-4 max-w-screen-lg justify-center items-center px-20">
                <img className="w-auto" src="/public/asset/userflow.png" alt="" />
               
            </div>
        </section>
        
        <section className="flex  flex-col justify-center items-center py-20 bg-bglight">
        <h2c className="text-3xl font-bold py-10 ">Mockup Final</h2c>
        <div className="grid grid-cols-1 md:grid-cols-2 font-bold  gap-6  max-w-screen-lg justify-center  lg:grid-cols-2  ">
               <div className="text-center text-lg  pb-8"> 
                    <h3 className="py-4"> Inicio - Anterior</h3>
                    <img className="rounded-md shadow-md shadow-secondary" src="/public/asset/inicio-tic.png" alt="" />
               </div>
               <div className="text-center text-xl "> 
                    <h3 className="py-4">Inicio - Actual</h3>
                    <img className="rounded-md shadow-md shadow-secondary" src="/public/asset/inicio-newtic.png" alt="" />
               </div>
               <div className="text-center text-lg "> 
                    <h3 className="py-4"> Facturacion Electronica - Anterior</h3>
                    <img className="rounded-md shadow-md shadow-secondary" src="/public/asset/facturacion-electronica.png" alt="" />
               </div>
               <div className="text-center text-xl "> 
                    <h3 className="py-4">Facturacion Electronica - Actual</h3>
                    <img className="rounded-md shadow-md shadow-secondary" src="/public/asset/odoo-new.png" alt="" />
               </div>
            </div>
        </section>

    </>
            
        
    
       
    );
};

export default TicteamsProject
