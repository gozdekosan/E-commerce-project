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
    <section className="bg-white py-6 md:py-10 lg:py-12">
      <div className="max-w-[71.25rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {CATEGORIES.map((category) => (
            <Link 
              key={category.id}
              to={`/shop/${category.name.toLowerCase()}`}
              className="relative block w-full h-[280px] sm:h-[320px] lg:h-[300px] group overflow-hidden" 
            >

              <img
                src={category.image}
                alt={category.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
              />

              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h3 className="text-white text-sm sm:text-base font-bold tracking-wide mb-1 sm:mb-2">
                  {category.name}
                </h3>
                <p className="text-white text-xs sm:text-sm font-normal">
                  {category.count} Items
                </p>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}