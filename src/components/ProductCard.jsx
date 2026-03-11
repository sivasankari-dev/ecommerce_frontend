import { Link } from 'react-router-dom'
import { BASE_URL } from '../api'
import api from '../api'

const ProductCard = ({ product }) => {

  // const cart_code = localStorage.getItem("cart_code")
  // const { cart, setCart } = useCartValue();

  // const newItem = { cart_code: cart_code, product_id: product.id }

  // function add_to_cart() {
  //   api.post("add_to_cart/", newItem)
  //     .then(res => {
  //       console.log(res.data)
  //       setCart(res.data);
  //     })

  //     .catch(err => {
  //       console.log(err.message)
  //     })
  // }


  return (
    <div className="w-full max-w-xs bg-white mb-5 border border-gray-200 rounded-lg shadow-md transform transition hover:scale-105">
      <div className="flex flex-col items-center p-5">
        <Link to={`/product_detail/${product.slug}`}>
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
          className="w-full text-white bg-sky-950 hover:bg-sky-900 focus:ring-4 cursor-pointer  
        focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2 
        text-center"
        >
         Buy Now
        </button>
        </Link>
        {/* <button
          type="button"
          onClick={add_to_cart}
          className="w-full text-white bg-sky-950 hover:bg-sky-900 focus:ring-4 cursor-pointer  
        focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2 
        text-center"
        >
          Add to cart
        </button> */}

      </div>
    </div>
  )
}

export default ProductCard