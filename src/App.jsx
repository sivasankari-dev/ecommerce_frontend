import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import api from './api'
import './App.css'
import NavBar from './components/ui/NavBar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Category from './components/Category'
import Footer from './components/ui/Footer'
import MainLayout from "./layout/MainLayout"
import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import CategoryDetail from './pages/CategoryDetail'
import ProductDetail from './pages/ProductDetail'
import SearchPage from './pages/SearchPage'
import CartPage from './pages/CartPage'
import TestPage from './pages/TestPage'

function App() {

  const [numCartitems, setNumCartitems] = useState(0);
  const cart_code = localStorage.getItem("cart_code")

  useEffect(() => {
    if(cart_code){
    api.get(`get_cart_stat?cart_code=${cart_code}`)
      .then(res => {
        console.log(res.data)
        setNumCartitems(res.data.num_of_items)
      })

      .catch(err => {
        console.log(err.message)
      })
    }

  }, [])

  return (
    <BrowserRouter>
      <div>
        {/* <NavBar />
      <Hero />
      <Category />
      <Featured />
      <Footer /> */}
        <Routes>
          <Route path="/" element={<MainLayout numCartitems={numCartitems} />}>
            <Route index element={<HomePage />} />
            <Route path="/category_detail/:slug" element={<CategoryDetail />} />
            <Route path="/product_detail/:slug" element={<ProductDetail setNumCartitems={setNumCartitems}/>} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/cart" element={<CartPage setNumCartitems={setNumCartitems}/>} />
            {/* <Route path="/cart" element={<TestPage />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
