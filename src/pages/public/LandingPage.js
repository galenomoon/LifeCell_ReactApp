import React from 'react'

//assets
import google from '../../assets/googletext.svg'

//components
import IPhone from '../../components/IPhone'
import TopNav from '../../components/TopNav'

export default function LandingPage() {
  return (
    <div className='flex flex-col h-full w-full overflow-x-hidden'>
      <TopNav />
      <div className='w-full flex h-screen p-[64px]'>
        <div className='w-full h-full flex flex-col mt-9 gap-[100px] animate-slide_from_left_md'>
          <div>
            <p className='font-semibold text-secondary text-xl'>CURSO ONLINE DE MANUTENÇÃO DE SMARTPHONES</p>
            <div className='text-[70px] font-bold leading-[80px]'>
              <p>
                Aprenda a ver
              </p>
              <div className='flex gap-3'>
                <p>os</p>
                <span className='text-secondary'> smartphones</span>
              </div>
              com outros olhos
            </div>
          </div>
          <div className='text-[70px] font-bold leading-[80px]'>
            + de <span className='text-secondary'>200</span> novas formações de
            profissionais
          </div>
          <div className='text-[70px] font-bold leading-[80px]'>
            Temos a <span className='text-secondary'>melhor</span>
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
      <div className='w-full flex flex-col h-screen'>

      </div>
    </div>
  )
}
