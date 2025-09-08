
// Footer.js
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-light text-gray-900 mb-6">EliteCart</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Your one-stop shop for the latest fashion trends and premium accessories
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-900 transition-colors font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-500 hover:text-gray-900 transition-colors font-light">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-500 hover:text-gray-900 transition-colors font-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-gray-900 transition-colors font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-light text-gray-900 mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-gray-500 hover:text-gray-900 transition-colors font-light">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-500 hover:text-gray-900 transition-colors font-light">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-500 hover:text-gray-900 transition-colors font-light">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors font-light">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-light text-gray-900 mb-6">Contact Us</h4>
            <address className="text-gray-500 font-light not-italic leading-relaxed">
              <p>123 Fashion Street</p>
              <p>Kasargod, Kerala 800902</p>
              <p className="mt-4">Email: info@elitecart.com</p>
              <p>Phone: +91 9874563210</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-500 font-light">
            &copy; {new Date().getFullYear()} EliteCart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer