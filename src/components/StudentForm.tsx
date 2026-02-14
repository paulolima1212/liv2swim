import { AnimatePresence, motion } from 'framer-motion'
import { Loader2, X } from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'
import { useFormModal } from '../context/FormModalContext'
import { useLanguage } from '../i18n/LanguageContext'

const FORM_SUBMIT_URL = import.meta.env.VITE_FORM_SUBMIT_URL as
  | string
  | undefined

export type StudentFormData = {
  nome: string
  telefone: string
  email: string
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

const StudentFormModal = () => {
  const { t, locale } = useLanguage()
  const { isFormOpen, closeForm } = useFormModal()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (isFormOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isFormOpen])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)
    setStatus('sending')

    const payload: StudentFormData = {
      nome: nome.trim(),
      telefone: telefone.trim(),
      email: email.trim(),
    }

    try {
      await submitForm(payload)
      setStatus('success')
      setNome('')
      setTelefone('')
      setEmail('')
      setTimeout(closeForm, 2000)
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        !FORM_SUBMIT_URL?.trim() ? t.form.errorNotConfigured : t.form.error,
      )
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeForm()
  }

  const isSending = status === 'sending'

  return (
    <AnimatePresence>
      {isFormOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={handleBackdropClick}
          aria-modal="true"
          role="dialog"
          aria-labelledby="form-heading"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-surface rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h2 id="form-heading" className="heading-section text-lg md:text-xl text-text-main">
                {t.form.title}
              </h2>
              <button
                type="button"
                onClick={closeForm}
                className="p-2 rounded-full text-text-muted hover:text-text-main hover:bg-slate-100 transition-colors"
                aria-label={locale === 'pt' ? 'Fechar' : 'Close'}
              >
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <p className="text-text-muted text-sm">{t.form.subtitle}</p>

              <div>
                <label
                  htmlFor="form-nome"
                  className="block text-sm font-semibold text-text-main mb-2"
                >
                  {t.form.name}
                </label>
                <input
                  id="form-nome"
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder={t.form.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-background text-text-main placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  disabled={isSending}
                  autoComplete="name"
                />
              </div>

              <div>
                <label
                  htmlFor="form-telefone"
                  className="block text-sm font-semibold text-text-main mb-2"
                >
                  {t.form.phone}
                </label>
                <input
                  id="form-telefone"
                  type="tel"
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder={t.form.phonePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-background text-text-main placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  disabled={isSending}
                  autoComplete="tel"
                />
              </div>

              <div>
                <label
                  htmlFor="form-email"
                  className="block text-sm font-semibold text-text-main mb-2"
                >
                  {t.form.email}
                </label>
                <input
                  id="form-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.form.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-background text-text-main placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  disabled={isSending}
                  autoComplete="email"
                />
              </div>

              {status === 'success' && (
                <p className="p-4 rounded-xl bg-primary/10 text-primary font-medium text-center text-sm">
                  {t.form.success}
                </p>
              )}

              {status === 'error' && errorMessage && (
                <p className="p-4 rounded-xl bg-red-50 text-red-700 font-medium text-center text-sm">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="btn btn-primary w-full py-4 disabled:opacity-70 disabled:pointer-events-none"
              >
                {isSending ? (
                  <>
                    <Loader2 size={22} className="animate-spin shrink-0" />
                    {t.form.sending}
                  </>
                ) : (
                  t.form.submit
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StudentFormModal
