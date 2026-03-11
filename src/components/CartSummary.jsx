import React from 'react'

const CartSummary = ({ cart_total }) => {
    const cartTax = Math.floor(cart_total * 0.02);
    const finalTotal = cart_total + cartTax
    return (

        // <div className="max-w-7xl mx-auto mt-15 p-4">
             <div className="max-w-7xl mx-auto px-4 py-15">

            {/* <div className="flex-1 space-y-2 border border-gray-300 p-3 rounded-xl"> */}
                <div className="flex-1  border border-gray-300 p-6 rounded-xl bg-white shadow-sm">
                <p className="text-2xl text-center text-gray-600 font-bold mb-4">Order Summary</p>
                <div className='flex justify-between'>
                    <p className='text-md font-normal text-gray-600'>Sub Total </p>
                    <p className=" text-end font-medium text-gray-600">₹ {cart_total}</p>
                </div>
                <div className='flex justify-between border-b-1 border-gray-600 pb-2'>
                    <p className='text-md font-normal text-gray-600'>Tax </p>
                    <p className=" text-end font-medium text-gray-600">₹ {cartTax}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-md font-normal text-gray-600'>Total </p>
                    <p className=" text-end font-medium text-gray-600">₹ {finalTotal}</p>
                </div>
                <button
                    type="submit"
                    // onClick={}
                    className='w-full text-white bg-sky-950 hover:bg-sky-900 focus:ring-4 cursor-pointer  
                             focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2 
                             text-center mt-5'
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>

    )
}

export default CartSummary