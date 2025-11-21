import { Link } from "react-router-dom";

const CATEGORIES = [
  { id: 1, name: "CLOTHS", count: 5, image: "/images/shopcard-1.png", alt: "Category 1" },
  { id: 2, name: "CLOTHS", count: 5, image: "/images/shopcard-2.png", alt: "Category 2" },
  { id: 3, name: "CLOTHS", count: 5, image: "/images/shopcard-3.png", alt: "Category 3" },
  { id: 4, name: "CLOTHS", count: 5, image: "/images/shopcard-4.png", alt: "Category 4" },
  { id: 5, name: "CLOTHS", count: 5, image: "/images/shopcard-5.png", alt: "Category 5" },
];

export default function ShopCards() {
  return (
    <section className="bg-white py-8 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
          
          {CATEGORIES.map((category) => (
            <Link 
              key={category.id}
              to={`/shop/${category.name.toLowerCase()}`}
              className="relative w-full aspect-[300/348] md:aspect-[348/300] group overflow-hidden" 
            >
              
              <div className="relative w-full h-full">
                <img
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />

                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center">
                  <h3 className="text-white text-lg sm:text-xl font-bold tracking-wider mb-1 md:mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white text-sm md:text-base">
                    {category.count} Items
                  </p>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}