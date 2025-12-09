import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail } from '../redux/actions/ProductActions'; 
import { ClipLoader } from 'react-spinners'; 
import ProductDetailsMain from "../components/ProductDetailsMain";
import ProductDetailsInfo from "../components/ProductDetailsInfo"; 
import BestsellerProducts from "../components/BestsellerProducts";
import ShopLogos from "../components/ShopLogos";


export default function ProductDetailsPage() {
    const { productId } = useParams(); 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { activeProduct, fetchState } = useSelector(state => state.product);


    useEffect(() => {
        const id = Number(productId);
        if (!isNaN(id) && id > 0) {
            dispatch(fetchProductDetail(id));
        } else if (productId) {
             console.error("Geçersiz Ürün ID'si:", productId);
       
        }
    }, [productId, dispatch]);

    if (fetchState === "FETCHING" || (!activeProduct && fetchState === "NOT_FETCHED")) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <ClipLoader color="#23A6F0" loading={true} size={50} />
            </div>
        );
    }
    
   
    if (fetchState === "FAILED" || !activeProduct) {
        return (
             <div className="container mx-auto py-20 text-center">
                 <p className="text-xl text-red-500">Ürün detayları yüklenirken bir sorun oluştu veya ürün bulunamadı.</p>
                 <button 
                     onClick={() => navigate(-1)} 
                     className="mt-6 px-4 py-2 border rounded text-sm hover:bg-gray-100"
                 >
                     &larr; Geri Dön
                 </button>
             </div>
        );
    }

    return (
        <div className="flex flex-col ">
            <ProductDetailsMain product={activeProduct} />
            <ProductDetailsInfo product={activeProduct} />
            <BestsellerProducts />
            <ShopLogos />
        </div>
    );
}