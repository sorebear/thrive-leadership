import fetch from 'isomorphic-unfetch';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import config from '../stripe-config';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.onToken = this.onToken.bind(this);
  }

  onToken(token) {
    console.log('I am sending this token', token);
    fetch(config.stripe.apiUrl, {
      method: 'POST',
      body: JSON.stringify({
        token,
        charge: {
          amount: this.props.amount,
          currency: config.stripe.currency,
        },
      }),
    }).then((res) => {
      console.log(res);
      const data = res.json();
      console.log('onToken');
      console.log(data);
    }).catch((err) => {
      console.log('There was an error sending the info', err);
    });
  }

  // async onToken(token) {
  //   const res = await fetch(config.stripe.apiUrl, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       token,
  //       charge: {
  //         amount: this.props.amount,
  //         currency: config.stripe.currency,
  //       },
  //     }),
  //   });
  //   const data = await res.json();
  //   console.log('onToken');
  //   console.log(data);
  // }

  render() {
    return (
      <StripeCheckout 
        name="Thrive Leadership"
        token={this.onToken}
        amount={this.props.amount}
        currency={config.stripe.currency}
        stripeKey={config.stripe.apiKey}
        allowRememberMe={false}
      />
    );
  }
}

export default Register;