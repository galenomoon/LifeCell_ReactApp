import React from 'react'
import LoginForm from '../../components/LoginForm'
import logo from '../../assets/logo_lifecell_horizontal.svg'

export default function Login() {
  return (
    <div className='flex h-screen w-full overflow-x-hidden bg-fixing_phone bg-cover items-start justify-start'>
      <div className='flex w-[40%] items-center backdrop-blur-lg justify-center h-full relative animate-slide_from_left_md'>
        <img src={logo} className='w-[300px] absolute top-10'/>
        <div className='flex flex-col items-center justify-center px-10 mt-10'>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
