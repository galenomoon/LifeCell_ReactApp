import React from 'react'

//logo
import logo from '../../assets/logo_lifecell_horizontal.svg'

//styles
import { BsArrowUpShort, BsWhatsapp, BsInstagram, BsYoutube } from 'react-icons/bs'

//components
import Contact from '../Contact'

export default function TopNav({ refs, scrollToSection, openModal }) {
  const top_nav_ref = React.useRef()

  return (
    <div ref={top_nav_ref} className='flex w-full fixed bg-gradient-to-b from-black to-transparent z-[1000] items-center justify-between px-[64px] py-[22px] uppercase'>
      <img src={logo} className='w-[200px] animate-slide_from_top_md' />
      <div className='flex gap-[44px] animate-slide_from_top_md'>
        <p onClick={() => scrollToSection(refs.second_section)} className='cursor-pointer hover:text-secondary duration-75'>Feedback</p>
        <p onClick={() => scrollToSection(refs.third_section)} className='cursor-pointer hover:text-secondary duration-75'>Sobre o Curso</p>
        <p onClick={() => scrollToSection(refs.fourty_section)} className='cursor-pointer hover:text-secondary duration-75'>Planos</p>
      </div>
      <div className='flex gap-[44px] font-bold items-center animate-slide_from_top_md'>
        <div onClick={() => openModal()} className='cursor-pointer hover:text-secondary duration-75'>Entrar</div>
        <button onClick={() => scrollToSection(refs.fourty_section)} className='uppercase hover:bg-[#fff] px-[22px] py-[8px] rounded-full bg-secondary hover:text-secondary duration-75'>Matricule-se</button>
      </div>
      <div className='gap-4 flex flex-col fixed top-[40vh] left-0 animate-slide_from_left_md z-[1000]'>
        <Contact link='https://wa.me/+5513988678639' icon={<BsWhatsapp size={30} />} />
        <Contact link='https://www.youtube.com/@lifecell-centrotecnico1599' icon={<BsYoutube size={30} />} />
        <Contact link='https://instagram.com/alex.senag?r=nametag' icon={<BsInstagram size={30} />} />
      </div>

      <button title='Voltar ao topo' onClick={() => top_nav_ref?.current?.scrollIntoView({ behavior: 'smooth' })} className='bg-secondary hover:bg-white hover:text-secondary right-8 bottom-10 duration-100 fixed z-[100] rounded-full'>
        <BsArrowUpShort size={50} />
      </button>
    </div>
  )
}
