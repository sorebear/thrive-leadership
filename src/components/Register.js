import React from 'react';
import CheckoutButton from './CheckoutButton';

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
      }
    }

    this.handleInputUpdate = this.handleInputUpdate.bind(this);
  }

  handleInputUpdate(e) {
    console.log(e.target.id);

    const stateObject = function() {
      const returnObj = {};
      returnObj[e.target.id] = this.target.value;
        return returnObj;
    }.bind(event)();

    this.setState(stateObject);
  }

  validateInput() {
    for (let inputField in this.state.requiredInfo) {
      console.log(this.state.requiredInfo[inputField]);
      if (!this.state.requiredInfo[inputField]) {
        return false;
      }
    }
    return true;
  }

  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit}>
        <div className="field half first">
          <label htmlFor="firstName">First Name*</label>
          <input
            required
            type="text"
            name="firstName"
            autoComplete="given-name"
            placeholder="Jonathan"
            id="firstName"
            onChange={this.handleInputUpdate}
            value={this.state.firstName} />
        </div>
        <div className="field half">
          <label htmlFor="email">Preferred Name</label>
          <input
            required
            type="text"
            name="preferredName"
            placeholder="Johnny"
            autoComplete="nickname"
            id="preferredName"
            onChange={this.handleInputUpdate}
            value={this.state.preferredName} />
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
            onChange={this.handleInputUpdate}
            value={this.state.lastName} />
        </div>
        <div className="field half">
          <label htmlFor="birthDate">Date Of Birth</label>
          <input
            required
            type="text"
            name="birthDate"
            autoComplete="bday"
            id="birthDate"
            placeholder="06/17/1985"
            onChange={this.handleInputUpdate}
            value={this.state.birthDate} />
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
            onChange={this.handleInputUpdate} value={this.state.email} />
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
            onChange={this.handleInputUpdate}
            value={this.state.phone} />
        </div>

        <div className="field">
          <label htmlFor="addressStreet">Street Address*</label>
          <input
            required
            type="text"
            name="addressStreet"
            autoComplete="street-address address-line1"
            placeholder="285 E Walnut St"
            id="addressStreet"
            onChange={this.handleInputUpdate}
            value={this.state.addressStreet} />
        </div>
        <div className="field half first">
          <label htmlFor="addressCity">City*</label>
          <input
            required
            type="text"
            name="addressCity"
            autoComplete="street-address address-line2"
            placeholder="Pasadena"
            id="addressCity"
            onChange={this.handleInputUpdate}
            value={this.state.addressCity} />
        </div>

        <div className="field half">
          <label htmlFor="addressState">State*</label>
          <input
            required
            type="text"
            name="addressState"
            autoComplete="street-address address-line3"
            placeholder="CA"
            id="addressState"
            onChange={this.handleInputUpdate}
            value={this.state.addressState} />
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
            onChange={this.handleInputUpdate}
            value={this.state.addressZip} />
        </div>
        <div className="field half">
          <label htmlFor="referral">Person Who Referred Me</label>
          <input
            required
            type="text"
            name="referral"
            autoComplete="address"
            placeholder="Caitlin Baird"
            id="referral"
            onChange={this.handleInputUpdate}
            value={this.state.referral} />
        </div>
        

        <div className="field">
          <label htmlFor="shortAnswer1">1. The first area of my leadership I'd like clarity in is:*</label>
          <textarea 
            name="shortAnswer1" 
            id="shortAnswer1" 
            rows="4" 
            onChange={this.handleInputUpdate}
            value={this.state.shortAnswer1}>
          </textarea>
        </div>
        <div className="field">
          <label htmlFor="shortAnswer2">2. The second area of my leadership I'd like clarity in is:*</label>
          <textarea 
            name="shortAnswer2" 
            id="shortAnswer2" 
            rows="4" 
            onChange={this.handleInputUpdate}
            value={this.state.shortAnswer2}>
          </textarea>
        </div>
        <div className="field">
          <label htmlFor="shortAnswer3">3. The third area of my leadership I'd like clarity in is:*</label>
          <textarea 
            name="shortAnswer3" 
            id="shortAnswer3" 
            rows="4" 
            onChange={this.handleInputUpdate}
            value={this.state.shortAnswer3}>
          </textarea>
        </div>
        <ul className="actions">
          <li>
            { this.validateInput() ?  <CheckoutButton amount={this.props.amount} /> : <button>Nope</button> }
          </li>
        </ul>
      </form>
    );
  }
}

export default Register;