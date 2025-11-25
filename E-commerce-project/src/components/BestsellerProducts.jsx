import ProductCard from "./ProductCard.jsx"; 

// Mock Ürün Verileri
// price: ProductCard'ın üstü çizili gri fiyat olarak kullanacağı DEĞER
const BESTSELLER_PRODUCTS = [
  // İlk sıra (4 ürün)
  { id: 1, title: "Graphic Design", category: "English Department", price: 16.48, image: "/images/bestseller-1.png" },
  { id: 2, title: "Graphic Design", category: "English Department", price: 16.48, image: "/images/bestseller-2.png" },
  { id: 3, title: "Graphic Design", category: "English Department", price: 16.48, image: "/images/bestseller-3.png" },
  { id: 4, title: "Graphic Design", category: "English Department", price: 16.48, image: "/images/bestseller-4.png" },
  
  // İkinci sıra (4 ürün)
  { id: 5, title: "Graphic Design", category: "English Department", price: 16.48, image: "/images/bestseller-5.png" },
  { id: 6, title: "Graphic Design", category: "English Department", price: 16.48, image: "/images/bestseller-6.png" },
  { id: 7, title: "Graphic Design", category: "English Department", price: 16.48, image: "/images/bestseller-7.png" },
  { id: 8, title: "Graphic Design", category: "English Department", price: 16.48, image: "/images/bestseller-8.png" },
];

export default function BestsellerProducts() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[71.25rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ======================================= */}
        {/* BAŞLIK */}
        {/* ======================================= */}
        <h2 className="text-3xl font-bold text-[#252B42] text-center mb-10 md:mb-16 tracking-wider uppercase">
          BESTSELLER PRODUCTS
        </h2>

        {/* ======================================= */}
        {/* ÜRÜN KARTLARI (PRODUCT CARD) GRID ALANI */}
        {/* ======================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {BESTSELLER_PRODUCTS.map((product) => (
            
            <ProductCard 
              key={product.id} 
              title={product.title} 
              // Category prop'u ProductCard'da kullanılmasa da burada kalabilir veya kaldırılabilir.
              category={product.category} 
              
              // Üstü çizili fiyatı göndermek için (16.48)
              price={product.price} 
              image={product.image}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}