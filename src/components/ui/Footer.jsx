
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className = "py-5 m-3 rounded-lg bg-gray-600 text-center">
    <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10'>
        <div className='w-1/3 text-justify text-white'>
            <h5 className="text-xl font-bold mb-2">SHOPPRO</h5>
            <p className="text-sm text-gray-300 leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eius magnam possimus sequi earum! Cupiditate perspiciatis minima a cumque, eum reiciendis debitis numquam vitae odio, necessitatibus est molestias adipisci assumenda!</p>
        </div>
         <div className='w-1/3 text-center text-white'>
            <h5 className="text-xl font-bold mb-2">Featured Products</h5>
           <div className="flex flex-col items-center  space-y-2">
            <a href="#" className='text-white mx-2 text-sm text-gray-300 leading-relaxed'>Electronics</a>
            <a href="#" className='text-white mx-2 text-sm text-gray-300 leading-relaxed'>Toys</a>
            <a href="#" className='text-white mx-2 text-sm text-gray-300 leading-relaxed'>Food</a>
            <a href="#" className='text-white mx-2 text-sm text-gray-300 leading-relaxed'>Clothing</a>
            <a href="#" className='text-white mx-2 text-sm text-gray-300 leading-relaxed'>Books</a>
            </div>
        </div>
         <div className='w-1/3 text-center text-white'>
            <h5 className="text-xl font-bold mb-2">Popular Categories</h5>
            <div className="flex flex-col items-center  space-y-2">
            <a href="#" className='text-white mx-2 text-sm text-gray-300 leading-relaxed'>Electronics</a>
            <a href="#" className='text-white mx-2 text-sm text-gray-300 leading-relaxed'>Toys</a>
            <a href="#" className='text-white mx-2 text-sm text-gray-300 leading-relaxed'>Food</a>
            <a href="#" className='text-white mx-2 text-sm text-gray-300 leading-relaxed'>Clothing</a>
            <a href="#" className='text-white mx-2 text-sm text-gray-300 leading-relaxed'>Books</a>
            </div>
        </div>
    </div> 

     <div className="py-6 flex justify-center text-3xl">
        <a href="#" className='text-white mx-2'><FaFacebook /></a>
        <a href="#" className='text-white mx-2'><FaTwitter /></a>
        <a href="#" className='text-white mx-2'><FaInstagram /></a>
    </div>
    <p className="text-sm mb-0 text-white">&copy; 2025 shoppro.All rights reserved.</p>
    </footer>
  )
}

export default Footer