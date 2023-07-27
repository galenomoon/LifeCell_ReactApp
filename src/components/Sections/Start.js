import React from 'react'

//assets
import google from '../../assets/googletext.svg'

//components
import IPhone from '../IPhone'

export default function Start({ section_ref }) {
  return (
    <div className='w-full md:text-start sm:text-center flex px-[6vw] z-[200] mt-[128px]' ref={section_ref}>
      <div className='w-full h-full flex flex-col mt-9 gap-[100px] animate-slide_from_left_md'>
        <div>
          <p className='font-semibold text-secondary text-xl animate-shine' >CURSO ONLINE DE MANUTENÇÃO DE SMARTPHONES</p>
          <div className='md:text-[4.4rem] sm:text-[3rem] font-bold md:leading-[80px] sm:leading-[50px]'>
            <p>
              Aprenda a ver
            </p>
            <div className='flex gap-3'>
              <p>os</p>
              <span className='text-secondary animate-shine'> smartphones</span>
            </div>
            com outros olhos
          </div>
        </div>
        <div className='md:text-[4.4rem] sm:text-[3rem] font-bold md:leading-[80px] sm:leading-[50px]'>
          + de <span className='text-secondary animate-shine'>200</span> novas<br /> formações de<br />
          profissionais
        </div>
        <div className="flex flex-col">
          <div className='md:text-[4.4rem] sm:text-[3rem] font-bold md:leading-[80px] sm:leading-[50px]'>
            Temos a <span className='text-secondary animate-shine'>melhor</span>
            <p className='whitespace-nowrap flex relative'>
              avaliações no
              <img src={google} className='w-[250px] md:block sm:hidden mx-[20px] mt-[10px]' />
            </p>
          </div>
          <img src={google} className='w-[250px] sm:block md:hidden self-center mt-[10px]' />
        </div>
      </div>
      <div className='h-[840px] w-fit md:block sm:hidden '>
        <IPhone />
      </div>
    </div>
  )
}
