import React, { Component } from 'react';
import '../styles.css';

class LogIn extends Component {
    render() {
        return (
          <div>
            <form id="loginform">
              <h1>Log In</h1>
              <ul id="registration">

                  <li>E-mail address  <input className="form-input" type="email" placeholder="Isabelle@gmail.com" name="emailaddress" required /></li>
                  <li>Username  <input className="form-input" id="txt-input" type="text" placeholder="@Username" required /></li>
                  <li>Password  <input className="form-input" type="password" placeholder="Password" name="password" required /></li>

                  <li><input type="checkbox" name="rememberme"/>Remember me?</li>
                  <li><button type="submit">Log In</button> </li>
              </ul>
                  <button type="submit">Need an account?</button>
            </form>
          </div>
        )
    }
}

export default LogIn;
