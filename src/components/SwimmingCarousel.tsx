import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

import foto01 from '../assets/foto01.jpg'
import foto02 from '../assets/foto02.jpg'
import foto03 from '../assets/foto03.jpg'
import foto04 from '../assets/foto04.jpg'
import foto05 from '../assets/foto05.jpg'
import foto06 from '../assets/foto06.jpg'
import foto07 from '../assets/foto07.jpg'
import foto08 from '../assets/foto08.jpg'
import foto10 from '../assets/foto10.jpg'
import foto11 from '../assets/foto11.jpg'

const images = [
  {
    src: foto01,
    altPt: 'Aulas de natação Liv2swim',
    altEn: 'Liv2swim swimming lessons',
  },
  {
    src: foto02,
    altPt: 'Aulas de natação Liv2swim',
    altEn: 'Liv2swim swimming lessons',
  },
  {
    src: foto03,
    altPt: 'Aulas de natação Liv2swim',
    altEn: 'Liv2swim swimming lessons',
  },
  {
    src: foto04,
    altPt: 'Aulas de natação Liv2swim',
    altEn: 'Liv2swim swimming lessons',
  },
  {
    src: foto05,
    altPt: 'Aulas de natação Liv2swim',
    altEn: 'Liv2swim swimming lessons',
  },
  {
    src: foto06,
    altPt: 'Aulas de natação Liv2swim',
    altEn: 'Liv2swim swimming lessons',
  },
  {
    src: foto07,
    altPt: 'Aulas de natação Liv2swim',
    altEn: 'Liv2swim swimming lessons',
  },
  {
    src: foto08,
    altPt: 'Aulas de natação Liv2swim',
    altEn: 'Liv2swim swimming lessons',
  },
  {
    src: foto10,
    altPt: 'Aulas de natação Liv2swim',
    altEn: 'Liv2swim swimming lessons',
  },
  {
    src: foto11,
    altPt: 'Aulas de natação Liv2swim',
    altEn: 'Liv2swim swimming lessons',
  },
]

const FADE_MS = 1000
const AUTO_MS = 6000

const SwimmingCarousel = () => {
  const { locale } = useLanguage()
  const [baseIndex, setBaseIndex] = useState(0)
  const [incomingIndex, setIncomingIndex] = useState<number | null>(null)
  const [incomingOn, setIncomingOn] = useState(false)
  const busyRef = useRef(false)
  const baseIndexRef = useRef(0)
  const incomingIndexRef = useRef<number | null>(null)
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  baseIndexRef.current = baseIndex
  incomingIndexRef.current = incomingIndex

  const getAlt = (img: (typeof images)[0]) =>
    locale === 'pt' ? img.altPt : img.altEn

  const goTo = useCallback((next: number) => {
    if (busyRef.current) return
    const current = baseIndexRef.current
    const target = ((next % images.length) + images.length) % images.length
    if (target === current) return
    busyRef.current = true
    setIncomingIndex(target)
    setIncomingOn(false)
    // Paint the next image at opacity 0, then enable opacity so CSS crossfades over the base.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIncomingOn(true))
    })
  }, [])

  const goNext = useCallback(() => {
    goTo(baseIndexRef.current + 1)
  }, [goTo])

  const goPrev = useCallback(() => {
    goTo(baseIndexRef.current - 1)
  }, [goTo])

  const finishFade = useCallback(() => {
    const next = incomingIndexRef.current
    if (next == null) return
    setBaseIndex(next)
    setIncomingIndex(null)
    setIncomingOn(false)
    busyRef.current = false
  }, [])

  useEffect(() => {
    images.forEach((img) => {
      const preload = new Image()
      preload.src = img.src
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (busyRef.current) return
      goTo(baseIndexRef.current + 1)
    }, AUTO_MS)
    return () => clearInterval(interval)
  }, [goTo])

  // Safety: if transitionend is skipped (tab hidden), still settle the layers.
  useEffect(() => {
    if (incomingIndex == null || !incomingOn) return
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(finishFade, FADE_MS + 80)
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    }
  }, [incomingIndex, incomingOn, finishFade])

  const base = images[baseIndex]
  const incoming = incomingIndex != null ? images[incomingIndex] : null

  return (
    <section
      className='py-20 md:py-28 bg-slate-50 overflow-hidden'
      aria-label='Imagens de aulas de natação'
      aria-roledescription='carousel'
    >
      <div className='container relative'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='heading-section text-text-main mb-2'>
            {locale === 'pt' ? 'Nossas aulas' : 'Our lessons'}
          </h2>
          <p className='text-text-muted text-lg max-w-xl mx-auto'>
            {locale === 'pt'
              ? 'Um ambiente seguro e acolhedor para aprender a nadar.'
              : 'A safe and welcoming environment to learn how to swim.'}
          </p>
        </motion.div>

        <div className='relative max-w-5xl mx-auto group'>
          <div className='relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-xl'>
            <img
              src={base.src}
              alt={getAlt(base)}
              className='absolute inset-0 h-full w-full object-cover'
              draggable={false}
            />
            {incoming && (
              <img
                src={incoming.src}
                alt={getAlt(incoming)}
                onTransitionEnd={(e) => {
                  if (e.propertyName !== 'opacity') return
                  finishFade()
                }}
                className='absolute inset-0 h-full w-full object-cover'
                style={{
                  opacity: incomingOn ? 1 : 0,
                  transition: `opacity ${FADE_MS}ms ease-in-out`,
                  willChange: 'opacity',
                }}
                draggable={false}
              />
            )}
          </div>

          <button
            type='button'
            onClick={goPrev}
            className='absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-text-main hover:bg-white transition-colors opacity-0 md:group-hover:opacity-100 focus:opacity-100'
            aria-label={locale === 'pt' ? 'Imagem anterior' : 'Previous image'}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type='button'
            onClick={goNext}
            className='absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-text-main hover:bg-white transition-colors opacity-0 md:group-hover:opacity-100 focus:opacity-100'
            aria-label={locale === 'pt' ? 'Próxima imagem' : 'Next image'}
          >
            <ChevronRight size={24} />
          </button>

          <div className='flex justify-center gap-2 mt-6'>
            {images.map((_, i) => (
              <button
                key={i}
                type='button'
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === baseIndex
                    ? 'bg-primary w-8'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={
                  locale === 'pt'
                    ? `Ir para imagem ${i + 1}`
                    : `Go to image ${i + 1}`
                }
                aria-current={i === baseIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SwimmingCarousel
