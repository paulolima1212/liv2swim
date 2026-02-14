import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react'

type FormModalContextValue = {
  isFormOpen: boolean
  openForm: () => void
  closeForm: () => void
}

const FormModalContext = createContext<FormModalContextValue | null>(null)

export function FormModalProvider({ children }: { children: ReactNode }) {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = useCallback(() => {
    setIsFormOpen(true)
  }, [])

  const closeForm = useCallback(() => {
    setIsFormOpen(false)
  }, [])

  return (
    <FormModalContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </FormModalContext.Provider>
  )
}

export function useFormModal() {
  const ctx = useContext(FormModalContext)
  if (!ctx) throw new Error('useFormModal must be used within FormModalProvider')
  return ctx
}
