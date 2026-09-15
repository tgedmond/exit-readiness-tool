import type { AssessmentState } from './types'

const KEY = 'exit-readiness-assessment-v1'
export const loadState = (): AssessmentState | null => { try { const raw = localStorage.getItem(KEY); return raw ? JSON.parse(raw) : null } catch { return null } }
export const saveState = (state: AssessmentState) => { try { localStorage.setItem(KEY, JSON.stringify(state)) } catch { /* storage may be unavailable */ } }
export const clearState = () => { try { localStorage.removeItem(KEY) } catch { /* noop */ } }
