import React from 'react'
import Card from '../components/Card.jsx';
import { Link } from 'react-router-dom';
import { data } from '../assets/data.js';

function Home() {

  return (
    <div className='py-28 flex justify-center'>
      <div className='flex flex-col items-center w-[1300px] border-black border'>
        <Link to="">
          <img className='p-4 overflow-hidden rounded-3xl' src="images/adv-banner.webp" alt="adv-banner" />
        </Link>

        {/* <div className='p-10 h-[800px]'>
          <img className='w-full h-full overflow-hidden rounded-3xl' src="images/discount-banner.jpg" alt="discount-banner"/>
        </div> */}

        <div className='grid grid-cols-[240px_240px_240px_240px_240px]'>
          {data.map((product) => {
            return <Card key={product.id} product={product} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home