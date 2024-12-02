// VelvetBlossom.jsx

const ShaikProject = () => {
    return (
    <>
        <section className='flex justify-center py-6 bg-shaik'>
                    <div className=''>
                    <img className='h-96  shadow-lg rounded ' src="/asset/Cover.png" alt="" />
                    </div>
        </section> 
        <section className="flex bg-shaik text-background py-20 gap-10 justify-center items-center">
            <div className="flex flex-col  max-w-screen-lg justify-center items-center gap-8 lg:flex-row ">
                <img className="w-96" src="/asset/Frame 67.png" alt="" />
                <div className="flex flex-col gap-4 justify-center w-1/2">
                    <h3 className="text-stext font-bold text-xl">Sobre el proyecto</h3>
                    <p className="pb-6">Diseño de una plataforma web de asesoría financiera que tiene como objetivo resolver las dificultades que enfrentan los usuarios al buscar y obtener servicios financieros como préstamos personales y consolidación de deudas. Este proyecto se centra en la creación de una experiencia de usuario que aborde la descentralización del proceso, la falta de confianza en asesores financieros online, y la falta de tiempo de los usuarios.</p>
                    <h3 className="text-stext font-bold text-xl">Problemas Identificados</h3>
                    <p>
                    <strong>Proceso Descentralizado: </strong>Los usuarios deben investigar múltiples entidades financieras individualmente para comparar opciones, lo cual no solo consume tiempo, sino que también genera confusión y frustración.</p>
                    <p><strong>Falta de Tiempo:</strong>  Muchos usuarios tienen horarios ocupados y no pueden invertir el tiempo necesario para solicitar cotizaciones de diferentes entidades financieras.</p>
                    <p><strong>Inseguridad y Desconfianza:</strong>
                         Debido a las crecientes estafas online, los usuarios desconfían de las plataformas de asesoría financiera, lo que les impide tomar decisiones con confianza.</p>
                </div>
            </div>
        </section>
        <section className="flex justify-center items-center py-20">
            <div className="flex flex-col text-shaik font-bold text-2xl  max-w-screen-lg justify-center items-center gap-8">
                <h2>Benchmark</h2>
                <img className="items-center" src="/asset/Frame 97.png" alt="" />
            </div>
        </section>
        <section className="flex justify-center items-center  bg-shaik">
        <div className="flex flex-col text-shaik font-bold text-2xl gap-8 max-w-screen-lg justify-center items-center">
                <h2></h2>
                <img src="/asset/Hallazgos.png" alt="" />
            </div>
        </section>
        <section className="flex flex-col font-bold text-2xl text-text justify-center items-center py-20">
        <h2>User Person</h2>
        <div className="flex flex-col text-shaik font-bold text-2xl gap-8 max-w-screen-lg justify-center items-center lg:flex-row">
                <img className="w-80" src="/asset/User-Jaime.png" alt="" />
                <img className="w-80"  src="/asset/User-Ana.png" alt="" />
            </div>
        </section>
        <section className="flex flex-col font-bold text-2xl text-background justify-center items-center py-20 bg-shaik gap-10">
        <h2>Arquitectura de la Información</h2>
        <div className="flex  text-shaik font-bold text-2xl gap-8 max-w-screen-lg justify-center items-center px-20">
                <img className="" src="/asset/arq.png" alt="" />
               
            </div>
        </section>
        <section className="flex flex-col font-bold text-2xl text-shaik justify-center items-center py-20 ">
        <h2>UI Kit</h2>
        <div className="flex flex-wrap text-shaik font-bold text-2xl   justify-center items-center max-w-screen-lg gap-4">
                <img className="w-96" src="/asset/grid.png" alt="" />
                <img className="w-96" src="/asset/Color UI.png" alt="" />
                <img className="w-40" src="/asset/Button.png" alt="" />
                <img className="" src="/asset/icon.png" alt="" />
            </div>
        </section>
        <section className="flex  flex-col justify-center items-center py-20 bg-shaik">
        <h2 className="font-bold text-2xl text-white pb-10">Insight</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 text-shaik font-bold text-2xl gap-8 max-w-screen-lg justify-center px-20 lg:grid-cols-2  ">
               
                <img className="rounded-md shadow-sm shadow-secondary" src="/asset/screencapture-shaikasesores-2024-10-25-16_38_18.png" alt="" />
                <img className="rounded-md shadow-sm shadow-secondary" src="/asset/screencapture-shaikasesores-nosotros-2024-10-25-16_32_41.png" alt="" />
                <img className="rounded-md shadow-sm shadow-secondary" src="/asset/screencapture-shaikasesores-servicios-2024-10-25-16_33_00.png" alt="" />
                <img className="rounded-md shadow-sm shadow-secondary" src="/asset/screencapture-shaikasesores-preguntas-2024-10-25-16_33_27.png" alt="" />
            </div>
        </section>

    </>
            
        
    
       
    );
};

export default ShaikProject
