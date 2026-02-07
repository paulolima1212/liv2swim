import CTASection from './components/CTASection'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import StudentForm from './components/StudentForm'
import SwimmingCarousel from './components/SwimmingCarousel'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className='font-sans text-text-main bg-background min-h-screen'>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <SwimmingCarousel />
        <CTASection />
        <StudentForm />
        <Footer />
      </main>
    </div>
  )
}

export default App
