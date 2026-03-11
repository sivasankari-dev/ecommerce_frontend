import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTrashCan, FaCartShopping } from "react-icons/fa6";
import api from '../api'
import { BASE_URL } from "../api";
import { toast } from "react-toastify"; 

const CartItems = ({ item, setCartTotal, cartitems, setCartitems, setNumCartitems }) => {

    const [quantity,setQuantity] = useState(item.quantity)
    const [updating, setUpdating] = useState(false)

    const itemData = {item_id:item.id, quantity:quantity}

    function handleUpdate(){
        setUpdating(true)
        api.put('update_cartitem_quantity/',itemData)
        .then(res =>{
            console.log(res.data)
            setUpdating(false)
            toast.success("Product quantity updated successfully")
            const updated_cartitems = cartitems.map((cartitem => cartitem.id === item.id ? res.data.data : cartitem))
            // setCartitems(cartitems.map((cartitem => cartitem.id === item.id ? res.data.data : cartitem)))
            // setCartTotal(cartitems.map((cartitem) => cartitem.id === item.id ? res.data.data : cartitem ).reduce ((acc, curr) => acc + curr.sub_total, 0))
            // setNumCartitems(cartitems.map((cartitem) => cartitem.id === item.id ? res.data.data : cartitem ).reduce((acc, curr) => acc + curr.quantity, 0))
            setCartitems(updated_cartitems)
            setCartTotal(updated_cartitems.reduce((acc,curr) => acc + curr.sub_total, 0))
            setNumCartitems(updated_cartitems.reduce ((acc,curr) => acc + curr.quantity ,0))      
        })
        .catch(err => {
            console.log(err.message)
            setUpdating(false)
        })
    }

     function handleDelete(){
        const confirmDelete = window.confirm("Do you want to remove this product from cart?")
        if(confirmDelete){
        api.delete(`delete_cartitem/${item.id}/`)
        .then (res => {
            console.log(res.data)
            const updated_cartitems = cartitems.filter(cartitem => cartitem.id !== item.id)
            console.log(updated_cartitems)
            setCartitems(updated_cartitems)
            setNumCartitems(updated_cartitems.reduce((acc,curr) => acc + curr.quantity,0))
            setCartTotal(updated_cartitems.reduce((acc,curr) => acc + curr.sub_total,0))
        })
        .catch (err => {
            console.log(err.message)
        })
        }
     }


    return (
        // <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="max-w-7xl mx-auto px-4 py-2">

            <div className="flex justify-between text-gray-600 border-gray-200 border-b px-6 py-3 items-start">
                <Link to={`/product_detail/${item.product.slug}`} className="cursor-pointer">
                <div className="flex justify-start">
                    {/* <div className="w-[70px] h-[70px] mb-4"> */}
                    <div className="flex gap-2 w-auto">
                        <img
                            src={`${BASE_URL}${item.product.image}`}
                            alt="Product"
                            className="w-20 h-20 object-contain rounded"
                        />
                    </div>
                    <div className="ml-10">
                        <h2 className="text-lg font-semibold">{item.product.name}</h2>
                        <p className="text-gray-600">₹ {item.product.price}</p>
                        {/* <p className="text-gray-600">Qty: {item.quantity}</p> */}

                    </div>

                </div>
                </Link>

                <div className="flex flex-col items-end space-y-4">
                    <p className="text-md font-bold text-gray-700">
                        ₹ {item.product.price * quantity}
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <div className="text-sm font-medium md:text-md lg:font-medium">
                            <input
                                type="number"
                                name="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className="w-10 md:w-16 text-center border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-sky-900 transition"
                                min={1}
                            />
                        </div>
                        <button
                            className="px-2 py-1 text-sm text-gray-600 border border-gray-600 rounded hover:bg-sky-800 hover:text-white cursor-pointer transition"
                            onClick={() => handleUpdate()}
                        >
                            {updating ? "Updating" : "Update Cart"}
                        </button>
                        <button
                            className="text-sky-900 hover:text-red-900 cursor-pointer"
                            onClick={() => handleDelete()}
                        >
                            <FaTrashCan size={20} />
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default CartItems