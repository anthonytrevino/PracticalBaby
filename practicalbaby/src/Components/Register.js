import React,{Component} from 'react';

class Register extends Component{
  render(){
    return(
      <div>
        <h1>Register</h1>
        <ul id="registration">
          <li>First Name</li>
          <li>Last Name</li>
          <li>Username</li>
          <li>Password</li>
          <li>Email</li>
          <li><button type="submit">Register</button> </li>
        </ul>
      </div>
    )
  }
}

export default Register;
