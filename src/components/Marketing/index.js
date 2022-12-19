import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs';
import Carousel from '../Carousel';
import YoutubeEmbed from '../YoutubeEmbed';

export default function Marketing({ref, whatsappMessage}) {
  return (
    <div className='flex flex-col w-full items-center justify-center gap-[64px]'>
      <div className='flex flex-col items-center justify-center gap-[25px]'>
        <div className='md:text-[60px] sm:text-[40px] text-center font-bold w-[80%] gap-2 leading-none'>
          Pra quem <span className='text-secondary animate-shine'>só acredita vendo </span>
        </div>
        <Carousel />
      </div>
      <div ref={ref} className=' flex flex-col items-center justify-center gap-6 '>
        <a target='_blank' rel='noreferrer ' href={'https://www.google.com/search?client=firefox-b-d&q=lifecell%20sao%20vicente&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:4&tbm=lcl&sxsrf=ALiCzsbDiH2ayhyncw6_sQ98tE2O1bZ1QA:1671416510239&rflfq=1&num=10&rldimm=5613851473092842308&lqi=ChRsaWZlY2VsbCBzYW8gdmljZW50ZSIDiAEBSMeZy7SOrYCACFoeEAAYABgBGAIiFGxpZmVjZWxsIHNhbyB2aWNlbnRlkgEXY29tcHV0ZXJfcmVwYWlyX3NlcnZpY2WqARAQASoMIghsaWZlY2VsbCgM&ved=2ahUKEwjn8_Taz4T8AhUqjZUCHRxCDcAQvS56BAgKEAE&sa=X&rlst=f#rlfi=hd:;si:5613851473092842308,l,ChRsaWZlY2VsbCBzYW8gdmljZW50ZSIDiAEBSMeZy7SOrYCACFoeEAAYABgBGAIiFGxpZmVjZWxsIHNhbyB2aWNlbnRlkgEXY29tcHV0ZXJfcmVwYWlyX3NlcnZpY2WqARAQASoMIghsaWZlY2VsbCgM;mv:[[-23.9656831,-46.3882139],[-23.969173899999998,-46.390027499999995]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:4'}
          className='sm:text-lg md:text-xl flex flex-row gap-2 px-4 py-2 rounded-2xl bg-secondary hover:animate-shine_xl hover:scale-105 duration-500'>
          <FaMapMarkerAlt size={25} />
          R. Jacob Emerich, 784 | Sala 11 - São Vicente, Centro - SP</a>
        <YoutubeEmbed embedId='mrq_DKNt_jo' />
      </div>
      <a href={whatsappMessage()} target='_blank' rel='noreferrer ' className='flex gap-3 self-center items-center justify-center text-4xl uppercase hover:bg-[#00000066] border-transparent hover:border-secondary border-[2px] md:px-10 sm:px-0 sm:w-[80%] py-5 font-medium rounded-full bg-secondary hover:text-secondary duration-200'>
        <BsWhatsapp size={30} />
        Matricule-se
      </a>
    </div>
  )
}
