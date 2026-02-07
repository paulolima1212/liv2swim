import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const social = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
]

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className='bg-slate-900 text-slate-300 py-20 relative overflow-hidden'>
      <div className='absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none' />

      <div className='container relative z-10 grid md:grid-cols-4 gap-14'>
        <div className='md:col-span-2'>
          <a
            href='#'
            className='inline-flex items-center font-heading text-2xl font-bold tracking-tight text-white hover:text-primary transition-colors mb-6'
          >
            Liv<span className='text-primary'>2</span>swim
          </a>
          <p className='max-w-sm text-slate-400 leading-relaxed mb-8'>
            {t.footer.tagline}
          </p>
          <div className='flex gap-3'>
            {social.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className='w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300'
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
                <a
                  href={href}
                  className='text-slate-400 hover:text-primary transition-colors'
                >
                  {label}
                </a>
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
              <span className='text-slate-400'>(11) 99999-9999</span>
            </li>
            <li className='flex items-start gap-3'>
              <MapPin size={18} className='text-primary mt-1 shrink-0' />
              <span className='text-slate-400'>São Paulo, SP</span>
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
