import { 
  Routes,      
  Route        
} from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import SignUpPage from "../pages/SignUpPage.jsx";
import ShopPage from "../pages/ShopPage.jsx";
import ProductDetailsPage from "../pages/ProductDetailsPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import TeamPage from "../pages/TeamPage.jsx";
import PricingPage from "../pages/PricingPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ShoppingCartPage from "../pages/ShoppingCartPage.jsx"; 

export default function PageContent() {
  return (
    <div className="w-full min-h-screen bg-white">
      <main className="flex-1 w-full max-w-none">
    
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route 
                path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" 
                element={<ProductDetailsPage />} 
            />
            
            <Route path="/cart" element={<ShoppingCartPage />} /> 

            <Route path="/contact" element={<ContactPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
      </main>
    </div>
  );
}