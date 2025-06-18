
import { Link } from "react-router-dom"
// import hero from '../assets/shoppro_hero.jpg'

const Hero = () => {
  return (
    <div
      className="h-dvh bg-cover bg-no-repeat flex items-center justify-end text-white bg-[url('./assets/shoppro_hero.jpg')]"
      
    >
      <div className='flex flex-col items-center justify-center mr-5'>
        <h1 className="text-gray-600 text-4xl md:text-7xl font-bold m-9 flex flex-col items-center justify-center">
          Unlock your passion <span className="hidden md:block"></span> for <span className="hidden md:block"></span> Fashion
        </h1>
        <button className="bg-black hover:bg-sky-900 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
          <Link to="#shop">
          Start Shopping →
          </Link>
        </button>
      </div>
   </div>
  )
}

export default Hero