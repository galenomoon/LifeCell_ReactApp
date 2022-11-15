import React from 'react'

//styles
import { BsFillStarFill } from 'react-icons/bs'

export default function FeedbackCard({ comment }) {
  return (
    <div className='flex flex-col text-center gap-[30px] py-[30px] px-3 items-center h-[528px] justify-evenly border-[1px] w-[436px] rounded-2xl border-opacity-60 border-secondary'>
      <div className='flex flex-col items-center justify-center'>
        <div className='bg-gradient-to-tr from-secondary to-[#333] rounded-xl h-[80px] w-[80px] ' />
        <p className='text-secondary font-bold text-[26px]'>
          {comment.name}
        </p>
        <p className='text-[#ffffff99] text-[14px]'>
          São Paulo
        </p>
      </div>
      <p className='text-[15px]'>
        {comment.comment}
      </p>
      <div className='flex gap-2 text-[#FFC700]'>
        {Array(5).fill().map(star => <BsFillStarFill size={18} />)}
      </div>
    </div>
  )
}
