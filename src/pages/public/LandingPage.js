import React from 'react'

//assets
import google from '../../assets/googletext.svg'

//components
import IPhone from '../../components/IPhone'
import TopNav from '../../components/TopNav'
import FeedbackCard from '../../components/FeedbackCard/index';

//styles
import { ImCheckboxChecked } from 'react-icons/im'

export default function LandingPage() {

  const comments = [
    {
      name: 'Kaique Lima',
      comment: 'Ótimo lugar de aprendizagem, o que é prometido na venda do curso é cumprido.Ótimos professores, extremamente educados e atenciosos.A assistência durante o tempo de curso e após são fora de série, super recomendo! E para quem não tem nenhum tipo de conhecimento na área, garanto que você vai sair sabendo uma profissão. LifeCell muito obrigado por essa oportunidade de aprendizado!',
      picture: ''
    },
    {
      name: 'Leandro Oliveira',
      comment: 'Escola e professor de excelente qualidade muito obrigado pelo ensinamento top de mais, nunca tive vontade de mexer em celular devido as pecas serem pequenas mais depois do curso vi que é maravilhoso trabalhar nesse ramo. Obrigado mesmo Alex. Que Deus te ilumine cada dia mais e que entrem novos alunos. indicarei a todos que precisarem.',
      picture: ''
    },
    {
      name: 'Joana Andrade',
      comment: 'Eu super recomendo o curso. O professor ensina maravilhosamente bem. O ambiente é ótimo e a educação e o acolhimento é nota 1000. Temos tudo que precisamos para aprender.Laboratório completo e suporte aos alunos é maravilhoso.Realmente aprendemos o que eles prometem!!!! Meus parabéns.Se tivesse mais estrelas eu daria mais',
      picture: ''
    }
  ]

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
    <div className='flex flex-col h-full w-full overflow-x-hidden'>
      <TopNav />
      <div className='w-full flex p-[64px]'>
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
      <div className='w-full flex flex-col items-center my-[108px] gap-[40px]'>
        <div className='text-[60px] text-center font-bold w-full gap-2 leading-[70px]'>
          Veja o que <span className='text-secondary'>dizem</span> alguns dos novos
          profissionais <span className='text-secondary'>formados</span> pela gente
        </div>
        <div className='bg-[#000] flex items-center justify-around gap-[100px] px-[100px] bg-opacity-70 w-full py-10'>
          {comments.map(comment => <FeedbackCard comment={comment} />)}
        </div>
      </div>
      <div className='w-full flex flex-col items-center mb-[108px] gap-[40px]'>
        <div className='text-[60px] text-center font-bold w-full gap-2 leading-[70px]'>
          No nosso <span className='text-secondary'>curso de manutenção
            em smartphones</span> você <span className='text-secondary'>conta com</span>:
        </div>
        <div className='flex items-center justify-around gap-[100px] px-[100px] w-full py-10'>
          <div className='flex flex-col gap-6'>
            {checklist_left.map(item =>
              <div className='flex items-center gap-2 text-2xl font-bold'>
                <ImCheckboxChecked size={20} className='text-secondary' />
                <p>{item}</p>
              </div>
            )}
          </div>
          <div className='flex flex-col gap-6'>
            {checklist_right.map(item =>
              <div className='flex items-center gap-2 text-2xl font-bold'>
                <ImCheckboxChecked size={20} className='text-secondary' />
                <p>{item}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
