import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const images = [
  {
    src: 'https://images.pexels.com/photos/3775140/pexels-photo-3775140.jpeg?auto=compress&w=1200',
    altPt: 'Nadadora em piscina',
    altEn: 'Swimmer in pool',
  },
  {
    src: 'https://images.pexels.com/photos/965988/pexels-photo-965988.jpeg?auto=compress&w=1200',
    altPt: 'Aula na piscina',
    altEn: 'Swimming pool lesson',
  },
  {
    src: 'https://images.pexels.com/photos/8134750/pexels-photo-8134750.jpeg?auto=compress&w=1200',
    altPt: 'Piscina',
    altEn: 'Swimming pool',
  },
  {
    src: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&w=1200',
    altPt: 'Natação',
    altEn: 'Swimming',
  },
  {
    src: 'https://images.pexels.com/photos/3792436/pexels-photo-3792436.jpeg?auto=compress&w=1200',
    altPt: 'Aprendendo a nadar',
    altEn: 'Learning to swim',
  },
]

const SwimmingCarousel = () => {
  const { locale } = useLanguage()
  const [index, setIndex] = useState(0)

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % images.length)
  }, [])

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(goNext, 5000)
    return () => clearInterval(interval)
  }, [goNext])

  const getAlt = (img: (typeof images)[0]) =>
    locale === 'pt' ? img.altPt : img.altEn

  return (
    <section
      className="py-20 md:py-28 bg-slate-50 overflow-hidden"
      aria-label="Imagens de aulas de natação"
    >
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-section text-text-main mb-2">
            {locale === 'pt' ? 'Nossas aulas' : 'Our lessons'}
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            {locale === 'pt'
              ? 'Um ambiente seguro e acolhedor para aprender a nadar.'
              : 'A safe and welcoming environment to learn how to swim.'}
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto group">
          <div className="aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-200 shadow-xl">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={index}
                src={images[index].src}
                alt={getAlt(images[index])}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-text-main hover:bg-white transition-colors opacity-0 md:group-hover:opacity-100 focus:opacity-100"
            aria-label={locale === 'pt' ? 'Imagem anterior' : 'Previous image'}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-text-main hover:bg-white transition-colors opacity-0 md:group-hover:opacity-100 focus:opacity-100"
            aria-label={locale === 'pt' ? 'Próxima imagem' : 'Next image'}
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === index ? 'bg-primary w-8' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={
                  locale === 'pt'
                    ? `Ir para imagem ${i + 1}`
                    : `Go to image ${i + 1}`
                }
                aria-current={i === index ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SwimmingCarousel
