const logos = [
  { id: 1, name: 'Uber', path: '/images/logo-1.png' },
  { id: 2, name: 'Lyft', path: '/images/logo-2.png' },
  { id: 3, name: 'Stripe', path: '/images/logo-3.png' },
  { id: 4, name: 'AWS', path: '/images/logo-4.png' },
  { id: 5, name: 'Trello', path: '/images/logo-5.png' },
  { id: 6, name: 'Salesforce', path: '/images/logo-6.png' },
];

const CompanyLogos = () => {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-32 bg-gray-50">
      
    
      <div className="text-center mb-16 max-w-lg mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Big Companies Are Here
        </h2>
        <p className="text-sm text-gray-500">
            Problems trying to resolve the conflict between the two major realms of Classical physics
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 max-w-7xl mx-auto">
        
        {logos.map(logo => (
          <div key={logo.id} className="w-24 h-12 flex justify-center items-center opacity-60 hover:opacity-100 transition duration-300">
           
            <img 
              src={logo.path} 
              alt={`${logo.name} Logo`} 
              className="w-full h-full object-contain"
            />
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default CompanyLogos;