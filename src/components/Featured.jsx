import { useEffect, useState } from 'react'
import api from "../api"
import FeaturedCard from './FeaturedCard'

const Featured = () => {

    const[products, setProducts] = useState([])

    useEffect(function(){
        api.get("product_list")
        .then(res => {
        console.log(res.data)
        setProducts(res.data)
    })

    .catch(err => {
        console.log(err.message)
    })

    },[])

   

  return (
    <div className='mt-8 text-center px-5'>
      <h4 className='m-5 text-xl font-bold text-gray-600'>Trending Now</h4>
    <div className='mt-8 flex flex-wrap justify-center gap-10'>
        {products.map(product => <FeaturedCard  key={product.id} product={product}/> )}
        </div>
    </div>

  )
}

export default Featured