
import Footer from "../Footer";

const VelvetBlossom = () => {
    return (
    <>
        <section className='flex justify-center bg-velvet'>
                    <div className=''>
                    <img className='h-96' src="/asset/Frame 1.png" alt="" />
                    </div>
        </section> 
        <section className='flex  justify-center  items-center py-20'>
            <div className='flex flex-col w-2/4'>
            <h2 className='text-2xl font-bold pb-6'>Project overview            </h2>
            <p>Velvet Blossom is an online florist designed for users who need to purchase flowers in unexpected situations, such as forgotten anniversaries or last-minute celebrations. The platform offers a quick and efficient experience with same-day delivery options. The primary users are busy individuals, typically men, who seek immediate solutions for special moments.</p>
            </div>
        <img src="/asset/iPhone 13 Pro.png" alt="" />
            
        </section>
        <section className='flex  justify-center  items-center gap-10 py-20 bg-velvet px-10 lg:gap-32'>
            <div className='flex flex-col w-96 justify-center  items-center px-10 '>
                <div className='flex text-background gap-2 justify-center  items-center pb-4'>
                <img src="/asset/Vector.png" alt="" /> 
                <h3 className='text-xl '>Problem</h3>
                </div>
                <p className= 'flex text-background justify-center  items-center '>Many users forget important dates, such as anniversaries, and need a quick solution to efficiently purchase and send flowers. Existing online florists do not always facilitate an agile process during emergencies.</p>
            </div>
            <div className='flex flex-col w-80 justify-center  items-center '>
                <div className='flex text-background gap-4  w-2/4 justify-center  items-center pb-4 '>
                <img src="/asset/Vector2.png" alt="" /> 
                <h3 className='text-xl '>Problem</h3>
                </div>
                <p className= 'flex text-background justify-center  items-center '>Many users forget important dates, such as anniversaries, and need a quick solution to efficiently purchase and send flowers. Existing online florists do not always facilitate an agile process during emergencies.</p>
            </div>
        </section>
        <section className='flex  justify-center  items-center py-20'>
              <img src="/asset/iPhone 13 Pro.png" alt="" />
            <div className='flex flex-col w-2/4  justify-center '>
            <h2 className='text-2xl font-bold pb-6'>Project overview            </h2>
            <p>Velvet Blossom is an online florist designed for users who need to purchase flowers in unexpected situations, such as forgotten anniversaries or last-minute celebrations. The platform offers a quick and efficient experience with same-day delivery options. The primary users are busy individuals, typically men, who seek immediate solutions for special moments.</p>
            </div>
      
            
        </section>
        <section>
        <div className="bg-velvet text-white text-center p-10 px-20 ">
      <h2 className="text-2xl font-bold">User Research: Pain Points</h2>
      <div className="gap-6 justify-center mt-8 flex flex-col items-center lg:flex-row ">
        <div className="bg-white text-[#37483c] p-6 rounded-lg shadow-md w-60">
          <div className="text-3xl font-bold mb-2">1</div>
          <h3 className="text-xl font-semibold mb-4">Lack of time</h3>
          <p className="text-sm">Users felt overwhelmed by having to search through multiple options and filters during emergencies.</p>
        </div>
        <div className="bg-white text-[#37483c] p-6 rounded-lg shadow-md w-60">
          <div className="text-3xl font-bold mb-2">2</div>
          <h3 className="text-xl font-semibold mb-4">Confusing navigation</h3>
          <p className="text-sm">Many platforms do not prioritize options for fast or last-minute delivery.</p>
        </div>
        <div className="bg-white text-[#37483c] p-6 rounded-lg shadow-md w-60">
          <div className="text-3xl font-bold mb-2">3</div>
          <h3 className="text-xl font-semibold mb-4">Complicated personalization</h3>
          <p className="text-sm">Users wanted to include a personalized note but found the customization process too tedious.</p>
        </div>
        <div className="bg-white text-[#37483c] p-6 rounded-lg shadow-md w-60">
          <div className="text-3xl font-bold mb-2">4</div>
          <h3 className="text-xl font-semibold mb-4">Uncertainty about delivery</h3>
          <p className="text-sm">Users lacked confidence that their order would arrive on time.</p>
        </div>
      </div>
    </div>
        </section>
        <section className='py-20 flex  flex-col justify-center items-center gap-6'>
            <h2 className='text-2xl font-bold text-text'>User Person</h2>
            <img src="/asset/Frame 3.png" alt="" />
        </section>
        <section className='py-20 flex  flex-col justify-center items-center gap-6 px-32 bg-velvet'>
        <h2 className='text-2xl font-bold text-background'>User Person</h2>
        <img src="/asset/Frame 34.png" alt="" />
        </section>
        <section className="flex flex-col justify-center items-center py-20">
          <h2 className="text-2xl font-bold text-text pb-6">Wireframe</h2>
          <img className="" src="/asset/wireframe-baja.png" alt="" />
        </section>
        <section className="flex flex-col justify-center items-center py-20">
          <h2 className="text-2xl font-bold text-text pb-6">Wireframe</h2>
          <img className="" src="/asset/wireframe.png" alt="" />
        </section>
        <Footer/>  
    </>
       
        
    
       
    );
};

export default VelvetBlossom;
