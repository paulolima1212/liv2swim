// Default to TST until PRD cutover; override with VITE_SCHOOL_TRIAL_URL in production.
const DEFAULT_SCHOOL_TRIAL_URL =
  'https://liv2swim-tst.lz-plima1212.online/login?signup=1'

/** Página da escola onde a pessoa cria a conta e agenda a aula teste grátis. */
export function schoolTrialUrl(): string {
  const configured = import.meta.env.VITE_SCHOOL_TRIAL_URL?.trim()
  if (!configured) return DEFAULT_SCHOOL_TRIAL_URL
  // Ensure signup entry when only the school origin is configured.
  if (/\/login(\?|$)/.test(configured) || /signup=/.test(configured)) {
    return configured
  }
  return configured.replace(/\/?$/, '/login?signup=1')
}
