import { describe, expect, it } from 'vitest'
import { enrichResult, scoreAnswers } from './scoring'
import type { Answer } from './types'

const all = (value: Answer) => Object.fromEntries(['q1', 'q2', 'q3', 'q4', 'q5'].map((id) => [id, value])) as Record<string, Answer>
const context = { vertical: 'Commercial services', exitHorizon: '>24 months', serviceTitanUser: 'Yes' }

describe('readiness scoring logic', () => {
  it('maps all-one answers to Foundation Builder', () => expect(scoreAnswers(all(1)).archetype.id).toBe('foundation-builder'))
  it('maps mid platform/data answers to Standardizing Scaler', () => expect(scoreAnswers({ ...all(5), q1: 3, q2: 3, q3: 3, q4: 3 }).archetype.id).toBe('standardizing-scaler'))
  it('maps strong platform/data with low AI to Data-Enabled Operator', () => expect(scoreAnswers({ ...all(5), q5: 2 }).archetype.id).toBe('data-enabled-operator'))
  it('maps all-five answers to AI-Enabled Value Creator', () => expect(scoreAnswers(all(5)).archetype.id).toBe('ai-enabled-value-creator'))
  it('adds context qualifiers without changing the score', () => { const result = enrichResult(scoreAnswers(all(5)), { ...context, exitHorizon: '<6 months' }); expect(result.overall).toBe(100); expect(result.qualifiers).toContain('Compressed Exit Runway'); const runwayResult = enrichResult(scoreAnswers(all(5)), { ...context, exitHorizon: '>24 months' }); expect(runwayResult.qualifiers).toContain('Next-Owner Upside') })
})
