import { Link} from "react-router-dom"


function Card({product}) {
  return (
    <>
        <div className='flex flex-col justify-between p-4 border'>
          <Link to={`/product-detail/${product.id}`}>
            <div className='flex flex-col items-center gap-2 mb-2 '>
              <img className='w-[140px] h-[140px] object-contain' src={product.image} alt="product-img" />
              <div className='text-center text-sm'>{product.name}</div>
            </div>
            <div className='flex text-[13px] space-x-4 my-5'>
              <div>MRP : <span>&#8377;30</span></div>
              <div>Dmart : <span>&#8377;20</span></div>
              <div>&#8377;10 OFF</div>
            </div>
          </Link>
          <div className='flex'>
            <button className='flex-1 bg-purple-500 text-white py-[5px] rounded-lg '>Add to Cart</button>
          </div>
        </div>
      
    </>
  )
}

export default Card