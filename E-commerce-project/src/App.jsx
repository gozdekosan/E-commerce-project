import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, Routes, Route } from 'react-router-dom'; 
import { verifyTokenAndLogin } from './redux/actions/loginActions'; 
import { fetchCategories, fetchProducts } from './redux/actions/ProductActions'; // İlk yüklemede ürünleri çek

import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from './layout/Header.jsx'
import PageContent from './layout/PageContent.jsx' 
import Footer from './layout/Footer.jsx'

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  
  const [isSessionChecked, setIsSessionChecked] = useState(false); 
  
  // Header'ın gizleneceği yollar
  const noHeaderPaths = ['/contact', '/team', '/pricing', '/about']; 
  const shouldHideHeader = noHeaderPaths.includes(location.pathname);
  
  useEffect(() => {
    const initializeData = async () => {
        
        // 1. Oturum Kontrolü
        const token = localStorage.getItem('token');
        if (token) {
            await dispatch(verifyTokenAndLogin());
        }

        // 2. Kategorileri Çekme
        dispatch(fetchCategories()); 
        
        // 3. Ürünleri Çekme (Başlangıç filtresiyle)
        dispatch(fetchProducts()); 

        setIsSessionChecked(true);
    };

    initializeData();
  }, [dispatch]); 

  if (!isSessionChecked) {
      return (
          <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="text-xl text-blue-600 font-semibold mt-4">Yükleniyor...</p>
          </div>
      );
  }

  return (
    <>
    <div className="flex flex-col min-h-screen">
      
      {!shouldHideHeader && <Header />}
      
      <PageContent />
      <Footer />
    </div>
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  )
}

export default App