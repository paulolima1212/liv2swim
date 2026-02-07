import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const FORM_SUBMIT_URL = import.meta.env.VITE_FORM_SUBMIT_URL as
  | string
  | undefined

export type StudentFormData = {
  nome: string
  telefone: string
  nivel: string
}

async function submitForm(data: StudentFormData): Promise<void> {
  if (!FORM_SUBMIT_URL?.trim()) {
    throw new Error('VITE_FORM_SUBMIT_URL is not set')
  }

  const response = await fetch(FORM_SUBMIT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`)
  }
}

const StudentForm = () => {
  const { t } = useLanguage()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [nivel, setNivel] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)
    setStatus('sending')

    const payload: StudentFormData = {
      nome: nome.trim(),
      telefone: telefone.trim(),
      nivel: nivel.trim(),
    }

    try {
      await submitForm(payload)
      setStatus('success')
      setNome('')
      setTelefone('')
      setNivel('')
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        !FORM_SUBMIT_URL?.trim() ? t.form.errorNotConfigured : t.form.error,
      )
    }
  }

  const isSending = status === 'sending'

  return (
    <section
      id='form'
      className='section-padding bg-background relative overflow-hidden'
      aria-labelledby='form-heading'
    >
      <div className='container relative z-10 max-w-lg mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 id='form-heading' className='heading-section text-text-main mb-3'>
            {t.form.title}
          </h2>
          <p className='text-text-muted text-lg'>{t.form.subtitle}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className='bg-surface border border-slate-200 rounded-3xl p-8 shadow-lg shadow-slate-100/50'
        >
          <div className='space-y-6'>
            <div>
              <label
                htmlFor='form-nome'
                className='block text-sm font-semibold text-text-main mb-2'
              >
                {t.form.name}
              </label>
              <input
                id='form-nome'
                type='text'
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder={t.form.namePlaceholder}
                className='w-full px-4 py-3 rounded-xl border border-slate-200 bg-background text-text-main placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors'
                disabled={isSending}
                autoComplete='name'
              />
            </div>

            <div>
              <label
                htmlFor='form-telefone'
                className='block text-sm font-semibold text-text-main mb-2'
              >
                {t.form.phone}
              </label>
              <input
                id='form-telefone'
                type='tel'
                required
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder={t.form.phonePlaceholder}
                className='w-full px-4 py-3 rounded-xl border border-slate-200 bg-background text-text-main placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors'
                disabled={isSending}
                autoComplete='tel'
              />
            </div>

            <div>
              <label
                htmlFor='form-nivel'
                className='block text-sm font-semibold text-text-main mb-2'
              >
                {t.form.level}
              </label>
              <select
                id='form-nivel'
                required
                value={nivel}
                onChange={(e) => setNivel(e.target.value)}
                className='w-full px-4 py-3 rounded-xl border border-slate-200 bg-background text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors appearance-none cursor-pointer disabled:opacity-60'
                disabled={isSending}
              >
                <option value=''>{t.form.levelPlaceholder}</option>
                {t.form.levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {status === 'success' && (
            <p className='mt-6 p-4 rounded-xl bg-primary/10 text-primary font-medium text-center'>
              {t.form.success}
            </p>
          )}

          {status === 'error' && errorMessage && (
            <p className='mt-6 p-4 rounded-xl bg-red-50 text-red-700 font-medium text-center'>
              {errorMessage}
            </p>
          )}

          <div className='mt-8'>
            <button
              type='submit'
              disabled={isSending}
              className='btn btn-primary w-full py-4 text-lg disabled:opacity-70 disabled:pointer-events-none'
            >
              {isSending ? (
                <>
                  <Loader2 size={22} className='animate-spin shrink-0' />
                  {t.form.sending}
                </>
              ) : (
                t.form.submit
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default StudentForm
