import type { AssessmentResult, AssessmentState } from './types'

export type LeadPayload = { submissionId: string; eventName: string; timestamp: string; source: string; host: string; campaign: string; contact: AssessmentState['contact']; context: AssessmentState['context']; answers: AssessmentState['answers']; scores: Pick<AssessmentResult, 'overall'> & { technology: number; data: number; ai: number; buyerEvidence: number }; result: AssessmentResult; internal: { opportunitySignals: string[]; urgency: string } }
export const buildPayload = (state: AssessmentState, result: AssessmentResult): LeadPayload => ({ submissionId: state.submissionId ?? crypto.randomUUID(), eventName: 'pantheon_exit_readiness_assessment', timestamp: new Date().toISOString(), source: state.attribution.source, host: state.attribution.host, campaign: state.attribution.campaign, contact: state.contact, context: state.context, answers: state.answers, scores: { technology: result.dimensions[0].score, data: result.dimensions[1].score, ai: result.dimensions[2].score, buyerEvidence: result.dimensions[3].score, overall: result.overall }, result, internal: { opportunitySignals: result.opportunitySignals, urgency: result.urgency } })
export const submitLead = async (payload: LeadPayload): Promise<{ ok: boolean; submissionId: string }> => {
  if (import.meta.env.DEV) { await new Promise((r) => setTimeout(r, 300)); return { ok: true, submissionId: payload.submissionId } }
  const response = await fetch('/api/lead', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) })
  if (!response.ok) throw new Error('Submission failed. Please retry.')
  return { ok: true, submissionId: payload.submissionId }
}
