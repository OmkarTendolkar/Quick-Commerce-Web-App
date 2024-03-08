import React, { useContext, useEffect, useState} from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {
  let {cartQuantity, setCartQuantity, cartProducts, setCartProducts} = useContext(CartContext);

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const price = cartProducts.reduce((sum, product) => sum = sum + product.item.price, 0)
    setCartTotal(price);
  }, [])
  
  

  const CartCard = ({product}) => {
    const handleDeleteButton = (key) => {
      const filteredItems = cartProducts.filter((p) => p.key !== key);
      console.log(filteredItems);
      setCartQuantity(cartQuantity - 1);
      setCartProducts(filteredItems);
    }

    return(
      <div className='border w-[900px] p-5 space-x-5 flex items-center justify-between rounded'>
        <div className='flex space-x-4'>
          <img className='h-[100px] w-[100px] object-contain' src={product.item.image} alt="" />
          <div className='text-sm space-y-2 w-80 p-1'>
            <div>{product.item.name}</div>
            <div><span>Variant: </span> {product.item.variant}</div>
          </div>
        </div>
        <div className='flex items-center space-x-20'>
          <div>&#8377;{product.item.price}</div>
          <div>&#8377;{product.item.marketPrice - product.item.price}</div>
          <button className='bg-red-600 text-white px-4 py-2 rounded-md' onClick={() => handleDeleteButton(product.key)}>Delete</button>
        </div>
      </div>
    )
  }

  return (
    <div className='pt-28 px-10 pb-10 flex items-start  justify-between p-1 space-x-5'>
      <div className='space-y-2'>
        {cartProducts.map((product) => {
          return <CartCard key={product.key} product={product} />
        })}
      </div>

      <div>
        <div className='w-80  border rounded'>
          <div className='px-4 py-2 text-sm font-semibold border-b-[1px]'>Price Summary</div>
          <div className='mx-4 p-3 text-xs font-semibold text-stone-500 flex justify-between'>
            <div>Cart Total</div>
            <div className='text-black'>&#8377; {cartTotal}</div>
          </div>
          <div className='mx-4 p-3 text-xs font-semibold text-stone-500 border-y-2 flex justify-between'>
            <div>Delivery Charge </div>
            <div className='text-red-600'>+ Extra</div>
          </div>
          <div className='mx-4 p-3 text-xs font-semibold text-stone-500 flex justify-between'>
            <div>Savings</div>
            <div className='text-black'>&#8377; 56</div>
          </div>
        </div>

        <div className='flex py-6'>
          <button className='py-3 flex-1 text-sm font-semibold bg-purple-600 text-white rounded shadow'>PROCEED TO CHECKOUT</button>
        </div>
      </div>
      
    </div>
  )
}

export default Cart