require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }))

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New message from ${name} via your portfolio`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:auto;background:#1a1a2e;color:#fff;border-radius:12px;padding:32px;border:1px solid rgba(201,168,76,0.3)">
          <h2 style="color:#c9a84c;margin-top:0">New Portfolio Message 💌</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#94a3b8;width:80px">Name</td>
              <td style="padding:8px 0;font-weight:600">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#94a3b8">Email</td>
              <td style="padding:8px 0">
                <a href="mailto:${email}" style="color:#c9a84c">${email}</a>
              </td>
            </tr>
          </table>
          <hr style="border-color:rgba(255,255,255,0.1);margin:20px 0"/>
          <p style="color:#94a3b8;margin-bottom:8px">Message</p>
          <p style="background:rgba(255,255,255,0.05);padding:16px;border-radius:8px;line-height:1.7;margin:0">${message.replace(/\n/g, '<br/>')}</p>
          <p style="color:#64748b;font-size:12px;margin-top:24px;margin-bottom:0">
            Sent via Chansi Keren's portfolio · Reply directly to this email to respond.
          </p>
        </div>
      `,
    })
    res.json({ success: true })
  } catch (err) {
    console.error('Mail error:', err.message)
    res.status(500).json({ error: 'Failed to send email.' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
