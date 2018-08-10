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

  handleSubmit() {

  }

  handleNameInput() {

  }

  handleEmailInput() {

  }

  handleMessageInput() {

  }

  handleInputUpdate(e) {
    console.log(e.target.id);
  }

  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit}>
        <div className="field half first">
          <label htmlFor="name">First Name*</label>
          <input
            required
            type="text"
            name="name"
            autoComplete="name"
            id="name"
            onChange={this.handleInputUpdate} value={this.state.name} />
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
            value={this.state.email} />
        </div>
        <div className="field half first">
          <label htmlFor="name">Last Name*</label>
          <input
            required
            type="text"
            name="lastName"
            autoComplete="name"
            id="lastName"
            onChange={this.handleInputUpdate} value={this.state.name} />
        </div>
        <div className="field half">
          <label htmlFor="email">Phone Number*</label>
          <input
            required
            type="text"
            name="phone"
            autoComplete="phone"
            id="phone"
            onChange={this.handleInputUpdate}
            value={this.state.email} />
        </div>
        <div className="field">
          <label htmlFor="shortAnswer1">1. The first area of my leadership I'd like clarity is:</label>
          <textarea name="shortAnswer1" id="shortAnswer1" rows="4" onChange={this.handleInputUpdate} value={this.state.message}></textarea>
        </div>
        <div className="field">
          <label htmlFor="shortAnswer2">2. The second area of my leadership I'd like clarity is:</label>
          <textarea name="shortAnswer2" id="shortAnswer2" rows="4" onChange={this.handleInputUpdate} value={this.state.message}></textarea>
        </div>
        <div className="field">
          <label htmlFor="shortAnswer3">3. The third area of my leadership I'd like clarity is:</label>
          <textarea name="shortAnswer3" id="shortAnswer3" rows="4" onChange={this.handleInputUpdate} value={this.state.message}></textarea>
        </div>
        <ul className="actions">
          <CheckoutButton amount={this.props.amount} />
          {/* <li><input type="reset" value="Reset" /></li> */}
        </ul>
      </form>
    );
  }
}

export default Register;