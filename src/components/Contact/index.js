import React from 'react'

export default function Contact({ icon = 'no icon', link = '#' }) {
  return (
    <a href={link} className='bg-gradient-to-r from-black to-[#072C27] flex items-center justify-center hover:translate-x-1 border-r-[4px] w-[60px]  duration-200  border-secondary p-3'>
      {icon}
    </a>
  )
}
