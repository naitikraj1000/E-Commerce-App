import React, { useContext, useEffect, useState } from 'react'
import SummaryApi from '../common'
import Context from '../context'
import displayINRCurrency from '../helpers/displayCurrency'
import { MdDelete } from "react-icons/md";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'  // You will create this component (code below)

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

const Cart = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const context = useContext(Context)
  const loadingCart = new Array(4).fill(null)

  const fetchData = async () => {
    const response = await fetch(SummaryApi.addToCartProductView.url, {
      method: SummaryApi.addToCartProductView.method,
      credentials: 'include',
      headers: { "content-type": 'application/json' },
    })
    const responseData = await response.json()
    if (responseData.success) {
      setData(responseData.data)
    }
  }

  useEffect(() => {
    setLoading(true)
    fetchData().finally(() => setLoading(false))
  }, [])

  const increaseQty = async (id, qty) => {
    const response = await fetch(SummaryApi.updateCartProduct.url, {
      method: SummaryApi.updateCartProduct.method,
      credentials: 'include',
      headers: { "content-type": 'application/json' },
      body: JSON.stringify({ _id: id, quantity: qty + 1 }),
    })
    const responseData = await response.json()
    if (responseData.success) fetchData()
  }

  const decreaseQty = async (id, qty) => {
    if (qty >= 2) {
      const response = await fetch(SummaryApi.updateCartProduct.url, {
        method: SummaryApi.updateCartProduct.method,
        credentials: 'include',
        headers: { "content-type": 'application/json' },
        body: JSON.stringify({ _id: id, quantity: qty - 1 }),
      })
      const responseData = await response.json()
      if (responseData.success) fetchData()
    }
  }

  const deleteCartProduct = async (id) => {
    const response = await fetch(SummaryApi.deleteCartProduct.url, {
      method: SummaryApi.deleteCartProduct.method,
      credentials: 'include',
      headers: { "content-type": 'application/json' },
      body: JSON.stringify({ _id: id }),
    })
    const responseData = await response.json()
    if (responseData.success) {
      fetchData()
      context.fetchUserAddToCart()
    }
  }

  const totalQty = data.reduce((prev, curr) => prev + curr.quantity, 0)
  const totalPrice = data.reduce(
    (prev, curr) => prev + curr.quantity * curr?.productId?.sellingPrice,
    0
  )
  const totalPriceInCents = Math.round((totalPrice / 85) * 100) // Convert INR to USD cents approx.

  const handlePaymentSuccess = () => {
    context.fetchUserAddToCart()
    setData([])
    alert('Payment successful')
  }

  return (
    <div className='container mx-auto'>
      <div className='text-center text-lg my-3'>
        {data.length === 0 && !loading && <p className='bg-white py-5'>No Data</p>}
      </div>

      <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>
        {/* Product List */}
        <div className='w-full max-w-3xl'>
          {loading
            ? loadingCart.map((_, index) => (
                <div
                  key={"loading" + index}
                  className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded'
                ></div>
              ))
            : data.map((product) => (
                <div
                  key={product?._id}
                  className='w-full bg-white h-32 my-2 border border-slate-300 rounded grid grid-cols-[128px,1fr]'
                >
                  <div className='w-32 h-32 bg-slate-200'>
                    <img
                      src={product?.productId?.productImage[0]}
                      alt={product?.productId?.productName}
                      className='w-full h-full object-scale-down mix-blend-multiply'
                    />
                  </div>
                  <div className='px-4 py-2 relative'>
                    {/* Delete button */}
                    <div
                      className='absolute right-0 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer'
                      onClick={() => deleteCartProduct(product?._id)}
                    >
                      <MdDelete />
                    </div>

                    <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>
                      {product?.productId?.productName}
                    </h2>
                    <p className='capitalize text-slate-500'>
                      {product?.productId?.category}
                    </p>
                    <div className='flex items-center justify-between'>
                      <p className='text-red-600 font-medium text-lg'>
                        {displayINRCurrency(product?.productId?.sellingPrice)}
                      </p>
                      <p className='text-slate-600 font-semibold text-lg'>
                        {displayINRCurrency(product?.productId?.sellingPrice * product?.quantity)}
                      </p>
                    </div>
                    <div className='flex items-center gap-3 mt-1'>
                      <button
                        className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded'
                        onClick={() => decreaseQty(product?._id, product?.quantity)}
                      >
                        -
                      </button>
                      <span>{product?.quantity}</span>
                      <button
                        className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded'
                        onClick={() => increaseQty(product?._id, product?.quantity)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* Summary & Payment */}
        <div className='mt-5 lg:mt-0 w-full max-w-sm'>
          {loading ? (
            <div className='h-36 bg-slate-200 border border-slate-300 animate-pulse'></div>
          ) : (
            <div className='h-auto bg-white p-4 rounded shadow'>
              <h2 className='text-white bg-red-600 px-4 py-1'>Summary</h2>
              <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                <p>Quantity</p>
                <p>{totalQty}</p>
              </div>

              <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600 mb-4'>
                <p>Total Price</p>
                <p>{displayINRCurrency(totalPrice)}</p>
              </div>

              <Elements stripe={stripePromise}>
                <CheckoutForm
                  amount={totalPriceInCents}
                  products={data.map((el) => ({
                    productId: el?.productId?._id,
                    quantity: el?.quantity,
                  }))}
                  onPaymentSuccess={handlePaymentSuccess}
                />
              </Elements>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
