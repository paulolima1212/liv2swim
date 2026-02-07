import { motion } from 'framer-motion'
import { ArrowRight, Droplets } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className='relative min-h-[100vh] flex items-center overflow-hidden bg-background pt-20'>
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute top-0 right-0 w-[80vw] max-w-[900px] h-[80vw] max-h-[900px] rounded-full bg-primary/[0.06] blur-3xl' />
        <div className='absolute bottom-0 left-0 w-[60vw] max-w-[600px] h-[60vw] max-h-[600px] rounded-full bg-secondary/[0.05] blur-3xl' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary-muted/[0.04] blur-3xl' />
      </div>

      <div className='container relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className='max-w-xl'
        >
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-8 border border-primary/10'>
            <Droplets size={18} className='shrink-0' />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className='heading-display mb-6 text-text-main'>
            {t.hero.title1}
            <br />
            <span className='text-primary'>{t.hero.title2}</span>
          </h1>

          <p className='text-lg md:text-xl text-text-muted mb-10 leading-relaxed max-w-md'>
            {t.hero.subtitle}
          </p>

          <div className='flex flex-col sm:flex-row gap-4'>
            <motion.a
              href='#cta'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='btn btn-primary text-lg px-8 group'
            >
              {t.hero.ctaPrimary}
              <ArrowRight
                size={20}
                className='group-hover:translate-x-0.5 transition-transform'
              />
            </motion.a>
            <motion.a
              href='#features'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='btn btn-ghost text-lg'
            >
              {t.hero.ctaSecondary}
            </motion.a>
          </div>

          <div className='mt-14 flex items-center gap-4 text-sm text-text-muted'>
            <div className='flex -space-x-3'>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className='w-10 h-10 rounded-full border-2 border-surface bg-slate-200 bg-cover bg-center'
                  style={{
                    backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`,
                  }}
                />
              ))}
            </div>
            <p>
              {t.hero.socialProof}{' '}
              <span className='font-semibold text-text-main'>500</span>{' '}
              {t.hero.socialProofEnd}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className='relative hidden lg:block'
        >
          <div className='relative aspect-[4/5] max-h-[700px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 ring-1 ring-slate-200/50'>
            <img
              src='https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2070&auto=format&fit=crop'
              alt={t.hero.imageAlt}
              className='absolute inset-0 w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent' />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className='absolute -bottom-4 -left-4 right-4 md:right-auto md:w-[320px] z-20 bg-surface/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-slate-100'
          >
            <p className='font-heading font-semibold text-lg text-text-main mb-2'>
              "{t.hero.testimonialQuote}"
            </p>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm'>
                SJ
              </div>
              <div>
                <p className='font-medium text-text-main'>
                  {t.hero.testimonialName}
                </p>
                <p className='text-sm text-text-muted'>
                  {t.hero.testimonialRole}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
