import { useEffect, useState } from 'react'
import api from "../api"
import CategoryCard from "./CategoryCard"

const Category = ({size}) => {

const[categories, setCategories] = useState([])

    useEffect(function(){
        api.get("category_list")
        .then(res => {
        console.log(res.data)
        setCategories(res.data)
    })

    .catch(err => {
        console.log(err.message)
    })

    },[])

  return (
     <div className='mt-10 text-center'>
        <h4 className='m-5 text-xl font-bold text-gray-600'>Popular Categories</h4>
        <div className='flex justify-center items-center flex-wrap gap-10'>
        {categories.map(category => <CategoryCard  key={category.id} category={category} size={size}/> )}
        </div>
        </div>
  )
}

export default Category