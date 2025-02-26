import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export async function POST(req) {
  try {
    const data = await req.json();
    const { type, formData } = data;

    let emailContent;
    if (type === 'connect') {
      emailContent = `
        New Connection Request:
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        
        Areas of Interest: ${formData.interests.join(', ')}
        
        What brings them here: ${formData.concernType.join(', ')}
        
        Message: ${formData.message}
        
        Meeting Preferences:
        Preferred Time: ${formData.preferredTime}
        Communication Type: ${formData.communicationType}
      `;
    } else if (type === 'contact') {
      emailContent = `
        New Contact Form Submission:
        
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        Message: ${formData.message}
      `;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `New ${type === 'connect' ? 'Connection' : 'Contact'} Request from ${formData.name}`,
      text: emailContent
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
} 