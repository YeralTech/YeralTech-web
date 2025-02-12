
const HomeCare = () => {
    return (
    <>
        <section className='flex justify-center bg-homelg items-center '>
                    <div className='w-auto  flex justify-center items-center'>
                    <img className='h-full px-10' src="/asset/cover-homecare.png" alt="" />
                    </div>
        </section> 
        <section className="flex py-10 gap-10 justify-center items-center bg-homelg ">
            <div className="flex flex-col  max-w-screen-lg justify-center items-center gap-3">
            <h2 className=" font-bold text-3xl pb-6">Resumen del Proyecto</h2>
                 <p><strong>Cliente:</strong> Home Care</p>
                <p><strong>Rol en el Proyecto:</strong>UX/UI Designer</p>
                    <p className="px-10 text-lg pb">
                    <strong>Objetivo:</strong> Diseñar una aplicación móvil para Home Care, app de enfermeros que trabajan en una casa de ancianos y necesitan una aplicación intuitiva y funcional,  Asegurarando que puedan realizar sus actividades diarias de manera más eficiente y sin errores.</p>
            </div>
        </section>
       
        <section className="flex bg- justify-center items-center py-10 px-10">
        <div className="flex gap-8 max-w-screen-lg justify-center items-center px-6 flex-col lg:flex-col">
            <div className="flex-row ">
            <h2 className="text-3xl font-bold pb-2"> Investigación y Análisis Inicial </h2>
                <p className="text-md text-justify">Para entender los problemas y oportunidades para crear la app Home Care, se realizo una evaluación para  identificar áreas críticas que impactan la experiencia del usuario, en este caso, enfermeros que necesitan una herramienta intuitiva y eficiente para gestionar sus actividades diarias.</p>
            </div>
            <div className="flex  flex-col lg:flex-row justify-center   gap-10 w-auto px-10"> 
                <div className="flex flex-col gap-4 shadow-lg p-4 rounded-md border-2 border-blue w-full">
                    <h3 className="bg-bghome text-blue py-2 px-4 font-bold">Problema Identificado:</h3>
                
                    <p >- La app carece de una sección de notificaciones, dificultando el seguimiento de tareas importantes y su estado.</p>
                    <p>- La información sobre los pacientes y sus estados no está detallada ni organizada de manera coherente.</p>
                    <p>- La aplicación actual no ofrece funcionalidad para registrar o gestionar tareas, lo que genera frustración y desmotivación en los usuarios.</p>
                    <p>- La interfaz es confusa y está mal organizada, lo que dificulta la navegación y el uso de la aplicación.</p>
                </div>
                <div className="flex flex-col gap-4 shadow-md p-4 rounded-md w-full border-2 border-blue">
                    <h3 className="bg-bghome text-blue py-2 px-4 font-bold">Recomendación</h3>
                
                    <p>- Integrar una sección de notificaciones categorizadas (alta, media, baja) para alertar a los usuarios sobre tareas pendientes y cambios relevantes, mejorando la visibilidad del estado del sistema.</p>
                    <p>- Ampliar los perfiles de los pacientes para incluir detalles como historial médico, enfermedades, medicamentos y horarios de baño, haciendo la información más comprensible y fácil de interpretar para los enfermeros.</p>
                    <p>- Incluir una sección de gestión de tareas que permita a los enfermeros registrar, editar y eliminar tareas, proporcionando control y autonomía sobre su flujo de trabajo.</p>
                    <p>- Reorganizar la arquitectura de la información de la app y seguir estándares de diseño reconocidos para mejorar la estructura de navegación y la usabilidad.</p>
                </div>
            </div>
            
            </div>
        </section>
        <section className="flex bg-bghome justify-center items-center py-10 px-10">
        <div className="flex gap-8 max-w-screen-lg justify-center items-center px-6 flex-col lg:flex-col">
            <div className="flex-row ">
            <h2 className="text-3xl font-bold py-8"> User Journey: Ana, Enfermera en Turno de Mañana </h2>
            <p></p>
                <p className="text-md text-justify pt-2"><strong>Persona: </strong>Ana es enfermera y trabaja para Home care, ella trabaja turnos de mañana y maneja una carga de 8 pacientes por turno. Necesita una herramienta fácil de usar que optimice su tiempo y con la que pueda llevar un registro detallado de sus pacientes. </p>
                <p className="pt-4"><strong>Contexto:</strong> Ana comienza su turno necesita ver sus tareas pendientes y registrar un nuevo paciente.</p>
            </div>
        
        <div className="flex flex-col text-shaik font-bold text-2xl gap-8 max-w-screen-lg justify-center items-center ">
                <img className="user person- Juan" src="/asset/user journey.png" alt="" />
            </div>
            </div>
        </section>
        <section className="flex flex-col font-bold bg-homelg  justify-center items-center py-20">
        <h2 className="text-3xl pb-10">Arquitectura de la información</h2>
        <div className="flex font-bold  max-w-screen-lg justify-center items-center ">
                <img className="w-auto" src="/asset/arqui-home.png" alt="" />
               
            </div>
        </section>
        <section className="flex flex-col font-bold bg-bghome justify-center items-center py-20">
        <div className="flex font-bold  max-w-screen-lg justify-center items-center ">
                <img className="w-auto" src="/asset/userf-home1.png" alt="" />
               
            </div>
        </section>
        <section className="flex flex-col font-bold bg-homelg justify-center items-center py-20">
        <h2 className="text-3xl pb-10">Wireframe</h2>
        <div className="flex font-bold  max-w-screen-lg justify-center items-center ">
                <img className="w-auto" src="/asset/wireframe-home.png" alt="" />
               
            </div>
        </section>
        <section className="flex flex-col font-bold bg justify-center items-center py-20">
        <h2 className="text-3xl pb-20">Mockup</h2>
        <div className="flex flex-col gap-20 font-bold  max-w-screen-lg justify-center items-center ">
                <img className="w-auto " src="/asset/image 10.png" alt="" />
                <img className="w-auto" src="/asset/image 11.png" alt="" />
            </div>
        </section>

    </>
            
        
    
       
    );
};

export default HomeCare
