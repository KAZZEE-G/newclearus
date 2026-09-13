const { Resend } = require('resend');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    res.status(500).json({ error: 'Email service is not configured yet' });
    return;
  }

  var data = req.body || {};
  var name = data.name || 'Not provided';
  var email = data.email || 'Not provided';
  var company = data.company || 'Not provided';

  var lines = [
    'Name: ' + name,
    'Email: ' + email,
    'Company: ' + company,
    'Sector: ' + (data.sector || 'Not provided'),
    'Company size: ' + (data.size || 'Not provided'),
    'Location: ' + (data.location || 'Not provided'),
    'Interested in: ' + (data.interest || 'Not provided'),
    'Looking for: ' + (data.goal || 'Not provided'),
    'Phone: ' + (data.phone || 'Not provided'),
    'Message: ' + (data.message || 'None')
  ];

  try {
    var resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.CONTACT_FROM_ADDRESS || 'Newclearus Site <onboarding@resend.dev>',
      to: 'hi@newclearus.com',
      reply_to: email,
      subject: 'New enquiry from ' + name + ' (' + company + ')',
      text: lines.join('\n')
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Failed to send contact email:', err);
    res.status(500).json({ error: 'Failed to send' });
  }
};
