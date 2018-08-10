import React from 'react';
import CheckoutButton from './CheckoutButton';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      preferredName: '',
      lastName: '',
      phone: '',
      email: '',
      addressStreet: '',
      addressCity: '',
      addressState: '',
      birthDate: '',
      referral: '',
      shortAnswer1: '',
      shortAnswer2: '',
      shortAnswer3: '',
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

  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit}>
        <div className="field half first">
          <label htmlFor="firstName">First Name*</label>
          <input
            required
            type="text"
            name="firstName"
            autoComplete="name"
            id="firstName"
            onChange={this.handleInputUpdate}
            value={this.state.firstName} />
        </div>
        <div className="field half">
          <label htmlFor="email">Preferred First Name</label>
          <input
            required
            type="text"
            name="preferredName"
            autoComplete="name"
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
            autoComplete="name"
            id="lastName"
            onChange={this.handleInputUpdate} value={this.state.lastName} />
        </div>
        <div className="field half">
          <label htmlFor="phone">Phone Number*</label>
          <input
            required
            type="text"
            name="phone"
            autoComplete="phone"
            id="phone"
            onChange={this.handleInputUpdate}
            value={this.state.phone} />
        </div>
        <div className="field">
          <label htmlFor="shortAnswer1">1. The first area of my leadership I'd like clarity is:</label>
          <textarea 
            name="shortAnswer1" 
            id="shortAnswer1" 
            rows="4" 
            onChange={this.handleInputUpdate}
            value={this.state.shortAnswer1}>
          </textarea>
        </div>
        <div className="field">
          <label htmlFor="shortAnswer2">2. The second area of my leadership I'd like clarity is:</label>
          <textarea 
            name="shortAnswer2" 
            id="shortAnswer2" 
            rows="4" 
            onChange={this.handleInputUpdate}
            value={this.state.shortAnswer2}>
          </textarea>
        </div>
        <div className="field">
          <label htmlFor="shortAnswer3">3. The third area of my leadership I'd like clarity is:</label>
          <textarea 
            name="shortAnswer3" 
            id="shortAnswer3" 
            rows="4" 
            onChange={this.handleInputUpdate}
            value={this.state.shortAnswer3}>
          </textarea>
        </div>
        <ul className="actions">
          <CheckoutButton amount={this.props.amount} />
        </ul>
      </form>
    );
  }
}

export default Register;