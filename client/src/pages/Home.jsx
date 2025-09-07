import { Link } from 'react-router-dom'
import React from 'react'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 via-teal-800 to-black text-white rounded-lg p-8 mb-12">
        <div className='max-w-2xl'>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">EliteCart</h1>
        <p className="text-xl mb-6 ">Discover the latest trends</p>
        <Link 
         to="/products"
         className="inline-block bg-white text-emerald-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all"
        >
        Shop Now
        </Link>

        </div>
      </section>

      {/* Featured Categories */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">
            Shop by Category
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className="relative group overflow-hidden rounded-lg">
                <img 
                src="https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Fashion"
                className="w-full h-64 ovject-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                    <Link
                    to='/products?category=men'
                    className='text-white text-xl font-semibold bg-emerald-900 bg-opacity-90 py-2 px-6 rounded hover:bg-emerald-700 transition-colors   '
                    >
                    Men's Fashion
                    </Link>
                </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
                <img 
                src="https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Women's Fashion"
                className="w-full h-64 object-cover group-hover:scaler-105 transition-transform duration-300" 
                />
                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                    <Link
                    to='/products?category=women'
                    className='text-white text-xl font-semibold bg-emerald-900 bg-opacity-90 py-2 px-6 rounded hover:bg-emerald-700 transition-colors   '
                    >
                    Women's Fashion
                    </Link>
                </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
                <img 
                src="https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Accesssories"
                className="w-full h-64 object-cover group-hover:scaler-105 transition-transform duration-300" 
                />
                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                    <Link
                    to='/products?category=accessories'
                    className='text-white text-xl font-semibold bg-emerald-900 bg-opacity-90 py-2 px-6 rounded hover:bg-emerald-700 transition-colors   '
                    >
                    Accessories
                    </Link>
                </div>
            </div>
        </div>
      </section>

        {/* Features Section */}

        <section className="bg-gray-100 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Why Shop With Us</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='text-center'>
                    <div className='bg-emerald-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 text-black' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    </div>
                    <h3 className='text-xl font-semibold mb-2'>Quality Productst</h3>
                    <p className='text-black'>We source only the highest quality products from trusted suppliers.</p>
                </div>

                <div className='text-center'>
                    <div className='bg-emerald-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 text-black' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    </div>
                    <h3 className='text-xl font-semibold mb-2'>Secure Payment</h3>
                    <p className='text-black'>Your payment information is protected with industry-standard encryption.</p>
                </div>

                <div className='text-center'>
                    <div className='bg-emerald-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 text-black' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    </div>
                    <h3 className='text-xl font-semibold mb-2'>Fast Payments</h3>
                    <p className='text-black'>We process and ship orders quickly, usually within 24 hours.</p>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Home
