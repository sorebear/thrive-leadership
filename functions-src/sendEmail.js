const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

exports.handler = (event, context, callback) => {
  const requestBody = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'caitbaird@gmail.com',
      pass: process.env.EMAIL_PASSWORD
    }
  })

  const mailOptions = {
    from: `"${requestBody.name}" ${requestBody.email}`,
    to: 'soren@sorenbaird.com',
    subject: `New ThriveLeadership.net Message from ${senderName}`,
    text: requestBody.message,
    html: `<p>${requestBody.message}</p>`
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (error) {
      console.log(error);
      callback(null, {
        statusCode: 500,
        body: JSON.stringify(error),
      });
    } else {
      console.log('Message Sent:', + info.response);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(info.response),
      })
    }
  })

  


}