
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sage-50 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-sage-400 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-sage-600 font-medium text-lg">Ativa World</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Providing sustainable, eco-friendly products crafted with care from India to the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-sage-600 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-sage-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-sage-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-sage-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-sage-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-medium text-sage-600 mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products?category=yoga" className="text-gray-600 hover:text-sage-500 transition-colors">
                  Yoga Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=decor" className="text-gray-600 hover:text-sage-500 transition-colors">
                  Home Decor
                </Link>
              </li>
              <li>
                <Link to="/products?category=furniture" className="text-gray-600 hover:text-sage-500 transition-colors">
                  Furniture
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="text-gray-600 hover:text-sage-500 transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-sage-600 mb-4">Contact Us</h3>
            <address className="text-sm text-gray-600 not-italic">
              <p>Ativa World Exports Ltd.</p>
              <p>123 Sustainable Way</p>
              <p>Mumbai, Maharashtra 400001</p>
              <p>India</p>
              <p className="mt-2">
                <a href="mailto:info@ativaworld.com" className="hover:text-sage-500 transition-colors">
                  info@ativaworld.com
                </a>
              </p>
              <p>
                <a href="tel:+919876543210" className="hover:text-sage-500 transition-colors">
                  +91 9876 543 210
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-sage-200">
          <p className="text-sm text-center text-gray-500">
            © {new Date().getFullYear()} Ativa World. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
