const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

exports.handler = (event, context, callback) => {
  const requestBody = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      xoauth2: xoauth2.createXOAuth2Generator({
        user: 'caitbaird@gmail.com',
        clientId: '118365106713-di12r3mehr3kcu1of5d8619e6q6p3n1b.apps.googleusercontent.com',
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: '1/5eSLxOl_tkf0RFPfPEgWNx2wa1WwwLKSU98sP_U1z9o'
      })
    }
  })

  const mailOptions = {
    from: `"${requestBody.name}" ${requestBody.email}`,
    to: 'soren@sorenbaird.com',
    subject: `New ThriveLeadership.net Message from ${requestBody.name}`,
    text: requestBody.message,
    html: `<p>${requestBody.message}</p>`
  }

  transporter.sendMail(mailOptions, (error, info) => {
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