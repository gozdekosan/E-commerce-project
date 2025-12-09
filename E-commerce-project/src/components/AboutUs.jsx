const AboutUs = () => {
  const primaryColor = 'bg-[#23A6F0]'; 
  const heroImage = '/images/aboutus.png'; 
  const headlineClasses = "text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-bold text-gray-800 leading-tight mb-6";
  
  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
    
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 xl:pr-20 text-center lg:text-left">
          <p className="text-sm font-bold text-gray-700 tracking-widest uppercase mb-4">ABOUT COMPANY</p>
          <h1 className={headlineClasses}>
            ABOUT US
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
            We know how large objects will act, but things on a small scale act, but things on a small scale
          </p>

          <button 
            className={`${primaryColor} text-white py-3 px-8 rounded-md font-bold hover:bg-blue-700 transition duration-300 shadow-lg`}
          >
            Get Quote Now
          </button>
        </div>
        
        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
          
          <img 
            src={heroImage} 
            alt="Young woman in yellow dress holding shopping bags" 
            className="w-full h-auto object-cover max-w-lg md:max-w-2xl lg:max-w-3xl"
          />
          
          <div className="absolute top-10 right-0 w-8 h-8 rounded-full bg-pink-200 opacity-60 hidden lg:block"></div>
          <div className="absolute bottom-10 left-0 w-12 h-12 rounded-full bg-purple-200 opacity-40 hidden lg:block"></div>
        </div>
        
      </div>

      <div className="max-w-7xl mx-auto mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t pt-16 border-gray-200">
          <div className="text-center lg:text-left">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Problems Styling
            </h4>
            <h4 className="text-2xl font-bold text-gray-800">
              Met enim Mollie non desert Alamo est sit clissequy dolor do met sami.
            </h4>
            
          </div>
          
          <div className="text-center lg:text-left text-gray-500 space-y-4 px-4 lg:px-0">
            <p>
              Problems trying to resolve the conflict between the two major realms of Classical physics, Newtonian mechanics
            </p>
            <p>
              Problems trying to resolve the conflict between the two major realms of Classical physics, Newtonian mechanics
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 text-center mt-20 md:mt-24">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-[#252B42]">15K</span>
            <span className="text-sm text-gray-500 mt-2">Brands</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-[#252B42]">100+</span>
            <span className="text-sm text-gray-500 mt-2">Global Partners</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-[#252B42]">95%</span>
            <span className="text-sm text-gray-500 mt-2">Satisfaction</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-[#252B42]">2K</span>
            <span className="text-sm text-gray-500 mt-2">Happy Customers</span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;