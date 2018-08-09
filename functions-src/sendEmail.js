const nodemailer = require('nodemailer');

exports.handler = (event, context, callback) => {
  const requestBody = JSON.parse(event.body);
  const senderName = requestBody.name;
  const senderEmail = requestBody.email;
  const senderMessage = requestBody.message;

  let transporter = nodemailer.createTransport();
  transporter.sendMail({
    from: `"${senderName}" ${senderEmail}`,
    to: 'soren@sorenbaird.com',
    subject: `New ThriveLeadership.net Message from ${senderName}`,
    text: senderMessage,
    html: `<p>${senderMessage}</p>`
  }, () => console.log('I am done.'));

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(`Thrive Leadership: You got a message from ${senderName} at ${senderEmail}: ${senderMessage}`),
  });
}