import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className='h-[60px] bg-slate-50  border flex items-center justify-between  mb-1 fixed top-0 left-0 right-0'>
        <div className='flex ml-10 mr-5'>
          <Link to={'/'}>
            <img className='mt-2  mr-5' src="" alt="" />
          </Link>

          <div className='leading-6'>
            <div className='fo font-bold'>Delivery in <span className='text-purple-700'>10 Mins</span></div>
            <div className='text- text-xs'>Mumbai, Maharashtra</div>
          </div>
        </div>
          
        <div className='flex w-[800px]'>
          <input className='flex-1 h-10 border p-4 rounded shadow-inner' type="search" name="" id="" placeholder='What you need ?'/>
          <button className='h-10 bg-purple-600 text-white px-4 text-sm font-medium rounded' type="button">SEARCH</button>
        </div>
        
        <div className='ml-5 mr-10 flex items-center space-x-10'>
          <img className='h-8' src="https://cdn.iconscout.com/icon/free/png-256/free-user-533-130265.png?f=webp&w=128" alt="" />
          <Link to={'/cart'}>
            <img className='h-8' src="https://cdn.iconscout.com/icon/free/png-256/free-cart-1772442-1508338.png?f=webp&w=128" alt="" />
          </Link>
        </div>


      </div>
    </header>
  )
}

export default Header