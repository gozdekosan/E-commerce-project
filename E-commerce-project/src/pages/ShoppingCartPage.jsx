import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, Truck } from 'react-feather';
import { setCart } from '../redux/actions/shoppingCartActions';

const groupCartItemsBySeller = (items) => {
    return items.reduce((groups, item) => {
        const sellerId = item.product.sellerId || 'default_seller';
        const sellerName = item.product.sellerName || 'Firma Adı';
        
        if (!groups[sellerId]) {
            groups[sellerId] = {
                sellerName,
                items: [],
                totalPrice: 0,
                isFreeShipping: false, 
                freeShippingThreshold: 1000,
            };
        }
        groups[sellerId].items.push(item);
        
        if (item.checked) {
            groups[sellerId].totalPrice += (item.product.price || 0) * item.count;
        }
        if (groups[sellerId].totalPrice >= groups[sellerId].freeShippingThreshold) {
             groups[sellerId].isFreeShipping = true;
        }

        return groups;
    }, {});
};


export default function ShoppingCartPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart.cart);
    const groupedItems = groupCartItemsBySeller(cartItems);
    const sellerGroups = Object.values(groupedItems);
    
    const [couponCode, setCouponCode] = useState(''); 

    const MOCK_SHIPPING_FEE = 15.00;
    const MOCK_DISCOUNT = 10.00; 

    let subtotal = 0;
    let shippingFee = 0;
    
    sellerGroups.forEach(group => {
        subtotal += group.totalPrice; 
        if (!group.isFreeShipping) {
            shippingFee += MOCK_SHIPPING_FEE; 
        }
    });

    const orderSubtotal = subtotal; 
    const totalShipping = shippingFee; 
    const couponDiscount = subtotal > 500 ? MOCK_DISCOUNT : 0; 
    const grandTotal = orderSubtotal + totalShipping - couponDiscount;

    const handleCountChange = (productId, change) => {
        const newCart = cartItems.map(item => {
            if (item.product.id === productId) {
                const newCount = Math.max(1, item.count + change);
                return { ...item, count: newCount };
            }
            return item;
        });
        dispatch(setCart(newCart));
    };

    const handleRemoveItem = (productId) => {
        const newCart = cartItems.filter(item => item.product.id !== productId);
        dispatch(setCart(newCart));
    };
    
    const handleApplyCoupon = () => {
        console.log(`Kupon kodu uygulandı: ${couponCode}`);
        alert(`Kupon kodu "${couponCode}" denendi. (Fonksiyonel değil)`);
    };


    if (cartItems.length === 0) {
  
        return (
            <div className="container mx-auto py-20 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Sepetiniz Boş</h2>
                <button 
                    onClick={() => navigate('/shop')} 
                    className="mt-4 bg-[#23A6F0] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#1E77B5]"
                >
                    Alışverişe Başla
                </button>
            </div>
        );
    }
    
    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold text-[#252B42] mb-8">Sepetim ({cartItems.length} Ürün)</h1>

            <div className="flex flex-wrap -mx-4">

                <div className="w-full lg:w-3/4 px-4 space-y-6">
                    
                    <div className="bg-blue-100 border-l-4 border-[#23A6F0] p-4 rounded-lg text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <span className='text-[#23A6F0]'>✓</span> Sepetindeki Ürünleri Bireysel Veya Kurumsal Fatura Seçerek Alabilirsin.
                    </div>

                    {sellerGroups.map((group, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 p-6 space-y-6">
                            
                            <div className="flex justify-between items-center pb-4 border-b">
                                <h2 className="text-lg font-bold text-[#23A6F0] flex items-center gap-2">
                                    <span className='bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold'>
                                        {group.sellerName}
                                    </span>
                                    {group.isFreeShipping ? (
                                        <span className='text-green-600 text-sm font-semibold flex items-center gap-1'>
                                            <Truck size={16} /> Kargo Bedava
                                        </span>
                                    ) : (
                                        <span className='text-orange-600 text-xs'>
                                            {group.freeShippingThreshold - group.totalPrice > 0 
                                                ? `${(group.freeShippingThreshold - group.totalPrice).toFixed(2)} TL daha ekle, kargo bedava olsun!`
                                                : `Kargo Ücretli (${MOCK_SHIPPING_FEE.toFixed(2)} TL)`
                                            }
                                        </span>
                                    )}
                                </h2>
                                
                                <button className="text-[#23A6F0] text-sm font-semibold hover:underline">
                                    3 Adet ve Üzeri 40 TL İndirim 
                                </button>
                            </div>

                            {group.items.map((item) => (
                                <div key={item.product.id} className="flex items-start border-b pb-4 last:border-b-0 last:pb-0">
                                    <img
                                        src={item.product.images?.[0]?.url || item.product.image || 'placeholder.jpg'}
                                        alt={item.product.name}
                                        className="w-24 h-24 object-cover rounded-lg mr-4 border"
                                    />

                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-base font-semibold text-[#252B42] mb-1 line-clamp-2">{item.product.name || item.product.title}</h3>
                                        <p className="text-sm text-gray-500">{item.product.category || 'Beden: 38. Siyah'}</p>
                                        <p className="text-xs text-gray-400 mt-1">{item.product.description || '29 dakika içinde sipariş verirseniz en geç yarın kargoda!'}</p>
                                        
                                        <p className="text-lg font-bold text-[#252B42] mt-2">
                                            {item.product.price.toFixed(2)} TL
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-end justify-between h-24 ml-4">
                                        
                                        <div className="flex items-center border border-gray-300 rounded-md">
                                            <button
                                                onClick={() => handleCountChange(item.product.id, -1)}
                                                className="p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                                                disabled={item.count <= 1}
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="px-3 text-sm font-semibold text-[#252B42]">{item.count}</span>
                                            <button
                                                onClick={() => handleCountChange(item.product.id, 1)}
                                                className="p-2 text-gray-600 hover:bg-gray-100"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>

                                        <button 
                                            onClick={() => handleRemoveItem(item.product.id)}
                                            className="text-gray-400 hover:text-red-500 transition mt-2"
                                            title="Sepetten Kaldır"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}

                    <div className="bg-white shadow-lg rounded-xl p-4 mt-6">
                        <div className="flex border-b">
                            {['Önceden Eklediklerim', 'Önerilenler', 'Favorilerim'].map((tab) => (
                                <button 
                                    key={tab}
                                    className={`px-4 py-2 font-semibold text-sm ${
                                        tab === 'Önerilenler' ? 'text-[#23A6F0] border-b-2 border-[#23A6F0]' : 'text-[#737373]'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <p className="pt-4 text-sm text-gray-500">Önerilen ürünler burada gösterilecek...</p>
                    </div>

                </div>

                <div className="w-full lg:w-1/4 px-4 mt-8 lg:mt-0">
                    <div className="bg-white p-6 rounded-xl shadow-xl sticky top-6 border border-gray-100">
                        <h2 className="text-lg font-bold text-[#252B42] mb-4 pb-3 flex justify-between items-center">
                            <span>Sipariş Özeti</span>
                            <button onClick={() => navigate('/checkout')} className="text-[#23A6F0] text-sm font-semibold hover:underline">
                                Sepeti Onayla 
                            </button>
                        </h2>
                        
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between text-[#737373]">
                                <span>Ara Toplam:</span>
                                <span className='text-[#252B42] font-semibold'>{orderSubtotal.toFixed(2)} TL</span>
                            </div>

                            <div className="flex justify-between text-[#737373]">
                                <span>Kargo Toplam:</span>
                                <span className='text-[#252B42] font-semibold'>{totalShipping > 0 ? `${totalShipping.toFixed(2)} TL` : 'BEDAVA'}</span>
                            </div>

                            <div className="flex justify-between text-[#737373]">
                                <span>İndirim Toplam:</span>
                                <span className='text-red-500 font-semibold'>-{couponDiscount.toFixed(2)} TL</span>
                            </div>
                        </div>


                        <div className="flex justify-between text-xl font-bold mt-4 pt-4 border-t border-gray-300">
                            <span>Toplam:</span>
                            <span className="text-[#23A6F0]">{grandTotal.toFixed(2)} TL</span>
                        </div>
                        
                        <div className='mt-6 pt-4 border-t border-dashed'>
                            <h3 className='text-sm font-bold text-[#252B42] mb-2'>KUPON KULLAN</h3>
                            <div className='flex'>
                                <input 
                                    type="text" 
                                    placeholder='Kupon kodu giriniz'
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    className='flex-1 border border-gray-300 rounded-l-lg p-2 text-sm focus:ring-[#23A6F0] focus:border-[#23A6F0]'
                                />
                                <button 
                                    onClick={handleApplyCoupon}
                                    disabled={!couponCode}
                                    className={`px-4 py-2 text-white font-semibold rounded-r-lg text-sm transition ${couponCode ? 'bg-[#2DC071] hover:bg-[#28a862]' : 'bg-gray-400 cursor-not-allowed'}`}
                                >
                                    Uygula
                                </button>
                            </div>
                        </div>

                        <button 
                            onClick={() => navigate('/checkout')} 
                            className="w-full mt-6 bg-[#23A6F0] text-white py-3 rounded-lg font-bold hover:bg-[#1E77B5] transition disabled:bg-gray-400"
                            disabled={subtotal === 0}
                        >
                            Siparişi Tamamla
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}