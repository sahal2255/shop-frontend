import React from 'react'
import { Button } from '../ui/button'
import { AlignJustify,LogOut } from 'lucide-react'

const Header = ({setOpen}) => {
  return (
    <div>
      <header className='flex items-center justify-between px-4 py-3 bg-background'>
        <Button className='md:hidden' onClick={()=>setOpen(true)}>
          <AlignJustify />
          <span className='sr-only'>ToggleMenu</span>
        </Button>
        <div className='flex flex-1 justify-end'>
          <Button className='inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow'>
          <LogOut />
          Logout
          </Button>
        </div>

      </header>
    </div>
  )
}

export default Header
