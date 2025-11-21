const CLIENT_LOGOS = [
  { id: 1, name: "Tooli", image: "/images/logo-1.png" }, 
  { id: 2, name: "Lyft", image: "/images/logo-2.png" },
  { id: 3, name: "Stripe", image: "/images/logo-3.png" },
  { id: 4, name: "AWS", image: "/images/logo-4.png" },
  { id: 5, name: "Google", image: "/images/logo-5.png" },
];

export default function ShopLogos() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-24">
      <div className="max-w-[71.25rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-y-10 md:flex md:flex-row md:justify-between md:gap-x-12 md:gap-y-0 items-center">
          
          {CLIENT_LOGOS.map((client) => (
            <div 
              key={client.id} 
              className="flex justify-center items-center w-full md:w-auto h-20 md:h-16" 
            >
              <img
                src={client.image}
                alt={`${client.name} Logo`}
                className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition duration-300 cursor-pointer"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}