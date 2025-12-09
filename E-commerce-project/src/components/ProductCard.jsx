import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  if (!product) {
      console.error("ProductCard'a geçersiz (undefined/null) ürün objesi iletildi.");
      return null; 
  }

  const gender = 'unisex'; 
  const categoryName = 'ürün'; 
  const categoryId = product.category_id || 1; 
  
  const productNameSlug = product.name 
    ? product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') 
    : 'urun-detayi';
  
  const handleProductClick = () => {

    if (!product.id) {
        console.error("Ürün ID'si eksik! Yönlendirme iptal edildi.");
        return;
    }

    const url = `/shop/${gender}/${categoryName}/${categoryId}/${productNameSlug}/${product.id}`;
    navigate(url);
  };
  
  return (
    <div 
        onClick={handleProductClick}
        className="relative bg-white rounded-lg shadow cursor-pointer transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden"
    >
      <img
        src={product.images?.[0]?.url || product.image || 'placeholder.jpg'}
        alt={product.name || 'Ürün Resmi'}
        className="w-full h-64 object-cover"
      />

      <div className="p-4 text-center">
        <h3 className="text-gray-800 font-semibold mb-1">{product.name || 'İsimsiz Ürün'}</h3>
        <p className="text-[#BDBDBD] line-through text-sm">$ {(product.price || 0).toFixed(2)}</p>
        <p className="text-[#23856D] font-bold">$ { ((product.price || 0) * 0.4).toFixed(2) }</p>
      </div>

      <div className="flex justify-center space-x-4 pb-4 space-between">
        <span className="w-3 h-3 rounded-full bg-[#23A6F0]"></span>
        <span className="w-3 h-3 rounded-full bg-[#23856D]"></span>
        <span className="w-3 h-3 rounded-full bg-[#E77C40]"></span>
        <span className="w-3 h-3 rounded-full bg-[#252B42]"></span>
      </div>
    </div>
  );
}