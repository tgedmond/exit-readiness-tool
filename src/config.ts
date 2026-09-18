import type { Archetype, DimensionKey, Question } from './types'

export const brand = {
  event: 'Pantheon happy hour',
  eyebrow: 'Technology-enabled exit readiness',
  title: 'Can your technology, data, and AI story withstand the next buyer’s questions?',
  disclaimer: 'Directional pulse based on self-reported information. This is not a valuation, audit, or diligence opinion, and prototype thresholds are not industry benchmarks.',
  colors: { ink: '#101827', navy: '#102c4e', teal: '#22b8a7', gold: '#f1b84b', mist: '#eef4f3' },
}

export const contextOptions = {
  vertical: ['Commercial services', 'Residential services', 'Mixed services', 'Other field services'],
  exitHorizon: ['<6 months', '6–12 months', '12–24 months', '>24 months', 'Unknown'],
  serviceTitanUser: ['Yes', 'No'],
}

export const maturityScale = [
  { value: 1, label: 'Not in place' },
  { value: 2, label: 'Limited' },
  { value: 3, label: 'Developing' },
  { value: 4, label: 'Strong' },
  { value: 5, label: 'Excellent capability' },
] as const

export const dimensions: Record<DimensionKey, { label: string; shortLabel: string; description: string }> = {
  technology: { label: 'Scalable platform', shortLabel: 'Platform', description: 'The architecture, workflows, integration model, and governance can absorb growth without compounding complexity.' },
  data: { label: 'Trusted data', shortLabel: 'Data', description: 'Priority operating and financial measures are defined, traceable, and reconcilable.' },
  ai: { label: 'Operationalized AI', shortLabel: 'AI', description: 'AI and advanced analytics are embedded in workflows and tied to measurable outcomes.' },
}

export const questions: Question[] = [
  { id: 'q1', dimension: 'technology', prompt: 'How would you rate your core technology’s scalability for new locations and acquisitions?', buyerLens: 'Architecture, technical debt, governance, acquisition onboarding, and system costs.', example: 'Think about how a new location or acquisition is onboarded.', scaleMin: 'Not scalable', scaleMax: 'Scales cleanly' },
  { id: 'q2', dimension: 'technology', prompt: 'How consistently are systems, workflows, and reporting managed across locations?', buyerLens: 'Whether growth is creating one operating platform or more variation.', example: 'Consider whether teams follow one governed standard or create local workarounds.', scaleMin: 'Not consistent', scaleMax: 'Highly consistent' },
  { id: 'q3', dimension: 'data', prompt: 'How reliably can you produce consistent KPIs and reconcile them to source systems and financial results?', buyerLens: 'Source-to-report lineage, manual reconciliation, KPI consistency, and cross-location comparability.', example: 'Consider the monthly close and the confidence leaders have in the numbers.', scaleMin: 'Not reliable', scaleMax: 'Highly reliable' },
  { id: 'q4', dimension: 'data', prompt: 'How clearly can leaders see the drivers of revenue, margin, productivity, and working capital?', buyerLens: 'Whether management can diagnose performance drivers, not just report outcomes.', example: 'Focus on the decisions your operating team can make from the data today.', scaleMin: 'Not clear', scaleMax: 'Very clear' },
  { id: 'q5', dimension: 'ai', prompt: 'How would you rate your AI capability—from daily use to measurable business impact?', buyerLens: 'Whether AI is trusted, adopted in workflows, governed, and tied to measurable outcomes.', example: 'Rate what people use in the flow of work and what management can measure—not just pilots or roadmap ideas.', scaleMin: 'No meaningful capability', scaleMax: 'Embedded with measurable impact' },
]

export const archetypes: Archetype[] = [
  { id: 'foundation-builder', name: 'Foundation Builder', strapline: 'Establish the buyer-ready foundation', description: 'Technology is fragmented or inconsistently governed, reporting relies heavily on manual work, and AI activity is limited or experimental.', valuePath: 'Build the foundation', actions: ['Define a future-state architecture and platform strategy.', 'Create a KPI framework and data roadmap.', 'Prioritize remediation against the next buyer’s likely questions.'], signal: 'Technology strategy + data foundation' },
  { id: 'standardizing-scaler', name: 'Standardizing Scaler', strapline: 'Turn scale into one operating platform', description: 'Core systems are in place, but locations, brands, or teams use them differently.', valuePath: 'Scale and optimize', actions: ['Standardize processes, configurations, and platform governance.', 'Build an acquisition-integration playbook.', 'Enable cross-location reporting and consistent operating standards.'], signal: 'Platform standardization + acquisition integration' },
  { id: 'data-enabled-operator', name: 'Data-Enabled Operator', strapline: 'Convert trusted data into action', description: 'The platform and data foundation are largely scalable and trusted. Reporting is credible, but AI and advanced optimization remain limited.', valuePath: 'Scale and optimize', actions: ['Identify and quantify high-value analytics and AI use cases.', 'Build an operational-intelligence roadmap.', 'Execute targeted value-creation initiatives with measurement owners.'], signal: 'AI roadmap + operational intelligence' },
  { id: 'ai-enabled-value-creator', name: 'AI-Enabled Value Creator', strapline: 'Scale and defend measurable AI value', description: 'Technology, data, and AI capabilities are mature enough to support measurable operating outcomes.', valuePath: 'Validate and monetize', actions: ['Validate and scale use cases with clear governance.', 'Quantify impact and institutionalize value measurement.', 'Translate AI performance into a credible buyer narrative.'], signal: 'AI scaling + value quantification' },
]

export const sponsorCopy = {
  piper: 'Buyer lens: pending sponsor approval. Use this space for approved commentary on evidence, credibility, transaction readiness, and remaining upside.',
  serviceTitan: 'Platform lens: pending sponsor approval. Use this space for approved commentary on standardized execution, enterprise visibility, and advanced capabilities.',
  westMonroe: 'Value lens: connect the readiness signal to technology strategy, standardization, data, AI execution, operating-model change, and value realization.',
  contacts: { piper: '[Piper Sandler contact pending]', serviceTitan: '[ServiceTitan contact pending]', westMonroe: '[West Monroe event owner pending]' },
  privacyUrl: '#privacy-link-pending',
  webhookUrl: '',
}
