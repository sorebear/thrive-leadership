import fetch from 'isomorphic-unfetch';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import config from '../client-config';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.onToken = this.onToken.bind(this);
  }

  onToken(token) {
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
      this.props.registrationSuccess();
      console.log('Payment Successful', res);
    }).catch((err) => {
      this.props.registrationError();
      console.log('There was an error processing your payment', err);
    });
  }

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