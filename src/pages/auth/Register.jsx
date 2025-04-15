import CommonForm from '@/components/common/Form'
import {  registerFromControls } from '@/config/AllConfig'
import { registerUser } from '@/store/auth-slice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const initalstate={
  userName:'',
  email:'',
  password:''
}
const AuthRegister = () => {
  const [formData,setFormData]=useState(initalstate)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const onSubmit=(e)=>{
    e.preventDefault()
    dispatch(registerUser(formData)).then((data)=>{
      // console.log('data',data)
      if(data.payload?.success){
        toast.success(data.payload.message)
        navigate('/auth/login')
      } else {
        console.log('error data',data.payload)
        toast.error(data.payload );
      }
    } 
  )
  }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Create new accound</h1>
        <p>Already have an account<Link className='font-medium text-primary ml-2 hover:underline ' to='/auth/login'>Login</Link></p>
      </div>
      <CommonForm fromCotrols={registerFromControls} buttonText={'Sign up'} formData={formData} setFormData={setFormData} onSubmit={onSubmit}/>
    </div>
  )
}

export default AuthRegister
