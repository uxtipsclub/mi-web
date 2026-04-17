export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, name, courses } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const apiKey = process.env.BEEHIIV_API_KEY
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID

  if (!apiKey || !publicationId) {
    return res.status(500).json({ error: 'Server configuration error' })
  }

  try {
    const payload = {
      email,
      reactivate_existing: true,
      send_welcome_email: true,
      utm_source: 'experience-lab',
      utm_medium: 'waitlist',
      utm_campaign: courses?.length ? courses.join(', ') : 'general',
      custom_fields: name
        ? [{ name: 'First Name', value: name.split(' ')[0] }]
        : [],
    }

    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || 'Beehiiv error' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' })
  }
}
