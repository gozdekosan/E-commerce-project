import { Phone, MapPin, Mail } from 'react-feather';

const SupportCard = ({ icon: Icon, title, email, phone, isPrimary = false }) => {

  const cardClasses = isPrimary
    ? "bg-[#252B42] text-white shadow-xl transform scale-105"
    : "bg-white text-gray-800 border border-gray-200 shadow-md"; 
  
  const iconClasses = isPrimary
    ? "text-white bg-transparent" 
    : "text-primary bg-white";   

  const buttonClasses = isPrimary
    ? "bg-white text-dark-blue hover:bg-gray-100" 
    : "bg-primary text-white hover:bg-blue-700"; 

 
  const primaryColor = 'blue-600'; 
  const darkBlue = 'rgb(30, 48, 80)'; 

  return (
    <div className={`flex flex-col items-center p-8 rounded-lg transition duration-500 w-full max-w-sm ${cardClasses}`}>
      <div className={`p-4 rounded-full mb-6 ${iconClasses} ${isPrimary ? '' : `text-${primaryColor}`}`}>
        <Icon size={40} />
      </div>

     
      <div className="text-center mb-6">
        {email && <p className={`text-sm font-semibold mb-1 ${isPrimary ? 'text-white' : 'text-gray-600'}`}>{email}</p>}
        {phone && <p className={`text-sm font-semibold ${isPrimary ? 'text-white' : 'text-gray-600'}`}>{phone}</p>}
      </div>

      <h3 className={`text-xl font-bold mb-4 ${isPrimary ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h3>

      <button 
        className={`w-full py-3 rounded-md font-bold transition duration-300 border ${isPrimary ? 'border-white' : `border-${primaryColor}`} ${buttonClasses}`}
        style={{ backgroundColor: isPrimary ? 'white' : primaryColor, color: isPrimary ? darkBlue : 'white' }}
      >
        Submit Request
      </button>
    </div>
  );
};

const GetSupport = () => {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-gray-50">
     
      <div className="text-center mb-16">
        <p className="text-sm font-bold text-gray-700 tracking-widest uppercase mb-2">VISIT OUR OFFICE</p>
        <h2 className="text-5xl font-bold text-gray-800 leading-snug">
          We help small businesses <br/> with big ideas
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-stretch lg:space-x-8 space-y-8 lg:space-y-0">

        <SupportCard
          icon={Phone}
          title="Get Support"
          phone="georgia.young@example.com"
          email="georgia.young@example.com"
          isPrimary={false}
        />


        <SupportCard
          icon={MapPin}
          title="Get Support"
          phone="georgia.young@example.com"
          email="georgia.young@example.com"
          isPrimary={true}
        />

        <SupportCard
          icon={Mail}
          title="Get Support"
          phone="georgia.young@example.com"
          email="georgia.young@example.com"
          isPrimary={false}
        />
      </div>

      <div className="text-center mt-16 pt-16 border-t border-gray-200">
        <img 
          src="/images/arrow.png" 
          alt="Down arrow graphic" 
          className="mx-auto w-12 h-12 mb-4" 
        />
        <p className="text-sm font-bold text-gray-700 tracking-widest uppercase mb-2">WE CAN'T WAIT TO MEET YOU</p>
        <h3 className="text-4xl font-bold text-gray-800">
          Let's Talk
        </h3>
        
        <button className="mt-6 bg-primary text-white py-3 px-8 rounded-md font-bold hover:bg-blue-700  bg-[#23A6F0]">
          Try it free now
        </button>
      </div>
    </section>
  );
};

export default GetSupport;