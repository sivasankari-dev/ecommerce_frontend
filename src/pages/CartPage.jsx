import { Link } from "react-router-dom";
import api from '../api'
import { FaTrashCan, FaCartShopping } from "react-icons/fa6";
import { BASE_URL } from "../api";
import cartImg from "../assets/empty-cart.png"
import { useEffect, useState } from "react";
import CartItems from "../components/CartItems";
import CartSummary from "../components/CartSummary";

const CartPage = ({ setNumCartitems }) => {
    const cart_code = localStorage.getItem("cart_code");
    const [cartitems, setCartitems] = useState([])
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(function () {
        api.get(`/get_cart/${cart_code}`)
            .then(res => {
                console.log(res.data)
                setCartitems(res.data.cartitems)
                setCartTotal(res.data.cart_total)
            })

            .catch(err => {
                console.log(err.message)
            })

    }, [cart_code])


    return (

        <div className="max-w-7xl mx-auto px-4 py-10">
            {cartitems?.length !== 0 ? (

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 border border-gray-300 p-6 rounded-xl bg-white shadow-sm w-full lg:w-2/3 mt-15">
                        <h1 className="text-2xl text-center text-gray-600 font-bold mb-6 pb-2">Your Cart ({cartitems.length} products and {cartitems.reduce((acc,curr) => acc + curr.quantity,0)} items)</h1>
                        <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">

                            {cartitems.map((item) => <CartItems key={item.id} item={item} cartitems={cartitems}  setCartitems={setCartitems} setNumCartitems={setNumCartitems} setCartTotal={setCartTotal}/>)}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3">
                        <CartSummary cart_total={cartTotal} />
                    </div>
                </div>
            ) : (

                <div className="flex flex-col items-center justify-center pt-15 pb-12">
                    <img src={cartImg} alt="img" className="w-20 h-20" />
                    <p className="text-2xl text-gray-600 mt-6">Your cart is empty.</p>
                    <p className="text-base text-gray-500 mt-2">Looks like you haven’t added any items yet.</p>

                    <Link to="/" className="bg-black hover:bg-sky-900 text-white font-semibold mt-8 px-6 py-3 rounded-lg transition">
                        Start Shopping Now →
                    </Link>

                </div>
            )}
        </div>
    );
};

export default CartPage;
