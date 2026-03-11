import { useEffect } from 'react'
import Hero from '../../components/Hero'
import Category from '../../components/Category'
import Featured from '../../components/Featured'
import { randomValue } from '../../GenerateCartCode'


const HomePage = () => {

  useEffect (() => {
    if(localStorage.getItem("cart_code") === null){
      localStorage.setItem("cart_code",randomValue)
    }
  },[])

  return (
    <div>
        <Hero />
        <Category size="large"/>
        <Featured />
    </div>
  )
}

export default HomePage