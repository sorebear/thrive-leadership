const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = (event, context, callback) => {
  console.log('createCharge');
  console.log(event);
  const requestBody = JSON.parse(event.body);
  console.log(requestBody);

  const token = requestBody.token.id;
  const amount = requestBody.charge.amount;
  const currency = requestBody.charge.currency;

  console.log('TOKEN', token, 'AMOUNT', amount, 'CURRENCY', currency);
  return stripe.charges.create({
    amount,
    currency,
    description: 'Serverless Stripe Test Charge',
    source: token,
  }).then(charge => {
    console.log(charge);
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        message: 'Charge processed successfully!',
        charge,
      }),
    };
    callback(null, response);
  }).catch(err => {
    console.log(err);
    const response = {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: err.message,
      }),
    };
    callback(null, response);
  });
}