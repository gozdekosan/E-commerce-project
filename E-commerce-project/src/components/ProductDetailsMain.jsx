import { Star, Heart, ShoppingCart } from 'react-feather';

// Mock Ürün Verisi (Sayfa içeriğine uyumlu)
const PRODUCT_DATA = {
  title: "Floating Phone",
  price: 1139.33,
  reviews: 10,
  rating: 4, // 5 üzerinden 4 yıldız varsayımı
  availability: true,
  description: "Met minim non desert Alamo est sit aliquip dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent senit nostrum met.",
  colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
  // Bu yolların public klasörünüzde mevcut olduğunu varsayıyoruz
  mainImage: "/images/product-main-yellow-sofa.jpg", 
  thumbnail1: "/images/product-thumb-1.jpg",
  thumbnail2: "/images/product-thumb-2.jpg",
};

export default function ProductDetailsMain() {

  // Yıldızları oluşturmak için yardımcı fonksiyon
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={20} 
          fill={i <= rating ? "#F3CD03" : "none"} // Dolu veya boş yıldız
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
        
        {/* ======================================= */}
        {/* BREADCRUMB (Navigasyon Yolu) */}
        {/* ======================================= */}
        <div className="flex text-sm mb-8 space-x-2">
          <a href="#" className="text-[#252B42] font-bold hover:text-[#23A6F0]">Home</a>
          <span className="text-[#BDBDBD]">/</span>
          <span className="text-[#BDBDBD] font-bold">Shop</span>
        </div>

        {/* ======================================= */}
        {/* ÜRÜN GÖRÜNTÜ VE BİLGİ BÖLÜMÜ */}
        {/* ======================================= */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 1. SOL BLOK: GÖRSELLER */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            
            {/* Ana Görsel (Slider/Büyük Resim) */}
            <div className="relative w-full aspect-square overflow-hidden bg-white">
              <img 
                src={PRODUCT_DATA.mainImage} 
                alt={PRODUCT_DATA.title} 
                className="w-full h-full object-cover"
              />
              {/* Slider okları (İkonları eklenmedi, sadece yer tutucu) */}
              <button className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-30 p-2 rounded-full hidden">
                &lt;
              </button>
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-30 p-2 rounded-full hidden">
                &gt;
              </button>
            </div>

            {/* Thumbnail Görseller */}
            <div className="flex mt-4 space-x-3">
              <img 
                src={PRODUCT_DATA.thumbnail1} 
                alt="Thumbnail 1" 
                className="w-20 h-20 object-cover border-2 border-gray-300 cursor-pointer hover:border-[#23A6F0]"
              />
              <img 
                src={PRODUCT_DATA.thumbnail2} 
                alt="Thumbnail 2" 
                className="w-20 h-20 object-cover border-2 border-[#23A6F0] cursor-pointer"
              />
            </div>
          </div>
          
          {/* 2. SAĞ BLOK: BİLGİLER VE KONTROLLER */}
          <div className="w-full lg:w-1/2 lg:pl-10">
            
            {/* Başlık */}
            <h1 className="text-3xl font-light text-[#252B42] mb-2">
              {PRODUCT_DATA.title}
            </h1>

            {/* Değerlendirme */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {renderStars(PRODUCT_DATA.rating)}
              </div>
              <p className="text-[#737373] text-sm font-bold">
                {PRODUCT_DATA.reviews} Reviews
              </p>
            </div>

            {/* Fiyat */}
            <h2 className="text-2xl font-bold text-[#252B42] mb-1">
              ${PRODUCT_DATA.price.toFixed(2)}
            </h2>
            
            {/* Stok Durumu */}
            <div className="text-sm font-bold mb-6">
              <span className="text-[#737373]">Availability : </span>
              <span className={`text-[#23A6F0]`}>
                {PRODUCT_DATA.availability ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            
            <hr className="mb-6 border-gray-300" />
            
            {/* Renk Seçenekleri */}
            <div className="flex items-center space-x-2 mb-8">
                {PRODUCT_DATA.colors.map((color, index) => (
                    <div 
                        key={index}
                        className={`w-6 h-6 rounded-full cursor-pointer transition`}
                        style={{ backgroundColor: color }}
                    ></div>
                ))}
            </div>

            {/* Aksiyon Butonları ve İkonlar */}
            <div className="flex items-center space-x-3">
                
                {/* Select Options Butonu */}
                <button className="bg-[#23A6F0] text-white font-bold py-3 px-8 rounded-md text-sm hover:bg-[#1f93d8] transition">
                    Select Options
                </button>
                
                {/* Kalp (Wishlist) İkonu */}
                <button className="p-3 border border-gray-300 rounded-full text-[#252B42] hover:bg-gray-100 transition" aria-label="Add to Wishlist">
                    <Heart size={20} />
                </button>
                
                {/* Sepet İkonu */}
                <button className="p-3 border border-gray-300 rounded-full text-[#252B42] hover:bg-gray-100 transition" aria-label="Add to Cart">
                    <ShoppingCart size={20} />
                </button>
            </div>
          </div>
        </div>

        {/* ======================================= */}
        {/* KISA AÇIKLAMA (Görseldeki açıklama metni) */}
        {/* ======================================= */}
        <p className="text-[#737373] text-sm mt-8 max-w-lg">
             {PRODUCT_DATA.description}
        </p>

      </div>
    </div>
  );
}