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
  { value: 1, label: 'Ad hoc / Initial' },
  { value: 2, label: 'Developing' },
  { value: 3, label: 'Defined' },
  { value: 4, label: 'Managed' },
  { value: 5, label: 'Optimized' },
] as const

export const dimensions: Record<DimensionKey, { label: string; shortLabel: string; description: string }> = {
  technology: { label: 'Scalable platform', shortLabel: 'Platform', description: 'The architecture, workflows, integration model, and governance can absorb growth without compounding complexity.' },
  data: { label: 'Trusted data', shortLabel: 'Data', description: 'Priority operating and financial measures are defined, traceable, and reconcilable.' },
  ai: { label: 'Operationalized AI', shortLabel: 'AI', description: 'AI and advanced analytics are embedded in workflows and tied to measurable outcomes.' },
}

export const questions: Question[] = [
  {
    id: 'q1', dimension: 'technology', prompt: 'How would you rate your core technology’s scalability for new locations and acquisitions?', buyerLens: 'Architecture, technical debt, governance, acquisition onboarding, and system costs.', example: 'Choose the description that most closely matches how your platform works today.', scaleMin: 'Earlier maturity', scaleMax: 'More mature',
    maturityDescriptions: {
      1: 'Core technology varies by location, and new acquisitions require significant manual work.',
      2: 'Some scalable patterns exist, but onboarding still depends on workarounds.',
      3: 'A common platform approach is documented and generally used for new locations and acquisitions.',
      4: 'Platform performance, cost, and onboarding are consistently measured and governed.',
      5: 'The platform scales predictably through reusable patterns, automation, and continuous improvement.',
    },
  },
  {
    id: 'q2', dimension: 'technology', prompt: 'How consistently are systems, workflows, and reporting managed across locations?', buyerLens: 'Whether growth is creating one operating platform or more variation.', example: 'Choose the description that most closely matches how consistently locations operate today.', scaleMin: 'Earlier maturity', scaleMax: 'More mature',
    maturityDescriptions: {
      1: 'Systems, workflows, and reporting vary widely by location with limited standards.',
      2: 'Some common standards exist, but teams apply them inconsistently.',
      3: 'Core systems, workflows, and reporting standards are documented and generally followed.',
      4: 'Adoption, exceptions, and performance are measured and actively governed across locations.',
      5: 'Standards are continuously improved using comparable data, automation, and controlled change.',
    },
  },
  {
    id: 'q3', dimension: 'data', prompt: 'How reliably can you produce consistent KPIs and reconcile them to source systems and financial results?', buyerLens: 'Source-to-report lineage, manual reconciliation, KPI consistency, and cross-location comparability.', example: 'Choose the description that most closely matches your reporting and reconciliation process today.', scaleMin: 'Earlier maturity', scaleMax: 'More mature',
    maturityDescriptions: {
      1: 'KPI definitions and reconciliations are mostly manual, inconsistent, or undocumented.',
      2: 'Some shared KPIs and checks exist, but gaps and rework remain.',
      3: 'Core KPIs are defined, traceable to source systems, and generally reconciled.',
      4: 'Data quality, lineage, and reconciliation performance are measured and governed.',
      5: 'Reporting is automated, trusted, and continuously improved with timely controls.',
    },
  },
  {
    id: 'q4', dimension: 'data', prompt: 'How clearly can leaders see the drivers of revenue, margin, productivity, and working capital?', buyerLens: 'Whether management can diagnose performance drivers, not just report outcomes.', example: 'Choose the description that most closely matches the decisions your operating team can make from data today.', scaleMin: 'Earlier maturity', scaleMax: 'More mature',
    maturityDescriptions: {
      1: 'Leaders mainly see outcomes; the drivers of performance are hard to isolate.',
      2: 'Some driver views exist, but they are delayed, manual, or limited to certain areas.',
      3: 'Standard dashboards and analyses show the main performance drivers across the business.',
      4: 'Driver metrics are monitored consistently, linked to action, and reviewed through management routines.',
      5: 'Decision-makers use timely, predictive insights and automated alerts to improve performance continuously.',
    },
  },
  {
    id: 'q5', dimension: 'ai', prompt: 'How would you rate your AI capability—from daily use to measurable business impact?', buyerLens: 'Whether AI is trusted, adopted in workflows, governed, and tied to measurable outcomes.', example: 'Choose the description that most closely matches how AI is used and measured in your business today.', scaleMin: 'Earlier maturity', scaleMax: 'More mature',
    maturityDescriptions: {
      1: 'AI use is limited to ad hoc experiments with no consistent ownership, governance, or measured impact.',
      2: 'Individual teams use early tools or pilots, but adoption and outcomes are inconsistent.',
      3: 'Priority AI use cases are defined, governed, and used in selected workflows with baseline measures.',
      4: 'AI is consistently adopted, monitored, and tied to measurable business outcomes.',
      5: 'AI is embedded across relevant workflows, continuously improved, and scaled with strong governance and automation.',
    },
  },
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
