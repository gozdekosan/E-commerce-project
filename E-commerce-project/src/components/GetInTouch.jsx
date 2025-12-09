import { Twitter, Facebook, Instagram, Linkedin } from 'react-feather';

const GetInTouch = () => {
  const imagePath = '/images/getintouch.png'; 
  
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-[60vh] py-16 px-4 md:px-20 lg:px-32">
      
      <div className="flex flex-col text-center lg:text-left w-full lg:w-1/2 mb-12 lg:mb-0">
        
       
        <p className="text-sm font-bold text-gray-700 tracking-widest uppercase mb-4">CONTACT US</p>
        <h1 className="text-6xl font-bold text-[#252B42] leading-tight mb-6">
          Get in touch <br className="hidden md:inline"/> today!
        </h1>
        <p className="text-lg text-[#737373] max-w-lg mx-auto lg:mx-0 mb-8">
          We know how large objects will act, but things on a small scale
        </p>

        <div className="space-y-4 font-bold mb-8">
          <p className="text-xl text-[#252B42]">Phone: <span className={`text-[#252B42]`}>+451 215 215</span></p>
          <p className="text-xl text-[#252B42]">Fax: <span className={`text-[#252B42]`}>+451 215 215</span></p>
        </div>
        

        <div className={`flex justify-center lg:justify-start space-x-6 text-2xl text-[#252B42]`}>
          <Twitter size={28} className="hover:opacity-75 transition duration-300 cursor-pointer" />
          <Facebook size={28} className="hover:opacity-75 transition duration-300 cursor-pointer" />
          <Instagram size={28} className="hover:opacity-75 transition duration-300 cursor-pointer" />
          <Linkedin size={28} className="hover:opacity-75 transition duration-300 cursor-pointer" />
        </div>
      </div>
      

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
    
        <div className="absolute top-0 right-0 w-4 h-4 bg-purple-500 rounded-full z-10" />
        <div className="hidden lg:block absolute top-10 right-10 w-48 h-48 bg-pink-200 rounded-full opacity-50 blur-2xl z-0" />

        <img 
          src={imagePath} 
          alt="Happy family with shopping bags" 
          className="relative w-full max-w-md lg:max-w-none h-auto z-10" 
          style={{ objectFit: 'cover' }} 
        />
      </div>
    </div>
  );
};

export default GetInTouch;