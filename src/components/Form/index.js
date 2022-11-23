import React from 'react'

import { FaUser } from 'react-icons/fa'
import { IoMdLock } from 'react-icons/io'
import { Link } from 'react-router-dom'

export function LoginForm({ login = () => { } }) {
  return (
    <form className="flex flex-col items-center justify-evenly h-full p-10 w-full">
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
        <button onClick={() => login()} className='bg-secondary text-center duration-300 hover:bg-transparent hover:text-secondary border-[2px] border-transparent hover:border-secondary w-full py-2 uppercase font-semibold rounded-full'>
          Entrar
        </button>
        <p className='text-[#ffffff77] cursor-pointer'>Esqueceu sua senha?</p>
      </div>
      <p className='text-[#ffffff77]'>Não tem uma conta? <Link to='/' className='text-secondary'>Matricular-se</Link></p>
    </form>
  )
}

export function SignUpForm({ login = () => { } }) {
  return (
    <div className='flex flex-col items-center justify-evenly h-full p-10 gap-8'>
      <div className='text-[40px] text-center font-bold  text-secondary animate-shine'>
        Matrícula
      </div>
      <div className='flex justify-between w-full px-10 gap-10'>
        <form className="flex flex-col items-center justify-evenly h-full w-full">
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col gap-1 w-full'>
              <p>Email:</p>
              <div className='flex items-center w-full gap-2 bg-[#ffffff33] rounded-xl px-3'>
                <FaUser size={25} />
                <input required placeholder='Digite seu Email' type='email' className=' w-full bg-transparent outline-none p-2' />
              </div>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <p>Nome:</p>
              <div className='flex items-center w-full gap-2 bg-[#ffffff33] rounded-xl px-3'>
                <FaUser size={25} />
                <input required placeholder='Digite seu Nome' type='text' className=' w-full bg-transparent outline-none p-2' />
              </div>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <p>Senha:</p>
              <div className='flex items-center w-full gap-2 bg-[#ffffff33] rounded-xl px-3'>
                <IoMdLock size={25} />
                <input required placeholder='Digite sua Senha' type='password' className=' w-full bg-transparent outline-none p-2' />
              </div>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <p>Confirmar Senha:</p>
              <div className='flex items-center w-full gap-2 bg-[#ffffff33] rounded-xl px-3'>
                <IoMdLock size={25} />
                <input required placeholder='Digite sua Senha' type='password' className=' w-full bg-transparent outline-none p-2' />
              </div>
            </div>
          </div>
        </form>
        <form className="flex flex-col items-center justify-evenly h-full w-full">
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col gap-1 w-full'>
              <p>Email:</p>
              <div className='flex items-center w-full gap-2 bg-[#ffffff33] rounded-xl px-3'>
                <FaUser size={25} />
                <input required placeholder='Digite seu Email' type='email' className=' w-full bg-transparent outline-none p-2' />
              </div>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <p>Nome:</p>
              <div className='flex items-center w-full gap-2 bg-[#ffffff33] rounded-xl px-3'>
                <FaUser size={25} />
                <input required placeholder='Digite seu Nome' type='text' className=' w-full bg-transparent outline-none p-2' />
              </div>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <p>Senha:</p>
              <div className='flex items-center w-full gap-2 bg-[#ffffff33] rounded-xl px-3'>
                <IoMdLock size={25} />
                <input required placeholder='Digite sua Senha' type='password' className=' w-full bg-transparent outline-none p-2' />
              </div>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <p>Confirmar Senha:</p>
              <div className='flex items-center w-full gap-2 bg-[#ffffff33] rounded-xl px-3'>
                <IoMdLock size={25} />
                <input required placeholder='Digite sua Senha' type='password' className=' w-full bg-transparent outline-none p-2' />
              </div>
            </div>
          </div>
        </form>
      </div>
      <button onClick={() => {}} className='bg-secondary text-center duration-300 hover:bg-transparent hover:text-secondary border-[2px] border-transparent hover:border-secondary w-[50%] py-2 uppercase font-semibold rounded-full'>
        Confirmar
      </button>
    </div>
  )
}