import React from 'react'

//components
import TopNav from '../../components/TopNav'
import Start from '../../components/Sections/Start';
import Feedbacks from '../../components/Sections/Feedbacks';
import Checklist from '../../components/Sections/Checklist';
import Plans from '../../components/Sections/Plans';
import Footer from '../../components/Footer';

export default function LandingPage() {

  return (
    <div className='flex flex-col h-full w-full overflow-x-hidden'>
      <TopNav />
      <Start />
      <Feedbacks />
      <Checklist />
      <Plans />
      <Footer/>
    </div>
  )
}
