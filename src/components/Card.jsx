import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { v4 as uuidv4 } from 'uuid';


function Card({product}) {
  const {cartQuantity, setCartQuantity, cartProducts, setCartProducts} = useContext(CartContext);
  const [messagePopUp, setMessagePopUp] = useState('')

  const handleAddToCart = () => {
    setMessagePopUp("Added")
    setTimeout(() => {
      setMessagePopUp('');
    },(2000))
    const addItem = {
      key: uuidv4(),
      item: product,
    }
    setCartProducts([...cartProducts, addItem])
    console.log(cartProducts);
    
    setCartQuantity(cartQuantity + 1)
  }

  return (
    <>
        <div className='flex flex-col h-[320px] justify-between p-4 border'>
          <Link to={`/product-detail/${product.id}`}>
            <div className='flex flex-col items-center gap-2 mb-2 '>
              <img className='w-[140px] h-[140px] object-contain' src={product.image} alt="product-img" />
              <div className='w-[200px] whitespace-nowrap text-ellipsis overflow-hidden  text-center text-sm'>{product.name}</div>
            </div>
            <div className='flex items-center justify-evenly text-sm space-x-5 my-3'>
              <div className="line-through text-stone-500 font-light">&#8377;{product.marketPrice}</div>
              <div>&#8377;{product.price}</div>
              <div className="bg-green-600 text-white text-center px-[6px] py-[1px] font-semibold rounded-md">&#8377;{product.marketPrice - product.price} OFF</div>
            </div>
            <div className="ml-2 text-green-600 font-medium">{messagePopUp}</div>
          </Link>
          <div className='flex'>
            <button onClick={() => handleAddToCart()} className='flex-1 bg-purple-500 text-white py-[5px] rounded-lg hover:opacity-85 active:opacity-65'>Add to Cart</button>
          </div>
        </div>
      
    </>
  )
}

export default Card