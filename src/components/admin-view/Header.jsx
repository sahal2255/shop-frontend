import React from 'react'
import { Button } from '../ui/button'
import { AlignJustify,LogOut } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { logOutUser } from '@/store/auth-slice'
import { data } from 'react-router-dom'
import { toast } from 'sonner'

const Header = ({setOpen}) => {
  const dispatch=useDispatch()

  const handleLogout=async()=>{
   const data=await dispatch(logOutUser())
    console.log('datapayload',data.payload)
    if(data.payload?.success){
      // console.log('datapayload',data)
      toast.success(data.payload?.message)
    }else{
      toast.error(data.payload)
    }
  }
  return (
    <div>
      <header className='flex items-center justify-between px-4 py-3 bg-background'>
        <Button className='md:hidden' onClick={()=>setOpen(true)}>
          <AlignJustify />
          <span className='sr-only'>ToggleMenu</span>
        </Button>
        <div className='flex flex-1 justify-end'>
          <Button className='inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow'
            onClick={handleLogout}
          >
          <LogOut />
          Logout
          </Button>
        </div>

      </header>
    </div>
  )
}

export default Header
