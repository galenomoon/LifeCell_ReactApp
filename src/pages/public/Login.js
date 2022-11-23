import React from 'react'
import { LoginForm } from '../../components/Form'
import logo from '../../assets/logo_lifecell_horizontal.svg'

export default function Login() {
  return (
    <div className='flex h-screen w-full overflow-x-hidden bg-fixing_phone bg-cover items-start justify-start'>
      <div className='flex w-[600px] items-center backdrop-blur-lg justify-center h-full relative animate-slide_from_left_md'>
        <img src={logo} className='w-[50%] absolute top-10'/>
        <div className='flex flex-col items-center justify-center px-10 mt-10 w-[90%]'>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
