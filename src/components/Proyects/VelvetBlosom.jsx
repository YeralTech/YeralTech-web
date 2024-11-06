import Footer from "../Footer";

const VelvetBlossom = () => {
    return (
    <>
        <section className='flex justify-center bg-velvet'>
                    <div className=''>
                    <img className='' src="/asset/Frame 1.png" alt="" />
                    </div>
        </section> 
        <section className='flex justify-center items-center py-20'>
            <div className='flex flex-col w-2/4'>
            <h2 className='text-2xl font-bold pb-6'>Descripción del proyecto</h2>
            <p>Velvet Blossom es una floristería en línea diseñada para usuarios que necesitan comprar flores en situaciones inesperadas, como aniversarios olvidados o celebraciones de última hora. La plataforma ofrece una experiencia rápida y eficiente con opciones de entrega el mismo día. Los usuarios principales son personas ocupadas, típicamente hombres, que buscan soluciones inmediatas para momentos especiales.</p>
            </div>
        <img className="w-80" src="/public/asset/iPhone 13 Pro.png" alt="" />
            
        </section>
        <section className='flex justify-center items-center gap-10 py-20 bg-velvet px-10 lg:gap-32'>
            <div className='flex flex-col w-96 justify-center items-center px-10 '>
                <div className='flex text-background gap-2 justify-center items-center pb-4'>
                <img src="/asset/Vector.png" alt="" /> 
                <h3 className='text-xl '>Problema</h3>
                </div>
                <p className='flex text-background justify-center items-center '>Muchos usuarios olvidan fechas importantes, como aniversarios, y necesitan una solución rápida para comprar y enviar flores de manera eficiente. Las floristerías en línea existentes no siempre facilitan un proceso ágil durante emergencias.</p>
            </div>
            <div className='flex flex-col w-80 justify-center items-center '>
                <div className='flex text-background gap-4 w-2/4 justify-center items-center pb-4 '>
                <img src="/asset/Vector2.png" alt="" /> 
                <h3 className='text-xl '>Objetivo</h3>
                </div>
                <p className='flex text-background justify-center items-center '>El objetivo del proyecto era crear una plataforma de compra de flores fácil de usar que permita a los usuarios seleccionar un ramo y programar la entrega en menos de 10 minutos, especialmente en situaciones urgentes.</p>
            </div>
        </section>
       
        <section>
        <div className=" text-white text-center p-10 px-20 ">
      <h2 className="text-2xl font-bold">Investigación de usuarios: Puntos de dolor</h2>
      <div className="gap-6 justify-center mt-8 flex flex-col items-center lg:flex-row ">
        <div className="text-white bg-velvet p-6 rounded-lg shadow-md w-60">
          <div className="text-3xl font-bold mb-2 ">1</div>
          <h3 className="text-xl font-semibold mb-4">Falta de tiempo</h3>
          <p className="text-sm">Los usuarios se sintieron abrumados al tener que buscar entre múltiples opciones y filtros durante emergencias.</p>
        </div>
        <div className="text-white bg-velvet p-6 rounded-lg shadow-md w-60">
          <div className="text-3xl font-bold mb-2">2</div>
          <h3 className="text-xl font-semibold mb-4">Navegación confusa</h3>
          <p className="text-sm">Muchas plataformas no priorizan opciones para entrega rápida o de última hora.</p>
        </div>
        <div className="text-white bg-velvet p-6 rounded-lg shadow-md w-60">
          <div className="text-3xl font-bold mb-2">3</div>
          <h3 className="text-xl font-semibold mb-4">Personalización complicada</h3>
          <p className="text-sm">Los usuarios querían incluir una nota personalizada, pero encontraron el proceso de personalización demasiado tedioso.</p>
        </div>
        <div className="text-white bg-velvet p-6 rounded-lg shadow-md w-60">
          <div className="text-3xl font-bold mb-2">4</div>
          <h3 className="text-xl font-semibold mb-4">Incertidumbre sobre la entrega</h3>
          <p className="text-sm">Los usuarios carecían de confianza en que su pedido llegaría a tiempo.</p>
        </div>
      </div>
    </div>
        </section>
        <section className=' bg-velvet py-20 flex flex-col justify-center items-center gap-6'>
            <h2 className='text-2xl font-bold text-white'>User Persona</h2>
            <img src="/public/asset/Frame 3.png" alt="" />
        </section>
        <section className=' py-20 flex flex-col justify-center items-center gap-6 px-32 '>
        <h2 className='text-2xl font-bold '>Flujo del Usuario</h2>
        <img src="/public/asset/Frame 34.png" alt="" />
        </section>
        <section className="flex flex-col justify-center items-center py-20 bg-velvet">
          <h2 className="text-2xl font-bold text-white pb-6">Wireframe Baja Fidelidad</h2>
          <img className="" src="/asset/wireframe-baja.png" alt="" />
        </section>
        <section className="flex flex-col justify-center items-center py-20">
          <h2 className="text-2xl font-bold text-text pb-6">Wireframe Alta Fidelidad</h2>
          <img className="px-60" src="/public/asset/Group 25.png" alt="" />
        </section>
        <Footer/>  
    </>
    );
};

export default VelvetBlossom;
