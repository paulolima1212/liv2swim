import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

function StarRating() {
  return (
    <div className='flex gap-0.5 mb-4' aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className='w-4 h-4 text-amber-400 fill-current'
          viewBox='0 0 20 20'
        >
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
        </svg>
      ))}
    </div>
  )
}

const Testimonials = () => {
  const { t } = useLanguage()
  const items = t.testimonials.items

  return (
    <section
      id='testimonials'
      className='section-padding bg-background relative overflow-hidden'
    >
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none' />

      <div className='container relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className='text-center max-w-2xl mx-auto mb-20'
        >
          <span className='text-primary font-semibold text-sm uppercase tracking-widest'>
            {t.testimonials.label}
          </span>
          <h2 className='heading-section mt-3 mb-4 text-text-main'>
            {t.testimonials.title}
          </h2>
          <p className='text-text-muted text-lg leading-relaxed'>
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-8'>
          {items.map((item, i) => (
            <motion.article
              key={item.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className='relative bg-surface p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200/80 transition-all duration-300'
            >
              <Quote className='absolute top-8 right-8 w-10 h-10 text-primary/15 pointer-events-none' />
              <div className='relative z-10'>
                <StarRating />
                <p className='text-text-main text-lg leading-relaxed italic mb-6'>
                  "{item.quote}"
                </p>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-heading font-bold text-sm'>
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className='font-semibold text-text-main'>
                      {item.author}
                    </p>
                    <p className='text-sm text-text-muted'>{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
