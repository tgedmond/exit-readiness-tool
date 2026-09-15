type Request = { method?: string; body?: unknown; headers: Record<string, string | string[] | undefined> }
type Response = { status: (code: number) => Response; json: (body: unknown) => void; setHeader: (name: string, value: string) => void }

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'Method not allowed' }) }
  const payload = req.body as { submissionId?: string } | undefined
  if (!payload?.submissionId) return res.status(400).json({ error: 'submissionId is required' })
  const webhook = process.env.LEAD_WEBHOOK_URL
  if (!webhook) return res.status(200).json({ ok: true, submissionId: payload.submissionId, mode: 'mock' })
  const upstream = await fetch(webhook, { method: 'POST', headers: { 'content-type': 'application/json', 'idempotency-key': payload.submissionId }, body: JSON.stringify(payload) })
  if (!upstream.ok) return res.status(502).json({ error: 'Lead sink unavailable' })
  return res.status(200).json({ ok: true, submissionId: payload.submissionId })
}
