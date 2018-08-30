import React from 'react';

import intro from '../images/intro.jpg';
import about from '../images/about.jpg';
import faq from '../images/faq.jpg';

import ContactForm from './ContactForm';
import Register from './Register';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.today = new Date();
    this.superEarlyBirdCutoff = new Date(2018, 7, 27);
    this.earlyBirdCutoff = new Date(2018, 8, 24);
    this.amount = this.today > this.earlyBirdCutoff ? 12500 : this.today > this.superEarlyBirdCutoff ? 10000 : 7500;
  }

  render() {
    let close = <div className="close" onClick={() => {this.props.onCloseArticle();}}></div>;
    const { article, articleTimeout } = this.props;
    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article
          id="register"
          className={`${article === 'register' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`}
          style={{display:'none'}}
        >
          <h2 className="major">Register</h2>
          {/* <span className="image main"><img src={pic03} alt="" /></span> */}
          <Register
            amount={this.amount}
            closeArticle={this.props.onCloseArticle}
            onNetworkRequestStart={this.props.onNetworkRequestStart}
            onNetworkRequestEnd={this.props.onNetworkRequestEnd}
          />
          {close}
        </article>

        <article
          id="intro"
          className={`${article === 'intro' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`}
          style={{display:'none'}}
        >
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={intro} alt="" /></span>
          <p>Have you ever asked the question, “What does it mean to BE a leader?” Most of us learn a set of leadership tactics (do this, don’t do that) and are then confused when these tactics don’t universally work the way we want them to! In Thrive Leadership we ask the question, <strong>"Who are you <em>being</em> while you’re doing what you’re doing?”</strong> We look at the character of our leadership in addition to our competence.</p>
          <p>This training will help you uncover your assumptions, beliefs and patterns; and examine how they are working both for and against the vision you have for your leadership.  As your trainers, we are committed to rigorously supporting you and standing for new possibilities in your life.</p>
          {close}
        </article>

        <article 
          id="faq"
          className={`${article === 'faq' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`}
          style={{display:'none'}}
        >
          <h2 className="major">FAQ's</h2>
          <span className="image main"><img src={faq} alt="" /></span>
          <h4>Who attends Thrive Leadership?</h4>
          <p>Leaders of all kinds! Business people, pastors, church members, seasoned leaders, brand new leaders, those in transition. Anyone who wants to experience transformation in their family, relationships, life and leadership!</p>
          <h4>What is the structure of the training?</h4>
          <p>Thrive Leadership takes place over two consecutive days: Saturday, October 13th and Sunday, October 14th from 9:00am to 6:00pm. There will be breaks every 2-3 hours. During the training, there will be dynamic lecture, experiential exercises, group discussions, interactive coaching, networking and study materials.</p>
          <h4>Where is the training?</h4>
          <p>Thrive Leadership will be held at 5882 Luckie Ave, Twentynine Palms, CA 92277.</p>
          <h4>What topics are covered?</h4>
          <ul>
            <li>Being a leader vs. Understanding leadership tactics and strategies</li>
            <li>Establishing vision</li>
            <li>Challenging personal and organizational complacency</li>
            <li>Discover assumptions and paradigms</li>
            <li>Become aware of your belief systems</li>
            <li>Giving and receiving feedback</li>
            <li>Measuring your impact</li>
            <li>Exploring possibilities</li>
            <li>Declaring commitments and a plan of action for your next steps toward the future you want</li>
          </ul>
          <h4>What does Thrive Leadership cost?</h4>
          <ul>
            { this.amount <= 7500 ? <li>Super Early Bird (register by August 26th) - $75</li> : ''}
            <li>Early Bird (register by September 23rd) - $100</li>
            <li>General (register by October 11th) - $125</li>
          </ul>
          <p>NOTE: Registration closes Thursday, October 11th at 5:00 pm</p>
          {close}
        </article>

        <article
          id="about"
          className={`${article === 'about' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`}
          style={{display:'none'}}
        >
          <h2 className="major">About</h2>
          <span className="image main"><img src={about} alt="" /></span>
          <p>Thrive Leadership is comprised of 4 certified Transformational Trainers. They are:</p>
          
          <h3>Caitlin Baird</h3>
          <blockquote>"There’s some good in the world and it’s worth fighting for."<br/>Sam, Lord of the Rings.</blockquote>
          <p>Caitlin is committed to pursuing goodness and hope in all circumstances. She is 35 and currently works for a mid-sized healthcare company in Irvine, CA. She is married to Soren and they have plans to expand their family with a puppy this fall.</p>
          
          <h3>Daniel Bosch</h3>
          <blockquote>"Dad, you've always been like a father to me."<br/>Trinity, Daniel’s teenage daughter.</blockquote>
          <p>Daniel is passionate about sparking possibilities in people’s lives. He shares 4 amazing children (Jubilee, Season, Trinity, and Titus) with his wife of 23 years, Linda. Daniel is an 8-year Air Force veteran and currently owns and operates a small business in 29 Palms.</p>
          
          <h3>Juan Garcia</h3>
          <blockquote>"Don't discount our powers; We have made a pass at the infinite."<br/>Robert Frost</blockquote>
          <p>Husband of 1 (Leslie - An Awesome Force of Love), Father of 2 (Zachariah and Joshua – Transformative Agents of Change), Passionately Barefoot (Plus - other Weirdo Tactics), and a Human committed to helping people see the spiritual reference point they/we all are for those around us</p>

          <h3>Rita Mills</h3>
          <blockquote>"I'm not too concerned with what I am going to do. I am more interested in who I am becoming."<br/>Shane Claiborne</blockquote>
          <p>Rita is committed to love, and to creating a peaceful space for exploration in life. She is 38, married to a steadfast and amazing man, Nour, and owns a business that works with children who have processing issues.</p>
          
          {close}
        </article>

        <article
          id="contact"
          className={`${article === 'contact' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`}
          style={{display:'none'}}
        >
          <h2 className="major">Contact</h2>
          <ContactForm
            closeArticle={this.props.onCloseArticle}
            onNetworkRequestStart={this.props.onNetworkRequestStart}
            onNetworkRequestEnd={this.props.onNetworkRequestEnd}
          />
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
};

export default Main;
