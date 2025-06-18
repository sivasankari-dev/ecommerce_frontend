import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div>
      {/* <NavBar />
      <Hero />
      <Category />
      <Featured />
      <Footer /> */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />}/>
        <Route path="/category_detail/:slug" element={<CategoryDetail />}/>
        <Route path="/product_detail/:slug" element={<ProductDetail />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
        </Route>
      </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App
