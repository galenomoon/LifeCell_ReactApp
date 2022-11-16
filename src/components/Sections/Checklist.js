import React from 'react'

//styles
import { ImCheckboxChecked } from 'react-icons/im'

export default function Checklist({ section_ref }) {

  const checklist_left = [
    'CURSO DO BÁSICO AO AVANÇADO',
    'SUPORTE NO TELEGRAM',
    'CERTIFICADO DE CONCLUSÃO',
    'APOSTILA',
    'INDICAÇÃO DE FORNECEDORES',
    'INDICAÇÃO DE EQUIPAMENTOS',
    'AULAS COM SAMSUNG, MOTOROLA E APPLE'
  ]
  const checklist_right = [
    'ANÁLISE E DIAGNÓSTICOS DE DEFEITOS',
    'INTRODUÇÃO À REPARO DE SOFTWARE',
    'ATENDIMENTO AO CLIENTE',
    'DICAS DE QUANTO COBRAR',
    'DESOXIDAÇÃO DE PLACA',
    'SOLDAS',
    'SUBSTITUIÇÃO DE TOUCH E LCD'
  ]
  return (
    <div className='w-full flex flex-col items-center mb-[108px] gap-[60px]'>
      <div className='text-[60px] text-center font-bold w-[80%] gap-2 leading-[70px]' ref={section_ref}>
        No nosso <span className='text-secondary animate-shine'>curso de manutenção
          em smartphones</span> você <span className='text-secondary animate-shine'>conta com</span>:
      </div>
      <div className='flex items-center justify-around gap-[100px] px-[100px] w-full py-10'>
        <div className='flex flex-col gap-6'>
          {checklist_left.map((item, index) =>
            <div className='flex items-center gap-2 text-2xl font-bold' key={index}>
              <ImCheckboxChecked size={20} className='text-secondary animate-shine' />
              <p>{item}</p>
            </div>
          )}
        </div>
        <div className='flex flex-col gap-6'>
          {checklist_right.map((item, index) =>
            <div className='flex items-center w-full gap-2 text-2xl font-bold' key={index}>
              <ImCheckboxChecked size={20} className='text-secondary animate-shine' />
              <p className='whitespace-nowrap'>{item}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
