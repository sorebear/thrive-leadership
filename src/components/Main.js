import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

import ContactForm from './ContactForm';
import Register from './Register';

import config from '../client-config';

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="register" className={`${this.props.article === 'register' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Register</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <Register amount={100} />
          {close}
        </article>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Have you ever asked the question, “What does it mean to BE a leader?” Most of us learn a set of leadership tactics (do this, don’t do that) and are then confused when these tactics don’t universally work the way we want them to! In Thrive Leadership we ask the question, <strong>"Who are you <em>being</em> while you’re doing what you’re doing?”</strong> We look at the character of our leadership in addition to our competence.</p>
          <p>This training will help you uncover your assumptions, beliefs and patterns; and examine how they are working both for and against the vision you have for your leadership.  As your trainers, we are committed to rigorously supporting you and standing for new possibilities in your life.</p>
          {close}
        </article>

        <article id="faq" className={`${this.props.article === 'faq' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">FAQ's</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <h4>Who attends Thrive Leadership?</h4>
          <p>Leaders of all kinds! Business people, pastors, church members, seasoned leaders, brand new leaders, those in transition. Anyone who wants to experience transformation in their life and leadership!</p>
          <h4>What is the structure of the training?</h4>
          <p>Thrive Leadership takes place over two consecutive days: Friday, October 13th and Saturday, October 14th from 9:00am to 6:30pm. There will be breaks every 2-3 hours. During the training, there will be dynamic lecture, experiential exercises, group discussions, interactive coaching, networking and study materials.</p>
          <h4>What topics are covered?</h4>
          <ul>
            <li>Being a leader vs. Understanding leadership tactics and strategies</li>
            <li>Establishing vision</li>
            <li>Challenging personal and organizational complacency</li>
            <li>Discover assumptions and paradigms</li>
            <li>Giving and receiving feedback</li>
            <li>Measuring your impact</li>
            <li>Declaring commitments and a plan of action for your next steps toward the future you want</li>
          </ul>
          <h4>What does Thrive Leadership cost?</h4>
          <ul>
              <li>Super Early Bird (register by August 19th) - $75</li>
              <li>Early Bird (register by September 23rd) - $100</li>
              <li>General (register by October 11th) - $125</li>
          </ul>
          <p>NOTE: Registration closes Thursday, October 11th at 5:00 pm</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Thrive Leadership is comprised of 4 certified Transformational Trainers. They are:</p>
          <h3>Caitlin Baird</h3>
          <blockquote>“There’s some good in the world and it’s worth fighting for.”<br/>Sam, Lord of the Rings.</blockquote>
          <p>Caitlin is committed to pursuing goodness and hope in all circumstances. She is 35 and currently works for a mid-sized healthcare company in Irvine, CA. She is married to Soren and they have plans to expand their family with a puppy this fall.</p>
          <h3>Daniel Bosch</h3>
          <h3>Juan Garcia</h3>
          <h3>Rita Mills</h3>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <ContactForm />
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main