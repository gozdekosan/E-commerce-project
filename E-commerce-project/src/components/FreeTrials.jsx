import { Facebook, Instagram, Linkedin,Twitter } from 'react-feather';

const FreeTrials = () => {

  return (

    <section className="py-20 px-4 md:px-10 lg:px-32 bg-white text-center">
      
      <h2 className="text-4xl font-bold text-gray-800 mb-2">Start your 14 days free trial</h2>
      
      <p className="text-sm text-[#737373] mb-8 max-w-md mx-auto">
        Matrimonia non dissentiet ad eum, melit reliqui consequat.
      </p>

      <div className="flex flex-col items-center space-y-4">
        
        <button className={`text-white py-3 px-8 rounded-md font-bold hover:bg-blue-500 transition duration-300 bg-[#23A6F0]`}>
          Try it free now
        </button>

        <div className="flex justify-center space-x-4 text-gray-500 mt-2">
            <Twitter size={20} className="hover:text-gray-800 transition duration-300 cursor-pointer" />
          <Facebook size={20} className="hover:text-gray-800 transition duration-300 cursor-pointer" />
          <Instagram size={20} className="hover:text-gray-800 transition duration-300 cursor-pointer" />
          <Linkedin size={20} className="hover:text-gray-800 transition duration-300 cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default FreeTrials;