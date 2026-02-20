import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useFormModal } from '../context/FormModalContext'
import { useLanguage } from '../i18n/LanguageContext'
import logoImg from '../assets/logo.png'

const navLinkKeys = ['whyUs', 'stories', 'method'] as const
const hrefByKey = {
  whyUs: '#features',
  stories: '#testimonials',
  method: '#features',
} as const

const Navbar = () => {
  const { locale, setLocale, t } = useLanguage()
  const { openForm } = useFormModal()
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface/85 backdrop-blur-xl border-b border-slate-200/60 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className='container flex justify-between items-center'>
        <a
          href='#'
          className='flex items-center gap-2 text-text-main hover:opacity-90 transition-opacity'
          aria-label="Liv2swim"
        >
          <img
            src={logoImg}
            alt="Liv2swim"
            className="h-8 w-auto object-contain md:h-9"
          />
        </a>

        <div className='hidden md:flex items-center gap-10'>
          {navLinkKeys.map((key) => (
            <a
              key={key}
              href={hrefByKey[key]}
              className='text-sm font-medium text-text-muted hover:text-text-main transition-colors'
            >
              {t.nav[key]}
            </a>
          ))}
          <button
            type='button'
            onClick={() => { openForm(); setIsOpen(false) }}
            className='btn btn-primary text-sm px-5 py-2.5'
          >
            {t.nav.bookAssessment}
          </button>
          <div className='flex items-center border border-slate-200 rounded-full p-1 bg-slate-50/80 ml-2'>
            <button
              type='button'
              onClick={() => setLocale('pt')}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                locale === 'pt'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-muted hover:text-text-main'
              }`}
              aria-label='Português'
              aria-pressed={locale === 'pt'}
            >
              PT
            </button>
            <button
              type='button'
              onClick={() => setLocale('en')}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                locale === 'en'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-muted hover:text-text-main'
              }`}
              aria-label='English'
              aria-pressed={locale === 'en'}
            >
              EN
            </button>
          </div>
        </div>

        <div className='flex md:hidden items-center gap-2'>
          <button
            type='button'
            className='p-2.5 rounded-full text-text-main hover:bg-slate-100 transition-colors'
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className='flex items-center border border-slate-200 rounded-full p-1 bg-slate-50/80'>
            <button
              type='button'
              onClick={() => setLocale('pt')}
              className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                locale === 'pt' ? 'bg-primary text-white' : 'text-text-muted'
              }`}
              aria-label='Português'
            >
              PT
            </button>
            <button
              type='button'
              onClick={() => setLocale('en')}
              className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                locale === 'en' ? 'bg-primary text-white' : 'text-text-muted'
              }`}
              aria-label='English'
            >
              EN
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 top-[73px] md:hidden bg-surface border-t border-slate-100'
          >
            <div className='container flex flex-col py-8 gap-1'>
              {navLinkKeys.map((key) => (
                <a
                  key={key}
                  href={hrefByKey[key]}
                  className='py-4 text-lg font-medium text-text-main hover:text-primary transition-colors'
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav[key]}
                </a>
              ))}
              <button
                type='button'
                className='btn btn-primary w-full mt-6'
                onClick={() => { openForm(); setIsOpen(false) }}
              >
                {t.nav.bookAssessment}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
