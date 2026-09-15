import type { Archetype, DimensionKey, Question } from './types'

export const brand = {
  event: 'Pantheon happy hour',
  eyebrow: 'Technology-enabled exit readiness',
  title: 'Can your technology, data, and AI story withstand the next buyer’s questions?',
  disclaimer: 'Directional pulse based on self-reported information. This is not a valuation, audit, or diligence opinion, and prototype thresholds are not industry benchmarks.',
  colors: { ink: '#101827', navy: '#102c4e', teal: '#22b8a7', gold: '#f1b84b', mist: '#eef4f3' },
}

export const contextOptions = {
  role: ['Operating partner', 'Portfolio executive', 'Founder / operator', 'Deal team', 'Investment banker / lender', 'Other'],
  vertical: ['Commercial services', 'Residential services', 'Mixed services', 'Other field services'],
  businessModel: ['Project-based', 'Route-based', 'Recurring / subscription', 'Mixed model'],
  revenueBand: ['Under $25M', '$25M–$100M', '$100M–$500M', '$500M+'],
  locations: ['1–5', '6–25', '26–100', '100+'],
  acquisitionPace: ['None planned', 'Occasional', 'Active / multiple per year', 'Building a platform'],
  holdStage: ['Prospective investment', 'Early hold', 'Mid-hold', 'Preparing for exit', 'Existing portfolio company'],
  exitHorizon: ['<6 months', '6–12 months', '12–24 months', '>24 months', 'Unknown'],
  platform: ['ServiceTitan', 'Another standardized platform', 'Multiple field-service platforms', 'Custom / legacy', 'Unsure'],
  instanceModel: ['Single instance', 'Governed multi-instance / multi-tenant', 'Locally managed multi-instance', 'Multi-platform', 'Unsure'],
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
  buyerEvidence: { label: 'Buyer-ready evidence', shortLabel: 'Evidence', description: 'Leadership can defend the value created and the credible upside remaining.' },
}

export const questions: Question[] = [
  { id: 'q1', dimension: 'technology', prompt: 'Can the core technology platform scale to more locations and acquisitions without adding complexity?', buyerLens: 'Architecture, technical debt, governance, acquisition onboarding, and system costs.', example: 'Think about how a new location or acquisition is onboarded.', scaleMin: 'Fragmented / not scalable', scaleMax: 'Scales cleanly' },
  { id: 'q2', dimension: 'technology', prompt: 'Across locations or instances, are configurations, workflows, definitions, and reports managed to one common standard?', buyerLens: 'Whether growth is creating one operating platform or more variation.', example: 'A multi-instance model can still be strong when it is intentional and governed.', scaleMin: 'No common standard', scaleMax: 'One enterprise standard' },
  { id: 'q3', dimension: 'data', prompt: 'Can you produce consistent KPIs and reconcile them to source systems and financial results?', buyerLens: 'Source-to-report lineage, manual reconciliation, KPI consistency, and cross-location comparability.', example: 'Consider the monthly close and the confidence leaders have in the numbers.', scaleMin: 'Inconsistent / manual', scaleMax: 'Consistent and reconciled' },
  { id: 'q4', dimension: 'data', prompt: 'Can leaders see what drives revenue, margin, productivity, and working capital at the job, branch, customer, or technician level?', buyerLens: 'Whether management can diagnose performance drivers, not just report outcomes.', example: 'Focus on the decisions your operating team can make from the data today.', scaleMin: 'Cannot see the drivers', scaleMax: 'Clear driver-level insight' },
  { id: 'q5', dimension: 'ai', prompt: 'Are AI and advanced analytics used in daily workflows across the business?', buyerLens: 'Data readiness, adoption, governance, reproducibility, and workflow integration.', example: 'Count capabilities people use in the flow of work, not just pilots or roadmap ideas.', scaleMin: 'No production use', scaleMax: 'Embedded and adopted' },
  { id: 'q6', dimension: 'ai', prompt: 'Can management quantify the revenue, margin, productivity, customer, or working-capital impact of AI?', buyerLens: 'Whether AI value is measurable and connected to operating or financial outcomes.', example: 'Think about baseline, measurement owner, and realized impact.', scaleMin: 'No measured impact', scaleMax: 'Measured, repeatable impact' },
  { id: 'q7', dimension: 'buyerEvidence', prompt: 'Can leadership show how technology, data, and AI investments created measurable value during the hold?', buyerLens: 'Whether value created is documented, quantified, and defensible.', example: 'Consider the evidence management could share in a buyer session.', scaleMin: 'Hard to prove value', scaleMax: 'Clear evidence of value' },
  { id: 'q8', dimension: 'buyerEvidence', prompt: 'Is there a documented roadmap that addresses known risks and shows the next owner where more value can be created?', buyerLens: 'Risk remediation, management preparedness, and the next-owner upside case.', example: 'A roadmap should connect priorities to owners, evidence, and timing.', scaleMin: 'No credible roadmap', scaleMax: 'Clear next-owner roadmap' },
]

