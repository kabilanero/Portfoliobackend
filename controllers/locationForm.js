const transporter = require('../config/mailer');

const sendenquiry=async (req,res) =>{
const { Email, Name, 'Mobile-number': Mobilenumber, Description } = req.body;

if(!Name || !Email || !Description || !Mobilenumber){
    return res.status(400).json({message:"all fields are required"})
}

const mailreply={
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: 'New Job Invitation Submission',
    html: `
      <h3>New Submission for hiring</h3>
      <p><strong>Name:</strong> ${Name}</p>
      <p><strong>Email:</strong> <a href="mailto:${Email}">${Email}</a></p>
      <p><strong>Mobile Number:</strong> <a href="tel:${Mobilenumber}">${Mobilenumber}</a></p>
      <p><strong>Description:</strong> ${Description}</p>
    `,
};
try {
    await transporter.sendMail(mailreply);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Server error: failed to send email' });
  }
}

module.exports={ sendenquiry }




