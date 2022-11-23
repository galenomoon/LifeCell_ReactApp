import React from 'react'

import { FaUser } from 'react-icons/fa'
import { IoMdLock } from 'react-icons/io'
import { BsCreditCardFill } from 'react-icons/bs'
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

export function SignUpForm({ plan, handleSignUp = () => { } }) {
  const [colors, setColors] = React.useState({ font: '' })
  const [user, setUser] = React.useState({ 
    email: '', 
    name: '',
    password: '', 
    confirm_password: '',
    plan: plan.id
  })

  React.useEffect(() => {
    if (plan.color === 'yellow') {
      setColors({ font: 'text-[#FFC700]' })
    }
    if (plan.color === 'green') {
      setColors({ font: 'text-[#34A853]' })
    }
    if (plan.color === 'blue') {
      setColors({ font: 'text-[#00C0FF]' })
    }
  }, [plan])

  return (
    <div className='flex flex-col items-center justify-evenly h-full p-10 gap-8'>
      <div className='text-[40px] text-center font-bold  text-secondary animate-shine'>
        Matrícula
      </div>
      <div className='flex justify-between w-full px-10 gap-10 h-full'>
        <form className="flex flex-col items-center justify-evenly h-full w-full">
          <div className='flex flex-col gap-4 w-full h-full'>
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
                <input required placeholder='Confirme sua Senha' type='password' className=' w-full bg-transparent outline-none p-2' />
              </div>
            </div>
          </div>
        </form>
        <div className="flex flex-col items-center justify-center h-full w-full rounded-2xl gap-4">
          <div className="flex flex-col items-center justify-center h-full w-full rounded-2xl p-5 leading-tight bg-[#303030]">
            <span className={`text-[26px] font-bold uppercase ${colors.font}`}>
              {plan.title}
            </span>
            <span className='font-bold text-[65px] relative'>
              {plan.price}
              <p className='text-white font-normal absolute -right-[40px] bottom-5 opacity-60 text-[15px]'>{plan.is_per_mouth && '/mês'}</p>
            </span>
            <span className='text-white opacity-60 text-[20px]'>
              {plan.subtitle}
            </span>
          </div>
          <div className='flex flex-col items-start justify-center w-full h-full gap-1'>
            <p className='opacity-90'>Insira dos dados do cartão:</p>
            <div className='bg-[#303030] w-full h-[70px] rounded-2xl flex p-4 gap-3 items-center cursor-pointer hover:opacity-90'>
              <BsCreditCardFill size={35} className='text-white ' />
              <p className='opacity-80 text-xl font-light'>XXXX-XXXX-XXXX</p>
            </div>
          </div>

        </div>
      </div>
      <button onClick={() => handleSignUp(user)} className='bg-secondary text-center duration-100 hover:bg-transparent hover:text-secondary border-[2px] border-transparent hover:border-secondary w-[50%] py-2 uppercase font-semibold rounded-full'>
        Confirmar
      </button>
    </div>
  )
}