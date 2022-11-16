import React from 'react'

//components
import TopNav from '../../components/TopNav'
import Start from '../../components/Sections/Start';
import Feedbacks from '../../components/Sections/Feedbacks';
import Checklist from '../../components/Sections/Checklist';
import Plans from '../../components/Sections/Plans';
import Footer from '../../components/Footer';

export default function LandingPage() {
  const first_section = React.createRef(() => { })
  const second_section = React.createRef(() => { })
  const third_section = React.createRef(() => { })
  const fourty_section = React.createRef(() => { })

  const scrollToSection = (ref) => ref?.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className='flex flex-col h-full w-full overflow-x-hidden'>
      <TopNav scrollToSection={scrollToSection} refs={{ first_section, second_section, third_section, fourty_section }} />
      <Start section_ref={first_section} />
      <Feedbacks section_ref={second_section} />
      <Checklist section_ref={third_section} />
      <Plans section_ref={fourty_section} />
      <Footer />
    </div>
  )
}
