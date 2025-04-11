const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    service : "gmail",
    auth: {
        user: "",
        pass: "",
    }
  })

  const mailOptions =  {
    from : "",
    to: options.email,
    subject: options.subject,
    text: options.message,

  }

  await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;