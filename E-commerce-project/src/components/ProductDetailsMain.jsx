import React from 'react';
import { Star, Heart, ShoppingCart } from 'react-feather';

const PRODUCT_DATA = {
  title: "Floating Phone",
  price: 1139.33,
  reviews: 10,
  rating: 4, 
  availability: true,
  description: "Met minim non desert Alamo est sit aliquip dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent senit nostrum met.",
  colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
  mainImage: "/images/main-detail-1.png", 
  thumbnail1: "/images/main-detail-2.png",
  thumbnail2: "/images/main-detail-1.png",
};

export default function ProductDetailsMain() {

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={20} 
          fill={i <= rating ? "#F3CD03" : "none"} 
          stroke={i <= rating ? "#F3CD03" : "#F3CD03"} 
          className="text-[#F3CD03]"
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-[#FAFAFA] pt-8 pb-16">
      <div className="max-w-[71.25rem] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex text-sm mb-6 md:mb-8 space-x-2"> 
          <a href="#" className="text-[#252B42] font-bold hover:text-[#23A6F0]">Home</a>
          <span className="text-[#BDBDBD]">/</span>
          <span className="text-[#BDBDBD] font-bold">Shop</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="relative w-full aspect-square overflow-hidden bg-white">
              <img 
                src={PRODUCT_DATA.mainImage} 
                alt={PRODUCT_DATA.title} 
                className="w-full h-full object-cover"
              />

              <button className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-30 p-2 rounded-full hidden">
                &lt;
              </button>
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-30 p-2 rounded-full hidden">
                &gt;
              </button>
            </div>

            <div className="flex mt-3 space-x-3">
              <img 
                src={PRODUCT_DATA.thumbnail1} 
                alt="Thumbnail 1" 
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover border-2 border-gray-300 cursor-pointer hover:border-[#23A6F0]"
              />
              <img 
                src={PRODUCT_DATA.thumbnail2} 
                alt="Thumbnail 2" 
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover border-2 border-[#23A6F0] cursor-pointer"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-10">
            <h1 className="text-2xl sm:text-3xl font-light text-[#252B42] mb-2 mt-4 lg:mt-0">
              {PRODUCT_DATA.title}
            </h1>

            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {renderStars(PRODUCT_DATA.rating)}
              </div>
              <p className="text-[#737373] text-sm font-bold">
                {PRODUCT_DATA.reviews} Reviews
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#252B42] mb-1">
              ${PRODUCT_DATA.price.toFixed(2)}
            </h2>

            <div className="text-sm font-bold mb-6">
              <span className="text-[#737373]">Availability : </span>
              <span className={`text-[#23A6F0]`}>
                {PRODUCT_DATA.availability ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            
            <hr className="mb-6 border-gray-300" />
            <div className="flex items-center space-x-2 mb-8">
                {PRODUCT_DATA.colors.map((color, index) => (
                    <div 
                        key={index}
                        className={`w-6 h-6 rounded-full cursor-pointer transition border border-gray-200`}
                        style={{ backgroundColor: color }}
                    ></div>
                ))}
            </div>

            <div className="flex items-center space-x-3">
                
                <button className="bg-[#23A6F0] text-white font-bold py-3 px-6 sm:px-8 rounded-md text-sm hover:bg-[#1f93d8] transition flex-shrink-0">
                    Select Options
                </button>
    
                <button className="p-3 border border-gray-300 rounded-full text-[#252B42] hover:bg-gray-100 transition flex-shrink-0" aria-label="Add to Wishlist">
                    <Heart size={20} />
                </button>
                
                <button className="p-3 border border-gray-300 rounded-full text-[#252B42] hover:bg-gray-100 transition flex-shrink-0" aria-label="Add to Cart">
                    <ShoppingCart size={20} />
                </button>
            </div>
          </div>
        </div>
        
        <p className="text-[#737373] text-sm mt-8 max-w-lg">
             {PRODUCT_DATA.description}
        </p>

      </div>
    </div>
  );
}