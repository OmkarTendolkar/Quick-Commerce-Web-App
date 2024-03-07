import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <header>
      <div className='bg-slate-50  border-b-[1px]   mb-1 fixed top-0 left-0 right-0'>
        <div className='h-[60px] flex items-center justify-between'>
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
            <input className='flex-1 h-10 border p-4 rounded shadow-inner' type="search" value={query} placeholder='What you need ?' onChange={handleInputChange}/>
            <button className='h-10 bg-purple-600 text-white px-4 text-sm font-medium flex items-center rounded' type="button" onClick={() => (query && navigate(`search/${query}`))}>SEARCH</button>
          </div>
          
          <div className='ml-5 mr-10 flex items-center space-x-10'>
            <img className='h-8 ' src="https://cdn.iconscout.com/icon/free/png-256/free-user-533-130265.png?f=webp&w=128" alt="" />
            <Link to={'/cart'}>
              <img className='h-8 ' src="https://cdn.iconscout.com/icon/free/png-256/free-cart-1772442-1508338.png?f=webp&w=128" alt="" />
            </Link>
          </div>
          
        </div>
        <div className='h-8 border flex items-center justify-evenly px-5 text-xs '>
            <Link to={'/category/grocery'}>Grocery</Link>
            <Link to={'/category/dairy-and-beverages'}>Dairy & Beverages</Link>
            <Link to={'/category/home-and-kitchen'}>Home & Kitchen</Link>
            <Link to={'/category/personal-care'}>Personal Care</Link>
            <Link to={'/category/packaged-food'}>Packaged Food</Link>
            <Link to={'/category/electronic-appliances'}>Electronic Appliances</Link>
            <Link to={'/category/home-utility-and-organiser'}>Home Utility & Organisers</Link>
        </div>
      </div>
    </header>
  )
}

export default Header