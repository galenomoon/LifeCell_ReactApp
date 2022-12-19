import React from 'react'

//styles
import { ImCheckboxChecked } from 'react-icons/im'

export default function Checklist({ section_ref }) {

  const checklist_left = [
    'CURSO DO BÁSICO AO AVANÇADO',
    'CERTIFICADO DE CONCLUSÃO',
    'INDICAÇÃO DE FORNECEDORES',
    'INDICAÇÃO DE EQUIPAMENTOS',
    'SAMSUNG, MOTOROLA E APPLE',
    'SOLDAS',
  ]
  const checklist_right = [
    'ANÁLISE E DIAGNÓSTICOS DE DEFEITOS',
    'INTRODUÇÃO À REPARO DE SOFTWARE',
    'ATENDIMENTO AO CLIENTE',
    'DICAS DE QUANTO COBRAR',
    'DESOXIDAÇÃO DE PLACA',
    'SUBSTITUIÇÃO DE TOUCH E LCD'
  ]
  return (
    <div className='w-full flex flex-col items-center gap-[60px] z-[200]' ref={section_ref}>
      <div className='md:text-[60px] sm:text-[40px] text-center font-bold w-[80%] gap-2 md:leading-[70px] sm:leading-[50px]'>
        No nosso <span className='text-secondary animate-shine'>curso de manutenção em smartphones</span> você <span className='text-secondary animate-shine'>conta com</span>:
      </div>
      <div className='flex md:flex-row sm:flex-col items-center justify-around sm:gap-6 md:gap-[100px] sm:px-[30px] md:px-[100px] w-full sm:py-2 md:py-10'>
        <div className='flex flex-col gap-6 w-full'>
          {checklist_left.map((item, index) =>
            <div className='flex gap-2 md:justify-start items-baseline  sm:text-lg md:text-2xl font-bold w-full' key={index}>
              <ImCheckboxChecked size={20} className='text-secondary animate-shine' />
              <p>{item}</p>
            </div>
          )}
        </div>
        <div className='flex flex-col gap-6 w-full'>
          {checklist_right.map((item, index) =>
            <div className='flex w-full md:justify-start items-baseline  gap-2 sm:text-lg md:text-2xl font-bold ' key={index}>
              <ImCheckboxChecked size={20} className='text-secondary animate-shine' />
              <p>{item}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
