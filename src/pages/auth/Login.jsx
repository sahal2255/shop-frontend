import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CommonForm from '@/components/common/Form'
import { loginFromControls } from '@/config/AllConfig'
import { useDispatch } from 'react-redux'
import { loginUser } from '@/store/auth-slice'
import { toast } from 'sonner'

const initalstate={
  email:'',
  password:''
}
const AuthLogin = () => {
  const [formData,setFormData]=useState(initalstate)
  const dispatch=useDispatch()
  const onSubmit=(event)=>{
    event.preventDefault()
    dispatch(loginUser(formData)).then((data)=>{
      console.log('login data',data)
      if(data.payload?.success){
          toast.success(data.payload?.message)
      }else{
        toast.error(data.payload)
      }
    })
  }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Login</h1>
        <p>Don't have No account<Link className='font-medium text-primary ml-2 hover:underline ' to='/auth/register'>Create account</Link></p>
      </div>
      <CommonForm fromCotrols={loginFromControls} buttonText={'Login'} formData={formData} setFormData={setFormData} onSubmit={onSubmit}/>
    </div>
  )
}

export default AuthLogin
