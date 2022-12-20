import nodemailer from 'nodemailer';
const getEmailTransporter = () =>
  nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: process.env.EMAIL_FROM_USER,
      pass: process.env.EMAIL_FROM_PASSWORD,
    },
  });

export const sendEmail = (to, subject, body) => {
  const transporter = getEmailTransporter();
  const emailOptions = {
    from: process.env.EMAIL_FROM_USER,
    to,
    subject,
    html: body,
  };
  transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.log(err);
      throw new Error(err);
    } else {
      return info.response;
    }
  });
};
