import React, { useEffect, useState } from 'react'
import { data } from '../assets/data'
import Card from '../components/Card';
import { useParams } from 'react-router-dom'

function FilterProduct() {
  const {category} = useParams();
  const [filterProducts, setFilterProducts] = useState(data);


  
  useEffect(() => {
    resetFilter();
  }, [category])

  const filterByPrice = (lowPrice, highPrice) => {

    const filter = data.filter((product) => ((product.price >= lowPrice) && (product.price <= highPrice)) && (product.category === category))
    setFilterProducts([...filter]);
  }
  
  const resetFilter = () => {
    const filter = data.filter((product) => product.category === category);
    setFilterProducts([...filter]);
  }
  
  
  return (
    <>
      <div className='py-28 flex items-start justify-center space-x-5'>
        <div className='w-60 p-5 border flex flex-col'>
          <div className='font-semibold mb-2'>Filter Products</div>
          <div className='font-semibold text-xs'>PRICE</div>
          <div className='space-y-5 flex flex-col p-4 text-stone-400'>
            <button onClick={() => filterByPrice(0, 499)} className='hover:text-black'>&#8377;0 - &#8377; 499</button>
            <button onClick={() => filterByPrice(500, 999)} className='hover:text-black'>&#8377;500 - &#8377; 999</button>
            <button onClick={() => filterByPrice(1000, 1499)} className='hover:text-black'>&#8377;1000 - &#8377; 1499</button>
            <button onClick={() => filterByPrice(1500, 1999)} className='hover:text-black'>&#8377;1500 - &#8377; 1999</button>
            <button onClick={() => filterByPrice(2000, 2499)} className='hover:text-black'>&#8377;2000 - &#8377; 2499</button>
            <button onClick={() => filterByPrice(2500, 2999)} className='hover:text-black'>&#8377;2500 - &#8377; 2999</button>
            <button onClick={() => filterByPrice(3000, 3500)} className='hover:text-black'>&#8377;3000 - &#8377; 3500</button>
          </div>
          <button onClick={resetFilter}  className='text-end text-sm text-blue-500 font-medium'>Reset</button>
        </div>
        <div className='flex flex-col items-center'>
          <div className='grid grid-cols-[240px_240px_240px_240px_240px]'>
            {filterProducts.map((product) => {
              return <Card key={product.id} product={product} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterProduct