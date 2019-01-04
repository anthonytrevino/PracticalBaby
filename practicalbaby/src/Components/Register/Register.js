import React, { Component } from 'react';
import '../styles.css';

class Register extends Component {
    render() {
        return (
            <div>
                  <form>

                    <h1>Register</h1>
                    <ul id="registration">

                    <li>E-mail address  <input class="form-input" type="email" placeholder="Isabelle@gmail.com" name="emailaddress" required /></li>
                    <li>First Name  <input class="form-input" type="text" placeholder="Isabelle" name="firstname" required /></li>
                    <li>Last Name  <input class="form-input" type="text" placeholder="Smith" name="firstname" required /></li>
                    <li>Username  <input class="form-input" id="txt-input" type="text" placeholder="@Username" required /></li>
                    <li>Password  <input class="form-input" type="password" placeholder="Password" name="password" required />
                      <span><i class="fa fa-eye" aria-hidden="true" type="button" id="eye"></i></span>
                      </li>
                    <li>Confirm Password <input class="form-input" type="password" placeholder="Password" name="password" required /></li>

                    <li><button type="submit">Register</button> </li>
                    </ul>
                  </form>
            </div>
        )
    }
}

export default Register;
