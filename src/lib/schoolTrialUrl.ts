const DEFAULT_SCHOOL_TRIAL_URL = 'https://liv2swim.lz-plima1212.online/'

/** Página da escola onde a pessoa cria a conta e agenda a aula teste grátis. */
export function schoolTrialUrl(): string {
  const configured = import.meta.env.VITE_SCHOOL_TRIAL_URL?.trim()
  return configured || DEFAULT_SCHOOL_TRIAL_URL
}
