import React from 'react';

const Header = (props) => (
  <header id="header" style={props.timeout ? {display: 'none'} : {}}>
    <div className="logo">
      <h2>TL</h2>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Thrive Leadership</h1>
        <p>A two-day training experience designed to unleash your inner leader and empower you to personal and professional success.</p>
        <nav className="register">
          <ul>
            <li><a href="javascript:;" onClick={() => {props.onOpenArticle('register');}}>Register</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <nav>
      <ul>
        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro');}}>Intro</a></li>
        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('faq');}}>FAQ</a></li>
        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about');}}>About</a></li>
        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact');}}>Contact</a></li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
};

export default Header;
