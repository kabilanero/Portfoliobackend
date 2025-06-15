const transporter = require('../config/mailer');

const sendMail = async (req, res) => {
  const { name, jobType, description } = req.body;

  if (!name || !jobType || !description) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: 'New Job Invitation Submission',
    html: `
      <h3>New Submission from Homebutton Form</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Job Type:</strong> ${jobType}</p>
      <p><strong>Description:</strong> ${description}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Server error: failed to send email' });
  }
}

module.exports = { sendMail };
