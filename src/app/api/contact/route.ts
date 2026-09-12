import { Resend } from 'resend'

const CONTACT_EMAIL = 'sales@ilyasgems.com'

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json()

  if (!name || !email || !subject) {
    return Response.json({ error: 'Name, email and subject are required.' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: 'Ilyas Gems <sales@ilyasgems.com>',
    to: [CONTACT_EMAIL],
    replyTo: email,
    subject: `New inquiry: ${subject}`,
    text: `From: ${name} <${email}>\n\n${message || '(no message provided)'}`,
  })

  if (error) {
    console.error('Failed to send contact email:', error)
    return Response.json({ error: 'Failed to send message. Please try again later.' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
