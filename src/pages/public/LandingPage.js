import React from 'react'

//components
import TopNav from '../../components/TopNav'
import Start from '../../components/Sections/Start';
import Feedbacks from '../../components/Sections/Feedbacks';
import Checklist from '../../components/Sections/Checklist';
import Plans from '../../components/Sections/Plans';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import LoginForm from '../../components/LoginForm';

//styles
import ConfettiGenerator from 'confetti-js';

export default function LandingPage() {
  const [show_modal, setShowModal] = React.useState(false)

  const first_section = React.createRef(() => { })
  const second_section = React.createRef(() => { })
  const third_section = React.createRef(() => { })
  const fourty_section = React.createRef(() => { })


  React.useEffect(() => {
    const confettiSettings = { "target": "confetti-holder", "max": "100", "size": "0.7", "animate": true, "props": ["circle"], "colors": [[0, 192, 255], [0, 192, 255], [0, 192, 255]], "clock": "3", "rotate": false, "width": "1920", "height": "4000", "respawn": true };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti?.render();

    return () => confetti?.clear();
  }, [])

  const scrollToSection = (ref) => ref?.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <canvas id="confetti-holder" className='absolute z-[1] w-full animate-shine overflow-hidden' />
      <div className='flex flex-col h-full w-full overflow-x-hidden gap-[150px] z-[4000]'>
        <TopNav scrollToSection={scrollToSection} refs={{ first_section, second_section, third_section, fourty_section }} openModal={() => setShowModal(true)} />
        <Start section_ref={first_section} />
        <Feedbacks section_ref={second_section} />
        <Checklist section_ref={third_section} />
        <Plans section_ref={fourty_section} />
        <Footer />
        <Modal className='w-[450px]' show={show_modal} close={() => setShowModal(false)} children={<LoginForm />} />
      </div>
    </>
  )
}
