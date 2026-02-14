import { useRef, useEffect } from 'react'
import CTASection from './components/CTASection'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import StudentFormModal from './components/StudentForm'
import SwimmingCarousel from './components/SwimmingCarousel'
import Testimonials from './components/Testimonials'
import { useFormModal } from './context/FormModalContext'

function ScrollToFormTrigger() {
  const { openForm } = useFormModal()
  const hasOpened = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (hasOpened.current) return
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight
      if (distanceFromBottom < 200) {
        hasOpened.current = true
        openForm()
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [openForm])

  return null
}

function App() {
  return (
    <div className="font-sans text-text-main bg-background min-h-screen">
      <ScrollToFormTrigger />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <SwimmingCarousel />
        <CTASection />
        <Footer />
      </main>
      <StudentFormModal />
    </div>
  )
}

export default App
