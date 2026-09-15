import { archetypes, dimensions, questions } from './config'
import type { Answer, AssessmentResult, ContextData, DimensionKey } from './types'

export const scoreAnswers = (answers: Partial<Record<string, Answer>>): AssessmentResult => {
  const dimensionScores = (Object.keys(dimensions) as DimensionKey[]).map((key) => {
    const qs = questions.filter((q) => q.dimension === key)
    const score = Math.round((((qs.reduce((sum, q) => sum + (answers[q.id] ?? 1), 0) / qs.length) - 1) / 4) * 100)
    return { key, ...dimensions[key], score }
  })
  const technology = dimensionScores.find((d) => d.key === 'technology')!.score
  const data = dimensionScores.find((d) => d.key === 'data')!.score
  const ai = dimensionScores.find((d) => d.key === 'ai')!.score
  const buyerEvidence = dimensionScores.find((d) => d.key === 'buyerEvidence')!.score
  const overall = Math.round(dimensionScores.reduce((sum, d) => sum + d.score, 0) / dimensionScores.length)
  const archetype = technology < 45 || data < 45 ? archetypes[0] : technology < 70 || data < 70 ? archetypes[1] : ai < 65 ? archetypes[2] : buyerEvidence < 70 ? archetypes[3] : archetypes[4]
  const qualifiers: string[] = []
  if (ai - Math.max(technology, data) >= 20) qualifiers.push('AI Ahead of the Foundation')
  if (technology >= 70 && data >= 70 && ai < 55) qualifiers.push('Untapped Intelligence Upside')
  if (Math.min(technology, data, ai) >= 65 && buyerEvidence < 60) qualifiers.push('Narrative Gap')
  return { archetype, dimensions: dimensionScores, overall, qualifiers, strengths: [], buyerQuestions: [], valuePath: archetype.valuePath, recommendedActions: archetype.actions, opportunitySignals: [archetype.signal], urgency: 'Build readiness into the operating model and compound value during the hold.' }
}

export const enrichResult = (result: AssessmentResult, context: ContextData): AssessmentResult => {
  const sorted = [...result.dimensions].sort((a, b) => b.score - a.score)
  const weak = [...result.dimensions].sort((a, b) => a.score - b.score)
  const qualifiers = [...result.qualifiers]
  if (context.instanceModel.toLowerCase().includes('multi') && (result.dimensions.find(d => d.key === 'technology')!.score < 70 || result.dimensions.find(d => d.key === 'data')!.score < 70)) qualifiers.push('Multi-Instance Complexity')
  if (context.exitHorizon === '<6 months' || context.exitHorizon === '6–12 months') qualifiers.push('Compressed Exit Runway')
  if (context.exitHorizon === '>24 months' && result.overall >= 70) qualifiers.push('Next-Owner Upside')
  const buyerQuestions = weak.slice(0, 2).map((d) => ({ technology: 'Can the current platform absorb the next acquisition without adding complexity?', data: 'Can KPI definitions and source-to-report lineage withstand buyer diligence?', ai: 'Is AI value repeatable, governed, adopted broadly, and supported by evidence?', buyerEvidence: 'Can management defend realized value and the next-owner upside case?' }[d.key]))
  const urgencyMap: Record<string, string> = { '<6 months': 'Focus on diligence defense, management preparation, and reducing process friction.', '6–12 months': 'Begin evidence preparation and targeted remediation immediately.', '12–24 months': 'Prioritize gaps that require sustained remediation.', '>24 months': 'Build readiness into the operating model and compound value during the hold.', Unknown: 'Use the archetype as a baseline for the hold-period roadmap.' }
  return { ...result, qualifiers: [...new Set(qualifiers)], strengths: sorted.slice(0, 2).map((d) => d.label), buyerQuestions, urgency: urgencyMap[context.exitHorizon] ?? urgencyMap.Unknown, opportunitySignals: [...new Set([result.archetype.signal, ...qualifiers.map((q) => q === 'Compressed Exit Runway' ? 'Exit readiness + sell-side advisory' : q === 'Narrative Gap' ? 'Value validation' : '')].filter(Boolean))] }
}
