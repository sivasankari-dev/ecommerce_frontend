
import { Link } from  'react-router-dom'
import { FaCartShopping  } from "react-icons/fa6"

const NavBar = () => {
  return (
    <nav className="bg-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <Link className= "cursor-pointer" to="/">
            <div className="flex-shrink-0">
                <h3 className='text-2xl text-gray-600 font-bold'>SHOPPRO</h3>
            </div>
            </Link>
         
            <div className="flex items-center space-x-7">
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-sky-900">
                    <a href="/login" className="relative font-medium">Login</a>
                </button>
                <Link to="/cart">
                    <FaCartShopping className="text-black text-4xl hover:text-sky-900"/>
                </Link>
            </div>
        </div>
     </div>
    </nav>
//   <nav className="bg-red-500 shadow-md fixed w-full top-0 z-50 p-4">
//   <h1 className="text-white text-xl">NewShop</h1>
// </nav>


  )
}

export default NavBar