export const archetypes: Archetype[] = [
  { id: 'foundation-builder', name: 'Foundation Builder', strapline: 'Establish the buyer-ready foundation', description: 'Technology is fragmented or inconsistently governed, reporting relies heavily on manual work, and AI activity is limited or experimental.', valuePath: 'Build the foundation', actions: ['Define a future-state architecture and platform / tenant strategy.', 'Create a KPI framework and data roadmap.', 'Prioritize remediation against the next buyer’s likely questions.'], signal: 'Technology strategy + data foundation' },
  { id: 'standardizing-scaler', name: 'Standardizing Scaler', strapline: 'Turn scale into one operating platform', description: 'Core systems are in place, but locations, brands, instances, or tenants use them differently.', valuePath: 'Scale and optimize', actions: ['Standardize processes, configurations, and platform governance.', 'Build an acquisition-integration playbook.', 'Enable cross-location reporting and consistent operating standards.'], signal: 'Platform standardization + acquisition integration' },
  { id: 'data-enabled-operator', name: 'Data-Enabled Operator', strapline: 'Convert trusted data into action', description: 'The platform and data foundation are largely scalable and trusted. Reporting is credible, but AI and advanced optimization remain limited.', valuePath: 'Scale and optimize', actions: ['Identify and quantify high-value analytics and AI use cases.', 'Build an operational-intelligence roadmap.', 'Execute targeted value-creation initiatives with measurement owners.'], signal: 'AI roadmap + operational intelligence' },
  { id: 'ai-enabled-value-creator', name: 'AI-Enabled Value Creator', strapline: 'Scale and defend measurable AI value', description: 'Technology and data are mature; selected AI capabilities are in production and generating measurable outcomes.', valuePath: 'Validate and monetize', actions: ['Validate and scale use cases with clear governance.', 'Quantify impact and institutionalize value measurement.', 'Translate AI performance into a credible buyer narrative.'], signal: 'AI scaling + value quantification' },
  { id: 'buyer-ready-value-compounder', name: 'Buyer-Ready Value Compounder', strapline: 'Validate, monetize, and extend the advantage', description: 'Platform architecture is scalable, data is trusted, AI is operationalized, and management has a clear evidence-backed value narrative.', valuePath: 'Validate and monetize', actions: ['Validate value creation and prepare the technology / AI sell-side narrative.', 'Equip management for diligence and likely buyer questions.', 'Define the next-owner upside roadmap.'], signal: 'Sell-side readiness + next-owner value creation' },
]

export const sponsorCopy = {
  piper: 'Buyer lens: pending sponsor approval. Use this space for approved commentary on evidence, credibility, transaction readiness, and remaining upside.',
  serviceTitan: 'Platform lens: pending sponsor approval. Use this space for approved commentary on standardized execution, enterprise visibility, and advanced capabilities.',
  westMonroe: 'Value lens: connect the readiness signal to technology strategy, standardization, data, AI execution, operating-model change, and value realization.',
  contacts: { piper: '[Piper Sandler contact pending]', serviceTitan: '[ServiceTitan contact pending]', westMonroe: '[West Monroe event owner pending]' },
  privacyUrl: '#privacy-link-pending',
  webhookUrl: '',
}
