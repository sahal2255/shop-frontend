import React from 'react'
import { SheetContent, SheetHeader,SheetTitle } from '../ui/sheet'
import { Button } from '../ui/button'
import CartContent from './CartContent'

const CartWrapper = ({cartItems}) => {
  // console.log('cart item in the cart wrapper',cartItems.populateCartItems)
  return (
    <SheetContent className='sm:max-w-md'>
        <SheetHeader>
            <SheetTitle className='text-center font-extrabold'>Your Cart</SheetTitle>
        </SheetHeader>
        <div className='mt-2 space-y-2'>
          {
            cartItems  && cartItems.length >0 ?
            cartItems.map(item=><CartContent key={item._id} cartItem={item}/>):null
          }
        </div>
        <div className='mt-8 space-y-4'>
            <div className='flex justify-between'>
                <span className='font-bold'> Total</span>
                <span className='font-bold'> $1000</span>

            </div>
        </div>
        <Button className='w-full mt-6'>Check Out</Button>
    </SheetContent>
  )
}

export default CartWrapper
