import React from 'react'

import { FaUser } from 'react-icons/fa'
import { IoMdLock } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='flex flex-col h-screen w-full overflow-x-hidden items-center justify-center'>
      <form className="flex flex-col items-center justify-evenly bg-[#ffffff11] p-10  rounded-2xl">
        <div className='text-[40px] text-center font-bold w-[80%] gap-2 leading-[70px] text-secondary animate-shine'>
          Entrar
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-1'>
            <p>Email:</p>
            <div className='flex items-center gap-2 bg-[#ffffff33] rounded-xl px-3'>
              <FaUser size={25} />
              <input placeholder='Digite seu Email' type='email' className='bg-transparent outline-none p-2' />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <p>Senha:</p>
            <div className='flex items-center gap-2 bg-[#ffffff33] rounded-xl px-3'>
              <IoMdLock size={25} />
              <input placeholder='Digite sua Senha' type='password' className='bg-transparent outline-none p-2' />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3 w-full items-center my-10'>
          <Link to='/' className='bg-secondary text-center duration-300 hover:bg-transparent hover:text-secondary border-[2px] border-transparent hover:border-secondary w-full py-2 uppercase font-semibold rounded-full'>Entrar</Link>
          <p className='text-[#ffffff77]'>Esqueceu sua senha?</p>
        </div>
        <p className='text-secondary'>Matricular-se</p>
      </form>
    </div>
  )
}
