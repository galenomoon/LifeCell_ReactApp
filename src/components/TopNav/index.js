import React from 'react'

//logo
import logo from '../../assets/logo_lifecell_horizontal.svg'

//styles
import { BsArrowUpShort } from 'react-icons/bs'

export default function TopNav() {
  const top_nav_ref = React.useRef()

  return (
    <div ref={top_nav_ref} className='flex items-center justify-between px-[64px] py-[22px] uppercase animate-slide_from_top_md'>
      <img src={logo} className='w-[200px]' />
      <div className='flex gap-[44px]'>
        <p className='cursor-pointer hover:text-secondary duration-75'>Início</p>
        <p className='cursor-pointer hover:text-secondary duration-75'>Feedback</p>
        <p className='cursor-pointer hover:text-secondary duration-75'>Sobre o Curso</p>
        <p className='cursor-pointer hover:text-secondary duration-75'>Contato</p>
      </div>
      <div className='flex gap-[44px] font-bold items-center'>
        <p className='cursor-pointer hover:text-secondary duration-75'>Entrar</p>
        <button className='uppercase hover:bg-[#fff] px-[22px] py-[8px] rounded-full bg-secondary hover:text-secondary duration-75'>Matricule-se</button>
      </div>
      <button title='Voltar ao topo' onClick={() => top_nav_ref?.current?.scrollIntoView({ behavior: 'smooth' })} className='bg-secondary hover:bg-white hover:text-secondary right-8 bottom-10 duration-100 fixed z-[100] rounded-full'>
        <BsArrowUpShort size={50} />
      </button>
    </div>
  )
}
