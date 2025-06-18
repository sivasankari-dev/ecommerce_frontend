import { useState } from 'react';
import { Link, useNavigate } from  'react-router-dom'
import { FaCartShopping, FaSistrix   } from "react-icons/fa6"

const NavBar = () => {

   const [query, setQuery] = useState('');

      const navigate = useNavigate();

      const handleSearch = () => {
        if (query.trim() !== '') {
          navigate(`/search?query=${encodeURIComponent(query)}`);
        }
      };

      const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      };

  return (
    <nav className="bg-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <Link className= "cursor-pointer" to="/">
            <div className="flex-shrink-0">
                <h3 className='text-2xl text-gray-600 font-bold'>SHOPPRO</h3>
            </div>
            </Link>

             <div className="flex w-lg  items-center border-2 border-gray-600 rounded-3xl overflow-hidden">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Search for products..."
                className="flex-1 p-2 pl-4 text-gray-600 focus:outline-none"
              />
              <button
                type="submit"
                className="ml-2 mr-2 p-2 bg-sky-900 cursor-pointer text-white rounded-full flex items-center justify-center"
              >
                <FaSistrix size={18} />
              </button>
            </div>
         
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
  )
}

export default NavBar