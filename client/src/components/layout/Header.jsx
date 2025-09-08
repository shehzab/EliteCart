// Header.js
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/ec.png" alt="logo" className="w-8 h-8 object-contain" />
            <Link
              to="/"
              className="text-2xl font-light text-gray-900"
            >
              EliteCart
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
              Products
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
              Contact
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            <Link to="/cart" className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 hover:text-gray-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>

            <Link to="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-gray-200">
            <Link to="/" className="block py-3 text-gray-600 hover:text-gray-900 transition-colors font-light">
              Home
            </Link>
            <Link to="/products" className="block py-3 text-gray-600 hover:text-gray-900 transition-colors font-light">
              Products
            </Link>
            <Link to="/about" className="block py-3 text-gray-600 hover:text-gray-900 transition-colors font-light">
              About
            </Link>
            <Link to="/contact" className="block py-3 text-gray-600 hover:text-gray-900 transition-colors font-light">
              Contact
            </Link>
            <Link to="/login" className="block py-3 text-gray-600 hover:text-gray-900 transition-colors font-light">
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header