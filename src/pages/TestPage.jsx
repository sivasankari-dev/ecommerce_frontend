import { useState, useEffect } from "react"
import api from "../api"

const TestPage = () => {
    const cart_code = localStorage.getItem("cart_code")
    const[cart, setCart] = useState([]);

    useEffect(function(){
        api.get(`get_cart/${cart_code}`)
        .then(res => {
            console.log(res.data)
            setCart(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })

    },[cart_code])

  return (
    <div>
      {cart.cartitems.length !== 0 ? (
        <pre>{JSON.stringify(cart, null, 2)}</pre>
      ) : (
        <p className="mt-20">Nodata</p>
      )
      }
      </div>
  )
}

export default TestPage