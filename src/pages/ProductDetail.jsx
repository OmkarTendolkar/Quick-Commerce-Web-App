import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { data } from '../assets/data.js';
import Card from '../components/Card';


function ProductDetail() {
  const {id} = useParams();
  const [product, setProduct] = useState({});
  const [relatedItems, setRelatedItems] = useState(data)

  useEffect(() => {
    const filterItem =  data.filter((product) => (product.id === id));
    setProduct(filterItem[0]);
    const related = data.filter((p) => ( (p.category === product.category) && (p.id !== product.id) ));
    setRelatedItems([...related]);
  },[id, relatedItems])
  
  return (
  <div className='py-24 flex justify-center'>
    <div>
      <div className='flex max-w-[1200px] space-x-8'>

        <div className='w-[600px] flex flex-col justify-center p-6'>
          <div className='mb-10 px-[140px] py-[60px] border rounded-lg'>
            <img className='h-60 object-contain' src={product.image} alt="sd" />
          </div>

          <div>
            <div className='mb-3 font-semibold'>About Product</div>
            <ul className='space-y-2 text-sm text-stone-500'>
              <li>
                Description : {product.description}
              </li>
              <li>
                Country of Origin : {product.origin}
              </li>
              <li>
                Shelf Life : {product.shelfLife}
              </li>
              <li>
                Manufacturer Name : dsf
              </li>
              <li>
                Manufacturer Address : sdfds
              </li>
            </ul>
          </div>
        </div>

        <div className='flex-1 py-6'>
          <div className='flex items-center space-x-2 text-xs mb-2 text-stone-500'>
            <Link to={'/'}>Home</Link>
            <span>&gt;</span>
            <Link to={''}>{product.category}</Link>
          </div>
          <div className='mb-1 text-2xl font-semibold'>{product.name}</div>
          <div className='mb-5 text-sm  text-stone-500'>{product.variant}</div>
          <div className='mb-2 space-x-5 text-xl font-bold'>
            <span>&#8377;{product.price}</span>
            <span className='line-through text-lg font-normal'>&#8377;{product.marketPrice}</span>
          </div>
          <button className='my-8 bg-rose-500 text-white py-2 px-10 rounded font-medium'>Add</button>

          <hr className='my-10 border rounded'/>

          <div>
            <div className='mb-5 font-semibold'>How it Works</div>
            <div className='grid grid-cols-[80px_1fr] gap-5'>
              <div className='border rounded-md'>
                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.1/images/pdp/place-order.svg" alt="" />
              </div>
              <div>
                <div>Open the app</div>
                <div className='text-stone-500 text-sm'>
                  Choose from over 7000 products across groceries, fresh fruits & veggies, meat, pet care, beauty items & more
                </div>
              </div>
              <div className='border rounded-md'>
                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.1/images/pdp/do-not-blink.svg" alt="" />
              </div>
              <div>
                <div>Place an order</div>
                <div className='text-stone-500 text-sm'>
                  Add your favourite items to the cart & avail the best offers
                </div>
              </div>
              <div className='border rounded-md'>
                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.1/images/pdp/enjoy.svg" alt="" />
              </div>
              <div>
                <div>Get free delivery</div>
                <div className='text-stone-500 text-sm'>
                  Experience lighting-fast speed & get all your items delivered in 10 minutes
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10 mb-5 text-xl font-semibold'>Related Products</div>
      <div className='grid grid-cols-[240px_240px_240px_240px_240px]'>
        {relatedItems.map((product) => {
          return <Card key={product.id} product={product}/>
        })}
      </div>
    </div>
  </div>
  )
}

export default ProductDetail