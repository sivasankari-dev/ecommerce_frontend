import { useState, useEffect } from "react"
import api from "../api"
import { BASE_URL } from '../api'

import { useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const ProductDetail = () => {

    const categoryMap = {
    
      1: "electronics",
      2: "toys",
      3: "food",
      4: "clothing",
      5: "books",
      6: "footwear"
    };

    const { slug } = useParams()

    const[product, setProduct] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);
    
        useEffect(function(){
            api.get(`product/${slug}`)
            .then(res => {
            console.log(res.data)
            setProduct(res.data)
            // console.log(products)
            const categorySlug = categoryMap[res.data.category];

           api.get(`category/${categorySlug}`).then((catRes) => {
           const related = (catRes.data.products || []).filter(
            (p) => p.id !== res.data.id
          );
           setRelatedProducts(related);
          });
        })
    
        .catch(err => {
            console.log(err.message)
        })
    
        },[slug])

        const isActive = product.category === 5;


  return (
    <div>
        <div className="max-w-5xl mx-auto mt-15 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Product Image */}
        <div className="w-full h-[500px] flex items-center justify-center bg-white rounded-lg overflow-hidden">
          <img
            src={`${BASE_URL}${product.image}`}
            alt={product.name}
            className={`w-full h-full rounded-lg mr-10  ${isActive ? "object-contain" : "object-cover" }`}
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>
            <div className="flex items-center text-gray-600 space-x-2 mb-4 ">
            <p className="text-2xl font-semibold">
                {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    maximumFractionDigits: 0, 
                }).format(product.price)}
            </p><span className="text-base">MRP</span>
            </div>
            <p className="text-lg font-semibold text-gray-600 mb-6">Inclusive of all taxes</p>
            <p className="text-gray-600 mb-6 text-justify">
              {product.description}
            </p>
          </div>

          {/* Add to Cart Button */}

          <div className="flex flex-col md:flex-row w-full gap-4">
            <button className="flex-1 px-6 py-2 border-2 border-sky-950 text-gray-600 text-lg rounded-lg hover:bg-sky-950 hover:text-white transition-transform">
                Wishlist
            </button>
            <button className="flex-1 px-6 py-2 bg-sky-950 text-white text-lg rounded-lg hover:bg-sky-900 transition-colors">
                Add to Cart
            </button>
            </div>
        </div>
      </div>
    </div>
       <div className='mt-20 text-center'>
       
        <h4 className='m-5 text-xl font-bold text-gray-600'>Similar Products</h4>
        <div className='mt-10 flex justify-center items-center flex-wrap gap-10'>
        {relatedProducts.map(product => <ProductCard  key={product.id} product={product} /> )}
        </div>
    </div>
    </div>
  )
}

export default ProductDetail