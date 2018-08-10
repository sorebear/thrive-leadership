const nodemailer = require('nodemailer');

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: "OAuth2",
      user: 'caitbaird@gmail.com',
      clientId: '118365106713-di12r3mehr3kcu1of5d8619e6q6p3n1b.apps.googleusercontent.com',
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: '1/5eSLxOl_tkf0RFPfPEgWNx2wa1WwwLKSU98sP_U1z9o'
    }
  });

  const mailOptions = body.type === 'newMessage' ? 
  {
    from: `caitbaird@gmail.com`,
    to: 'soren@sorenbaird.com',
    subject: `New Thrive Leadership Message from ${body.name}`,
    text: `SENDER NAME: ${body.name}, SENDER EMAIL: ${body.email}, MESSAGE: ${body.message}`,
    html: `<p><strong>Sender Name:</strong> ${body.name}</p>
          <p><strong>Sender Email:</strong> ${body.email}</p>
          <br>
          <p><strong>Message:</strong></p>
          <p>${body.message}</p>`
  } : {
    from: `caitbaird@gmail.com`,
    to: 'soren@sorenbaird.com',
    subject: `New Thrive Leadership Registrant: ${body.firstName} ${body.lastName}`,
    text: `
    A new participant has registered for the Thrive Leadership Training. First Name:${body.firstName}, Preferred Name: ${body.preferredName}, Last Name: ${body.lastName}, Phone: ${body.phone}, Email: ${body.email}, Address: ${body.addressStreet}, ${body.addressCity}, ${body.addressState}, ${body.addressZip}, Date Of Birth: ${body.birthDate}, The Person Who Told You About Thrive Leadership: ${body.referral}, 1. The first area of my leadership I'd like clarity in is: ${body.shortAnswer1}, 2. The second area of my leadership I'd like clarity in is: ${body.shortAnswer2}, 3. The third area of my leadership I'd like clarity in is: ${body.shortAnswer3}.`,
    html: `
      <p>A new participant has registered for the Thrive Leadership Training.</p>
      <br>
      <p><strong>First Name:</strong> ${body.firstName}</p>
      <p><strong>Preferred Name:</strong> ${body.preferredName}</p>
      <p><strong>Last Name:</strong> ${body.lastName}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Address:</strong> ${body.addressStreet}, ${body.addressCity}, ${body.addressState}, ${body.addressZip}</p>
      <p><strong>Date Of Birth:</strong> ${body.birthDate}</p>
      <p><strong>Amount Paid</strong></p> ${body.paid}</p>
      <p><strong>The Person Who Told You About Thrive Leadership:</strong> ${body.referral}</p>
      <p><strong>1. The first area of my leadership I'd like clarity in is:</strong></p><p>${body.shortAnswer1}</p>
      <p><strong>2. The second area of my leadership I'd like clarity in is:</strong></p><p>${body.shortAnswer2}</p>
      <p><strong>3. The third area of my leadership I'd like clarity in is:</strong></p><p>${body.shortAnswer3}</p>`
  };

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