import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white mt-auto ">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> 
          {/* Company Info  */}
          <div>
            <h3 className="text-lg font-bold mb-4">EliteCart</h3>
            <p className="text-gray-300">
              Your one-stop shop for the latest fashion trends and accessories
            </p>
          </div>

          {/* Quick Links  */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to='/' className="text-gray-300 hover:text-white transition-colors">
                  Home
                  </Link>
                </li>
                <li>
                  <Link to='/' className="text-gray-300 hover:text-white transition-colors">
                  Products
                  </Link>
                </li>
                <li>
                  <Link to='/' className="text-gray-300 hover:text-white transition-colors">
                  About Us
                  </Link>
                </li>
                <li>
                  <Link to='/' className="text-gray-300 hover:text-white transition-colors">
                  Contact
                  </Link>
                </li>
              </ul>
          </div>

          {/* Customer Service  */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors"> FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors"> Returns & Exchanges</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors"> Shipping Information</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors"> Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info  */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-300 not-italic">
              <p>123 Fashion Street</p>
              <p>Kasargod,Kerala 800902</p>
              <p className="mt-2">Email: info@elitecart.com</p>
              <p>Phone: +91 9874563210</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 m-8 pt-6 text-center text-gray-200">
          <p>&copy; {new Date().getFullYear()} EliteCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer