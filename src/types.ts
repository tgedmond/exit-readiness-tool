export type Screen = 'landing' | 'buyer-context' | 'context' | 'assessment' | 'immediate-result' | 'lead' | 'detail' | 'conversion'
export type DimensionKey = 'technology' | 'data' | 'ai'
export type Answer = 1 | 2 | 3 | 4 | 5

export type ContextData = {
  vertical: string; exitHorizon: string; serviceTitanUser: string
}

export type ContactData = {
  firstName: string; lastName: string; workEmail: string; firm: string; role: string; phone: string; companyAlias: string
}

export type AssessmentState = {
  screen: Screen; questionIndex: number; answers: Partial<Record<string, Answer>>; context: ContextData; contact: ContactData
  attribution: { source: string; host: string; campaign: string }; submitted: boolean; submissionId?: string
}

export type DimensionScore = { key: DimensionKey; label: string; shortLabel: string; score: number; description: string }

export type AssessmentResult = {
  archetype: Archetype; dimensions: DimensionScore[]; overall: number; qualifiers: string[]; strengths: string[]
  buyerQuestions: string[]; valuePath: string; recommendedActions: string[]; opportunitySignals: string[]; urgency: string
}

export type Question = { id: string; dimension: DimensionKey; prompt: string; buyerLens: string; example: string; scaleMin: string; scaleMax: string }
export type Archetype = { id: string; name: string; strapline: string; description: string; valuePath: string; actions: string[]; signal: string }
