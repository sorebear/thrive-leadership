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

  sendAdminNotificationOfPurchase() {
    const { name, email, message } = this.state;
    axios.post(config.email.apiUrl, {
      name,
      email,
      message
    }).then(res => {
      console.log('SUCCESS', res);
    }).catch(err => {
      console.log('ERROR', err);
    });
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
      this.props.callback();

    }).catch((err) => {
      console.log('There was an error sending the info', err);
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