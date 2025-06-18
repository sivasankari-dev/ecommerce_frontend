
import { Link } from 'react-router-dom'
import { BASE_URL } from '../api'

const FeaturedCard = ({product}) => {
  return (
    // <div className='max-w-sm bg-white shadow-lg rounded-lg overflow-hidden'> 
    //   <Link to="/product_detail">
    //     <img src = {`${BASE_URL}${product.image}`} alt = "image" className="w-full h-48 object-cover" ></img>
    //     <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
    //     <h4 className="text-gray-600">{product.price}</h4>
    //   </Link>
    // </div>
    // <div className='="w-full max-w-sm bg-white mb-5 border border-gray-200 rounded-lg shadow '> 
    //   <Link to="/product_detail">
    //     <img src = {`${BASE_URL}${product.image}`} alt = "image" className="p-8 rounded-t-lg" ></img>
    //     <h3 className="text-xl font-semibold tracking-tight text-gray-900">{product.name}</h3>
    //     <h4 className="text-3xl font-bold text-gray-900">{product.price}</h4>
    //     <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
    //         focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
    //         text-center ">Add to cart</button>
    //   </Link>
    // </div>
    <div className="w-full max-w-xs bg-white mb-5 border border-gray-200 rounded-lg shadow-md transform transition hover:scale-105">
  <Link to={`/product_detail/${product.slug}`} className="flex flex-col items-center p-5">
     <div className="w-full h-48 mb-4">
      <img
        src={`${BASE_URL}${product.image}`}
        alt="Product"
        className="w-full h-full object-contain rounded"
      />
    </div>
    <h3 className="text-md font-semibold tracking-tight text-gray-900 mb-2 text-center">
      {product.name}
    </h3>
    {/* <h4 className="text-lg font-bold text-gray-900 mb-4">{`₹ ${product.price}`}</h4> */}
    <p className="text-lg text-gray-900 font-semibold mb-4">
          {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
              maximumFractionDigits: 0, 
           }).format(product.price)}
    </p>
    <button
      type="button"
      className="w-full text-white bg-sky-950 hover:bg-sky-900 focus:ring-4 
        focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2 
        text-center"
    >
      Add to cart
    </button>
  </Link>
  
</div>

  )
}

export default FeaturedCard