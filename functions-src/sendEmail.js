const nodemailer = require('nodemailer');

exports.handler = (event, context, callback) => {
  console.log('My Test Variable', process.env.TEST_VAR);
  console.log('EVENT BOYD', event.body);
  console.log('PARSED EVENT BODY', JSON.parse(event.body));
  console.log('EVENT', event);
  const requestBody = JSON.parse(event.body);
  
  const senderName = requestBody.name;
  const senderEmail = requestBody.email;
  const senderMessage = requestBody.message;

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(`Thrive Leadership: You got a message from ${senderName} at ${senderEmail}: ${senderMessage}`),
  });
}