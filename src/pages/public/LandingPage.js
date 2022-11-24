import React, { createContext } from 'react'

//deeps
import { useNavigate } from 'react-router-dom'
import api_client from '../../config/api_client';

//components
import TopNav from '../../components/TopNav'
import Start from '../../components/Sections/Start';
import Feedbacks from '../../components/Sections/Feedbacks';
import Checklist from '../../components/Sections/Checklist';
import Plans from '../../components/Sections/Plans';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import { LoginForm, SignUpForm } from '../../components/Form';

//styles
import ConfettiGenerator from 'confetti-js';

//context
export const LandingPageContext = createContext()

export default function LandingPage() {
  const navigate = useNavigate()
  const [plan, setPlan] = React.useState(null)
  const [show_modal_login, setShowModalLogin] = React.useState(false)
  const [show_modal_signup, setShowModalSignUp] = React.useState(false)

  const first_section = React.createRef(() => { })
  const second_section = React.createRef(() => { })
  const third_section = React.createRef(() => { })
  const fourty_section = React.createRef(() => { })

  React.useEffect(() => {
    localStorage.clear();
    const confettiSettings = { "target": "confetti-holder", "max": "100", "size": "0.7", "animate": true, "props": ["circle"], "colors": [[0, 192, 255], [0, 192, 255], [0, 192, 255]], "clock": "3", "rotate": false, "width": "1920", "height": "4000", "respawn": true };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti?.render();

    return () => confetti?.clear();
  }, [])

  const scrollToSection = (ref) => ref?.current?.scrollIntoView({ behavior: 'smooth' })

  const handleAuth = () => navigate('/student/home')

  const handleSignUp = async (user) => {
    // if (user.password === user.password_confirmation) {
    //   await api_client.post('/auth/', user).then(res => {
    //     console.log('token', res.data.token)
    //     alert('Usuário criado com sucesso!')
    //     navigate('/student/home')
    //   }).catch(err => console.log(err))
    //   return
    // }
    // alert('Senhas não conferem')
  }

  const showSignUpModal = (plan) => {
    setPlan(plan)
    setShowModalSignUp(true)
    setShowModalLogin(false)
  }

  return (
    <>
      <canvas id="confetti-holder" className='absolute z-[1] w-full animate-shine overflow-hidden' />
      <div className='flex flex-col h-full w-full overflow-x-hidden gap-[150px] z-[4000]'>
        <LandingPageContext.Provider value={{ showSignUpModal }}>
          <TopNav scrollToSection={scrollToSection} refs={{ first_section, second_section, third_section, fourty_section }} openModal={() => setShowModalLogin(true)} />
          <Start section_ref={first_section} />
          <Feedbacks section_ref={second_section} />
          <Checklist section_ref={third_section} />
          <Plans section_ref={fourty_section} />
          <Footer />
          <Modal className='w-[450px]' show={show_modal_login} close={() => setShowModalLogin(false)} children={<LoginForm login={() => handleAuth()} />} />
          <Modal className='min-w-fit w-[1000px]' show={show_modal_signup} close={() => setShowModalSignUp(false)} children={<SignUpForm plan={plan} handleSignUp={handleSignUp} />} />
        </LandingPageContext.Provider>
      </div>
    </>
  )
}
