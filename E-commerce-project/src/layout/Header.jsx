import { useState } from "react";
import { 
    ChevronDown, 
    Phone, 
    Mail, 
    Instagram, 
    Youtube, 
    Facebook, 
    Twitter, 
    Search, 
    ShoppingCart, 
    User, 
    Heart,
    Menu,
    X
} from "react-feather"; 
import { Link } from "react-router-dom";

export default function Header() {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
     <header className="w-full">
<div className="w-full bg-[#252B42] text-white text-xs sm:text-sm h-14 flex justify-center items-center px-4">
  <div className="max-w-7xl w-full flex justify-between items-center">
    
   
    <div className="flex gap-6 items-center">
      <span className="flex gap-2 font-semibold items-center">
        <Phone size={16} />
        <span>(225) 555-0118</span>
      </span>
      <span className="flex gap-2 font-semibold items-center">
        <Mail size={16} />
        <span>michelle.rivera@example.com</span>
      </span>
    </div>

    <div className="hidden sm:block font-bold">
      Follow Us and get a chance to win 80% off
    </div>


    <div className="flex gap-2 sm:gap-2.5 items-center text-white">
      <span className="font-bold hidden sm:block">Follow Us :</span>
      <div className="flex gap-2 sm:gap-2.5 text-white">
        <Instagram size={16} />
        <Youtube size={16} />
        <Facebook size={16} />
        <Twitter size={16} />
      </div>
    </div>
  </div>
</div>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[4rem] flex justify-between items-center relative">

       
          <Link to="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>

         
          <ul className="hidden lg:flex gap-6 items-center text-sm font-bold text-[#737373]">
            <li><Link to="/" className="hover:text-[#252B42]">Home</Link></li>

            <li className="relative group cursor-pointer"
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
            >
              <div className="flex items-center gap-1 hover:text-[#252B42]">
                <span>Shop</span>
                <ChevronDown size={16} />
              </div>

              {shopOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-lg w-[23rem] h-[14rem] z-50 px-6 py-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 items-start h-full">
                    <div>
                      <h4 className="text-[#252B42] text-base font-bold mb-3">Kadın</h4>
                      <ul className="text-sm text-[#737373] font-bold">
                        <li className="mb-2 hover:text-[#23A6F0] cursor-pointer">Bags</li>
                        <li className="mb-2 hover:text-[#23A6F0] cursor-pointer">Belts</li>
                        <li className="mb-2 hover:text-[#23A6F0] cursor-pointer">Cosmetics</li>
                        <li className="mb-2 hover:text-[#23A6F0] cursor-pointer">Bags</li>
                        <li className="hover:text-[#23A6F0] cursor-pointer">Hats</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[#252B42] text-base font-bold mb-3">Erkek</h4>
                      <ul className="text-sm text-[#737373] font-bold">
                        <li className="mb-2 hover:text-[#23A6F0] cursor-pointer">Bags</li>
                        <li className="mb-2 hover:text-[#23A6F0] cursor-pointer">Belts</li>
                        <li className="mb-2 hover:text-[#23A6F0] cursor-pointer">Cosmetics</li>
                        <li className="mb-2 hover:text-[#23A6F0] cursor-pointer">Bags</li>
                        <li className="hover:text-[#23A6F0] cursor-pointer">Hats</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li><Link to="/about" className="hover:text-[#252B42]">About</Link></li>
            <li><Link to="/blog" className="hover:text-[#252B42]">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-[#252B42]">Contact</Link></li>
            <li><Link to="/pages" className="hover:text-[#252B42]">Pages</Link></li>
          </ul>

        
          <div className="hidden lg:flex items-center gap-6 text-[#23A6F0]">
            <Link to="/login" className="flex items-center gap-1 text-sm font-bold hover:opacity-80">
              <User size={12} strokeWidth={2.5} />
              <span>Login / Register</span>
            </Link>

            <button aria-label="Search" className="hover:opacity-80">
              <Search size={16} strokeWidth={2.5} />
            </button>

            <button aria-label="Cart" className="flex items-center gap-1 hover:opacity-80">
              <ShoppingCart size={16} strokeWidth={2.5} />
              <span className="text-xs font-normal">1</span>
            </button>

            <button aria-label="Wishlist" className="flex items-center gap-1 hover:opacity-80">
              <Heart size={16} strokeWidth={2.5} />
              <span className="text-xs font-normal">1</span>
            </button>
          </div>

        
          <button
            className="lg:hidden text-[#252B42]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

 
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg w-full px-4 py-4 space-y-4">
            <Link to="/" className="block text-sm font-bold text-[#737373] hover:text-[#252B42]">Home</Link>

            <div className="border-t border-gray-200 pt-2">
              <div className="flex justify-between items-center cursor-pointer text-sm font-bold text-[#737373]" onClick={() => setShopOpen(!shopOpen)}>
                <span>Shop</span>
                <ChevronDown size={16} className={`${shopOpen ? "rotate-180" : ""} transition-transform`} />
              </div>
              {shopOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  <h4 className="font-bold text-[#252B42]">Kadın</h4>
                  <ul className="space-y-1">
                    <li className="hover:text-[#23A6F0] cursor-pointer">Bags</li>
                    <li className="hover:text-[#23A6F0] cursor-pointer">Belts</li>
                    <li className="hover:text-[#23A6F0] cursor-pointer">Cosmetics</li>
                    <li className="hover:text-[#23A6F0] cursor-pointer">Hats</li>
                  </ul>
                  <h4 className="font-bold text-[#252B42] mt-2">Erkek</h4>
                  <ul className="space-y-1">
                    <li className="hover:text-[#23A6F0] cursor-pointer">Bags</li>
                    <li className="hover:text-[#23A6F0] cursor-pointer">Belts</li>
                    <li className="hover:text-[#23A6F0] cursor-pointer">Cosmetics</li>
                    <li className="hover:text-[#23A6F0] cursor-pointer">Hats</li>
                  </ul>
                </div>
              )}
            </div>

            <Link to="/about" className="block text-sm font-bold text-[#737373] hover:text-[#252B42]">About</Link>
            <Link to="/blog" className="block text-sm font-bold text-[#737373] hover:text-[#252B42]">Blog</Link>
            <Link to="/contact" className="block text-sm font-bold text-[#737373] hover:text-[#252B42]">Contact</Link>
            <Link to="/pages" className="block text-sm font-bold text-[#737373] hover:text-[#252B42]">Pages</Link>

         
            <div className="flex gap-4 mt-4">
              <Link to="/login" className="flex items-center gap-1 text-sm font-bold text-[#23A6F0] hover:opacity-80">
                <User size={12} />
                <span>Login / Register</span>
              </Link>
              <button aria-label="Search" className="hover:opacity-80">
                <Search size={16} />
              </button>
              <button aria-label="Cart" className="flex items-center gap-1 hover:opacity-80">
                <ShoppingCart size={16} />
                <span className="text-xs font-normal">1</span>
              </button>
              <button aria-label="Wishlist" className="flex items-center gap-1 hover:opacity-80">
                <Heart size={16} />
                <span className="text-xs font-normal">1</span>
              </button>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
}
