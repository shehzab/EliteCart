
// Home.js
import { Link } from 'react-router-dom'
import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            EliteCart
          </h1>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            Discover the latest trends in fashion and accessories with our curated collection of premium products
          </p>
          <Link 
            to="/products"
            className="inline-block bg-black text-white font-light py-4 px-8 hover:bg-gray-800 transition-colors"
          >
            Shop Now
          </Link>
        </section>

        {/* Featured Categories */}
        <section className="mb-20">
          <h2 className="text-3xl font-light text-gray-900 text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Fashion"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <Link
                  to="/products?category=men"
                  className="text-gray-900 text-lg font-light hover:underline"
                >
                  Men's Fashion
                </Link>
              </div>
            </div>
            
            <div className="group">
              <div className="relative overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Women's Fashion"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="text-center">
                <Link
                  to="/products?category=women"
                  className="text-gray-900 text-lg font-light hover:underline"
                >
                  Women's Fashion
                </Link>
              </div>
            </div>
            
            <div className="group">
              <div className="relative overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Accessories"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="text-center">
                <Link
                  to="/products?category=accessories"
                  className="text-gray-900 text-lg font-light hover:underline"
                >
                  Accessories
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 border-t border-gray-200">
          <h2 className="text-3xl font-light text-gray-900 text-center mb-16">
            Why Shop With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Quality Products</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                We source only the highest quality products from trusted suppliers worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Secure Payment</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Your payment information is protected with industry-standard encryption technology.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Fast Shipping</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                We process and ship orders quickly, usually within 24 hours of purchase.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home