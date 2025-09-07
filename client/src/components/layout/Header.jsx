import { useState } from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
        <div className="flex items-center space-x-2">
            <img src="/ec.png" alt="logo" className="w-12 h-12 object-contain" />
            <Link
            to="/"
            className="text-2xl font-bold text-emerald-900"
            >
            EliteCart
            </Link>
        </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-900 transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-emerald-900 transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-emerald-900 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-emerald-900 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
                <span className="absolute -top-1 -right-1 bg-emerald-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                </span>
            </Link>

            <Link to="/login" className="text-gray-700 hover:text-emerald-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-emerald-900 transition-colors">
              Home
            </Link>
            <Link to="/products" className="block py-2 text-gray-700 hover:text-emerald-900 transition-colors">
              Products
            </Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-emerald-900 transition-colors">
              About
            </Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-emerald-900 transition-colors">
              Contact
            </Link>
            <Link to="/login" className="block py-2 text-gray-700 hover:text-emerald-900 transition-colors">
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header