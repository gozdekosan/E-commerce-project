import { 
  Routes,      
  Route        
} from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import ShopPage from "../pages/ShopPage.jsx";

export default function PageContent() {
  return (
    <div className="w-full min-h-screen bg-white">
      <main className="flex-1 w-full max-w-none">
    
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
      </main>
    </div>
  );
}