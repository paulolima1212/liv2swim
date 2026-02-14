import { motion } from 'framer-motion'
import { Heart, Shield, Sparkles, UserCircle, Users } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const icons = [Shield, Users, Heart, Sparkles, UserCircle] as const
const colorClasses: Record<string, string> = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  accent: 'bg-accent text-white',
}
const colors: ('primary' | 'secondary' | 'accent')[] = [
  'primary',
  'secondary',
  'accent',
  'primary',
  'secondary',
]

const Features = () => {
  const { t } = useLanguage()
  const items = t.features.items

  return (
    <section
      id='features'
      className='section-padding bg-surface relative overflow-hidden'
      aria-labelledby='features-heading'
    >
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl' />
      </div>

      <div className='container relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className='text-center max-w-2xl mx-auto mb-20'
        >
          <span className='text-primary font-semibold text-sm uppercase tracking-widest'>
            {t.features.label}
          </span>
          <h2
            id='features-heading'
            className='heading-section mt-3 mb-4 text-text-main'
          >
            {t.features.title}
          </h2>
          <p className='text-text-muted text-lg leading-relaxed'>
            {t.features.subtitle}
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8'>
          {items.map((feature, index) => {
            const Icon = icons[index]
            const color = colors[index]
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className='group relative p-8 rounded-3xl bg-background border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300'
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${colorClasses[color]} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}
                >
                  <Icon className='w-6 h-6' />
                </div>
                <h3 className='text-xl font-heading font-bold text-text-main mb-3'>
                  {feature.title}
                </h3>
                <p className='text-text-muted text-sm leading-relaxed'>
                  {feature.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
