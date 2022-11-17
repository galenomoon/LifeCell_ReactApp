import React from 'react'

//assets
import google from '../../assets/googletext.svg'

//components
import IPhone from '../IPhone'

export default function Start({ section_ref }) {
  return (
    <div className='w-full flex px-[6vw] z-[200] mt-[128px]' ref={section_ref}>
      <div className='w-full h-full flex flex-col mt-9 gap-[100px] animate-slide_from_left_md'>
        <div>
          <p className='font-semibold text-secondary text-xl animate-shine' >CURSO ONLINE DE MANUTENÇÃO DE SMARTPHONES</p>
          <div className='text-[70px] font-bold leading-[80px]'>
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
        <div className='text-[70px] font-bold leading-[80px]'>
          + de <span className='text-secondary animate-shine'>200</span> novas<br /> formações de<br />
          profissionais
        </div>
        <div className='text-[70px] font-bold leading-[80px]'>
          Temos a <span className='text-secondary animate-shine'>melhor</span>
          <p className='whitespace-nowrap flex relative'>
            avaliações no
            <img src={google} className='w-[250px] mx-[20px] mt-[10px]' />
          </p>
        </div>
      </div>
        <div className='h-[840px] w-fit'>
          <IPhone />
        </div>
    </div>
  )
}
