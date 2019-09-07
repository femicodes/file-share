import nodemailer from 'nodemailer';

const sendMail = (from, to, message, postID) => {
  const downloadLink = `http://localhost:3000/share/${postID}`;
  const output = `
    <p>${from} has sent you a file(s). Click <a href="${downloadLink}">here</a> to download.</p>

    ${message === '' ? '' : `<h3>Message</h3><p>${message}</p>`}
  `;

  const transport = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 2525,
    secure: false,
    auth: {
      user: 'postmaster@sandbox0405f00fad074d9fa8d9d1c45283b8c0.mailgun.org',
      pass: '1866faa5d241310134c767aac3a78f4a-4167c382-87d33207',
    },
  });

  const mailOptions = {
    from: '"Share" noreply@share.io',
    to,
    subject: '[Share] Download Invitation',
    text: 'Upgrade your browser abeg.',
    html: output,
  };

  transport.sendMail(mailOptions);
};

export default sendMail;
