# Technology Enabled Exit Readiness Archetype

Mobile-first React + TypeScript prototype for the Pantheon happy hour. The experience collects three business details, five readiness ratings, and contact information before revealing an immediate readiness score and detailed profile.

## Run locally

```bash
pnpm install
pnpm dev
```

Quality checks:

```bash
pnpm test
pnpm build
```

## Configuration

- Edit `src/config.ts` for the five questions, 1–5 maturity labels, dimensions, archetypes, qualifiers, sponsor copy, contacts, privacy URL, and brand variables.
- `src/scoring.ts` contains the prototype classification logic from the brief. Thresholds are deliberately easy to change.
- Set `LEAD_WEBHOOK_URL` only in the server deployment environment. The browser posts to the server-side `/api/lead` route; CRM or webhook secrets never enter the client bundle.
- In local development, submissions use a client-side mock sink. In a deployed environment with no webhook configured, the server route returns a mock success so the flow remains testable.
- Query parameters `source`, `host`, and `campaign` are captured as safe attribution only. PII is not placed in URLs or analytics events.

## Product notes

Progress is saved to local storage, so a refresh or brief connectivity interruption does not discard responses. Submission IDs are stable in the saved state to support idempotency in a production adapter. Generate a real QR SVG with `pnpm qr [url]`; the target URL is also written to `outputs/qr-target.txt`.

Sponsor commentary, named contacts, consent language, privacy links, final thresholds, and production routing remain explicit placeholders pending approval. The tool is directional and must not be presented as a valuation, audit, diligence opinion, or validated industry benchmark.
