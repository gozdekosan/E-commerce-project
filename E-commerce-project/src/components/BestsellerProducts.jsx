import React from 'react';
import ProductCard from "./ProductCard.jsx"; 


const BESTSELLER_PRODUCTS = [

  { id: 1, title: "Graphic Design", category: "English Department", price: 16.48, image: "/images/bestseller-1.png" },
  { id: 2, title: "Graphic Design", category: "English Department", price: 16.48, image: "/images/bestseller-2.png" },
  { id: 3, title: "Graphic Design", category: "English Department", price: 16.48, image: "/images/bestseller-3.png" },
  { id: 4, title: "Graphic Design", category: "English Department", price: 16.48, image: "/images/bestseller-4.png" },

  { id: 5, title: "Graphic Design", category: "English Department", price: 16.48, image: "/images/bestseller-5.png" },
  { id: 6, title: "Graphic Design", category: "English Department", price: 16.48, image: "/images/bestseller-6.png" },
  { id: 7, title: "Graphic Design", category: "English Department", price: 16.48, image: "/images/bestseller-1.png" },
  { id: 8, title: "Graphic Design", category: "English Department", price: 16.48, image: "/images/bestseller-2.png" },
];

export default function BestsellerProducts() {
  return (
    
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[71.25rem] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#252B42] text-left tracking-wider uppercase pb-4 mb-4 md:mb-6">
          BESTSELLER PRODUCTS
        </h2>
      </div>

      <hr className="border-t border-[#ECECEC] w-full mb-10 md:mb-16" />
      <div className="max-w-[71.25rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {BESTSELLER_PRODUCTS.map((product) => (
            
            <ProductCard 
              key={product.id} 
              title={product.title} 
              category={product.category} 
              price={product.price} 
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}