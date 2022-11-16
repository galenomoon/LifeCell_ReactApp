import React from 'react'

import { FaUser } from 'react-icons/fa'
import { IoMdLock } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function LoginForm() {
  return (
    <form className="flex flex-col items-center justify-evenly h-full p-10">
      <div className='text-[40px] text-center font-bold w-[80%] gap-2 leading-[70px] text-secondary animate-shine'>
        Entrar
      </div>
      <div className='flex flex-col gap-5 w-full'>
        <div className='flex flex-col gap-1 w-full'>
          <p>Email:</p>
          <div className='flex items-center w-full gap-2 bg-[#ffffff33] rounded-xl px-3'>
            <FaUser size={25} />
            <input placeholder='Digite seu Email' type='email' className=' w-full bg-transparent outline-none p-2' />
          </div>
        </div>
        <div className='flex flex-col gap-1 w-full'>
          <p>Senha:</p>
          <div className='flex items-center w-full gap-2 bg-[#ffffff33] rounded-xl px-3'>
            <IoMdLock size={25} />
            <input placeholder='Digite sua Senha' type='password' className=' w-full bg-transparent outline-none p-2' />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 w-full items-center my-10'>
        <Link to='/' className='bg-secondary text-center duration-300 hover:bg-transparent hover:text-secondary border-[2px] border-transparent hover:border-secondary w-full py-2 uppercase font-semibold rounded-full'>Entrar</Link>
        <p className='text-[#ffffff77] cursor-pointer'>Esqueceu sua senha?</p>
      </div>
      <p className='text-[#ffffff77]'>Não tem uma conta? <Link to='/' className='text-secondary'>Matricular-se</Link></p>
    </form>
  )
}
