import nodemailer from "nodemailer";

export async function sendMail(userEmail, subject, message) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "omshankar2016@gmail.com",
      pass: process.env.GMAIL_APP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: process.env.SUPPORT_EMAIL,
    subject: "A user has a query!",
    text: `
        you recieved a new message from a contact form:

        from: ${userEmail}
        subject: ${subject}
        message:
        ${message}

        END OF MESSAGE..`,
    replyTo: userEmail,
  };

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log("mail sent:", info.messageId, info.response);
    
  } catch (error) {
    console.log("error sending mail:",error);
  }
}
