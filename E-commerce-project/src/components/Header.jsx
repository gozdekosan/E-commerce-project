import { Link } from 'react-router-dom';

/**
 * * @param {string} activePage 
 */
const Header = ({ activePage }) => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ];

 
  const primaryColor = 'text-[#23A6F0]'; 
  const primaryBgColor = 'bg-[#23A6F0]'; 

  return (
    <header className="flex justify-between items-center py-5 px-4 lg:px-32 border-b border-gray-100 bg-white sticky top-0 z-50">
      
    
      <Link to="/" className="text-2xl font-bold text-gray-800">
        Bandage
      </Link>

      <nav className="hidden lg:flex space-x-8 text-sm font-semibold">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`transition duration-300 ${
              activePage === item.name
                ? `${primaryColor} font-bold` 
                : 'text-gray-500 hover:text-gray-800' 
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      
  
      <div className="flex items-center space-x-4 text-sm font-semibold">
        
        <Link to="/login" className={`${primaryColor} hover:text-blue-700 transition duration-300`}>
          Login
        </Link>
        
        <Link 
          to="/team" 
          className={`${primaryBgColor} text-white py-2 px-4 rounded-lg flex items-center hover:bg-blue-700 transition duration-300 space-x-2`}
        >
          <span>Become a member</span>
          <span className="text-lg">→</span> 
        </Link>
      </div>
    </header>
  );
};

export default Header;