import React from 'react';
// import CheckoutButton from './CheckoutButton';
import axios from 'axios';
import config from '../client-config';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requiredInfo: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        addressStreet: '',
        addressCity: '',
        addressState: '',
        addressZip: '',
        shortAnswer1: '',
        shortAnswer2: '',
        shortAnswer3: '',
      },
      optionalInfo: {
        preferredName: '',
        referral: '',
        birthDate: '',
      },
      registrationComplete: false,
      registrationError: false
    };

    this.handleRequiredInputUpdate = this.handleRequiredInputUpdate.bind(this);
    this.handleOptionalInputUpdate = this.handleOptionalInputUpdate.bind(this);
    this.emailNotificationOfNewRegistrant = this.emailNotificationOfNewRegistrant.bind(this);
    this.registrationError = this.registrationError.bind(this);
  }

  emailNotificationOfNewRegistrant() {
    this.setState({
      registrationComplete: true,
    });
    const allInfo = { ...this.state.requiredInfo, ...this.state.optionalInfo, type: 'newRegistrant', paid: this.props.amount };
    axios.post(config.email.apiUrl, allInfo).then(res => {
      console.log('SUCCESS', res);
    }).catch(err => {
      console.log('ERROR', err);
    });
  }

  registrationError() {
    this.setState({
      registrationError: true
    });
  }

  handleRequiredInputUpdate(e) {
    const { requiredInfo } = this.state;
    requiredInfo[e.target.id] = e.target.value;
    this.setState({
      requiredInfo: { ...requiredInfo }
    });
  }

  handleOptionalInputUpdate(e) {
    const { optionalInfo } = this.state;
    optionalInfo[e.target.id] = e.target.value;
    this.setState({
      optionalInfo: { ...optionalInfo }
    });
  }

  validateInput() {
    for (let inputField in this.state.requiredInfo) {
      if (!this.state.requiredInfo[inputField].length) {
        return false;
      }
    }
    return true;
  }

  render() {
    return this.state.registrationError ? (
      <div>
        <h3>We're sorry, there was an error with your registration.</h3>
        <p>Please send us a message so we can resolve the issue.</p>
        <ul className="actions">
          <li><input type="button" value="Close" onClick={this.props.closeArticle} /></li>
        </ul>
      </div>
    ) : this.state.registrationComplete ? (
      <div>
        <h3>Thank you! Your registration is complete.</h3>
        <br/>
        <p>You will receive an email receipt within 24 hours. If you have any questions or concerns, please send us a message.</p>
        <ul className="actions">
          <li><input type="button" value="Close" onClick={this.props.closeArticle} /></li>
        </ul>
      </div>
    ) : (
      <div>
        <div>
          <div>
            <h3>Location</h3>
          </div>
          <div>
            <p className="mb-0">5882 Luckie Ave</p>
            <p>29 Palms, CA 92277</p>
          </div>

          <div>
            <h3>Dates</h3>
          </div>
          <div>
            <p className="mb-0">Saturday, October 13th 9:00-6:00pm</p>
            <p>Sunday, October 14th 9:00-6:00pm</p>
          </div>
          
          <div>
            <h3>Price</h3>
          </div>
          <div>
            {/* { this.props.amount <= 7500 ? <p className="mb-0">Super Early Bird (register by August 26th) - $75</p> : ''}
            <p className="mb-0">Early Bird (register by September 23rd) - $100</p>
            <p>General (register by October 11th) - $125</p> */}
            <p>Sorry, registration is closed.</p>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="field half first">
            <label htmlFor="firstName">First Name*</label>
            <input
              required
              type="text"
              name="firstName"
              autoComplete="given-name"
              placeholder="Jonathan"
              id="firstName"
              onChange={this.handleRequiredInputUpdate}
              value={this.state.requiredInfo.firstName} />
          </div>
          <div className="field half">
            <label htmlFor="email">Preferred Name</label>
            <input
              type="text"
              name="preferredName"
              placeholder="Johnny"
              autoComplete="nickname"
              id="preferredName"
              onChange={this.handleOptionalInputUpdate}
              value={this.state.optionalInfo.preferredName} />
          </div>

          <div className="field half first">
            <label htmlFor="lastName">Last Name*</label>
            <input
              required
              type="text"
              name="lastName"
              placeholder="Karate"
              autoComplete="family-name"
              id="lastName"
              onChange={this.handleRequiredInputUpdate}
              value={this.state.requiredInfo.lastName} />
          </div>
          <div className="field half">
            <label htmlFor="birthDate">Date Of Birth</label>
            <input
              type="text"
              name="birthDate"
              autoComplete="bday"
              id="birthDate"
              placeholder="06/17/1985"
              onChange={this.handleOptionalInputUpdate}
              value={this.state.optionalInfo.birthDate} />
          </div>

          <div className="field half first">
            <label htmlFor="email">Email*</label>
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              placeholder="user@sample.com"
              id="email"
              onChange={this.handleRequiredInputUpdate}
              value={this.state.requiredInfo.email} />
          </div>

          <div className="field half">
            <label htmlFor="phone">Phone Number*</label>
            <input
              required
              type="text"
              name="phone"
              placeholder="555-555-5555"
              autoComplete="tel-national"
              id="phone"
              onChange={this.handleRequiredInputUpdate}
              value={this.state.requiredInfo.phone} />
          </div>
          <div className="field">
            <label htmlFor="addressStreet">Street Address*</label>
            <input
              required
              type="text"
              name="addressStreet"
              autoComplete="address-line1"
              placeholder="285 E Walnut St"
              id="addressStreet"
              onChange={this.handleRequiredInputUpdate}
              value={this.state.requiredInfo.addressStreet} />
          </div>

          <div className="field half first">
            <label htmlFor="addressCity">City*</label>
            <input
              required
              type="text"
              name="addressCity"
              autoComplete="address-level2"
              placeholder="Pasadena"
              id="addressCity"
              onChange={this.handleRequiredInputUpdate}
              value={this.state.requiredInfo.addressCity} />
          </div>
          <div className="field half">
            <label htmlFor="addressState">State*</label>
            <input
              required
              type="text"
              name="addressState"
              autoComplete="address-level1"
              placeholder="CA"
              id="addressState"
              onChange={this.handleRequiredInputUpdate}
              value={this.state.requiredInfo.addressState} />
          </div>

          <div className="field half first">
            <label htmlFor="addressZip">Zip Code*</label>
            <input
              required
              type="text"
              name="addressZip"
              placeholder="91101"
              autoComplete="postal-code"
              id="addressZip"
              onChange={this.handleRequiredInputUpdate}
              value={this.state.requiredInfo.addressZip} />
          </div>
          <div className="field half">
            <label htmlFor="referral">Person Who Referred Me</label>
            <input
              type="text"
              name="referral"
              autoComplete="address"
              placeholder="Caitlin Baird"
              id="referral"
              onChange={this.handleOptionalInputUpdate}
              value={this.state.optionalInfo.referral} />
          </div>
          

          <div className="field">
            <label htmlFor="shortAnswer1">1. The first area of my leadership I'd like clarity in is:*</label>
            <textarea
              required
              name="shortAnswer1" 
              id="shortAnswer1" 
              rows="4" 
              onChange={this.handleRequiredInputUpdate}
              value={this.state.requiredInfo.shortAnswer1}>
            </textarea>
          </div>
          <div className="field">
            <label htmlFor="shortAnswer2">2. The second area of my leadership I'd like clarity in is:*</label>
            <textarea
              required
              name="shortAnswer2" 
              id="shortAnswer2" 
              rows="4" 
              onChange={this.handleRequiredInputUpdate}
              value={this.state.requiredInfo.shortAnswer2}>
            </textarea>
          </div>
          <div className="field">
            <label htmlFor="shortAnswer3">3. The third area of my leadership I'd like clarity in is:*</label>
            <textarea 
              required
              name="shortAnswer3" 
              id="shortAnswer3" 
              rows="4" 
              onChange={this.handleRequiredInputUpdate}
              value={this.state.requiredInfo.shortAnswer3}>
            </textarea>
          </div>
          <ul className="actions">
            <li>
              {/* { this.validateInput() ?
                <div className="checkout-button-container">
                  <CheckoutButton
                    amount={this.props.amount}
                    registrationSuccess={this.emailNotificationOfNewRegistrant} 
                    registrationError={this.registrationError}
                    onNetworkRequestStart={this.props.onNetworkRequestStart}
                    onNetworkRequestEnd={this.props.onNetworkRequestEnd}
                  />
                </div> :
                <button>Please Fill Required Fields</button> } */}
              <button disabled>Registration is Closed</button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default Register;
