import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { X } from 'react-feather';

export default function CartDropdown({ isVisible, toggleVisibility }) {
    
    const cartItems = useSelector(state => state.cart.cart);
    
    const subtotal = cartItems.reduce((total, item) => {
        return total + (item.product.price * item.count); 
    }, 0);

    if (!isVisible) return null;

    return (
        <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
            
            <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-bold text-[#252B42]">Sepetim ({cartItems.length} Ürün)</h3>
                <button onClick={toggleVisibility} className="text-gray-500 hover:text-gray-800">
                    <X size={20} />
                </button>
            </div>

            <div className="max-h-80 overflow-y-auto divide-y divide-gray-100">
                {cartItems.length === 0 ? (
                    <p className="p-4 text-gray-500 text-center">Sepetinizde ürün bulunmamaktadır.</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.product.id} className="flex p-4 hover:bg-gray-50 transition">
                            <img 
                                src={item.product.images?.[0]?.url || 'placeholder.jpg'} 
                                alt={item.product.name} 
                                className="w-12 h-12 object-cover rounded mr-3"
                            />
                            <div className="flex-1">
                                <h4 className="text-sm font-semibold text-[#252B42] line-clamp-1">{item.product.name}</h4>
                                <p className="text-xs text-gray-500">Miktar: {item.count}</p>
                                <p className="text-sm font-bold text-[#23A6F0] mt-1">
                                    ${(item.product.price * item.count).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="p-4 border-t">
                {cartItems.length > 0 && (
                    <div className="flex justify-between font-bold mb-4">
                        <span>Ara Toplam:</span>
                        <span className="text-[#252B42]">${subtotal.toFixed(2)}</span>
                    </div>
                )}
                
                <div className="flex space-x-2">
                    <Link 
                        to="/cart" 
                        onClick={toggleVisibility}
                        className="flex-1 text-center py-2 px-4 border border-[#23A6F0] text-[#23A6F0] rounded-lg font-bold hover:bg-[#F2F8FF] transition"
                    >
                        Sepete Git
                    </Link>

        
                    <Link 
                        to="/cart" 
                        onClick={toggleVisibility} 
                        className="flex-1 text-center py-2 px-4 bg-[#23A6F0] text-white rounded-lg font-bold hover:bg-[#1E77B5] transition disabled:bg-gray-400"
                    
                    >
                        Siparişi Tamamla
                    </Link>
                </div>
            </div>
        </div>
    );
}