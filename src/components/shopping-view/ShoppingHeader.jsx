import { House,AlignJustify } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { SheetTrigger,Sheet } from '../ui/sheet'
import { Button } from '../ui/button'

const ShoppingHeader = () => {
  return (
    <header className='sticky top-0 w-full border-b bg-background'>
      <div className='flex h-16 items-center justify-between px-4 md:px-6'>
        <Link to='/shop/home' className='felx items-center gap-2'>
        <House className='h-6 w-6' />
        <span className='font-bold '>ECommerce</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon' className='lg:hidden'>
              <span>Toggle Header Menu </span>
            </Button>
          </SheetTrigger>
        </Sheet>

      </div>
    </header>
  )
}

export default ShoppingHeader
