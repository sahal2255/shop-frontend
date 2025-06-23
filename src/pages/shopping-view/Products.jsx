import React from 'react'
import ProductFilter from './Filter'

const Products = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 '>
      <ProductFilter />
      <div className=' bg-background w-full rounded-lg shadow-sm'>
        <div className=' p-4 border-b flex items-center justify-between'>
          <h2 className='text-lg font-extrabold'>All Products</h2>
          <div className=' felx items-center gap-2'>
            <span className='text-muted-foreground'>10 Products</span>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Products
