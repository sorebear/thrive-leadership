// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import stripe from 'stripe';

exports.handler = (event, context, callback) => {
  console.log('createCharge');
  console.log(event);
  const requestBody = JSON.parse(event.body);
  console.log(requestBody);

  const token = requestBody.token.id;
  const amount = requestBody.charge.amount;
  const currency = requestBody.charge.currency;

  console.log('STRIPE:', stripe);
  console.log('Stripe Secret Key:', process.env.STRIPE_SECRET_KEY);
  console.log('TOKEN', token, 'AMOUNT', amount, 'CURRENCY', currency);
  // stripe.charges.create({
  //   amount,
  //   currency,
  //   description: 'Serverless Stripe Test Charge',
  //   source: token,
  // }).then(charge => {
  //   console.log(charge);
  //   const response = {
  //     statusCode: 200,
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //     body: JSON.stringify({
  //       message: 'Charge processed successfully!',
  //       charge,
  //     }),
  //   };
  //   callback(null, response);
  // }).catch(err => {
  //   console.log(err);
  //   const response = {
  //     statusCode: 500,
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //     body: JSON.stringify({
  //       error: err.message,
  //     }),
  //   };
  //   callback(null, response);
  // });
}