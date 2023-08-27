const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "nandyadav720@gmail.com",
      pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD'
    }
  });
  
  
  const sendEmail = async (payload) => {
    const { from, to, message } = payload;
     const info = await transporter.sendMail({
      from: from.toString(), // sender address
      to: to.toString, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: message.toString(), // html body
    });
    return info.messageId;
  
  }
  
  module.exports = { sendEmail };
  