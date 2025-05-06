
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-sage-400 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-sage-600 font-medium text-xl">Ativa World</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-sage-500 transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-sage-500 transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-sage-500 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-sage-500 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200 mt-3">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/"
                className="block px-3 py-2 text-gray-700 hover:bg-sage-50 hover:text-sage-500 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products"
                className="block px-3 py-2 text-gray-700 hover:bg-sage-50 hover:text-sage-500 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:bg-sage-50 hover:text-sage-500 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:bg-sage-50 hover:text-sage-500 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
