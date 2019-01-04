import React, { Component } from 'react';
import '../styles.css';

class LogIn extends Component {
    render() {
        return (
          <div>
            <form>
              <h1>Log In</h1>
              <ul id="registration">

                  <li>E-mail address  <input class="form-input" type="email" placeholder="Isabelle@gmail.com" name="emailaddress" required /></li>
                  <li>Username  <input class="form-input" id="txt-input" type="text" placeholder="@Username" required /></li>
                  <li>Password  <input class="form-input" type="password" placeholder="Password" name="password" required /></li>
                  <li>Confirm Password <input class="form-input" type="password" placeholder="Password" name="password" required /></li>

                  <li><button type="submit">Register</button> </li>
              </ul>
            </form>
          </div>
        )
    }
}

export default LogIn;
