import React from 'react'
import ProductFilter from './Filter'

const Products = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 '>
      <ProductFilter />
    </div>
  )
}

export default Products
