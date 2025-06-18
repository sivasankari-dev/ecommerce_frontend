
import { Link, useParams } from 'react-router-dom'
import { BASE_URL } from '../api'

const CategoryCard = ({category, size}) => {
  const {slug} = useParams();
  const isActive = slug === category.slug;
   const isSmall = size === "small" ;
  //  const bgClass = slug === category.slug ? "bg-sky-900" : "bg-white";
  return (
    <div className={` rounded-md overflow-hidden px-4 py-3 mx-5 flex flex-col items-center justify-center cursor-pointer ${isActive ? 'border-2 border-sky-900' : 'bg-white'}`}>
       {/* <div className={` ${sizeClass} max-w-sm bg-white rounded-md overflow-hidden px-10 py-3 mx-5 flex flex-col items-items justify-center cursor-pointer`}>   */}
      <Link to={`/category_detail/${category.slug}`}>
        {/* <img src = {`${BASE_URL}${category.image}`} alt = "image" className="w-full h-22 object-cover mb-3 rounded transform transition duration-300 hover:scale-110" ></img> */}
         <img src = {`${BASE_URL}${category.image}`} alt = "image" className={`mb-3 rounded transform transition duration-300 hover:scale-110 ${isSmall ?  "w-16 h-16" : "w-24 h-24"} object-contain`} ></img>
        <h3 className={`font-sans font-semibold text-gray-800 text-center ${isSmall ?  "text-sm" : "text-lg"}`}>{category.name}</h3>
      </Link>
    </div>
  )
}

export default CategoryCard