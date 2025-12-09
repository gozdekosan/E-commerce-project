const WorkWithUs = () => {
  const primaryBgColor = 'bg-[#2A7CC7]'; 
  const buttonBgColor = 'bg-white';     
  const buttonTextColor = 'text-blue-600'; 

  const heroImage = '/images/workwithus.png'; 

  return (
    <section className="py-20 px-4 md:px-10 lg:px-32 bg-white">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto rounded-xl overflow-hidden shadow-2xl">
        <div className={`lg:w-1/2 p-12 md:p-16 flex flex-col justify-center ${primaryBgColor} text-white`}>
          
          <p className="text-sm font-bold tracking-widest uppercase mb-4 opacity-80">WORK WITH US</p>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Now Let’s grow Yours
          </h1>

          <p className="text-md mb-8 max-w-md opacity-90">
            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
          </p>

          <button 
            className={`py-3 px-8 rounded-lg font-bold transition duration-300 w-fit ${buttonBgColor} ${buttonTextColor} hover:bg-gray-100`}
          >
            Button
          </button>
        </div>

        <div className="lg:w-1/2 relative">
          <img 
            src={heroImage} 
            alt="Model in pink sweater" 
            className="w-full h-full object-cover"
          />
        </div>
        
      </div>
    </section>
  );
};

export default WorkWithUs;