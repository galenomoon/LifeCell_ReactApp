import React from 'react'
import { MdClose } from 'react-icons/md'

export default function Modal({ children, show = false, close = () => { }, className }) {
  return (show ?
    <div className='fixed flex items-center justify-center z-[2000] w-full h-full '>
      <div className='w-full h-full backdrop-blur-md bg-[#00000022] animate-fade_sm absolute' />
      <div className={`bg-[#202020] items-center justify-center ${className || "w-fit h-fit max-w-[600px] max-h-[600px] "} rounded-2xl animate-slide_from_bottom_sm shadow-lg relative`}>
        <MdClose size={40} className='p-1 bg-[#ffffff44] hover:opacity-80 rounded-lg cursor-pointer absolute top-3 right-3' onClick={close} />
        {children}
      </div>
    </div> : null
  )
}
