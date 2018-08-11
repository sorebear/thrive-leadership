import React from 'react';
import config from '../client-config';
import axios from 'axios';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      messageSent: false,
      sendingError: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleMessageInput = this.handleMessageInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    axios.post(config.email.apiUrl, {
      type: 'newMessage',
      name,
      email,
      message
    }).then(res => {
      console.log('SUCCESS', res);
      this.setState({
        messageSent: true
      })
    }).catch(err => {
      console.log('ERROR', err);
      this.setState({
        sendingError: true
      })
    });
  }

  handleNameInput(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleEmailInput(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleMessageInput(e) {
    this.setState({
      message: e.target.value
    });
  }

  render() {
    return this.state.sendingError ? (
      <div>
        <h3>We're sorry, there was an error sending your message.</h3>
        <p>Please try again later.</p>
        <ul className="actions">
          <li><input type="button" value="Close" onClick={this.props.closeArticle} /></li>
        </ul>
      </div>
    ) : this.state.messageSent ? (
      <div>
        <h3>Thank you! Your message has been sent.</h3>
        <br/>
        <p>You will receive a reply within the next 24 hours.</p>
        <ul className="actions">
          <li><input type="button" value="Close" onClick={this.props.closeArticle} /></li>
        </ul>
    </div>
    ) : (
      <form method="post" onSubmit={this.handleSubmit} action={config.email.apiUrl}>
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            autoComplete="name"
            id="name"
            onChange={this.handleNameInput} value={this.state.name}
          />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            autoComplete="email"
            id="email"
            onChange={this.handleEmailInput}
            value={this.state.email} />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4" onChange={this.handleMessageInput} value={this.state.message}></textarea>
        </div>
        <ul className="actions">
          <li><input type="submit" value="Send Message" className="special" /></li>
          <li><input type="reset" value="Reset" /></li>
        </ul>
      </form>
    );
  }
}

export default ContactForm;
