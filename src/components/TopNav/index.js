import React from 'react'

//logo
import logo from '../../assets/logo_lifecell_horizontal.svg'

//styles
import { BsArrowUpShort, BsWhatsapp, BsInstagram, BsYoutube } from 'react-icons/bs'

//components
import Contact from '../Contact'

export default function TopNav({ refs, scrollToSection }) {
  const top_nav_ref = React.useRef()

  return (
    <div ref={top_nav_ref} className='flex items-center justify-between px-[64px] py-[22px] uppercase'>
      <img src={logo} className='w-[200px] animate-slide_from_top_md' />
      <div className='flex gap-[44px] animate-slide_from_top_md'>
        <p onClick={() => scrollToSection(refs.first_section)} className='cursor-pointer hover:text-secondary duration-75'>Início</p>
        <p onClick={() => scrollToSection(refs.second_section)} className='cursor-pointer hover:text-secondary duration-75'>Feedback</p>
        <p onClick={() => scrollToSection(refs.third_section)} className='cursor-pointer hover:text-secondary duration-75'>Sobre o Curso</p>
      </div>
      <div className='flex gap-[44px] font-bold items-center animate-slide_from_top_md'>
        <p className='cursor-pointer hover:text-secondary duration-75'>Entrar</p>
        <button onClick={() => scrollToSection(refs.fourty_section)} className='uppercase hover:bg-[#fff] px-[22px] py-[8px] rounded-full bg-secondary hover:text-secondary duration-75'>Matricule-se</button>
      </div>
      <div className='gap-4 flex flex-col fixed top-[200px] left-0 animate-slide_from_left_md z-[1000]'>
        <Contact link='' icon={<BsWhatsapp size={30} />} />
        <Contact link='https://www.youtube.com/@lifecell-centrotecnico1599' icon={<BsYoutube size={30} />} />
        <Contact link='' icon={<BsInstagram size={30} />} />
      </div>

      <button title='Voltar ao topo' onClick={() => top_nav_ref?.current?.scrollIntoView({ behavior: 'smooth' })} className='bg-secondary hover:bg-white hover:text-secondary right-8 bottom-10 duration-100 fixed z-[100] rounded-full'>
        <BsArrowUpShort size={50} />
      </button>
    </div>
  )
}
