import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact({ icon = 'no icon', link = '#' }) {
  return (
    <a href={link} className='bg-gradient-to-r from-black to-[#072C27] flex items-center justify-center border-r-[4px] hover:border-r-[7px] w-[60px]  duration-200  border-secondary p-3'>
      {icon}
    </a>
  )
}
