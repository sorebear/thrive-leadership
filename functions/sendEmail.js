exports.handler = (event, context, callback) => {
  console.log('My Test Variable', process.env.TEST_VAR);

  const requestBody = JSON.parse(event.body);
  
  const senderName = requestBody.name;
  const senderEmail = requestBody.email;
  const senderMessage = requestBody.message;

  callback(null, {
    statusCode: 200,
    body: `Thrive Leadership: You got a message from ${senderName} at ${senderEmail}: ${senderMessage}`,
  });
}