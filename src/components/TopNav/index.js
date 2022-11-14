import React from 'react'

//logo
import logo from '../../assets/logo_lifecell_horizontal.svg'

export default function TopNav() {
  return (
    <div className='flex items-center justify-between px-[64px] py-[22px] uppercase animate-slide_from_top_md'>
      <img src={logo} className='w-[200px]' />
      <div className='flex gap-[44px]'>
        <p className='cursor-pointer hover:text-secondary duration-75'>Início</p>
        <p className='cursor-pointer hover:text-secondary duration-75'>Sobre o Curso</p>
        <p className='cursor-pointer hover:text-secondary duration-75'>Contato</p>
      </div>
      <div className='flex gap-[44px] font-bold items-center'>
        <p className='cursor-pointer hover:text-secondary duration-75'>Entrar</p>
        <button className='uppercase hover:bg-[#fff] px-[22px] py-[8px] rounded-full bg-secondary hover:text-secondary duration-75'>Matricule-se</button>
      </div>
    </div>
  )
}
