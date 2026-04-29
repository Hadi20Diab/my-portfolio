import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Basic validation
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || 'hadidiab33@gmail.com',
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2 style="color:#0070f3">New message from your portfolio</h2>
        <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">
          <tr><td style="padding:6px 12px;font-weight:600;color:#555">Name</td><td style="padding:6px 12px">${name}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600;color:#555">Email</td><td style="padding:6px 12px">${email}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600;color:#555">Subject</td><td style="padding:6px 12px">${subject}</td></tr>
        </table>
        <div style="margin-top:16px;padding:16px;background:#f5f5f5;border-radius:8px;font-family:sans-serif;font-size:15px;white-space:pre-wrap">${message}</div>
      `,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return Response.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 })
  }
}
