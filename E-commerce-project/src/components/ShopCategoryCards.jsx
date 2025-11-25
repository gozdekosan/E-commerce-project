import ProductCard from "./ProductCard.jsx"; 
import { Search, Grid, List } from 'lucide-react'; 

const MOCK_PRODUCTS = [
  
  { id: 1, title: "Graphic Design", category: "English Department", price: 16.48, oldPrice: 24.99, image: "/images/categorycard-1.png" },
  { id: 2, title: "Graphic Design", category: "English Department", price: 18.00, oldPrice: 30.00, image: "/images/categorycard-2.png" },
  { id: 3, title: "Graphic Design", category: "English Department", price: 12.50, oldPrice: 20.00, image: "/images/categorycard-3.png" },
  { id: 4, title: "Graphic Design", category: "English Department", price: 20.99, oldPrice: 35.50, image: "/images/categorycard-4.png" },
  
  { id: 5, title: "Graphic Design", category: "English Department", price: 14.25, oldPrice: 22.00, image: "/images/categorycard-5.png" },
  { id: 6, title: "Graphic Design", category: "English Department", price: 17.00, oldPrice: 28.00, image: "/images/categorycard-6.png" },
  { id: 7, title: "Graphic Design", category: "English Department", price: 19.50, oldPrice: 32.00, image: "/images/categorycard-7.png" },
  { id: 8, title: "Graphic Design", category: "English Department", price: 15.10, oldPrice: 26.00, image: "/images/categorycard-8.png" },
  
  { id: 9, title: "Graphic Design", category: "English Department", price: 13.99, oldPrice: 21.99, image: "/images/categorycard-9.png" },
  { id: 10, title: "Graphic Design", category: "English Department", price: 22.45, oldPrice: 40.00, image: "/images/categorycard-10.png" },
  { id: 11, title: "Graphic Design", category: "English Department", price: 17.90, oldPrice: 29.50, image: "/images/categorycard-11.png" },
  { id: 12, title: "Graphic Design", category: "English Department", price: 14.00, oldPrice: 25.00, image: "/images/categorycard-12.png" },
];

export default function ShopCategoryCards() {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-[71.25rem] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <p className="text-[#737373] text-sm">
            Showing all {MOCK_PRODUCTS.length} results
          </p>

          <div className="flex items-center space-x-4">
            <span className="text-[#737373] text-sm hidden md:block">Views</span>
            
    
            <div className="flex space-x-1 hidden md:flex">
              <button className="text-[#252B42] hover:text-[#2DC071]">
                  <Grid size={24} /> 
              </button>
              <button className="text-[#BDBDBD] hover:text-[#2DC071]">
                  <List size={24} /> 
              </button>
            </div>


            <select className="border border-[#BDBDBD] text-[#737373] px-3 py-2 rounded-md text-sm focus:ring-[#2DC071] focus:border-[#2DC071] transition">
              <option>Popularity</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>


            <button className="bg-[#2DC071] text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-[#28a862] transition">
              Filter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {MOCK_PRODUCTS.map((product) => (
            
            <ProductCard 
              key={product.id} 
              title={product.title} 
              price={product.price} 
              image={product.image}
            />
          ))}
        </div>

       
        <div className="flex justify-center mt-16">
            <nav className="flex space-x-1" aria-label="Pagination">

                <button className="px-4 py-3 text-[#252B42] border border-[#E6E6E6] rounded-md font-bold hover:bg-gray-100 transition text-sm">
                    First
                </button>
    
                <button className="px-4 py-3 text-white bg-[#2DC071] rounded-md font-bold text-sm">
                    1
                </button>
  
                <button className="px-4 py-3 text-[#252B42] border border-[#E6E6E6] rounded-md font-bold hover:bg-gray-100 transition text-sm">
                    2
                </button>

                <button className="px-4 py-3 text-[#252B42] border border-[#E6E6E6] rounded-md font-bold hover:bg-gray-100 transition text-sm">
                    3
                </button>

                <button className="px-4 py-3 text-[#252B42] border border-[#E6E6E6] rounded-md font-bold hover:bg-gray-100 transition text-sm">
                    Next
                </button>
            </nav>
        </div>
        
      </div>
    </section>
  );
}