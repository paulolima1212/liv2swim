import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { FormModalProvider } from './context/FormModalContext'
import { LanguageProvider } from './i18n/LanguageContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <FormModalProvider>
        <App />
      </FormModalProvider>
    </LanguageProvider>
  </StrictMode>,
)
