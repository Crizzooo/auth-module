import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginDispatch, signup, logout } from '../utils/authUtils.js';
import history from '../utils/history.js';
import GoogleButtonGenerator from './googleSignInButton.jsx';

import './loginStyle.scss';

let googleButton = GoogleButtonGenerator();

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    console.log("props? ", props);
    this.state = {};
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.onSignupSubmit = this.onSignupSubmit.bind(this);
    this.logout = this.onLogout.bind(this);
  }

  componentDidMount() {
    console.log('props?', this.props);
  }

  componentWillUnmount() {
  }

  render(props) {
    // console.log('render props: ', props);
    return (
      <div className="main">
        <div className="login">
          { (this.props.user) ?
            <div>
              <h1> You are logged in!</h1>
              <button className="" onClick={this.logout}>Logout</button>
            </div>
            :
            <div>
              <form onSubmit={this.onLoginSubmit}>
                <h6>Login:<br></br></h6>
                <input type="text" name="email" placeholder="your email address" required></input><br></br>
                <br></br>
                <h6>Password:<br></br></h6>
                <input type="text" name="password" placeholder="password" required></input>
                <br></br>
                <br></br>
                <button type="submit" className="">Login</button>
              </form>
              <hr></hr>
              <form onSubmit={this.onSignupSubmit}>
                <h4>Or, Sign Up!</h4>
                <br></br>
                <h6>Email Address:<br></br></h6>
                <input type="text" name="email" type="email" placeholder="desired email" required></input><br></br>
                <br></br>
                <h6>Desired Password:<br></br></h6>
                <input type="text" name="password" type="password" placeholder="password" required></input>
                <br></br>
                <br></br>
                <GoogleButtonGenerator />
                <button type="submit" className="">Sign Up!</button>
              </form>
            </div>
          }
        </div>
      </div>
    );
  }

  onLoginSubmit(event) {
    event.preventDefault();
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value
    };
    console.log('received login credentials: ', credentials);
    this.props.login(credentials);
  }

  onSignupSubmit(event) {
    event.preventDefault();
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value
    };
    console.log('received signup credentials: ', credentials);
    this.props.signup(credentials);
  }

  onLogout() {
    console.log('calling logout with this: ', this);
    this.props.logout(this);
    history.push('test');
  }

}

const mapState = state => {
  console.log('received state: ', state);
  return {
    user: state.auth.user
  };
};

const mapDispatch = { login: loginDispatch, signup: signup, logout: logout };

export default connect(mapState, mapDispatch)(LoginComponent);
