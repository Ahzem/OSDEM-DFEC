import nodemailer from 'nodemailer';

export const handler = async (event) => {
  const { name, email, phone } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fec.dikwella@gmail.com', // Your email
      pass: 'DFEC@dikwella2018',  // Your email password or app password
    },
  });

  const mailOptions = {
    from: email,
    to: 'dfec.dikwella@gmail.com',
    subject: 'Contribution Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send message', error: error.toString() }),
    };
  }
};
