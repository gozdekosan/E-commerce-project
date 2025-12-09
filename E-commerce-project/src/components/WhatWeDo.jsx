import { Link } from 'react-router-dom';

const images = {
    main: '/images/teamfirst-1.png',
    topRight: '/images/teamfirst-2.png',
    bottomLeft: '/images/teamfirst-3.png',
    bottomRight: '/images/teamfirst-4.png',
    bottomFarRight: '/images/teamfirst-5.png',
};

const WhatWeDo = () => {
  return (
    <section className="pt-12 md:pt-20 pb-12 md:pb-20 bg-white">
      <div className="text-center mb-8 md:mb-12 px-4">
        <p className="text-xs md:text-sm font-bold text-[#737373] tracking-widest uppercase mb-3">
          WHAT WE DO
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#252B42] leading-tight">
          Innovation tailored for you
        </h1>
      </div>

      <div className="text-center text-sm font-bold mb-8 md:mb-12">
        <Link to="/" className="text-[#252B42] hover:text-gray-600 transition duration-200">
          Home
        </Link>
        <span className="mx-3 text-[#BDBDBD]">›</span>
        <span className="text-[#737373]">Team</span>
      </div>

      <div className="w-full">
        <div className="md:hidden flex flex-col">
          <div className="w-full h-[500px]">
            <img 
              src={images.main} 
              alt="Model in floral dress" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="grid grid-cols-2 gap-0">
            <div className="h-[250px]">
              <img 
                src={images.topRight} 
                alt="Model with bag" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="h-[250px]">
              <img 
                src={images.bottomLeft} 
                alt="Model in denim jacket" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="h-[250px]">
              <img 
                src={images.bottomRight} 
                alt="Model in black outfit" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="h-[250px]">
              <img 
                src={images.bottomFarRight}
                alt="Model in denim" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>

        <div className="hidden md:block max-w-[1440px] mx-auto">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-6 row-span-2 h-[600px]">
              <img 
                src={images.main} 
                alt="Model in floral dress" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="col-span-3 h-[297px]">
              <img 
                src={images.topRight} 
                alt="Model with bag" 
                className="w-full h-full object-cover" 
              />
            </div>
        
            <div className="col-span-3 h-[297px]">
              <img 
                src={images.bottomLeft} 
                alt="Model in denim jacket" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="col-span-3 h-[297px]">
              <img 
                src={images.bottomRight} 
                alt="Model in black outfit" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="col-span-3 h-[297px]">
              <img 
                src={images.bottomFarRight}
                alt="Model in denim" 
                className="w-full h-full object-cover" 
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;