import { describe, expect, it } from 'vitest'
import { enrichResult, scoreAnswers } from './scoring'
import type { Answer } from './types'

const all = (value: Answer) => Object.fromEntries(['q1','q2','q3','q4','q5','q6','q7','q8'].map((id) => [id, value])) as Record<string, Answer>
const context = { role: 'Operating partner', firm: '', vertical: 'Commercial services', businessModel: 'Mixed model', revenueBand: '', locations: '', acquisitionPace: '', holdStage: 'Mid-hold', exitHorizon: '>24 months', platform: 'ServiceTitan', instanceModel: 'Single instance' }

describe('prototype scoring logic', () => {
  it('maps all-one answers to Foundation Builder', () => expect(scoreAnswers(all(1)).archetype.id).toBe('foundation-builder'))
  it('maps mid platform/data answers to Standardizing Scaler', () => expect(scoreAnswers({ ...all(5), q1: 3, q2: 3, q3: 3, q4: 3 }).archetype.id).toBe('standardizing-scaler'))
  it('maps strong platform/data with low AI to Data-Enabled Operator', () => expect(scoreAnswers({ ...all(5), q5: 2, q6: 2 }).archetype.id).toBe('data-enabled-operator'))
  it('maps strong AI with evidence gap to AI-Enabled Value Creator', () => expect(scoreAnswers({ ...all(5), q7: 3, q8: 3 }).archetype.id).toBe('ai-enabled-value-creator'))
  it('maps all-five answers to Buyer-Ready Value Compounder', () => expect(scoreAnswers(all(5)).archetype.id).toBe('buyer-ready-value-compounder'))
  it('adds context qualifiers without changing the score', () => { const result = enrichResult(scoreAnswers(all(5)), { ...context, exitHorizon: '<6 months', instanceModel: 'Governed multi-instance / multi-tenant' }); expect(result.overall).toBe(100); expect(result.qualifiers).toContain('Compressed Exit Runway'); const runwayResult = enrichResult(scoreAnswers(all(5)), { ...context, exitHorizon: '>24 months', instanceModel: 'Governed multi-instance / multi-tenant' }); expect(runwayResult.qualifiers).toContain('Next-Owner Upside') })
})
