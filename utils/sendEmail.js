import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'
const SENDGRID_API_KEY = 'TDHilnLTTW2xI5XT5y52nA'
const sendEmail = async ({ name, email ,message}) => {
  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email
            }
          ],
          subject: 'Demo success :)'
        }
      ],
      from: {
        email: 'noreply@demo.com',
        name: 'Test SendGrid'
      },
      content: [
        {
          type: 'text/html',
          value: `Hello <b>${name}</b>, ${message}`
        }
      ]
    })
  })
}

export { sendEmail }
