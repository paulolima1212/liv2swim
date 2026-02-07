import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, HelpCircle } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const CTASection = () => {
  const { t } = useLanguage()

  return (
    <section id='cta' className='relative py-24 md:py-32 overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary/95 z-0' />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(13,148,136,0.25),transparent)] z-0' />
      <div className='absolute bottom-0 left-0 right-0 h-px bg-white/10 z-0' />

      <div className='container relative z-10 text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='heading-section text-white mb-6'
        >
          {t.cta.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-secondary-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed'
        >
          {t.cta.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex flex-col sm:flex-row justify-center gap-4 mb-16'
        >
          <a
            href='#form'
            className='btn bg-surface text-secondary hover:bg-slate-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all'
          >
            {t.cta.buttonPrimary}
            <ArrowRight className='w-5 h-5' />
          </a>
          <a
            href='#'
            className='btn bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg'
          >
            <HelpCircle className='w-5 h-5' />
            {t.cta.buttonSecondary}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left'
        >
          {t.cta.benefits.map((item, i) => (
            <div
              key={i}
              className='flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors'
            >
              <CheckCircle className='text-primary-light shrink-0 mt-0.5 w-6 h-6' />
              <span className='text-slate-200 font-medium'>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
