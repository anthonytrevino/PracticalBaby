import React, { Component } from 'react';
import '../styles.css';

class Register extends Component {
  state = {
    user: {
      email: '',
      firstname: '',
      lastname: '',
      username: '',
      password: ''
    }
  }


// app.post('/register', function(req, res){
//   let username = req.body.username
//   let password = req.body.password
// })

// nameChangedHandler = (event) => {
//   this.setState({
//     user: {
//       email: '',
//       firstname: event.target.value,
//       lastname: '',
//       username: '',
//       password: ''
//   })
// }

    render() {
        return (
            <div>
                  <form action="/register" method="POST" id="registerform">

                    <h1>Register</h1>
                    <ul id="registration">

                    <li>E-mail address  <input className="form-input" type="email" placeholder="Isabelle@gmail.com" name="emailaddress"  required /></li>
                    <li>First Name  <input className="form-input" type="text" placeholder="Isabelle" name="firstname" required /></li>
                    <li>Last Name  <input className="form-input" type="text" placeholder="Smith" name="lastname" required /></li>
                    <li>Username  <input className="form-input" type="text" placeholder="@Username" required /></li>
                    <li>Password  <input className="form-input" type="password" placeholder="Password" name="password" required /></li>
                    <li>Confirm Password <input className="form-input" type="password" placeholder="Password" name="password" required /></li>

                    <li><button type="submit">Register</button> </li>
                    </ul>
                    <button>I have an account</button>
                  </form>
                  <div>

                  </div>
            </div>
        )
    }
}

export default Register;
