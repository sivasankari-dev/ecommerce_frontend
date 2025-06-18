import { useState, useEffect } from "react"
import api from "../api"

import { useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import Category from "../components/Category"

const CategoryDetail = () => {

    const { slug } = useParams()

    const[products, setProducts] = useState([])
    
        useEffect(function(){
            api.get(`category/${slug}`)
            .then(res => {
            console.log(res.data)
            setProducts(res.data.products)
            // console.log(products)
        })
    
        .catch(err => {
            console.log(err.message)
        })
    
        },[slug])

  return (
   <div className='mt-20 text-center'>
        <Category size="small"/>
        {/* <h4 className='m-5 text-lg font-bold text-gray-600'>Popular Categories</h4> */}
        <div className='mt-10 flex justify-center items-center flex-wrap gap-10'>
        {products.map(product => <ProductCard  key={product.id} product={product} /> )}
        </div>
    </div>


  )
}

export default CategoryDetail