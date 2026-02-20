import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import logoImg from '../assets/logo.png'
import { useFormModal } from '../context/FormModalContext'
import { useLanguage } from '../i18n/LanguageContext'

const social = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  {
    Icon: Instagram,
    href: 'https://www.instagram.com/liv2.swim/',
    label: 'Instagram',
  },
  { Icon: Twitter, href: '#', label: 'Twitter' },
]

const Footer = () => {
  const { t } = useLanguage()
  const { openForm } = useFormModal()

  return (
    <footer className='bg-secondary text-white/80 py-20 relative overflow-hidden'>
      <div className='absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none' />

      <div className='container relative z-10 grid md:grid-cols-4 gap-14'>
        <div className='md:col-span-2'>
          <a
            href='#'
            className='inline-flex items-center mb-6 text-white hover:opacity-90 transition-opacity'
            aria-label='Liv2swim'
          >
            <img
              src={logoImg}
              alt='Liv2swim'
              className='h-10 w-auto object-contain'
            />
          </a>
          <p className='max-w-sm text-white/70 leading-relaxed mb-8'>
            {t.footer.tagline}
          </p>
          <div className='flex gap-3'>
            {social.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all duration-300'
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className='text-white font-heading font-bold text-lg mb-6'>
            {t.footer.linksTitle}
          </h4>
          <ul className='space-y-4'>
            {t.footer.quickLinks.map(({ label, href }) => (
              <li key={label}>
                {href === '#form' ? (
                  <button
                    type='button'
                    onClick={openForm}
                    className='text-white/70 hover:text-primary transition-colors text-left'
                  >
                    {label}
                  </button>
                ) : (
                  <a
                    href={href}
                    className='text-white/70 hover:text-primary transition-colors'
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className='text-white font-heading font-bold text-lg mb-6'>
            {t.footer.contactTitle}
          </h4>
          <ul className='space-y-4'>
            <li className='flex items-start gap-3'>
              <Mail size={18} className='text-primary mt-1 shrink-0' />
              <a
                href='mailto:hello@liv2swim.com'
                className='text-slate-400 hover:text-white transition-colors'
              >
                hello@liv2swim.com
              </a>
            </li>
            <li className='flex items-start gap-3'>
              <Phone size={18} className='text-primary mt-1 shrink-0' />
              <a
                href='tel:+610494631995'
                className='text-slate-400 hover:text-white transition-colors'
              >
                +61 0494 631 995
              </a>
            </li>
            <li className='flex items-start gap-3'>
              <MapPin size={18} className='text-primary mt-1 shrink-0' />
              <span className='text-slate-400'>Sydney, NSW, Australia</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='container mt-16 pt-8 border-t border-slate-800'>
        <p className='text-center text-sm text-slate-500'>
          © {new Date().getFullYear()} Liv2swim. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}

export default Footer
