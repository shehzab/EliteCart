import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
// import ProductDetail from './pages/productDetail'
// import ProductList from './pages/productDetails'

function App() {


  return (
    <div className='min-h-screen  flex flex-col'>
      <Header />
        <main className='flex-grow'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      <Footer />
    </div>
  )
}

export default App
