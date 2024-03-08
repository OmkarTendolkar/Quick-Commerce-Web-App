import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { v4 as uuidv4 } from 'uuid';


function Card({product}) {
  const {cartQuantity, setCartQuantity, cartProducts, setCartProducts} = useContext(CartContext);

  const handleAddToCart = () => {
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
        <div className='flex flex-col justify-between p-4 border'>
          <Link to={`/product-detail/${product.id}`}>
            <div className='flex flex-col items-center gap-2 mb-2 '>
              <img className='w-[140px] h-[140px] object-contain' src={product.image} alt="product-img" />
              <div className='text-center text-sm'>{product.name}</div>
            </div>
            <div className='flex text-[13px] space-x-4 my-5'>
              <div>MRP : <span>&#8377;{product.price}</span></div>
              <div>Dmart : <span>&#8377;{product.marketPrice}</span></div>
              <div>&#8377;10 OFF</div>
            </div>
          </Link>
          <div className='flex'>
            <button onClick={() => handleAddToCart()} className='flex-1 bg-purple-500 text-white py-[5px] rounded-lg '>Add to Cart</button>
          </div>
        </div>
      
    </>
  )
}

export default Card